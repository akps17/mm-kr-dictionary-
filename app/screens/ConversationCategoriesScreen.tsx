import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';

type ConversationCategory = {
  id: string;
  titleEn: string;
  titleKo: string;
  titleMy: string;
};

const CONVERSATION_CATEGORIES: ConversationCategory[] = [
  {
    id: 'greetings',
    titleEn: 'GREETINGS',
    titleKo: '인사',
    titleMy: 'နှုတ်ခွန်းဆက်စကားများ',
  },
  {
    id: 'introductions',
    titleEn: 'INTRODUCTIONS',
    titleKo: '소개',
    titleMy: 'မိတ်ဆက်ရာတွင် ပြောဆိုစကားများ',
  },
  {
    id: 'saying-goodbye',
    titleEn: 'SAYING GOODBYE',
    titleKo: '작별 인사',
    titleMy: 'ခွဲခွာသောအခါ ပြောဆိုသောစကားများ',
  },
  {
    id: 'describing-people',
    titleEn: 'DESCRIBING PEOPLE',
    titleKo: '사람 묘사',
    titleMy: 'လူများအကြောင်းဖော်ပြပြောဆိုခြင်း',
  },
  {
    id: 'describing-things',
    titleEn: 'DESCRIBING THINGS',
    titleKo: '물건 묘사',
    titleMy: 'ပစ္စည်းအကြောင်းဖော်ပြပြောဆိုခြင်း',
  },
  {
    id: 'describing-houses',
    titleEn: 'DESCRIBING HOUSES',
    titleKo: '집 묘사',
    titleMy: 'အိမ်၏အနေအထား ဖော်ပြပြောဆိုသောအခါ',
  },
  {
    id: 'describing-abilities',
    titleEn: 'DESCRIBING ABILITIES',
    titleKo: '능력 묘사',
    titleMy: 'အရေအသွေးဖော်ပြပြောဆိုပုံ',
  },
  {
    id: 'job-interview',
    titleEn: 'JOB INTERVIEW',
    titleKo: '면접',
    titleMy: 'အလုပ်အတွက် လူတွေ့ စစ်ဆေးသောအခါ ပြောဆိုပုံများ',
  },
  {
    id: 'inviting-accepting-refusing',
    titleEn: 'INVITING / ACCEPTING / REFUSING',
    titleKo: '초대 / 수락 / 거절',
    titleMy: 'ဖိတ်ကြားမှုကို လက်ခံသောအခါနှင့်ငြင်းပယ်သောအခါတို့၌ ပြောဆိုကြပုံများ',
  },
  {
    id: 'shopping',
    titleEn: 'SHOPPING',
    titleKo: '쇼핑',
    titleMy: 'ဈေး၀ယ်သွားခြင်း',
  },
  {
    id: 'apologizing',
    titleEn: 'APOLOGIZING',
    titleKo: '사과',
    titleMy: 'တောင်းပန်ပြောဆိုမှုများ',
  },
  {
    id: 'comparing',
    titleEn: 'COMPARING',
    titleKo: '비교',
    titleMy: 'နှိုင်းယှဉ်ဖော်ပြစကားအသုံးအနှုန်း',
  },
];

export function ConversationCategoriesScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();

  const getCategoryTitle = (category: ConversationCategory) => {
    if (settings.uiLanguage === 'korean') return category.titleKo;
    if (settings.uiLanguage === 'myanmar') return category.titleMy;
    return category.titleEn;
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView 
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <View style={[styles.headerIcon, { backgroundColor: C.surface, borderColor: C.border }]}>
            <Ionicons name="chatbubbles" size={36} color={C.brand} />
          </View>
          <Text style={[styles.title, { color: C.textPrimary }]}>
            {settings.uiLanguage === 'myanmar' 
              ? 'စကားပြောဆိုမှု'
              : settings.uiLanguage === 'korean'
              ? '대화'
              : 'Conversation'}
          </Text>
          <Text style={{ fontSize: 13, color: C.textSecondary, marginTop: 4, textAlign: 'center' }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'အကြောင်းအရာများကို ရွေးချယ်ပါ'
              : settings.uiLanguage === 'korean'
              ? '주제를 선택하세요'
              : 'Select a topic to learn conversations'}
          </Text>
        </View>

        {/* Categories */}
        <View style={{ gap: 12 }}>
          {CONVERSATION_CATEGORIES.map((category, index) => (
            <Pressable
              key={category.id}
              onPress={() => navigation.navigate('ConversationDetail', { categoryId: category.id, categoryTitle: getCategoryTitle(category) })}
              style={({ pressed }) => [
                styles.categoryCard,
                {
                  backgroundColor: index % 2 === 0 ? C.surface : C.background,
                  borderColor: C.border,
                  opacity: pressed ? 0.7 : 1,
                }
              ]}
            >
              <Text 
                style={[
                  styles.categoryTitle,
                  { 
                    color: C.textPrimary,
                    fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
                  }
                ]}
              >
                {getCategoryTitle(category)}
              </Text>
              <Ionicons name="chevron-forward" size={20} color={C.textTertiary} />
            </Pressable>
          ))}
        </View>
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
    letterSpacing: 0.5,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    minHeight: 60,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
});

