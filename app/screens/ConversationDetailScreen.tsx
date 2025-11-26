import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import * as Speech from 'expo-speech';
import { getVoiceSpeedRate } from '../data/settings';

type ConversationPhrase = {
  korean: string;
  myanmar: string;
  english: string;
};

type ConversationData = {
  [key: string]: ConversationPhrase[];
};

// Comprehensive conversation data with at least 20 phrases per category
const CONVERSATION_DATA: ConversationData = {
    greetings: [
        // --- Basic Greetings & Introductions ---
        { korean: '안녕하세요, 오늘 날씨가 참 좋네요.', myanmar: 'မင်္ဂလာပါ၊ ဒီနေ့ ရာသီဥတုက တကယ် ကောင်းတယ်နော်', english: 'Hello, the weather is really nice today.' },
        { korean: '처음 뵙겠습니다, 앞으로 잘 부탁드립니다.', myanmar: 'ပထမဆုံး တွေ့ဖူးတာပါ၊ ရှေ့ဆက်ပြီး ကူညီပေးပါဦးနော် (ခင်ခင်မင်မင် နေပါရစေ)', english: 'Nice to meet you, please look after me.' },
        { korean: '만나서 반갑습니다, 저는 김민수라고 합니다.', myanmar: 'တွေ့ရတာ ဝမ်းသာပါတယ်၊ ကျွန်တော်က ကင်မင်ဆူး ပါ', english: 'Nice to meet you, my name is Kim Min-su.' },
        { korean: '오랜만에 뵙네요, 그동안 잘 지내셨어요?', myanmar: 'မတွေ့တာတောင် ကြာပြီနော်၊ အဲ့ဒီအတောအတွင်း နေကောင်းခဲ့ရဲ့လား', english: 'It’s been a while, have you been well?' },
        { korean: '방문해 주셔서 감사합니다, 편하게 앉으세요.', myanmar: 'လာရောက်လည်ပတ်ပေးလို့ ကျေးဇူးတင်ပါတယ်၊ သက်တောင့်သက်သာ ထိုင်ပါနော်', english: 'Thank you for visiting, please sit comfortably.' },
        { korean: '어서 오세요, 찾으시는 물건이 있으신가요?', myanmar: 'ကြိုဆိုပါတယ်၊ ရှာနေတဲ့ ပစ္စည်းများ ရှိပါသလား', english: 'Welcome, is there anything you are looking for?' },
      
        // --- Checking In & Well-being ---
        { korean: '요즘 어떻게 지내세요? 별일 없으시죠?', myanmar: 'ဒီရက်ပိုင်း ဘယ်လိုနေလဲ။ ထွေထွေထူးထူး ကိစ္စမရှိဘူးမလား', english: 'How are you doing these days? Everything is alright?' },
        { korean: '식사는 하셨어요? 아직 안 드셨으면 같이 먹어요.', myanmar: 'ထမင်း စားပြီးပြီလား။ မစားရသေးရင် အတူတူ စားကြမလား', english: 'Have you eaten? If not, let’s eat together.' },
        { korean: '얼굴이 좋아 보이네요, 좋은 일 있으세요?', myanmar: 'မျက်နှာလေး ကြည်နေတာပဲ၊ ကောင်းတဲ့ကိစ္စ ရှိလို့လား', english: 'You look good, is there any good news?' },
        { korean: '요즘 감기가 유행이니까 건강 조심하세요.', myanmar: 'ဒီရက်ပိုင်း တုပ်ကွေး ဖြစ်လွယ်လို့ ကျန်းမာရေး ဂရုစိုက်နော်', english: 'Colds are going around, so take care of your health.' },
        { korean: '피곤해 보이시는데 오늘은 일찍 들어가세요.', myanmar: 'ကြည့်ရတာ ပင်ပန်းနေပုံရတယ်၊ ဒီနေ့ စောစော ပြန်နားလိုက်ပါ', english: 'You look tired, please go home early today.' },
      
        // --- Time of Day ---
        { korean: '좋은 아침입니다, 오늘 하루도 화이팅하세요!', myanmar: 'မင်္ဂလာနံနက်ခင်းပါ၊ ဒီနေ့တစ်နေ့တာလုံး အားတင်းထားနော်', english: 'Good morning, fighting for today too!' },
        { korean: '점심 식사는 맛있게 하셨나요?', myanmar: 'နေ့လည်စာ မြိန်မြိန်ယှက်ယှက် စားခဲ့ရဲ့လား', english: 'Did you have a delicious lunch?' },
        { korean: '벌써 저녁이네요, 오늘 하루도 수고 많으셨어요.', myanmar: 'ညတောင် ရောက်နေပြီပဲ၊ ဒီနေ့တစ်နေ့တာလုံး ပင်ပန်းသွားပါပြီ', english: 'It’s already evening, you worked hard today.' },
        { korean: '안녕히 주무세요, 내일 아침에 뵙겠습니다.', myanmar: 'အိပ်မက်လှလှ မက်ပါစေ၊ မနက်ဖြန်မနက်မှ တွေ့မယ်နော်', english: 'Good night, see you tomorrow morning.' },
        { korean: '늦었으니까 조심히 들어가세요.', myanmar: 'မိုးချုပ်နေပြီဆိုတော့ ဂရုစိုက် ပြန်ပါနော်', english: 'It’s late, so please go home safely.' },
      
        // --- Parting (Leaving) ---
        { korean: '먼저 일어나보겠습니다, 즐거운 시간이었어요.', myanmar: 'ကျွန်တော် အရင် ပြန်နှင့်ပါဦးမယ်၊ ပျော်ဖို့ကောင်းတဲ့ အချိန်လေးပါပဲ', english: 'I will leave first, it was a fun time.' },
        { korean: '조심히 가세요, 도착하면 연락 주시고요.', myanmar: 'ဂရုစိုက် ပြန်ပါ၊ ရောက်ရင် ဖုန်းဆက်လိုက်ဦးနော်', english: 'Go safely, and contact me when you arrive.' },
        { korean: '안녕히 계세요, 다음에 또 놀러 올게요.', myanmar: 'ကောင်းကောင်း နေခဲ့ပါ၊ နောက်တစ်ခါ လာလည်ပါဦးမယ်', english: 'Stay well, I will come to play again next time.' },
        { korean: '배웅해 주셔서 감사합니다, 들어가세요.', myanmar: 'လိုက်ပို့ပေးလို့ ကျေးဇူးတင်ပါတယ်၊ အိမ်ထဲဝင်ပါတော့', english: 'Thank you for seeing me off, please go inside.' },
        { korean: '아쉽지만 이제 가야 할 시간이에요.', myanmar: 'နှမြောစရာကောင်းပေမယ့် အခု ပြန်ရမယ့်အချိန် ရောက်နေပြီ', english: 'It’s a shame, but it is time to go now.' },
      
        // --- Future Meetings ---
        { korean: '우리 언제 밥 한번 같이 먹어요.', myanmar: 'ငါတို့ တရက်ရက်လောက် ထမင်းတူတူ သွားစားကြမယ်လေ', english: 'Let’s have a meal together sometime.' },
        { korean: '시간 되실 때 연락 주세요, 기다릴게요.', myanmar: 'အချိန်ရတဲ့အခါ ဖုန်းဆက်လိုက်ပါ၊ စောင့်နေပါ့မယ်', english: 'Please contact me when you have time, I will wait.' },
        { korean: '다음 주에 시간 괜찮으세요? 그때 봬요.', myanmar: 'နောက်အပတ် အချိန်ရလား။ အဲ့ဒီတော့မှ တွေ့ကြတာပေါ့', english: 'Are you free next week? See you then.' },
        { korean: '나중에 카페에서 커피 한잔해요.', myanmar: 'နောက်မှ ကော်ဖီဆိုင်မှာ ကော်ဖီလေးဘာလေး သောက်ကြမယ်', english: 'Let’s have a cup of coffee at a cafe later.' },
        { korean: '내일 학교 앞에서 만나는 거 잊지 마세요.', myanmar: 'မနက်ဖြန် ကျောင်းရှေ့မှာ တွေ့ဖို့ မမေ့နဲ့နော်', english: 'Don’t forget to meet in front of the school tomorrow.' },
      
        // --- Gratitude & Apology in Greetings ---
        { korean: '초대해 주셔서 정말 감사합니다.', myanmar: 'ဖိတ်ခေါ်ပေးလို့ တကယ်ကို ကျေးဇူးတင်ပါတယ်', english: 'Thank you very much for inviting me.' },
        { korean: '늦어서 죄송합니다, 차가 많이 막혔어요.', myanmar: 'နောက်ကျသွားလို့ တောင်းပန်ပါတယ်၊ ကားတွေ အရမ်းပိတ်နေလို့ပါ', english: 'I am sorry for being late, the traffic was bad.' },
        { korean: '도와주신 덕분에 잘 해결되었습니다.', myanmar: 'ကူညီပေးတဲ့ ကျေးဇူးကြောင့် အဆင်ပြေပြေ ပြီးသွားပါပြီ', english: 'Thanks to your help, it was resolved well.' },
        { korean: '오래 기다리게 해서 죄송해요.', myanmar: 'အကြာကြီး စောင့်ခိုင်းမိလို့ တောင်းပန်ပါတယ်', english: 'I am sorry for making you wait long.' },
        { korean: '바쁘신데 시간 내주셔서 감사합니다.', myanmar: 'အလုပ်ရှုပ်နေတဲ့ကြားက အချိန်ပေးလို့ ကျေးဇူးတင်ပါတယ်', english: 'Thank you for making time even though you are busy.' },
      
        // --- Seasonal & Well-wishes ---
        { korean: '이번 주말에는 푹 쉬시고 즐겁게 보내세요.', myanmar: 'ဒီတစ်ပတ် ပိတ်ရက်မှာတော့ ကောင်းကောင်းနားပြီး ပျော်ပျော်ရွှင်ရွှင် နေပါ', english: 'Rest well and have fun this weekend.' },
        { korean: '새해 복 많이 받으시고, 건강하세요.', myanmar: 'နှစ်သစ်မှာ ဆုတောင်းပြည့်ပြီး ကျန်းမာပါစေ', english: 'Happy New Year and stay healthy.' },
        { korean: '생일 진심으로 축하드려요, 맛있는 거 많이 드세요.', myanmar: 'မွေးနေ့အတွက် ဆုမွန်ကောင်း တောင်းပေးလိုက်ပါတယ်၊ မုန့်ကောင်းကောင်းတွေ များကြီးစားနော်', english: 'Sincerely happy birthday, eat lots of delicious things.' },
        { korean: '항상 행복한 일만 가득하시길 바랍니다.', myanmar: 'အမြဲတမ်း ပျော်ရွှင်စရာတွေနဲ့ပဲ ပြည့်နှက်နေပါစေလို့ ဆုတောင်းပါတယ်', english: 'I hope you are always full of happy things.' },
        { korean: '하시는 일 모두 잘 되시길 응원할게요.', myanmar: 'လုပ်သမျှကိစ္စတိုင်း အဆင်ပြေပါစေလို့ အားပေးနေပါတယ်', english: 'I will cheer for everything you do to go well.' },
      
        // --- Casual / Friends ---
        { korean: '야, 너 오늘 옷 스타일 완전 멋진데?', myanmar: 'ဟေး... နင့်ရဲ့ ဒီနေ့ ဖက်ရှင်က တော်တော် မိုက်တယ်ဟ', english: 'Hey, your outfit style is totally cool today.' },
        { korean: '어디 가는 길이야? 나도 같이 가자.', myanmar: 'ဘယ်သွားမလို့လဲ။ ငါလည်း လိုက်မယ်လေ', english: 'Where are you going? Let’s go together.' },
        { korean: '무슨 생각 해? 멍 때리지 마.', myanmar: 'ဘာတွေ တွေးနေတာလဲ။ ငေးမနေနဲ့လေ', english: 'What are you thinking? Don’t space out.' },
        { korean: '연락 좀 하고 지내자, 왜 이렇게 바빠?', myanmar: 'အဆက်အသွယ်လေး ဘာလေး လုပ်ဦးလေ၊ ဘာလို့ ဒီလောက် အလုပ်ရှုပ်နေတာလဲ', english: 'Let’s keep in touch, why are you so busy?' },
        { korean: '오늘 저녁에 뭐 해? 심심하면 나와.', myanmar: 'ဒီနေ့ညနေ ဘာလုပ်မလဲ။ ပျင်းနေရင် ထွက်ခဲ့လေ', english: 'What are you doing this evening? If you are bored, come out.' },
      
        // --- Workplace ---
        { korean: '출근하셨습니까? 오늘 회의 준비는 다 됐나요?', myanmar: 'အလုပ်ရောက်ပြီလား။ ဒီနေ့ အစည်းအဝေးအတွက် အဆင်သင့်ဖြစ်ပြီလား', english: 'Have you arrived at work? Is the meeting prep done?' },
        { korean: '점심 시간인데 식사하러 안 가세요?', myanmar: 'နေ့လည်စာ စားချိန်ရောက်နေပြီ၊ ထမင်းသွားမစားဘူးလား', english: 'It’s lunch time, aren’t you going to eat?' },
        { korean: '먼저 퇴근해 보겠습니다, 내일 뵙겠습니다.', myanmar: 'ကျွန်တော် အရင် အလုပ်ဆင်းနှင့်ပါမယ်၊ မနက်ဖြန်မှ တွေ့မယ်နော်', english: 'I will leave work first, see you tomorrow.' },
        { korean: '오늘 업무하시느라 정말 고생 많으셨습니다.', myanmar: 'ဒီနေ့ အလုပ်လုပ်ရတာ တကယ် ပင်ပန်းသွားပါပြီ', english: 'You worked really hard working today.' },
        { korean: '잠시만요, 제가 문 열어 드릴게요.', myanmar: 'ခဏလေးနော်၊ ကျွန်တော် တံခါးဖွင့်ပေးပါမယ်', english: 'Just a moment, I will open the door for you.' },
      
        // --- Phone Greetings ---
        { korean: '여보세요? 지금 통화 괜찮으세요?', myanmar: 'ဟဲလို... အခု ဖုန်းပြောလို့ အဆင်ပြေလား', english: 'Hello? Is it okay to talk right now?' },
        { korean: '죄송하지만 제가 지금 밖이라서 잘 안 들려요.', myanmar: 'တောင်းပန်ပါတယ်၊ ကျွန်တော် အခု အပြင်ရောက်နေလို့ သိပ်မကြားရဘူးဖြစ်နေတယ်', english: 'Sorry, but I am outside so I can’t hear well.' },
        { korean: '나중에 다시 걸어주시면 감사하겠습니다.', myanmar: 'နောက်မှ ဖုန်းပြန်ခေါ်ပေးရင် ကျေးဇူးတင်မိမှာပါ', english: 'I would appreciate it if you call back later.' },
        { korean: '전화 주셔서 감사합니다, 좋은 하루 보내세요.', myanmar: 'ဖုန်းဆက်ပေးလို့ ကျေးဇူးတင်ပါတယ်၊ နေ့ရက်ကောင်းလေး ဖြစ်ပါစေ', english: 'Thank you for calling, have a nice day.' },
        { korean: '배터리가 없어서 전화가 끊길 것 같아요.', myanmar: 'ဖုန်းအားကုန်တော့မှာမို့ ဖုန်းကျသွားလိမ့်မယ်ထင်တယ်', english: 'I have no battery so the call might cut off.' },
      ],
      introductions: [
        // --- Name (နာမည်မေးမြန်းခြင်း) ---
        { korean: '성함이 어떻게 되세요?', myanmar: 'နာမည် ဘယ်လို ခေါ်ပါသလဲ', english: 'What is your name? (Polite)' },
        { korean: '이름이 뭐예요?', myanmar: 'နာမည် ဘယ်လိုခေါ်လဲ', english: 'What is your name? (Casual polite)' },
        { korean: '제 이름은 민수입니다.', myanmar: 'ကျွန်တော့်နာမည်က မင်ဆူး ဖြစ်ပါတယ်', english: 'My name is Minsu.' },
        { korean: '저는 김민수라고 부릅니다.', myanmar: 'ကျွန်တော့်ကို ကင်မင်ဆူး လို့ ခေါ်ပါတယ်', english: 'I am called Kim Minsu.' },
        { korean: '민수라고 불러주세요.', myanmar: 'မင်းဆူ လို့ ခေါ်ပေးပါ', english: 'Please call me Minsu.' },
        { korean: '만나서 반가워요.', myanmar: 'တွေ့ရတာ ဝမ်းသာပါတယ်', english: 'Nice to meet you.' },
        { korean: '처음 뵙겠습니다.', myanmar: 'ဒါ ပထမဆုံး တွေ့ဖူးတာပါ (ယဉ်ကျေးစွာ)', english: 'Nice to meet you (Formal/First time).' },
        { korean: '앞으로 잘 부탁드립니다.', myanmar: 'ရှေ့ဆက်ပြီး ကူညီပေးပါဦးနော် (ခင်ခင်မင်မင် နေပါရစေ)', english: 'Please look after me / Let’s get along well.' },
      
        // --- Nationality & Origin (ဇာတိနှင့် လူမျိုး) ---
        { korean: '어느 나라에서 오셨어요?', myanmar: 'ဘယ်နိုင်ငံကနေ လာတာလဲ', english: 'Where are you from?' },
        { korean: '저는 미얀마에서 왔어요.', myanmar: 'ကျွန်တော်က မြန်မာနိုင်ငံက လာပါတယ်', english: 'I came from Myanmar.' },
        { korean: '국적이 어디세요?', myanmar: 'လူမျိုးက ဘာလူမျိုးလဲ', english: 'What is your nationality?' },
        { korean: '저는 한국 사람이에요.', myanmar: 'ကျွန်တော်က ကိုရီးယားလူမျိုးပါ', english: 'I am Korean.' },
        { korean: '고향이 어디예요?', myanmar: 'ဇာတိက ဘယ်မှာလဲ', english: 'Where is your hometown?' },
        { korean: '제 고향은 양곤입니다.', myanmar: 'ကျွန်တော့် ဇာတိက ရန်ကုန်ပါ', english: 'My hometown is Yangon.' },
        { korean: '한국에 온 지 얼마나 됐어요?', myanmar: 'ကိုရီးယားရောက်တာ ဘယ်လောက်ကြာပြီလဲ', english: 'How long have you been in Korea?' },
        { korean: '한국에 온 지 1년 됐어요.', myanmar: 'ကိုရီးယားရောက်တာ ၁ နှစ် ရှိပါပြီ', english: 'I have been in Korea for 1 year.' },
        { korean: '여행으로 왔어요.', myanmar: 'အလည် လာတာပါ (ခရီးထွက်လာတာပါ)', english: 'I came here for travel.' },
      
        // --- Residence (နေရပ်လိပ်စာ) ---
        { korean: '지금 어디 사세요?', myanmar: 'အခု ဘယ်မှာ နေလဲ', english: 'Where do you live now?' },
        { korean: '저는 서울에 살고 있어요.', myanmar: 'ကျွန်တော်က ဆိုးလ်မှာ နေပါတယ်', english: 'I live in Seoul.' },
        { korean: '기숙사에서 지내고 있어요.', myanmar: 'အဆောင်မှာ နေပါတယ်', english: 'I am staying in a dormitory.' },
        { korean: '학교 근처에 살아요.', myanmar: 'ကျောင်းနားမှာ နေတယ်', english: 'I live near the school.' },
        { korean: '혼자 사세요?', myanmar: 'တစ်ယောက်တည်း နေတာလား', english: 'Do you live alone?' },
        { korean: '아니요, 친구랑 같이 살아요.', myanmar: 'ဟင့်အင်း၊ သူငယ်ချင်းနဲ့ အတူတူနေတယ်', english: 'No, I live with a friend.' },
      
        // --- Age (အသက်မေးမြန်းခြင်း) ---
        { korean: '나이가 어떻게 되세요?', myanmar: 'အသက် ဘယ်လောက် ရှိပြီလဲ', english: 'How old are you? (Polite)' },
        { korean: '몇 년생이세요?', myanmar: 'ဘယ်ခုနှစ် မွေးလဲ', english: 'What year were you born?' },
        { korean: '저는 스물다섯 살이에요.', myanmar: 'ကျွန်တော်က အသက် ၂၅ နှစ်ပါ', english: 'I am 25 years old.' },
        { korean: '저랑 동갑이네요!', myanmar: 'ကျွန်တော်နဲ့ အသက်တူတူပဲနော်', english: 'We are the same age!' },
        { korean: '제가 동생이네요.', myanmar: 'ကျွန်တော်က ပိုငယ်ပါတယ်', english: 'I am younger.' },
        { korean: '제가 언니(누나)네요.', myanmar: 'ဒါဆို ကျွန်မ(ကျွန်တော်)က အစ်မကြီးပဲ', english: 'I am the older sister.' },
      
        // --- Occupation & Major (အလုပ်အကိုင်နှင့် ပညာရေး) ---
        { korean: '직업이 뭐예요?', myanmar: 'အလုပ်က ဘာလုပ်တာလဲ', english: 'What is your job?' },
        { korean: '무슨 일 하세요?', myanmar: 'ဘာအလုပ် လုပ်ကိုင်ပါသလဲ', english: 'What kind of work do you do?' },
        { korean: '저는 대학생이에요.', myanmar: 'ကျွန်တော်က တက္ကသိုလ်ကျောင်းသားပါ', english: 'I am a university student.' },
        { korean: '회사에 다니고 있어요.', myanmar: 'ကုမ္ပဏီမှာ အလုပ်လုပ်ပါတယ်', english: 'I go to work (at a company).' },
        { korean: '전공이 뭐예요?', myanmar: 'မေဂျာက ဘာယူထားတာလဲ', english: 'What is your major?' },
        { korean: '컴퓨터 공학을 공부하고 있어요.', myanmar: 'ကွန်ပျူတာ အင်ဂျင်နီယား ဘာသာရပ်ကို လေ့လာနေပါတယ်', english: 'I am studying Computer Engineering.' },
        { korean: '어느 학교에 다니세요?', myanmar: 'ဘယ်ကျောင်း တက်နေတာလဲ', english: 'Which school do you go to?' },
        { korean: '저는 한국대학교에 다녀요.', myanmar: 'ကျွန်တော်က 한국 (Hankook) တက္ကသိုလ် တက်နေပါတယ်', english: 'I attend Hankook University.' },
        { korean: '아직 직장을 구하고 있어요.', myanmar: 'အလုပ်ရှာနေတုန်းပါ', english: 'I am still looking for a job.' },
      
        // --- Family (မိသားစု) ---
        { korean: '가족이 몇 명이에요?', myanmar: 'မိသားစု ဘယ်နှစ်ယောက် ရှိလဲ', english: 'How many people are in your family?' },
        { korean: '가족은 모두 네 명이에요.', myanmar: 'မိသားစု အားလုံးပေါင်း ၄ ယောက် ရှိပါတယ်', english: 'There are 4 people in my family.' },
        { korean: '형제자매가 있어요?', myanmar: 'မောင်နှမ သားချင်း ရှိလား', english: 'Do you have siblings?' },
        { korean: '네, 남동생이 한 명 있어요.', myanmar: 'ဟုတ်ကဲ့၊ မောင်လေး တစ်ယောက်ရှိတယ်', english: 'Yes, I have one younger brother.' },
        { korean: '저는 외동이에요.', myanmar: 'ကျွန်တော်က တစ်ဦးတည်းသော သား/သမီး ပါ', english: 'I am an only child.' },
      
        // --- Hobbies & Interests (ဝါသနာ) ---
        { korean: '취미가 뭐예요?', myanmar: 'ဝါသနာက ဘာလဲ', english: 'What is your hobby?' },
        { korean: '저는 영화 보는 걸 좋아해요.', myanmar: 'ကျွန်တော်က ရုပ်ရှင်ကြည့်ရတာ ကြိုက်တယ်', english: 'I like watching movies.' },
        { korean: '주말에는 보통 뭐 하세요?', myanmar: 'စနေ၊ တနင်္ဂနွေဆို ပုံမှန် ဘာလုပ်လဲ', english: 'What do you usually do on weekends?' },
        { korean: '시간 날 때 운동을 해요.', myanmar: 'အားလပ်ချိန်ရရင် အားကစား လုပ်တယ်', english: 'I exercise when I have free time.' },
        { korean: '한국 음식을 좋아하세요?', myanmar: 'ကိုရီးယား အစားအစာ ကြိုက်လား', english: 'Do you like Korean food?' },
        { korean: '네, 특히 김치찌개를 좋아해요.', myanmar: 'ဟုတ်ကဲ့၊ အထူးသဖြင့် ကင်ချီဟင်းရည်ကို ကြိုက်တယ်', english: 'Yes, I especially like Kimchi stew.' },
      
        // --- Language Skills (ဘာသာစကား) ---
        { korean: '한국말 잘하시네요.', myanmar: 'ကိုရီးယားစကား ပြောတာ တော်လိုက်တာ', english: 'You speak Korean well.' },
        { korean: '아직 배우는 중이에요.', myanmar: 'အခုထိ လေ့လာနေတုန်းပါပဲ', english: 'I am still learning.' },
        { korean: '조금밖에 못 해요.', myanmar: 'နည်းနည်းပဲ ပြောတတ်ပါတယ်', english: 'I can only speak a little.' },
        { korean: '천천히 말씀해 주시겠어요?', myanmar: 'ကျေးဇူးပြုပြီး ဖြည်းဖြည်းလောက် ပြောပေးမလား', english: 'Could you please speak slowly?' },
        { korean: '연락처 좀 알려주세요.', myanmar: 'ဖုန်းနံပါတ် (ဆက်သွယ်ရန်လိပ်စာ) လေး ပေးပါလား', english: 'Please give me your contact info.' },
      ],
      'saying-goodbye': [
        // --- Standard Farewells ---
        { korean: '안녕히 가세요.', myanmar: 'ကောင်းကောင်းပြန်ပါ (ပြန်မယ့်သူကို)', english: 'Goodbye (Please go well)' },
        { korean: '안녕히 계세요.', myanmar: 'ကောင်းကောင်းနေခဲ့ပါ (ကျန်ခဲ့မယ့်သူကို)', english: 'Goodbye (Please stay well)' },
        { korean: '조심히 가세요.', myanmar: 'ဂရုစိုက် ပြန်ပါ', english: 'Go home safely' },
        { korean: '살펴 가세요.', myanmar: 'လမ်းခရီး ဂရုစိုက်ပါ (လူကြီးကို)', english: 'Go safely (Polite)' },
        { korean: '먼저 일어날게요.', myanmar: 'အရင် ပြန်နှင့်ပါဦးမယ်', english: 'I will leave first' },
        { korean: '먼저 들어갈게요.', myanmar: 'အိမ်ထဲဝင်နှင့်ပါတော့မယ်', english: 'I will go in first (leaving a group)' },
        { korean: '이만 가볼게요.', myanmar: 'သွားလိုက်ပါဦးမယ်', english: 'I will be going now' },
        { korean: '내일 봐요.', myanmar: 'မနက်ဖြန် တွေ့မယ်', english: 'See you tomorrow' },
        { korean: '다음에 또 봐요.', myanmar: 'နောက်တစ်ခါ ထပ်တွေ့မယ်', english: 'See you next time' },
        { korean: '나중에 봐요.', myanmar: 'နောက်မှ တွေ့မယ်', english: 'See you later' },
        
        // --- Time-Specific ---
        { korean: '곧 다시 만나요.', myanmar: 'မကြာမီ ထပ်တွေ့ကြမယ်', english: 'See you again soon' },
        { korean: '이따가 봐요.', myanmar: 'ခဏနေ တွေ့မယ်', english: 'See you in a little while' },
        { korean: '다음 주에 만나요.', myanmar: 'နောက်အပတ် တွေ့မယ်', english: 'See you next week' },
        { korean: '주말에 봐요.', myanmar: 'ပိတ်ရက်မှ တွေ့မယ်', english: 'See you on the weekend' },
        { korean: '월요일에 뵙겠습니다.', myanmar: 'တနင်္လာနေ့မှ တွေ့မယ် (ယဉ်ကျေးစွာ)', english: 'See you on Monday (Formal)' },
        { korean: '아침에 봐요.', myanmar: 'မနက်မှ တွေ့မယ်', english: 'See you in the morning' },
        { korean: '저녁에 다시 올게요.', myanmar: 'ညနေမှ ပြန်လာခဲ့မယ်', english: 'I will come back in the evening' },
        { korean: '시간 날 때 봐요.', myanmar: 'အချိန်ရတဲ့အခါ တွေ့မယ်', english: 'See you when you have time' },
        
        // --- Well Wishes ---
        { korean: '좋은 하루 보내세요.', myanmar: 'နေ့ရက်ကောင်းလေး ဖြစ်ပါစေ', english: 'Have a nice day' },
        { korean: '좋은 저녁 되세요.', myanmar: 'ညနေခင်းလေးမှာ ပျော်ရွှင်ပါစေ', english: 'Have a good evening' },
        { korean: '좋은 밤 되세요.', myanmar: 'ကောင်းသော ညချမ်းပါ', english: 'Have a good night' },
        { korean: '잘 자요.', myanmar: 'အိပ်တော့နော် (ကောင်းကောင်းအိပ်)', english: 'Good night (Sleep well)' },
        { korean: '주말 잘 보내세요.', myanmar: 'ပိတ်ရက်ကို ပျော်ပျော်ရွှင်ရွှင် ဖြတ်သန်းပါ', english: 'Have a good weekend' },
        { korean: '즐거운 시간 보내세요.', myanmar: 'ပျော်ရွှင်စရာ အချိန်လေး ဖြစ်ပါစေ', english: 'Have a fun time' },
        { korean: '여행 잘 다녀오세요.', myanmar: 'ခရီး ကောင်းကောင်း သွားခဲ့ပါ', english: 'Have a safe trip' },
        { korean: '푹 쉬세요.', myanmar: 'ကောင်းကောင်း အနားယူပါ', english: 'Get some good rest' },
        { korean: '건강 조심하세요.', myanmar: 'ကျန်းမာရေး ဂရုစိုက်ပါ', english: 'Take care of your health' },
        { korean: '감기 조심하세요.', myanmar: 'အအေးမိမခံနဲ့နော်', english: 'Don’t catch a cold' },
        { korean: '행운을 빌어요.', myanmar: 'ကံကောင်းပါစေ', english: 'Good luck' },
        { korean: '운전 조심하세요.', myanmar: 'ကားမောင်းတာ သတိထားပါ', english: 'Drive safely' },
      
        // --- Staying in Touch ---
        { korean: '연락할게요.', myanmar: 'ဖုန်းဆက်လိုက်မယ်', english: 'I will contact you' },
        { korean: '전화할게요.', myanmar: 'ဖုန်းခေါ်မယ်', english: 'I will call you' },
        { korean: '문자 할게요.', myanmar: 'မက်ဆေ့ ပို့လိုက်မယ်', english: 'I will text you' },
        { korean: '카톡 보낼게요.', myanmar: 'KakaoTalk ပို့လိုက်မယ်', english: 'I will send a KakaoTalk' },
        { korean: '도착하면 연락줘요.', myanmar: 'ရောက်ရင် ဖုန်းဆက်နော်', english: 'Contact me when you arrive' },
        { korean: '자주 연락해요.', myanmar: 'မကြာခဏ အဆက်အသွယ်လုပ်မယ်', english: 'Let’s keep in touch often' },
        { korean: '소식 전해주세요.', myanmar: 'သတင်းလေး ဘာလေး ပြောပြပေးပါ', english: 'Please let me know your news' },
        { korean: '잊지 말고 연락하세요.', myanmar: 'မမေ့ဘဲ ဆက်သွယ်ပါ', english: 'Don’t forget to contact me' },
      
        // --- Situational / Emotional ---
        { korean: '헤어지기 아쉽네요.', myanmar: 'လမ်းခွဲရမှာ နှမြောစရာပဲ', english: 'It’s sad to part ways' },
        { korean: '오늘 즐거웠어요.', myanmar: 'ဒီနေ့ ပျော်ဖို့ကောင်းခဲ့ပါတယ်', english: 'I had fun today' },
        { korean: '덕분에 잘 놀았어요.', myanmar: 'ကျေးဇူးကြောင့် ကောင်းကောင်းကစားခဲ့ရတယ် (ပျော်ခဲ့ရတယ်)', english: 'Thanks to you, I had a good time' },
        { korean: '들어가세요.', myanmar: 'အိမ်ထဲဝင်တော့ (နှုတ်ဆက်စကား)', english: 'Go in (Casual goodbye)' },
        { korean: '끊을게요.', myanmar: 'ဖုန်းချလိုက်တော့မယ်နော်', english: 'I’m hanging up (Phone)' },
        { korean: '수고하셨어요.', myanmar: 'ပင်ပန်းသွားပါပြီ (အလုပ်ပြီးချိန်)', english: 'Good job / You worked hard' },
        { korean: '수고하세요.', myanmar: 'ဆက်လက် ကြိုးစားပေးပါဦး (ဆိုင်မှထွက်စဉ်)', english: 'Keep up the good work (Leaving a shop)' },
        { korean: '다녀오겠습니다.', myanmar: 'သွားလိုက်ပါဦးမယ် (အိမ်မှထွက်စဉ်)', english: 'I’m leaving (from home)' },
        { korean: '다녀왔습니다.', myanmar: 'ပြန်ရောက်ပါပြီ (အိမ်ပြန်ရောက်စဉ်)', english: 'I’m home' },
        { korean: '우리 또 만날 수 있겠죠?', myanmar: 'ငါတို့ ထပ်တွေ့ရဦးမှာပါနော်', english: 'We will be able to meet again, right?' },
      ],
      'describing-people': [
        // --- Appearance (Height/Body) ---
        { korean: '그는 키가 커요.', myanmar: 'သူက အရပ်ရှည်တယ်', english: 'He is tall' },
        { korean: '그녀는 키가 작고 귀여워요.', myanmar: 'သူမက အရပ်ပုပြီး ချစ်ဖို့ကောင်းတယ်', english: 'She is short and cute' },
        { korean: '그 사람은 날씬해요.', myanmar: 'သူက ပိန်သွယ်တယ်', english: 'That person is slim' },
        { korean: '약간 통통한 편이에요.', myanmar: 'နည်းနည်း ဝတုတ်တုတ် ဖြစ်တယ်', english: 'He/she is a bit chubby' },
        { korean: '몸이 정말 튼튼해요.', myanmar: 'ခန္ဓာကိုယ်က တကယ် သန်မာတယ်', english: 'His body is really strong' },
        { korean: '어깨가 넓어요.', myanmar: 'ပခုံး ကျယ်တယ်', english: 'Shoulders are broad' },
        { korean: '다리가 길어요.', myanmar: 'ခြေထောက် ရှည်တယ်', english: 'Legs are long' },
      
        // --- Face & Style ---
        { korean: '그 남자는 잘생겼어요.', myanmar: 'အဲ့ဒီအမျိုးသားက ချောတယ်', english: 'He is handsome' },
        { korean: '그 여자는 예뻐요.', myanmar: 'အဲ့ဒီအမျိုးသမီးက လှတယ်', english: 'She is pretty' },
        { korean: '얼굴이 작아요.', myanmar: 'မျက်နှာ သေးတယ်', english: 'Face is small' },
        { korean: '눈이 크고 맑아요.', myanmar: 'မျက်လုံးက ကြီးပြီး ကြည်လင်တယ်', english: 'Eyes are big and clear' },
        { korean: '코가 높아요.', myanmar: 'နှာခေါင်း ပေါ်တယ် (နှာတံမြင့်တယ်)', english: 'Nose is high' },
        { korean: '피부가 하얘요.', myanmar: 'အသားအရေ ဖြူတယ်', english: 'Skin is white/fair' },
        { korean: '머리가 길어요.', myanmar: 'ဆံပင် ရှည်တယ်', english: 'Hair is long' },
        { korean: '머리가 짧아요.', myanmar: 'ဆံပင် တိုတယ်', english: 'Hair is short' },
        { korean: '옷을 잘 입어요.', myanmar: 'အဝတ်အစား ဝတ်တတ်တယ်', english: 'Dresses well' },
        { korean: '스타일이 멋져요.', myanmar: 'စတိုင် မိုက်တယ်', english: 'Style is cool' },
        { korean: '안경을 썼어요.', myanmar: 'မျက်မှန် တပ်ထားတယ်', english: 'Wearing glasses' },
      
        // --- Personality (Positive) ---
        { korean: '성격이 친절해요.', myanmar: 'စိတ်သဘောထား ကြင်နာတယ်', english: 'Personality is kind' },
        { korean: '마음이 착해요.', myanmar: 'စိတ်ထား ကောင်းတယ်', english: 'Heart is kind/good' },
        { korean: '정말 똑똑해요.', myanmar: 'တကယ် ဉာဏ်ကောင်းတယ်', english: 'Really smart' },
        { korean: '성실한 사람이에요.', myanmar: 'ရိုးသားကြိုးစားတဲ့သူပါ', english: 'A diligent person' },
        { korean: '항상 밝아요.', myanmar: 'အမြဲတမ်း ရွှင်လန်းနေတယ်', english: 'Always bright/cheerful' },
        { korean: '유머 감각이 있어요.', myanmar: 'ဟာသဉာဏ် ရှိတယ်', english: 'Has a sense of humor' },
        { korean: '재미있는 사람이에요.', myanmar: 'ရယ်စရာကောင်းတဲ့ (ပျော်ဖို့ကောင်းတဲ့) သူပါ', english: 'A fun person' },
        { korean: '예의가 발라요.', myanmar: 'ယဉ်ကျေးတယ်', english: 'Very polite' },
        { korean: '용감해요.', myanmar: 'ရဲရင့်တယ်', english: 'Brave' },
        { korean: '자신감이 넘쳐요.', myanmar: 'ယုံကြည်မှုတွေ ပြည့်လျှံနေတယ်', english: 'Full of confidence' },
        { korean: '이해심이 많아요.', myanmar: 'နားလည်မှု များတယ်', english: 'Very understanding' },
        { korean: '책임감이 강해요.', myanmar: 'တာဝန်ယူစိတ် ပြင်းထန်တယ်', english: 'Strong sense of responsibility' },
        { korean: '정이 많아요.', myanmar: 'သံယောဇဉ် ကြီးတယ်', english: 'Affectionate / Warm-hearted' },
        { korean: '활동적이에요.', myanmar: 'တက်ကြွ လှုပ်ရှားတယ်', english: 'Active/Energetic' },
      
        // --- Personality (Neutral/Negative) ---
        { korean: '조용한 성격이에요.', myanmar: 'တိတ်ဆိတ်တဲ့ (အေးဆေးတဲ့) စရိုက်ပါ', english: 'A quiet personality' },
        { korean: '부끄러움이 많아요.', myanmar: 'ရှက်တတ်တယ်', english: 'Very shy' },
        { korean: '고집이 세요.', myanmar: 'ခေါင်းမာတယ်', english: 'Stubborn' },
        { korean: '성격이 급해요.', myanmar: 'စိတ်မြန်တယ်', english: 'Impatient / Hasty' },
        { korean: '말이 너무 많아요.', myanmar: 'စကား အရမ်းများတယ်', english: 'Talks too much' },
        { korean: '조금 게을러요.', myanmar: 'နည်းနည်း ပျင်းတယ်', english: 'A bit lazy' },
        { korean: '무뚝뚝해요.', myanmar: 'ဘုကျကျ နိုင်တယ် (စကားနည်းပြီး အနေတည်တယ်)', english: 'Blunt / Stoic' },
        { korean: '화를 잘 내요.', myanmar: 'စိတ်တိုလွယ်တယ်', english: 'Gets angry easily' },
        
        // --- State/Condition ---
        { korean: '인기가 많아요.', myanmar: 'လူကြိုက်များတယ်', english: 'Popular' },
        { korean: '친구가 많아요.', myanmar: 'သူငယ်ချင်း များတယ်', english: 'Has many friends' },
        { korean: '목소리가 좋아요.', myanmar: 'အသံ ကောင်းတယ်', english: 'Voice is nice' },
        { korean: '부지런해요.', myanmar: 'ဝီရိယရှိတယ် (အလုပ်ကြိုးစားတယ်)', english: 'Hardworking' },
        { korean: '믿을 수 있는 사람이에요.', myanmar: 'ယုံကြည်ရတဲ့သူပါ', english: 'A trustworthy person' },
      ],
      'describing-things': [
        // --- Size & Dimension ---
        { korean: '이것은 아주 커요.', myanmar: 'ဒါက အရမ်း ကြီးတယ်', english: 'This is very big' },
        { korean: '저것은 정말 작아요.', myanmar: 'ဟိုဟာက တကယ် သေးတယ်', english: 'That is really small' },
        { korean: '줄이 길어요.', myanmar: 'ကြိုးက ရှည်တယ်', english: 'The string/line is long' },
        { korean: '치마가 짧아요.', myanmar: 'စကပ်က တိုတယ်', english: 'The skirt is short' },
        { korean: '방이 넓어요.', myanmar: 'အခန်းက ကျယ်တယ်', english: 'The room is spacious' },
        { korean: '길이 좁아요.', myanmar: 'လမ်းက ကျဉ်းတယ်', english: 'The road is narrow' },
        { korean: '건물이 높아요.', myanmar: 'အဆောက်အဦးက မြင့်တယ်', english: 'The building is high' },
        { korean: '천장이 낮아요.', myanmar: 'မျက်နှာကြက်က နိမ့်တယ်', english: 'The ceiling is low' },
        { korean: '책이 두꺼워요.', myanmar: 'စာအုပ်က ထူတယ်', english: 'The book is thick' },
        { korean: '종이가 얇아요.', myanmar: 'စက္ကူက ပါးတယ်', english: 'The paper is thin' },
      
        // --- Weight & Texture ---
        { korean: '가방이 무거워요.', myanmar: 'အိတ်က လေးတယ်', english: 'The bag is heavy' },
        { korean: '깃털처럼 가벼워요.', myanmar: 'ငှက်မွေးလို ပေါ့ပါးတယ်', english: 'Light as a feather' },
        { korean: '침대가 딱딱해요.', myanmar: 'ကုတင်က မာတယ်', english: 'The bed is hard' },
        { korean: '이불이 부드러워요.', myanmar: 'စောင်က နူးညံ့တယ်', english: 'The blanket is soft' },
        { korean: '바닥이 미끄러워요.', myanmar: 'ကြမ်းပြင်က ချောတယ်', english: 'The floor is slippery' },
        { korean: '표면이 거칠어요.', myanmar: 'မျက်နှာပြင်က ကြမ်းတယ်', english: 'The surface is rough' },
      
        // --- Price & Value ---
        { korean: '가격이 비싸요.', myanmar: 'စျေးနှုန်း ကြီးတယ်', english: 'The price is expensive' },
        { korean: '이건 싸요.', myanmar: 'ဒါက စျေးပေါတယ်', english: 'This is cheap' },
        { korean: '무료예요.', myanmar: 'အခမဲ့ပါ', english: 'It is free' },
        { korean: '새것 같아요.', myanmar: 'အသစ်နဲ့ တူတယ်', english: 'Looks like new' },
        { korean: '너무 오래됐어요.', myanmar: 'အရမ်း ဟောင်းနေပြီ', english: 'It is too old' },
        { korean: '중요한 물건이에요.', myanmar: 'အရေးကြီးတဲ့ ပစ္စည်းပါ', english: 'It is an important item' },
      
        // --- Quality & Condition ---
        { korean: '품질이 좋아요.', myanmar: 'အရည်အသွေး ကောင်းတယ်', english: 'Quality is good' },
        { korean: '상태가 나빠요.', myanmar: 'အခြေအနေ မကောင်းဘူး', english: 'Condition is bad' },
        { korean: '고장이 났어요.', myanmar: 'ပျက်နေတယ်', english: 'It is broken' },
        { korean: '깨끗해요.', myanmar: 'သန့်ရှင်းတယ်', english: 'It is clean' },
        { korean: '더러워요.', myanmar: 'ညစ်ပတ်တယ်', english: 'It is dirty' },
        { korean: '냄새가 좋아요.', myanmar: 'အနံ့ ကောင်းတယ်', english: 'Smells good' },
        { korean: '이상한 냄새가 나요.', myanmar: 'ထူးဆန်းတဲ့အနံ့ ရတယ်', english: 'Smells strange' },
        { korean: '색깔이 예뻐요.', myanmar: 'အရောင် လှတယ်', english: 'Color is pretty' },
        { korean: '디자인이 단순해요.', myanmar: 'ဒီဇိုင်း ရိုးရှင်းတယ်', english: 'Design is simple' },
        { korean: '화려해요.', myanmar: 'ခမ်းနားထည်ဝါတယ် (အရောင်တောက်တယ်)', english: 'Fancy / Colorful' },
      
        // --- Taste & Temperature (Food/Environment) ---
        { korean: '맛이 달아요.', myanmar: 'အရသာ ချိုတယ်', english: 'Tastes sweet' },
        { korean: '너무 매워요.', myanmar: 'အရမ်း စပ်တယ်', english: 'Too spicy' },
        { korean: '음식이 짜요.', myanmar: 'အစာက ငန်တယ်', english: 'Food is salty' },
        { korean: '싱거워요.', myanmar: 'အရသာ ပေါ့တယ်', english: 'Tastes bland' },
        { korean: '커피가 뜨거워요.', myanmar: 'ကော်ဖီ ပူတယ်', english: 'Coffee is hot' },
        { korean: '물이 차가워요.', myanmar: 'ရေ အေးတယ်', english: 'Water is cold' },
        { korean: '날씨가 따뜻해요.', myanmar: 'ရာသီဥတု နွေးထွေးတယ်', english: 'Weather is warm' },
        { korean: '바람이 시원해요.', myanmar: 'လေတိုက်တာ အေးမြတယ်', english: 'Wind is cool/refreshing' },
      
        // --- Difficulty & Speed ---
        { korean: '이 문제는 어려워요.', myanmar: 'ဒီပုစ္ဆာက ခက်တယ်', english: 'This problem is hard' },
        { korean: '한국어는 쉬워요.', myanmar: 'ကိုရီးယားစာက လွယ်တယ်', english: 'Korean is easy' },
        { korean: '인터넷이 빨라요.', myanmar: 'အင်တာနက် မြန်တယ်', english: 'Internet is fast' },
        { korean: '컴퓨터가 느려요.', myanmar: 'ကွန်ပျူတာ နှေးတယ်', english: 'Computer is slow' },
        { korean: '편리해요.', myanmar: 'အဆင်ပြေတယ် (သက်သောင့်သက်သာရှိတယ်)', english: 'Convenient' },
        { korean: '불편해요.', myanmar: 'အဆင်မပြေဘူး', english: 'Inconvenient' },
      ],
      'describing-abilities': [
        // --- Languages & Communication ---
        { korean: '저는 한국어를 할 수 있어요.', myanmar: 'ကျွန်တော်/မ ကိုရီးယားစကား ပြောနိုင်တယ်', english: 'I can speak Korean' },
        { korean: '영어를 조금 할 줄 알아요.', myanmar: 'အင်္ဂလိပ်စကား နည်းနည်း ပြောတတ်တယ်', english: 'I can speak a little English' },
        { korean: '일본어는 전혀 못 해요.', myanmar: 'ဂျပန်စကား လုံးဝ မပြောတတ်ဘူး', english: 'I can’t speak Japanese at all' },
        { korean: '한국어를 읽을 수 있어요.', myanmar: 'ကိုရီးယားစာ ဖတ်တတ်တယ်', english: 'I can read Korean' },
        { korean: '발음이 아주 좋아요.', myanmar: 'အသံထွက် အရမ်းကောင်းတယ်', english: 'Your pronunciation is very good' },
        { korean: '글을 잘 써요.', myanmar: 'စာရေးကောင်းတယ်', english: 'I write well' },
        { korean: '발표를 잘해요.', myanmar: 'ပမဝေပြောဆိုတာ (Presentation) တော်တယ်', english: 'I am good at presentations' },
        { korean: '소통하는 것을 좋아해요.', myanmar: 'ဆက်သွယ်ပြောဆိုရတာကို သဘောကျတယ်', english: 'I like communicating' },
      
        // --- Professional / IT Skills (Relevant to you) ---
        { korean: '컴퓨터를 잘 다뤄요.', myanmar: 'ကွန်ပျူတာ အသုံးတွင်တယ် (ကျွမ်းကျင်တယ်)', english: 'I am good with computers' },
        { korean: '코딩을 할 수 있어요.', myanmar: 'Coding ရေးနိုင်တယ်', english: 'I can code' },
        { korean: '프로그래밍을 배우고 있어요.', myanmar: 'ပရိုဂရမ်းမင်း လေ့လာနေတယ်', english: 'I am learning programming' },
        { korean: '문제를 빨리 해결해요.', myanmar: 'ပြဿနာတွေကို မြန်မြန် ဖြေရှင်းနိုင်တယ်', english: 'I solve problems quickly' },
        { korean: '엑셀을 사용할 줄 알아요.', myanmar: 'Excel အသုံးပြုတတ်တယ်', english: 'I know how to use Excel' },
        { korean: '보고서를 잘 작성해요.', myanmar: 'Report ကောင်းကောင်း ရေးတတ်တယ်', english: 'I write reports well' },
        { korean: '영상 편집을 할 수 있어요.', myanmar: 'ဗီဒီယို တည်းဖြတ်နိုင်တယ်', english: 'I can edit videos' },
        { korean: '타자가 빨라요.', myanmar: 'လက်ကွက်ရိုက်တာ မြန်တယ်', english: 'I type fast' },
      
        // --- Arts & Music ---
        { korean: '피아노를 칠 수 있어요.', myanmar: 'စန္ဒရား တီးတတ်တယ်', english: 'I can play the piano' },
        { korean: '기타를 조금 쳐요.', myanmar: 'ဂစ်တာ နည်းနည်း တီးတတ်တယ်', english: 'I play guitar a little' },
        { korean: '노래 부르는 걸 좋아해요.', myanmar: 'သီချင်းဆိုရတာ ကြိုက်တယ်', english: 'I like singing' },
        { korean: '노래를 잘해요.', myanmar: 'သီချင်းဆိုကောင်းတယ်', english: 'I sing well' },
        { korean: '춤을 잘 춰요.', myanmar: 'အက ကောင်းတယ်', english: 'I dance well' },
        { korean: '그림 그리는 재능이 있어요.', myanmar: 'ပုံဆွဲတဲ့ ပါရမီပါတယ်', english: 'I have a talent for drawing' },
        { korean: '사진을 잘 찍어요.', myanmar: 'ဓာတ်ပုံရိုက်ကောင်းတယ်', english: 'I take photos well' },
      
        // --- Sports & Physical ---
        { korean: '수영을 할 줄 알아요?', myanmar: 'ရေကူး တတ်လား', english: 'Do you know how to swim?' },
        { korean: '저는 수영을 못 해요.', myanmar: 'ကျွန်တော် ရေမကူးတတ်ဘူး', english: 'I cannot swim' },
        { korean: '축구를 아주 잘해요.', myanmar: 'ဘောလုံးကန်တာ အရမ်းတော်တယ်', english: 'I am very good at soccer' },
        { korean: '자전거를 탈 수 있어요.', myanmar: 'စက်ဘီး စီးတတ်တယ်', english: 'I can ride a bicycle' },
        { korean: '운전면허가 있어요.', myanmar: 'ယာဉ်မောင်းလိုင်စင် ရှိတယ်', english: 'I have a driver’s license' },
        { korean: '운전을 잘해요.', myanmar: 'ကားမောင်း ကျွမ်းကျင်တယ်', english: 'I drive well' },
        { korean: '달리기가 빨라요.', myanmar: 'အပြေး မြန်တယ်', english: 'I run fast' },
        { korean: '태권도를 할 수 있어요.', myanmar: 'တိုက်ကွမ်ဒို ကစားတတ်တယ်', english: 'I can do Taekwondo' },
      
        // --- Daily Life & Character ---
        { korean: '요리를 잘해요.', myanmar: 'ဟင်းချက်ကောင်းတယ်', english: 'I cook well' },
        { korean: '한국 음식을 만들 수 있어요.', myanmar: 'ကိုရီးယားအစားအစာ လုပ်တတ်တယ်', english: 'I can make Korean food' },
        { korean: '매운 음식을 잘 먹어요.', myanmar: 'အစပ် ကောင်းကောင်းစားနိုင်တယ်', english: 'I can eat spicy food well' },
        { korean: '술을 못 마셔요.', myanmar: 'အရက် မသောက်တတ်ဘူး', english: 'I can’t drink alcohol' },
        { korean: '정리를 잘해요.', myanmar: 'ပစ္စည်းသိမ်းဆည်းတာ သပ်ရပ်တယ်', english: 'I am good at organizing' },
        { korean: '길을 잘 찾아요.', myanmar: 'လမ်းမှတ်မိလွယ်တယ် (လမ်းရှာတော်တယ်)', english: 'I am good at finding my way' },
        { korean: '아이들을 잘 돌봐요.', myanmar: 'ကလေး ထိန်းတော်တယ်', english: 'I am good at taking care of kids' },
        { korean: '친구를 금방 사귀어요.', myanmar: 'သူငယ်ချင်း အလွယ်တကူ ရတယ်', english: 'I make friends easily' },
        { korean: '리더십이 있어요.', myanmar: 'ခေါင်းဆောင်မှု အရည်အချင်းရှိတယ်', english: 'I have leadership skills' },
        { korean: '시간 약속을 잘 지켜요.', myanmar: 'အချိန်တိကျတယ်', english: 'I am punctual' },
        { korean: '거짓말을 못 해요.', myanmar: 'လိမ်မပြောတတ်ဘူး', english: 'I cannot lie' },
        { korean: '비밀을 잘 지켜요.', myanmar: 'လျှို့ဝှက်ချက် ထိန်းသိမ်းနိုင်တယ်', english: 'I keep secrets well' },
        { korean: '창의적인 편이에요.', myanmar: 'ဖန်တီးမှုအားကောင်းတဲ့အထဲ ပါတယ်', english: 'I am on the creative side' },
        { korean: '적응을 잘해요.', myanmar: 'လိုက်လျောညီထွေ နေတတ်တယ်', english: 'I adapt well' },
        { korean: '무거운 것을 들 수 있어요.', myanmar: 'လေးတဲ့အရာတွေကို မနိုင်တယ်', english: 'I can lift heavy things' },
        { korean: '혼자서도 잘해요.', myanmar: 'တစ်ယောက်တည်းလည်း ကောင်းကောင်း လုပ်နိုင်တယ်', english: 'I do well even alone' },
      ],
      
      'job-interview': [
        // --- Introduction ---
        { korean: '자기소개를 간단히 해주세요.', myanmar: 'ကိုယ့်ကိုယ်ကို မိတ်ဆက်ပေးပါ', english: 'Please introduce yourself briefly' },
        { korean: '안녕하십니까, 저는 김민수입니다.', myanmar: 'မင်္ဂလာပါခင်ဗျာ၊ ကျွန်တော်က ကင်မင်ဆူး ပါ', english: 'Hello, I am Kim Minsu' },
        { korean: '만나 뵙게 되어 영광입니다.', myanmar: 'အခုလို တွေ့ဆုံရတာ ဂုဏ်ယူမိပါတယ်', english: 'It is an honor to meet you' },
        { korean: '이력서는 여기 있습니다.', myanmar: 'ကိုယ်ရေးရာဇဝင် ဒီမှာပါ', english: 'Here is my resume' },
        { korean: '지원 동기가 무엇입니까?', myanmar: 'လျှောက်ထားရတဲ့ အကြောင်းရင်းက ဘာပါလဲ', english: 'What is your motivation for applying?' },
        
        // --- Experience & Skills ---
        { korean: '어떤 경험이 있나요?', myanmar: 'ဘယ်လို အတွေ့အကြုံတွေ ရှိလဲ', english: 'What experience do you have?' },
        { korean: '대학에서 IT를 전공했습니다.', myanmar: 'တက္ကသိုလ်မှာ IT မေဂျာ ယူခဲ့ပါတယ်', english: 'I majored in IT at university' },
        { korean: '인턴 경험이 있습니다.', myanmar: 'အလုပ်သင် အတွေ့အကြုံ ရှိပါတယ်', english: 'I have internship experience' },
        { korean: '자격증을 가지고 있나요?', myanmar: 'လက်မှတ် (Certificates) တွေ ရှိလား', english: 'Do you have any certifications?' },
        { korean: '한국어 능력 시험(TOPIK) 급수가 있나요?', myanmar: 'TOPIK (ကိုရီးယားစာမေးပွဲ) အောင်လက်မှတ် ရှိလား', english: 'Do you have a TOPIK level?' },
        { korean: '프로젝트 경험에 대해 말해주세요.', myanmar: 'ပရောဂျက် လုပ်ခဲ့တဲ့ အတွေ့အကြုံကို ပြောပြပါ', english: 'Please tell me about your project experience' },
        { korean: '팀으로 일해본 적이 있나요?', myanmar: 'အဖွဲ့နဲ့ အလုပ်လုပ်ဖူးလား', english: 'Have you worked in a team?' },
        
        // --- Strengths & Weaknesses ---
        { korean: '본인의 장점은 무엇인가요?', myanmar: 'မိမိရဲ့ အားသာချက်က ဘာလဲ', english: 'What are your strengths?' },
        { korean: '저는 책임감이 강합니다.', myanmar: 'ကျွန်တော်က တာဝန်ယူစိတ် ပြင်းထန်ပါတယ်', english: 'I have a strong sense of responsibility' },
        { korean: '새로운 것을 빨리 배웁니다.', myanmar: 'အသစ်အဆန်းတွေကို မြန်မြန် သင်ယူနိုင်ပါတယ်', english: 'I learn new things quickly' },
        { korean: '단점은 무엇이라고 생각해요?', myanmar: 'အားနည်းချက်က ဘာလို့ ထင်လဲ', english: 'What do you think is your weakness?' },
        { korean: '가끔 너무 꼼꼼할 때가 있습니다.', myanmar: 'တစ်ခါတလေ အရမ်း စေ့စပ်လွန်းအားကြီးပါတယ်', english: 'Sometimes I am too meticulous' },
        { korean: '문제를 해결하는 능력이 있습니다.', myanmar: 'ပြဿနာ ဖြေရှင်းနိုင်စွမ်း ရှိပါတယ်', english: 'I have problem-solving skills' },
        
        // --- Work Conditions ---
        { korean: '언제부터 출근할 수 있나요?', myanmar: 'ဘယ်နေ့ကစပြီး အလုပ်ဆင်းနိုင်မလဲ', english: 'When can you start working?' },
        { korean: '바로 시작할 수 있습니다.', myanmar: 'ချက်ချင်း စနိုင်ပါတယ်', english: 'I can start immediately' },
        { korean: '다음 주부터 가능합니다.', myanmar: 'နောက်အပတ်ကစပြီး အဆင်ပြေပါတယ်', english: 'Possible from next week' },
        { korean: '희망 연봉은 얼마인가요?', myanmar: 'မျှော်မှန်း လစာ ဘယ်လောက်လဲ', english: 'What is your desired salary?' },
        { korean: '회사 내규에 따르겠습니다.', myanmar: 'ကုမ္ပဏီ သတ်မှတ်ချက်အတိုင်း လက်ခံပါတယ်', english: 'I will follow the company regulations' },
        { korean: '야근이 있어도 괜찮나요?', myanmar: 'အချိန်ပိုဆင်းရရင် အဆင်ပြေလား', english: 'Is it okay if there is overtime?' },
        { korean: '네, 괜찮습니다.', myanmar: 'ဟုတ်ကဲ့၊ အဆင်ပြေပါတယ်', english: 'Yes, it is okay' },
        { korean: '주말 근무가 가능합니까?', myanmar: 'ပိတ်ရက်တွေမှာ အလုပ်ဆင်းနိုင်လား', english: 'Can you work on weekends?' },
        { korean: '기숙사가 제공되나요?', myanmar: 'အဆောင် စီစဉ်ပေးပါသလား', english: 'Is a dormitory provided?' },
        { korean: '비자 지원이 가능한가요?', myanmar: 'ဗီဇာအတွက် ထောက်ခံပေးနိုင်မလား', english: 'Is visa support possible?' },
        
        // --- Company Questions ---
        { korean: '우리 회사에 대해 아는 게 있나요?', myanmar: 'ကျွန်တော်တို့ ကုမ္ပဏီအကြောင်း ဘာသိထားလဲ', english: 'Do you know anything about our company?' },
        { korean: '왜 우리 회사를 선택했나요?', myanmar: 'ဘာလို့ ဒီကုမ္ပဏီကို ရွေးချယ်တာလဲ', english: 'Why did you choose our company?' },
        { korean: '이 직무에 왜 지원했나요?', myanmar: 'ဒီရာထူးကို ဘာလို့ လျှောက်တာလဲ', english: 'Why did you apply for this role?' },
        { korean: '5년 후의 목표는 무엇인가요?', myanmar: 'နောက် ၅ နှစ်ကြာရင် ရည်မှန်းချက်က ဘာလဲ', english: 'What is your goal in 5 years?' },
        { korean: '개발자가 되고 싶습니다.', myanmar: 'Developer တစ်ယောက် ဖြစ်ချင်ပါတယ်', english: 'I want to become a developer' },
        { korean: '오랫동안 일하고 싶습니다.', myanmar: 'ရေရှည် အလုပ်လုပ်ချင်ပါတယ်', english: 'I want to work for a long time' },
        
        // --- Closing ---
        { korean: '마지막으로 하고 싶은 말이 있나요?', myanmar: 'နောက်ဆုံးအနေနဲ့ ပြောချင်တာ ရှိလား', english: 'Do you have any final words?' },
        { korean: '질문 있으신가요?', myanmar: 'မေးခွန်း ရှိပါသလား', english: 'Do you have any questions?' },
        { korean: '결과는 언제 알 수 있나요?', myanmar: 'အဖြေက ဘယ်တော့လောက် သိရမလဲ', english: 'When will I know the result?' },
        { korean: '연락드리겠습니다.', myanmar: 'ပြန်လည် ဆက်သွယ်ပေးပါမယ်', english: 'We will contact you' },
        { korean: '시간 내주셔서 감사합니다.', myanmar: 'အချိန်ပေးလို့ ကျေးဇူးတင်ပါတယ်', english: 'Thank you for your time' },
        { korean: '면접 기회를 주셔서 감사합니다.', myanmar: 'အခုလို အင်တာဗျူးခွင့်ပေးလို့ ကျေးဇူးတင်ပါတယ်', english: 'Thank you for the interview opportunity' },
        { korean: '좋은 소식 기다리겠습니다.', myanmar: 'သတင်းကောင်းကို စောင့်မျှော်နေပါ့မယ်', english: 'I will wait for good news' },
        { korean: '수고하셨습니다.', myanmar: 'ပင်ပန်းသွားပါပြီ (နှုတ်ဆက်စကား)', english: 'Thank you for your effort' },
        { korean: '안녕히 계십시오.', myanmar: 'ကောင်းကောင်း နေခဲ့ပါခင်ဗျာ (အရိုအသေပြု နှုတ်ဆက်ခြင်း)', english: 'Goodbye (Formal)' },
      ],
      
      'inviting-accepting-refusing': [
        // --- Inviting (Making Plans) ---
        { korean: '이번 주말에 시간 있어요?', myanmar: 'ဒီတစ်ပတ် ပိတ်ရက် အချိန်ရလား', english: 'Do you have time this weekend?' },
        { korean: '오늘 저녁에 뭐 해요?', myanmar: 'ဒီနေ့ညနေ ဘာလုပ်မလဲ', english: 'What are you doing this evening?' },
        { korean: '같이 영화 보러 갈래요?', myanmar: 'ရုပ်ရှင် အတူတူ သွားကြည့်မလား', english: 'Do you want to go watch a movie together?' },
        { korean: '커피 한잔하실래요?', myanmar: 'ကော်ဖီလေးဘာလေး သောက်မလား', english: 'Would you like to have a cup of coffee?' },
        { korean: '점심 같이 먹어요.', myanmar: 'နေ့လည်စာ အတူတူ စားကြမယ်', english: 'Let’s eat lunch together' },
        { korean: '우리 집에 놀러 오세요.', myanmar: 'ကျွန်တော့်အိမ်ကို လာလည်ပါလား', english: 'Please come visit my house' },
        { korean: '술 한잔 어때요?', myanmar: 'အရက်တစ်ခွက်လောက် သောက်မလား', english: 'How about a drink?' },
        { korean: '데이트 신청해도 될까요?', myanmar: 'ဒိတ်လုပ်ဖို့ ဖိတ်ခေါ်လို့ရမလား', english: 'Can I ask you out on a date?' },
        { korean: '산책하러 갈까요?', myanmar: 'လမ်းလျှောက်ထွက်ကြမလား', english: 'Shall we go for a walk?' },
        { korean: '쇼핑하러 같이 가요.', myanmar: 'ဈေးဝယ်ထွက်တာ အတူတူသွားကြမယ်', english: 'Let’s go shopping together' },
        { korean: '파티에 초대하고 싶어요.', myanmar: 'ပါတီပွဲကို ဖိတ်ချင်လို့ပါ', english: 'I want to invite you to a party' },
        
        // --- Coordinating ---
        { korean: '언제 만날까요?', myanmar: 'ဘယ်တော့ တွေ့ကြမလဲ', english: 'When should we meet?' },
        { korean: '어디서 보는 게 좋아요?', myanmar: 'ဘယ်မှာတွေ့တာ ကောင်းမလဲ', english: 'Where is good to meet?' },
        { korean: '몇 시가 편하세요?', myanmar: 'ဘယ်အချိန် အဆင်ပြေမလဲ', english: 'What time is convenient for you?' },
        { korean: '강남역 10번 출구 어때요?', myanmar: 'ဂန်းနမ်ဘူတာ ထွက်ပေါက် ၁၀ ဆို ဘယ်လိုလဲ', english: 'How about Gangnam Station Exit 10?' },
        { korean: '제가 데리러 갈게요.', myanmar: 'ကျွန်တော် လာကြိုမယ်', english: 'I will come pick you up' },
        
        // --- Accepting ---
        { korean: '네, 좋아요!', myanmar: 'အင်း၊ ကောင်းသားပဲ', english: 'Yes, sounds good!' },
        { korean: '당연하죠.', myanmar: 'ဒါပေါ့ (တကယ်ပေါ့)', english: 'Of course' },
        { korean: '시간 괜찮아요.', myanmar: 'အချိန်ရပါတယ်', english: 'I have time / It fits my schedule' },
        { korean: '기대되네요.', myanmar: 'မျှော်လင့်နေမိတယ် (ရင်ခုန်မိတယ်)', english: 'I look forward to it' },
        { korean: '좋은 생각이에요.', myanmar: 'အကြံကောင်းပဲ', english: 'That is a good idea' },
        { korean: '그때 봬요.', myanmar: 'အဲ့ဒီတော့မှ တွေ့မယ်', english: 'See you then' },
        { korean: '초대해 주셔서 감사합니다.', myanmar: 'ဖိတ်ခေါ်ပေးလို့ ကျေးဇူးတင်ပါတယ်', english: 'Thank you for inviting me' },
        { korean: '꼭 갈게요.', myanmar: 'သေချာပေါက် လာခဲ့မယ်', english: 'I will definitely go' },
        
        // --- Refusing (Polite) ---
        { korean: '죄송해요, 선약이 있어요.', myanmar: 'တောင်းပန်ပါတယ်၊ ချိန်းထားတာ ရှိလို့ပါ', english: 'Sorry, I have a prior engagement' },
        { korean: '그날은 시간이 안 돼요.', myanmar: 'အဲ့ဒီနေ့က အချိန်မရဘူး', english: 'I don’t have time on that day' },
        { korean: '다음에 가면 안 될까요?', myanmar: 'နောက်တစ်ခါမှ သွားလို့ မရဘူးလား', english: 'Can’t we go next time?' },
        { korean: '요즘 너무 바빠서요.', myanmar: 'ဒီရက်ပိုင်း အရမ်း အလုပ်ရှုပ်နေလို့ပါ', english: 'I am too busy these days' },
        { korean: '몸이 좀 안 좋아요.', myanmar: 'နေသိပ်မကောင်းချင်ဘူး', english: 'I don’t feel well' },
        { korean: '아쉽지만 못 갈 것 같아요.', myanmar: 'နှမြောစရာပဲ၊ မလာနိုင်လောက်ဘူး ထင်တယ်', english: 'It’s a shame, but I don’t think I can go' },
        { korean: '다른 날은 어때요?', myanmar: 'တခြားရက်ဆိုရင်ရော ဘယ်လိုလဲ', english: 'How about another day?' },
        { korean: '다음에 꼭 같이 가요.', myanmar: 'နောက်တစ်ခါကျရင် သေချာပေါက် အတူတူသွားကြမယ်', english: 'Let’s definitely go together next time' },
        { korean: '생각해 볼게요.', myanmar: 'စဉ်းစားကြည့်ပါဦးမယ်', english: 'I will think about it' },
        { korean: '미안해요, 관심 없어요.', myanmar: 'တောင်းပန်ပါတယ်၊ စိတ်မဝင်စားဘူး', english: 'Sorry, I am not interested' },
      
        // --- Payment / Treating ---
        { korean: '제가 살게요.', myanmar: 'ကျွန်တော် ဝယ်ကျွေးမယ်', english: 'I will buy (treat)' },
        { korean: '한턱 낼게요.', myanmar: 'ဒကာခံမယ်', english: 'I will treat you' },
        { korean: '각자 내요 (더치페이 해요).', myanmar: 'ကိုယ့်ဟာကိုယ် ရှင်းကြမယ်', english: 'Let’s pay separately' },
        { korean: '다음에는 제가 낼게요.', myanmar: 'နောက်တစ်ခါကျရင် ကျွန်တော် ရှင်းပါရစေ', english: 'I will pay next time' },
        { korean: '맛있게 드세요.', myanmar: 'အရသာရှိရှိ စားပါ', english: 'Enjoy your meal' },
        { korean: '잘 먹었습니다.', myanmar: 'ကောင်းကောင်း စားခဲ့ပါတယ် (ကျေးဇူးပါ)', english: 'I ate well (Thank you)' },
      ],
      
      shopping: [
        // --- Finding Items ---
        { korean: '이거 얼마예요?', myanmar: 'ဒါ ဘယ်လောက်လဲ', english: 'How much is this?' },
        { korean: '저거 보여주세요.', myanmar: 'ဟိုဟာလေး ပြပေးပါ', english: 'Please show me that' },
        { korean: '다른 색깔 있어요?', myanmar: 'တခြားအရောင် ရှိလား', english: 'Do you have other colors?' },
        { korean: '더 큰 사이즈 있나요?', myanmar: 'ပိုကြီးတဲ့ ဆိုဒ် ရှိလား', english: 'Do you have a bigger size?' },
        { korean: '작은 사이즈로 주세요.', myanmar: 'ဆိုဒ်အသေး ပေးပါ', english: 'Please give me a small size' },
        { korean: '입어봐도 되나요?', myanmar: 'ဝတ်ကြည့်လို့ ရမလား', english: 'Can I try it on?' },
        { korean: '탈의실이 어디예요?', myanmar: 'အဝတ်လဲခန်း ဘယ်မှာလဲ', english: 'Where is the fitting room?' },
        { korean: '이게 요즘 유행이에요?', myanmar: 'ဒါ ဒီရက်ပိုင်း ခေတ်စားတာလား', english: 'Is this trendy these days?' },
        { korean: '새 상품으로 주세요.', myanmar: 'ပစ္စည်းအသစ် ပေးပါ', english: 'Please give me a new product' },
        { korean: '재고가 있나요?', myanmar: 'ပစ္စည်းလက်ကျန် ရှိသေးလား', english: 'Is it in stock?' },
        
        // --- Bargaining & Price ---
        { korean: '너무 비싸요.', myanmar: 'အရမ်း စျေးကြီးတယ်', english: 'It is too expensive' },
        { korean: '조금만 깎아주세요.', myanmar: 'နည်းနည်းလောက် လျှော့ပေးပါ', english: 'Please give me a discount' },
        { korean: '할인 행사 중인가요?', myanmar: 'လျှော့စျေး ပရိုမိုးရှင်း လုပ်နေတာလား', english: 'Is there a discount event?' },
        { korean: '세일 가격인가요?', myanmar: 'ဒါ လျှော့စျေးလား', english: 'Is this the sale price?' },
        { korean: '가장 싼 거 보여주세요.', myanmar: 'စျေးအပေါဆုံးဟာ ပြပေးပါ', english: 'Please show me the cheapest one' },
        { korean: '현금으로 하면 깎아주나요?', myanmar: 'ငွေသားနဲ့ပေးရင် လျှော့ပေးလား', english: 'Do you discount for cash?' },
        { korean: '1+1 (원플러스원) 이에요?', myanmar: 'တစ်ခုဝယ် တစ်ခုလက်ဆောင်လား', english: 'Is it 1 plus 1?' },
        
        // --- Payment ---
        { korean: '계산은 어디서 해요?', myanmar: 'ပိုက်ဆံ ဘယ်မှာ ရှင်းရမလဲ', english: 'Where do I pay?' },
        { korean: '카드로 계산할게요.', myanmar: 'ကတ်နဲ့ ရှင်းမယ်', english: 'I will pay by card' },
        { korean: '현금영수증 해주세요.', myanmar: 'အခွန်ပြေစာ ထုတ်ပေးပါ', english: 'Please give me a cash receipt' },
        { korean: '할부는 몇 개월로 해드릴까요?', myanmar: 'အရစ်ကျ ဘယ်နှလ ပေးမလဲ (ကိုရီးယားတွင်မေးလေ့ရှိသည်)', english: 'How many months installments?' },
        { korean: '일시불로 해주세요.', myanmar: 'တစ်ခါတည်း အကြေရှင်းပေးပါ', english: 'Please pay in full (lump sum)' },
        { korean: '삼성페이 되나요?', myanmar: 'Samsung Pay ရလား', english: 'Do you take Samsung Pay?' },
        { korean: '영수증 주세요.', myanmar: 'ဘောင်ချာ ပေးပါ', english: 'Please give me a receipt' },
        { korean: '영수증은 버려주세요.', myanmar: 'ဘောင်ချာ လွှင့်ပစ်လိုက်ပါ', english: 'Please throw away the receipt' },
        { korean: '봉투 필요하세요?', myanmar: 'အိတ် လိုမလား', english: 'Do you need a bag?' },
        { korean: '종량제 봉투에 담아주세요.', myanmar: 'အမှိုက်ပစ်လို့ရတဲ့ အိတ်နဲ့ ထည့်ပေးပါ', english: 'Please put it in a waste bag' },
        
        // --- Exchanges & Refunds ---
        { korean: '교환하고 싶어요.', myanmar: 'ပစ္စည်း လဲချင်လို့ပါ', english: 'I want to exchange this' },
        { korean: '환불해 주세요.', myanmar: 'ငွေပြန်အမ်းပေးပါ', english: 'Please refund me' },
        { korean: '사이즈가 안 맞아요.', myanmar: 'ဆိုဒ်က မတော်ဘူး', english: 'The size doesn’t fit' },
        { korean: '마음에 안 들어요.', myanmar: 'သဘောမကျလို့ပါ', english: 'I don’t like it' },
        { korean: '영수증 가지고 오셨나요?', myanmar: 'ဘောင်ချာ ယူလာခဲ့လား', english: 'Did you bring the receipt?' },
        { korean: '하자가 있어요.', myanmar: 'အနာအဆာ ပါနေတယ်', english: 'There is a defect' },
        
        // --- Browsing ---
        { korean: '그냥 구경하는 중이에요.', myanmar: 'ဒီတိုင်း လိုက်ကြည့်နေတာပါ', english: 'I am just browsing' },
        { korean: '도움이 필요하면 부를게요.', myanmar: 'အကူအညီလိုရင် ခေါ်လိုက်ပါမယ်', english: 'I will call you if I need help' },
        { korean: '몇 시까지 영업해요?', myanmar: 'ဘယ်အချိန်ထိ ဆိုင်ဖွင့်လဲ', english: 'Until what time are you open?' },
        { korean: '이거 하나 주세요.', myanmar: 'ဒါ တစ်ခု ပေးပါ', english: 'Please give me one of these' },
        { korean: '포장해 주세요.', myanmar: 'ထုပ်ပိုးပေးပါ', english: 'Please wrap it' },
        { korean: '선물용이에요.', myanmar: 'လက်ဆောင်ပေးဖို့ပါ', english: 'It is for a gift' },
        { korean: '택배로 보낼 수 있나요?', myanmar: 'Delivery နဲ့ ပို့လို့ရလား', english: 'Can I send it via parcel service?' },
      ],
      
      apologizing: [
        // --- Light Apologies ---
        { korean: '죄송합니다.', myanmar: 'စိတ်မကောင်းပါဘူး (တရားဝင်)', english: 'I am sorry (Formal)' },
        { korean: '미안해요.', myanmar: 'တောင်းပန်ပါတယ် (ယဉ်ကျေးစွာ)', english: 'Sorry (Polite)' },
        { korean: '잠시만요 (지나갈게요).', myanmar: 'ခဏလေးနော် (ဖြတ်သွားပါရစေ)', english: 'Excuse me (Passing by)' },
        { korean: '실례합니다.', myanmar: 'ခွင့်ပြုပါနော် (ရုံးသုံး/တရားဝင်)', english: 'Excuse me' },
        { korean: '늦어서 죄송해요.', myanmar: 'နောက်ကျလို့ တောင်းပန်ပါတယ်', english: 'Sorry for being late' },
        { korean: '답장이 늦어서 미안해요.', myanmar: 'စာပြန်တာ နောက်ကျလို့ တောင်းပန်ပါတယ်', english: 'Sorry for the late reply' },
        { korean: '깜빡했어요.', myanmar: 'မေ့သွားတယ်', english: 'I forgot' },
        { korean: '제가 실수했네요.', myanmar: 'ကျွန်တော် အမှားလုပ်မိသွားတယ်', english: 'I made a mistake' },
        { korean: '일부러 그런 건 아니에요.', myanmar: 'တမင်တကာ လုပ်ခဲ့တာ မဟုတ်ပါဘူး', english: 'I didn’t do it on purpose' },
        { korean: '오해하지 마세요.', myanmar: 'အထင်မလွဲပါနဲ့', english: 'Please don’t misunderstand' },
        
        // --- Serious Apologies ---
        { korean: '정말 죄송합니다.', myanmar: 'တကယ်ကို တောင်းပန်ပါတယ်', english: 'I am really sorry' },
        { korean: '진심으로 사과드립니다.', myanmar: 'စိတ်ရင်းနဲ့ တောင်းပန်အပ်ပါတယ်', english: 'I sincerely apologize' },
        { korean: '용서해 주세요.', myanmar: 'ခွင့်လွှတ်ပေးပါ', english: 'Please forgive me' },
        { korean: '제 잘못입니다.', myanmar: 'ကျွန်တော့် အမှားပါ', english: 'It is my fault' },
        { korean: '다시는 안 그러겠습니다.', myanmar: 'နောက်တစ်ခါ ထပ်မလုပ်တော့ပါဘူး', english: 'I won’t do it again' },
        { korean: '폐를 끼쳐서 죄송해요.', myanmar: 'ဒုက္ခပေးမိလို့ တောင်းပန်ပါတယ်', english: 'Sorry for causing trouble' },
        { korean: '어떻게 사과해야 할지 모르겠어요.', myanmar: 'ဘယ်လို တောင်းပန်ရမလဲတောင် မသိတော့ဘူး', english: 'I don’t know how to apologize' },
        { korean: '책임을 지겠습니다.', myanmar: 'တာဝန်ယူပါ့မယ်', english: 'I will take responsibility' },
        { korean: '불편을 드려 죄송합니다.', myanmar: 'အဆင်မပြေဖြစ်စေခဲ့လို့ တောင်းပန်ပါတယ်', english: 'Sorry for the inconvenience' },
        { korean: '기분 상하게 했다면 미안해요.', myanmar: 'စိတ်ခုသွားတယ်ဆိုရင် တောင်းပန်ပါတယ်', english: 'Sorry if I offended you' },
        
        // --- Accepting Apologies ---
        { korean: '괜찮아요.', myanmar: 'ရပါတယ် (ကိစ္စမရှိပါဘူး)', english: 'It’s okay' },
        { korean: '신경 쓰지 마세요.', myanmar: 'စိတ်မပူပါနဲ့ (ကိစ္စမရှိပါဘူး)', english: 'Don’t worry about it' },
        { korean: '그럴 수도 있죠.', myanmar: 'အဲ့လိုလည်း ဖြစ်တတ်ပါတယ်', english: 'That can happen' },
        { korean: '문제가 없어요.', myanmar: 'ပြဿနာ မရှိပါဘူး', english: 'No problem' },
        { korean: '이해해요.', myanmar: 'နားလည်ပါတယ်', english: 'I understand' },
        { korean: '사과 받아줄게요.', myanmar: 'တောင်းပန်တာကို လက်ခံလိုက်မယ်', english: 'I accept your apology' },
        { korean: '다음에 조심하면 돼요.', myanmar: 'နောက်တစ်ခါ သတိထားရင် ရပြီ', english: 'Just be careful next time' },
        { korean: '이미 지난 일이에요.', myanmar: 'ပြီးခဲ့တဲ့ကိစ္စ ဖြစ်သွားပါပြီ', english: 'It is already in the past' },
        { korean: '잊어버리세요.', myanmar: 'မေ့လိုက်ပါတော့', english: 'Forget about it' },
        { korean: '화 풀어요.', myanmar: 'စိတ်ဆိုးပြေပါတော့', english: 'Stop being angry' },
      
        // --- Repairing situations ---
        { korean: '제가 어떻게 하면 될까요?', myanmar: 'ကျွန်တော် ဘာလုပ်ပေးရမလဲ', english: 'What should I do?' },
        { korean: '보상해 드리겠습니다.', myanmar: 'လျော်ကြေး ပေးပါ့မယ်', english: 'I will compensate you' },
        { korean: '새 걸로 사드릴게요.', myanmar: 'အသစ် ဝယ်ပေးပါ့မယ်', english: 'I will buy you a new one' },
        { korean: '세탁비 드릴게요.', myanmar: 'အဝတ်လျှော်ခ ပေးပါ့မယ်', english: 'I will give you laundry money' },
        { korean: '다신 늦지 않을게요.', myanmar: 'နောက်တစ်ခါ ထပ်မနောက်ကျတော့ပါဘူး', english: 'I won’t be late again' },
        { korean: '걱정 끼쳐 드려 죄송합니다.', myanmar: 'စိတ်ပူစေခဲ့လို့ တောင်းပန်ပါတယ်', english: 'Sorry for making you worry' },
        { korean: '약속을 못 지켜서 미안해요.', myanmar: 'ကတိမတည်နိုင်ခဲ့လို့ တောင်းပန်ပါတယ်', english: 'Sorry for breaking the promise' },
        { korean: '제 말이 너무 심했어요.', myanmar: 'ကျွန်တော့်စကားက လွန်သွားတယ်', english: 'My words were too harsh' },
        { korean: '고의가 아니었어요.', myanmar: 'မတော်တဆ ဖြစ်တာပါ', english: 'It was not intentional' },
        { korean: '너그럽게 봐주세요.', myanmar: 'သည်းခံခွင့်လွှတ်ပေးပါ', english: 'Please be generous/forgiving' },
      ],
      comparing: [
        // --- Basic Comparisons (More/Less) ---
        { korean: '이게 더 커요.', myanmar: 'ဒါက ပိုကြီးတယ်', english: 'This is bigger' },
        { korean: '저게 더 작아요.', myanmar: 'ဟိုဟာက ပိုသေးတယ်', english: 'That is smaller' },
        { korean: '이쪽이 더 좋아요.', myanmar: 'ဒီဘက်က ပိုကောင်းတယ်', english: 'This side/one is better' },
        { korean: '그건 더 나빠요.', myanmar: 'အဲ့ဒါက ပိုဆိုးတယ်', english: 'That is worse' },
        { korean: '한국어가 영어보다 어려워요.', myanmar: 'ကိုရီးယားစာက အင်္ဂလိပ်စာထက် ခက်တယ်', english: 'Korean is harder than English' },
        { korean: '이 가방이 저것보다 비싸요.', myanmar: 'ဒီအိတ်က ဟိုဟာထက် ပိုစျေးကြီးတယ်', english: 'This bag is more expensive than that one' },
        { korean: '오늘은 어제보다 더워요.', myanmar: 'ဒီနေ့က မနေ့ကထက် ပိုပူတယ်', english: 'Today is hotter than yesterday' },
        { korean: '지하철이 버스보다 빨라요.', myanmar: 'မြေအောက်ရထားက ဘတ်စ်ကားထက် ပိုမြန်တယ်', english: 'Subway is faster than bus' },
        { korean: '저는 커피보다 차를 더 좋아해요.', myanmar: 'ကျွန်တော်က ကော်ဖီထက် လက်ဖက်ရည်ကို ပိုကြိုက်တယ်', english: 'I like tea more than coffee' },
        { korean: '좀 더 싼 거 있어요?', myanmar: 'နည်းနည်း ပိုစျေးပေါတာ ရှိလား', english: 'Do you have something a bit cheaper?' },
      
        // --- Superlatives (The Most/Best) ---
        { korean: '이게 제일 좋아요.', myanmar: 'ဒါက အကောင်းဆုံးပဲ', english: 'This is the best' },
        { korean: '가장 맛있는 음식이에요.', myanmar: 'အရသာ အရှိဆုံး အစားအစာပဲ', english: 'It is the most delicious food' },
        { korean: '누가 제일 키가 커요?', myanmar: 'ဘယ်သူ အရပ်အရှည်ဆုံးလဲ', english: 'Who is the tallest?' },
        { korean: '이게 가장 인기 있는 제품이에요.', myanmar: 'ဒါက လူကြိုက်အများဆုံး ပစ္စည်းပါ', english: 'This is the most popular product' },
        { korean: '한국에서 가장 유명한 곳이에요.', myanmar: 'ကိုရီးယားမှာ အကျော်ကြားဆုံး နေရာပါ', english: 'It is the most famous place in Korea' },
        { korean: '제일 매운 걸로 주세요.', myanmar: 'အစပ်ဆုံးဟာ ပေးပါ', english: 'Please give me the spiciest one' },
        { korean: '가장 싼 방법이 뭐예요?', myanmar: 'စျေးအသက်သာဆုံး နည်းလမ်းက ဘာလဲ', english: 'What is the cheapest way?' },
      
        // --- Similarity & Difference ---
        { korean: '우리는 나이가 같아요.', myanmar: 'ငါတို့က အသက်တူတူပဲ', english: 'We are the same age' },
        { korean: '이거랑 저거랑 똑같아요.', myanmar: 'ဒါနဲ့ ဟိုဟာနဲ့က အတူတူပဲ (တထေရာတည်းပဲ)', english: 'This and that are exactly the same' },
        { korean: '비슷해 보여요.', myanmar: 'တူမယ် ထင်ရတယ် (ဆင်တူတယ်)', english: 'It looks similar' },
        { korean: '색깔이 달라요.', myanmar: 'အရောင် မတူဘူး (ကွဲပြားတယ်)', english: 'The color is different' },
        { korean: '맛이 전혀 달라요.', myanmar: 'အရသာက လုံးဝ ကွဲပြားတယ်', english: 'The taste is completely different' },
        { korean: '저도 같은 걸로 주세요.', myanmar: 'ကျွန်တော့်ကိုလည်း တူတာပဲ ပေးပါ', english: 'Please give me the same one too' },
        { korean: '차이점이 뭐예요?', myanmar: 'ကွာခြားချက်က ဘာလဲ', english: 'What is the difference?' },
        { korean: '한국 문화는 미얀마와 달라요.', myanmar: 'ကိုရီးယားယဉ်ကျေးမှုက မြန်မာနဲ့ မတူဘူး', english: 'Korean culture is different from Myanmar' },
        { korean: '생각보다 괜찮네요.', myanmar: 'ထင်ထားတာထက် အဆင်ပြေသားပဲ', english: 'It is better than I thought' },
      
        // --- Preference & Evaluation ---
        { korean: '어느 게 더 나아요?', myanmar: 'ဘယ်ဟာက ပိုကောင်းလဲ (ပိုအဆင်ပြေလဲ)', english: 'Which one is better?' },
        { korean: '이게 훨씬 예뻐요.', myanmar: 'ဒါက အများကြီး ပိုလှတယ်', english: 'This is much prettier' },
        { korean: '전보다 살이 빠졌네요.', myanmar: 'အရင်ကထက် ပိန်သွားတယ်နော်', english: 'You lost weight compared to before' },
        { korean: '작년보다 한국어가 늘었어요.', myanmar: 'မနှစ်ကထက် ကိုရီးယားစကား တိုးတက်လာတယ်', english: 'Korean improved compared to last year' },
        { korean: '집보다 편한 곳은 없어요.', myanmar: 'အိမ်ထက် သက်တောင့်သက်သာရှိတဲ့နေရာ မရှိဘူး', english: 'There is no place more comfortable than home' },
        { korean: '이것만큼 좋은 건 없어요.', myanmar: 'ဒါလောက် ကောင်းတာ မရှိဘူး', english: 'There is nothing as good as this' },
        { korean: '예상보다 사람이 많아요.', myanmar: 'မှန်းထားတာထက် လူများတယ်', english: 'There are more people than expected' },
        { korean: '가격 대비 성능이 좋아요 (가성비).', myanmar: 'စျေးတန်တယ် (ပေးရတဲ့စျေးနဲ့တန်အောင် ကောင်းတယ်)', english: 'Good value for money' },
        { korean: '덜 맵게 해주세요.', myanmar: 'သိပ်မစပ်အောင် လုပ်ပေးပါ (စပ်တာ လျှော့ပေးပါ)', english: 'Please make it less spicy' },
        { korean: '더 열심히 공부해야 해요.', myanmar: 'ပိုပြီး ကြိုးကြိုးစားစား စာလုပ်ရမယ်', english: 'Need to study harder' },
        { korean: '이 옷이 저한테 더 잘 어울려요.', myanmar: 'ဒီအင်္ကျီက ကျွန်တော်နဲ့ ပိုလိုက်တယ်', english: 'This clothes suits me better' },
        { korean: '건강이 돈보다 중요해요.', myanmar: 'ကျန်းမာရေးက ပိုက်ဆံထက် အရေးကြီးတယ်', english: 'Health is more important than money' },
        { korean: '지금이 제일 행복해요.', myanmar: 'အခုအချိန်က အပျော်ဆုံးပဲ', english: 'I am happiest right now' },
        { korean: '갈수록 날씨가 추워져요.', myanmar: 'ကြာလေ ရာသီဥတုက ပိုအေးလာလေပဲ', english: 'The weather is getting colder' },
      ],
      
      restaurant: [
        // --- Entering & Seating ---
        { korean: '어서 오세요, 몇 분이세요?', myanmar: 'ကြိုဆိုပါတယ်၊ ဘယ်နှယောက်လဲမသိဘူး', english: 'Welcome, how many people?' },
        { korean: '두 명이에요.', myanmar: 'နှစ်ယောက်ပါ', english: 'Two people' },
        { korean: '자리 있어요?', myanmar: 'ထိုင်ခုံ ရှိသေးလား', english: 'Do you have seats?' },
        { korean: '예약하셨나요?', myanmar: 'ဘိုကင် လုပ်ထားပါသလား', english: 'Did you make a reservation?' },
        { korean: '창가 쪽 자리로 주세요.', myanmar: 'ပြတင်းပေါက်နားက ခုံ ပေးပါ', english: 'Please give us a window seat' },
        { korean: '아기 의자 있나요?', myanmar: 'ကလေးထိုင်ခုံ ရှိလား', english: 'Do you have a baby chair?' },
        { korean: '얼마나 기다려야 해요?', myanmar: 'ဘယ်လောက်ကြာကြာ စောင့်ရမလဲ', english: 'How long do we have to wait?' },
        
        // --- Ordering ---
        { korean: '주문하시겠어요?', myanmar: 'ဘာမှာမလဲခင်ဗျာ', english: 'Would you like to order?' },
        { korean: '메뉴판 좀 주세요.', myanmar: 'မီနူးလေး ပေးပါ', english: 'Please give me the menu' },
        { korean: '여기서 제일 맛있는 게 뭐예요?', myanmar: 'ဒီမှာ အကောင်းဆုံးက ဘာလဲ', english: 'What is the most delicious thing here?' },
        { korean: '추천해 주시겠어요?', myanmar: 'ညွှန်းပေးလို့ ရမလား', english: 'Could you recommend something?' },
        { korean: '이거 주세요.', myanmar: 'ဒါ ပေးပါ', english: 'Please give me this' },
        { korean: '불고기 2인분 주세요.', myanmar: 'Bulgogi (အမဲသားကင်) ၂ ပွဲစာ ပေးပါ', english: 'Please give me 2 servings of Bulgogi' },
        { korean: '저기요! 주문할게요.', myanmar: 'ဒီမှာခင်ဗျာ (ဆိုင်ဝန်ထမ်းခေါ်သံ)၊ မှာချင်လို့ပါ', english: 'Excuse me! I would like to order' },
        { korean: '이거 매워요?', myanmar: 'ဒါ စပ်လား', english: 'Is this spicy?' },
        { korean: '안 맵게 해 주세요.', myanmar: 'မစပ်အောင် လုပ်ပေးပါ', english: 'Please make it not spicy' },
        { korean: '고수는 빼 주세요.', myanmar: 'နံနံပင် ဖယ်ပေးပါ', english: 'Please remove the coriander' },
        { korean: '공기밥 하나 추가해 주세요.', myanmar: 'ထမင်းတစ်ပွဲ ထပ်ချပေးပါ', english: 'Please add one bowl of rice' },
        
        // --- During the Meal ---
        { korean: '물 좀 주세요.', myanmar: 'ရေ နည်းနည်းလောက် ပေးပါ', english: 'Please give me some water' },
        { korean: '반찬 좀 더 주세요.', myanmar: 'အရံဟင်း နည်းနည်းလောက် ထပ်ပေးပါ (ကိုရီးယားတွင် အခမဲ့ဖြစ်သည်)', english: 'Please give me more side dishes' },
        { korean: '휴지 있어요?', myanmar: 'တစ်ရှူး ရှိလား', english: 'Do you have tissues/napkins?' },
        { korean: '앞치마 주세요.', myanmar: 'အေပရွန် (အညစ်အကြေးကာ ဝတ်စုံ) ပေးပါ', english: 'Please give me an apron' },
        { korean: '정말 맛있어요!', myanmar: 'တကယ် အရသာရှိတယ်', english: 'It is really delicious!' },
        { korean: '배불러요.', myanmar: 'ဗိုက်ဝပြီ', english: 'I am full' },
        { korean: '화장실이 어디예요?', myanmar: 'ရေအိမ် ဘယ်မှာလဲ', english: 'Where is the restroom?' },
        
        // --- Paying & Leaving ---
        { korean: '계산서 주세요.', myanmar: 'ဘောင်ချာ ပေးပါ', english: 'Please give me the bill' },
        { korean: '얼마예요?', myanmar: 'ဘယ်လောက်ကျလဲ', english: 'How much is it?' },
        { korean: '계산은 어디서 해요?', myanmar: 'ပိုက်ဆံ ဘယ်မှာ ရှင်းရမလဲ', english: 'Where do I pay?' },
        { korean: '따로 계산할게요.', myanmar: 'သီးသန့်စီ ရှင်းမယ်', english: 'We will pay separately' },
        { korean: '잘 먹었습니다.', myanmar: 'ကောင်းကောင်း စားခဲ့ပါတယ် (စားပြီးကြောင်း ပြောခြင်း)', english: 'I ate well (Thank you)' },
        { korean: '남은 음식 포장해 주세요.', myanmar: 'ကျန်တဲ့ အစားအစာကို ထုပ်ပေးပါ (ပါဆယ်လုပ်ပေးပါ)', english: 'Please pack the leftover food' },
        { korean: '배달 되나요?', myanmar: 'Delivery ပို့ပေးလား', english: 'Do you deliver?' },
        { korean: '다음에 또 올게요.', myanmar: 'နောက်တစ်ခါ ထပ်လာဦးမယ်', english: 'I will come again next time' },
      ],
      
      travel: [
        // --- Airport & Transport ---
        { korean: '여권 보여주세요.', myanmar: 'ပတ်စပို့ (နိုင်ငံကူးလက်မှတ်) ပြပေးပါ', english: 'Please show me your passport' },
        { korean: '티켓은 어디서 사요?', myanmar: 'လက်မှတ် ဘယ်မှာ ဝယ်ရမလဲ', english: 'Where do I buy tickets?' },
        { korean: '비행기를 놓쳤어요.', myanmar: 'လေယာဉ် လွတ်သွားတယ်', english: 'I missed the flight' },
        { korean: '수하물을 찾고 있어요.', myanmar: 'အိတ် (Luggage) တွေကို ရှာနေတာပါ', english: 'I am looking for my luggage' },
        { korean: '환전소가 어디인가요?', myanmar: 'ငွေလဲကောင်တာ ဘယ်မှာလဲ', english: 'Where is the currency exchange?' },
        { korean: '공항 버스는 어디서 타요?', myanmar: 'လေဆိပ် ဘတ်စ်ကား ဘယ်မှာ စီးရမလဲ', english: 'Where do I take the airport bus?' },
        { korean: '택시를 불러주세요.', myanmar: 'တက္ကစီ ခေါ်ပေးပါ', english: 'Please call a taxi' },
        { korean: '이 주소로 가주세요.', myanmar: 'ဒီလိပ်စာအတိုင်း မောင်းပေးပါ', english: 'Please go to this address' },
        
        // --- Accommodation (Hotel) ---
        { korean: '체크인하고 싶어요.', myanmar: 'Check-in ဝင်ချင်ပါတယ်', english: 'I want to check in' },
        { korean: '예약자 이름은 김민수입니다.', myanmar: 'ဘိုကင်လုပ်ထားသူနာမည်က ကင်မင်ဆူး ပါ', english: 'The reservation name is Kim Minsu' },
        { korean: '조식은 포함되어 있나요?', myanmar: 'မနက်စာ ပါပြီးသားလား', english: 'Is breakfast included?' },
        { korean: '와이파이 비밀번호가 뭐예요?', myanmar: 'Wifi စကားဝှက်က ဘာလဲ', english: 'What is the WiFi password?' },
        { korean: '방을 청소해 주세요.', myanmar: 'အခန်း သန့်ရှင်းရေး လုပ်ပေးပါ', english: 'Please clean the room' },
        { korean: '수건 좀 더 주세요.', myanmar: 'မျက်နှာသုတ်ပဝါ ပိုပေးပါ', english: 'Please give me more towels' },
        { korean: '체크아웃은 몇 시인가요?', myanmar: 'Check-out ဘယ်အချိန်လဲ', english: 'What time is checkout?' },
        { korean: '짐을 맡겨도 될까요?', myanmar: 'အိတ်တွေ ခဏအပ်ထားလို့ ရမလား', english: 'Can I leave my luggage?' },
        
        // --- Sightseeing & Activities ---
        { korean: '관광 안내소가 어디예요?', myanmar: 'ခရီးသွား သတင်းပြန်ကြားရေးရုံး ဘယ်မှာလဲ', english: 'Where is the tourist information center?' },
        { korean: '지도를 한 장 주세요.', myanmar: 'မြေပုံ တစ်ရွက်လောက် ပေးပါ', english: 'Please give me a map' },
        { korean: '사진 좀 찍어 주시겠어요?', myanmar: 'ဓာတ်ပုံလေး တစ်ပုံလောက် ရိုက်ပေးလို့ ရမလား', english: 'Could you please take a photo?' },
        { korean: '입장료는 얼마예요?', myanmar: 'ဝင်ကြေး ဘယ်လောက်လဲ', english: 'How much is the entrance fee?' },
        { korean: '여기서 유명한 게 뭐예요?', myanmar: 'ဒီမှာ နာမည်ကြီးတာ ဘာရှိလဲ', english: 'What is famous here?' },
        { korean: '기념품 가게가 있나요?', myanmar: 'အမှတ်တရပစ္စည်းဆိုင် ရှိလား', english: 'Is there a souvenir shop?' },
        { korean: '길을 잃어버렸어요.', myanmar: 'လမ်းပျောက်သွားလို့ပါ', english: 'I am lost' },
        { korean: '도와주세요.', myanmar: 'ကူညီပါ', english: 'Help me' },
        { korean: '한국말을 잘 못해요.', myanmar: 'ကိုရီးယားစကား ကောင်းကောင်း မပြောတတ်ဘူး', english: 'I don’t speak Korean well' },
        { korean: '영어 할 수 있으세요?', myanmar: 'အင်္ဂလိပ်စကား ပြောတတ်လား', english: 'Can you speak English?' },
        
        // --- Experiences ---
        { korean: '경치가 정말 아름다워요.', myanmar: 'ရှုခင်းက တကယ် လှပတယ်', english: 'The scenery is really beautiful' },
        { korean: '재미있는 여행이었어요.', myanmar: 'ပျော်စရာကောင်းတဲ့ ခရီးစဉ်ပဲ', english: 'It was a fun trip' },
        { korean: '다음에 꼭 다시 오고 싶어요.', myanmar: 'နောက်တစ်ခါ သေချာပေါက် ပြန်လာချင်တယ်', english: 'I definitely want to come back next time' },
        { korean: '이 버스는 명동에 가나요?', myanmar: 'ဒီကားက မြောင်ဒုံးကို ရောက်လား', english: 'Does this bus go to Myeongdong?' },
        { korean: '여기 세워주세요.', myanmar: 'ဒီနားမှာ ရပ်ပေးပါ', english: 'Please stop here' },
      ],
      
      directions: [
        // --- Asking for Location ---
        { korean: '실례합니다, 길 좀 물을게요.', myanmar: 'ခွင့်ပြုပါခင်ဗျာ၊ လမ်းနည်းနည်းလောက် မေးချင်လို့ပါ', english: 'Excuse me, may I ask for directions?' },
        { korean: '여기서 가장 가까운 역이 어디예요?', myanmar: 'ဒီကနေ အနီးဆုံး ဘူတာက ဘယ်မှာလဲ', english: 'Where is the nearest station from here?' },
        { korean: '서울역에 어떻게 가요?', myanmar: 'ဆိုးလ်ဘူတာကို ဘယ်လို သွားရမလဲ', english: 'How do I go to Seoul Station?' },
        { korean: '이 근처에 약국이 있나요?', myanmar: 'ဒီနားမှာ ဆေးဆိုင် ရှိလား', english: 'Is there a pharmacy nearby?' },
        { korean: '지도에서 보여주세요.', myanmar: 'မြေပုံထဲမှာ ပြပေးပါ', english: 'Please show me on the map' },
        { korean: '지금 우리가 어디에 있어요?', myanmar: 'အခု ကျွန်တော်တို့ ဘယ်နားရောက်နေတာလဲ', english: 'Where are we right now?' },
        
        // --- Basic Instructions ---
        { korean: '쭉 가세요 (직진하세요).', myanmar: 'တည့်တည့် သွားပါ', english: 'Go straight' },
        { korean: '왼쪽으로 도세요.', myanmar: 'ဘယ်ဘက်ကို ကွေ့ပါ', english: 'Turn left' },
        { korean: '오른쪽으로 가세요.', myanmar: 'ညာဘက်ကို သွားပါ', english: 'Go right' },
        { korean: '뒤로 돌아가세요.', myanmar: 'နောက်ကို ပြန်လှည့်ပါ', english: 'Go back' },
        { korean: '길을 건너세요.', myanmar: 'လမ်းကူးပါ', english: 'Cross the street' },
        { korean: '신호등이 보일 거예요.', myanmar: 'မီးပွိုင့် တွေ့ပါလိမ့်မယ်', english: 'You will see a traffic light' },
        { korean: '코너를 도세요.', myanmar: 'ထောင့်ချိုးကို ကွေ့လိုက်ပါ', english: 'Turn the corner' },
        { korean: '바로 저기예요.', myanmar: 'ဟိုနားလေးတင်ပါ (ချက်ချင်းရောက်မယ်)', english: 'It is right over there' },
        
        // --- Distance & Time ---
        { korean: '얼마나 걸려요?', myanmar: 'ဘယ်လောက် ကြာမလဲ', english: 'How long does it take?' },
        { korean: '걸어서 10분 걸려요.', myanmar: 'လမ်းလျှောက်ရင် ၁၀ မိနစ် ကြာမယ်', english: 'It takes 10 minutes on foot' },
        { korean: '차로 30분 정도 걸려요.', myanmar: 'ကားနဲ့ဆို မိနစ် ၃၀ လောက် ကြာမယ်', english: 'It takes about 30 minutes by car' },
        { korean: '여기서 멀어요?', myanmar: 'ဒီကနေ ဝေးလား', english: 'Is it far from here?' },
        { korean: '아니요, 아주 가까워요.', myanmar: 'ဟင့်အင်း၊ အရမ်း နီးပါတယ်', english: 'No, it is very close' },
        { korean: '너무 멀어서 택시를 타야 해요.', myanmar: 'အရမ်းဝေးလို့ တက္ကစီ စီးသွားမှ ရမယ်', english: 'It is too far so you have to take a taxi' },
        
        // --- Public Transport Specifics ---
        { korean: '몇 번 버스를 타야 해요?', myanmar: 'ဘယ်နှပါတ် ဘတ်စ်ကား စီးရမလဲ', english: 'Which bus number should I take?' },
        { korean: '어디서 갈아타야 해요?', myanmar: 'ဘယ်နေရာမှာ (ကား/ရထား) ပြောင်းစီးရမလဲ', english: 'Where do I transfer?' },
        { korean: '다음 정류장에서 내리세요.', myanmar: 'နောက်မှတ်တိုင်မှာ ဆင်းပါ', english: 'Get off at the next stop' },
        { korean: '반대편에서 타셔야 해요.', myanmar: 'ဟိုဘက်ခြမ်း (ဆန့်ကျင်ဘက်) ကနေ စီးရမှာ', english: 'You have to take it from the opposite side' },
        { korean: '출구가 어디예요?', myanmar: 'ထွက်ပေါက် ဘယ်မှာလဲ', english: 'Where is the exit?' },
        { korean: '3번 출구로 나가세요.', myanmar: 'ထွက်ပေါက် ၃ ကနေ ထွက်ပါ', english: 'Go out exit 3' },
        { korean: '엘리베이터는 저쪽에 있어요.', myanmar: 'ဓာတ်လှေကားက ဟိုဘက်မှာ ရှိပါတယ်', english: 'The elevator is over there' },
        
        // --- Landmarks ---
        { korean: '은행 옆에 있어요.', myanmar: 'ဘဏ် ဘေးမှာ ရှိတယ်', english: 'It is next to the bank' },
        { korean: '편의점 맞은편이에요.', myanmar: 'စတိုးဆိုင် (Convenience store) မျက်နှာချင်းဆိုင်ပါ', english: 'It is across from the convenience store' },
        { korean: '병원 뒤쪽에 있어요.', myanmar: 'ဆေးရုံ နောက်ဘက်မှာ ရှိတယ်', english: 'It is behind the hospital' },
        { korean: '2층으로 올라가세요.', myanmar: '၂ ထပ်ကို တက်သွားပါ', english: 'Go up to the 2nd floor' },
        { korean: '지하 1층에 있어요.', myanmar: 'မြေအောက်ထပ် (B1) မှာ ရှိတယ်', english: 'It is on the basement 1st floor' },
        { korean: '찾기 쉬워요.', myanmar: 'ရှာရ လွယ်ပါတယ်', english: 'It is easy to find' },
        { korean: '도착했습니다.', myanmar: 'ရောက်ပါပြီ', english: 'We have arrived' },
      ],
'time-numbers': [
  // --- Asking & Telling Time ---
  { korean: '지금 몇 시예요?', myanmar: 'အခု ဘယ်နာရီ ရှိပြီလဲ', english: 'What time is it now?' },
  { korean: '오후 2시예요.', myanmar: 'နေ့လည် ၂ နာရီပါ', english: 'It is 2 PM' },
  { korean: '3시 30분(반)이에요.', myanmar: '၃ နာရီ ခွဲပါပြီ', english: 'It is 3:30 (half past 3)' },
  { korean: '10분 전이에요.', myanmar: '၁၀ မိနစ် လိုသေးတယ်', english: 'It is 10 minutes to' },
  { korean: '정각 9시입니다.', myanmar: '၉ နာရီ တိတိပါ', english: 'It is 9 o\'clock sharp' },
  { korean: '시간이 얼마나 남았어요?', myanmar: 'အချိန် ဘယ်လောက် ကျန်သေးလဲ', english: 'How much time is left?' },
  { korean: '시간이 없어요.', myanmar: 'အချိန် မရှိတော့ဘူး', english: 'I don’t have time' },
  { korean: '벌써 시간이 이렇게 됐네요.', myanmar: 'အချိန်တောင် ဒီလိုဖြစ်သွားပြီပဲ (အချိန်ကုန်တာ မြန်လိုက်တာ)', english: 'It is already this time' },
  { korean: '약속 시간이 언제예요?', myanmar: 'ချိန်းထားတဲ့အချိန်က ဘယ်တော့လဲ', english: 'When is the appointment time?' },
  { korean: '잠깐 시간 되세요?', myanmar: 'အချိန် ခဏလောက် ရမလား', english: 'Do you have a moment?' },

  // --- Days & Dates ---
  { korean: '오늘이 며칠이에요?', myanmar: 'ဒီနေ့ ဘယ်နှရက်နေ့လဲ', english: 'What is the date today?' },
  { korean: '오늘은 12월 25일이에요.', myanmar: 'ဒီနေ့က ဒီဇင်ဘာ ၂၅ ရက်နေ့ပါ', english: 'Today is December 25th' },
  { korean: '무슨 요일이에요?', myanmar: 'ဘာနေ့လဲ (တနင်္လာ၊ အင်္ဂါ...)', english: 'What day of the week is it?' },
  { korean: '월요일이에요.', myanmar: 'တနင်္လာနေ့ပါ', english: 'It is Monday' },
  { korean: '주말에 뭐 해요?', myanmar: 'ပိတ်ရက်မှာ ဘာလုပ်မလဲ', english: 'What are you doing on the weekend?' },
  { korean: '평일에는 바빠요.', myanmar: 'ကြားရက်တွေမှာ အလုပ်ရှုပ်တယ်', english: 'I am busy on weekdays' },
  { korean: '생일이 언제예요?', myanmar: 'မွေးနေ့ ဘယ်တော့လဲ', english: 'When is your birthday?' },
  { korean: '내일모레 만나요.', myanmar: 'သန်ဘက်ခါ တွေ့ကြမယ်', english: 'See you the day after tomorrow' },
  { korean: '어제 학교에 갔어요.', myanmar: 'မနေ့က ကျောင်းသွားခဲ့တယ်', english: 'I went to school yesterday' },
  { korean: '작년에 한국에 왔어요.', myanmar: 'မနှစ်က ကိုရီးယားကို ရောက်တယ်', english: 'I came to Korea last year' },

  // --- Duration & Frequency ---
  { korean: '얼마나 걸려요?', myanmar: 'ဘယ်လောက် ကြာမလဲ', english: 'How long does it take?' },
  { korean: '한 시간 정도 걸려요.', myanmar: 'တစ်နာရီလောက် ကြာမယ်', english: 'It takes about 1 hour' },
  { korean: '잠깐만 기다려 주세요.', myanmar: 'ခဏလောက် စောင့်ပေးပါ', english: 'Please wait a moment' },
  { korean: '매일 운동해요.', myanmar: 'နေ့တိုင်း အားကစား လုပ်တယ်', english: 'I exercise every day' },
  { korean: '가끔 영화를 봐요.', myanmar: 'တစ်ခါတလေ ရုပ်ရှင်ကြည့်တယ်', english: 'I watch movies sometimes' },
  { korean: '일주일에 한 번 가요.', myanmar: 'တစ်ပတ်မှာ တစ်ခေါက် သွားတယ်', english: 'I go once a week' },
  { korean: '하루 종일 잤어요.', myanmar: 'တစ်နေကုန် အိပ်ခဲ့တယ်', english: 'I slept all day' },
  { korean: '아침부터 밤까지 일해요.', myanmar: 'မနက်ကနေ ညအထိ အလုပ်လုပ်တယ်', english: 'I work from morning to night' },

  // --- Numbers & Quantity (Money/Items) ---
  { korean: '이거 얼마예요?', myanmar: 'ဒါ ဘယ်လောက်လဲ', english: 'How much is this?' },
  { korean: '천 원이에요.', myanmar: 'ဝမ် တစ်ထောင်ပါ', english: 'It is 1,000 won' },
  { korean: '만 원입니다.', myanmar: 'ဝမ် တစ်သောင်းပါ', english: 'It is 10,000 won' },
  { korean: '사과 한 개 주세요.', myanmar: 'ပန်းသီး တစ်လုံး ပေးပါ', english: 'Please give me one apple' },
  { korean: '두 명 예약했어요.', myanmar: 'နှစ်ယောက်စာ ဘိုကင်လုပ်ထားပါတယ်', english: 'I reserved for two people' },
  { korean: '세 병 주세요.', myanmar: 'သုံးပုလင်း ပေးပါ', english: 'Please give me three bottles' },
  { korean: '다섯 살이에요.', myanmar: 'ငါးနှစ်ပါ (အသက်)', english: 'I am 5 years old' },
  { korean: '일 번 버스를 타세요.', myanmar: 'နံပါတ် ၁ ဘတ်စ်ကားကို စီးပါ', english: 'Take bus number 1' },
  { korean: '절반만 주세요.', myanmar: 'တစ်ဝက်လောက်ပဲ ပေးပါ', english: 'Please give me only half' },
  { korean: '모두 다 주세요.', myanmar: 'အားလုံး ပေးပါ', english: 'Please give me everything' },
  
  // --- Concepts ---
  { korean: '첫 번째예요.', myanmar: 'ပထမဆုံးပါ', english: 'It is the first' },
  { korean: '두 번째 기회예요.', myanmar: 'ဒုတိယ အခွင့်အရေးပါ', english: 'It is the second chance' },
  { korean: '마지막이에요.', myanmar: 'နောက်ဆုံးပါပဲ', english: 'It is the last' },
  { korean: '조금밖에 없어요.', myanmar: 'နည်းနည်းပဲ ရှိတော့တယ်', english: 'There is only a little left' },
  { korean: '많이 있어요.', myanmar: 'အများကြီး ရှိတယ်', english: 'There is a lot' },
  { korean: '0(영/공)입니다.', myanmar: 'သုည ဖြစ်ပါတယ်', english: 'It is zero' },
  { korean: '비밀번호 네 자리 눌러주세요.', myanmar: 'စကားဝှက် ၄ လုံး နှိပ်ပေးပါ', english: 'Please press the 4-digit password' },
  { korean: '전화번호가 뭐예요?', myanmar: 'ဖုန်းနံပါတ် ဘယ်လောက်လဲ', english: 'What is your phone number?' },
  { korean: '010-1234-5678이에요.', myanmar: '၀၁၀-၁၂၃၄-၅၆၇၈ ပါ', english: 'It is 010-1234-5678' },
  { korean: '나이를 숫자로 적어주세요.', myanmar: 'အသက်ကို ဂဏန်းနဲ့ ရေးပေးပါ', english: 'Please write your age in numbers' },
],

'daily-activities': [
  // --- Morning ---
  { korean: '아침 일찍 일어나요.', myanmar: 'မနက် စောစော ထတယ်', english: 'I wake up early in the morning' },
  { korean: '알람을 꺼요.', myanmar: 'နှိုးစက် ပိတ်တယ်', english: 'I turn off the alarm' },
  { korean: '이불을 개요.', myanmar: 'စောင် ခေါက်တယ်', english: 'I fold the blanket' },
  { korean: '화장실에 가요.', myanmar: 'ရေအိမ် သွားတယ်', english: 'I go to the bathroom' },
  { korean: '세수를 해요.', myanmar: 'မျက်နှာ သစ်တယ်', english: 'I wash my face' },
  { korean: '이를 닦아요 (양치해요).', myanmar: 'သွား တိုက်တယ်', english: 'I brush my teeth' },
  { korean: '머리를 감아요.', myanmar: 'ခေါင်း လျှော်တယ်', english: 'I wash my hair' },
  { korean: '옷을 갈아입어요.', myanmar: 'အဝတ်အစား လဲတယ်', english: 'I change clothes' },
  { korean: '화장을 해요.', myanmar: 'မိတ်ကပ် လိမ်းတယ်', english: 'I put on makeup' },
  { korean: '아침밥을 먹어요.', myanmar: 'မနက်စာ စားတယ်', english: 'I eat breakfast' },

  // --- Commute & Work/School ---
  { korean: '집에서 나와요.', myanmar: 'အိမ်ကနေ ထွက်တယ်', english: 'I leave the house' },
  { korean: '버스를 타고 학교에 가요.', myanmar: 'ဘတ်စ်ကားစီးပြီး ကျောင်းသွားတယ်', english: 'I go to school by bus' },
  { korean: '지하철을 타요.', myanmar: 'မြေအောက်ရထား စီးတယ်', english: 'I take the subway' },
  { korean: '회사에 도착해요.', myanmar: 'ရုံးကို ရောက်တယ်', english: 'I arrive at work' },
  { korean: '수업을 들어요.', myanmar: 'စာသင်ချိန် တက်ရောက်တယ် (အတန်းတက်တယ်)', english: 'I take a class' },
  { korean: '열심히 공부해요.', myanmar: 'ကြိုးကြိုးစားစား စာလုပ်တယ်', english: 'I study hard' },
  { korean: '일을 시작해요.', myanmar: 'အလုပ် စလုပ်တယ်', english: 'I start work' },
  { korean: '점심시간이에요.', myanmar: 'နေ့လည်စာ စားချိန်ပါ', english: 'It is lunch time' },
  { korean: '동료들과 커피를 마셔요.', myanmar: 'အလုပ်ဖော်တွေနဲ့ ကော်ဖီသောက်တယ်', english: 'I drink coffee with colleagues' },
  { korean: '회의를 해요.', myanmar: 'အစည်းအဝေး လုပ်တယ်', english: 'I have a meeting' },

  // --- Evening & Leisure ---
  { korean: '퇴근해요.', myanmar: 'ရုံးဆင်းတယ် (အလုပ်ပြန်တယ်)', english: 'I leave work' },
  { korean: '집에 돌아와요.', myanmar: 'အိမ်ကို ပြန်ရောက်တယ်', english: 'I return home' },
  { korean: '손을 씻어요.', myanmar: 'လက် ဆေးတယ်', english: 'I wash my hands' },
  { korean: '저녁을 준비해요.', myanmar: 'ညစာ ပြင်ဆင်တယ်', english: 'I prepare dinner' },
  { korean: '가족과 저녁을 먹어요.', myanmar: 'မိသားစုနဲ့ ညစာ စားတယ်', english: 'I eat dinner with family' },
  { korean: '설거지를 해요.', myanmar: 'ပန်းကန် ဆေးတယ်', english: 'I wash the dishes' },
  { korean: 'TV를 봐요.', myanmar: 'တီဗီ ကြည့်တယ်', english: 'I watch TV' },
  { korean: '음악을 들어요.', myanmar: 'သီချင်း နားထောင်တယ်', english: 'I listen to music' },
  { korean: '친구와 통화해요.', myanmar: 'သူငယ်ချင်းနဲ့ ဖုန်းပြောတယ်', english: 'I talk on the phone with a friend' },
  { korean: '스마트폰을 해요.', myanmar: 'ဖုန်း သုံးတယ် (ဖုန်းပွတ်တယ်)', english: 'I use my smartphone' },

  // --- Housework & Hygiene ---
  { korean: '방을 청소해요.', myanmar: 'အခန်း သန့်ရှင်းရေးလုပ်တယ်', english: 'I clean the room' },
  { korean: '빨래를 해요.', myanmar: 'အဝတ် လျှော်တယ်', english: 'I do the laundry' },
  { korean: '쓰레기를 버려요.', myanmar: 'အမှိုက် ပစ်တယ်', english: 'I throw away the trash' },
  { korean: '강아지를 산책시켜요.', myanmar: 'ခွေး လမ်းလျှောက်ထွက်တယ်', english: 'I walk the dog' },
  { korean: '장을 보러 가요.', myanmar: 'စျေးဝယ်ထွက်တယ် (ဟင်းချက်စရာ)', english: 'I go grocery shopping' },
  { korean: '샤워를 해요.', myanmar: 'ရေချိုးတယ်', english: 'I take a shower' },
  { korean: '일기를 써요.', myanmar: 'ဒိုင်ယာရီ ရေးတယ်', english: 'I write a diary' },
  { korean: '내일 준비를 해요.', myanmar: 'မနက်ဖြန်အတွက် ပြင်ဆင်တယ်', english: 'I prepare for tomorrow' },
  { korean: '불을 꺼요.', myanmar: 'မီး ပိတ်တယ်', english: 'I turn off the light' },
  { korean: '잠을 자요.', myanmar: 'အိပ်တယ်', english: 'I go to sleep' },
],

weather: [
  // --- Current Conditions ---
  { korean: '오늘 날씨 어때요?', myanmar: 'ဒီနေ့ ရာသီဥတု ဘယ်လိုလဲ', english: 'How is the weather today?' },
  { korean: '날씨가 정말 좋아요.', myanmar: 'ရာသီဥတု တကယ် ကောင်းတယ်', english: 'The weather is really good' },
  { korean: '날씨가 흐려요.', myanmar: 'မိုးအုံ့နေတယ် (တိမ်ထူတယ်)', english: 'It is cloudy/overcast' },
  { korean: '비가 오고 있어요.', myanmar: 'မိုးရွာနေတယ်', english: 'It is raining' },
  { korean: '눈이 내려요.', myanmar: 'နှင်းကျနေတယ်', english: 'It is snowing' },
  { korean: '바람이 많이 불어요.', myanmar: 'လေ တော်တော်တိုက်တယ်', english: 'The wind is blowing a lot' },
  { korean: '안개가 꼈어요.', myanmar: 'မြူဆိုင်းနေတယ်', english: 'It is foggy' },
  { korean: '해가 쨍쨍해요.', myanmar: 'နေသာတယ် (နေပူတယ်)', english: 'It is sunny/bright' },
  { korean: '습도가 높아요.', myanmar: 'စိုထိုင်းဆ များတယ် (အိုက်တယ်)', english: 'The humidity is high' },
  { korean: '건조해요.', myanmar: 'ခြောက်သွေ့တယ်', english: 'It is dry' },

  // --- Temperature ---
  { korean: '너무 더워요.', myanmar: 'အရမ်း ပူတယ်', english: 'It is too hot' },
  { korean: '너무 추워요.', myanmar: 'အရမ်း အေးတယ်', english: 'It is too cold' },
  { korean: '시원해요.', myanmar: 'အေးမြတယ် (နေလို့ကောင်းတယ်)', english: 'It is cool/refreshing' },
  { korean: '따뜻해요.', myanmar: 'နွေးထွေးတယ်', english: 'It is warm' },
  { korean: '쌀쌀해요.', myanmar: 'စိမ့်ပြီး အေးတယ်', english: 'It is chilly' },
  { korean: '기온이 몇 도예요?', myanmar: 'အပူချိန် ဘယ်လောက်လဲ', english: 'What is the temperature?' },
  { korean: '영하 10도예요.', myanmar: 'အနုတ် ၁၀ ဒီဂရီပါ', english: 'It is minus 10 degrees' },
  { korean: '일교차가 커요.', myanmar: 'နေ့နဲ့ည အပူချိန်ကွာခြားမှု ကြီးတယ်', english: 'The daily temperature range is large' },
  { korean: '땀이 많이 나요.', myanmar: 'ချွေး အများကြီး ထွက်တယ်', english: 'I am sweating a lot' },
  { korean: '얼어 죽을 것 같아요.', myanmar: 'အေးလွန်းလို့ သေတော့မယ်', english: 'It is freezing to death' },

  // --- Seasons ---
  { korean: '봄이 왔어요.', myanmar: 'နွေဦး ရောက်လာပြီ', english: 'Spring has come' },
  { korean: '여름을 좋아해요.', myanmar: 'နွေရာသီကို ကြိုက်တယ်', english: 'I like summer' },
  { korean: '가을이라서 시원해요.', myanmar: 'ဆောင်းဦးမို့လို့ အေးမြတယ်', english: 'It is cool because it is autumn' },
  { korean: '겨울은 너무 추워요.', myanmar: 'ဆောင်းရာသီက အရမ်း အေးတယ်', english: 'Winter is too cold' },
  { korean: '장마철이에요.', myanmar: 'မိုးရာသီပါ', english: 'It is the rainy season' },
  { korean: '벚꽃이 피었어요.', myanmar: 'ချယ်ရီပန်းတွေ ပွင့်နေပြီ', english: 'Cherry blossoms have bloomed' },
  { korean: '단풍이 예뻐요.', myanmar: 'သစ်ရွက်ကြွေတာ လှတယ်', english: 'Autumn leaves are pretty' },
  { korean: '눈사람을 만들어요.', myanmar: 'နှင်းလူရုပ် လုပ်ကြမယ်', english: 'Let’s make a snowman' },

  // --- Forecast & Preparation ---
  { korean: '내일 날씨는 어떻대요?', myanmar: 'မနက်ဖြန် ရာသီဥတု ဘယ်လိုနေမလဲ (သူများပြောတာ)', english: 'What does the forecast say for tomorrow?' },
  { korean: '우산을 챙기세요.', myanmar: 'ထီး ယူသွားပါ', english: 'Please take an umbrella' },
  { korean: '비가 그쳤어요.', myanmar: 'မိုးတိတ်သွားပြီ', english: 'The rain stopped' },
  { korean: '태풍이 오고 있어요.', myanmar: 'တိုင်ဖွန်းမုန်တိုင်း လာနေတယ်', english: 'A typhoon is coming' },
  { korean: '미세먼지가 심해요.', myanmar: 'ဖုန်မှုန့် (လေထုညစ်ညမ်းမှု) ဆိုးရွားတယ်', english: 'Fine dust is bad' },
  { korean: '마스크를 쓰세요.', myanmar: 'Mask တပ်ပါ', english: 'Please wear a mask' },
  { korean: '옷을 따뜻하게 입으세요.', myanmar: 'အဝတ် နွေးနွေးထွေးထွေး ဝတ်ပါ', english: 'Please dress warmly' },
  { korean: '선크림을 바르세요.', myanmar: 'နေလောင်ကာခရင်မ် လိမ်းပါ', english: 'Please apply sunscreen' },
  { korean: '날씨가 변덕스러워요.', myanmar: 'ရာသီဥတုက ဖောက်ပြန်နေတယ် (အပြောင်းအလဲမြန်တယ်)', english: 'The weather is fickle' },
  { korean: '소나기가 올 거예요.', myanmar: 'မိုး ရုတ်တရက် ရွာလိမ့်မယ်', english: 'There will be a shower' },
  { korean: '야외 활동하기 좋은 날씨예요.', myanmar: 'အပြင်ထွက် လှုပ်ရှားဖို့ ကောင်းတဲ့ ရာသီဥတုပဲ', english: 'It is good weather for outdoor activities' },
  { korean: '집에 있는 게 좋겠어요.', myanmar: 'အိမ်မှာ နေတာ ကောင်းမယ်', english: 'It would be better to stay home' },
],

health: [
  // --- Symptoms ---
  { korean: '어디가 아프세요?', myanmar: 'ဘယ်နား နေမကောင်းတာလဲ', english: 'Where does it hurt?' },
  { korean: '머리가 아파요 (두통).', myanmar: 'ခေါင်းကိုက်တယ်', english: 'I have a headache' },
  { korean: '배가 아파요 (복통).', myanmar: 'ဗိုက်နာတယ်', english: 'I have a stomachache' },
  { korean: '열이 많이 나요.', myanmar: 'ကိုယ်ပူချိန် အရမ်းတက်နေတယ် (ဖျားနေတယ်)', english: 'I have a high fever' },
  { korean: '목이 아파요.', myanmar: 'လည်ချောင်း နာတယ်', english: 'I have a sore throat' },
  { korean: '기침을 계속 해요.', myanmar: 'ချောင်း အဆက်မပြတ် ဆိုးနေတယ်', english: 'I keep coughing' },
  { korean: '콧물이 나요.', myanmar: 'နှာရည် ယိုတယ်', english: 'I have a runny nose' },
  { korean: '속이 안 좋아요 (체했어요).', myanmar: 'ရင်ခေါင်းထဲ မကောင်းဘူး (အစာမကြေဘူး)', english: 'My stomach feels upset / I have indigestion' },
  { korean: '토할 것 같아요.', myanmar: 'အန်ချင်သလို ဖြစ်နေတယ်', english: 'I feel like vomiting' },
  { korean: '몸살이 났어요.', myanmar: 'ဖျားချင်သလိုလို လက်တွေခြေတွေ ကိုက်ခဲနေတယ်', english: 'I have body aches / fatigue' },
  
  // --- Injuries ---
  { korean: '다쳤어요.', myanmar: 'ထိခိုက်မိသွားတယ်', english: 'I got injured' },
  { korean: '피가 나요.', myanmar: 'သွေး ထွက်နေတယ်', english: 'It is bleeding' },
  { korean: '다리가 부러졌어요.', myanmar: 'ခြေထောက် ကျိုးသွားတယ်', english: 'My leg is broken' },
  { korean: '발목을 삐었어요.', myanmar: 'ခြေမျက်စိ ခေါက်သွားတယ်', english: 'I sprained my ankle' },
  { korean: '손을 데었어요.', myanmar: 'လက် မီးလောင်သွားတယ် (အပူလောင်တယ်)', english: 'I burned my hand' },
  { korean: '상처가 났어요.', myanmar: 'ဒဏ်ရာ ရသွားတယ်', english: 'I got a wound' },
  { korean: '피부가 가려워요.', myanmar: 'အသား ယားတယ်', english: 'My skin is itchy' },
  
  // --- Hospital & Pharmacy ---
  { korean: '병원에 가야 해요.', myanmar: 'ဆေးရုံ သွားရမယ်', english: 'I need to go to the hospital' },
  { korean: '약국이 어디예요?', myanmar: 'ဆေးဆိုင် ဘယ်မှာလဲ', english: 'Where is the pharmacy?' },
  { korean: '감기약 주세요.', myanmar: 'အအေးမိ ပျောက်ဆေး ပေးပါ', english: 'Please give me cold medicine' },
  { korean: '진통제 있나요?', myanmar: 'အကိုက်အခဲပျောက်ဆေး ရှိလား', english: 'Do you have painkillers?' },
  { korean: '이 약은 언제 먹나요?', myanmar: 'ဒီဆေးက ဘယ်အချိန် သောက်ရမလဲ', english: 'When should I take this medicine?' },
  { korean: '식후 30분에 드세요.', myanmar: 'ထမင်းစားပြီး မိနစ် ၃၀ ကြာရင် သောက်ပါ', english: 'Take it 30 minutes after a meal' },
  { korean: '주사를 맞아야 해요.', myanmar: 'ဆေးထိုးရမယ်', english: 'You need to get an injection' },
  { korean: '의사 선생님을 만나고 싶어요.', myanmar: 'ဆရာဝန်နဲ့ တွေ့ချင်ပါတယ်', english: 'I want to see a doctor' },
  { korean: '건강 보험증 있어요?', myanmar: 'ကျန်းမာရေးအာမခံကတ် ရှိလား', english: 'Do you have health insurance?' },
  
  // --- Mental & General Condition ---
  { korean: '너무 피곤해요.', myanmar: 'အရမ်း ပင်ပန်းတယ်', english: 'I am too tired' },
  { korean: '스트레스를 많이 받아요.', myanmar: 'စိတ်ဖိစီးမှုတွေ အရမ်းများနေတယ်', english: 'I am under a lot of stress' },
  { korean: '잠을 잘 못 잤어요.', myanmar: 'ကောင်းကောင်း အိပ်မပျော်ဘူး', english: 'I couldn’t sleep well' },
  { korean: '입맛이 없어요.', myanmar: 'စားချင်သောက်ချင်စိတ် မရှိဘူး', english: 'I have no appetite' },
  { korean: '살이 좀 찐 것 같아요.', myanmar: 'လူ နည်းနည်း ဝလာတယ် ထင်တယ်', english: 'I think I gained some weight' },
  { korean: '다이어트 중이에요.', myanmar: 'ဝိတ်ချနေတယ်', english: 'I am on a diet' },
  { korean: '운동이 필요해요.', myanmar: 'လေ့ကျင့်ခန်းလုပ်ဖို့ လိုတယ်', english: 'I need exercise' },
  { korean: '건강 검진을 받았어요.', myanmar: 'ကျန်းမာရေး စစ်ဆေးမှု ခံယူခဲ့တယ်', english: 'I got a health checkup' },
  { korean: '알레르기가 있나요?', myanmar: 'ဓာတ်မတည့်တာ ရှိလား', english: 'Do you have allergies?' },
  { korean: '건강하세요.', myanmar: 'ကျန်းမာပါစေ', english: 'Stay healthy' },
  { korean: '쾌차하세요 (빨리 나으세요).', myanmar: 'အမြန်ဆုံး သက်သာပါစေ', english: 'Get well soon' },
  { korean: '임신했어요.', myanmar: 'ကိုယ်ဝန်ရှိနေတယ်', english: 'I am pregnant' },
  { korean: '생리통이 심해요.', myanmar: 'ရာသီလာစဉ် ကိုက်ခဲမှု ပြင်းထန်တယ်', english: 'I have severe period cramps' },
],

emergency: [
  // --- Calling for Help ---
  { korean: '도와주세요!', myanmar: 'ကူညီကြပါ!', english: 'Help me!' },
  { korean: '사람 살려요!', myanmar: 'ကယ်ကြပါဦး!', english: 'Save me! (Help!)' },
  { korean: '경찰을 불러주세요.', myanmar: 'ရဲ ခေါ်ပေးပါ', english: 'Please call the police' },
  { korean: '1 1 9에 전화해 주세요.', myanmar: '၁၁၉ (အရေးပေါ်ဖုန်း) ကို ဆက်ပေးပါ', english: 'Please call 119' },
  { korean: '구급차가 필요해요.', myanmar: 'လူနာတင်ယာဉ် လိုအပ်ပါတယ်', english: 'I need an ambulance' },
  { korean: '여기 응급 환자가 있어요.', myanmar: 'ဒီမှာ အရေးပေါ်လူနာ ရှိတယ်', english: 'There is an emergency patient here' },
  { korean: '도와줄 수 있나요?', myanmar: 'ကူညီပေးလို့ ရမလား', english: 'Can you help me?' },
  
  // --- Crimes & Loss ---
  { korean: '도둑이야!', myanmar: 'သူခိုး!', english: 'Thief!' },
  { korean: '지갑을 도둑맞았어요.', myanmar: 'ပိုက်ဆံအိတ် ခိုးခံလိုက်ရတယ်', english: 'My wallet was stolen' },
  { korean: '여권을 잃어버렸어요.', myanmar: 'ပတ်စပို့ ပျောက်သွားတယ်', english: 'I lost my passport' },
  { korean: '핸드폰을 분실했어요.', myanmar: 'ဖုန်း ပျောက်သွားတယ်', english: 'I lost my phone' },
  { korean: '가방을 놓고 내렸어요.', myanmar: 'အိတ် ကျန်ခဲ့တယ် (ကားပေါ်မှာ)', english: 'I left my bag behind (getting off)' },
  { korean: '저 사람이 저를 때렸어요.', myanmar: 'ဟိုလူ ကျွန်တော့်ကို ရိုက်တယ်', english: 'That person hit me' },
  { korean: '스토킹을 당하고 있어요.', myanmar: 'နောက်ယောင်ခံ လိုက်နေတာ ခံရတယ်', english: 'I am being stalked' },
  { korean: '사기를 당했어요.', myanmar: 'လိမ်ခံလိုက်ရတယ်', english: 'I was scammed' },
  
  // --- Accidents & Danger ---
  { korean: '불이 났어요!', myanmar: 'မီးလောင်နေတယ်!', english: 'There is a fire!' },
  { korean: '교통사고가 났어요.', myanmar: 'ယာဉ်တိုက်မှု ဖြစ်သွားတယ်', english: 'There was a traffic accident' },
  { korean: '차에 치였어요.', myanmar: 'ကားတိုက်ခံရတယ်', english: 'I was hit by a car' },
  { korean: '사람이 쓰러졌어요.', myanmar: 'လူတစ်ယောက် လဲကျသွားတယ်', english: 'Someone collapsed' },
  { korean: '숨을 안 쉬어요.', myanmar: 'အသက် မရှူတော့ဘူး', english: 'He/she is not breathing' },
  { korean: '피를 많이 흘려요.', myanmar: 'သွေး အများကြီး ထွက်နေတယ်', english: 'He/she is bleeding a lot' },
  { korean: '위험해요!', myanmar: 'အန္တရာယ်ရှိတယ်!', english: 'It is dangerous!' },
  { korean: '조심하세요!', myanmar: 'သတိထားပါ!', english: 'Watch out!' },
  { korean: '멈추세요!', myanmar: 'ရပ်လိုက်!', english: 'Stop!' },
  { korean: '도망가세요!', myanmar: 'ထွက်ပြေး!', english: 'Run away!' },
  
  // --- Being Lost ---
  { korean: '길을 잃었어요.', myanmar: 'လမ်းပျောက်သွားလို့ပါ', english: 'I am lost' },
  { korean: '여기가 어딘지 모르겠어요.', myanmar: 'ဒီနေရာ ဘယ်နားလဲ မသိတော့ဘူး', english: 'I don’t know where this is' },
  { korean: '호텔로 가는 길을 잊어버렸어요.', myanmar: 'ဟိုတယ်ပြန်တဲ့လမ်း မေ့သွားတယ်', english: 'I forgot the way to the hotel' },
  { korean: '미아 보호소가 어디예요?', myanmar: 'ပျောက်ဆုံးကလေး ထိန်းသိမ်းရေးစခန်း ဘယ်မှာလဲ', english: 'Where is the missing child center?' },
  { korean: '부모님을 잃어버렸어요.', myanmar: 'မိဘတွေနဲ့ လူကွဲသွားတယ်', english: 'I lost my parents' },
  { korean: '친구와 헤어졌어요.', myanmar: 'သူငယ်ချင်းနဲ့ လူကွဲသွားတယ်', english: 'I got separated from my friend' },
  
  // --- Urgent Requests ---
  { korean: '대사관에 전화해 주세요.', myanmar: 'သံရုံးကို ဖုန်းဆက်ပေးပါ', english: 'Please call the embassy' },
  { korean: '통역이 필요해요.', myanmar: 'စကားပြန် လိုအပ်ပါတယ်', english: 'I need an interpreter' },
  { korean: '한국말을 못 해요.', myanmar: 'ကိုရီးယားစကား မပြောတတ်ဘူး', english: 'I can’t speak Korean' },
  { korean: '가족에게 연락해 주세요.', myanmar: 'မိသားစုဆီ ဆက်သွယ်ပေးပါ', english: 'Please contact my family' },
  { korean: '빨리 와주세요.', myanmar: 'မြန်မြန် လာပေးပါ', english: 'Please come quickly' },
  { korean: '진정하세요.', myanmar: 'စိတ်အေးအေးထားပါ', english: 'Please calm down' },
  { korean: '비상구는 이쪽이에요.', myanmar: 'အရေးပေါ်ထွက်ပေါက်က ဒီဘက်မှာပါ', english: 'The emergency exit is this way' },
  { korean: '안전벨트를 매세요.', myanmar: 'ခါးပတ်ပတ်ထားပါ', english: 'Please fasten your seatbelt' },
  { korean: '지진이에요.', myanmar: 'ငလျင်လှုပ်နေတယ်', english: 'It is an earthquake' },
],

};

export function ConversationDetailScreen({ route, navigation }: { route: any; navigation: any }) {
  const { categoryId, categoryTitle } = route.params;
  const C = useThemedColors();
  const { settings } = useSettings();
  const [speakingIndex, setSpeakingIndex] = React.useState<number | null>(null);

  const phrases = CONVERSATION_DATA[categoryId] || [];

  const playPhrase = async (phrase: ConversationPhrase, index: number) => {
    if (speakingIndex === index) {
      await Speech.stop();
      setSpeakingIndex(null);
      return;
    }

    if (speakingIndex !== null) {
      await Speech.stop();
    }

    try {
      setSpeakingIndex(index);
      await Speech.speak(phrase.korean, {
        language: 'ko-KR',
        pitch: 0.5,
        rate: getVoiceSpeedRate(settings.voiceSpeed),
        onDone: () => setSpeakingIndex(null),
        onStopped: () => setSpeakingIndex(null),
        onError: () => setSpeakingIndex(null),
      });
    } catch (error) {
      console.error('Error playing phrase:', error);
      setSpeakingIndex(null);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView 
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <Pressable
          onPress={() => navigation.navigate('Conversation')}
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
          <Text style={{ color: C.textPrimary, fontSize: 16, fontWeight: '600' }}>
            {settings.uiLanguage === 'myanmar' ? 'နောက်သို့' : settings.uiLanguage === 'korean' ? '뒤로' : 'Back'}
          </Text>
        </Pressable>

        {/* Phrases */}
        {phrases.length > 0 ? (
          <View style={{ gap: 16, width: '100%' }}>
            {phrases.map((phrase, index) => {
              const isSpeaking = speakingIndex === index;
              return (
                <View 
                  key={index}
                  style={[
                    styles.phraseCard,
                    { 
                      backgroundColor: C.surface,
                      borderColor: C.border,
                    }
                  ]}
                >
                  <View style={styles.phraseHeader}>
                    <Text style={[styles.koreanText, { color: C.textPrimary }]}>
                      {phrase.korean}
                    </Text>
                    <Pressable
                      onPress={() => playPhrase(phrase, index)}
                      style={({ pressed }) => [
                        styles.speakerButton,
                        isSpeaking && { backgroundColor: C.brand + '20' },
                        pressed && { opacity: 0.7 }
                      ]}
                    >
                      <Ionicons 
                        name={isSpeaking ? "volume-high" : "volume-high-outline"}
                        size={20}
                        color={isSpeaking ? C.brand : C.textSecondary}
                      />
                    </Pressable>
                  </View>
                  <Text 
                    allowFontScaling={false}
                    numberOfLines={0}
                    style={[
                      styles.myanmarText,
                      { 
                        color: C.textSecondary,
                        fontFamily: 'NotoSansMyanmar_400Regular',
                      }
                    ]}
                  >
                    {phrase.myanmar}
                  </Text>
                  <Text style={[styles.englishText, { color: C.textTertiary }]}>
                    {phrase.english}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: C.textSecondary }]}>
              {settings.uiLanguage === 'myanmar' 
                ? 'အကြောင်းအရာများ မရှိသေးပါ'
                : settings.uiLanguage === 'korean'
                ? '내용이 아직 없습니다'
                : 'No content available yet'}
            </Text>
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  phraseCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
    width: '100%',
    overflow: 'visible',
  },
  phraseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
    width: '100%',
  },
  koreanText: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    flexShrink: 1,
  },
  speakerButton: {
    padding: 6,
    borderRadius: 16,
    marginLeft: 8,
    flexShrink: 0,
  },
  myanmarText: {
    fontSize: 15,
    lineHeight: 28,
    marginTop: 4,
  },
  englishText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 4,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

