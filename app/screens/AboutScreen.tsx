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
    intro: 'ကျွန်တော်တို့ရဲ့ Korean-Myanmar Dictionary App ကိုအသုံးပြုတဲ့သူတွေကို ကြိုဆိုပါတယ်။',
    reason: 'မြန်မာဘာသာစကားနဲ့ ကိုရီးယားဘာသာစကားကြား တိုက်ရိုက် ဘာသာပြန်ရာတွင် ပြည့်စုံကောင်းမွန်တဲ့အဘိဓာန်မရှိသေးတဲ့အတွက် ဒီအက်ပ်ကိုဖန်တီးခဲ့ပါတယ်။',
    audience: 'ဒီအက်ပ်ကို ကိုရီးယားနိုင်ငံမှာ နေထိုင်သူ မြန်မာနိုင်ငံသားများ၊ ပညာသင်ကြားနေသူများ နဲ့ ဘာသာစကားလေ့လာသူများအတွက် ရည်ရွယ်ထားပါတယ်။',
    featuresTitle: 'အက်ပ်ရဲ့ အဓိက Features များ',
    features: [
      'App Interface ကို မြန်မာ/ကိုရီးယား/အင်္ဂလိပ် ဘာသာဖြင့် လွယ်ကူစွာ အသုံးပြုနိုင်ခြင်း',
      'ကိုရီးယားစကားနှင့် မြန်မာစကားကို တိုက်ရိုက်ရှာဖွေရန်၊ ပြန်ဆိုရန် အလွယ်တကူ အသုံးပြုနိုင်ခြင်း',
      'လေ့လာသူများအတွက် အသုံးဝင်သော အသံထွက်၊ ဥပမာဝေါဟာရများ ထည့်သွင်းထားခြင်း',
      'စကားလုံးရှာဖွေမှု အရှိန်မြှင့်တင်ရန် သုံးသပ်ချက်များနှင့် စာရင်းများ ပံ့ပိုးပေးခြင်း',
      'အသုံးပြုသူများအနေနဲ့ အသစ်သော စကားလုံးများ၊ ဗျည်းများ (slangs) များကို တိုက်ရိုက်ထည့်သွင်းနိုင်ခြင်း',
      'Quiz များ၊ Practice ဌာနများဖြင့် ဘာသာစကားကျွမ်းကျင်မှု တိုးတက်စေရန် ကူညီပေးခြင်း',
      'Speaking Test အစီအစဉ်များဖြင့် စကားပြောနိုင်စွမ်း တိုးတက်စေရန် အခွင့်အရေးပေးခြင်း',
      'Google AI Chatbot နှင့် ဘာသာပြန်ဆိုမှု အစီအစဉ်များ ပါဝင်ခြင်း',
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
    reason: '미얀마어와 한국어 간의 직접 번역을 위한 완벽한 사전이 없기 때문에 이 앱을 만들었습니다.',
    audience: '이 앱은 한국에 거주하는 미얀마 국민, 학생 및 언어 학습자를 위해 설계되었습니다.',
    featuresTitle: '주요 기능',
    features: [
      '미얀마어/한국어/영어로 앱 인터페이스를 쉽게 사용할 수 있습니다',
      '한국어와 미얀마어를 직접 검색하고 번역할 수 있습니다',
      '학습자를 위한 유용한 발음 및 예문이 포함되어 있습니다',
      '검색 속도를 높이기 위한 북마크 및 히스토리 기능 지원',
      '사용자가 새로운 단어와 속어를 직접 추가할 수 있습니다',
      '퀴즈 및 연습 섹션으로 언어 능력 향상을 도와줍니다',
      '말하기 테스트 프로그램으로 말하기 능력 향상 기회 제공',
      'Google AI 챗봇 및 번역 기능 포함',
      '일상 사용을 위한 간편한 UI 및 다크/라이트 모드 지원',
    ],
    contactTitle: '연락처',
    contactText: '질문이나 제안이 있으시면 이메일로 연락주세요',
    developerName: '웅꼬꼬 (AUNG KO KO)',
    version: '버전',
  },
  english: {
    title: 'About',
    intro: 'Welcome to our Korean-Myanmar Dictionary App!',
    reason: 'We created this app because there is no comprehensive dictionary for direct translation between Myanmar and Korean languages.',
    audience: 'This app is designed for Myanmar citizens living in Korea, students, and language learners.',
    featuresTitle: 'Key Features',
    features: [
      'Easy-to-use app interface in Myanmar/Korean/English languages',
      'Direct search and translation between Korean and Myanmar languages',
      'Useful pronunciation and example sentences for learners',
      'Bookmark and history features to speed up word searches',
      'Users can directly add new words and slangs',
      'Quizzes and practice sections help improve language skills',
      'Speaking test programs provide opportunities to improve speaking abilities',
      'Includes Google AI Chatbot and translation features',
      'Easy-to-use UI for daily use with Dark/Light mode support',
    ],
    contactTitle: 'Contact',
    contactText: 'If you have any questions or suggestions, please email me',
    developerName: 'AUNG KO KO',
    version: 'Version',
  },
};

export function AboutScreen() {
  const C = useThemedColors();
  const { settings } = useSettings();
  
  const content = aboutContent[settings.uiLanguage];
  const email = 'aungko17101999@gmail.com';
  const appVersion = '1.0.0';

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
              ? 'အက်ပ်ကို အသုံးပြုသူများအတွက် အကောင်းဆုံး အတွေ့အကြုံ ဖန်တီးပေးရန် ကြိုးစားနေပါသည်။'
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

