import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from './Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';
import type { Example, WordLevel } from '../types/dictionary';

type WordInputFormProps = {
  onSubmit: (word: {
    korean: string;
    myanmar: string;
    english: string;
    pos: string;
    level?: WordLevel;
    examples?: Example[];
  }) => void;
  initialValues?: {
    korean?: string;
    myanmar?: string;
    english?: string;
    pos?: string;
    level?: WordLevel;
    examples?: Example[];
  };
};

export function WordInputForm({ onSubmit, initialValues }: WordInputFormProps) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  
  // Form state
  const [korean, setKorean] = useState(initialValues?.korean || '');
  const [myanmar, setMyanmar] = useState(initialValues?.myanmar || '');
  const [english, setEnglish] = useState(initialValues?.english || '');
  const [pos, setPos] = useState<string>(initialValues?.pos || 'noun');
  const [level, setLevel] = useState<WordLevel | ''>(initialValues?.level || '');
  const [examples, setExamples] = useState<Example[]>(initialValues?.examples || []);
  
  // Dropdown state
  const [posDropdownVisible, setPosDropdownVisible] = useState(false);
  const [levelDropdownVisible, setLevelDropdownVisible] = useState(false);

  // Example handlers
  const addExample = useCallback(() => {
    setExamples(prev => [...prev, { korean: '', myanmar: '', english: '' } as Example]);
  }, []);

  const removeExample = useCallback((index: number) => {
    setExamples(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updateExample = useCallback((index: number, field: keyof Example, value: string) => {
    setExamples(prev => prev.map((example, i) => 
      i === index ? { ...example, [field]: value } : example
    ));
  }, []);

  // Submit handler
  const handleSubmit = useCallback(() => {
    // Filter out incomplete examples (require korean+myanmar like admin)
    const validExamples = examples.filter(ex => (ex.korean || '').trim() && (ex.myanmar || '').trim());
    
    onSubmit({
      korean: korean.trim(),
      myanmar: myanmar.trim(),
      english: english.trim(),
      pos,
      level: level || undefined,
      examples: validExamples.length > 0 ? validExamples.map(ex => ({
        korean: ex.korean.trim(),
        myanmar: (ex.myanmar || '').trim(),
        english: (ex.english || '').trim() || undefined,
      })) : [],
    });

    // Clear form
    setKorean('');
    setMyanmar('');
    setEnglish('');
    setPos('noun');
    setLevel('');
    setExamples([]);

    // Show success alert
    Alert.alert(
      labels.submittedSuccess || 'Word Submitted!',
      settings.uiLanguage === 'myanmar'
        ? 'စကားလုံးကို အောင်မြင်စွာ တင်သွင်းပြီးပါပြီ။ အက်မင်မှ စစ်ဆေးပြီး အတည်ပြုပေးပါမည်။'
        : settings.uiLanguage === 'korean'
        ? '단어가 성공적으로 제출되었습니다. 관리자가 검토 후 승인해드리겠습니다.'
        : 'Word submitted successfully! Admin will review and approve it soon.',
      [{ text: labels.ok || 'OK', style: 'default' }]
    );
  }, [korean, myanmar, english, pos, level, examples, onSubmit, labels, settings.uiLanguage]);

  return (
    <View style={[styles.container, { backgroundColor: C.surface, borderColor: C.border }]}>
      {/* Korean Word */}
      <View style={styles.section}>
        <Text style={[styles.label, { color: C.textSecondary }]}>Korean Word *</Text>
        <TextInput
          style={[styles.input, { backgroundColor: C.background, borderColor: C.border, color: C.textPrimary }]}
          placeholder="Enter Korean word"
          placeholderTextColor={C.textTertiary}
          value={korean}
          onChangeText={setKorean}
        />
      </View>

      {/* Myanmar Translation */}
      <View style={styles.section}>
        <Text style={[styles.label, { color: C.textSecondary }]}>Myanmar Translation *</Text>
        <TextInput
          style={[styles.input, { backgroundColor: C.background, borderColor: C.border, color: C.textPrimary }]}
          placeholder="Enter Myanmar translation"
          placeholderTextColor={C.textTertiary}
          value={myanmar}
          onChangeText={setMyanmar}
        />
      </View>

      {/* English Translation */}
      <View style={styles.section}>
        <Text style={[styles.label, { color: C.textSecondary }]}>English Translation *</Text>
        <TextInput
          style={[styles.input, { backgroundColor: C.background, borderColor: C.border, color: C.textPrimary }]}
          placeholder="Enter English translation"
          placeholderTextColor={C.textTertiary}
          value={english}
          onChangeText={setEnglish}
        />
      </View>

      {/* Part of Speech */}
      <View style={styles.section}>
        <Text style={[styles.label, { color: C.textSecondary }]}>Part of Speech</Text>
        <Pressable
          onPress={() => setPosDropdownVisible(true)}
          style={[styles.dropdownButton, { backgroundColor: C.background, borderColor: C.border }]}
        >
          <Text style={[styles.dropdownButtonText, { color: C.textPrimary }]}>
            {pos.charAt(0).toUpperCase() + pos.slice(1)}
          </Text>
          <Ionicons name="chevron-down" size={16} color={C.textSecondary} />
        </Pressable>
        
        <Modal
          visible={posDropdownVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setPosDropdownVisible(false)}
        >
          <Pressable 
            style={styles.modalOverlay} 
            onPress={() => setPosDropdownVisible(false)}
          >
            <View style={[styles.dropdownModal, { backgroundColor: C.background }]}>
              <ScrollView>
                {['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'other'].map((option) => (
                  <Pressable
                    key={option}
                    style={[styles.dropdownOption, pos === option && { backgroundColor: C.border }]}
                    onPress={() => {
                      setPos(option);
                      setPosDropdownVisible(false);
                    }}
                  >
                    <Text style={[styles.dropdownOptionText, { color: C.textPrimary }]}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </Pressable>
        </Modal>
      </View>

      {/* Word Level */}
      <View style={styles.section}>
        <Text style={[styles.label, { color: C.textSecondary }]}>Word Level (Optional)</Text>
        <Pressable
          onPress={() => setLevelDropdownVisible(true)}
          style={[styles.dropdownButton, { backgroundColor: C.background, borderColor: C.border }]}
        >
          <Text style={[styles.dropdownButtonText, { color: C.textPrimary }]}>
            {level ? level.charAt(0).toUpperCase() + level.slice(1) : 'No Level'}
          </Text>
          <Ionicons name="chevron-down" size={16} color={C.textSecondary} />
        </Pressable>
        
        <Modal
          visible={levelDropdownVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setLevelDropdownVisible(false)}
        >
          <Pressable 
            style={styles.modalOverlay} 
            onPress={() => setLevelDropdownVisible(false)}
          >
            <View style={[styles.dropdownModal, { backgroundColor: C.background }]}>
              <ScrollView>
                {[
                  { value: '', label: 'No Level' },
                  { value: 'basic', label: 'Basic (TOPIK I - Level 1)' },
                  { value: 'pre-intermediate', label: 'Pre-Intermediate (TOPIK I - Level 2)' },
                  { value: 'intermediate', label: 'Intermediate (TOPIK II - Level 3-4)' },
                  { value: 'advanced', label: 'Advanced (TOPIK II - Level 5-6)' }
                ].map((option) => (
                  <Pressable
                    key={option.value}
                    style={[styles.dropdownOption, level === option.value && { backgroundColor: C.border }]}
                    onPress={() => {
                      setLevel(option.value as WordLevel);
                      setLevelDropdownVisible(false);
                    }}
                  >
                    <Text style={[styles.dropdownOptionText, { color: C.textPrimary }]}>
                      {option.label}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          </Pressable>
        </Modal>
      </View>

      {/* Example Sentences */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Pressable
            onPress={addExample}
            style={({ pressed }) => [
              styles.addButton,
              { backgroundColor: C.brand, opacity: pressed ? 0.7 : 1 }
            ]}
          >
            <Ionicons name="add" size={16} color="white" />
            <Text style={[styles.addButtonText, { color: 'white' }]}>Add Example</Text>
          </Pressable>
        </View>
        <Text style={[styles.label, { color: C.textSecondary, marginBottom: 6 }]}>Add example sentences for our community...</Text>


        {examples.map((example, index) => (
          <View key={index} style={[styles.exampleCard, { backgroundColor: C.background, borderColor: C.border }]}> 
            <Pressable
              onPress={() => removeExample(index)}
              style={({ pressed }) => [
                styles.removeButton,
                { opacity: pressed ? 0.7 : 1 }
              ]}
            >
              <Ionicons name="close-circle" size={20} color={C.textTertiary} />
            </Pressable>
            <Text style={[styles.label, { color: C.textSecondary, marginBottom: 6 }]}>Korean Example</Text>
            <TextInput
              style={[styles.input, styles.exampleInput, { borderColor: C.border, backgroundColor: C.surface, color: C.textPrimary }]}
              placeholder="Enter example in Korean"
              placeholderTextColor={C.textTertiary}
              value={example.korean}
              onChangeText={(text) => updateExample(index, 'korean', text)}
            />
            <Text style={[styles.label, { color: C.textSecondary, marginBottom: 6, marginTop: 10 }]}>Myanmar Translation</Text>
            <TextInput
              style={[styles.input, styles.exampleInput, { borderColor: C.border, backgroundColor: C.surface, color: C.textPrimary }]}
              placeholder="Enter example in Myanmar"
              placeholderTextColor={C.textTertiary}
              value={example.myanmar || ''}
              onChangeText={(text) => updateExample(index, 'myanmar', text)}
            />
            <Text style={[styles.label, { color: C.textSecondary, marginBottom: 6, marginTop: 10 }]}>English Translation (Optional)</Text>
            <TextInput
              style={[styles.input, styles.exampleInput, { borderColor: C.border, backgroundColor: C.surface, color: C.textPrimary }]}
              placeholder="Enter example in English (optional)"
              placeholderTextColor={C.textTertiary}
              value={example.english || ''}
              onChangeText={(text) => updateExample(index, 'english', text)}
            />
          </View>
        ))}
      </View>

      {/* Submit Button with better spacing */}
      <View style={styles.submitSection}>
        <Pressable
          onPress={handleSubmit}
          style={({ pressed }) => [
            styles.submitButton,
            { backgroundColor: '#10B981', opacity: pressed ? 0.8 : 1 }
          ]}
          disabled={!korean.trim() || !myanmar.trim() || !english.trim()}
        >
          <Ionicons name="save-outline" size={20} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.submitButtonText}>Submit Word</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    fontWeight: '300', // Light weight for Korean and Myanmar inputs
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  exampleCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    position: 'relative',
  },
  exampleInput: {
    marginTop: 8,
    height: 44,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  removeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
  },
  submitSection: {
    marginTop: 32, // Better spacing from examples
    marginBottom: 16,
  },
  submitButton: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  dropdownButton: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  dropdownButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownModal: {
    width: '80%',
    maxHeight: '60%',
    borderRadius: 12,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
  },
  dropdownOptionText: {
    fontSize: 16,
  },
});