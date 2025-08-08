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
  ScrollView,
  Linking,
  Pressable,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts as useMyanmarFonts, NotoSansMyanmar_400Regular, NotoSansMyanmar_700Bold } from '@expo-google-fonts/noto-sans-myanmar';
import { dictionaryEntries } from './data/dictionary';
import { useThemedColors } from './components/Theme';
import { AppLanguage, SortPriority, AppSettings, i18nLabels, NATIVE_LANGUAGE_NAME, FontSize } from './data/settings';
import { SettingsProvider, useSettings } from './data/SettingsContext';
import { LibraryProvider, useLibrary } from './data/LibraryContext';
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
          <FlatList
            data={filteredAndSortedEntries}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
              <View style={[styles.row, isTabletLike && styles.rowTablet, { backgroundColor: C.surface }]}> 
                <View style={styles.rowTextGroup}>
                  <View style={styles.rowHeader}>
                    <Text style={[styles.korean, isTabletLike && styles.koreanTablet, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_700Bold', fontSize: styles.korean.fontSize * fontScale }]}>{item.korean}</Text>
                    {item.pos && (
                      <View style={[styles.posChip] }>
                        <Text style={[styles.posText]}>{item.pos}</Text>
                      </View>
                    )}
                  </View>
                  <Text allowFontScaling={false} style={[styles.myanmar, isTabletLike && styles.myanmarTablet, { color: C.textSecondary, fontFamily: 'NotoSansMyanmar_400Regular', fontSize: styles.myanmar.fontSize * fontScale }]}>{item.myanmar}</Text>
                  {!!item.english && <Text style={[styles.englishGloss, { color: C.textTertiary, fontSize: styles.englishGloss.fontSize * fontScale }]}>{item.english}</Text>}
                </View>
                <FavoriteButton entryId={item.id} />
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
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="heart-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="History" component={HistoryScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="time-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Settings" children={() => <SettingsScreen />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="settings-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Check Updates" children={() => <PlaceholderScreen title="Check Updates" />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="sync-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Input New Words" children={() => <PlaceholderScreen title="Input New Words" />} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="add-circle-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="About" component={AboutScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="information-circle-outline" size={size} color={color} />) }} />
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
      <LibraryProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </LibraryProvider>
    </SettingsProvider>
  );
}

function AboutScreen() {
  const C = useThemedColors();
  const intro = 'ကျွန်တော်တို့ရဲ့ Korean-Burmese Dictionary App ကိုအသုံးပြုတဲ့သူတွေကို ကြိုဆိုပါတယ်။';
  const reason = 'မြန်မာဘာသာစကားနဲ့ ကိုရီးယားဘာသာစကားကြား တိုက်ရိုက် ဘာသာပြန်ရာတွင် ပြည့်စုံကောင်းမွန်တဲ့အဘိဓာန်မရှိသေးတဲ့အတွက် ဒီအက်ပ်ကိုဖန်တီးခဲ့ပါတယ်။';
  const audience = 'ဒီအက်ပ်ကို ကိုရီးယားနိုင်ငံမှာ နေထိုင်သူ မြန်မာနိုင်ငံသားများ၊ ပညာသင်ကြားနေသူများ နဲ့ ဘာသာစကားလေ့လာသူများအတွက် ရည်ရွယ်ထားပါတယ်။';
  const featuresTitle = 'အက်ပ်ရဲ့ အဓိက Features များ';
  const bullets = [
    'App Interface ကို မြန်မာလို လွယ်ကူစွာ အသုံးပြုနိုင်ခြင်း',
    'ကိုရီးယားစကားနှင့် မြန်မာစကားကို တိုက်ရိုက်ရှာဖွေရန်၊ ပြန်ဆိုရန် အလွယ်တကူ အသုံးပြုနိုင်ခြင်း',
    'လေ့လာသူများအတွက် အသုံးဝင်သော အသံထွက်၊ ဥပမာဝေါဟာရများ ထည့်သွင်းထားခြင်း',
    'စကားလုံးရှာဖွေမှု အရှိန်မြှင့်တင်ရန် သုံးသပ်ချက်များနှင့် စာရင်းများ ပံ့ပိုးပေးခြင်း',
    'အသုံးပြုသူများအနေနဲ့ ကျွန်တော်တို့ရဲ့ အဖွဲ့အစည်းကို ပံ့ပိုးနိုင်ခြင်းနှင့် အသစ်သော စကားလုံးများ၊ ဗျည်းများ (slangs) များကို တိုက်ရိုက်ထည့်သွင်းနိုင်ခြင်း',
    'Quiz များ၊ Practice ဌာနများဖြင့် ဘာသာစကားကျွမ်းကျင်မှု တိုးတက်စေရန် ကူညီပေးခြင်း',
    'Speaking Test အစီအစဉ်များ ဖြင့် စကားပြောနိုင်စွမ်း တိုးတက်စေရန် အခွင့်အရေးပေးခြင်း',
    'နေ့စဉ်အသုံးပြုမှုအတွက် လွယ်ကူသော UI နှင့် ပေါ့ပေါ့ပါးပါး ရုပ်သဏ္ဍာန်',
  ];
  const contactTitle = 'ဆက်သွယ်ရန်';
  const contactText = 'မေးမြန်းစရာများ၊ အကြံပြုလိုသောအချက်များရှိပါက ကျွန်တော့်ကို အီးမေးလ်ပို့ပါ - (AUNG KO KO)';
  const email = 'aungko17101999@gmail.com';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }] }>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={[styles.aboutTitle, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_700Bold' }]}>About</Text>
        <Image source={require('./assets/dictionary_icon.png')} style={styles.aboutLogo} />

        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border }]}>
          <Text allowFontScaling={false} style={[styles.aboutParagraph, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_400Regular' }]}>{intro}</Text>
          <Text allowFontScaling={false} style={[styles.aboutParagraph, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_400Regular' }]}>{reason}</Text>
          <Text allowFontScaling={false} style={[styles.aboutParagraph, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_400Regular' }]}>{audience}</Text>

          <Text style={[styles.sectionTitle, { marginTop: 8, color: C.textSecondary }]}>{featuresTitle}</Text>
          {bullets.map((b, idx) => (
            <View key={idx} style={styles.bulletRow}>
              <Ionicons name="checkmark-circle" size={18} color="#10B981" style={{ marginTop: 2 }} />
              <Text allowFontScaling={false} style={[styles.bulletText, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_400Regular' }]}>{b}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.card, { marginTop: 16, backgroundColor: C.surface, borderColor: C.border }]}>
          <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>{contactTitle}</Text>
          <Text allowFontScaling={false} style={[styles.aboutParagraph, { color: C.textPrimary, fontFamily: 'NotoSansMyanmar_400Regular' }]}>
            {contactText} <Text style={{ color: '#2563EB' }} onPress={() => Linking.openURL(`mailto:${email}`)}>{email}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  const { settings, updateSetting } = useSettings();
  const C = useThemedColors();

  const Radio = ({ selected }: { selected: boolean }) => (
    <Ionicons
      name={selected ? 'radio-button-on' : 'radio-button-off'}
      size={20}
      color={selected ? '#2563EB' : C.textTertiary}
      style={styles.optionIcon}
    />
  );

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={[styles.card, { borderColor: C.border, backgroundColor: C.surface, marginBottom: 12 }] }>
      <Text style={[styles.sectionHeader, { color: C.textSecondary }]}>{title}</Text>
      {children}
    </View>
  );

  const LanguageOptions = (
    <Section title="Language">
      {(['myanmar','korean','english'] as AppLanguage[]).map((lang, idx) => {
        const selected = settings.uiLanguage === lang;
        return (
          <Pressable
            key={lang}
            onPress={() => updateSetting('uiLanguage', lang)}
            style={[styles.optionRow, selected && styles.optionRowSelected]}
            android_ripple={{ color: '#E5E7EB' }}
          >
            <Text style={[styles.optionLabel, { color: C.textPrimary }]}>{NATIVE_LANGUAGE_NAME[lang]}</Text>
            <Radio selected={selected} />
          </Pressable>
        );
      })}
    </Section>
  );

  const SortOptions = (
    <Section title="Sort priority">
      {(['korean','myanmar','english'] as SortPriority[]).map((sort) => {
        const selected = settings.sortBy === sort;
        return (
          <Pressable
            key={sort}
            onPress={() => updateSetting('sortBy', sort)}
            style={[styles.optionRow, selected && styles.optionRowSelected]}
            android_ripple={{ color: '#E5E7EB' }}
          >
            <Text style={[styles.optionLabel, { color: C.textPrimary }]}>{sort}</Text>
            <Radio selected={selected} />
          </Pressable>
        );
      })}
    </Section>
  );

  const FontSizeOptions = (
    <Section title="Font size">
      {(['small','default','large'] as FontSize[]).map((size) => {
        const selected = settings.fontSize === size;
        return (
          <Pressable
            key={size}
            onPress={() => updateSetting('fontSize', size)}
            style={[styles.optionRow, selected && styles.optionRowSelected]}
            android_ripple={{ color: '#E5E7EB' }}
          >
            <Text style={[styles.optionLabel, { color: C.textPrimary }]}>{size}</Text>
            <Radio selected={selected} />
          </Pressable>
        );
      })}
    </Section>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <View style={[styles.container, { paddingHorizontal: 16 }]}>        
        <Text style={[styles.title, { color: C.textPrimary }]}>Settings</Text>
        {LanguageOptions}
        {SortOptions}
        {FontSizeOptions}
      </View>
    </SafeAreaView>
  );
}

function FavoriteButton({ entryId }: { entryId: string }) {
  const { isFavorite, toggleFavorite } = useLibrary();
  const fav = isFavorite(entryId);
  return (
    <Text onPress={() => toggleFavorite(entryId)} style={styles.favButton}>
      <Ionicons name={fav ? 'heart' : 'heart-outline'} size={20} color={fav ? '#DC2626' : '#9CA3AF'} />
    </Text>
  );
}

function FavoritesScreen() {
  const { settings } = useSettings();
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
  const items = dictionaryEntries.filter((d) => favoriteIds.has(d.id));
  const itemsSorted = [...items].sort((a, b) => a.korean.localeCompare(b.korean, 'ko', { sensitivity: 'base' }));
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={itemsSorted}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.row, styles.rowTablet]}>
            <View style={styles.rowTextGroup}>
              <Text style={[styles.korean, { fontSize: styles.korean.fontSize * fontScale }]}>{item.korean}</Text>
              <Text allowFontScaling={false} style={[styles.myanmar, { fontSize: styles.myanmar.fontSize * fontScale }]}>{item.myanmar}</Text>
              {!!item.english && <Text style={[styles.englishGloss, { fontSize: styles.englishGloss.fontSize * fontScale }]}>{item.english}</Text>}
            </View>
            <FavoriteButton entryId={item.id} />
          </View>
        )}
        ListEmptyComponent={<View style={styles.emptyState}><Text style={styles.emptyStateText}>No favorites yet</Text></View>}
      />
    </SafeAreaView>
  );
}

function HistoryScreen() {
  const { settings } = useSettings();
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
  const items = history
    .map((h) => dictionaryEntries.find((d) => d.id === h.id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .sort((a, b) => a.korean.localeCompare(b.korean, 'ko', { sensitivity: 'base' }));
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[styles.row, styles.rowTablet]}>
            <View style={styles.rowTextGroup}>
              <Text style={[styles.korean, { fontSize: styles.korean.fontSize * fontScale }]}>{item.korean}</Text>
              <Text allowFontScaling={false} style={[styles.myanmar, { fontSize: styles.myanmar.fontSize * fontScale }]}>{item.myanmar}</Text>
              {!!item.english && <Text style={[styles.englishGloss, { fontSize: styles.englishGloss.fontSize * fontScale }]}>{item.english}</Text>}
            </View>
            <FavoriteButton entryId={item.id} />
          </View>
        )}
        ListEmptyComponent={<View style={styles.emptyState}><Text style={styles.emptyStateText}>No history yet</Text></View>}
      />
      <View style={{ alignItems: 'center', paddingBottom: 16 }}>
        <Text onPress={clearHistory} style={{ color: '#DC2626' }}>Clear history</Text>
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
});
