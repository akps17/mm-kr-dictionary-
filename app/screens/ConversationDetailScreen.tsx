import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import * as Speech from 'expo-speech';
import { getVoiceSpeedRate } from '../data/settings';

type ConversationPhrase = {
  korean: string;
  myanmar: string;
  english: string;
};

type ConversationData = {
  [key: string]: ConversationPhrase[];
};

// Sample conversation data - you can expand this with actual phrases
const CONVERSATION_DATA: ConversationData = {
  greetings: [
    { korean: '안녕하세요', myanmar: 'မင်္ဂလာပါ', english: 'Hello' },
    { korean: '안녕히 가세요', myanmar: 'သွားတော့မယ်', english: 'Goodbye (when leaving)' },
    { korean: '안녕히 계세요', myanmar: 'နေတော့မယ်', english: 'Goodbye (when staying)' },
  ],
  introductions: [
    { korean: '제 이름은 ...입니다', myanmar: 'ကျွန်တော့်နာမည်က ... ဖြစ်ပါတယ်', english: 'My name is ...' },
    { korean: '만나서 반갑습니다', myanmar: 'တွေ့ရတာ ဝမ်းသာပါတယ်', english: 'Nice to meet you' },
  ],
  'saying-goodbye': [
    { korean: '안녕히 가세요', myanmar: 'သွားတော့မယ်', english: 'Goodbye' },
    { korean: '다음에 또 봐요', myanmar: 'နောက်တစ်ခါ ထပ်တွေ့မယ်', english: 'See you next time' },
  ],
  'describing-people': [
    { korean: '그는 키가 커요', myanmar: 'သူက အရပ်ရှည်တယ်', english: 'He is tall' },
    { korean: '그녀는 친절해요', myanmar: 'သူမက ကြင်နာတယ်', english: 'She is kind' },
  ],
  'describing-things': [
    { korean: '이것은 크다', myanmar: 'ဒါက ကြီးတယ်', english: 'This is big' },
    { korean: '저것은 작다', myanmar: 'ဒါက သေးတယ်', english: 'That is small' },
  ],
  'describing-houses': [
    { korean: '집이 넓어요', myanmar: 'အိမ်က ကျယ်တယ်', english: 'The house is spacious' },
    { korean: '방이 깨끗해요', myanmar: 'အခန်းက သန့်ရှင်းတယ်', english: 'The room is clean' },
  ],
  'describing-abilities': [
    { korean: '저는 한국어를 할 수 있어요', myanmar: 'ကျွန်တော်က ကိုရီးယားစကား ပြောနိုင်တယ်', english: 'I can speak Korean' },
    { korean: '그는 수영을 잘해요', myanmar: 'သူက ရေကူးကောင်းတယ်', english: 'He swims well' },
  ],
  'job-interview': [
    { korean: '자기소개를 해주세요', myanmar: 'ကိုယ့်ကိုယ်ကို မိတ်ဆက်ပေးပါ', english: 'Please introduce yourself' },
    { korean: '어떤 경험이 있나요?', myanmar: 'ဘယ်လို အတွေ့အကြုံရှိလဲ?', english: 'What experience do you have?' },
  ],
  'inviting-accepting-refusing': [
    { korean: '함께 가실래요?', myanmar: 'အတူတူ သွားမလား?', english: 'Would you like to come together?' },
    { korean: '네, 좋아요', myanmar: 'အင်း၊ ကောင်းတယ်', english: 'Yes, I would like to' },
    { korean: '죄송하지만 안 될 것 같아요', myanmar: 'စိတ်မကောင်းပါဘူး၊ မဖြစ်နိုင်ဘူးထင်တယ်', english: 'Sorry, I don\'t think I can' },
  ],
  shopping: [
    { korean: '얼마예요?', myanmar: 'ဘယ်လောက်လဲ?', english: 'How much is it?' },
    { korean: '이거 주세요', myanmar: 'ဒါကို ပေးပါ', english: 'Please give me this' },
  ],
  apologizing: [
    { korean: '죄송합니다', myanmar: 'စိတ်မကောင်းပါဘူး', english: 'I\'m sorry' },
    { korean: '미안해요', myanmar: 'တောင်းပန်ပါတယ်', english: 'Sorry' },
  ],
  comparing: [
    { korean: '이것은 그것보다 크다', myanmar: 'ဒါက ဒါထက် ကြီးတယ်', english: 'This is bigger than that' },
    { korean: '가장 좋아요', myanmar: 'အကောင်းဆုံးပါ', english: 'It\'s the best' },
  ],
};

export function ConversationDetailScreen({ route, navigation }: { route: any; navigation: any }) {
  const { categoryId, categoryTitle } = route.params;
  const C = useThemedColors();
  const { settings } = useSettings();
  const [speakingIndex, setSpeakingIndex] = React.useState<number | null>(null);

  const phrases = CONVERSATION_DATA[categoryId] || [];

  const playPhrase = async (phrase: ConversationPhrase, index: number) => {
    if (speakingIndex === index) {
      await Speech.stop();
      setSpeakingIndex(null);
      return;
    }

    if (speakingIndex !== null) {
      await Speech.stop();
    }

    try {
      setSpeakingIndex(index);
      await Speech.speak(phrase.korean, {
        language: 'ko-KR',
        pitch: 0.5,
        rate: getVoiceSpeedRate(settings.voiceSpeed),
        onDone: () => setSpeakingIndex(null),
        onStopped: () => setSpeakingIndex(null),
        onError: () => setSpeakingIndex(null),
      });
    } catch (error) {
      console.error('Error playing phrase:', error);
      setSpeakingIndex(null);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView 
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <Pressable
          onPress={() => navigation.navigate('Conversation')}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16,
            paddingVertical: 8,
            paddingHorizontal: 4,
            opacity: pressed ? 0.6 : 1,
          })}
        >
          <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
          <Text style={{ color: C.textPrimary, fontSize: 16, fontWeight: '600' }}>
            {settings.uiLanguage === 'myanmar' ? 'နောက်သို့' : settings.uiLanguage === 'korean' ? '뒤로' : 'Back'}
          </Text>
        </Pressable>

        {/* Phrases */}
        {phrases.length > 0 ? (
          <View style={{ gap: 16, width: '100%' }}>
            {phrases.map((phrase, index) => {
              const isSpeaking = speakingIndex === index;
              return (
                <View 
                  key={index}
                  style={[
                    styles.phraseCard,
                    { 
                      backgroundColor: C.surface,
                      borderColor: C.border,
                    }
                  ]}
                >
                  <View style={styles.phraseHeader}>
                    <Text style={[styles.koreanText, { color: C.textPrimary }]}>
                      {phrase.korean}
                    </Text>
                    <Pressable
                      onPress={() => playPhrase(phrase, index)}
                      style={({ pressed }) => [
                        styles.speakerButton,
                        isSpeaking && { backgroundColor: C.brand + '20' },
                        pressed && { opacity: 0.7 }
                      ]}
                    >
                      <Ionicons 
                        name={isSpeaking ? "volume-high" : "volume-high-outline"}
                        size={20}
                        color={isSpeaking ? C.brand : C.textSecondary}
                      />
                    </Pressable>
                  </View>
                  <Text 
                    allowFontScaling={false}
                    numberOfLines={0}
                    style={[
                      styles.myanmarText,
                      { 
                        color: C.textSecondary,
                        fontFamily: 'NotoSansMyanmar_400Regular',
                      }
                    ]}
                  >
                    {phrase.myanmar}
                  </Text>
                  <Text style={[styles.englishText, { color: C.textTertiary }]}>
                    {phrase.english}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: C.textSecondary }]}>
              {settings.uiLanguage === 'myanmar' 
                ? 'အကြောင်းအရာများ မရှိသေးပါ'
                : settings.uiLanguage === 'korean'
                ? '내용이 아직 없습니다'
                : 'No content available yet'}
            </Text>
          </View>
        )}
      </ScrollView>
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
    letterSpacing: 0.5,
  },
  phraseCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
    width: '100%',
    overflow: 'visible',
  },
  phraseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
    width: '100%',
  },
  koreanText: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    flexShrink: 1,
  },
  speakerButton: {
    padding: 6,
    borderRadius: 16,
    marginLeft: 8,
    flexShrink: 0,
  },
  myanmarText: {
    fontSize: 15,
    lineHeight: 28,
    marginTop: 4,
  },
  englishText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

