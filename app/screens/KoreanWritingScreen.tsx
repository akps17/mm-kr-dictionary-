import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';

type KoreanWritingScreenProps = {
  navigation: any;
};

// Korean Vowels (모음)
const VOWELS = [
  { korean: 'ㅏ', romanization: 'a', myanmar: 'အာ' },
  { korean: 'ㅑ', romanization: 'ya', myanmar: 'ယာ' },
  { korean: 'ㅓ', romanization: 'eo', myanmar: 'အို' },
  { korean: 'ㅕ', romanization: 'yeo', myanmar: 'ယို' },
  { korean: 'ㅗ', romanization: 'o', myanmar: 'အို' },
  { korean: 'ㅛ', romanization: 'yo', myanmar: 'ယို' },
  { korean: 'ㅜ', romanization: 'u', myanmar: 'ဦး' },
  { korean: 'ㅠ', romanization: 'yu', myanmar: 'ယူ' },
  { korean: 'ㅡ', romanization: 'eu', myanmar: 'အု' },
  { korean: 'ㅣ', romanization: 'i', myanmar: 'အီ' },
  { korean: 'ㅐ', romanization: 'ae', myanmar: 'အဲ' },
  { korean: 'ㅒ', romanization: 'yae', myanmar: 'ယဲ' },
  { korean: 'ㅔ', romanization: 'e', myanmar: 'အေ' },
  { korean: 'ㅖ', romanization: 'ye', myanmar: 'ယေ' },
  { korean: 'ㅘ', romanization: 'wa', myanmar: 'ဝါ' },
  { korean: 'ㅙ', romanization: 'wae', myanmar: 'ဝဲ' },
  { korean: 'ㅚ', romanization: 'oe', myanmar: 'ဝေ' },
  { korean: 'ㅝ', romanization: 'wo', myanmar: 'ဝို' },
  { korean: 'ㅞ', romanization: 'we', myanmar: 'ဝေ' },
  { korean: 'ㅟ', romanization: 'wi', myanmar: 'ဝီ' },
  { korean: 'ㅢ', romanization: 'ui', myanmar: 'အွီ' },
];

// Korean Consonants (자음)
const CONSONANTS = [
  { korean: 'ㄱ', romanization: 'g', myanmar: 'ဂ' },
  { korean: 'ㄲ', romanization: 'kk', myanmar: 'က' },
  { korean: 'ㄴ', romanization: 'n', myanmar: 'န' },
  { korean: 'ㄷ', romanization: 'd/t', myanmar: 'ဒ/တ' },
  { korean: 'ㄸ', romanization: 'tt', myanmar: 'တ' },
  { korean: 'ㄹ', romanization: 'r/l', myanmar: 'ရ/လ' },
  { korean: 'ㅁ', romanization: 'm', myanmar: 'မ' },
  { korean: 'ㅂ', romanization: 'b/p', myanmar: 'ဗ/ပ' },
  { korean: 'ㅃ', romanization: 'pp', myanmar: 'ပ' },
  { korean: 'ㅅ', romanization: 's', myanmar: 'စ' },
  { korean: 'ㅆ', romanization: 'ss', myanmar: 'စ' },
  { korean: 'ㅇ', romanization: 'ng/-', myanmar: 'င်/အ' },
  { korean: 'ㅈ', romanization: 'j', myanmar: 'ဂျ' },
  { korean: 'ㅉ', romanization: 'jj', myanmar: 'ဂျ' },
  { korean: 'ㅊ', romanization: 'ch', myanmar: 'ချ' },
  { korean: 'ㅋ', romanization: 'k', myanmar: 'ခ' },
  { korean: 'ㅌ', romanization: 't', myanmar: 'ထ' },
  { korean: 'ㅍ', romanization: 'p', myanmar: 'ဖ' },
  { korean: 'ㅎ', romanization: 'h', myanmar: 'ဟ' },
];

export function KoreanWritingScreen({ navigation }: KoreanWritingScreenProps) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const [activeTab, setActiveTab] = useState<'vowels' | 'consonants'>('vowels');

  const data = activeTab === 'vowels' ? VOWELS : CONSONANTS;

  const speakCharacter = (character: string, romanization: string) => {
    // Stop any ongoing speech
    Speech.stop();
    
    // Speak the Korean character with Korean locale
    Speech.speak(character, {
      language: 'ko-KR', // Korean language code
      pitch: 1.0,
      rate: 0.75, // Slightly slower for learning
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      {/* Header */}
      <View style={{ padding: 20, paddingBottom: 12 }}>
        <Text style={[styles.title, { color: C.textPrimary }]}>
          {settings.uiLanguage === 'myanmar' 
            ? 'ကိုရီးယား စာလုံးများ' 
            : settings.uiLanguage === 'korean' 
            ? '한글 쓰기' 
            : 'Korean Writing'}
        </Text>
        <Text style={{ color: C.textSecondary, marginTop: 4 }}>
          {settings.uiLanguage === 'myanmar' 
            ? 'သရများနှင့် ဗျည်းများကို လေ့လာပါ' 
            : settings.uiLanguage === 'korean' 
            ? '자음과 모음을 배우세요' 
            : 'Learn vowels and consonants'}
        </Text>
      </View>

      {/* Tab Selector */}
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, gap: 12, marginBottom: 16 }}>
        <Pressable
          onPress={() => setActiveTab('vowels')}
          style={({ pressed }) => ([
            styles.tabButton,
            {
              backgroundColor: activeTab === 'vowels' ? C.brand : C.surface,
              borderColor: activeTab === 'vowels' ? C.brand : C.border,
              opacity: pressed ? 0.7 : 1,
              flex: 1,
            }
          ])}
        >
          <Ionicons 
            name="water-outline" 
            size={20} 
            color={activeTab === 'vowels' ? '#fff' : C.textSecondary} 
          />
          <Text style={{ 
            color: activeTab === 'vowels' ? '#fff' : C.textPrimary,
            fontWeight: '600',
            marginLeft: 8 
          }}>
            {settings.uiLanguage === 'myanmar' ? 'သရများ' : settings.uiLanguage === 'korean' ? '모음' : 'Vowels'}
          </Text>
          <View style={{
            backgroundColor: activeTab === 'vowels' ? 'rgba(255,255,255,0.3)' : C.border,
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 12,
            marginLeft: 8,
          }}>
            <Text style={{ 
              color: activeTab === 'vowels' ? '#fff' : C.textSecondary,
              fontSize: 11,
              fontWeight: '700' 
            }}>
              {VOWELS.length}
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab('consonants')}
          style={({ pressed }) => ([
            styles.tabButton,
            {
              backgroundColor: activeTab === 'consonants' ? C.brand : C.surface,
              borderColor: activeTab === 'consonants' ? C.brand : C.border,
              opacity: pressed ? 0.7 : 1,
              flex: 1,
            }
          ])}
        >
          <Ionicons 
            name="flame-outline" 
            size={20} 
            color={activeTab === 'consonants' ? '#fff' : C.textSecondary} 
          />
          <Text style={{ 
            color: activeTab === 'consonants' ? '#fff' : C.textPrimary,
            fontWeight: '600',
            marginLeft: 8 
          }}>
            {settings.uiLanguage === 'myanmar' ? 'ဗျည်းများ' : settings.uiLanguage === 'korean' ? '자음' : 'Consonants'}
          </Text>
          <View style={{
            backgroundColor: activeTab === 'consonants' ? 'rgba(255,255,255,0.3)' : C.border,
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 12,
            marginLeft: 8,
          }}>
            <Text style={{ 
              color: activeTab === 'consonants' ? '#fff' : C.textSecondary,
              fontSize: 11,
              fontWeight: '700' 
            }}>
              {CONSONANTS.length}
            </Text>
          </View>
        </Pressable>
      </View>

      {/* Character Grid */}
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 0 }}>
        <View style={styles.grid}>
          {data.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => speakCharacter(item.korean, item.romanization)}
              style={({ pressed }) => [
                styles.card, 
                { 
                  backgroundColor: C.surface, 
                  borderColor: C.border,
                  opacity: pressed ? 0.7 : 1,
                  transform: [{ scale: pressed ? 0.95 : 1 }]
                }
              ]}
            >
              {/* Sound Icon Indicator */}
              <View style={{ position: 'absolute', top: 8, right: 8 }}>
                <Ionicons name="volume-medium" size={14} color={C.brand} style={{ opacity: 0.5 }} />
              </View>
              
              <Text style={[styles.koreanChar, { color: C.textPrimary }]}>
                {item.korean}
              </Text>
              <Text style={[styles.romanization, { color: C.brand }]}>
                {item.romanization}
              </Text>
              <Text style={[styles.myanmar, { color: C.textSecondary }]}>
                {item.myanmar}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Info Box */}
        <View style={[styles.infoBox, { backgroundColor: C.surface, borderColor: C.border }]}>
          <Ionicons name="volume-high-outline" size={24} color="#f59e0b" />
          <Text style={{ color: C.textSecondary, fontSize: 13, marginLeft: 12, flex: 1 }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'စာလုံးများကို နှိပ်၍ အသံထွက် နားထောင်ပါ' 
              : settings.uiLanguage === 'korean' 
              ? '문자를 탭하여 발음을 들어보세요' 
              : 'Tap any character to hear its pronunciation'}
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
    fontSize: 24,
    fontWeight: '700',
  },
  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '30%',
    aspectRatio: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  koreanChar: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  romanization: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  myanmar: {
    fontSize: 11,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
  },
});

