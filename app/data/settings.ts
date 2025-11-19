import AsyncStorage from '@react-native-async-storage/async-storage';

export type AppLanguage = 'korean' | 'myanmar' | 'english';
export type SortPriority = 'korean' | 'myanmar' | 'english';
export type ThemeMode = 'light' | 'dark' | 'system';

export type FontSize = 'small' | 'default' | 'large';

export type AppSettings = {
  uiLanguage: AppLanguage;
  sortBy: SortPriority;
  fontSize: FontSize;
  theme: ThemeMode;
};

const SETTINGS_KEY = 'mmkr.settings.v1';

export async function loadSettings(): Promise<AppSettings> {
  try {
    const raw = await AsyncStorage.getItem(SETTINGS_KEY);
    if (raw) return JSON.parse(raw) as AppSettings;
  } catch {}
  return { uiLanguage: 'myanmar', sortBy: 'korean', fontSize: 'default', theme: 'light' };
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export const i18nLabels: Record<AppLanguage, Record<string, string>> = {
  korean: {
    title: '미얀마–한국 사전',
    searchPlaceholder: '단어를 입력하세요',
    settings: '설정',
    settingsTitle: '설정',
    sortBy: '정렬 기준',
    sortByLabel: '정렬 기준',
    language: '언어',
    languageLabel: '언어',
    theme: '테마',
    themeLabel: '테마',
    noResults: '결과 없음',
    navHome: '홈',
    navPractice: '연습',
    navFavorites: '즐겨찾기',
    navHistory: '기록',
    navSettings: '설정',
    navTheme: '테마',
    navProfile: '프로필',
    navCheckUpdates: '업데이트 확인',
    navInputNewWords: '새 단어 추가',
    navAbout: '정보',
    navAIChat: 'AI 채팅',
    navTranslate: '번역',
    navTOPIK: 'TOPIK 시험',
    needLogin: '로그인이 필요합니다',
    needLoginMsg: '이 기능을 사용하려면 로그인하세요.',
    needPoints: '포인트가 부족합니다',
    needPointsMsg: '이 기능을 사용하려면 50포인트가 필요합니다. 현재 포인트:',
    useFeature: '기능 사용',
    useFeatureMsg: '50포인트를 사용하여 이 기능에 액세스하시겠습니까?',
    proOnly: 'PRO 전용',
    proOnlyMsg: '이 기능은 PRO 사용자만 사용할 수 있습니다.',
    quizMCQHelp: '정답을 선택하세요. 각 문제는 60초 제한이 있습니다.',
    quizTFHelp: '문장이 맞으면 True, 틀리면 False를 선택하세요. 각 문제는 45초 제한이 있습니다.',
    flashHelp: '카드를 탭하여 앞/뒤를 전환하세요. Prev/Next로 이동합니다.',
    voiceHelp: 'Expo Go에서는 음성 인식이 제한됩니다. 개발 빌드 또는 클라우드 STT 연결이 필요합니다.',
  },
  myanmar: {
    title: 'မြန်မာ–ကိုရီးယား အဘိဓာန်',
    searchPlaceholder: 'စကားလုံး ထည့်သွင်းပါ',
    settings: 'ချိန်ညှိမှု',
    settingsTitle: 'ချိန်ညှိမှု',
    sortBy: 'စီစဉ်ပေးရန်',
    sortByLabel: 'စီစဉ်ပေးရန်',
    language: 'ဘာသာစကား',
    languageLabel: 'ဘာသာစကား',
    theme: 'အရောင်',
    themeLabel: 'အရောင်',
    noResults: 'ရလဒ်မရှိပါ',
    navHome: 'မူလ',
    navPractice: 'လေ့ကျင့်ခန်း',
    navFavorites: 'ကြိုက်နှစ်သက်သောစကားလုံးများ',
    navHistory: 'မှတ်တမ်း',
    navSettings: 'ဆက်တင်',
    navTheme: 'အရောင်အသွေး',
    navProfile: 'ပရိုဖိုင်',
    navCheckUpdates: 'စကားလုံးအသစ်များ စစ်ဆေးရန်',
    navInputNewWords: 'စကားလုံးအသစ် ထည့်သွင်းရန်',
    navAbout: 'အကြောင်း',
    navAIChat: 'AI စကားပြော',
    navTranslate: 'ဘာသာပြန်',
    navTOPIK: 'TOPIK စာမေးပွဲ',
    needLogin: 'အကောင့်ဝင်ရန် လိုအပ်သည်',
    needLoginMsg: 'ဤလုပ်ဆောင်ချက်ကို သုံးရန် အကောင့်ဝင်ပါ။',
    needPoints: 'အမှတ်မလုံလောက်ပါ',
    needPointsMsg: 'ဤလုပ်ဆောင်ချက်ကို သုံးရန် ၅၀ အမှတ် လိုအပ်သည်။ လက်ရှိအမှတ်:',
    useFeature: 'လုပ်ဆောင်ချက် သုံးမည်',
    useFeatureMsg: '၅၀ အမှတ်သုံး၍ ဤလုပ်ဆောင်ချက်ကို အသုံးပြုမလား?',
    proOnly: 'PRO အတွက်သာ',
    proOnlyMsg: 'ဤလုပ်ဆောင်ချက်သည် PRO အသုံးပြုသူများအတွက်သာ ဖြစ်သည်။',
    quizMCQHelp: 'အောက်ပါ စကားလုံးများထဲမှ မှန်ကန့်သတ်ထားသော အဓိပ္ပာယ်ကို ရွေးချယ်ပါ။ မေးခွန်းတစ်ခုစီအတွက် ၆၀ စက္ကန့်ကန့်သတ်ချိန်ရှိပါသည်။',
    quizTFHelp: 'ဝေါဟာရကို မှန်ပါက True ကို မမှန်ပါက False ကို ရွေးချယ်ပါ။ မေးခွန်းတစ်ခုစီအတွက် ၄၅ စက္ကန့်ကန့်သတ်ချိန်ရှိပါသည်။',
    flashHelp: 'ကဒ်ကိုနှိပ်ပြီး အရှေ့/အနောက်ကို ပြောင်းကြည့်နိုင်သည်။ Prev/Next ဖြင့် နောက်ထပ်ကဒ်များသို့ သွားပါ။',
    voiceHelp: 'Expo Go တွင် အသံမှစာတန်းထိုးမှု မပြည့်စုံသေးပါ။ Dev build သို့မဟုတ် Cloud STT API ချိတ်ဆက်ရန်လိုအပ်ပါတယ်။',
  },
  english: {
    title: 'Myanmar–Korean Dictionary',
    searchPlaceholder: 'Input a word',
    settings: 'Settings',
    settingsTitle: 'Settings',
    sortBy: 'Sort by',
    sortByLabel: 'Sort by',
    language: 'Language',
    languageLabel: 'Language',
    theme: 'Theme',
    themeLabel: 'Theme',
    noResults: 'No results',
    navHome: 'Home',
    navPractice: 'Practice',
    navFavorites: 'Favorites',
    navHistory: 'History',
    navSettings: 'Settings',
    navTheme: 'Theme',
    navProfile: 'Profile',
    navCheckUpdates: 'Check Updates',
    navInputNewWords: 'Input New Words',
    navAbout: 'About',
    navAIChat: 'AI Chat',
    navTranslate: 'Translate',
    navTOPIK: 'TOPIK Test',
    needLogin: 'Login Required',
    needLoginMsg: 'Please login to use this feature.',
    needPoints: 'Insufficient Points',
    needPointsMsg: 'You need 50 points to use this feature. Current points:',
    useFeature: 'Use Feature',
    useFeatureMsg: 'Would you like to spend 50 points to access this feature?',
    proOnly: 'PRO Only',
    proOnlyMsg: 'This feature is available for PRO users only.',
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

