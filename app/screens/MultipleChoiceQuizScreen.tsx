import React from 'react';
import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useUserPoints } from '../data/UserPointsContext';
import { useDictionarySync, mergeApprovedWords } from '../data/DictionarySync';
import { dictionaryEntries } from '../data/dictionary';
import { generateMCQ, type DifficultyLevel } from '../data/quiz';
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
  const ko = en; // fallback to English for now
  const pick = (arr: string[]) => (pct >= 90 ? arr[0] : pct >= 70 ? arr[1] : pct >= 50 ? arr[2] : arr[3]);
  if (uiLang === 'myanmar') return pick(mm);
  if (uiLang === 'korean') return pick(ko);
  return pick(en);
}

export function MultipleChoiceQuizScreen({ route, navigation }: { route: any; navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { addPoints } = useUserPoints();
  const { approvedWords } = useDictionarySync();
  const selectedLevel: DifficultyLevel = route?.params?.selectedLevel || 'all';
  
  // Create merged dictionary for quiz generation
  const mergedDictionary = React.useMemo(() => {
    console.log('Merging dictionary for MCQ...');
    const merged = mergeApprovedWords(dictionaryEntries, approvedWords);
    console.log(`Merged dictionary has ${merged.length} total words`);
    return merged;
  }, [approvedWords]);

  // Prevent unnecessary resets when dictionary hasn't actually changed
  const dictionaryKey = React.useMemo(() => 
    mergedDictionary.map(w => w.korean + w.myanmar).join(','),
    [mergedDictionary]
  );

  // Generate questions only once initially and when dictionary changes
  const [questions, setQuestions] = React.useState(() => {
    console.log('Initial MCQ question generation with level:', selectedLevel);
    return generateMCQ(20, mergedDictionary, selectedLevel);
  });

  // Update questions when dictionary or level changes
  React.useEffect(() => {
    console.log('Updating MCQ questions due to dictionary/level change...');
    setQuestions(generateMCQ(20, mergedDictionary, selectedLevel));
  }, [mergedDictionary, selectedLevel]);

  const [index, setIndex] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [score, setScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(60);
  const [pointsAwarded, setPointsAwarded] = React.useState(false);

  // Memoize the reset function
  const handleReset = React.useCallback(() => {
    console.log('Restarting MCQ quiz...');
    // First stop the timer by setting it to 0
    setTimeLeft(0);
    // Then generate new questions and reset state
    setQuestions(generateMCQ(20, mergedDictionary, selectedLevel));
    setIndex(0);
    setScore(0);
    setSelected(null);
    setPointsAwarded(false);
    // Finally start the new timer
    setTimeout(() => setTimeLeft(60), 0);
  }, [mergedDictionary, selectedLevel]);

  // Update questions when dictionary content actually changes
  React.useEffect(() => {
    console.log('Dictionary content changed, resetting quiz...');
    handleReset();
  }, [dictionaryKey]);

  // Timer effect - only run when index changes or when quiz is reset
  React.useEffect(() => {
    if (timeLeft === 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev > 0 ? prev - 1 : 0;
        if (next === 0 && index < questions.length - 1) {
          // Auto-advance to next question when time runs out
          setIndex(i => i + 1);
          setSelected(null);
          setTimeLeft(60);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [index, questions.length, timeLeft]);

  const q = questions[index];
  const done = index >= questions.length || timeLeft === 0;

  // Award points for perfect score
  React.useEffect(() => {
    if (done && score === questions.length && !pointsAwarded && questions.length > 0) {
      setPointsAwarded(true);
      addPoints(10, false); // Award 10 points, don't increment submission count
    }
  }, [done, score, questions.length, pointsAwarded, addPoints]);

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
    const isPerfect = score === questions.length;
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="trophy" size={64} color="#F59E0B" />
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
      <View style={{ padding: 16, position: 'relative', paddingTop: 56 }}>
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
        <View style={[styles.timerChip, { backgroundColor: C.surface, borderColor: C.border, borderWidth: 1 }]}>
          <Ionicons name="time-outline" size={16} color={C.brand} />
          <Text style={{ color: C.textPrimary, fontWeight: '700' }}>{timeLeft}s</Text>
        </View>
        <Text style={{ color: C.textTertiary, textAlign: 'center', marginTop: 6, marginBottom: 12, paddingLeft: 40, paddingRight: 72 }}>{labels.quizMCQHelp}</Text>
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
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionItem: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  optionItemCorrect: {
    backgroundColor: '#D1FAE5',
    borderColor: '#10B981',
  },
  optionItemWrong: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
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

