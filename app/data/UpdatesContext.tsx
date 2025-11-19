import React, { useState, useCallback } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DictionaryEntry } from '../App';

export type UpdateInfo = {
  id: string;
  korean: string;
  myanmar: string;
  english?: string;
  pos?: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'particle' | 'other';
  approvedAt: Date;
  approvedBy: string;
  source: string;
  isNew: boolean; // true if not in local dictionary
};

type UpdatesContextType = {
  availableUpdates: UpdateInfo[];
  isCheckingUpdates: boolean;
  lastUpdateCheck: Date | null;
  checkForUpdates: () => Promise<void>;
  syncUpdatesToLocal: (updates: UpdateInfo[]) => Promise<string>;
  markUpdatesAsApplied: () => Promise<void>;
  getUpdatesSummary: () => { newWords: number; totalUpdates: number };
};

const UpdatesContext = React.createContext<UpdatesContextType | undefined>(undefined);

const LAST_UPDATE_CHECK_KEY = 'mmkr.lastUpdateCheck.v1';
const APPLIED_UPDATES_KEY = 'mmkr.appliedUpdates.v1';

export function UpdatesProvider({ children }: { children: React.ReactNode }) {
  const [availableUpdates, setAvailableUpdates] = useState<UpdateInfo[]>([]);
  const [isCheckingUpdates, setIsCheckingUpdates] = useState(false);
  const [lastUpdateCheck, setLastUpdateCheck] = useState<Date | null>(null);

  // Load last update check time on startup
  React.useEffect(() => {
    (async () => {
      try {
        const lastCheck = await AsyncStorage.getItem(LAST_UPDATE_CHECK_KEY);
        if (lastCheck) {
          setLastUpdateCheck(new Date(lastCheck));
        }
      } catch (e) {
        console.error('Failed to load last update check:', e);
      }
    })();
  }, []);

  const checkForUpdates = useCallback(async () => {
    setIsCheckingUpdates(true);
    
    try {
      console.log('Checking for updates from Firebase...');
      
      // Get all approved words from Firebase dictionary collection
      const dictionaryQuery = query(
        collection(db, 'dictionary'),
        orderBy('addedAt', 'desc')
      );
      
      const snapshot = await getDocs(dictionaryQuery);
      
      if (snapshot.empty) {
        console.log('No words found in Firebase dictionary');
        setAvailableUpdates([]);
        return;
      }

      // Get applied updates to avoid showing them again
      const appliedUpdatesRaw = await AsyncStorage.getItem(APPLIED_UPDATES_KEY);
      const appliedUpdates: string[] = appliedUpdatesRaw ? JSON.parse(appliedUpdatesRaw) : [];

      // Import current local dictionary to check for duplicates
      const { dictionaryEntries } = await import('./dictionary');
      const localKoreanWords = new Set(dictionaryEntries.map(entry => entry.korean));

      const updates: UpdateInfo[] = [];
      
      snapshot.forEach(doc => {
        const data = doc.data();
        const updateId = doc.id;
        
        // Skip if already applied
        if (appliedUpdates.includes(updateId)) {
          return;
        }
        
        // Check if this is a new word (not in local dictionary)
        const isNew = !localKoreanWords.has(data.korean);
        
        const update: UpdateInfo = {
          id: updateId,
          korean: data.korean || '',
          myanmar: data.myanmar || '',
          english: data.english || '',
          pos: data.pos || 'noun',
          approvedAt: data.addedAt?.toDate() || new Date(),
          approvedBy: data.addedBy || 'admin',
          source: data.source || 'unknown',
          isNew
        };
        
        updates.push(update);
      });

      console.log(`Found ${updates.length} available updates`);
      setAvailableUpdates(updates);
      
      // Save last check time
      const now = new Date();
      setLastUpdateCheck(now);
      await AsyncStorage.setItem(LAST_UPDATE_CHECK_KEY, now.toISOString());
      
    } catch (error) {
      console.error('Failed to check for updates:', error);
      throw error;
    } finally {
      setIsCheckingUpdates(false);
    }
  }, []);

  const syncUpdatesToLocal = useCallback(async (updates: UpdateInfo[]): Promise<string> => {
    try {
      console.log(`Syncing ${updates.length} updates to local dictionary...`);
      
      // Import current dictionary
      const { dictionaryEntries } = await import('./dictionary');
      
      // Create new entries for updates
      const newEntries: DictionaryEntry[] = [];
      let nextId = Math.max(...dictionaryEntries.map(e => parseInt(e.id) || 0)) + 1;
      
      updates.forEach(update => {
        // Only add if not already in local dictionary
        const exists = dictionaryEntries.some(entry => 
          entry.korean === update.korean && entry.myanmar === update.myanmar
        );
        
        if (!exists) {
          newEntries.push({
            id: nextId.toString(),
            korean: update.korean,
            myanmar: update.myanmar,
            english: update.english,
            pos: update.pos
          });
          nextId++;
        }
      });

      if (newEntries.length === 0) {
        return 'No new words to add - all updates already exist in local dictionary.';
      }

      // Generate the updated dictionary file content
      const allEntries = [...dictionaryEntries, ...newEntries];
      
      // Sort by Korean alphabetically
      allEntries.sort((a, b) => (a.korean || '').localeCompare(b.korean || ''));
      
      const fileContent = `import type { DictionaryEntry } from '../App';

// Dictionary entries - includes both initial data and approved user submissions
export const dictionaryEntries: DictionaryEntry[] = [
${allEntries.map(entry => {
  const english = entry.english ? `'${entry.english}'` : 'undefined';
  const pos = entry.pos ? `'${entry.pos}'` : 'undefined';
  return `  { id: '${entry.id}', korean: '${entry.korean}', myanmar: '${entry.myanmar}', english: ${english}, pos: ${pos} },`;
}).join('\n')}
];
`;

      // Note: In a real app, you'd write this to the file system
      // For now, we'll just log it and return the content
      console.log('Generated updated dictionary file:');
      console.log(fileContent);
      
      return `Successfully prepared ${newEntries.length} new words for local dictionary update.

📝 To apply these updates:
1. Copy the generated content from the console
2. Replace the content of /Users/aungkoko/mm_kr/app/data/dictionary.ts
3. Restart your app

New words added:
${newEntries.map(entry => `• ${entry.korean} → ${entry.myanmar}`).join('\n')}`;
      
    } catch (error) {
      console.error('Failed to sync updates:', error);
      throw error;
    }
  }, []);

  const markUpdatesAsApplied = useCallback(async () => {
    try {
      // Mark all current updates as applied
      const appliedUpdatesRaw = await AsyncStorage.getItem(APPLIED_UPDATES_KEY);
      const appliedUpdates: string[] = appliedUpdatesRaw ? JSON.parse(appliedUpdatesRaw) : [];
      
      const newAppliedUpdates = [...appliedUpdates, ...availableUpdates.map(u => u.id)];
      
      await AsyncStorage.setItem(APPLIED_UPDATES_KEY, JSON.stringify(newAppliedUpdates));
      
      // Clear available updates
      setAvailableUpdates([]);
      
      console.log(`Marked ${availableUpdates.length} updates as applied`);
    } catch (error) {
      console.error('Failed to mark updates as applied:', error);
      throw error;
    }
  }, [availableUpdates]);

  const getUpdatesSummary = useCallback(() => {
    const newWords = availableUpdates.filter(u => u.isNew).length;
    return {
      newWords,
      totalUpdates: availableUpdates.length
    };
  }, [availableUpdates]);

  const value: UpdatesContextType = {
    availableUpdates,
    isCheckingUpdates,
    lastUpdateCheck,
    checkForUpdates,
    syncUpdatesToLocal,
    markUpdatesAsApplied,
    getUpdatesSummary
  };

  return (
    <UpdatesContext.Provider value={value}>
      {children}
    </UpdatesContext.Provider>
  );
}

export function useUpdates() {
  const context = React.useContext(UpdatesContext);
  if (!context) {
    throw new Error('useUpdates must be used within an UpdatesProvider');
  }
  return context;
}