import AsyncStorage from '@react-native-async-storage/async-storage';

export type AppLanguage = 'korean' | 'myanmar' | 'english';
export type SortPriority = 'korean' | 'myanmar' | 'english';

export type AppSettings = {
  uiLanguage: AppLanguage;
  sortBy: SortPriority;
};

const SETTINGS_KEY = 'mmkr.settings.v1';

export async function loadSettings(): Promise<AppSettings> {
  try {
    const raw = await AsyncStorage.getItem(SETTINGS_KEY);
    if (raw) return JSON.parse(raw) as AppSettings;
  } catch {}
  return { uiLanguage: 'myanmar', sortBy: 'korean' };
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export const i18nLabels: Record<AppLanguage, Record<string, string>> = {
  korean: {
    title: '미얀마–한국어–영어 사전',
    searchPlaceholder: '한국어, 미얀마어, 영어로 검색',
    settings: '설정',
    settingsTitle: '설정',
    sortBy: '정렬 기준',
    sortByLabel: '정렬 기준',
    language: '언어',
    languageLabel: '언어',
    noResults: '결과 없음',
    navHome: '홈',
    navPractice: '연습',
    navFavorites: '즐겨찾기',
    navHistory: '기록',
    navSettings: '설정',
    navCheckUpdates: '업데이트 확인',
    navInputNewWords: '새 단어 추가',
    navAbout: '정보',
  },
  myanmar: {
    title: 'မြန်မာ–ကိုရီးယား–အင်္ဂလိပ်ရှာဖွေရန်',
    searchPlaceholder: 'ကိုရီးယား/မြန်မာ/အင်္ဂလိပ်ဖြင့် ရှာဖွေပါ',
    settings: 'ချိန်ညှိမှု',
    settingsTitle: 'ချိန်ညှိမှု',
    sortBy: 'စီစဉ်ပေးရန်',
    sortByLabel: 'စီစဉ်ပေးရန်',
    language: 'ဘာသာစကား',
    languageLabel: 'ဘာသာစကား',
    noResults: 'ရလဒ်မရှိပါ',
    navHome: 'မူလ',
    navPractice: 'လေ့ကျင့်ခန်း',
    navFavorites: 'ကြိုက်နှစ်သက်သောစကားလုံးများ',
    navHistory: 'မှတ်တမ်း',
    navSettings: 'ချိန်ညှိမှု',
    navCheckUpdates: 'အသစ်များ စစ်ဆေးရန်',
    navInputNewWords: 'စကားလုံးအသစ် ထည့်သွင်းရန်',
    navAbout: 'အကြောင်း',
  },
  english: {
    title: 'Myanmar–Korean–English Dictionary',
    searchPlaceholder: 'Search by Korean, Myanmar, or English',
    settings: 'Settings',
    settingsTitle: 'Settings',
    sortBy: 'Sort by',
    sortByLabel: 'Sort by',
    language: 'Language',
    languageLabel: 'Language',
    noResults: 'No results',
    navHome: 'Home',
    navPractice: 'Practice',
    navFavorites: 'Favorites',
    navHistory: 'History',
    navSettings: 'Settings',
    navCheckUpdates: 'Check Updates',
    navInputNewWords: 'Input New Words',
    navAbout: 'About',
  },
};

