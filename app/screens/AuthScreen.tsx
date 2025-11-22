import React, { useState } from 'react';
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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../data/AuthContext';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';

export function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [koreanLevel, setKoreanLevel] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const { signIn, signUp, signInWithGoogle } = useAuth();
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!isLogin) {
      if (!name.trim()) {
        Alert.alert('Error', 'Please enter your name');
        return;
      }
      if (!nationality.trim()) {
        Alert.alert('Error', 'Please enter your nationality');
        return;
      }
      if (!birthdate.trim()) {
        Alert.alert('Error', 'Please enter your birthdate');
        return;
      }
      if (!koreanLevel) {
        Alert.alert('Error', 'Please select your Korean language level');
        return;
      }
      if (!position) {
        Alert.alert('Error', 'Please select your position');
        return;
      }
      if (!gender) {
        Alert.alert('Error', 'Please select your gender');
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
      if (password.length < 6) {
        Alert.alert('Error', 'Password must be at least 6 characters');
        return;
      }
    }

    setLoading(true);
    try {
      if (isLogin) {
        await signIn(email.trim(), password);
      } else {
        await signUp(
          email.trim(), 
          password, 
          name.trim(),
          nationality.trim(),
          birthdate.trim(),
          koreanLevel,
          position,
          gender
        );
      }
    } catch (error: any) {
      let message = 'Something went wrong';
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        message = 'Invalid email or password';
      } else if (error.code === 'auth/email-already-in-use') {
        message = 'Email is already registered';
      } else if (error.code === 'auth/invalid-email') {
        message = 'Invalid email address';
      } else if (error.code === 'auth/weak-password') {
        message = 'Password is too weak';
      }
      Alert.alert('Error', message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
    } catch (error: any) {
      let message = 'Google sign-in failed';
      if (error.message.includes('cancelled')) {
        message = 'Google sign-in was cancelled';
      } else if (error.message) {
        message = error.message;
      }
      Alert.alert('Error', message);
    } finally {
      setLoading(false);
    }
  };

  // Format birthdate with auto-spacing (YYYY-MM-DD)
  const formatBirthdate = (text: string) => {
    // Remove all non-digits
    const numbers = text.replace(/\D/g, '');
    
    // Format as YYYY-MM-DD
    let formatted = numbers;
    if (numbers.length > 4) {
      formatted = numbers.slice(0, 4) + '-' + numbers.slice(4, 6);
    }
    if (numbers.length > 6) {
      formatted = numbers.slice(0, 4) + '-' + numbers.slice(4, 6) + '-' + numbers.slice(6, 8);
    }
    
    // Limit to 10 characters (YYYY-MM-DD)
    if (formatted.length > 10) {
      formatted = formatted.slice(0, 10);
    }
    
    setBirthdate(formatted);
  };

  // Common countries list
  const countries = [
    'Myanmar', 'Korea', 'USA', 'China', 'Japan', 'Thailand', 'Vietnam', 
    'India', 'Singapore', 'Malaysia', 'Indonesia', 'Philippines', 'Cambodia',
    'Laos', 'Bangladesh', 'Nepal', 'Sri Lanka', 'Australia', 'New Zealand',
    'Canada', 'UK', 'Germany', 'France', 'Italy', 'Spain', 'Russia', 'Other'
  ];

  return (
    <KeyboardAvoidingView 
      style={[styles.container, { backgroundColor: C.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="book" size={60} color={C.brand} />
          <Text style={[styles.title, { color: C.textPrimary }]}>
            Myanmar Korean Dictionary
          </Text>
          <Text style={[styles.subtitle, { color: C.textSecondary }]}>
            {isLogin ? 'Sign in to submit new words or Login to Use Pro Features' : 'Create account to contribute'}
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Name Input (Sign Up only) */}
          {!isLogin && (
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: C.textPrimary }]}>Name</Text>
              <View style={[styles.inputWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
                <Ionicons name="person-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: C.textPrimary }]}
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your name"
                  placeholderTextColor={C.textSecondary}
                  autoCapitalize="words"
                />
              </View>
            </View>
          )}

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: C.textPrimary }]}>Email</Text>
            <View style={[styles.inputWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
              <Ionicons name="mail-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: C.textPrimary }]}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor={C.textSecondary}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={[styles.label, { color: C.textPrimary }]}>Password</Text>
            <View style={[styles.inputWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
              <Ionicons name="lock-closed-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: C.textPrimary }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor={C.textSecondary}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                <Ionicons 
                  name={showPassword ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color={C.textSecondary} 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password (Sign Up only) */}
          {!isLogin && (
            <View style={styles.inputContainer}>
              <Text style={[styles.label, { color: C.textPrimary }]}>Confirm Password</Text>
              <View style={[styles.inputWrapper, { borderColor: C.border, backgroundColor: C.surface }]}>
                <Ionicons name="lock-closed-outline" size={20} color={C.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: C.textPrimary }]}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirm your password"
                  placeholderTextColor={C.textSecondary}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
              </View>
            </View>
          )}

          {/* Nationality (Sign Up only) */}
          {!isLogin && (
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
          )}

          {/* Birthdate (Sign Up only) */}
          {!isLogin && (
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
          )}

          {/* Korean Language Level (Sign Up only) */}
          {!isLogin && (
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
          )}

          {/* Position (Sign Up only) */}
          {!isLogin && (
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
          )}

          {/* Gender (Sign Up only) */}
          {!isLogin && (
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
          )}

          {/* Submit Button */}
          <TouchableOpacity
            style={[
              styles.submitButton, 
              { backgroundColor: C.brand },
              loading && styles.submitButtonDisabled
            ]}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={[styles.submitButtonText, { color: '#FFFFFF' }]}>
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Sign Up')}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={[styles.dividerLine, { backgroundColor: C.border }]} />
            <Text style={[styles.dividerText, { color: C.textSecondary }]}>
              {settings.uiLanguage === 'myanmar' ? 'သို့မဟုတ်' : settings.uiLanguage === 'korean' ? '또는' : 'OR'}
            </Text>
            <View style={[styles.dividerLine, { backgroundColor: C.border }]} />
          </View>

          {/* Google Sign-In Button */}
          <TouchableOpacity
            style={[
              styles.googleButton,
              { 
                backgroundColor: C.surface,
                borderColor: C.border,
              },
              loading && styles.submitButtonDisabled
            ]}
            onPress={handleGoogleSignIn}
            disabled={loading}
          >
            <Ionicons name="logo-google" size={20} color="#4285F4" />
            <Text style={[styles.googleButtonText, { color: C.textPrimary }]}>
              {settings.uiLanguage === 'myanmar' 
                ? 'Google ဖြင့် ဝင်ရောက်ရန်'
                : settings.uiLanguage === 'korean'
                ? 'Google로 로그인'
                : 'Continue with Google'}
            </Text>
          </TouchableOpacity>

          {/* Toggle Mode */}
          <View style={styles.toggleContainer}>
            <Text style={[styles.toggleText, { color: C.textSecondary }]}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={[styles.toggleButton, { color: C.brand }]}>
                {isLogin ? 'Sign Up' : 'Sign In'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

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
                <TouchableOpacity onPress={() => setShowCountryModal(false)}>
                  <Ionicons name="close" size={24} color={C.textPrimary} />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.countryList} showsVerticalScrollIndicator={false}>
                {countries.map((country) => (
                  <TouchableOpacity
                    key={country}
                    style={[
                      styles.countryItem,
                      { 
                        backgroundColor: nationality === country ? C.brand : 'transparent',
                        borderBottomColor: C.border 
                      }
                    ]}
                    onPress={() => {
                      setNationality(country);
                      setShowCountryModal(false);
                    }}
                  >
                    <Ionicons 
                      name="flag-outline" 
                      size={20} 
                      color={nationality === country ? '#FFFFFF' : C.textSecondary} 
                      style={styles.countryIcon}
                    />
                    <Text style={[
                      styles.countryItemText,
                      { color: nationality === country ? '#FFFFFF' : C.textPrimary }
                    ]}>
                      {country}
                    </Text>
                    {nationality === country && (
                      <Ionicons name="checkmark" size={20} color="#FFFFFF" />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 52,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeButton: {
    padding: 4,
  },
  submitButton: {
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  toggleText: {
    fontSize: 14,
  },
  toggleButton: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 4,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '500',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1.5,
    marginBottom: 20,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginLeft: 12,
  },
  pickerOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    minWidth: 80,
    alignItems: 'center',
  },
  pickerOptionText: {
    fontSize: 14,
    fontWeight: '600',
  },
  countryButtonText: {
    flex: 1,
    fontSize: 16,
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
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countryList: {
    maxHeight: 400,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  countryIcon: {
    marginRight: 12,
  },
  countryItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
});