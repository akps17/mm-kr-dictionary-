import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useAuth } from '../data/AuthContext';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';
import { AuthScreen } from './AuthScreen';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../data/firebase';

export function ReportFormScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { user, logOut, loading } = useAuth();
  const [reportType, setReportType] = useState<'new_category' | 'new_word' | 'fix_translation'>('new_category');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Show auth screen if not logged in
  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: C.textSecondary }}>{labels.loading}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  async function handleSubmit() {
    if (!message.trim()) {
      setErrorMessage(labels.reportFillMessage);
      setTimeout(() => setErrorMessage(null), 4000);
      Alert.alert('', labels.reportFillMessage);
      return;
    }

    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);
    
    try {
      await addDoc(collection(db, 'user_reports'), {
        userEmail: user?.email || 'anonymous',
        displayName: user?.displayName || 'User',
        reportType: reportType,
        message: message.trim(),
        status: 'pending',
        submittedAt: serverTimestamp(),
        createdAt: new Date().toISOString(),
      });

      // Show success message
      setSuccessMessage(labels.reportSubmittedSuccess);
      
      // Reset form after showing success message
      setTimeout(() => {
        setMessage('');
        setReportType('new_category'); // Reset to default
        setSuccessMessage(null);
      }, 4000);

      // Also show Alert for mobile (works better on native)
      Alert.alert('', labels.reportSubmittedSuccess);
    } catch (error: any) {
      const errorMsg = error.message || 'Failed to submit report';
      setErrorMessage(errorMsg);
      setTimeout(() => setErrorMessage(null), 5000);
      Alert.alert('Error', errorMsg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Success Message Banner */}
        {successMessage && (
          <View
            style={[
              styles.messageBanner,
              {
                backgroundColor: '#10B981',
                borderColor: '#059669',
              },
            ]}
          >
            <Ionicons name="checkmark-circle" size={24} color="#FFFFFF" />
            <Text style={styles.messageBannerText}>{successMessage}</Text>
          </View>
        )}

        {/* Error Message Banner */}
        {errorMessage && (
          <View
            style={[
              styles.messageBanner,
              {
                backgroundColor: '#EF4444',
                borderColor: '#DC2626',
              },
            ]}
          >
            <Ionicons name="alert-circle" size={24} color="#FFFFFF" />
            <Text style={styles.messageBannerText}>{errorMessage}</Text>
          </View>
        )}

        {/* Back Button */}
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16,
            paddingVertical: 8,
            paddingHorizontal: 4,
            opacity: pressed ? 0.6 : 1,
          })}
        >
          <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
          <Text style={{ color: C.textPrimary, fontSize: 16, fontWeight: '600' }}>{labels.back}</Text>
        </Pressable>

        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Image source={require('../assets/dictionary_icon.png')} style={styles.aboutLogo} />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 12 }]}>{labels.reportFormTitle}</Text>
          <Text 
            style={[
              styles.description, 
              { 
                color: C.textSecondary,
                fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
              }
            ]}
          >
            {labels.reportFormDescription}
          </Text>
        </View>

        {/* User Info */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ color: C.textSecondary, fontSize: 12 }}>{labels.loggedInAs}</Text>
              <Text style={{ color: C.textPrimary, fontWeight: '600' }}>{user.displayName || 'User'}</Text>
              <Text style={{ color: C.textSecondary, fontSize: 12 }}>{user.email}</Text>
            </View>
            <Pressable onPress={logOut} style={[styles.pill, { backgroundColor: C.border }]}>
              <Ionicons name="log-out-outline" size={16} color={C.textSecondary} />
              <Text style={{ color: C.textSecondary, fontSize: 12 }}>{labels.logout}</Text>
            </Pressable>
          </View>
        </View>

        {/* Report Type Selection */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
          <Text style={{ color: C.textPrimary, fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
            {labels.reportType}
          </Text>
          
          <Pressable
            onPress={() => setReportType('new_category')}
            style={({ pressed }) => [
              styles.optionButton,
              {
                backgroundColor: reportType === 'new_category' ? C.brand + '20' : C.background,
                borderColor: reportType === 'new_category' ? C.brand : C.border,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Ionicons
              name={reportType === 'new_category' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color={reportType === 'new_category' ? C.brand : C.textSecondary}
            />
            <Text style={{ color: C.textPrimary, fontSize: 15, marginLeft: 12, flex: 1 }}>
              {labels.reportTypeNewCategory}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setReportType('new_word')}
            style={({ pressed }) => [
              styles.optionButton,
              {
                backgroundColor: reportType === 'new_word' ? C.brand + '20' : C.background,
                borderColor: reportType === 'new_word' ? C.brand : C.border,
                opacity: pressed ? 0.7 : 1,
                marginTop: 12,
              },
            ]}
          >
            <Ionicons
              name={reportType === 'new_word' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color={reportType === 'new_word' ? C.brand : C.textSecondary}
            />
            <Text style={{ color: C.textPrimary, fontSize: 15, marginLeft: 12, flex: 1 }}>
              {labels.reportTypeNewWord}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setReportType('fix_translation')}
            style={({ pressed }) => [
              styles.optionButton,
              {
                backgroundColor: reportType === 'fix_translation' ? C.brand + '20' : C.background,
                borderColor: reportType === 'fix_translation' ? C.brand : C.border,
                opacity: pressed ? 0.7 : 1,
                marginTop: 12,
              },
            ]}
          >
            <Ionicons
              name={reportType === 'fix_translation' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color={reportType === 'fix_translation' ? C.brand : C.textSecondary}
            />
            <Text style={{ color: C.textPrimary, fontSize: 15, marginLeft: 12, flex: 1 }}>
              {labels.reportTypeFixTranslation}
            </Text>
          </Pressable>
        </View>

        {/* Message Input */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
          <Text style={{ color: C.textPrimary, fontSize: 16, fontWeight: '600', marginBottom: 12 }}>
            {labels.reportMessage}
          </Text>
          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: C.background,
                color: C.textPrimary,
                borderColor: C.border,
                fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
              },
            ]}
            placeholder={labels.reportMessagePlaceholder}
            placeholderTextColor={C.textSecondary}
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <Pressable
          onPress={handleSubmit}
          disabled={submitting}
          style={({ pressed }) => [
            styles.submitButton,
            {
              backgroundColor: submitting || !message.trim() ? C.border : C.brand,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <Ionicons name="send" size={20} color="#FFFFFF" />
          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600', marginLeft: 8 }}>
            {submitting ? labels.loading : labels.reportSubmit}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  messageBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  messageBannerText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 12,
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
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
  aboutLogo: {
    width: 80,
    height: 80,
    borderRadius: 16,
    borderWidth: 0,
    outlineWidth: 0,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
  },
  textInput: {
    minHeight: 150,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    fontSize: 15,
    lineHeight: 22,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 8,
  },
});

