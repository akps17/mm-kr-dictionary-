import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';

// Sample TOPIK questions (Basic Level)
const TOPIK_QUESTIONS = [
  {
    id: 1,
    question: '안녕하세요? 제 이름은 민수입니다.',
    myanmar: 'မင်္ဂလာပါ။ ကျွန်တော့်နာမည် မင်းစိုးပါ။',
    options: [
      { text: 'Hello', correct: false },
      { text: 'My name is Minsu', correct: true },
      { text: 'Goodbye', correct: false },
      { text: 'Thank you', correct: false },
    ],
  },
  {
    id: 2,
    question: '오늘 날씨가 좋습니다.',
    myanmar: 'ဒီနေ့ ရာသီဥတု ကောင်းပါတယ်။',
    options: [
      { text: 'Today weather is good', correct: true },
      { text: 'Tomorrow will rain', correct: false },
      { text: 'Yesterday was cold', correct: false },
      { text: 'It is snowing', correct: false },
    ],
  },
  {
    id: 3,
    question: '학교에서 한국어를 공부합니다.',
    myanmar: 'ကျောင်းမှာ ကိုရီးယားစာ လေ့လာပါတယ်။',
    options: [
      { text: 'I study English at school', correct: false },
      { text: 'I study Korean at school', correct: true },
      { text: 'I teach at school', correct: false },
      { text: 'I work at school', correct: false },
    ],
  },
  {
    id: 4,
    question: '지금 집에 갑니다.',
    myanmar: 'အခုဆိုရင် အိမ်ကို သွားပါမယ်။',
    options: [
      { text: 'I am at home', correct: false },
      { text: 'I am going home now', correct: true },
      { text: 'I came from home', correct: false },
      { text: 'I will stay at home', correct: false },
    ],
  },
  {
    id: 5,
    question: '친구하고 영화를 봅니다.',
    myanmar: 'သူငယ်ချင်းနဲ့ ရုပ်ရှင် ကြည့်ပါတယ်။',
    options: [
      { text: 'I watch a movie with friends', correct: true },
      { text: 'I watch TV alone', correct: false },
      { text: 'I listen to music', correct: false },
      { text: 'I read a book', correct: false },
    ],
  },
];

export function TOPIKTestScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);
  const [showResult, setShowResult] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [answers, setAnswers] = React.useState<boolean[]>([]);

  const question = TOPIK_QUESTIONS[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = question.options[selectedAnswer].correct;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < TOPIK_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const getTitle = () => {
    if (settings.uiLanguage === 'myanmar') return 'TOPIK စာမေးပွဲ (အခြေခံ)';
    if (settings.uiLanguage === 'korean') return 'TOPIK 시험 (기초)';
    return 'TOPIK Test (Basic)';
  };

  const getInstruction = () => {
    if (settings.uiLanguage === 'myanmar') 
      return 'အောက်ပါ ကိုရီးယား စာကြောင်းကို ဖတ်ပြီး မှန်ကန်သော အဓိပ္ပာယ်ကို ရွေးချယ်ပါ။';
    if (settings.uiLanguage === 'korean') 
      return '다음 한국어 문장을 읽고 올바른 의미를 선택하세요.';
    return 'Read the Korean sentence below and choose the correct meaning.';
  };

  if (showResult) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {/* Back Button */}
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              marginBottom: 20,
              padding: 8,
            }}
          >
            <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
            <Text style={{ fontSize: 16, color: C.textPrimary, marginLeft: 8 }}>
              {settings.uiLanguage === 'myanmar' ? 'နောက်သို့' : settings.uiLanguage === 'korean' ? '뒤로' : 'Back'}
            </Text>
          </Pressable>

          {/* Result Header */}
          <View style={{ alignItems: 'center', marginBottom: 32 }}>
            <View style={[styles.resultIcon, { backgroundColor: score >= 3 ? '#10B981' : '#EF4444' }]}>
              <Ionicons 
                name={score >= 3 ? 'trophy' : 'close-circle'} 
                size={48} 
                color="#FFFFFF" 
              />
            </View>
            <Text style={[styles.resultTitle, { color: C.textPrimary }]}>
              {settings.uiLanguage === 'myanmar' 
                ? 'ရလဒ်' 
                : settings.uiLanguage === 'korean' 
                ? '결과' 
                : 'Result'}
            </Text>
            <Text style={[styles.scoreText, { color: C.textPrimary }]}>
              {score} / {TOPIK_QUESTIONS.length}
            </Text>
            <Text style={{ fontSize: 16, color: C.textSecondary, marginTop: 8 }}>
              {score >= 3 
                ? (settings.uiLanguage === 'myanmar' 
                  ? 'အောင်မြင်ပါတယ်! 👏' 
                  : settings.uiLanguage === 'korean' 
                  ? '통과! 👏' 
                  : 'Passed! 👏')
                : (settings.uiLanguage === 'myanmar' 
                  ? 'ထပ်ကြိုးစားပါ! 💪' 
                  : settings.uiLanguage === 'korean' 
                  ? '다시 도전하세요! 💪' 
                  : 'Try again! 💪')}
            </Text>
          </View>

          {/* Review */}
          <View style={[styles.reviewCard, { backgroundColor: C.surface, borderColor: C.border }]}>
            <Text style={[styles.reviewTitle, { color: C.textPrimary }]}>
              {settings.uiLanguage === 'myanmar' 
                ? 'သင့်အဖြေများ' 
                : settings.uiLanguage === 'korean' 
                ? '답변 검토' 
                : 'Review Answers'}
            </Text>
            {TOPIK_QUESTIONS.map((q, index) => (
              <View key={q.id} style={styles.reviewItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons 
                    name={answers[index] ? 'checkmark-circle' : 'close-circle'} 
                    size={24} 
                    color={answers[index] ? '#10B981' : '#EF4444'} 
                  />
                  <Text style={{ fontSize: 16, color: C.textPrimary, marginLeft: 8, fontWeight: '600' }}>
                    {settings.uiLanguage === 'myanmar' 
                      ? `မေးခွန်း ${index + 1}` 
                      : settings.uiLanguage === 'korean' 
                      ? `문제 ${index + 1}` 
                      : `Question ${index + 1}`}
                  </Text>
                </View>
                <Text style={{ fontSize: 14, color: C.textSecondary, marginTop: 4 }}>
                  {q.question}
                </Text>
              </View>
            ))}
          </View>

          {/* Restart Button */}
          <Pressable
            onPress={handleRestart}
            style={[styles.primaryBtn, { backgroundColor: C.brand }]}
          >
            <Ionicons name="refresh" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />
            <Text style={styles.primaryBtnText}>
              {settings.uiLanguage === 'myanmar' 
                ? 'ပြန်စမ်းကြည့်မည်' 
                : settings.uiLanguage === 'korean' 
                ? '다시 시작' 
                : 'Restart Test'}
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Back Button */}
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 16,
            padding: 8,
          }}
        >
          <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
          <Text style={{ fontSize: 16, color: C.textPrimary, marginLeft: 8 }}>
            {settings.uiLanguage === 'myanmar' ? 'နောက်သို့' : settings.uiLanguage === 'korean' ? '뒤로' : 'Back'}
          </Text>
        </Pressable>

        {/* Header */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <View style={[styles.headerIcon, { backgroundColor: C.surface, borderColor: C.border }]}>
            <Ionicons name="school" size={36} color={C.brand} />
          </View>
          <Text style={[styles.title, { color: C.textPrimary }]}>
            {getTitle()}
          </Text>
          <View style={[styles.progressBar, { backgroundColor: C.border }]}>
            <View 
              style={[
                styles.progressFill, 
                { 
                  backgroundColor: C.brand,
                  width: `${((currentQuestion + 1) / TOPIK_QUESTIONS.length) * 100}%`
                }
              ]} 
            />
          </View>
          <Text style={{ fontSize: 14, color: C.textSecondary, marginTop: 8 }}>
            {settings.uiLanguage === 'myanmar' 
              ? `မေးခွန်း ${currentQuestion + 1} / ${TOPIK_QUESTIONS.length}` 
              : settings.uiLanguage === 'korean' 
              ? `문제 ${currentQuestion + 1} / ${TOPIK_QUESTIONS.length}` 
              : `Question ${currentQuestion + 1} / ${TOPIK_QUESTIONS.length}`}
          </Text>
        </View>

        {/* Instruction */}
        <View style={[styles.infoCard, { backgroundColor: C.surface, borderColor: C.border }]}>
          <Ionicons name="information-circle" size={20} color={C.brand} style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 13, color: C.textSecondary, flex: 1 }}>
            {getInstruction()}
          </Text>
        </View>

        {/* Question Card */}
        <View style={[styles.questionCard, { backgroundColor: C.surface, borderColor: C.border }]}>
          <Text style={[styles.questionLabel, { color: C.textTertiary }]}>
            {settings.uiLanguage === 'myanmar' 
              ? 'ကိုရီးယား စာကြောင်း' 
              : settings.uiLanguage === 'korean' 
              ? '한국어 문장' 
              : 'Korean Sentence'}
          </Text>
          <Text style={[styles.questionText, { color: C.textPrimary }]}>
            {question.question}
          </Text>
          <Text style={[styles.myanmarText, { color: C.textSecondary }]}>
            {question.myanmar}
          </Text>
        </View>

        {/* Options */}
        <Text style={[styles.optionsLabel, { color: C.textPrimary }]}>
          {settings.uiLanguage === 'myanmar' 
            ? 'ရွေးချယ်မှုများ:' 
            : settings.uiLanguage === 'korean' 
            ? '선택지:' 
            : 'Options:'}
        </Text>
        {question.options.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => handleAnswer(index)}
            style={[
              styles.optionCard,
              {
                backgroundColor: selectedAnswer === index ? C.brand + '15' : C.surface,
                borderColor: selectedAnswer === index ? C.brand : C.border,
                borderWidth: selectedAnswer === index ? 2 : 1.5,
              }
            ]}
          >
            <View style={[
              styles.optionCircle,
              {
                backgroundColor: selectedAnswer === index ? C.brand : 'transparent',
                borderColor: selectedAnswer === index ? C.brand : C.border,
              }
            ]}>
              {selectedAnswer === index && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </View>
            <Text style={[
              styles.optionText,
              { 
                color: selectedAnswer === index ? C.brand : C.textPrimary,
                fontWeight: selectedAnswer === index ? '600' : '400',
              }
            ]}>
              {option.text}
            </Text>
          </Pressable>
        ))}

        {/* Next Button */}
        <Pressable
          onPress={handleNext}
          disabled={selectedAnswer === null}
          style={[
            styles.primaryBtn,
            {
              backgroundColor: selectedAnswer === null ? C.border : C.brand,
              opacity: selectedAnswer === null ? 0.5 : 1,
            }
          ]}
        >
          <Text style={styles.primaryBtnText}>
            {currentQuestion < TOPIK_QUESTIONS.length - 1
              ? (settings.uiLanguage === 'myanmar' 
                ? 'နောက်သို့' 
                : settings.uiLanguage === 'korean' 
                ? '다음' 
                : 'Next')
              : (settings.uiLanguage === 'myanmar' 
                ? 'ပြီးဆုံးမည်' 
                : settings.uiLanguage === 'korean' 
                ? '완료' 
                : 'Finish')}
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" style={{ marginLeft: 8 }} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerIcon: {
    width: 70,
    height: 70,
    borderRadius: 18,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  progressBar: {
    width: '100%',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1.5,
    padding: 12,
    marginBottom: 16,
  },
  questionCard: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 18,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  questionLabel: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    lineHeight: 28,
  },
  myanmarText: {
    fontSize: 16,
    fontFamily: 'NotoSansMyanmar_400Regular',
    lineHeight: 24,
  },
  optionsLabel: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  optionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionText: {
    fontSize: 15,
    flex: 1,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  resultIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  scoreText: {
    fontSize: 48,
    fontWeight: '800',
  },
  reviewCard: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 16,
    marginBottom: 24,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  reviewItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
});

