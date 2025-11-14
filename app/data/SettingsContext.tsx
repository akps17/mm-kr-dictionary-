import React from 'react';
import type { AppSettings, AppLanguage, SortPriority } from './settings';
import { loadSettings, saveSettings } from './settings';

type SettingsContextType = {
  settings: AppSettings;
  isReady: boolean;
  updateSetting: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void;
};

const defaultSettings: AppSettings = { uiLanguage: 'myanmar', sortBy: 'korean', fontSize: 'default', theme: 'system' };

const SettingsContext = React.createContext<SettingsContextType>({
  settings: defaultSettings,
  isReady: false,
  updateSetting: () => undefined,
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = React.useState<AppSettings>(defaultSettings);
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    loadSettings()
      .then((s) => setSettings(s))
      .finally(() => setReady(true));
  }, []);

  const updateSetting = React.useCallback(<K extends keyof AppSettings>(key: K, value: AppSettings[K]) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value } as AppSettings;
      saveSettings(next).catch(() => undefined);
      return next;
    });
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, isReady, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return React.useContext(SettingsContext);
}

