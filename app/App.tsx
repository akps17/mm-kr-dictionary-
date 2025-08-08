import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts as useMyanmarFonts, NotoSansMyanmar_400Regular, NotoSansMyanmar_700Bold } from '@expo-google-fonts/noto-sans-myanmar';
import { dictionaryEntries } from './data/dictionary';
import { useThemedColors } from './components/Theme';
import { AppLanguage, SortPriority, AppSettings, i18nLabels, NATIVE_LANGUAGE_NAME } from './data/settings';
import { SettingsProvider, useSettings } from './data/SettingsContext';
import { SearchBox } from './components/SearchBox';

export type DictionaryEntry = {
  id: string;
  korean: string;
  myanmar: string;
  english?: string;
  pos?: 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'particle' | 'other';
};

function useResponsiveLayout() {
  const { width } = useWindowDimensions();
  const isTabletLike = width >= 768;
  const horizontalPadding = isTabletLike ? 32 : 16;
  // Wider content on web to lengthen the SearchBox visually
  const isWeb = typeof navigator !== 'undefined' && /Chrome|Safari|Firefox|Edge/i.test(navigator.userAgent);
  const maxWidthCap = isWeb ? 1200 : 900;
  const contentMaxWidth = Math.min(width, maxWidthCap);
  return { isTabletLike, horizontalPadding, contentMaxWidth };
}

function HomeSearchScreen() {
  const C = useThemedColors();
  const [queryText, setQueryText] = useState<string>('');
  const { settings } = useSettings();
  const { isTabletLike, horizontalPadding, contentMaxWidth } = useResponsiveLayout();

  const filteredAndSortedEntries = useMemo<DictionaryEntry[]>(() => {
    const normalizedQuery = queryText.trim().toLowerCase();
    const filtered = normalizedQuery.length === 0
      ? dictionaryEntries
      : dictionaryEntries.filter((entry) => {
          const korean = entry.korean.toLowerCase();
          const myanmar = entry.myanmar.toLowerCase();
          const english = (entry.english ?? '').toLowerCase();
          return (
            korean.includes(normalizedQuery) ||
            myanmar.includes(normalizedQuery) ||
            english.includes(normalizedQuery)
          );
        });

    const getValue = (entry: DictionaryEntry, field: SortPriority): string => {
      switch (field) {
        case 'korean':
          return entry.korean;
        case 'myanmar':
          return entry.myanmar;
        case 'english':
          return entry.english ?? '';
        default:
          return '';
      }
    };
    const sorted = [...filtered].sort((a, b) => {
      const key: SortPriority = settings.sortBy;
      const locale = key === 'korean' ? 'ko' : undefined;
      return getValue(a, key).localeCompare(getValue(b, key), locale, { sensitivity: 'base' });
    });
    return sorted;
  }, [queryText, settings.sortBy]);

  const labels = i18nLabels[settings.uiLanguage];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <StatusBar style="auto" />
      <View style={[styles.container, { paddingHorizontal: horizontalPadding }]}>
        <View style={[styles.content, { maxWidth: contentMaxWidth }]}>
          <Text style={[styles.title, isTabletLike && styles.titleTablet, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_700Bold' }]}>{labels.title}</Text>
          <SearchBox
            value={queryText}
            placeholder={labels.searchPlaceholder}
            onChangeText={setQueryText}
            onClear={() => setQueryText('')}
          />
          <FlatList
            data={filteredAndSortedEntries}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <View style={[styles.row, isTabletLike && styles.rowTablet, { backgroundColor: C.surface }]}> 
                <View style={styles.rowTextGroup}>
                  <View style={styles.rowHeader}>
                    <Text style={[styles.korean, isTabletLike && styles.koreanTablet, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_700Bold' }]}>{item.korean}</Text>
                    {item.pos && (
                      <View style={[styles.posChip] }>
                        <Text style={[styles.posText]}>{item.pos}</Text>
                      </View>
                    )}
                  </View>
                  <Text style={[styles.myanmar, isTabletLike && styles.myanmarTablet, { color: C.textSecondary, fontFamily: 'NotoSansMyanmar_400Regular' }]}>{item.myanmar}</Text>
                  {!!item.english && <Text style={[styles.englishGloss, { color: C.textTertiary }]}>{item.english}</Text>}
                </View>
              </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <Text style={[styles.emptyStateText, { color: C.textTertiary }]}>{labels.noResults}</Text>
              </View>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { paddingHorizontal: 16 }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: '#6B7280' }}>Coming soon…</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
function PracticeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Word Quiz" children={() => <PlaceholderScreen title="Word Quiz" />} />
      <Tab.Screen name="Voice to Text" children={() => <PlaceholderScreen title="Voice to Text" />} />
    </Tab.Navigator>
  );
}

type RootDrawerParamList = {
  Home: undefined;
  Practice: undefined;
  Favorites: undefined;
  History: undefined;
  Settings: undefined;
  'Check Updates': undefined;
  'Input New Words': undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function AppDrawerContent(props: any) {
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label={labels.navHome} onPress={() => props.navigation.navigate('Home')} icon={({color, size}) => (<Ionicons name="home-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navPractice} onPress={() => props.navigation.navigate('Practice')} icon={({color, size}) => (<Ionicons name="school-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navFavorites} onPress={() => props.navigation.navigate('Favorites')} icon={({color, size}) => (<Ionicons name="heart-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navHistory} onPress={() => props.navigation.navigate('History')} icon={({color, size}) => (<Ionicons name="time-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navSettings} onPress={() => props.navigation.navigate('Settings')} icon={({color, size}) => (<Ionicons name="settings-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navCheckUpdates} onPress={() => props.navigation.navigate('Check Updates')} icon={({color, size}) => (<Ionicons name="sync-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navInputNewWords} onPress={() => props.navigation.navigate('Input New Words')} icon={({color, size}) => (<Ionicons name="add-circle-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navAbout} onPress={() => props.navigation.navigate('About')} icon={({color, size}) => (<Ionicons name="information-circle-outline" size={size} color={color} />)} />
    </DrawerContentScrollView>
  );
}

function AppNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <AppDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeSearchScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="home-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Practice" component={PracticeTabs} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="school-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Favorites" children={() => <PlaceholderScreen title="Favorites" />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="heart-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="History" children={() => <PlaceholderScreen title="History" />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="time-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Settings" children={() => <SettingsScreen />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="settings-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Check Updates" children={() => <PlaceholderScreen title="Check Updates" />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="sync-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Input New Words" children={() => <PlaceholderScreen title="Input New Words" />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="add-circle-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="About" children={() => <PlaceholderScreen title="About" />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="information-circle-outline" size={size} color={color} />) }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useMyanmarFonts({ NotoSansMyanmar_400Regular, NotoSansMyanmar_700Bold });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SettingsProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SettingsProvider>
  );
}

function SettingsScreen() {
  const { settings, updateSetting } = useSettings();

  const C = useThemedColors();
  const Check = ({ checked }: { checked: boolean }) => (
    <View style={[styles.checkbox, { borderColor: C.border, backgroundColor: checked ? C.brand : 'transparent' }]} />
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }] }>
      <View style={[styles.container, { paddingHorizontal: 16 }]}>        
        <Text style={[styles.title, { color: C.textPrimary }]}>Settings</Text>
        <View style={[styles.card, { borderColor: C.border, backgroundColor: C.surface }]}>
          <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>Language</Text>
          {(['myanmar','korean','english'] as AppLanguage[]).map((lang) => (
            <View key={lang} style={styles.optionRow}>
              <Text style={[styles.optionLabel, { color: C.textPrimary }]}>{NATIVE_LANGUAGE_NAME[lang]}</Text>
              <Text onPress={() => updateSetting('uiLanguage', lang)}>
                <Check checked={settings.uiLanguage === lang} />
              </Text>
            </View>
          ))}
          <View style={[styles.divider, { backgroundColor: C.border }]} />
          <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>Sort priority</Text>
          {(['korean','myanmar','english'] as SortPriority[]).map((sort) => (
            <View key={sort} style={styles.optionRow}>
              <Text style={[styles.optionLabel, { color: C.textPrimary }]}>{sort}</Text>
              <Text onPress={() => updateSetting('sortBy', sort)}>
                <Check checked={settings.sortBy === sort} />
              </Text>
            </View>
          ))}
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  content: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 12,
  },
  titleTablet: {
    fontSize: 26,
    marginTop: 12,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
  row: {
    backgroundColor: '#f7f7f8',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTablet: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowTextGroup: {
    flex: 1,
  },
  korean: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  koreanTablet: {
    fontSize: 18,
  },
  myanmar: {
    marginTop: 2,
    fontSize: 15,
    color: '#374151',
  },
  myanmarTablet: {
    fontSize: 17,
  },
  englishGloss: {
    marginTop: 2,
    fontSize: 13,
    color: '#6B7280',
  },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  posChip: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: '#EEF2FF',
  },
  posText: {
    fontSize: 12,
    color: '#4338CA',
    textTransform: 'capitalize',
  },
  emptyState: {
    paddingTop: 24,
    alignItems: 'center',
  },
  emptyStateText: {
    color: '#6B7280',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E7EB',
    padding: 12,
    gap: 12,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E5E7EB',
  },
  sectionTitle: {
    fontWeight: '600',
    opacity: 0.8,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  optionLabel: {
    fontSize: 16,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
  },
});
