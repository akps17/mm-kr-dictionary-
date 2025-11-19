import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';
import { useFeatureAccess } from '../hooks/useFeatureAccess';
import { useAuth } from '../data/AuthContext';

type LevelSelectionScreenProps = {
  navigation: any;
};

export type DifficultyLevel = 'all' | 'basic' | 'intermediate' | 'advanced';

export function LevelSelectionScreen({ navigation }: LevelSelectionScreenProps) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { checkAccess } = useFeatureAccess();
  const { user } = useAuth();

  const levels: { level: DifficultyLevel; icon: any; color: string; title: string; description: string }[] = [
    {
      level: 'all',
      icon: 'apps-outline',
      color: '#8b5cf6',
      title: settings.uiLanguage === 'myanmar' ? 'အားလုံး' : settings.uiLanguage === 'korean' ? '전체' : 'All Levels',
      description: settings.uiLanguage === 'myanmar' ? 'အဆင့်အားလုံး' : settings.uiLanguage === 'korean' ? '모든 단어' : 'All vocabulary words'
    },
    {
      level: 'basic',
      icon: 'happy-outline',
      color: '#10b981',
      title: settings.uiLanguage === 'myanmar' ? 'အခြေခံ' : settings.uiLanguage === 'korean' ? '기초' : 'Basic',
      description: settings.uiLanguage === 'myanmar' ? 'အခြေခံ အဆင့်' : settings.uiLanguage === 'korean' ? '기초 단어' : 'Basic vocabulary'
    },
    {
      level: 'intermediate',
      icon: 'fitness-outline',
      color: '#f59e0b',
      title: settings.uiLanguage === 'myanmar' ? 'အလယ်အလတ်' : settings.uiLanguage === 'korean' ? '중급' : 'Intermediate',
      description: settings.uiLanguage === 'myanmar' ? 'အလယ်အလတ် အဆင့်' : settings.uiLanguage === 'korean' ? '중급 단어' : 'Intermediate vocabulary'
    },
    {
      level: 'advanced',
      icon: 'trophy-outline',
      color: '#ef4444',
      title: settings.uiLanguage === 'myanmar' ? 'အဆင့်မြင့်' : settings.uiLanguage === 'korean' ? '고급' : 'Advanced',
      description: settings.uiLanguage === 'myanmar' ? 'အဆင့်မြင့် အဆင့်' : settings.uiLanguage === 'korean' ? '고급 단어' : 'Advanced vocabulary'
    }
  ];

  const handleLevelSelect = (level: DifficultyLevel) => {
    // Navigate to Practice with selected level
    navigation.navigate('PracticeTabs', { selectedLevel: level });
  };

  const handleKoreanWriting = () => {
    // Navigate to Korean Writing Practice
    navigation.navigate('KoreanWriting');
  };

  const handleBurmeseWriting = () => {
    // Navigate to Burmese Writing Practice
    navigation.navigate('BurmeseWriting');
  };

  const handleTOPIKTest = () => {
    // If user is not logged in, navigate directly to Profile/Auth screen
    if (!user) {
      navigation.navigate('Profile');
      return;
    }

    // If user is logged in, check access (PRO status)
    checkAccess(
      'topik',
      () => {
        // If access granted (PRO user), navigate to TOPIK Test
        navigation.navigate('TOPIKTest');
      },
      () => {
        // Fallback - navigate to Profile if something goes wrong
        navigation.navigate('Profile');
      }
    );
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Ionicons name="school" size={48} color={C.brand} style={{ marginBottom: 12 }} />
          <Text style={[styles.title, { color: C.textPrimary }]}>
            {settings.uiLanguage === 'myanmar' ? 'လေ့ကျင့်ခန်း' : settings.uiLanguage === 'korean' ? '연습' : 'Practice'}
          </Text>
          <Text style={{ color: C.textSecondary, textAlign: 'center', marginTop: 4 }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'သင့်အဆင့်ကို ရွေးပါ' 
              : settings.uiLanguage === 'korean' 
              ? '레벨을 선택하세요' 
              : 'Choose your level'}
          </Text>
        </View>

        {/* Writing Practice Section Title */}
        <Text style={{ 
          color: C.textSecondary, 
          fontSize: 14, 
          fontWeight: '600', 
          marginBottom: 12,
        }}>
          {settings.uiLanguage === 'myanmar' ? 'အက္ခရာ လေ့ကျင့်ခန်း' : settings.uiLanguage === 'korean' ? '문자 연습' : 'Writing Practice'}
        </Text>

        {/* Korean Writing Practice */}
        <Pressable
          onPress={handleKoreanWriting}
          style={({ pressed }) => ([
            styles.specialCard,
            { 
              backgroundColor: C.surface,
              borderColor: '#3b82f6',
              opacity: pressed ? 0.7 : 1,
              transform: [{ scale: pressed ? 0.98 : 1 }]
            }
          ])}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconCircle, { backgroundColor: '#dbeafe' }]}>
              <Ionicons name="create-outline" size={32} color="#3b82f6" />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={[styles.levelTitle, { color: C.textPrimary }]}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'ကိုရီးယား စာလုံးများ' 
                  : settings.uiLanguage === 'korean' 
                  ? '한글 쓰기' 
                  : 'Korean Writing'}
              </Text>
              <Text style={{ color: C.textSecondary, fontSize: 13, marginTop: 2 }}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'သရများနှင့် ဗျည်းများ' 
                  : settings.uiLanguage === 'korean' 
                  ? '자음과 모음 연습' 
                  : 'Vowels & Consonants'}
              </Text>
            </View>
          </View>
        </Pressable>

        {/* Burmese Writing Practice */}
        <Pressable
          onPress={handleBurmeseWriting}
          style={({ pressed }) => ([
            styles.specialCard,
            { 
              backgroundColor: C.surface,
              borderColor: '#10b981',
              opacity: pressed ? 0.7 : 1,
              transform: [{ scale: pressed ? 0.98 : 1 }]
            }
          ])}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconCircle, { backgroundColor: '#d1fae5' }]}>
              <Ionicons name="pencil-outline" size={32} color="#10b981" />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={[styles.levelTitle, { color: C.textPrimary }]}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'မြန်မာ အက္ခရာများ' 
                  : settings.uiLanguage === 'korean' 
                  ? '미얀마 문자' 
                  : 'Myanmar Writing'}
              </Text>
              <Text style={{ color: C.textSecondary, fontSize: 13, marginTop: 2 }}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'သရများနှင့် ဗျည်းများ' 
                  : settings.uiLanguage === 'korean' 
                  ? '자음과 모음 연습' 
                  : 'Vowels & Consonants'}
              </Text>
            </View>
          </View>
        </Pressable>

        {/* TOPIK Test (PRO) */}
        <Pressable
          onPress={handleTOPIKTest}
          style={({ pressed }) => ([
            styles.specialCard,
            { 
              backgroundColor: C.surface,
              borderColor: '#8b5cf6',
              opacity: pressed ? 0.7 : 1,
              transform: [{ scale: pressed ? 0.98 : 1 }]
            }
          ])}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[styles.iconCircle, { backgroundColor: '#ede9fe' }]}>
              <Ionicons name="school" size={32} color="#8b5cf6" />
            </View>
            <View style={{ flex: 1, marginLeft: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.levelTitle, { color: C.textPrimary }]}>
                  {settings.uiLanguage === 'myanmar' 
                    ? 'TOPIK စာမေးပွဲ' 
                    : settings.uiLanguage === 'korean' 
                    ? 'TOPIK 시험' 
                    : 'TOPIK Test'}
                </Text>
                <View style={{ 
                  backgroundColor: '#8b5cf6', 
                  paddingHorizontal: 8, 
                  paddingVertical: 2, 
                  borderRadius: 8, 
                  marginLeft: 8 
                }}>
                  <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>PRO</Text>
                </View>
              </View>
              <Text style={{ color: C.textSecondary, fontSize: 13, marginTop: 2 }}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'ကိုရီးယား စာမေးပွဲ အခြေခံ' 
                  : settings.uiLanguage === 'korean' 
                  ? '한국어 능력 시험 (기초)' 
                  : 'Korean Proficiency Test (Basic)'}
              </Text>
            </View>
          </View>
        </Pressable>

        {/* Level Selection Cards */}
        <Text style={{ 
          color: C.textSecondary, 
          fontSize: 14, 
          fontWeight: '600', 
          marginBottom: 12,
          marginTop: 24 
        }}>
          {settings.uiLanguage === 'myanmar' ? 'စာလုံး ပမာဏ' : settings.uiLanguage === 'korean' ? '어휘 퀴즈' : 'Vocabulary Quiz'}
        </Text>

        {levels.map((item) => (
          <Pressable
            key={item.level}
            onPress={() => handleLevelSelect(item.level)}
            style={({ pressed }) => ([
              styles.levelCard,
              { 
                backgroundColor: C.surface,
                borderColor: C.border,
                opacity: pressed ? 0.7 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }]
              }
            ])}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.iconCircle, { backgroundColor: `${item.color}20` }]}>
                <Ionicons name={item.icon} size={28} color={item.color} />
              </View>
              <View style={{ marginLeft: 16 }}>
                <Text style={[styles.levelTitle, { color: C.textPrimary }]}>
                  {item.title}
                </Text>
                <Text style={{ color: C.textSecondary, fontSize: 13, marginTop: 2 }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}

        {/* Info Card */}
        <View style={[styles.infoCard, { backgroundColor: C.surface, borderColor: C.border }]}>
          <Ionicons name="information-circle" size={20} color={C.brand} />
          <Text style={{ color: C.textSecondary, fontSize: 12, marginLeft: 8, flex: 1 }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'သင့်အဆင့်ကို ရွေးပြီး လေ့ကျင့်ခန်း စတင်ပါ' 
              : settings.uiLanguage === 'korean' 
              ? '레벨을 선택하고 연습을 시작하세요' 
              : 'Select a level to start practicing'}
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
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  specialCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    marginBottom: 16,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  levelCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  levelTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
});

