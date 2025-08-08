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
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useFonts as useMyanmarFonts, NotoSansMyanmar_400Regular, NotoSansMyanmar_700Bold } from '@expo-google-fonts/noto-sans-myanmar';
import { dictionaryEntries } from './data/dictionary';
import { useThemedColors } from './components/Theme';
import { AppLanguage, SortPriority, AppSettings, i18nLabels, NATIVE_LANGUAGE_NAME, FontSize } from './data/settings';
import { SettingsProvider, useSettings } from './data/SettingsContext';
import { LibraryProvider, useLibrary } from './data/LibraryContext';
import { SearchBox } from './components/SearchBox';
import { transcribeWithOpenAI } from './data/stt'; //text to speech
import { generateMCQ, generateTF, generateFlashcards } from './data/quiz'; //quiz
import { GoogleTranslateProvider, OpenAIChatProvider, type ChatMessage } from './data/ai';

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
  // Allow external screens (VoiceToText) to populate query via a temp global
  React.useEffect(() => {
    (global as any).setSearchQuery = (text: string) => setQueryText(text);
    return () => { delete (global as any).setSearchQuery; };
  }, []);
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

function AIChatScreen() {
  const C = useThemedColors();
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState('');
  const apiKey = (global as any).expo?.config?.extra?.OPENAI_API_KEY ?? '';
  const provider = React.useMemo(() => (apiKey ? new OpenAIChatProvider(apiKey) : null), [apiKey]);

  async function send() {
    if (!input.trim()) return;
    const next: ChatMessage[] = [...messages, { role: 'user', content: input.trim() }];
    setMessages(next);
    setInput('');
    if (!provider) {
      setMessages((m) => [...m, { role: 'assistant', content: '(Set OPENAI_API_KEY to enable chat)' }]);
      return;
    }
    try {
      const reply = await provider.send(next);
      setMessages((m) => [...m, reply]);
    } catch (e: any) {
      setMessages((m) => [...m, { role: 'assistant', content: `Error: ${e?.message ?? 'unknown'}` }]);
    }
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}> 
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={[styles.title, { color: C.textPrimary }]}>AI Chat</Text>
        <View style={[styles.card, { flex: 1, backgroundColor: C.surface, borderColor: C.border }] }>
          <ScrollView contentContainerStyle={{ paddingBottom: 8 }}>
            {messages.map((m, idx) => (
              <View key={idx} style={{ marginBottom: 8 }}>
                <Text style={{ fontWeight: '700', color: C.textSecondary }}>{m.role === 'user' ? 'You' : 'AI'}</Text>
                <Text style={{ color: C.textPrimary }}>{m.content}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Type a message"
              style={{ flex: 1, borderWidth: 1, borderColor: C.border, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 8 }}
            />
            <Pressable onPress={send} style={[styles.primaryBtn, { backgroundColor: '#2563EB' }] }>
              <Ionicons name="send" size={16} color="#fff" />
              <Text style={styles.primaryBtnText}>Send</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function TranslateScreen() {
  const C = useThemedColors();
  const key = (global as any).expo?.config?.extra?.GOOGLE_TRANSLATE_API_KEY ?? '';
  const provider = React.useMemo(() => new GoogleTranslateProvider(key), [key]);
  const [text, setText] = React.useState('');
  const [result, setResult] = React.useState('');
  const [src, setSrc] = React.useState<'ko' | 'my' | 'en'>('ko');
  const [dst, setDst] = React.useState<'ko' | 'my' | 'en'>('my');
  const [busy, setBusy] = React.useState(false);

  async function run() {
    try {
      setBusy(true);
      const translated = await provider.translate(text, src, dst);
      setResult(translated);
    } catch (e: any) {
      setResult(`Error: ${e?.message ?? 'unknown'}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}> 
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={[styles.title, { color: C.textPrimary }]}>Translate</Text>
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, gap: 8 }] }>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Pressable onPress={() => setSrc('ko')} style={[styles.pill, src === 'ko' && styles.pillActive] as any}><Text>KO</Text></Pressable>
            <Pressable onPress={() => setSrc('my')} style={[styles.pill, src === 'my' && styles.pillActive] as any}><Text>MM</Text></Pressable>
            <Pressable onPress={() => setSrc('en')} style={[styles.pill, src === 'en' && styles.pillActive] as any}><Text>EN</Text></Pressable>
            <Ionicons name="swap-horizontal" size={20} color={C.textSecondary} style={{ marginHorizontal: 4 }} />
            <Pressable onPress={() => setDst('ko')} style={[styles.pill, dst === 'ko' && styles.pillActive] as any}><Text>KO</Text></Pressable>
            <Pressable onPress={() => setDst('my')} style={[styles.pill, dst === 'my' && styles.pillActive] as any}><Text>MM</Text></Pressable>
            <Pressable onPress={() => setDst('en')} style={[styles.pill, dst === 'en' && styles.pillActive] as any}><Text>EN</Text></Pressable>
          </View>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Enter text"
            style={{ borderWidth: 1, borderColor: C.border, borderRadius: 8, padding: 10 }}
            multiline
          />
          <Pressable onPress={run} style={[styles.primaryBtn, { backgroundColor: '#2563EB' }] }>
            <Ionicons name="flash" size={16} color="#fff" />
            <Text style={styles.primaryBtnText}>{busy ? 'Translating…' : 'Translate'}</Text>
          </Pressable>
          <Text style={{ color: C.textPrimary, marginTop: 4 }}>{result}</Text>
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
    'Great job! A little more practice and you’ll master it.',
    'Good effort! Review and try again — consistency wins.',
    'Every step counts. Keep practicing — you’ve got this!',
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

function MultipleChoiceQuizScreen() {
  const C = useThemedColors();
  const [questions, setQuestions] = React.useState(() => generateMCQ(20));
  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [score, setScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(60);

  React.useEffect(() => {
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [index]);

  const q = questions[index];
  const done = index >= questions.length || timeLeft === 0;

  function submit(choice: number) {
    if (selected !== null) return;
    setSelected(choice);
    if (choice === q.answerIndex) setScore((s) => s + 1);
    setTimeout(() => {
      setSelected(null);
      setIndex((i) => i + 1);
      setTimeLeft(60);
    }, 700);
  }

  if (done) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="trophy" size={64} color="#F59E0B" />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 8 }]}>Score: {score}/{questions.length}</Text>
          <Text style={{ color: C.textSecondary, textAlign: 'center', marginTop: 6 }}>{getMotivation(score, questions.length, useSettings().settings.uiLanguage)}</Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
            <Pressable
              onPress={() => { setQuestions(generateMCQ(20)); setIndex(0); setScore(0); setSelected(null); setTimeLeft(60); }}
              style={[styles.primaryBtn, { backgroundColor: '#2563EB' }]}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>Restart</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
//view for practice tabs multiple choice quiz
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}> 
      <View style={{ padding: 16, position: 'relative', paddingTop: 56 }}>
        <View style={styles.timerChip}>
          <Ionicons name="time-outline" size={16} color="#111827" />
          <Text style={{ color: '#111827', fontWeight: '700' }}>{timeLeft}s</Text>
        </View>
        <Text style={{ color: C.textTertiary, textAlign: 'center', marginTop: 6, marginBottom: 12, paddingRight: 72 }}>{labels.quizMCQHelp}</Text>
        <Text
          style={{
            color: C.textPrimary,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 22,
            marginBottom: 16,
          }}
        >
          {q.prompt}
        </Text>
        {q.choices.map((c, i) => {
          const isCorrect = selected !== null && i === q.answerIndex;
          const isWrong = selected !== null && i === selected && selected !== q.answerIndex;
          return (
            <Pressable
              key={i}
              onPress={() => submit(i)}
              hitSlop={8}
              style={[
                styles.optionItem,
                { backgroundColor: C.surface },
                isCorrect && styles.optionItemCorrect,
                isWrong && styles.optionItemWrong,
              ]}
              accessibilityRole="button"
            >
              <Text style={{ color: C.textPrimary, fontSize: 16 }}>{c}</Text>
            </Pressable>
          );
        })}
        <Text style={{ color: C.textTertiary, marginTop: 8 }}>{index + 1} / {questions.length}</Text>
      </View>
    </SafeAreaView>
  );
}

function TrueFalseQuizScreen() {
  const C = useThemedColors();
  const [questions, setQuestions] = React.useState(() => generateTF(20));
  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<boolean | null>(null);
  const [score, setScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(45);
  const q = questions[index];
  const done = index >= questions.length || timeLeft === 0;

  React.useEffect(() => {
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [index]);

  function submit(val: boolean) {
    if (selected !== null) return;
    setSelected(val);
    if (val === q.isTrue) setScore((s) => s + 1);
    setTimeout(() => {
      setSelected(null);
      setIndex((i) => i + 1);
      setTimeLeft(45);
    }, 700);
  }

  if (done) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="medal-outline" size={64} color="#10B981" />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 8 }]}>Score: {score}/{questions.length}</Text>
          <Text style={{ color: C.textSecondary, textAlign: 'center', marginTop: 6 }}>{getMotivation(score, questions.length, useSettings().settings.uiLanguage)}</Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
            <Pressable
              onPress={() => { setQuestions(generateTF(20)); setIndex(0); setScore(0); setSelected(null); setTimeLeft(45); }}
              style={[styles.primaryBtn, { backgroundColor: '#2563EB' }]}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>Restart</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }


//view for practice tabs true false quiz
  const { settings: s2 } = useSettings();
  const labels2 = i18nLabels[s2.uiLanguage];
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}> 
      <View style={{ flex: 1, padding: 16, paddingTop: 56 }}>
        <View style={[styles.timerChip, { position: 'absolute', right: 16, top: 16 }]}>
          <Ionicons name="time-outline" size={16} color="#111827" />
          <Text style={{ color: '#111827', fontWeight: '700' }}>{timeLeft}s</Text>
        </View>
        <Text style={{ color: C.textTertiary, textAlign: 'center', marginTop: 6, marginBottom: 12, paddingRight: 72 }}>{labels2.quizTFHelp}</Text>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              color: C.textPrimary,
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 20,
              marginBottom: 16,
            }}
          >
            {q.statement}
          </Text>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <Pressable onPress={() => submit(true)} style={[styles.primaryBtn, { backgroundColor: '#10B981', flex: 1 }]}>
              <Ionicons name="checkmark-circle" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>True</Text>
            </Pressable>
            <Pressable onPress={() => submit(false)} style={[styles.primaryBtn, { backgroundColor: '#EF4444', flex: 1 }]}>
              <Ionicons name="close-circle" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>False</Text>
            </Pressable>
          </View>
          <Text style={{ color: C.textTertiary, marginTop: 8, textAlign: 'center' }}>{index + 1} / {questions.length}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function FlashcardsScreen() {
  const C = useThemedColors();
  const cards = React.useMemo(() => generateFlashcards(20), []);
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const card = cards[index];
  const done = index >= cards.length;
  if (done) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="sparkles" size={64} color="#6366F1" />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 8 }]}>Great job!</Text>
          <Text style={{ color: C.textSecondary, textAlign: 'center', marginTop: 6 }}>Keep reviewing to build long-term memory.</Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
            <Pressable
              onPress={() => { setFlipped(false); setIndex(0); }}
              style={[styles.primaryBtn, { backgroundColor: '#2563EB' }]}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>Restart</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  const { settings: s3 } = useSettings();
  const labels3 = i18nLabels[s3.uiLanguage];
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: C.textTertiary, textAlign: 'center', marginBottom: 12 }}>{labels3.flashHelp}</Text>
          <Pressable
            onPress={() => setFlipped((f) => !f)}
            hitSlop={8}
            style={styles.flashcard}
            accessibilityRole="button"
          >
            <Text
              style={{
                color: C.textPrimary,
                textAlign: 'center',
                fontWeight: flipped ? '400' : '700',
                fontSize: flipped ? 16 : 22,
              }}
            >
              {flipped ? card.back : card.front}
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 12 }}>
          <Pressable onPress={() => setIndex((i) => Math.max(0, i - 1))} style={[styles.primaryBtn, { backgroundColor: '#6B7280', flex: 1 }]}>
            <Text style={styles.primaryBtnText}>Prev</Text>
          </Pressable>
          <Pressable onPress={() => { setFlipped(false); setIndex((i) => i + 1); }} style={[styles.primaryBtn, { backgroundColor: '#2563EB', flex: 1 }]}>
            <Text style={styles.primaryBtnText}>Next</Text>
          </Pressable>
        </View>
        <Text style={{ color: C.textTertiary, marginTop: 8 }}>{index + 1} / {cards.length}</Text>
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


//practice tabs
const Tab = createBottomTabNavigator();
function PracticeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Quiz (MCQ)" component={MultipleChoiceQuizScreen} />
      <Tab.Screen name="Quiz (True/False)" component={TrueFalseQuizScreen} />
      <Tab.Screen name="Flashcards" component={FlashcardsScreen} />
      <Tab.Screen name="Voice to Text" component={VoiceToTextScreen} />
    </Tab.Navigator>
  );
}

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
  About: undefined;
};


//drawer navigation and texts
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
      <DrawerItem label={'AI Chat'} onPress={() => props.navigation.navigate('AI Chat')} icon={({color, size}) => (<Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />)} />
      <DrawerItem label={'Translate'} onPress={() => props.navigation.navigate('Translate')} icon={({color, size}) => (<Ionicons name="swap-horizontal-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navCheckUpdates} onPress={() => props.navigation.navigate('Check Updates')} icon={({color, size}) => (<Ionicons name="sync-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navInputNewWords} onPress={() => props.navigation.navigate('Input New Words')} icon={({color, size}) => (<Ionicons name="add-circle-outline" size={size} color={color} />)} />
      <DrawerItem label={labels.navAbout} onPress={() => props.navigation.navigate('About')} icon={({color, size}) => (<Ionicons name="information-circle-outline" size={size} color={color} />)} />
    </DrawerContentScrollView>
  );
}

function VoiceToTextScreen() {
  const C = useThemedColors();
  const [permission, requestPermission] = Audio.usePermissions();
  const [recording, setRecording] = React.useState<Audio.Recording | null>(null);
  const [statusText, setStatusText] = React.useState<string>('Tap record to start');
  const [transcript, setTranscript] = React.useState<string>('');
  const [busy, setBusy] = React.useState<boolean>(false);

  async function startRecording() {
    try {
      if (!permission || permission.status !== 'granted') {
        const res = await requestPermission();
        if (!res.granted) return;
      }
      await Audio.setAudioModeAsync({ allowsRecordingIOS: true, playsInSilentModeIOS: true });
      const rec = new Audio.Recording();
      await rec.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await rec.startAsync();
      setRecording(rec);
      setTranscript('');
      setStatusText('Recording…');
    } catch (e) {
      setStatusText('Failed to start recording');
    }
  }

  async function stopRecording() {
    try {
      if (!recording) return;
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      setStatusText('Processing audio…');
      if (uri) {
        try {
          setBusy(true);
          // Read API key from runtime env
          const apiKey = (global as any).expo?.config?.extra?.OPENAI_API_KEY ?? '';
          if (!apiKey) {
            setTranscript('(Set OPENAI_API_KEY in app/app.json extra to enable transcription)');
          } else {
            const text = await transcribeWithOpenAI(uri, apiKey);
            setTranscript(text);
          }
        } catch (e: any) {
          setTranscript(`(Transcription failed: ${e?.message ?? 'unknown error'})`);
        } finally {
          setBusy(false);
        }
      }
      setStatusText('Ready');
    } catch (e) {
      setStatusText('Failed to stop recording');
    }
  }


  //text to speeh
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }] }>
      <View style={[styles.container, { padding: 16 }]}>        
        <Text style={[styles.title, { color: C.textPrimary }]}>Voice to Text</Text>
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border }] }>
          <Text style={{ color: C.textSecondary, marginBottom: 8 }}>{statusText}</Text>
          {recording ? (
            <Pressable onPress={stopRecording} style={[styles.primaryBtn, { backgroundColor: '#DC2626' }] }>
              <Ionicons name="stop" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>Stop</Text>
            </Pressable>
          ) : (
            <Pressable onPress={startRecording} style={[styles.primaryBtn, { backgroundColor: '#2563EB' }] }>
              <Ionicons name="mic" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>Record</Text>
            </Pressable>
          )}
          <View style={{ height: 8 }} />
          <Text style={{ color: C.textPrimary }}>{busy ? 'Transcribing…' : transcript}</Text>
          {!!transcript && (
            <Pressable
              onPress={() => {
                try { (global as any).setSearchQuery?.(transcript); } catch {}
              }}
              style={[styles.primaryBtn, { backgroundColor: '#10B981', marginTop: 8 }]}
            >
              <Ionicons name="search" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>Use in Search</Text>
            </Pressable>
          )}
          <Text style={{ color: C.textTertiary, marginTop: 8 }}>
            Note: On-device transcription isn’t available in Expo Go. Use a dev build or connect a cloud STT API.
          </Text>
        </View>
      </View>
    </SafeAreaView>
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
      <Drawer.Screen name="AI Chat" component={AIChatScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />) }} />
      <Drawer.Screen name="Translate" component={TranslateScreen} options={{ drawerIcon: ({ color, size }) => (<Ionicons name="swap-horizontal-outline" size={size} color={color} />) }} />
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

  //about screen from voice to text screen
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    borderRadius: 10,
  },
  primaryBtnText: {
    color: '#fff',
    fontWeight: '700',
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
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  optionItem: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E5E7EB',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
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
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D1FAE5',
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
});
