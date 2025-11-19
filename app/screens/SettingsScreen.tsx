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
import { AppLanguage, SortPriority, FontSize, NATIVE_LANGUAGE_NAME } from '../data/settings';

export function SettingsScreen() {
  const { settings, updateSetting } = useSettings();
  const C = useThemedColors();

  const Radio = ({ selected }: { selected: boolean }) => (
    <View style={[styles.radio, { borderColor: selected ? C.brand : C.border }]}>
      {selected && <View style={[styles.radioInner, { backgroundColor: C.brand }]} />}
    </View>
  );

  const Section = ({ 
    title, 
    icon, 
    children 
  }: { 
    title: string; 
    icon: keyof typeof Ionicons.glyphMap;
    children: React.ReactNode;
  }) => (
    <View style={[styles.section, { backgroundColor: C.surface, borderColor: C.border }]}>
      <View style={styles.sectionHeader}>
        <View style={[styles.sectionIconCircle, { backgroundColor: C.brand + '15' }]}>
          <Ionicons name={icon} size={18} color={C.brand} />
        </View>
        <Text style={[styles.sectionTitle, { color: C.textPrimary }]}>{title}</Text>
      </View>
      {children}
    </View>
  );

  const OptionRow = ({
    label,
    selected,
    onPress,
    icon,
  }: {
    label: string;
    selected: boolean;
    onPress: () => void;
    icon?: keyof typeof Ionicons.glyphMap;
  }) => (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.optionRow,
        {
          backgroundColor: selected ? C.brand + '10' : pressed ? C.border + '30' : 'transparent',
          borderColor: selected ? C.brand + '40' : 'transparent',
        }
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
        {icon && (
          <Ionicons 
            name={icon} 
            size={18} 
            color={selected ? C.brand : C.textSecondary} 
            style={{ marginRight: 10 }}
          />
        )}
        <Text style={[
          styles.optionLabel,
          { 
            color: selected ? C.brand : C.textPrimary,
            fontWeight: selected ? '600' : '400',
          }
        ]}>
          {label}
        </Text>
      </View>
      <Radio selected={selected} />
    </Pressable>
  );

  const getLanguageLabel = (lang: AppLanguage) => {
    return NATIVE_LANGUAGE_NAME[lang];
  };

  const getSortLabel = (sort: SortPriority) => {
    const labels: Record<SortPriority, string> = {
      korean: settings.uiLanguage === 'myanmar' ? 'ကိုရီးယား' : settings.uiLanguage === 'korean' ? '한국어' : 'Korean',
      myanmar: settings.uiLanguage === 'myanmar' ? 'မြန်မာ' : settings.uiLanguage === 'korean' ? '미얀마어' : 'Myanmar',
      english: settings.uiLanguage === 'myanmar' ? 'အင်္ဂလိပ်' : settings.uiLanguage === 'korean' ? '영어' : 'English',
    };
    return labels[sort];
  };

  const getFontSizeLabel = (size: FontSize) => {
    const labels: Record<FontSize, string> = {
      small: settings.uiLanguage === 'myanmar' ? 'သေး' : settings.uiLanguage === 'korean' ? '작게' : 'Small',
      default: settings.uiLanguage === 'myanmar' ? 'ပုံမှန်' : settings.uiLanguage === 'korean' ? '보통' : 'Default',
      large: settings.uiLanguage === 'myanmar' ? 'ကြီး' : settings.uiLanguage === 'korean' ? '크게' : 'Large',
    };
    return labels[size];
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
            <Ionicons name="settings" size={36} color={C.brand} />
          </View>
          <Text style={[styles.title, { color: C.textPrimary }]}>
            {settings.uiLanguage === 'myanmar' ? 'ဆက်တင်များ' : settings.uiLanguage === 'korean' ? '설정' : 'Settings'}
          </Text>
          <Text style={{ fontSize: 13, color: C.textSecondary, marginTop: 4, textAlign: 'center' }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'အက်ပ်ကို သင့်အလိုက် ပြင်ဆင်ပါ'
              : settings.uiLanguage === 'korean'
              ? '앱을 원하는 대로 설정하세요'
              : 'Customize your app experience'}
          </Text>
        </View>

        {/* Language Section */}
        <Section 
          title={settings.uiLanguage === 'myanmar' ? 'ဘာသာစကား' : settings.uiLanguage === 'korean' ? '언어' : 'Language'}
          icon="language"
        >
          {(['myanmar', 'korean', 'english'] as AppLanguage[]).map((lang) => (
            <OptionRow
              key={lang}
              label={getLanguageLabel(lang)}
              selected={settings.uiLanguage === lang}
              onPress={() => updateSetting('uiLanguage', lang)}
              icon="globe-outline"
            />
          ))}
        </Section>

        {/* Sort Priority Section */}
        <Section 
          title={settings.uiLanguage === 'myanmar' ? 'စီစဉ်ပုံ' : settings.uiLanguage === 'korean' ? '정렬 기준' : 'Sort Priority'}
          icon="swap-vertical"
        >
          {(['korean', 'myanmar', 'english'] as SortPriority[]).map((sort) => (
            <OptionRow
              key={sort}
              label={getSortLabel(sort)}
              selected={settings.sortBy === sort}
              onPress={() => updateSetting('sortBy', sort)}
              icon="list"
            />
          ))}
        </Section>

        {/* Font Size Section */}
        <Section 
          title={settings.uiLanguage === 'myanmar' ? 'စာလုံးအရွယ်' : settings.uiLanguage === 'korean' ? '글꼴 크기' : 'Font Size'}
          icon="text"
        >
          {(['small', 'default', 'large'] as FontSize[]).map((size) => (
            <OptionRow
              key={size}
              label={getFontSizeLabel(size)}
              selected={settings.fontSize === size}
              onPress={() => updateSetting('fontSize', size)}
              icon={size === 'small' ? 'remove' : size === 'large' ? 'add' : 'remove-circle-outline'}
            />
          ))}
        </Section>

        {/* Info Card */}
        <View style={[styles.infoCard, { backgroundColor: C.surface, borderColor: C.border }]}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Ionicons name="information-circle" size={20} color={C.brand} style={{ marginRight: 10, marginTop: 2 }} />
            <View style={{ flex: 1 }}>
              <Text style={[
                styles.infoText,
                { 
                  color: C.textSecondary,
                  fontFamily: settings.uiLanguage === 'myanmar' ? 'NotoSansMyanmar_400Regular' : undefined,
                }
              ]}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'ဆက်တင်များကို ပြောင်းလဲခြင်းဖြင့် အက်ပ်၏ ပုံပန်းသဏ္ဍာန်နှင့် ရှာဖွေမှု ရလဒ်များကို စိတ်ကြိုက် ပြင်ဆင်နိုင်ပါသည်။'
                  : settings.uiLanguage === 'korean'
                  ? '설정을 변경하여 앱의 모양과 검색 결과를 사용자 정의할 수 있습니다.'
                  : 'Customize the app appearance and search results by changing these settings.'}
              </Text>
            </View>
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
  section: {
    borderRadius: 14,
    borderWidth: 1.5,
    padding: 14,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 6,
    borderWidth: 1.5,
  },
  optionLabel: {
    fontSize: 15,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
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

