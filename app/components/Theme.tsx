import React from 'react';
import { useColorScheme } from 'react-native';
import type { ThemeMode } from '../data/settings';

export const LightColors = {
  background: '#FFFFFF',
  surface: '#F7F7F8',
  textPrimary: '#111827',
  textSecondary: '#374151',
  textTertiary: '#6B7280',
  border: '#E5E7EB',
  brand: '#2563EB',
  brandMuted: '#DBEAFE',
  chipBg: '#EEF2FF',
  chipText: '#4338CA',
};

export const DarkColors = {
  background: '#0B0F14',
  surface: '#1F2937',
  textPrimary: '#F3F4F6',
  textSecondary: '#D1D5DB',
  textTertiary: '#9CA3AF',
  border: '#374151',
  brand: '#60A5FA',
  brandMuted: '#1E3A8A',
  chipBg: '#374151',
  chipText: '#93C5FD',
};

export type AppColors = typeof LightColors;

// Theme Context to avoid circular dependency
type ThemeContextType = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => {},
});

export function ThemeProvider({ children, theme }: { children: React.ReactNode; theme: ThemeMode }) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeMode>(theme);
  
  React.useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemedColors(): AppColors {
  const systemScheme = useColorScheme();
  const { theme } = React.useContext(ThemeContext);
  
  // Determine actual theme based on user preference
  let actualTheme: 'light' | 'dark' = 'light';
  
  if (theme === 'dark') {
    actualTheme = 'dark';
  } else if (theme === 'light') {
    actualTheme = 'light';
  } else {
    // 'system' - follow system preference
    actualTheme = systemScheme === 'dark' ? 'dark' : 'light';
  }
  
  return actualTheme === 'dark' ? DarkColors : LightColors;
}

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
};

