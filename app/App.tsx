import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { dictionaryEntries } from './data/dictionary';
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
  const [queryText, setQueryText] = useState<string>('');
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

    const sorted = [...filtered].sort((a, b) =>
      a.korean.localeCompare(b.korean, 'ko', { sensitivity: 'base' })
    );
    return sorted;
  }, [queryText]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={[styles.container, { paddingHorizontal: horizontalPadding }]}>
        <View style={[styles.content, { maxWidth: contentMaxWidth }]}>
          <Text style={[styles.title, isTabletLike && styles.titleTablet]}>Myanmar–Korean–English Dictionary</Text>
          <SearchBox
            value={queryText}
            placeholder="Search by Korean, Myanmar, or English"
            onChangeText={setQueryText}
            onClear={() => setQueryText('')}
          />
          <FlatList
            data={filteredAndSortedEntries}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <View style={[styles.row, isTabletLike && styles.rowTablet]}>
                <View style={styles.rowTextGroup}>
                  <View style={styles.rowHeader}>
                    <Text style={[styles.korean, isTabletLike && styles.koreanTablet]}>{item.korean}</Text>
                    {item.pos && (
                      <View style={styles.posChip}>
                        <Text style={styles.posText}>{item.pos}</Text>
                      </View>
                    )}
                  </View>
                  <Text style={[styles.myanmar, isTabletLike && styles.myanmarTablet]}>{item.myanmar}</Text>
                  {!!item.english && <Text style={styles.englishGloss}>{item.english}</Text>}
                </View>
              </View>
            )}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <Text style={styles.emptyStateText}>No results</Text>
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

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeSearchScreen} />
        <Drawer.Screen name="Practice" component={PracticeTabs} />
        <Drawer.Screen name="Favorites" children={() => <PlaceholderScreen title="Favorites" />} />
        <Drawer.Screen name="History" children={() => <PlaceholderScreen title="History" />} />
        <Drawer.Screen name="Settings" children={() => <PlaceholderScreen title="Settings" />} />
        <Drawer.Screen name="Check Updates" children={() => <PlaceholderScreen title="Check Updates" />} />
        <Drawer.Screen name="Input New Words" children={() => <PlaceholderScreen title="Input New Words" />} />
        <Drawer.Screen name="About" children={() => <PlaceholderScreen title="About" />} />
      </Drawer.Navigator>
    </NavigationContainer>
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
});
