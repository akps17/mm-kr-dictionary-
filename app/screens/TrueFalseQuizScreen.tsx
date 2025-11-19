import React from 'react';
import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useUserPoints } from '../data/UserPointsContext';
import { useDictionarySync, mergeApprovedWords } from '../data/DictionarySync';
import { dictionaryEntries } from '../data/dictionary';
import { generateTF, type DifficultyLevel } from '../data/quiz';
import { i18nLabels } from '../data/settings';

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
  const ko = en;
  const pick = (arr: string[]) => (pct >= 90 ? arr[0] : pct >= 70 ? arr[1] : pct >= 50 ? arr[2] : arr[3]);
  if (uiLang === 'myanmar') return pick(mm);
  if (uiLang === 'korean') return pick(ko);
  return pick(en);
}

export function TrueFalseQuizScreen({ route, navigation }: { route: any; navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { addPoints } = useUserPoints();
  const { approvedWords } = useDictionarySync();
  const selectedLevel: DifficultyLevel = route?.params?.selectedLevel || 'all';
  
  // Create merged dictionary for quiz generation
  const mergedDictionary = React.useMemo(() => {
    return mergeApprovedWords(dictionaryEntries, approvedWords);
  }, [approvedWords]);
  
  const [questions, setQuestions] = React.useState(() => generateTF(20, mergedDictionary, selectedLevel));
  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<boolean | null>(null);
  const [score, setScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(45);
  const [pointsAwarded, setPointsAwarded] = React.useState(false);
  
  // Update questions when dictionary or level changes
  React.useEffect(() => {
    setQuestions(generateTF(20, mergedDictionary, selectedLevel));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setTimeLeft(45);
    setPointsAwarded(false);
  }, [mergedDictionary, selectedLevel]);
  
  const q = questions[index];
  const done = index >= questions.length || timeLeft === 0;

  // Award points for perfect score
  React.useEffect(() => {
    if (done && score === questions.length && !pointsAwarded && questions.length > 0) {
      setPointsAwarded(true);
      addPoints(10, false); // Award 10 points, don't increment submission count
    }
  }, [done, score, questions.length, pointsAwarded, addPoints]);

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

  const handleReset = React.useCallback(() => {
    setQuestions(generateTF(20, mergedDictionary, selectedLevel));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setTimeLeft(45);
    setPointsAwarded(false);
  }, [mergedDictionary, selectedLevel]);

  if (done) {
    const isPerfect = score === questions.length;
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="medal-outline" size={64} color="#10B981" />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 8 }]}>Score: {score}/{questions.length}</Text>
          {isPerfect && (
            <View style={{ 
              backgroundColor: C.brandMuted, 
              paddingHorizontal: 16, 
              paddingVertical: 8, 
              borderRadius: 12, 
              marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
              <Ionicons name="star" size={20} color={C.brand} />
              <Text style={{ color: C.brand, fontWeight: '700', fontSize: 16 }}>
                {labels.earnedPoints || '+10 Points Earned! 🎉'}
              </Text>
            </View>
          )}
          <Text style={{ color: C.textSecondary, textAlign: 'center', marginTop: 6 }}>{getMotivation(score, questions.length, settings.uiLanguage)}</Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
            <Pressable
              onPress={handleReset}
              style={[styles.primaryBtn, { backgroundColor: '#2563EB' }]}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>{labels.restart || 'Restart'}</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}> 
      <View style={{ flex: 1, padding: 16, paddingTop: 56 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            { 
              position: 'absolute',
              top: 16,
              left: 16,
              padding: 8,
              zIndex: 10,
              opacity: pressed ? 0.5 : 1 
            }
          ]}
        >
          <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
        </Pressable>
        <View style={[styles.timerChip, { position: 'absolute', right: 16, top: 16, backgroundColor: C.surface, borderColor: C.border, borderWidth: 1 }]}>
          <Ionicons name="time-outline" size={16} color={C.brand} />
          <Text style={{ color: C.textPrimary, fontWeight: '700' }}>{timeLeft}s</Text>
        </View>
        <Text style={{ color: C.textTertiary, textAlign: 'center', marginTop: 6, marginBottom: 12, paddingLeft: 40, paddingRight: 72 }}>{labels.quizTFHelp}</Text>
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
              <Text style={styles.primaryBtnText}>{labels.true || 'True'}</Text>
            </Pressable>
            <Pressable onPress={() => submit(false)} style={[styles.primaryBtn, { backgroundColor: '#EF4444', flex: 1 }]}>
              <Ionicons name="close-circle" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>{labels.false || 'False'}</Text>
            </Pressable>
          </View>
          <Text style={{ color: C.textTertiary, marginTop: 8, textAlign: 'center' }}>{index + 1} / {questions.length}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  timerChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});

