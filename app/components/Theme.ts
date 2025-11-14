import { useColorScheme } from 'react-native';
import { useSettings } from '../data/SettingsContext';

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
  surface: '#121821',
  textPrimary: '#E5E7EB',
  textSecondary: '#CBD5E1',
  textTertiary: '#94A3B8',
  border: '#1F2937',
  brand: '#60A5FA',
  brandMuted: '#1E3A8A',
  chipBg: '#1E293B',
  chipText: '#93C5FD',
};

export type AppColors = typeof LightColors;

export function useThemedColors(): AppColors {
  const systemScheme = useColorScheme();
  const { settings } = useSettings();
  
  // Determine actual theme based on user preference
  let actualTheme: 'light' | 'dark' = 'light';
  
  if (settings.theme === 'dark') {
    actualTheme = 'dark';
  } else if (settings.theme === 'light') {
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

