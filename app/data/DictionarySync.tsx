import React, { useEffect } from 'react';
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { notificationManager } from '../components/NotificationBanner';
import type { WordLevel, Example } from '../types/dictionary';



//approved words section(update word feature)
export type ApprovedWord = {
  id: string;
  korean: string;
  myanmar: string;
  english?: string;
  pos?: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'particle' | 'other';
  level?: WordLevel;
  examples?: Example[];
  approvedAt: Date;
  approvedBy: string;
};

const APPROVED_WORDS_KEY = 'mmkr.approved_words.v1';
const LAST_SYNC_KEY = 'mmkr.last_sync.v1';

type DictionarySyncContextType = {
  approvedWords: ApprovedWord[];
  syncCount: number;
  lastSync: Date | null;
  isLoading: boolean;
};

const DictionarySyncContext = React.createContext<DictionarySyncContextType>({
  approvedWords: [],
  syncCount: 0,
  lastSync: null,
  isLoading: true,
});

export function DictionarySyncProvider({ children }: { children: React.ReactNode }) {
  const [approvedWords, setApprovedWords] = React.useState<ApprovedWord[]>([]);
  const [syncCount, setSyncCount] = React.useState(0);
  const [lastSync, setLastSync] = React.useState<Date | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Load cached approved words on startup
  useEffect(() => {
    loadCachedWords();
  }, []);

    // Set up real-time listener for dictionary words
  useEffect(() => {
    let mounted = true;
    let previousWordIds = new Set<string>();
    console.log('Setting up Firebase dictionary listener...');

    const q = query(
      collection(db, 'dictionary')
    );

    // Add debounce to prevent rapid updates
    let debounceTimeout: NodeJS.Timeout;

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        // Clear any pending debounce
        if (debounceTimeout) clearTimeout(debounceTimeout);

        // Debounce the update
        debounceTimeout = setTimeout(() => {
          if (!mounted) return;
          
          console.log('Firebase snapshot received, processing...', snapshot.size, 'documents');
          const newApprovedWords: ApprovedWord[] = [];
          const newlyApprovedWords: ApprovedWord[] = [];
          const currentWordIds = new Set<string>();
        
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log('Processing document:', doc.id, data);
          
          const approvedWord: ApprovedWord = {
            id: doc.id,
            korean: data.korean || '',
            myanmar: data.myanmar || '',
            english: data.english || '',
            pos: data.pos || 'noun',
            level: data.level || undefined,
            examples: Array.isArray(data.examples) ? data.examples : [],
            approvedAt: data.addedAt?.toDate() || new Date(),
            approvedBy: data.addedBy || 'admin',
          };
          
          newApprovedWords.push(approvedWord);
          currentWordIds.add(doc.id);
          
          // Check if this is a newly added word (not in previous list)
          if (!previousWordIds.has(doc.id) && previousWordIds.size > 0) {
            newlyApprovedWords.push(approvedWord);
            console.log('New word detected:', approvedWord.korean, '→', approvedWord.myanmar);
          }
        });

        // Show notifications for newly added words (only if not initial load)
        if (newlyApprovedWords.length > 0 && previousWordIds.size > 0) {
          // Show individual notifications for first few words
          newlyApprovedWords.slice(0, 3).forEach(word => {
            notificationManager.show({
              message: `📚 New word: ${word.korean} → ${word.myanmar}`,
              type: 'success',
              duration: 5000,
            });
          });

          // Show summary if more than 3 words
          if (newlyApprovedWords.length > 3) {
            notificationManager.show({
              message: `🎉 ${newlyApprovedWords.length} new words added to dictionary!`,
              type: 'info',
              duration: 6000,
            });
          } else if (newlyApprovedWords.length > 1) {
            notificationManager.show({
              message: `🎉 ${newlyApprovedWords.length} new words added!`,
              type: 'info',
              duration: 5000,
            });
          }
        }

        // Update previous word IDs for next comparison
        previousWordIds = currentWordIds;

        // Update state
        setApprovedWords(newApprovedWords);
        setSyncCount(newApprovedWords.length);
        setLastSync(new Date());
        setIsLoading(false);

        // Cache the approved words
        cacheApprovedWords(newApprovedWords);
        console.log(`Synced ${newApprovedWords.length} dictionary words from Firebase`);
          }, 500); // 500ms debounce
        },
        (error) => {
          console.error('Firebase listener error:', error);
          console.error('Error code:', error.code);
          console.error('Error message:', error.message);
        
        notificationManager.show({
          message: `Failed to sync dictionary: ${error.message}`,
          type: 'error',
          duration: 6000,
        });
        setIsLoading(false);
      }
    );

    console.log('Firebase listener setup complete');
    
    return () => {
      console.log('Cleaning up Firebase listener...');
      mounted = false;
      if (debounceTimeout) clearTimeout(debounceTimeout);
      unsubscribe();
    };
  }, []); // Empty dependency array - listener runs once and tracks changes internally

  const loadCachedWords = async () => {
    try {
      const [cachedWords, cachedSync] = await Promise.all([
        AsyncStorage.getItem(APPROVED_WORDS_KEY),
        AsyncStorage.getItem(LAST_SYNC_KEY)
      ]);

      if (cachedWords) {
        const words = JSON.parse(cachedWords) as ApprovedWord[];
        setApprovedWords(words);
        setSyncCount(words.length);
      }

      if (cachedSync) {
        setLastSync(new Date(cachedSync));
      }
    } catch (error) {
      console.error('Error loading cached approved words:', error);
    }
  };

  const cacheApprovedWords = async (words: ApprovedWord[]) => {
    try {
      await Promise.all([
        AsyncStorage.setItem(APPROVED_WORDS_KEY, JSON.stringify(words)),
        AsyncStorage.setItem(LAST_SYNC_KEY, new Date().toISOString())
      ]);
    } catch (error) {
      console.error('Error caching approved words:', error);
    }
  };

  const value: DictionarySyncContextType = {
    approvedWords,
    syncCount,
    lastSync,
    isLoading,
  };

  return (
    <DictionarySyncContext.Provider value={value}>
      {children}
    </DictionarySyncContext.Provider>
  );
}

export function useDictionarySync() {
  const context = React.useContext(DictionarySyncContext);
  if (!context) {
    throw new Error('useDictionarySync must be used within a DictionarySyncProvider');
  }
  return context;
}

// Function to merge approved words with existing dictionary
export function mergeApprovedWords(
  existingDictionary: any[],
  approvedWords: ApprovedWord[]
): any[] {
  const merged = [...existingDictionary];
  
  approvedWords.forEach((approvedWord) => {
    const existingIndex = merged.findIndex(
      (entry) =>
        entry.korean === approvedWord.korean &&
        entry.myanmar === approvedWord.myanmar
    );

    if (existingIndex >= 0) {
      // Merge extra fields into existing entry when missing
      const current = merged[existingIndex];
      merged[existingIndex] = {
        ...current,
        english: current.english || approvedWord.english,
        pos: current.pos || approvedWord.pos || 'noun',
        level: current.level || approvedWord.level,
        examples: (current.examples && current.examples.length > 0)
          ? current.examples
          : (approvedWord.examples || []),
      };
      return;
    }

    merged.push({
      id: `approved_${approvedWord.id}`,
      korean: approvedWord.korean,
      myanmar: approvedWord.myanmar,
      english: approvedWord.english,
      pos: approvedWord.pos || 'noun',
      level: approvedWord.level,
      examples: approvedWord.examples || [],
    });
  });
  
  // Filter out entries without korean property and sort safely
  // Also ensure myanmar exists (required field)
  const validEntries = merged.filter(entry => {
    if (!entry) return false;
    if (!entry.korean || typeof entry.korean !== 'string' || entry.korean.trim().length === 0) {
      console.warn('Entry filtered: missing or invalid korean', entry.id, entry);
      return false;
    }
    if (!entry.myanmar || typeof entry.myanmar !== 'string' || entry.myanmar.trim().length === 0) {
      console.warn('Entry filtered: missing or invalid myanmar', entry.id, entry.korean);
      return false;
    }
    return true;
  });
  
  console.log(`Merged dictionary: ${merged.length} total, ${validEntries.length} valid after filtering`);
  return validEntries.sort((a, b) => (a.korean || '').localeCompare(b.korean || ''));
}