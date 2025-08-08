import AsyncStorage from '@react-native-async-storage/async-storage';

export type AppLanguage = 'korean' | 'myanmar' | 'english';
export type SortPriority = 'korean' | 'myanmar' | 'english';

export type FontSize = 'small' | 'default' | 'large';

export type AppSettings = {
  uiLanguage: AppLanguage;
  sortBy: SortPriority;
  fontSize: FontSize;
};

const SETTINGS_KEY = 'mmkr.settings.v1';

export async function loadSettings(): Promise<AppSettings> {
  try {
    const raw = await AsyncStorage.getItem(SETTINGS_KEY);
    if (raw) return JSON.parse(raw) as AppSettings;
  } catch {}
  return { uiLanguage: 'myanmar', sortBy: 'korean', fontSize: 'default' };
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
    quizMCQHelp: '정답을 선택하세요. 각 문제는 60초 제한이 있습니다.',
    quizTFHelp: '문장이 맞으면 True, 틀리면 False를 선택하세요. 각 문제는 45초 제한이 있습니다.',
    flashHelp: '카드를 탭하여 앞/뒤를 전환하세요. Prev/Next로 이동합니다.',
    voiceHelp: 'Expo Go에서는 음성 인식이 제한됩니다. 개발 빌드 또는 클라우드 STT 연결이 필요합니다.',
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
    quizMCQHelp: 'အောက်ပါ စကားလုံးများထဲမှ မှန်ကန့်သတ်ထားသော အဓိပ္ပာယ်ကို ရွေးချယ်ပါ။ မေးခွန်းတစ်ခုစီအတွက် ၆၀ စက္ကန့်ကန့်သတ်ချိန်ရှိပါသည်။',
    quizTFHelp: 'ဝေါဟာရကို မှန်ပါက True ကို မမှန်ပါက False ကို ရွေးချယ်ပါ။ မေးခွန်းတစ်ခုစီအတွက် ၄၅ စက္ကန့်ကန့်သတ်ချိန်ရှိပါသည်။',
    flashHelp: 'ကဒ်ကိုနှိပ်ပြီး အရှေ့/အနောက်ကို ပြောင်းကြည့်နိုင်သည်။ Prev/Next ဖြင့် နောက်ထပ်ကဒ်များသို့ သွားပါ။',
    voiceHelp: 'Expo Go တွင် အသံမှစာတန်းထိုးမှု မပြည့်စုံသေးပါ။ Dev build သို့မဟုတ် Cloud STT API ချိတ်ဆက်ရန်လိုအပ်ပါတယ်။',
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
    quizMCQHelp: 'Choose the correct Myanmar meaning. Each question has a 60s timer.',
    quizTFHelp: 'If the pairing is correct choose True, otherwise False. Each question has a 45s timer.',
    flashHelp: 'Tap to flip the card. Use Prev/Next to navigate.',
    voiceHelp: 'On-device STT is limited in Expo Go. Use a dev build or connect a cloud STT API.',
  },
};

export const NATIVE_LANGUAGE_NAME: Record<AppLanguage, string> = {
  myanmar: 'မြန်မာစာ',
  korean: '한국어',
  english: 'English',
};

