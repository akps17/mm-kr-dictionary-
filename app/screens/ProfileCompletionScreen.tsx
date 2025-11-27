import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  SafeAreaView,
  BackHandler,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../data/AuthContext';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';

const COUNTRIES = [
  'Myanmar', 'Korea', 'Thailand', 'Singapore', 'Malaysia', 'Indonesia', 
  'Philippines', 'Vietnam', 'Cambodia', 'Laos', 'China', 'Japan', 
  'India', 'Bangladesh', 'USA', 'UK', 'Australia', 'Canada', 'Other'
];

export function ProfileCompletionScreen({ onComplete }: { onComplete: () => void }) {
  const [nationality, setNationality] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [koreanLevel, setKoreanLevel] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const { user, updateUserProfile } = useAuth();
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];

  // Prevent back button navigation on Android
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Prevent going back - user must complete the form
      Alert.alert(
        'Complete Your Profile',
        'Please complete your profile to continue using the app.',
        [{ text: 'OK' }]
      );
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, []);

  // Check if all required fields are filled
  const isFormComplete = React.useMemo(() => {
    return !!(
      nationality.trim() &&
      birthdate.trim() &&
      /^\d{4}-\d{2}-\d{2}$/.test(birthdate) &&
      koreanLevel &&
      position &&
      gender
    );
  }, [nationality, birthdate, koreanLevel, position, gender]);

  const formatBirthdate = (text: string) => {
    // Remove non-numeric characters
    const cleaned = text.replace(/\D/g, '');
    
    // Format as YYYY-MM-DD
    if (cleaned.length <= 4) {
      setBirthdate(cleaned);
    } else if (cleaned.length <= 6) {
      setBirthdate(`${cleaned.slice(0, 4)}-${cleaned.slice(4)}`);
    } else {
      setBirthdate(`${cleaned.slice(0, 4)}-${cleaned.slice(4, 6)}-${cleaned.slice(6, 8)}`);
    }
  };

  const handleSubmit = async () => {
    if (!nationality.trim()) {
      Alert.alert('', 'Please select your nationality');
      return;
    }
    if (!birthdate.trim()) {
      Alert.alert('', 'Please enter your birthdate');
      return;
    }
    if (!koreanLevel) {
      Alert.alert('', 'Please select your Korean language level');
      return;
    }
    if (!position) {
      Alert.alert('', 'Please select your position');
      return;
    }
    if (!gender) {
      Alert.alert('', 'Please select your gender');
      return;
    }

    // Validate birthdate format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
      Alert.alert('', 'Please enter a valid birthdate (YYYY-MM-DD)');
      return;
    }

    setLoading(true);
    try {
      await updateUserProfile({
        nationality: nationality.trim(),
        birthdate: birthdate.trim(),
        koreanLevel: koreanLevel,
        position: position,
        gender: gender,
      });
      Alert.alert('', 'Profile completed successfully!', [
        { text: 'OK', onPress: onComplete }
      ]);
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Ionicons name="person-circle-outline" size={64} color={C.brand} />
            <Text style={[styles.title, { color: C.textPrimary }]}>Complete Your Profile</Text>
            <Text style={[styles.subtitle, { color: C.textSecondary }]}>
              Help us improve analytics by providing some information about yourself
            </Text>
          </View>

          {/* Nationality */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: C.textPrimary }]}>Nationality</Text>
            <TouchableOpacity
              style={[styles.inputWrapper, { borderColor: C.border, backgroundColor: C.surface }]}
              onPress={() => setShowCountryModal(true)}
            >
              <Ionicons name="globe-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
              <Text style={[styles.countryButtonText, { color: nationality ? C.textPrimary : C.textSecondary }]}>
                {nationality || 'Select your nationality'}
              </Text>
              <Ionicons name="chevron-down-outline" size={20} color={C.textSecondary} />
            </TouchableOpacity>
          </View>

          {/* Birthdate */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: C.textPrimary }]}>Birthdate</Text>
            <View style={[styles.inputWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
              <Ionicons name="calendar-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: C.textPrimary }]}
                value={birthdate}
                onChangeText={formatBirthdate}
                placeholder="YYYY-MM-DD (e.g., 1990-01-15)"
                placeholderTextColor={C.textSecondary}
                keyboardType="numeric"
                maxLength={10}
              />
            </View>
          </View>

          {/* Korean Language Level */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: C.textPrimary }]}>Korean Language Level</Text>
            <View style={[styles.pickerWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
              <Ionicons name="school-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
              <View style={styles.pickerContainer}>
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <TouchableOpacity
                    key={level}
                    style={[
                      styles.pickerOption,
                      koreanLevel === level.toString() && { backgroundColor: C.brand, borderColor: C.brand },
                      koreanLevel !== level.toString() && { borderColor: C.border }
                    ]}
                    onPress={() => setKoreanLevel(level.toString())}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      { color: koreanLevel === level.toString() ? '#FFFFFF' : C.textPrimary }
                    ]}>
                      Level {level}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Position */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: C.textPrimary }]}>Position</Text>
            <View style={[styles.pickerWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
              <Ionicons name="briefcase-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
              <View style={styles.pickerContainer}>
                {['Student', 'Teacher', 'Worker', 'Other'].map((pos) => (
                  <TouchableOpacity
                    key={pos}
                    style={[
                      styles.pickerOption,
                      position === pos && { backgroundColor: C.brand, borderColor: C.brand },
                      position !== pos && { borderColor: C.border }
                    ]}
                    onPress={() => setPosition(pos)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      { color: position === pos ? '#FFFFFF' : C.textPrimary }
                    ]}>
                      {pos}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Gender */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: C.textPrimary }]}>Gender</Text>
            <View style={[styles.pickerWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
              <Ionicons name="person-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
              <View style={styles.pickerContainer}>
                {['Male', 'Female'].map((gen) => (
                  <TouchableOpacity
                    key={gen}
                    style={[
                      styles.pickerOption,
                      gender === gen && { backgroundColor: C.brand, borderColor: C.brand },
                      gender !== gen && { borderColor: C.border }
                    ]}
                    onPress={() => setGender(gen)}
                  >
                    <Text style={[
                      styles.pickerOptionText,
                      { color: gender === gen ? '#FFFFFF' : C.textPrimary }
                    ]}>
                      {gen}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[
              styles.submitButton,
              { 
                backgroundColor: isFormComplete && !loading ? C.brand : C.border,
                opacity: isFormComplete && !loading ? 1 : 0.6,
              },
              loading && styles.submitButtonDisabled
            ]}
            onPress={handleSubmit}
            disabled={!isFormComplete || loading}
          >
            <Text style={[styles.submitButtonText, { color: isFormComplete && !loading ? '#FFFFFF' : C.textSecondary }]}>
              {loading ? 'Saving...' : 'Complete Profile'}
            </Text>
          </TouchableOpacity>
          
          {/* Helper text if form is incomplete */}
          {!isFormComplete && (
            <Text style={[styles.helperText, { color: C.textSecondary }]}>
              Please fill in all fields to continue
            </Text>
          )}
        </ScrollView>

        {/* Country Selection Modal */}
        <Modal
          visible={showCountryModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowCountryModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { backgroundColor: C.surface }]}>
              <View style={styles.modalHeader}>
                <Text style={[styles.modalTitle, { color: C.textPrimary }]}>Select Nationality</Text>
                <TouchableOpacity
                  onPress={() => setShowCountryModal(false)}
                  style={styles.modalCloseButton}
                >
                  <Ionicons name="close" size={24} color={C.textPrimary} />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.modalScrollView}>
                {COUNTRIES.map((country) => (
                  <TouchableOpacity
                    key={country}
                    style={[
                      styles.modalOption,
                      { borderBottomColor: C.border },
                      nationality === country && { backgroundColor: C.brand + '20' }
                    ]}
                    onPress={() => {
                      setNationality(country);
                      setShowCountryModal(false);
                    }}
                  >
                    <Text style={[
                      styles.modalOptionText,
                      { color: nationality === country ? C.brand : C.textPrimary }
                    ]}>
                      {country}
                    </Text>
                    {nationality === country && (
                      <Ionicons name="checkmark" size={20} color={C.brand} />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  countryButtonText: {
    flex: 1,
    fontSize: 16,
  },
  pickerWrapper: {
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 12,
  },
  pickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  pickerOption: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    minWidth: 80,
    alignItems: 'center',
  },
  pickerOptionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  helperText: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  modalCloseButton: {
    padding: 4,
  },
  modalScrollView: {
    maxHeight: 400,
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  modalOptionText: {
    fontSize: 16,
  },
});

