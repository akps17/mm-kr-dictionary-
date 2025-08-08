import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'mmkr.favorites.v1';
const HISTORY_KEY = 'mmkr.history.v1';

export type HistoryItem = { id: string; ts: number };

type LibraryContextType = {
  favoriteIds: Set<string>;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  history: HistoryItem[];
  addToHistory: (id: string) => void;
  clearHistory: () => void;
  isReady: boolean;
};

const LibraryContext = React.createContext<LibraryContextType>({
  favoriteIds: new Set(),
  isFavorite: () => false,
  toggleFavorite: () => undefined,
  history: [],
  addToHistory: () => undefined,
  clearHistory: () => undefined,
  isReady: false,
});

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = React.useState<Set<string>>(new Set());
  const [history, setHistory] = React.useState<HistoryItem[]>([]);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const favRaw = await AsyncStorage.getItem(FAVORITES_KEY);
        if (favRaw) setFavoriteIds(new Set(JSON.parse(favRaw) as string[]));
      } catch {}
      try {
        const hisRaw = await AsyncStorage.getItem(HISTORY_KEY);
        if (hisRaw) setHistory(JSON.parse(hisRaw) as HistoryItem[]);
      } catch {}
      setReady(true);
    })();
  }, []);

  const persistFavorites = React.useCallback((next: Set<string>) => {
    setFavoriteIds(next);
    AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(next))).catch(() => undefined);
  }, []);

  const toggleFavorite = React.useCallback((id: string) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(next))).catch(() => undefined);
      return next;
    });
  }, []);

  const isFavorite = React.useCallback((id: string) => favoriteIds.has(id), [favoriteIds]);

  const addToHistory = React.useCallback((id: string) => {
    setHistory((prev) => {
      const filtered = prev.filter((x) => x.id !== id);
      const next = [{ id, ts: Date.now() }, ...filtered].slice(0, 100);
      AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(next)).catch(() => undefined);
      return next;
    });
  }, []);

  const clearHistory = React.useCallback(() => {
    setHistory([]);
    AsyncStorage.setItem(HISTORY_KEY, JSON.stringify([])).catch(() => undefined);
  }, []);

  return (
    <LibraryContext.Provider
      value={{ favoriteIds, isFavorite, toggleFavorite, history, addToHistory, clearHistory, isReady: ready }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  return React.useContext(LibraryContext);
}

