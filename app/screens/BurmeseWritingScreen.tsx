import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { getVoiceSpeedRate } from '../data/settings';

type BurmeseWritingScreenProps = {
  navigation: any;
};

// Myanmar Consonants (ဗျည်း)
const MYANMAR_CONSONANTS = [
  { myanmar: 'က', romanization: 'ka', korean: '까', name: 'Ka' },
  { myanmar: 'ခ', romanization: 'kha', korean: '카', name: 'Kha' },
  { myanmar: 'ဂ', romanization: 'ga', korean: '가', name: 'Ga' },
  { myanmar: 'ဃ', romanization: 'ga', korean: '가', name: 'Gha' },
  { myanmar: 'င', romanization: 'nga', korean: '응아', name: 'Nga' },
  { myanmar: 'စ', romanization: 'ssa', korean: '싸', name: 'Sa' },
  { myanmar: 'ဆ', romanization: 'ssa', korean: '사', name: 'Hsa' },
  { myanmar: 'ဇ', romanization: 'ja', korean: '자', name: 'Za' },
  { myanmar: 'ဈ', romanization: 'ja', korean: '자', name: 'Zha' },
  { myanmar: 'ည', romanization: 'nya', korean: '냐', name: 'Nya' },
  { myanmar: 'ဋ', romanization: 'tta', korean: '따', name: 'Ta' },
  { myanmar: 'ဌ', romanization: 'ta', korean: '타', name: 'Hta' },
  { myanmar: 'ဍ', romanization: 'da', korean: '다', name: 'Da' },
  { myanmar: 'ဎ', romanization: 'da', korean: '다', name: 'Dha' },
  { myanmar: 'ဏ', romanization: 'na', korean: '나', name: 'Na' },
  { myanmar: 'တ', romanization: 'tta', korean: '따', name: 'Ta' },
  { myanmar: 'ထ', romanization: 'ta', korean: '타', name: 'Hta' },
  { myanmar: 'ဒ', romanization: 'da', korean: '다', name: 'Da' },
  { myanmar: 'ဓ', romanization: 'da', korean: '다', name: 'Dha' },
  { myanmar: 'န', romanization: 'na', korean: '나', name: 'Na' },
  { myanmar: 'ပ', romanization: 'ppa', korean: '빠', name: 'Pa' },
  { myanmar: 'ဖ', romanization: 'pa', korean: '파', name: 'Hpa' },
  { myanmar: 'ဗ', romanization: 'ba', korean: '밧', name: 'Ba' },
  { myanmar: 'ဘ', romanization: 'ba', korean: '밧', name: 'Bha' },
  { myanmar: 'မ', romanization: 'ma', korean: '맛', name: 'Ma' },
  { myanmar: 'ယ', romanization: 'ya', korean: '얏', name: 'Ya' },
  { myanmar: 'ရ', romanization: 'ya-ra', korean: '라', name: 'Ya/Ra' },
  { myanmar: 'လ', romanization: 'la', korean: '랏', name: 'La' },
  { myanmar: 'ဝ', romanization: 'wa', korean: '와', name: 'Wa' },
  { myanmar: 'သ', romanization: 'ta', korean: '타', name: 'Tha' },
  { myanmar: 'ဟ', romanization: 'ha', korean: '하', name: 'Ha' },
  { myanmar: 'ဠ', romanization: 'la', korean: '라', name: 'La' },
  { myanmar: 'အ', romanization: 'a', korean: '아', name: 'A' },
];

// Myanmar Vowels (သရ)
const MYANMAR_VOWELS = [
  { myanmar: 'အ', romanization: 'a', korean: '앗', example: 'အ → a' },
  { myanmar: 'အာ', romanization: 'aa', korean: '아:', example: 'အာ → ar' },
  { myanmar: 'ိ', romanization: 'i', korean: '잇', example: 'အိ → ai' },
  { myanmar: 'ီ', romanization: 'ii', korean: '이:', example: 'အီ → aei' },
  { myanmar: 'ု', romanization: 'u', korean: '웃', example: 'အု → ou' },
  { myanmar: 'ူ', romanization: 'uu', korean: '우:', example: 'အူ → ouu' },
  { myanmar: 'ေ', romanization: 'e', korean: '에이', example: 'အေ → ayy' },
  { myanmar: 'ဲ', romanization: 'ai', korean: '에', example: 'အဲ → aie' },
  { myanmar: 'ော', romanization: 'o', korean: '엇', example: 'အော → aw' },
  { myanmar: 'ော်', romanization: 'o', korean: '어', example: 'အ → aww' },
  { myanmar: 'ို', romanization: 'o', korean: '오', example: 'အ → o' },
  { myanmar: '်', romanization: 'silent', korean: '앗', example: 'အတ် → aat' },
  { myanmar: 'ံ', romanization: 'ng', korean: '앙', example: 'အံ → ann' },
  { myanmar: 'း', romanization: 'al', korean: '알', example: 'အား → arr' },
];

export function BurmeseWritingScreen({ navigation }: BurmeseWritingScreenProps) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const [activeTab, setActiveTab] = useState<'consonants' | 'vowels'>('consonants');

  const getTitle = () => {
    if (settings.uiLanguage === 'myanmar') {
      return 'မြန်မာ အက္ခရာများ';
    } else if (settings.uiLanguage === 'korean') {
      return '미얀마 문자';
    }
    return 'Myanmar Script';
  };

  const getSubtitle = () => {
    if (settings.uiLanguage === 'myanmar') {
      return 'ဗျည်းများနှင့် သရများ';
    } else if (settings.uiLanguage === 'korean') {
      return '자음과 모음';
    }
    return 'Consonants & Vowels';
  };

  const getConsonantsLabel = () => {
    if (settings.uiLanguage === 'myanmar') return 'ဗျည်း';
    if (settings.uiLanguage === 'korean') return '자음';
    return 'Consonants';
  };

  const getVowelsLabel = () => {
    if (settings.uiLanguage === 'myanmar') return 'သရ';
    if (settings.uiLanguage === 'korean') return '모음';
    return 'Vowels';
  };

  const data = activeTab === 'consonants' ? MYANMAR_CONSONANTS : MYANMAR_VOWELS;

  const speakCharacter = async (character: string, romanization: string, korean: string) => {
    // Stop any ongoing speech
    Speech.stop();
    
    // Speak the Korean equivalent with Korean voice
    // This sounds much better than English romanization!
    Speech.speak(korean, {
      language: 'ko-KR', // Korean voice
      pitch: 0.5,
      rate: getVoiceSpeedRate(settings.voiceSpeed),
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      {/* Header */}
      <View style={{ padding: 20, paddingBottom: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              { 
                padding: 8, 
                marginLeft: -8,
                opacity: pressed ? 0.5 : 1 
              }
            ]}
          >
            <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
          </Pressable>
          <Text style={[styles.title, { color: C.textPrimary, marginLeft: 8 }]}>
            {getTitle()}
          </Text>
        </View>
        <Text style={{ color: C.textSecondary, marginLeft: 32 }}>
          {getSubtitle()}
        </Text>
      </View>

      {/* Tab Selector */}
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, gap: 12, marginBottom: 16 }}>
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
          <Text style={{ 
            color: activeTab === 'consonants' ? '#fff' : C.textPrimary,
            fontWeight: '600',
            fontSize: 15,
          }}>
            {getConsonantsLabel()}
          </Text>
          <View style={{
            backgroundColor: activeTab === 'consonants' ? 'rgba(255,255,255,0.3)' : C.border,
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 12,
            marginLeft: 10,
          }}>
            <Text style={{ 
              color: activeTab === 'consonants' ? '#fff' : C.textSecondary,
              fontSize: 12,
              fontWeight: '700' 
            }}>
              {MYANMAR_CONSONANTS.length}
            </Text>
          </View>
        </Pressable>

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
          <Text style={{ 
            color: activeTab === 'vowels' ? '#fff' : C.textPrimary,
            fontWeight: '600',
            fontSize: 15,
          }}>
            {getVowelsLabel()}
          </Text>
          <View style={{
            backgroundColor: activeTab === 'vowels' ? 'rgba(255,255,255,0.3)' : C.border,
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 12,
            marginLeft: 10,
          }}>
            <Text style={{ 
              color: activeTab === 'vowels' ? '#fff' : C.textSecondary,
              fontSize: 12,
              fontWeight: '700' 
            }}>
              {MYANMAR_VOWELS.length}
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
              onPress={() => speakCharacter(item.myanmar, item.romanization, item.korean)}
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
              
              <Text style={[styles.myanmarChar, { color: C.textPrimary }]}>
                {item.myanmar}
              </Text>
              <Text style={[styles.romanization, { color: C.brand }]}>
                {item.romanization}
              </Text>
              <Text style={[styles.korean, { color: C.textSecondary }]}>
                {item.korean}
              </Text>
              {'example' in item && item.example && (
                <Text style={[styles.example, { color: C.textTertiary, marginTop: 4 }]}>
                  {item.example}
                </Text>
              )}
            </Pressable>
          ))}
        </View>

        {/* Info Box */}
        <View style={[styles.infoBox, { backgroundColor: C.surface, borderColor: C.border }]}>
          <Ionicons name="volume-high-outline" size={24} color="#f59e0b" />
          <Text style={{ color: C.textSecondary, fontSize: 13, marginLeft: 12, flex: 1 }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'အက္ခရာများကို နှိပ်၍ အသံထွက် နားထောင်ပါ' 
              : settings.uiLanguage === 'korean' 
              ? '문자를 탭하여 발음을 들어보세요' 
              : 'Tap any character to hear pronunciation '}
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
    paddingVertical: 16,
    paddingHorizontal: 20,
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
    minHeight: 120,
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
  myanmarChar: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  romanization: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 2,
  },
  korean: {
    fontSize: 11,
  },
  example: {
    fontSize: 9,
    textAlign: 'center',
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

