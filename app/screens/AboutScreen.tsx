import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Linking,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { AppLanguage } from '../data/settings';

interface AboutContent {
  title: string;
  intro: string;
  reason: string;
  audience: string;
  featuresTitle: string;
  features: string[];
  contactTitle: string;
  contactText: string;
  developerName: string;
  version: string;
}

const aboutContent: Record<AppLanguage, AboutContent> = {
  myanmar: {
    title: 'အက်ပ်အကြောင်း',
    intro: 'ကျွန်တော်ရဲ့ Korean-Myanmar Dictionary App ကိုအသုံးပြုတဲ့သူတွေကို ကြိုဆိုပါတယ်။',
    reason: 'ကျွန်တော်ကတော့ ရန်ကုန်နိုင်ငံခြားဘာသာ တက္ကသိုလ် (ကိုရီးယားမေဂျာ စတုတ္ထနှစ်), လက်ရှိ SunMoon University (Information Technology Major) မှ ကျောင်းသားတစ်ဦးဖြစ်ပြီး ဤအက်ပ်ကို ကျောင်းပရောဂျက် (School Project) အဖြစ် ရေးသားထားခြင်းဖြစ်ပါတယ်။ မြန်မာဘာသာစကားနဲ့ ကိုရီးယားဘာသာစကားကြား တိုက်ရိုက် ဘာသာပြန်ရာတွင် ပြည့်စုံကောင်းမွန်တဲ့ အဘိဓာန် မရှိသေးတဲ့အတွက် ဒီအက်ပ်ကို လုပ်ဖြစ်ခဲ့တာပါ။ အသုံးပြုသူများ၏ တောင်းဆိုမှုများကို အမြဲစစ်ဆေးပြီး လိုအပ်ချက်အလိုက် အက်ပ်ကို တိုးတက်အောင် လုပ်ဆောင်သွားပါမယ်ခင်ဗျာ။',
    audience: 'ဒီအက်ပ်ကို ကိုရီးယားနိုင်ငံမှာ နေထိုင်သူ မြန်မာနိုင်ငံသားများ၊ ပညာသင်ကြားနေသူများ နဲ့ ဘာသာစကားလေ့လာသူများအတွက် ရည်ရွယ်ထားပါတယ်။',
    featuresTitle: 'အက်ပ်ရဲ့ အဓိက Features များ',
    features: [
      'App Interface ကို မြန်မာ /ကိုရီးယား /အင်္ဂလိပ် ဘာသာဖြင့် လွယ်ကူစွာ အသုံးပြုနိုင်ခြင်း',
      'ကိုရီးယား / မြန်မာ / အင်္ဂလိပ် စကားလုံးများကို တိုက်ရိုက်ရှာဖွေပြီး အသုံးပြုနိုင်ခြင်း',
      'အသံထွက် (Pronunciation)  - စကားလုံးများကို အသံထွက်ဖြင့် နားထောင်နိုင်ခြင်း (ဆက်တင်တွင် အနှေး / ပုံမှန် / အမြန် ရွေးချယ်နိုင်ခြင်း)',
      'လေ့လာသူများအတွက် အသုံးဝင်သော အသံထွက်များ၊ ဥပမာဝေါဟာရများ ထည့်သွင်းထားခြင်း',
      'Synonyms (အဓိပ္ပာယ်တူ) နှင့် Antonyms (ဆန့်ကျင်ဘက်) စကားလုံးများ ဆက်စပ် ရှာဖွေနိုင်ခြင်း',
      'စကားလုံးရှာတွင် သုံးသပ်ချက်များနှင့် LEVELS များ  ေဖာ်ပြပေးခြင်း',
      'အသုံးပြုသူများအနေနဲ့  စကားလုံးအသစ်များ (slangs) များကို Admin ခွင့်ပြုချက်ဖြင့်  APP Database သို့တိုက်ရိုက်ထည့်ခြင်းဖြင့် Burmese(Korean Learners Community) အား ပံပို့ပေးနိုင်ခြင်း',
      'Quiz များ၊ Practice Sessions များဖြင့် ဘာသာစကားကျွမ်းကျင်မှု တိုးတက်စေရန် ကူညီပေးခြင်း',
      '(Future Feature) TOPIK Test အစီစဉ်များ - TOPIK I (Level 1-2) နှင့် TOPIK II (Level 3-6) စမ်းသပ်မှုများ ပါဝင်ခြင်း',
      'Speaking Test အစီအစဉ်များဖြင့် စကားပြောနိုင်စွမ်း တိုးတက်စေရန်  လေ့ကျင့်နိုင်ခြင်း',
      '(Future Feature) AI Chatbot နှင့် ဘာသာပြန်ဆိုမှု / သဒ္ဒါ ရှင်းလင်းချက် ဖန်ရှင်များ ပါဝင်ခြင်းဖြင့် စာလေ့လာရာတွင် အထောက်အကူပေးခြင်း',
      'Google အကောင့်ဖြင့် လွယ်ကူစွာ ဝင်ရောက်နိုင်ခြင်း - Google Sign-In ဖြင့် အကောင့်ဖွင့်နိုင်ပြီး အသုံးပြုနိုင်ခြင်း',
      'အစီရင်ခံစာ ပုံစံ - (စကားလုံးအသစ်များ) / Category အလိုက် စကားလုံးအသစ် များထည့်သွင်းရန် (သို့မဟုတ်) ဘာသာပြန်မှားယွင်းမှုများ ပြင်ဆင်ရန် Admin Team သို့တိုက်ရိုက် အစီရင်ခံနိုင်ခြင်း',
      '⭐ PRO User Features - အထူးလုပ်ဆောင်ချက်များကို PRO အဖွဲ့ဝင်များအတွက် ရရှိနိုင်ခြင်း',
      'နေ့စဉ်အသုံးပြုမှုအတွက် လွယ်ကူသော UI နှင့် Dark/Light Mode ပံ့ပိုးမှု',
    ],
    contactTitle: 'ဆက်သွယ်ရန်',
    contactText: 'မေးမြန်းစရာများ၊ အကြံပြုလိုသောအချက်များရှိပါက ကျွန်တော့်ကို အီးမေးလ်ပို့ပါ',
    developerName: 'AUNG KO KO',
    version: 'ဗားရှင်း',
  },
  korean: {
    title: '앱 소개',
    intro: '한국어-미얀마어 사전 앱을 사용해 주셔서 감사합니다.',
    reason: '저는 선문대학교(정보통신 전공) 학생이며, 이 앱은 학교 프로젝트(School Project)로 프로그래밍한 것입니다. 미얀마어와 한국어 간의 직접 번역을 위한 완벽한 사전이 없기 때문에 이 앱을 만들었습니다. 저는 항상 사용자들의 요구사항을 확인하고 사용자들의 의견에 따라 앱을 개선해 나가겠습니다.',
    audience: '이 앱은 한국에 거주하는 미얀마 국민, 학생 및 언어 학습자를 위해 설계되었습니다.',
    featuresTitle: '주요 기능',
    features: [
      '미얀마어/한국어/영어로 앱 인터페이스를 쉽게 사용할 수 있습니다',
      '한국어, 미얀마어, 영어를 직접 검색하고 번역할 수 있습니다',
      '발음 기능 (Pronunciation) - 단어를 발음하고 들을 수 있습니다 (설정에서 느림/기본/빠름 속도 조절 가능)',
      '학습자를 위한 유용한 발음 및 예문이 포함되어 있습니다',
      '동의어 (Synonyms) 및 반의어 (Antonyms) 단어 검색 기능',
      '검색 속도를 높이기 위한 북마크 및 히스토리 기능 지원',
      '사용자가 새로운 단어와 속어를 직접 추가할 수 있습니다',
      '퀴즈 및 연습 섹션으로 언어 능력 향상을 도와줍니다',
      'TOPIK 시험 프로그램 - TOPIK I (Level 1-2) 및 TOPIK II (Level 3-6) 테스트 포함',
      '말하기 테스트 프로그램으로 말하기 능력 향상 기회 제공',
      'Google AI 챗봇 및 번역 기능 포함',
      '간편한 Google 로그인 - Google 계정으로 빠르고 안전하게 로그인 가능',
      '신고 양식 - 새 단어, 새 카테고리 요청 또는 번역 오류 신고를 통해 사전 개선에 도움',
      '⭐ PRO 사용자 기능 - 특별 기능을 PRO 회원에게 제공',
      '일상 사용을 위한 간편한 UI 및 다크/라이트 모드 지원',
    ],
    contactTitle: '연락처',
    contactText: '질문이나 제안이 있으시면 이메일로 연락주세요',
    developerName: '아웅코코 (AUNG KO KO)',
    version: '버전',
  },
  english: {
    title: 'About',
    intro: 'Welcome to  Korean-Myanmar Dictionary App!',
    reason: 'I am a student from SunMoon University (Information Technology Major) and I programmed this app for my School Project. We created this app because there is no comprehensive dictionary for direct translation between Myanmar and Korean languages. I will always check user demands and improve my app depending on users\' voice.',
    audience: 'This app is designed for Myanmar citizens living in Korea, students, and language learners.',
    featuresTitle: 'Key Features',
    features: [
      'Easy-to-use app interface in Myanmar/Korean/English languages',
      'Direct search and translation between Korean and Myanmar languages',
      'Pronunciation feature - Listen to and practice word pronunciations (adjustable speed: slow/default/fast in settings)',
      'Useful pronunciation and example sentences for learners',
      'Synonyms and Antonyms search - Find related and opposite words',
      'Bookmark and history features to speed up word searches',
      'Users can directly add new words and slangs',
      'Quizzes and practice sections help improve language skills',
      'TOPIK Test programs - TOPIK I (Level 1-2) and TOPIK II (Level 3-6) tests included',
      'Speaking test programs provide opportunities to improve speaking abilities',
      'Includes Google AI Chatbot and translation features',
      'Easy Google Login - Sign in with your Google account for quick and secure access',
      'Report Form - Submit requests for new words, new categories, or report translation errors to help improve the dictionary',
      '⭐ PRO User Features - Exclusive features available for PRO members',
      'Easy-to-use UI for daily use with Dark/Light mode support',
    ],
    contactTitle: 'Contact',
    contactText: 'If you have any questions or suggestions, please email me',
    developerName: 'AUNG KO KO',
    version: 'Version (BETA)',
  },
};

export function AboutScreen() {
  const C = useThemedColors();
  const { settings } = useSettings();
  
  const content = aboutContent[settings.uiLanguage];
  const email = 'edu.mmkr@gmail.com';
  const appVersion = '(BETA) 1.0.0';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView 
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Image 
            source={require('../assets/dictionary_icon.png')} 
            style={styles.logo}
          />
          <Text style={[styles.title, { color: C.textPrimary }]}>
            {content.title}
          </Text>
          <Text style={{ fontSize: 14, color: C.textSecondary, marginTop: 4 }}>
            {content.version} {appVersion}
          </Text>
        </View>

        {/* Introduction Card */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <View style={styles.iconCircle}>
              <Ionicons name="information-circle" size={24} color="#4285F4" />
            </View>
            <Text style={[styles.cardTitle, { color: C.textPrimary }]}>
              {settings.uiLanguage === 'myanmar' ? 'မိတ်ဆက်' : settings.uiLanguage === 'korean' ? '소개' : 'Introduction'}
            </Text>
          </View>
          
          <Text 
            allowFontScaling={false} 
            style={[styles.paragraph, { 
              color: C.textPrimary,
              fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
            }]}
          >
            {content.intro}
          </Text>
          
          <Text 
            allowFontScaling={false} 
            style={[styles.paragraph, { 
              color: C.textPrimary,
              fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
            }]}
          >
            {content.reason}
          </Text>
          
          <Text 
            allowFontScaling={false} 
            style={[styles.paragraph, { 
              color: C.textPrimary, 
              marginBottom: 0,
              fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
            }]}
          >
            {content.audience}
          </Text>
        </View>

        {/* Features Card */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <View style={[styles.iconCircle, { backgroundColor: '#10B981' + '15' }]}>
              <Ionicons name="star" size={24} color="#10B981" />
            </View>
            <Text style={[styles.cardTitle, { color: C.textPrimary }]}>
              {content.featuresTitle}
            </Text>
          </View>

          {content.features.map((feature, idx) => (
            <View key={idx} style={styles.featureRow}>
              <View style={styles.checkCircle}>
                <Ionicons name="checkmark" size={16} color="#fff" />
              </View>
              <Text 
                allowFontScaling={false} 
                style={[styles.featureText, { 
                  color: C.textPrimary,
                  fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
                }]}
              >
                {feature}
              </Text>
            </View>
          ))}
        </View>

        {/* Contact Card */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <View style={[styles.iconCircle, { backgroundColor: '#EF4444' + '15' }]}>
              <Ionicons name="mail" size={24} color="#EF4444" />
            </View>
            <Text style={[styles.cardTitle, { color: C.textPrimary }]}>
              {content.contactTitle}
            </Text>
          </View>

          <Text 
            allowFontScaling={false} 
            style={[styles.paragraph, { 
              color: C.textPrimary,
              fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
            }]}
          >
            {content.contactText}
          </Text>

          <View style={[styles.developerCard, { backgroundColor: C.background, borderColor: C.border }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <Ionicons name="person-circle" size={32} color="#4285F4" />
              <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 12, color: C.textSecondary, marginBottom: 2 }}>
                  {settings.uiLanguage === 'myanmar' ? 'Developer' : settings.uiLanguage === 'korean' ? '개발자' : 'Developer'}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '700', color: C.textPrimary }}>
                  {content.developerName}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => Linking.openURL(`mailto:${email}`)}
              style={({ pressed }) => [
                styles.emailButton,
                { 
                  backgroundColor: pressed ? '#4285F4' : C.brand,
                  opacity: pressed ? 0.9 : 1,
                }
              ]}
            >
              <Ionicons name="mail-outline" size={18} color="#fff" />
              <Text style={styles.emailButtonText}>{email}</Text>
            </Pressable>
          </View>
        </View>

        {/* Footer */}
        <View style={{ alignItems: 'center', marginTop: 24, paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 13, color: C.textTertiary, textAlign: 'center', lineHeight: 20 }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'အက်ပ်ကို အသုံးပြုသူများအတွက် အကောင်းဆုံး ဖန်တီးပေးရန် ကြိုးစားနေပါသည်။'
              : settings.uiLanguage === 'korean'
              ? '사용자를 위한 최상의 경험을 만들기 위해 노력하고 있습니다.'
              : 'We strive to create the best experience for our users.'}
          </Text>
          <Text style={{ fontSize: 12, color: C.textTertiary, marginTop: 8 }}>
            © 2024 Korean-Myanmar Dictionary
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 0,
    outlineWidth: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  card: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4285F4' + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
  },
  developerCard: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginTop: 8,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#4285F4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  emailButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});

