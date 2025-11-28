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
import { useDictionarySync, mergeApprovedWords } from '../data/DictionarySync';
import { dictionaryEntries } from '../data/dictionary';
import * as Speech from 'expo-speech';
import * as Clipboard from 'expo-clipboard';
import { WORD_LEVELS } from '../types/dictionary';
import { useSettings } from '../data/SettingsContext';
import { getVoiceSpeedRate } from '../data/settings';

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
  const { settings } = useSettings();
  const { favoriteIds, toggleFavorite } = useLibrary();
  const { approvedWords } = useDictionarySync();
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [speakingExampleIndex, setSpeakingExampleIndex] = React.useState<number | null>(null);
  const [isCopied, setIsCopied] = React.useState(false);

  // Create merged dictionary for searching
  const mergedDictionary = React.useMemo(() => {
    return mergeApprovedWords(dictionaryEntries, approvedWords);
  }, [approvedWords]);

  // Function to find a word in the dictionary by Korean text
  const findWordByKorean = React.useCallback((koreanText: string): DictionaryEntry | null => {
    const normalizedText = koreanText.trim().toLowerCase();
    return mergedDictionary.find(entry => 
      entry.korean.trim().toLowerCase() === normalizedText
    ) || null;
  }, [mergedDictionary]);

  // Handle synonym/antonym click - navigate only if word exists
  const handleRelatedWordClick = React.useCallback((relatedWordText: string) => {
    // Extract Korean word from format like "상충 (conflict)" or just "상충"
    const koreanWord = relatedWordText.split(' (')[0].trim();
    
    // Find the word in dictionary
    const foundWord = findWordByKorean(koreanWord);
    
    if (foundWord) {
      // Word exists - navigate to its detail screen
      navigation.navigate('WordDetail', { word: foundWord });
    }
    // If word doesn't exist, do nothing - stay on current screen silently
  }, [findWordByKorean, navigation]);

  // Handle pronunciation using expo-speech
  async function playPronunciation() {
    if (isSpeaking || speakingExampleIndex !== null) {
      // Stop current speech if already speaking
      await Speech.stop();
      setIsSpeaking(false);
      setSpeakingExampleIndex(null);
      return;
    }

    try {
      setIsSpeaking(true);
      
      // Speak the Korean word with Korean voice
      await Speech.speak(word.korean, {
        language: 'ko-KR',
        pitch: 1.0, // More natural pitch (1.0 = normal, was 0.5 which sounds robotic)
        rate: getVoiceSpeedRate(settings.voiceSpeed),
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

  // Handle copying Korean word to clipboard
  const copyKoreanWord = async () => {
    try {
      await Clipboard.setStringAsync(word.korean);
      setIsCopied(true);
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      Alert.alert(
        'Error',
        'Failed to copy to clipboard. Please try again.'
      );
    }
  };

  // Handle example sentence pronunciation
  async function playExampleSentence(example: Example, index: number) {
    const koreanSentence = (example.korean || '').trim();
    if (!koreanSentence) return;

    // If this example is already speaking, stop it
    if (speakingExampleIndex === index) {
      await Speech.stop();
      setSpeakingExampleIndex(null);
      return;
    }

    // Stop any other speech
    if (isSpeaking || speakingExampleIndex !== null) {
      await Speech.stop();
      setIsSpeaking(false);
    }

    try {
      setSpeakingExampleIndex(index);
      
      // Speak the Korean example sentence with Korean voice
      await Speech.speak(koreanSentence, {
        language: 'ko-KR',
        pitch: 1.0, // More natural pitch (1.0 = normal, was 0.5 which sounds robotic)
        rate: getVoiceSpeedRate(settings.voiceSpeed),
        onDone: () => setSpeakingExampleIndex(null),
        onStopped: () => setSpeakingExampleIndex(null),
        onError: () => {
          setSpeakingExampleIndex(null);
          Alert.alert(
            'Error',
            'Korean voice not available on this device.'
          );
        }
      });
    } catch (error) {
      console.error('Error playing example sentence:', error);
      setSpeakingExampleIndex(null);
      Alert.alert(
        'Error',
        'Failed to play example sentence. Please try again.'
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
            <View style={styles.actionButtons}>
              <Pressable 
                onPress={copyKoreanWord}
                style={({ pressed }) => [
                  styles.copyButton,
                  pressed && { opacity: 0.7 }
                ]}
              >
                <Ionicons 
                  name={isCopied ? "checkmark-circle" : "copy-outline"}
                  size={24}
                  color={isCopied ? C.brand : C.textSecondary}
                />
              </Pressable>
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
            const isExampleSpeaking = speakingExampleIndex === index;
            return (
              <View key={index} style={styles.exampleItem}>
                {showK && (
                  <View style={styles.exampleKoreanRow}>
                    <Text style={[styles.exampleKorean, { color: C.textPrimary }]}>
                      {k}
                    </Text>
                    <Pressable 
                      onPress={() => playExampleSentence(example, index)}
                      style={({ pressed }) => [
                        styles.exampleSpeakerButton,
                        isExampleSpeaking && { backgroundColor: C.brand + '20' },
                        pressed && { opacity: 0.7 }
                      ]}
                    >
                      <Ionicons 
                        name={isExampleSpeaking ? "volume-high" : "volume-high-outline"} 
                        size={18} 
                        color={isExampleSpeaking ? C.brand : C.textSecondary} 
                      />
                    </Pressable>
                  </View>
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
            {word.synonyms ? (
              <View style={styles.relatedWordsList}>
                {word.synonyms.split(',').map((syn, index) => {
                  const trimmed = syn.trim();
                  if (!trimmed) return null;
                  return (
                    <Pressable
                      key={index}
                      onPress={() => handleRelatedWordClick(trimmed)}
                      style={({ pressed }) => [
                        styles.relatedWordChip,
                        { backgroundColor: C.border + '40' },
                        pressed && { opacity: 0.7 }
                      ]}
                    >
                      <Text style={[styles.relatedWordText, { color: C.textPrimary }]}>
                        {trimmed}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            ) : (
              <Text style={[styles.placeholder, { color: C.textTertiary }]}>Coming soon</Text>
            )}
          </View>
          <View style={[styles.divider, { backgroundColor: C.border }]} />
          <View style={styles.relatedWordsColumn}>
            <Text style={[styles.relatedWordsTitle, { color: C.textSecondary }]}>Antonyms</Text>
            {word.antonyms ? (
              <View style={styles.relatedWordsList}>
                {word.antonyms.split(',').map((ant, index) => {
                  const trimmed = ant.trim();
                  if (!trimmed) return null;
                  return (
                    <Pressable
                      key={index}
                      onPress={() => handleRelatedWordClick(trimmed)}
                      style={({ pressed }) => [
                        styles.relatedWordChip,
                        { backgroundColor: C.border + '40' },
                        pressed && { opacity: 0.7 }
                      ]}
                    >
                      <Text style={[styles.relatedWordText, { color: C.textPrimary }]}>
                        {trimmed}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            ) : (
              <Text style={[styles.placeholder, { color: C.textTertiary }]}>Coming soon</Text>
            )}
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
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  copyButton: {
    padding: 8,
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
  exampleKoreanRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  exampleKorean: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginRight: 8,
  },
  exampleSpeakerButton: {
    padding: 6,
    borderRadius: 16,
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
  relatedWordsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  relatedWordChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 4,
  },
  relatedWordText: {
    fontSize: 13,
    fontWeight: '500',
  },
});