import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export type PendingEntry = {
  id: string;
  korean: string;
  myanmar: string;
  english?: string;
  pos?: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'particle' | 'other';
  createdAt: number;
  userEmail?: string;
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

  const persist = React.useCallback(async (next: PendingEntry[]) => {
    setPendingEntries(next);
    await AsyncStorage.setItem(KEY, JSON.stringify(next));
  }, []);

  const submitEntry = React.useCallback<Ctx['submitEntry']>(async (e) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const entry: PendingEntry = { id, createdAt: Date.now(), ...e };
    
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
        pos: e.pos || '',
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

