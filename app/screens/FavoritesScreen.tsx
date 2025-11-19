import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable } from 'react-native';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useLibrary } from '../data/LibraryContext';
import { useDictionarySync, mergeApprovedWords } from '../data/DictionarySync';
import { dictionaryEntries } from '../data/dictionary';
import { i18nLabels } from '../data/settings';
import { SearchBox } from '../components/SearchBox';
import { FavoriteButton } from '../components/FavoriteButton';
import type { DictionaryEntry } from '../types/dictionary';

export function FavoritesScreen({ navigation }: { navigation: any }) {
  const { settings } = useSettings();
  const { approvedWords } = useDictionarySync();
  const C = useThemedColors();
  const labels = i18nLabels[settings.uiLanguage];
  
  const fontScale = React.useMemo(() => {
    switch (settings.fontSize) {
      case 'small':
        return 0.9;
      case 'large':
        return 1.1;
      default:
        return 1.0;
    }
  }, [settings.fontSize]);

  const { favoriteIds } = useLibrary();

  // Merge local dictionary with approved words
  const mergedDictionary = React.useMemo(() => {
    return mergeApprovedWords(dictionaryEntries, approvedWords);
  }, [approvedWords]);

  // Filter favorites from merged dictionary
  const items = mergedDictionary.filter((d) => favoriteIds.has(d.id));
  const itemsSorted = [...items].sort((a, b) => (a.korean || '').localeCompare(b.korean || '', 'ko', { sensitivity: 'base' }));

  // Search functionality
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter items based on search query
  const filteredItems = React.useMemo(() => {
    if (!searchQuery.trim()) return itemsSorted;
    
    const query = searchQuery.toLowerCase().trim();
    return itemsSorted.filter(item => 
      item.korean.toLowerCase().includes(query) ||
      item.myanmar.toLowerCase().includes(query) ||
      (item.english?.toLowerCase() || '').includes(query)
    );
  }, [itemsSorted, searchQuery]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <View style={{ padding: 16, paddingBottom: 0 }}>
        <Text style={[styles.title, { color: C.textPrimary, marginBottom: 12 }]}>{labels.navFavorites}</Text>
        <SearchBox
          value={searchQuery}
          placeholder={labels.searchPlaceholder}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
      </View>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.listContent, { paddingHorizontal: 16 }]}
        renderItem={({ item }) => (
          <View style={[styles.row, styles.rowTablet, { backgroundColor: C.surface }]}>
            <Pressable
              onPress={() => navigation.navigate('WordDetail', { word: item })}
              style={({ pressed }) => [
                styles.rowTextGroup,
                { opacity: pressed ? 0.7 : 1 }
              ]}
            >
              <View style={styles.rowHeader}>
                <Text style={[styles.korean, { fontSize: styles.korean.fontSize * fontScale, color: C.textPrimary, fontFamily: 'NotoSansMyanmar_700Bold' }]}>
                  {item.korean}
                </Text>
                {item.pos && (
                  <View style={styles.posChip}>
                    <Text style={styles.posText}>{item.pos}</Text>
                  </View>
                )}
              </View>
              <Text 
                allowFontScaling={false} 
                style={[
                  styles.myanmar, 
                  { 
                    fontSize: styles.myanmar.fontSize * fontScale,
                    color: C.textSecondary,
                    fontFamily: 'NotoSansMyanmar_400Regular'
                  }
                ]}
              >
                {item.myanmar}
              </Text>
              {!!item.english && (
                <Text style={[styles.englishGloss, { fontSize: styles.englishGloss.fontSize * fontScale, color: C.textTertiary }]}>
                  {item.english}
                </Text>
              )}
            </Pressable>
            <FavoriteButton entryId={item.id} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={[styles.emptyStateText, { color: C.textTertiary }]}>
              {searchQuery.trim() 
                ? (settings.uiLanguage === 'myanmar' 
                    ? `"${searchQuery}" နှင့် ကိုက်ညီသော ကြိုက်နှစ်သက်သော စကားလုံးများ မရှိပါ`
                    : settings.uiLanguage === 'korean'
                    ? `"${searchQuery}"와 일치하는 즐겨찾기가 없습니다`
                    : `No favorites matching "${searchQuery}"`)
                : (settings.uiLanguage === 'myanmar'
                    ? 'ကြိုက်နှစ်သက်သော စကားလုံးများ မရှိသေးပါ'
                    : settings.uiLanguage === 'korean'
                    ? '아직 즐겨찾기가 없습니다'
                    : 'No favorites yet')}
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 24,
  },
  row: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
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
    fontWeight: '600',
  },
  myanmar: {
    marginTop: 2,
    fontSize: 13,
    lineHeight: 30,
  },
  englishGloss: {
    marginTop: 2,
    fontSize: 12,
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
    fontSize: 14,
  },
});

