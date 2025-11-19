import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useDictionarySync, mergeApprovedWords } from '../data/DictionarySync';
import { dictionaryEntries } from '../data/dictionary';
import type { DictionaryEntry } from '../types/dictionary';
import { i18nLabels } from '../data/settings';

export function VoiceToTextScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { approvedWords } = useDictionarySync();
  const [isListening, setIsListening] = React.useState(false);
  const [transcript, setTranscript] = React.useState('');
  const [foundWord, setFoundWord] = React.useState<DictionaryEntry | null>(null);
  const [statusText, setStatusText] = React.useState(labels.tapToStart || 'Tap to start speaking');

  // Create merged dictionary for search
  const mergedDictionary = React.useMemo(() => {
    return mergeApprovedWords(dictionaryEntries, approvedWords);
  }, [approvedWords]);

  // Search for word in dictionary
  const searchInDictionary = React.useCallback((text: string) => {
    if (!text.trim()) {
      setFoundWord(null);
      return;
    }

    const searchTerm = text.trim().toLowerCase();
    
    // Search in Korean, Myanmar, or English
    const found = mergedDictionary.find(word => 
      word.korean.toLowerCase() === searchTerm ||
      word.myanmar.toLowerCase() === searchTerm ||
      (word.english && word.english.toLowerCase() === searchTerm)
    );

    if (found) {
      setFoundWord(found);
      setStatusText(labels.wordFound || 'Word found in dictionary!');
    } else {
      setFoundWord(null);
      setStatusText(labels.wordNotFound || 'Word not found in dictionary');
    }
  }, [mergedDictionary, labels]);

  const startListening = async () => {
    try {
      setIsListening(true);
      setTranscript('');
      setFoundWord(null);
      setStatusText(labels.listening || 'Listening... Speak now!');
      
      // Note: This is a placeholder for native speech recognition
      // In a real implementation with expo-speech-recognition:
      // await ExpoSpeechRecognition.start({ lang: 'ko-KR' });
      
      setTimeout(() => {
        // Simulated result - replace with actual speech recognition
        setStatusText(labels.tapStop || 'Tap stop when finished');
      }, 500);
    } catch (error) {
      console.error('Speech recognition error:', error);
      setStatusText(labels.failedToStart || 'Failed to start listening');
      setIsListening(false);
    }
  };

  const stopListening = async () => {
    try {
      setIsListening(false);
      setStatusText(labels.processing || 'Processing...');
      
      // Note: This would stop the actual speech recognition
      // await ExpoSpeechRecognition.stop();
      
      // For now, show a message
      setTimeout(() => {
        setStatusText(labels.readyToStart || 'Ready to start speaking');
      }, 500);
    } catch (error) {
      console.error('Stop error:', error);
      setStatusText(labels.errorStopping || 'Error stopping');
    }
  };

  // Simulated speech recognition result handler
  const handleSpeechResult = (text: string) => {
    setTranscript(text);
    searchInDictionary(text);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView 
        style={{ flex: 1, backgroundColor: C.background }}
        contentContainerStyle={{ padding: 16 }}
      >
        <Text style={[styles.title, { color: C.textPrimary, marginBottom: 8 }]}>
          {labels.voiceToText || (settings.uiLanguage === 'myanmar' ? 'အသံမှ စာသို့' : settings.uiLanguage === 'korean' ? '음성에서 텍스트로' : 'Voice to Text')}
        </Text>
        
        {/* Status Card */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
          <View style={{ alignItems: 'center', paddingVertical: 16 }}>
            <View style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: isListening ? '#EF4444' : C.brand,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}>
              <Ionicons 
                name={isListening ? "mic" : "mic-outline"} 
                size={48} 
                color="#fff" 
              />
            </View>
            
            <Text style={{ color: C.textSecondary, marginBottom: 12, textAlign: 'center' }}>
              {statusText}
            </Text>
            
            {isListening ? (
              <Pressable 
                onPress={stopListening} 
                style={[styles.primaryBtn, { backgroundColor: '#DC2626' }]}
              >
                <Ionicons name="stop-circle" size={20} color="#fff" />
                <Text style={styles.primaryBtnText}>
                  {labels.stop || (settings.uiLanguage === 'myanmar' ? 'ရပ်ရန်' : settings.uiLanguage === 'korean' ? '중지' : 'Stop')}
                </Text>
            </Pressable>
          ) : (
              <Pressable 
                onPress={startListening} 
                style={[styles.primaryBtn, { backgroundColor: C.brand }]}
              >
                <Ionicons name="mic" size={20} color="#fff" />
                <Text style={styles.primaryBtnText}>
                  {labels.startSpeaking || (settings.uiLanguage === 'myanmar' ? 'စတင်ရန်' : settings.uiLanguage === 'korean' ? '시작' : 'Start Speaking')}
                </Text>
            </Pressable>
          )}
          </View>
        </View>

        {/* Transcript Card */}
        {transcript && (
          <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
            <Text style={{ fontSize: 14, color: C.textSecondary, marginBottom: 8, fontWeight: '600' }}>
              {labels.recognizedText || (settings.uiLanguage === 'myanmar' ? 'သင်ပြောသော စကားလုံး:' : settings.uiLanguage === 'korean' ? '인식된 텍스트:' : 'Recognized Text:')}
            </Text>
            <Text style={{ fontSize: 20, color: C.textPrimary, fontWeight: '700', marginBottom: 12 }}>
              {transcript}
            </Text>
            
            <TextInput
              value={transcript}
              onChangeText={(text) => {
                setTranscript(text);
                searchInDictionary(text);
              }}
              style={{
                borderWidth: 1.5,
                borderColor: C.border,
                borderRadius: 10,
                padding: 12,
                color: C.textPrimary,
                backgroundColor: C.background,
                fontSize: 16,
              }}
              placeholder={labels.typeOrEdit || (settings.uiLanguage === 'myanmar' ? 'စာရိုက်၍ ရှာပါ' : settings.uiLanguage === 'korean' ? '텍스트 입력 또는 편집' : 'Type or edit text')}
              placeholderTextColor={C.textTertiary}
            />
          </View>
        )}

        {/* Dictionary Result Card */}
        {foundWord && (
          <View style={[styles.card, { backgroundColor: C.surface, borderColor: '#10B981', borderWidth: 2, marginBottom: 16 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
              <Ionicons name="checkmark-circle" size={28} color="#10B981" />
              <Text style={{ fontSize: 18, fontWeight: '700', color: '#10B981', marginLeft: 8 }}>
                {labels.foundInDictionary || (settings.uiLanguage === 'myanmar' ? 'အဘိဓာန်တွင် တွေ့ပါသည်!' : settings.uiLanguage === 'korean' ? '사전에서 찾음!' : 'Found in Dictionary!')}
              </Text>
            </View>
            
            <View style={{ paddingVertical: 12, borderTopWidth: 1, borderTopColor: C.border }}>
              <Text style={{ fontSize: 24, fontWeight: '700', color: C.textPrimary, marginBottom: 8 }}>
                {foundWord.korean}
              </Text>
              <Text style={{ fontSize: 18, color: C.textPrimary, marginBottom: 4, fontFamily: 'NotoSansMyanmar_400Regular' }}>
                {foundWord.myanmar}
              </Text>
              {foundWord.english && (
                <Text style={{ fontSize: 16, color: C.textSecondary, fontStyle: 'italic' }}>
                  {foundWord.english}
                </Text>
              )}
            </View>

            <Pressable
              onPress={() => navigation.navigate('Home', { screen: 'WordDetail', params: { word: foundWord } })}
              style={[styles.primaryBtn, { backgroundColor: '#10B981', marginTop: 12 }]}
            >
              <Ionicons name="book-outline" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>
                {labels.viewDetails || (settings.uiLanguage === 'myanmar' ? 'အသေးစိတ်ကြည့်ရန်' : settings.uiLanguage === 'korean' ? '자세히 보기' : 'View Details')}
              </Text>
            </Pressable>
          </View>
        )}

        {/* Info Card */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Ionicons name="information-circle" size={24} color={C.brand} style={{ marginRight: 12 }} />
            <Text style={{ flex: 1, color: C.textSecondary, fontSize: 13, lineHeight: 20 }}>
              {labels.voiceHelp}
            </Text>
          </View>
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
  card: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});

