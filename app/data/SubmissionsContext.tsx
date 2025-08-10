import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, addDoc, serverTimestamp, query, where, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

import type { WordLevel, Example } from '../types/dictionary';

export type PendingEntry = {
  id: string;
  korean: string;
  myanmar: string;
  english?: string;
  pos?: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'particle' | 'other';
  level?: WordLevel;
  examples?: Example[];
  createdAt: number;
  userEmail?: string;
  status?: 'pending' | 'approved' | 'rejected';
  firebaseId?: string;
};

const KEY = 'mmkr.submissions.v1';

type Ctx = {
  pendingEntries: PendingEntry[];
  submitEntry: (e: Omit<PendingEntry, 'id' | 'createdAt'>) => Promise<void>;
  clearAll: () => Promise<void>;
  isReady: boolean;
};

const SubmissionsContext = React.createContext<Ctx>({
  pendingEntries: [],
  submitEntry: async () => undefined,
  clearAll: async () => undefined,
  isReady: false,
});

export function SubmissionsProvider({ children }: { children: React.ReactNode }) {
  const [pendingEntries, setPendingEntries] = React.useState<PendingEntry[]>([]);
  const [ready, setReady] = React.useState(false);

  // Load local submissions
  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY);
        if (raw) setPendingEntries(JSON.parse(raw) as PendingEntry[]);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  // Listen for status updates from Firebase
  React.useEffect(() => {
    // Create a query for all pending words that match our local IDs
    const localIds = pendingEntries.map(e => e.id);
    if (localIds.length === 0) return;

    const q = query(
      collection(db, 'pending_words'),
      where('localId', 'in', localIds)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let hasUpdates = false;
      const updates = [...pendingEntries];

      snapshot.forEach(doc => {
        const data = doc.data();
        const localEntry = updates.find(e => e.id === data.localId);
        if (localEntry && (localEntry.status !== data.status || !localEntry.firebaseId)) {
          hasUpdates = true;
          localEntry.status = data.status;
          localEntry.firebaseId = doc.id;
        }
      });

      if (hasUpdates) {
        persist(updates);
      }
    });

    return () => unsubscribe();
  }, [pendingEntries]);

  const persist = React.useCallback(async (next: PendingEntry[]) => {
    setPendingEntries(next);
    await AsyncStorage.setItem(KEY, JSON.stringify(next));
  }, []);

  const submitEntry = React.useCallback<Ctx['submitEntry']>(async (e) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const entry: PendingEntry = { id, createdAt: Date.now(), status: 'pending', ...e };
    
    // Save locally first
    await persist([entry, ...pendingEntries]);
    
    // Also save to Firebase for admin review
    try {
      // Ensure proper UTF-8 encoding for Myanmar and Korean text
      const cleanKorean = (e.korean || '').normalize('NFC');
      const cleanMyanmar = (e.myanmar || '').normalize('NFC');
      
                        await addDoc(collection(db, 'pending_words'), {
                    korean: cleanKorean,
                    myanmar: cleanMyanmar,
                    english: e.english || '',
                    pos: e.pos || null,
                    level: e.level || null,
                    examples: e.examples?.filter(ex => ex && ex.korean && ex.myanmar).map(ex => ({
                      korean: ex.korean.normalize('NFC'),
                      myanmar: ex.myanmar.normalize('NFC'),
                      english: ex.english || ''
                    })) || [],
                    status: 'pending',
                    submittedAt: serverTimestamp(),
                    submittedBy: e.userEmail || 'anonymous',
                    localId: id,
                  });
      console.log('Word submitted to Firebase successfully');
    } catch (error) {
      console.error('Failed to submit to Firebase:', error);
      // Still keep locally even if Firebase fails
    }
  }, [pendingEntries, persist]);

  const clearAll = React.useCallback(async () => {
    await persist([]);
  }, [persist]);

  return (
    <SubmissionsContext.Provider value={{ pendingEntries, submitEntry, clearAll, isReady: ready }}>
      {children}
    </SubmissionsContext.Provider>
  );
}

export function useSubmissions() {
  return React.useContext(SubmissionsContext);
}

