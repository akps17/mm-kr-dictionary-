import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useLibrary } from '../data/LibraryContext';
import * as Speech from 'expo-speech';
import { WORD_LEVELS } from '../types/dictionary';

import type { DictionaryEntry, Example } from '../types/dictionary';

type WordDetailScreenProps = {
  route: {
    params: {
      word: DictionaryEntry;
    };
  };
  navigation: any;
};

export function WordDetailScreen({ route, navigation }: WordDetailScreenProps) {
  const { word } = route.params;
  const C = useThemedColors();
  const { favoriteIds, toggleFavorite } = useLibrary();
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  // Handle pronunciation using expo-speech
  async function playPronunciation() {
    if (isSpeaking) {
      // Stop current speech if already speaking
      await Speech.stop();
      setIsSpeaking(false);
      return;
    }

    try {
      setIsSpeaking(true);
      
      // Speak the Korean word with Korean voice
      await Speech.speak(word.korean, {
        language: 'ko-KR',
        pitch: 1.0,
        rate: 0.85, // Slightly slower for clarity
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: () => {
          setIsSpeaking(false);
          Alert.alert(
            'Error',
            'Korean voice not available on this device.'
          );
        }
      });
    } catch (error) {
      console.error('Error playing pronunciation:', error);
      setIsSpeaking(false);
      Alert.alert(
        'Error',
        'Failed to play pronunciation. Please try again.'
      );
    }
  }

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: C.background }]}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: C.surface }]}>
        <View style={styles.headerContent}>
          <View style={styles.titleRow}>
            <Text style={[styles.korean, { color: C.textPrimary }]}>
              {word.korean}
            </Text>
            <Pressable 
              onPress={() => toggleFavorite(word.id)}
              style={({ pressed }) => [
                styles.favoriteButton,
                pressed && { opacity: 0.7 }
              ]}
            >
              <Ionicons 
                name={favoriteIds.has(word.id) ? "heart" : "heart-outline"}
                size={24}
                color={favoriteIds.has(word.id) ? "#ef4444" : C.textSecondary}
              />
            </Pressable>
          </View>

          <View style={styles.pronunciationRow}>
            <Pressable 
              onPress={playPronunciation}
              style={({ pressed }) => [
                styles.speakerButton,
                isSpeaking && { backgroundColor: C.brand + '20' },
                pressed && { opacity: 0.7 }
              ]}
            >
              <Ionicons 
                name={isSpeaking ? "volume-high" : "volume-high-outline"} 
                size={24} 
                color={isSpeaking ? C.brand : C.textSecondary} 
              />
            </Pressable>
            <Text style={[styles.phonetic, { color: C.textSecondary }]}>
              {isSpeaking ? 'Playing...' : 'Tap to hear pronunciation'}
            </Text>
          </View>

          <View style={styles.chipContainer}>
            {word.pos && (
              <View style={[styles.posChip, { backgroundColor: C.border }]}>
                <Text style={[styles.posText, { color: C.textSecondary }]}>
                  {word.pos}
                </Text>
              </View>
            )}
            {word.level && (
              <View style={[
                styles.levelChip, 
                { backgroundColor: WORD_LEVELS.find(l => l.value === word.level)?.color || C.border }
              ]}>
                <Ionicons 
                  name="school" 
                  size={14} 
                  color="white" 
                  style={{ marginRight: 4 }} 
                />
                <Text style={styles.levelText}>
                  {WORD_LEVELS.find(l => l.value === word.level)?.label || word.level}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Translations */}
      <View style={[styles.translationSection, { backgroundColor: C.surface }]}>
        <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>Translations</Text>
        <View style={{ minHeight: 44, justifyContent: 'center' }}>
          <Text 
            style={[styles.myanmar, { color: C.textPrimary }]}
            allowFontScaling={false}
          >
            {word.myanmar}
          </Text>
        </View>
        {word.english && (
          <Text style={[styles.english, { color: C.textSecondary }]}>
            {word.english}
          </Text>
        )}
      </View>

      {/* Examples */}
      {word.examples && word.examples.length > 0 && (
        <View style={[styles.section, { backgroundColor: C.surface }]}>
          <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>Examples for this word</Text>
          {word.examples.map((example, index) => {
            const k = (example.korean || '').trim();
            const m = (example.myanmar || '').trim();
            const e = (example.english || '').trim();
            const showK = !!k;
            const showM = !!m && m !== k;
            const showE = !!e && e !== k && e !== m;
            return (
              <View key={index} style={styles.exampleItem}>
                {showK && (
                  <Text style={[styles.exampleKorean, { color: C.textPrimary }]}>
                    {k}
                  </Text>
                )}
                {showM && (
                  <Text
                    style={[styles.exampleMyanmar, { color: C.textSecondary }]}
                    allowFontScaling={false}
                  >
                    {m}
                  </Text>
                )}
                {showE && (
                  <Text style={[styles.exampleEnglish, { color: C.textTertiary }]}>
                    {e}
                  </Text>
                )}
              </View>
            );
          })}
        </View>
      )}

      {/* Synonyms & Antonyms */}
      <View style={[styles.section, { backgroundColor: C.surface }]}>
        <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>Related Words</Text>
        <View style={styles.relatedWordsRow}>
          <View style={styles.relatedWordsColumn}>
            <Text style={[styles.relatedWordsTitle, { color: C.textSecondary }]}>Synonyms</Text>
            <Text style={[styles.placeholder, { color: C.textTertiary }]}>Coming soon</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: C.border }]} />
          <View style={styles.relatedWordsColumn}>
            <Text style={[styles.relatedWordsTitle, { color: C.textSecondary }]}>Antonyms</Text>
            <Text style={[styles.placeholder, { color: C.textTertiary }]}>Coming soon</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  header: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  headerContent: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  korean: {
    fontSize: 32,
    fontWeight: '700',
  },
  favoriteButton: {
    padding: 8,
  },
  pronunciationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  phonetic: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  speakerButton: {
    padding: 8,
    borderRadius: 20,
  },
  posChip: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginTop: 12,
  },
  posText: {
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    borderRadius: 12,
    padding: 16,
    minHeight: 80, // Ensure enough space for content
  },
  translationSection: {
    borderRadius: 12,
    padding: 16,
    minHeight: 100, // Extra space for Myanmar text
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  myanmar: {
    fontSize: 18,
    fontFamily: 'NotoSansMyanmar_400Regular',
    lineHeight: 32,
    paddingVertical: 8,
    minHeight: 44, // Ensure enough height for Myanmar characters
  },
  english: {
    fontSize: 16,
    marginTop: 8,
    fontStyle: 'italic',
  },
  placeholder: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  relatedWordsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  relatedWordsColumn: {
    flex: 1,
  },
  relatedWordsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  divider: {
    width: 1,
    alignSelf: 'stretch',
  },
  chipContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    gap: 8,
    marginTop: 12,
  },
  levelChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  levelText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  exampleItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
  },
  exampleKorean: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  exampleMyanmar: {
    fontSize: 14,
    fontFamily: 'NotoSansMyanmar_400Regular',
    lineHeight: 24,
    marginBottom: 2,
  },
  exampleEnglish: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});