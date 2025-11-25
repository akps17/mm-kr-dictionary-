import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ScrollView,
  Linking,
  Pressable,
  Image,
  TextInput,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useFonts as useMyanmarFonts, NotoSansMyanmar_400Regular, NotoSansMyanmar_700Bold } from '@expo-google-fonts/noto-sans-myanmar';
import { dictionaryEntries } from './data/dictionary';
import type { DictionaryEntry as SharedDictionaryEntry } from './types/dictionary';
import { useThemedColors, ThemeProvider } from './components/Theme';
import { AppLanguage, SortPriority, AppSettings, i18nLabels, NATIVE_LANGUAGE_NAME, FontSize } from './data/settings';
import { SettingsProvider, useSettings } from './data/SettingsContext';
import { LibraryProvider, useLibrary } from './data/LibraryContext';
import { SubmissionsProvider, useSubmissions } from './data/SubmissionsContext';
import { AuthProvider, useAuth } from './data/AuthContext';
import { UserPointsProvider, useUserPoints } from './data/UserPointsContext';
import { AuthScreen } from './screens/AuthScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { LevelSelectionScreen } from './screens/LevelSelectionScreen';
import { KoreanWritingScreen } from './screens/KoreanWritingScreen';
import { BurmeseWritingScreen } from './screens/BurmeseWritingScreen';
import { AIChatScreen } from './screens/AIChatScreen';
import { TranslateScreen } from './screens/TranslateScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ThemeScreen } from './screens/ThemeScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { TOPIKTestScreen } from './screens/TOPIKTestScreen';
import { SubmitWordScreen } from './screens/SubmitWordScreen';
import { CheckUpdatesScreen } from './screens/CheckUpdatesScreen';
import { MultipleChoiceQuizScreen } from './screens/MultipleChoiceQuizScreen';
import { TrueFalseQuizScreen } from './screens/TrueFalseQuizScreen';
import { FlashcardsScreen } from './screens/FlashcardsScreen';
import { VoiceToTextScreen } from './screens/VoiceToTextScreen';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { FavoriteButton } from './components/FavoriteButton';
import { useFeatureAccess } from './hooks/useFeatureAccess';
import { DictionarySyncProvider, useDictionarySync, mergeApprovedWords } from './data/DictionarySync';
import { UpdatesProvider, useUpdates } from './data/UpdatesContext';
import { SearchBox } from './components/SearchBox';
import { NotificationContainer } from './components/NotificationBanner';
import { db } from './data/firebase';
import { transcribeWithOpenAI } from './data/stt';
import { generateMCQ, generateTF, generateFlashcards, type DifficultyLevel } from './data/quiz';
import { WordInputForm } from './components/WordInputForm';
import { WordDetailScreen } from './screens/WordDetailScreen';
import { OpenAIChatProvider, type ChatMessage } from './data/ai';

export type DictionaryEntry = SharedDictionaryEntry;

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

function HomeStack() {
  const C = useThemedColors();
  const { settings } = useSettings();
  
  // For web, explicitly set header button color based on theme for Home tab
  // Handle 'system' theme as fallback (should be migrated, but just in case)
  const effectiveTheme = settings.theme === 'system' ? 'light' : settings.theme;
  const headerButtonColor = Platform.OS === 'web'
    ? (effectiveTheme === 'light' ? '#111827' : '#F3F4F6') // Black for light, white for dark
    : C.textPrimary; // For mobile, use theme color
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: C.surface,
        },
        headerTintColor: headerButtonColor,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen 
        name="HomeSearch" 
        component={HomeSearchScreen} 
        options={{ 
          headerShown: false,
          title: 'Myanmar Korean Dictionary',
        }}
      />
      <Stack.Screen 
        name="WordDetail" 
        component={WordDetailScreen}
        options={{
          headerTitle: '',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}

// Favorites Stack Navigator
const FavoritesStackNavigator = createNativeStackNavigator();
function FavoritesStack() {
  const C = useThemedColors();
  
  return (
    <FavoritesStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: C.surface,
        },
        headerTintColor: C.textPrimary,
        headerShadowVisible: false,
      }}
    >
      <FavoritesStackNavigator.Screen 
        name="FavoritesList" 
        component={FavoritesScreen} 
        options={{ headerShown: false }}
      />
      <FavoritesStackNavigator.Screen 
        name="WordDetail" 
        component={WordDetailScreen as any}
        options={{
          headerTitle: '',
          headerBackTitle: 'Back',
        }}
      />
    </FavoritesStackNavigator.Navigator>
  );
}

function HomeSearchScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const [queryText, setQueryText] = useState<string>('');
  const { settings } = useSettings();
  const { approvedWords } = useDictionarySync();
  
  // Set document title for web (appears in dock/home screen)
  React.useEffect(() => {
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      document.title = 'Myanmar Korean Dictionary';
    }
  }, []);
  
  // Allow external screens (VoiceToText) to populate query via a temp global
  React.useEffect(() => {
    (global as any).setSearchQuery = (text: string) => setQueryText(text);
    return () => { delete (global as any).setSearchQuery; };
  }, []);
  const { isTabletLike, horizontalPadding, contentMaxWidth } = useResponsiveLayout();

  const filteredAndSortedEntries = useMemo<DictionaryEntry[]>(() => {
    // Merge static dictionary with approved words
    const mergedDictionary = mergeApprovedWords(dictionaryEntries, approvedWords);
    
    // Deduplicate entries: keep the best entry for each Korean word
    // Group by Korean word only (not korean+myanmar) to avoid showing multiple entries for the same word
    // Priority: entries with synonyms/antonyms > entries with more examples > better English translation > first occurrence
    const deduplicatedMap = new Map<string, DictionaryEntry>();
    
    mergedDictionary.forEach((entry) => {
      // Use only Korean word as the key to group all variations
      const key = entry.korean.trim().toLowerCase();
      const existing = deduplicatedMap.get(key);
      
      if (!existing) {
        deduplicatedMap.set(key, entry);
      } else {
        // Determine which entry is better
        const existingHasSynonyms = !!(existing.synonyms && existing.synonyms !== 'None' && existing.synonyms.trim().length > 0);
        const existingHasAntonyms = !!(existing.antonyms && existing.antonyms !== 'None' && existing.antonyms.trim().length > 0);
        const currentHasSynonyms = !!(entry.synonyms && entry.synonyms !== 'None' && entry.synonyms.trim().length > 0);
        const currentHasAntonyms = !!(entry.antonyms && entry.antonyms !== 'None' && entry.antonyms.trim().length > 0);
        
        const existingHasBoth = existingHasSynonyms && existingHasAntonyms;
        const currentHasBoth = currentHasSynonyms && currentHasAntonyms;
        const existingHasEither = existingHasSynonyms || existingHasAntonyms;
        const currentHasEither = currentHasSynonyms || currentHasAntonyms;
        
        // Priority ranking:
        // 1. Both synonyms and antonyms (highest priority)
        // 2. Either synonyms or antonyms
        // 3. More examples
        // 4. Better English translation (more descriptive/longer)
        // 5. Keep existing (first occurrence)
        
        if (currentHasBoth && !existingHasBoth) {
          // Current has both, existing doesn't - keep current
          deduplicatedMap.set(key, entry);
        } else if (currentHasBoth === existingHasBoth) {
          // Both have same "both" status
          if (currentHasBoth) {
            // Both have synonyms and antonyms - compare examples, then level, then English
            const currentExamples = (entry.examples || []).length;
            const existingExamples = (existing.examples || []).length;
            if (currentExamples > existingExamples) {
              deduplicatedMap.set(key, entry);
            } else if (currentExamples === existingExamples) {
              // Same number of examples - prefer entry with level specified
              const currentHasLevel = !!entry.level;
              const existingHasLevel = !!existing.level;
              if (currentHasLevel && !existingHasLevel) {
                deduplicatedMap.set(key, entry);
              } else if (currentHasLevel === existingHasLevel) {
                // Same level status - prefer better English translation (more descriptive)
                const currentEnglish = (entry.english || '').trim();
                const existingEnglish = (existing.english || '').trim();
                // Prefer longer/more descriptive English translation
                if (currentEnglish.length > existingEnglish.length) {
                  deduplicatedMap.set(key, entry);
                } else if (currentEnglish.length === existingEnglish.length && currentEnglish > existingEnglish) {
                  deduplicatedMap.set(key, entry);
                }
              }
            }
          } else {
            // Neither has both - check if one has either
            if (currentHasEither && !existingHasEither) {
              deduplicatedMap.set(key, entry);
            } else if (currentHasEither === existingHasEither) {
              // Both have same "either" status - compare examples, then level, then English
              const currentExamples = (entry.examples || []).length;
              const existingExamples = (existing.examples || []).length;
              if (currentExamples > existingExamples) {
                deduplicatedMap.set(key, entry);
              } else if (currentExamples === existingExamples) {
                // Same number of examples - prefer entry with level specified
                const currentHasLevel = !!entry.level;
                const existingHasLevel = !!existing.level;
                if (currentHasLevel && !existingHasLevel) {
                  deduplicatedMap.set(key, entry);
                } else if (currentHasLevel === existingHasLevel) {
                  // Same level status - prefer better English translation (more descriptive)
                  const currentEnglish = (entry.english || '').trim();
                  const existingEnglish = (existing.english || '').trim();
                  // Prefer longer/more descriptive English translation
                  if (currentEnglish.length > existingEnglish.length) {
                    deduplicatedMap.set(key, entry);
                  } else if (currentEnglish.length === existingEnglish.length && currentEnglish > existingEnglish) {
                    deduplicatedMap.set(key, entry);
                  }
                }
              }
            }
          }
        }
      }
    });
    
    const deduplicatedDictionary = Array.from(deduplicatedMap.values());
    
    // Debug logging
    console.log('Static dictionary entries:', dictionaryEntries.length);
    console.log('Firebase approved words:', approvedWords.length);
    console.log('Merged dictionary total:', mergedDictionary.length);
    console.log('Deduplicated dictionary total:', deduplicatedDictionary.length);
    
    const normalizedQuery = queryText.trim().toLowerCase();
    
    if (normalizedQuery.length === 0) {
      // No search query - return all entries sorted normally
      const getValue = (entry: DictionaryEntry, field: SortPriority): string => {
        switch (field) {
          case 'korean':
            return entry.korean || '';
          case 'myanmar':
            return entry.myanmar || '';
          case 'english':
            return entry.english || '';
          default:
            return '';
        }
      };
      return [...deduplicatedDictionary].sort((a, b) => {
        const key: SortPriority = settings.sortBy;
        const locale = key === 'korean' ? 'ko' : undefined;
        return getValue(a, key).localeCompare(getValue(b, key), locale, { sensitivity: 'base' });
      });
    }
    
    // Enhanced search with relevance scoring
    const cleanQuery = normalizedQuery.replace(/\s+/g, ' ').trim();
    
    // Score each entry based on match quality
    const scoredEntries: Array<{ entry: DictionaryEntry; score: number }> = [];
    
    deduplicatedDictionary.forEach((entry) => {
      // Safely handle potentially undefined properties
      const korean = (entry.korean || '').trim().toLowerCase();
      const myanmar = (entry.myanmar || '').trim().toLowerCase();
      const english = (entry.english || '').trim().toLowerCase();
      
      // Skip entries without required fields
      if (!korean || !myanmar) return;
      
      let score = 0;
      let matched = false;
      let exactMatchField: 'korean' | 'myanmar' | 'english' | null = null;
      
      // Check Korean with word boundary awareness
      if (korean === cleanQuery) {
        score += 100; // Exact match - highest priority
        exactMatchField = 'korean';
        matched = true;
      } else if (korean.startsWith(cleanQuery)) {
        // For Korean, check if the match is at a complete syllable boundary
        // Korean characters (Hangul) are complete syllables, so we need to ensure
        // the match ends at a complete character boundary
        const afterQuery = korean.substring(cleanQuery.length);
        // Check if it's at word boundary (followed by space, punctuation, or end of string)
        // Also ensure the query itself is a complete Korean word (not a partial match)
        const isWordBoundary = afterQuery.length === 0 || /[\s\u200B-\u200D\uFEFF\.,;:!?]/.test(afterQuery[0]);
        // Additional check: ensure the query is not just a partial match within a longer word
        // For Korean, if the entry is longer and doesn't have a boundary, it's likely a different word
        if (isWordBoundary) {
          score += 80; // Word boundary match at start
        } else {
          // If it starts with the query but no boundary, it might be a different word
          // Only give lower score if the query is a complete Korean syllable
          // Korean syllables are in range \uAC00-\uD7AF
          const isCompleteKoreanSyllable = /^[\uAC00-\uD7AF]+$/.test(cleanQuery);
          if (isCompleteKoreanSyllable && korean.length > cleanQuery.length) {
            // This is likely a different word that happens to start with the same characters
            // Give it a very low score to prioritize exact matches
            score += 5; // Very low score for partial matches
          } else {
            score += 50; // Starts with but not word boundary
          }
        }
        matched = true;
      } else if (korean.includes(cleanQuery)) {
        // Check for word boundary matches (not just substring)
        const index = korean.indexOf(cleanQuery);
        const beforeChar = index > 0 ? korean[index - 1] : '';
        const afterChar = index + cleanQuery.length < korean.length ? korean[index + cleanQuery.length] : '';
        // Korean word boundary: space, zero-width characters, or start/end of string
        const isWordBoundary = (index === 0 || /[\s\u200B-\u200D\uFEFF]/.test(beforeChar)) &&
                               (index + cleanQuery.length === korean.length || /[\s\u200B-\u200D\uFEFF]/.test(afterChar));
        
        if (isWordBoundary) {
          score += 60; // Word boundary match in middle/end
        } else {
          score += 10; // Contains but not word boundary (lowest priority)
        }
        matched = true;
      }
      
      // Check Myanmar with word boundary awareness
      if (myanmar === cleanQuery) {
        score += 100; // Exact match - highest priority
        exactMatchField = 'myanmar';
        matched = true;
      } else if (myanmar.startsWith(cleanQuery)) {
        // Check if it's at word boundary (followed by space or end of string)
        const afterQuery = myanmar.substring(cleanQuery.length);
        const isWordBoundary = afterQuery.length === 0 || /[\s\u200B-\u200D\uFEFF]/.test(afterQuery[0]);
        if (isWordBoundary) {
          score += 80; // Word boundary match at start
        } else {
          score += 50; // Starts with but not word boundary
        }
        matched = true;
      } else if (myanmar.includes(cleanQuery)) {
        // Check for word boundary matches (not just substring)
        const index = myanmar.indexOf(cleanQuery);
        const beforeChar = index > 0 ? myanmar[index - 1] : '';
        const afterChar = index + cleanQuery.length < myanmar.length ? myanmar[index + cleanQuery.length] : '';
        // Myanmar word boundary: space, zero-width characters, or start/end of string
        const isWordBoundary = (index === 0 || /[\s\u200B-\u200D\uFEFF]/.test(beforeChar)) &&
                               (index + cleanQuery.length === myanmar.length || /[\s\u200B-\u200D\uFEFF]/.test(afterChar));
        
        if (isWordBoundary) {
          score += 60; // Word boundary match in middle/end
        } else {
          score += 10; // Contains but not word boundary (lowest priority)
        }
        matched = true;
      }
      
      // Check English with better word boundary matching
      if (english) {
        const englishLower = english.toLowerCase().trim();
        const queryWord = cleanQuery.trim().toLowerCase();
        
        // Exact full-field match (highest priority)
        if (englishLower === queryWord) {
          score += 1000; // Very high score for exact full match
          exactMatchField = 'english';
          matched = true;
        }
        // Check individual words in the English field
        else {
          const englishWords = english.split(/[\/,;\s]+/).map((w: string) => w.trim().toLowerCase()).filter(w => w.length > 0);
          
          // Check if any English word matches exactly or starts with query
          for (const word of englishWords) {
            // Exact word match (e.g., "life" in "Life/Living" or "Life expectancy")
            if (word === queryWord) {
              // If it's the first word and the only word, give it high score
              // If it's part of a phrase, give it medium-high score
              if (englishWords.length === 1) {
                score += 500; // Single word exact match
              } else if (englishWords.indexOf(word) === 0) {
                score += 200; // First word exact match in phrase
              } else {
                score += 150; // Other word exact match
              }
              exactMatchField = 'english';
              matched = true;
              break;
            } 
            // Word starts with query (e.g., "life" matches "lifespan")
            else if (word.startsWith(queryWord)) {
              const isWordBoundary = word.length === queryWord.length || 
                                     /[\s\-_.,;:!?]/.test(word[queryWord.length]);
              if (isWordBoundary) {
                score += 80; // Word boundary match at start
              } else {
                score += 30; // Starts with but not word boundary
              }
              matched = true;
              break;
            } 
            // Query starts with word (e.g., "lifespan" matches "life")
            else if (queryWord.startsWith(word)) {
              score += 60; // Handle plurals/compound words
              matched = true;
              break;
            } 
            // Word contains query (e.g., "life" in "wildlife")
            else if (word.includes(queryWord)) {
              // Only match if it's at word boundary (not middle of another word)
              // e.g., "eleph" should NOT match "telephone"
              const index = word.indexOf(queryWord);
              const beforeChar = index > 0 ? word[index - 1] : '';
              const afterChar = index + queryWord.length < word.length ? word[index + queryWord.length] : '';
              const isWordBoundary = !/[a-zA-Z\u1000-\u109F\u1100-\u11FF\uAC00-\uD7AF]/.test(beforeChar) && 
                                     !/[a-zA-Z\u1000-\u109F\u1100-\u11FF\uAC00-\uD7AF]/.test(afterChar);
              
              if (isWordBoundary || index === 0) {
                score += 20; // Contains at word boundary
                matched = true;
                break;
              }
            }
          }
        }
      }
      
      // Only include entries that matched
      if (matched) {
        // Add bonus for exact matches in the primary field (detected by query type)
        // If query contains Myanmar characters, prioritize Myanmar exact matches
        // If query contains Korean characters, prioritize Korean exact matches
        // If query contains only English/Latin, prioritize English exact matches
        const hasMyanmarChars = /[\u1000-\u109F]/.test(cleanQuery);
        const hasKoreanChars = /[\uAC00-\uD7AF]/.test(cleanQuery);
        const isEnglishQuery = !hasMyanmarChars && !hasKoreanChars;
        
        if (exactMatchField) {
          if ((hasMyanmarChars && exactMatchField === 'myanmar') ||
              (hasKoreanChars && exactMatchField === 'korean') ||
              (isEnglishQuery && exactMatchField === 'english')) {
            score += 1000; // Large bonus for exact match in primary search field to ensure it's always first
          }
        }
        
        scoredEntries.push({ entry, score });
      }
    });
    
    // Sort by score (highest first), then by user's preferred sort order
    scoredEntries.sort((a, b) => {
      // First sort by relevance score (descending)
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // If scores are equal, sort by user's preferred field
      const getValue = (entry: DictionaryEntry, field: SortPriority): string => {
        switch (field) {
          case 'korean':
            return entry.korean || '';
          case 'myanmar':
            return entry.myanmar || '';
          case 'english':
            return entry.english || '';
          default:
            return '';
        }
      };
      const key: SortPriority = settings.sortBy;
      const locale = key === 'korean' ? 'ko' : undefined;
      return getValue(a.entry, key).localeCompare(getValue(b.entry, key), locale, { sensitivity: 'base' });
    });
    
    // Return just the entries
    return scoredEntries.map(item => item.entry);
  }, [queryText, settings.sortBy, approvedWords]);

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
          {queryText.trim() ? (
            <FlatList
              data={filteredAndSortedEntries}
              keyExtractor={(item) => item.id}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.listContent}
              renderItem={({ item }) => (
                <Pressable 
                  onPress={() => navigation.navigate('WordDetail', { word: item })}
                  style={({ pressed }) => [
                    styles.row,
                    isTabletLike && styles.rowTablet,
                    { 
                      backgroundColor: C.surface,
                      opacity: pressed ? 0.7 : 1 
                    }
                  ]}>
                  <View style={styles.rowTextGroup}>
                    <View style={styles.rowHeader}>
                      <Text style={[styles.korean, isTabletLike && styles.koreanTablet, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_700Bold', fontSize: styles.korean.fontSize * fontScale }]}>{item.korean}</Text>
                      {item.pos && (
                        <View style={[styles.posChip]}>
                          <Text style={[styles.posText]}>{item.pos}</Text>
                        </View>
                      )}
                    </View>
                    <Text allowFontScaling={false} style={[styles.myanmar, isTabletLike && styles.myanmarTablet, { color: C.textSecondary, fontFamily: 'NotoSansMyanmar_400Regular', fontSize: styles.myanmar.fontSize * fontScale }]}>{item.myanmar}</Text>
                    {!!item.english && <Text style={[styles.englishGloss, { color: C.textTertiary, fontSize: styles.englishGloss.fontSize * fontScale }]}>{item.english}</Text>}
                  </View>
                  <FavoriteButton entryId={item.id} />
                </Pressable>
              )}
              ListEmptyComponent={
                <View style={styles.emptyState}>
                  <Text style={[styles.emptyStateText, { color: C.textTertiary }]}>{labels.noResults}</Text>
                </View>
              }
            />
          ) : (
            <ScrollView 
              contentContainerStyle={[styles.listContent, { alignItems: 'center', paddingTop: 20 }]}
              keyboardShouldPersistTaps="handled"
            >
              <Image 
                source={require('./assets/dictionary_icon.png')} 
                style={[styles.aboutLogo, { marginBottom: 24 }]} 
              />
              
              <Text style={[styles.welcomeTitle, { color: C.textPrimary, marginBottom: 8 }]}>
                {labels.title}
              </Text>
              
              <Text style={[styles.welcomeSubtitle, { color: C.textSecondary, marginBottom: 32, textAlign: 'center' }]}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'စကားလုံးများကို အပေါ်မှ search box တွင် ရိုက်ထည့်ပါ'
                  : settings.uiLanguage === 'korean'
                  ? '검색어를 위의 검색창에 입력하세요'
                  : 'Type in the search box above to find words'
                }
              </Text>

              <View style={styles.quickActions}>
                <Pressable
                  onPress={() => navigation.navigate('Practice')}
                  style={[styles.quickActionCard, { backgroundColor: C.surface }]}
                >
                  <Ionicons name="school-outline" size={24} color={C.brand} />
                  <Text style={[styles.quickActionTitle, { color: C.textPrimary }]}>{labels.navPractice}</Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate('Favorites')}
                  style={[styles.quickActionCard, { backgroundColor: C.surface }]}
                >
                  <Ionicons name="heart-outline" size={24} color="#ef4444" />
                  <Text style={[styles.quickActionTitle, { color: C.textPrimary }]}>{labels.navFavorites}</Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate('Input New Words')}
                  style={[styles.quickActionCard, { backgroundColor: C.surface }]}
                >
                  <Ionicons name="add-circle-outline" size={24} color="#10b981" />
                  <Text style={[styles.quickActionTitle, { color: C.textPrimary }]}>{labels.navInputNewWords}</Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate('Check Updates')}
                  style={[styles.quickActionCard, { backgroundColor: C.surface }]}
                >
                  <Ionicons name="sync-outline" size={24} color="#6366f1" />
                  <Text style={[styles.quickActionTitle, { color: C.textPrimary }]}>{labels.navCheckUpdates}</Text>
                </Pressable>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}


//motivation for quiz
function getMotivation(score: number, total: number, uiLang: 'english' | 'myanmar' | 'korean'): string {
  const pct = (score / Math.max(1, total)) * 100;
  const en = [
    'Amazing! You are on fire! Keep the momentum.',
    'Great job! A little more practice and you\'ll master it.',
    'Good effort! Review and try again — consistency wins.',
    'Every step counts. Keep practicing — you\'ve got this!',
  ];
  const mm = [
    'အရမ်းအားကြီးပါတယ်! စိတ်အားထက်သန်နေပြီ — ဆက်လက်လုပ်နိုင်ပါတယ်။',
    'ကောင်းမွန်ပါတယ်! နည်းနည်းပဲ ထပ်လေ့ကျင့်ရင် လက်ကျဆုံးမယ်။',
    'ကြိုးစားမှုကောင်းပါတယ်! ပြန်လေ့လာပြီး ထပ်စမ်းကြည့်ပါ — တည်ငြိမ်မှုက အရေးကြီးပါတယ်။',
    'တစ်လှမ်းချင်းတိုးတက်နေပြီ။ ဆက်လက်လေ့ကျင့်ရင် အောင်မြင်မယ်!',
  ];
  const ko = en; // fallback to English for now
  const pick = (arr: string[]) => (pct >= 90 ? arr[0] : pct >= 70 ? arr[1] : pct >= 50 ? arr[2] : arr[3]);
  if (uiLang === 'myanmar') return pick(mm);
  if (uiLang === 'korean') return pick(ko);
  return pick(en);
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


//practice tabs with level
const Tab = createBottomTabNavigator();
function PracticeQuizTabs({ route }: { route: any }) {
  const C = useThemedColors();
  
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: C.surface,
          borderTopColor: C.border,
        },
        tabBarActiveTintColor: C.brand,
        tabBarInactiveTintColor: C.textSecondary,
      }}
    >
      <Tab.Screen 
        name="Quiz (MCQ)" 
        component={MultipleChoiceQuizScreen}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Quiz (True/False)" 
        component={TrueFalseQuizScreen}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Flashcards" 
        component={FlashcardsScreen}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen 
        name="Voice to Text" 
        component={VoiceToTextScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mic-outline" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

// Practice Stack Navigator (Level Selection -> Quiz Tabs or Writing Screens)
const PracticeStack = createNativeStackNavigator();
function PracticeTabs() {
  const C = useThemedColors();
  
  return (
    <PracticeStack.Navigator 
      screenOptions={{ 
        headerShown: false,
        headerStyle: {
          backgroundColor: C.surface,
        },
        headerTintColor: C.textPrimary,
        headerShadowVisible: false,
      }}
    >
      <PracticeStack.Screen name="LevelSelection" component={LevelSelectionScreen} />
      <PracticeStack.Screen name="PracticeTabs" component={PracticeQuizTabs} />
      <PracticeStack.Screen name="KoreanWriting" component={KoreanWritingScreen} />
      <PracticeStack.Screen name="BurmeseWriting" component={BurmeseWritingScreen} />
      <PracticeStack.Screen name="TOPIKTest" component={TOPIKTestScreen} />
    </PracticeStack.Navigator>
  );
}

type RootStackParamList = {
  HomeSearch: undefined;
  WordDetail: { word: DictionaryEntry };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootDrawerParamList = {
  Home: undefined;
  Practice: undefined;
  Favorites: undefined;
  History: undefined;
  Settings: undefined;
  'AI Chat': undefined;
  Translate: undefined;
  'Check Updates': undefined;
  'Input New Words': undefined;
  Theme: undefined;
  Profile: undefined;
  About: undefined;
};


//drawer navigation and texts
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function AppDrawerContent(props: any) {
  const { settings } = useSettings();
  const { user, isAuthenticated, logOut } = useAuth();
  const C = useThemedColors();
  const labels = i18nLabels[settings.uiLanguage];
  
  return (
    <DrawerContentScrollView 
      {...props} 
      contentContainerStyle={{ flex: 1 }}
      style={{ backgroundColor: C.background }}
    >
      {/* User Profile Header */}
      {isAuthenticated && user && (
        <View style={{
          padding: 20,
          backgroundColor: 'transparent',
          borderBottomWidth: 0.5,
          borderBottomColor: C.border + '60',
          marginBottom: 12,
        }}>
          <Pressable
            onPress={() => {
              props.navigation.navigate('Profile');
              props.navigation.closeDrawer();
            }}
            style={({ pressed }) => ({
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 12,
              opacity: pressed ? 0.7 : 1,
            })}
          >
            {/* User Avatar */}
            <View style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: C.brand,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}>
              <Ionicons name="person" size={28} color="#FFFFFF" />
            </View>
            
            {/* User Info */}
            <View style={{ flex: 1 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '700',
                color: C.textPrimary,
                marginBottom: 2,
              }}>
                {user.displayName || 'User'}
              </Text>
              <Text style={{
                fontSize: 12,
                color: C.textSecondary,
              }} numberOfLines={1}>
                {user.email}
              </Text>
            </View>
            
            {/* Arrow Icon */}
            <Ionicons name="chevron-forward" size={20} color={C.textTertiary} />
          </Pressable>
          
          {/* Logout Button */}
          <Pressable
            onPress={async () => {
              await logOut();
              props.navigation.closeDrawer();
            }}
            style={({ pressed }) => ({
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 8,
              backgroundColor: pressed ? C.border + '50' : C.surface,
              borderWidth: 1,
              borderColor: C.border,
            })}
          >
            <Ionicons name="log-out-outline" size={16} color={C.textPrimary} />
            <Text style={{ color: C.textPrimary, fontSize: 13, fontWeight: '500' }}>
              {settings.uiLanguage === 'myanmar' ? 'ထွက်မည်' : settings.uiLanguage === 'korean' ? '로그아웃' : 'Logout'}
            </Text>
          </Pressable>
        </View>
      )}
      
      {/* Menu Items */}
      <View style={{ flex: 1 }}>
        <DrawerItem 
          label={labels.navHome} 
          onPress={() => props.navigation.navigate('Home')} 
          icon={({color, size}) => (<Ionicons name="home-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navPractice} 
          onPress={() => props.navigation.navigate('Practice')} 
          icon={({color, size}) => (<Ionicons name="school-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navFavorites} 
          onPress={() => props.navigation.navigate('Favorites')} 
          icon={({color, size}) => (<Ionicons name="heart-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navHistory} 
          onPress={() => props.navigation.navigate('History')} 
          icon={({color, size}) => (<Ionicons name="time-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navSettings} 
          onPress={() => props.navigation.navigate('Settings')} 
          icon={({color, size}) => (<Ionicons name="settings-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={'AI Chat'} 
          onPress={() => props.navigation.navigate('AI Chat')} 
          icon={({color, size}) => (<Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={'Translate'} 
          onPress={() => props.navigation.navigate('Translate')} 
          icon={({color, size}) => (<Ionicons name="swap-horizontal-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navCheckUpdates} 
          onPress={() => props.navigation.navigate('Check Updates')} 
          icon={({color, size}) => (<Ionicons name="sync-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navInputNewWords} 
          onPress={() => props.navigation.navigate('Input New Words')} 
          icon={({color, size}) => (<Ionicons name="add-circle-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navTheme} 
          onPress={() => props.navigation.navigate('Theme')} 
          icon={({color, size}) => (<Ionicons name="color-palette-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
        <DrawerItem 
          label={labels.navAbout} 
          onPress={() => props.navigation.navigate('About')} 
          icon={({color, size}) => (<Ionicons name="information-circle-outline" size={size} color={color} />)}
          activeTintColor={C.brand}
          inactiveTintColor={C.textPrimary}
          labelStyle={{ color: C.textPrimary }}
        />
      </View>
    </DrawerContentScrollView>
  );
}


// Access-controlled wrapper components
function ProtectedAIChatScreen({ navigation }: any) {
  const { checkAccess } = useFeatureAccess();
  const [hasAccess, setHasAccess] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (!checked) {
      checkAccess(
        'ai-chat',
        () => {
          setHasAccess(true);
          setChecked(true);
        },
        () => {
          navigation.goBack();
        }
      );
      setChecked(true);
    }
  }, [checked]);

  if (!hasAccess) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AIChatScreen />;
}

function ProtectedTranslateScreen({ navigation }: any) {
  const { checkAccess } = useFeatureAccess();
  const [hasAccess, setHasAccess] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (!checked) {
      checkAccess(
        'translate',
        () => {
          setHasAccess(true);
          setChecked(true);
        },
        () => {
          navigation.goBack();
        }
      );
      setChecked(true);
    }
  }, [checked]);

  if (!hasAccess) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <TranslateScreen />;
}

function AppNavigator() {
  const C = useThemedColors();
  const { settings } = useSettings();
  
  // For web, explicitly set drawer button color based on theme
  // Light mode: black, Dark mode: white
  // Handle 'system' theme as fallback (should be migrated, but just in case)
  const effectiveTheme = settings.theme === 'system' ? 'light' : settings.theme;
  const drawerButtonColor = Platform.OS === 'web'
    ? (effectiveTheme === 'light' ? '#111827' : '#F3F4F6') // Black for light, white for dark
    : C.textPrimary; // For mobile, use theme color
  
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <AppDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: C.background,
        },
        drawerActiveTintColor: C.brand,
        drawerInactiveTintColor: C.textPrimary,
        drawerActiveBackgroundColor: C.brand + '15', // 15% opacity
        drawerItemStyle: {
          borderRadius: 8,
        },
        drawerLabelStyle: {
          marginLeft: -16,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: C.surface,
        },
        headerTintColor: drawerButtonColor,
        headerShadowVisible: false,
      }}
    >
              <Drawer.Screen 
                name="Home" 
                component={HomeStack} 
                options={{ 
                  drawerIcon: ({ color, size }) => (<Ionicons name="home-outline" size={size} color={color} />),
                  headerTintColor: drawerButtonColor, // Explicitly set for Home tab
                }} 
              />
      <Drawer.Screen name="Practice" component={PracticeTabs} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="school-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Favorites" component={FavoritesStack} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="heart-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="History" component={HistoryScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="time-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Settings" children={() => <SettingsScreen />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="settings-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="AI Chat" component={ProtectedAIChatScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Translate" component={ProtectedTranslateScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="swap-horizontal-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Check Updates" component={CheckUpdatesScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="sync-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Input New Words" component={SubmitWordScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="add-circle-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Theme" component={ThemeScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="color-palette-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="person-circle-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="About" component={AboutScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="information-circle-outline" size={size} color={color} />) }} />
    </Drawer.Navigator>
  );
}

// Wrapper to connect theme from settings
function ThemedApp() {
  const { settings } = useSettings();
  
  return (
    <ThemeProvider theme={settings.theme}>
      <UserPointsProvider>
        <LibraryProvider>
          <DictionarySyncProvider>
            <UpdatesProvider>
              <SubmissionsProvider>
                <NavigationContainer>
                  <AppNavigator />
                  <NotificationContainer />
                </NavigationContainer>
              </SubmissionsProvider>
            </UpdatesProvider>
          </DictionarySyncProvider>
        </LibraryProvider>
      </UserPointsProvider>
    </ThemeProvider>
  );
}

export default function App() {
  const [fontsLoaded] = useMyanmarFonts({ NotoSansMyanmar_400Regular, NotoSansMyanmar_700Bold });
  
  // Test Firebase connection on app start
  React.useEffect(() => {
    try {
      console.log('Firebase initialized successfully:', db.app.name);
      console.log('Ready to test word submissions!');
    } catch (error) {
      console.error('Firebase initialization error:', error);
    }
  }, []);

  // Remove image borders on web
  React.useEffect(() => {
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = `
        img {
          border: none !important;
          outline: none !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <SettingsProvider>
          <ThemedApp />
        </SettingsProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}


// ThemeScreen moved to separate file: app/screens/ThemeScreen.tsx
// AboutScreen moved to separate file: app/screens/AboutScreen.tsx
// SettingsScreen moved to separate file: app/screens/SettingsScreen.tsx

// FavoritesScreen moved to separate file: app/screens/FavoritesScreen.tsx

function HistoryScreen() {
  const { settings } = useSettings();
  const { approvedWords } = useDictionarySync();
  const C = useThemedColors();
  
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

  const { history, clearHistory } = useLibrary();

  // Merge local dictionary with approved words
  const mergedDictionary = React.useMemo(() => {
    return mergeApprovedWords(dictionaryEntries, approvedWords);
  }, [approvedWords]);

  // Find history items in merged dictionary
  const items = history
    .map((h) => mergedDictionary.find((d) => d.id === h.id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    // Sort by history timestamp instead of Korean text
    .sort((a, b) => {
      const aTime = history.find(h => h.id === a.id)?.ts || 0;
      const bTime = history.find(h => h.id === b.id)?.ts || 0;
      return bTime - aTime; // Most recent first
    });

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.row, styles.rowTablet, { backgroundColor: C.surface }]}>
            <View style={styles.rowTextGroup}>
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
              <Text style={{ fontSize: 12, color: C.textTertiary, marginTop: 2 }}>
                {new Date(history.find(h => h.id === item.id)?.ts || 0).toLocaleString()}
              </Text>
            </View>
            <FavoriteButton entryId={item.id} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={[styles.emptyStateText, { color: C.textTertiary }]}>No history yet</Text>
          </View>
        }
      />
      <View style={{ alignItems: 'center', paddingBottom: 16 }}>
        <Pressable 
          onPress={clearHistory}
          style={({ pressed }) => [
            styles.pill,
            { backgroundColor: pressed ? '#FEE2E2' : '#DC2626', paddingHorizontal: 16 }
          ]}
        >
          <Ionicons name="trash-outline" size={16} color="white" />
          <Text style={{ color: 'white', marginLeft: 4 }}>Clear History</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    paddingHorizontal: 32,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
  quickActionCard: {
    width: 140,
    height: 140,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
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

  //font sizes for different languages
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
    fontSize: 13,
    color: '#374151',
    lineHeight: 30,
  },
  myanmarTablet: {
    fontSize: 12,
  },
  englishGloss: {
    marginTop: 2,
    fontSize: 12,
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
  favButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
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
  optionIcon: {
    marginLeft: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
  },
  sectionHeader: {
    fontWeight: '700',
    marginBottom: 8,
    opacity: 0.9,
  },
  optionRowSelected: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },

  //about screen from voice to text screen
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#F3F4F6',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E7EB',
  },
  pillActive: {
    backgroundColor: '#DBEAFE',
    borderColor: '#93C5FD',
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  aboutLogo: {
    width: 96,
    height: 96,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 12,
    borderWidth: 0,
    outlineWidth: 0,
  },
  aboutParagraph: {
    fontSize: 15,
    lineHeight: 28,
    marginBottom: 6,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
    alignItems: 'flex-start',
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 28,
  },
  timerChip: {  //timer chip for quiz
    position: 'absolute',
    right: 16,
    top: 16,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  optionItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  optionItemCorrect: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },
  optionItemWrong: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
  },
  flashcard: {
    width: '100%',
    minHeight: 260,
    borderRadius: 20,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  // Check Updates Screen Styles
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  updateStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  updateStatusTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  statusItem: {
    flex: 1,
    alignItems: 'center',
  },
  statusNumber: {
    fontSize: 28,
    fontWeight: '700',
  },
  statusLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
  lastCheckText: {
    fontSize: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 12,
    marginTop: 16,
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  syncResultText: {
    fontSize: 14,
    lineHeight: 20,
  },
  updateItem: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  updateItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  updateKorean: {
    fontSize: 16,
    fontWeight: '600',
  },
  updateMyanmar: {
    fontSize: 14,
    marginBottom: 2,
    lineHeight: 22,
  },
  updateEnglish: {
    fontSize: 12,
    marginBottom: 2,
  },
  updateMeta: {
    fontSize: 11,
  },
  newBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  moreUpdatesText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
  helpText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
