import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels, ThemeMode } from '../data/settings';

interface ThemeOption {
  value: ThemeMode;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  nameEn: string;
  nameKo: string;
  nameMy: string;
  descEn: string;
  descKo: string;
  descMy: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    value: 'light',
    icon: 'sunny',
    color: '#F59E0B',
    nameEn: 'Light Mode',
    nameKo: '라이트 모드',
    nameMy: 'အလင်းရောင်',
    descEn: 'Always use bright theme',
    descKo: '밝은 테마를 항상 사용',
    descMy: 'အလင်းပုံစံကို အမြဲတမ်းသုံးမည်',
  },
  {
    value: 'dark',
    icon: 'moon',
    color: '#6366F1',
    nameEn: 'Dark Mode',
    nameKo: '다크 모드',
    nameMy: 'အမှောင်ရောင်',
    descEn: 'Always use dark theme',
    descKo: '어두운 테마를 항상 사용',
    descMy: 'အမှောင်ပုံစံကို အမြဲတမ်းသုံးမည်',
  },
];

export function ThemeScreen() {
  const C = useThemedColors();
  const { settings, updateSetting } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];

  // Migrate 'system' theme to 'light' if user has it saved
  React.useEffect(() => {
    if (settings.theme === 'system') {
      updateSetting('theme', 'light');
    }
  }, [settings.theme, updateSetting]);

  const getThemeName = (option: ThemeOption) => {
    if (settings.uiLanguage === 'korean') return option.nameKo;
    if (settings.uiLanguage === 'myanmar') return option.nameMy;
    return option.nameEn;
  };

  const getThemeDesc = (option: ThemeOption) => {
    if (settings.uiLanguage === 'korean') return option.descKo;
    if (settings.uiLanguage === 'myanmar') return option.descMy;
    return option.descEn;
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView 
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <View style={[styles.headerIcon, { backgroundColor: C.surface, borderColor: C.border }]}>
            <Ionicons name="color-palette" size={36} color={C.brand} />
          </View>
          <Text style={[styles.title, { color: C.textPrimary }]}>
            {labels.navTheme}
          </Text>
          <Text style={{ fontSize: 13, color: C.textSecondary, marginTop: 4, textAlign: 'center' }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'သင်နှစ်သက်ရာ ပုံစံကို ရွေးချယ်ပါ'
              : settings.uiLanguage === 'korean'
              ? '원하는 테마를 선택하세요'
              : 'Choose your preferred theme'}
          </Text>
        </View>

        {/* Theme Options */}
        <View style={{ marginBottom: 24 }}>
          {THEME_OPTIONS.map((option, index) => {
            const isSelected = settings.theme === option.value;
            
            return (
              <Pressable
                key={option.value}
                onPress={() => updateSetting('theme', option.value)}
                style={({ pressed }) => [
                  styles.themeCard,
                  {
                    backgroundColor: isSelected ? C.brand + '10' : C.surface,
                    borderColor: isSelected ? C.brand : C.border,
                    borderWidth: isSelected ? 2 : 1.5,
                    marginBottom: index < THEME_OPTIONS.length - 1 ? 14 : 0,
                    opacity: pressed ? 0.8 : 1,
                  }
                ]}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {/* Icon Circle */}
                  <View style={[
                    styles.iconCircle,
                    { 
                      backgroundColor: option.color + '15',
                      borderColor: isSelected ? option.color : option.color + '30',
                      borderWidth: isSelected ? 2 : 1,
                    }
                  ]}>
                    <Ionicons name={option.icon} size={26} color={option.color} />
                  </View>

                  {/* Text Content */}
                  <View style={{ flex: 1, marginLeft: 14, marginRight: 10 }}>
                    <Text 
                      numberOfLines={1}
                      style={[
                        styles.themeName,
                        { 
                          color: isSelected ? C.brand : C.textPrimary,
                          fontWeight: isSelected ? '700' : '600',
                        }
                      ]}
                    >
                      {getThemeName(option)}
                    </Text>
                    <Text 
                      numberOfLines={2}
                      style={[
                        styles.themeDesc,
                        { 
                          color: C.textSecondary,
                          fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
                        }
                      ]}
                    >
                      {getThemeDesc(option)}
                    </Text>
                  </View>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <View style={[styles.checkCircle, { backgroundColor: C.brand, flexShrink: 0 }]}>
                      <Ionicons name="checkmark" size={16} color="#fff" />
                    </View>
                  )}
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Preview Card */}
        <View style={[styles.previewCard, { backgroundColor: C.surface, borderColor: C.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 14 }}>
            <Ionicons name="eye-outline" size={20} color={C.brand} />
            <Text style={[styles.previewTitle, { color: C.textPrimary }]}>
              {settings.uiLanguage === 'myanmar' 
                ? 'အကြိုကြည့်ရှု့ခြင်း'
                : settings.uiLanguage === 'korean'
                ? '미리보기'
                : 'Preview'}
            </Text>
          </View>

            <View style={[styles.previewBox, { backgroundColor: C.background, borderColor: C.border }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 }}>
              <View style={[styles.previewItem, { backgroundColor: C.surface, borderColor: C.border }]}>
                <Ionicons name="sunny" size={18} color="#F59E0B" />
                <Text numberOfLines={1} style={{ fontSize: 10, color: C.textSecondary, marginTop: 6, fontWeight: '500' }}>
                  {settings.uiLanguage === 'myanmar' ? 'အလင်း' : settings.uiLanguage === 'korean' ? '라이트' : 'Light'}
                </Text>
              </View>
              <View style={[styles.previewItem, { backgroundColor: C.surface, borderColor: C.border }]}>
                <Ionicons name="moon" size={18} color="#6366F1" />
                <Text numberOfLines={1} style={{ fontSize: 10, color: C.textSecondary, marginTop: 6, fontWeight: '500' }}>
                  {settings.uiLanguage === 'myanmar' ? 'အမှောင်' : settings.uiLanguage === 'korean' ? '다크' : 'Dark'}
                </Text>
              </View>
            </View>
            
            <Text style={{ fontSize: 13, color: C.textSecondary, textAlign: 'center', lineHeight: 22, paddingHorizontal: 8 }}>
              {settings.uiLanguage === 'myanmar' 
                ? 'လက်ရှိရွေးချယ်မှု: '
                : settings.uiLanguage === 'korean'
                ? '현재 선택: '
                : 'Current selection: '}
              <Text style={{ fontWeight: '700', color: C.brand }}>
                {THEME_OPTIONS.find(o => o.value === settings.theme) && getThemeName(THEME_OPTIONS.find(o => o.value === settings.theme)!)}
              </Text>
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
  headerIcon: {
    width: 70,
    height: 70,
    borderRadius: 18,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  themeCard: {
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeName: {
    fontSize: 16,
    marginBottom: 4,
  },
  themeDesc: {
    fontSize: 13,
    lineHeight: 19,
  },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewCard: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  previewBox: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
  },
  previewItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 4,
    minHeight: 60,
  },
  infoCard: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    fontSize: 13,
    lineHeight: 20,
  },
});

