import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';
import { GoogleTranslateProvider } from '../data/ai';
// import * as Clipboard from 'expo-clipboard'; // Will be enabled in dev build

type LanguageCode = 'ko' | 'my' | 'en';

interface LanguageOption {
  code: LanguageCode;
  name: string;
  nameKo: string;
  nameMy: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'ko', name: 'Korean', nameKo: '한국어', nameMy: 'ကိုရီးယား', flag: '🇰🇷' },
  { code: 'my', name: 'Myanmar', nameKo: '미얀마어', nameMy: 'မြန်မာ', flag: '🇲🇲' },
  { code: 'en', name: 'English', nameKo: '영어', nameMy: 'အင်္ဂလိပ်', flag: '🇬🇧' },
];

export function TranslateScreen() {
  const C = useThemedColors();
  const { settings } = useSettings();
  const [text, setText] = React.useState('');
  const [result, setResult] = React.useState('');
  const [sourceLang, setSourceLang] = React.useState<LanguageCode>('ko');
  const [targetLang, setTargetLang] = React.useState<LanguageCode>('my');
  const [isTranslating, setIsTranslating] = React.useState(false);

  // Use Google Translate API key
  const GOOGLE_TRANSLATE_API_KEY = 'AIzaSyBBuzkwhzcI0kETOP3uHb5WVlNzl-RdGOU';
  const provider = React.useMemo(() => new GoogleTranslateProvider(GOOGLE_TRANSLATE_API_KEY), []);

  const swapLanguages = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    
    // Also swap the text
    const tempText = text;
    setText(result);
    setResult(tempText);
  };

  const translate = async () => {
    if (!text.trim()) {
      const emptyMsg = settings.uiLanguage === 'myanmar' 
        ? 'စာသားထည့်ပါ'
        : settings.uiLanguage === 'korean'
        ? '텍스트를 입력하세요'
        : 'Please enter text';
      Alert.alert('Error', emptyMsg);
      return;
    }

    if (sourceLang === targetLang) {
      const sameMsg = settings.uiLanguage === 'myanmar'
        ? 'ဘာသာစကား မတူညီပါ'
        : settings.uiLanguage === 'korean'
        ? '다른 언어를 선택하세요'
        : 'Please select different languages';
      Alert.alert('Error', sameMsg);
      return;
    }

    setIsTranslating(true);
    try {
      const translated = await provider.translate(text, sourceLang, targetLang);
      setResult(translated);
    } catch (e: any) {
      const errorMsg = settings.uiLanguage === 'myanmar'
        ? `ဘာသာပြန်ဆိုမှု မအောင်မြင်ပါ: ${e?.message ?? 'အမည်မသိ အမှား'}`
        : settings.uiLanguage === 'korean'
        ? `번역 실패: ${e?.message ?? '알 수 없는 오류'}`
        : `Translation failed: ${e?.message ?? 'unknown error'}`;
      Alert.alert('Error', errorMsg);
      setResult('');
    } finally {
      setIsTranslating(false);
    }
  };

  const copyToClipboard = async (textToCopy: string) => {
    try {
      // For now, just show the text in an alert
      // When running in dev build, you can uncomment expo-clipboard import above
      const copiedMsg = settings.uiLanguage === 'myanmar'
        ? 'ကူးယူပြီးပါပြီ'
        : settings.uiLanguage === 'korean'
        ? '복사되었습니다'
        : 'Copied to clipboard';
      
      // Fallback: Show text in alert (can be copied manually)
      Alert.alert(
        settings.uiLanguage === 'myanmar' ? 'စာသား' : settings.uiLanguage === 'korean' ? '텍스트' : 'Text',
        textToCopy,
        [{ text: 'OK' }]
      );
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const clearText = () => {
    setText('');
    setResult('');
  };

  const getLanguageName = (lang: LanguageOption) => {
    if (settings.uiLanguage === 'korean') return lang.nameKo;
    if (settings.uiLanguage === 'myanmar') return lang.nameMy;
    return lang.name;
  };

  const labels = i18nLabels[settings.uiLanguage];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16 }}
      >
        {/* Header */}
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#4285F4',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}>
              <Ionicons name="language" size={22} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', color: C.textPrimary }}>
                {settings.uiLanguage === 'myanmar' ? 'ဘာသာပြန်' : settings.uiLanguage === 'korean' ? '번역' : 'Translate'}
              </Text>
              <Text style={{ fontSize: 13, color: C.textSecondary }}>
                Google Translate
              </Text>
            </View>
            {(text || result) && (
              <Pressable
                onPress={clearText}
                style={({ pressed }) => ({
                  padding: 8,
                  borderRadius: 8,
                  backgroundColor: pressed ? C.border + '40' : 'transparent',
                })}
              >
                <Ionicons name="close-circle-outline" size={24} color={C.textSecondary} />
              </Pressable>
            )}
          </View>
        </View>

        {/* Language Selector */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
          backgroundColor: C.surface,
          borderRadius: 16,
          padding: 12,
          borderWidth: 1.5,
          borderColor: C.border,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: 2,
        }}>
          {/* Source Language */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 11, color: C.textSecondary, marginBottom: 6, fontWeight: '600' }}>
              {settings.uiLanguage === 'myanmar' ? 'မှ' : settings.uiLanguage === 'korean' ? '원본' : 'From'}
            </Text>
            {LANGUAGES.map((lang) => (
              <Pressable
                key={`source-${lang.code}`}
                onPress={() => setSourceLang(lang.code)}
                style={({ pressed }) => ({
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 10,
                  backgroundColor: sourceLang === lang.code ? '#4285F4' : pressed ? C.border + '40' : 'transparent',
                  marginBottom: 6,
                })}
              >
                <Text style={{
                  fontSize: 15,
                  fontWeight: sourceLang === lang.code ? '700' : '500',
                  color: sourceLang === lang.code ? '#fff' : C.textPrimary,
                }}>
                  {lang.flag} {getLanguageName(lang)}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Swap Button */}
          <Pressable
            onPress={swapLanguages}
            style={({ pressed }) => ({
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: pressed ? C.brand : C.background,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 8,
              borderWidth: 2,
              borderColor: C.border,
            })}
          >
            <Ionicons name="swap-horizontal" size={22} color={C.brand} />
          </Pressable>

          {/* Target Language */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 11, color: C.textSecondary, marginBottom: 6, fontWeight: '600' }}>
              {settings.uiLanguage === 'myanmar' ? 'သို့' : settings.uiLanguage === 'korean' ? '대상' : 'To'}
            </Text>
            {LANGUAGES.map((lang) => (
              <Pressable
                key={`target-${lang.code}`}
                onPress={() => setTargetLang(lang.code)}
                style={({ pressed }) => ({
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 10,
                  backgroundColor: targetLang === lang.code ? '#10B981' : pressed ? C.border + '40' : 'transparent',
                  marginBottom: 6,
                })}
              >
                <Text style={{
                  fontSize: 15,
                  fontWeight: targetLang === lang.code ? '700' : '500',
                  color: targetLang === lang.code ? '#fff' : C.textPrimary,
                }}>
                  {lang.flag} {getLanguageName(lang)}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Input Card */}
        <View style={{
          backgroundColor: C.surface,
          borderRadius: 16,
          borderWidth: 1.5,
          borderColor: C.border,
          padding: 16,
          marginBottom: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 4,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: C.textSecondary }}>
              {settings.uiLanguage === 'myanmar' ? 'ထည့်သွင်းရန်' : settings.uiLanguage === 'korean' ? '입력' : 'Input Text'}
            </Text>
            {text && (
              <Pressable onPress={() => copyToClipboard(text)}>
                <Ionicons name="copy-outline" size={20} color={C.textSecondary} />
              </Pressable>
            )}
          </View>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder={
              settings.uiLanguage === 'myanmar'
                ? 'ဘာသာပြန်ဆိုလိုသော စာသားထည့်ပါ...'
                : settings.uiLanguage === 'korean'
                ? '번역할 텍스트를 입력하세요...'
                : 'Enter text to translate...'
            }
            placeholderTextColor={C.textTertiary}
            multiline
            style={{
              fontSize: 16,
              color: C.textPrimary,
              backgroundColor: C.background,
              borderRadius: 12,
              padding: 14,
              minHeight: 120,
              textAlignVertical: 'top',
              borderWidth: 1,
              borderColor: C.border + '60',
            }}
            maxLength={5000}
          />
          <Text style={{ fontSize: 12, color: C.textTertiary, marginTop: 8, textAlign: 'right' }}>
            {text.length}/5000
          </Text>
        </View>

        {/* Translate Button */}
        <Pressable
          onPress={translate}
          disabled={isTranslating || !text.trim()}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: (!text.trim() || isTranslating) ? C.border : '#4285F4',
            paddingVertical: 16,
            borderRadius: 16,
            marginBottom: 16,
            gap: 8,
            opacity: pressed ? 0.8 : 1,
            shadowColor: '#4285F4',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: (!text.trim() || isTranslating) ? 0 : 0.3,
            shadowRadius: 8,
            elevation: (!text.trim() || isTranslating) ? 0 : 6,
          })}
        >
          <Ionicons name={isTranslating ? "hourglass" : "flash"} size={22} color="#fff" />
          <Text style={{ fontSize: 17, fontWeight: '700', color: '#fff', letterSpacing: 0.5 }}>
            {isTranslating 
              ? (settings.uiLanguage === 'myanmar' ? 'ဘာသာပြန်နေသည်...' : settings.uiLanguage === 'korean' ? '번역 중...' : 'Translating...')
              : (settings.uiLanguage === 'myanmar' ? 'ဘာသာပြန်ပါ' : settings.uiLanguage === 'korean' ? '번역하기' : 'Translate')
            }
          </Text>
        </Pressable>

        {/* Result Card */}
        {result && (
          <View style={{
            backgroundColor: C.surface,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: '#10B981',
            padding: 16,
            shadowColor: '#10B981',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            elevation: 6,
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#10B981', marginLeft: 6 }}>
                  {settings.uiLanguage === 'myanmar' ? 'ရလဒ်' : settings.uiLanguage === 'korean' ? '결과' : 'Translation'}
                </Text>
              </View>
              <Pressable onPress={() => copyToClipboard(result)}>
                <Ionicons name="copy-outline" size={20} color="#10B981" />
              </Pressable>
            </View>
            <View style={{
              backgroundColor: C.background,
              borderRadius: 12,
              padding: 14,
              borderWidth: 1,
              borderColor: '#10B981' + '30',
            }}>
              <Text style={{ fontSize: 16, color: C.textPrimary, lineHeight: 24 }}>
                {result}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

