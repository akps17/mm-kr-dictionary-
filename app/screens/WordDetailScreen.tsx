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
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useLibrary } from '../data/LibraryContext';
import { Audio } from 'expo-av';

type WordDetailScreenProps = {
  route: {
    params: {
      word: {
        id: string;
        korean: string;
        myanmar: string;
        english?: string;
        pos?: string;
        examples?: string[];
        synonyms?: string[];
        antonyms?: string[];
      };
    };
  };
  navigation: any;
};

export function WordDetailScreen({ route, navigation }: WordDetailScreenProps) {
  const { word } = route.params;
  const C = useThemedColors();
  const { favoriteIds, toggleFavorite } = useLibrary();
  const [sound, setSound] = React.useState<Audio.Sound>();

  // Handle pronunciation using Google Cloud TTS
  async function playPronunciation() {
    try {
      // Show loading state
      const loadingSound = new Audio.Sound();
      setSound(loadingSound);

      // Call Google Cloud TTS API
      const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Constants.expoConfig?.extra?.GOOGLE_TTS_API_KEY}`
        },
        body: JSON.stringify({
          input: { text: word.korean },
          voice: { 
            languageCode: 'ko-KR',
            name: 'ko-KR-Standard-A',
            ssmlGender: 'FEMALE'
          },
          audioConfig: { 
            audioEncoding: 'MP3',
            pitch: 0,
            speakingRate: 1
          }
        })
      });

      if (!response.ok) {
        throw new Error('TTS API request failed');
      }

      const data = await response.json();
      const audioContent = data.audioContent; // Base64 encoded audio

      // Convert base64 to URI
      const audioUri = `data:audio/mp3;base64,${audioContent}`;
      
      // Load and play the audio
      await loadingSound.loadAsync({ uri: audioUri });
      await loadingSound.playAsync();

    } catch (error) {
      console.error('Error playing pronunciation:', error);
      // Show error message to user
      Alert.alert(
        'Error',
        'Failed to play pronunciation. Please try again later.'
      );
    }
  }

  // Cleanup sound on unmount
  React.useEffect(() => {
    return sound ? () => {
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

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
            <Text style={[styles.phonetic, { color: C.textSecondary }]}>
              /pronunciation placeholder/
            </Text>
            <Pressable 
              onPress={playPronunciation}
              style={({ pressed }) => [
                styles.speakerButton,
                pressed && { opacity: 0.7 }
              ]}
            >
              <Ionicons name="volume-high-outline" size={24} color={C.brand} />
            </Pressable>
          </View>

          {word.pos && (
            <View style={[styles.posChip, { backgroundColor: C.border }]}>
              <Text style={[styles.posText, { color: C.textSecondary }]}>
                {word.pos}
              </Text>
            </View>
          )}
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
      <View style={[styles.section, { backgroundColor: C.surface }]}>
        <Text style={[styles.sectionTitle, { color: C.textSecondary }]}>Examples</Text>
        <Text style={[styles.placeholder, { color: C.textTertiary }]}>
          Examples will be added soon
        </Text>
      </View>

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
    padding: 4,
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
});