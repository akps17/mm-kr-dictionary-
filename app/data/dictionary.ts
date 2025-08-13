import type { DictionaryEntry } from '../types/dictionary';

// Dictionary entries - includes both initial data and approved user submissions
// Last updated: 8/11/2025, 6:08:29 AM
// Total entries: 1164 (1000 basic level ㄱ consonant words + existing entries)
export const dictionaryEntries: DictionaryEntry[] = [
  { id: '1', korean: '가족', myanmar: 'မိသားစု', english: 'Family', pos: 'noun', level: undefined, examples: [] },
  { id: '2', korean: '감사합니다', myanmar: 'ကျေးဇူးတင်ပါတယ်', english: 'Thank you', pos: 'interjection', level: undefined, examples: [] },
  { id: '3', korean: '네', myanmar: 'ဟုတ်ကဲ့', english: 'Yes', pos: 'interjection', level: undefined, examples: [] },
  { id: '4', korean: '동사', myanmar: 'ကြိယာ', english: 'Verb', pos: 'verb', level: undefined, examples: [] },
  { id: '5', korean: '물', myanmar: 'ရေ', english: 'Water', pos: 'noun', level: undefined, examples: [] },
  { id: '6', korean: '사랑', myanmar: 'ချစ်ခြင်း', english: 'Love', pos: 'noun', level: undefined, examples: [] },
  { id: '7', korean: '아니요', myanmar: 'မဟုတ်ဘူး', english: 'No', pos: 'interjection', level: undefined, examples: [] },
  { id: '8', korean: '안녕하세요', myanmar: 'မင်္ဂလာပါ', english: 'Hello', pos: 'interjection', level: undefined, examples: [] },
  { id: '9', korean: '음식', myanmar: 'အစားအသောက်', english: 'Food', pos: 'noun', level: undefined, examples: [] },
  { id: '10', korean: '친구', myanmar: 'သူငယ်ချင်း', english: 'Friend', pos: 'noun', level: undefined, examples: [] },
  { id: '11', korean: '테스트', myanmar: 'စမ်းသပ်ချက်', english: 'Test', pos: 'noun', level: undefined, examples: [] },
  { id: '12', korean: '학교', myanmar: 'ကျောင်း', english: 'School', pos: 'noun', level: undefined, examples: [] },
  
  
  // ㄱ words (alphabetically arranged)

  { id: '13', korean: '가게', myanmar: 'ဆိုင်', english: 'Store', pos: 'noun', level: 'basic', examples: [
    { korean: '가게에서 물건을 샀어요.', myanmar: 'ဆိုင်မှာ ပစ္စည်းတွေ ဝယ်ခဲ့တယ်။', english: 'I bought things at the store.' }
  ]},
  { id: '14', korean: '가격', myanmar: 'စျေးနှုန်း', english: 'Price', pos: 'noun', level: 'basic', examples: [
    { korean: '이 책의 가격은 얼마예요?', myanmar: 'ဒီစာအုပ်ရဲ့ စျေးနှုန်းက ဘယ်လောက်လဲ?', english: 'What is the price of this book?' }
  ]},
  { id: '15', korean: '가끔', myanmar: 'တစ်ခါတစ်ရံ', english: 'Sometimes', pos: 'adverb', level: 'basic', examples: [
    { korean: '가끔 영화를 봅니다.', myanmar: 'တစ်ခါတစ်ရံ ရုပ်ရှင်ကြည့်တယ်။', english: 'I sometimes watch movies.' }
  ]},
  { id: '16', korean: '가능하다', myanmar: 'ဖြစ်နိုင်သည်', english: 'To be possible', pos: 'adjective', level: 'intermediate', examples: [
    { korean: '내일 만나는 것이 가능해요?', myanmar: 'မနက်ဖြန် တွေ့ရတာ ဖြစ်နိုင်လား?', english: 'Is it possible to meet tomorrow?' }
  ]},
  { id: '17', korean: '가득하다', myanmar: 'ပြည့်နေသည်', english: 'To be full', pos: 'adjective', level: 'intermediate', examples: [
    { korean: '가방이 책으로 가득해요.', myanmar: 'အိတ်ထဲမှာ စာအုပ်တွေ ပြည့်နေတယ်။', english: 'The bag is full of books.' }
  ]},
  { id: '18', korean: '가르치다', myanmar: 'သင်ကြားပေးသည်', english: 'To teach', pos: 'verb', level: 'basic', examples: [
    { korean: '선생님이 학생들을 가르쳐요.', myanmar: 'ဆရာက ကျောင်းသားတွေကို သင်ကြားပေးတယ်။', english: 'The teacher teaches the students.' }
  ]},
  { id: '19', korean: '가방', myanmar: 'အိတ်', english: 'Bag', pos: 'noun', level: 'basic', examples: [
    { korean: '새 가방을 샀어요.', myanmar: 'အိတ်အသစ် ဝယ်ခဲ့တယ်။', english: 'I bought a new bag.' }
  ]},
  { id: '20', korean: '가볍다', myanmar: 'ပေါ့သည်', english: 'To be light', pos: 'adjective', level: 'basic', examples: [
    { korean: '이 상자는 가벼워요.', myanmar: 'ဒီသေတ္တာက ပေါ့တယ်။', english: 'This box is light.' }
  ]},
  { id: '21', korean: '가수', myanmar: 'အဆိုတော်', english: 'Singer', pos: 'noun', level: 'basic', examples: [
    { korean: '유명한 가수가 되고 싶어요.', myanmar: 'နာမည်ကြီး အဆိုတော် ဖြစ်ချင်တယ်။', english: 'I want to become a famous singer.' }
  ]},
  { id: '22', korean: '가위', myanmar: 'ကတ်ကြေး', english: 'Scissors', pos: 'noun', level: 'basic', examples: [
    { korean: '가위로 종이를 잘랐어요.', myanmar: 'ကတ်ကြေးနဲ့ စာရွက်ကို ဖြတ်ခဲ့တယ်။', english: 'I cut the paper with scissors.' }
  ]},
  { id: '23', korean: '가을', myanmar: 'ဆောင်းဦးရာသီ', english: 'Autumn', pos: 'noun', level: 'basic', examples: [
    { korean: '가을에 단풍이 아름다워요.', myanmar: 'ဆောင်းဦးရာသီမှာ အရွက်ရောင်တွေ လှတယ်။', english: 'The autumn leaves are beautiful.' }
  ]},
  { id: '24', korean: '가장', myanmar: 'အများဆုံး', english: 'Most', pos: 'adverb', level: 'basic', examples: [
    { korean: '이것이 가장 좋아요.', myanmar: 'ဒါက အများဆုံး ကောင်းတယ်။', english: 'This is the best.' }
  ]},
  { id: '25', korean: '가지다', myanmar: 'ပိုင်ဆိုင်သည်', english: 'To have', pos: 'verb', level: 'basic', examples: [
    { korean: '나는 차를 가지고 있어요.', myanmar: 'ကျွန်တော့်မှာ ကား ရှိတယ်။', english: 'I have a car.' }
  ]},
  { id: '26', korean: '간단하다', myanmar: 'ရိုးရှင်းသည်', english: 'To be simple', pos: 'adjective', level: 'intermediate', examples: [
    { korean: '이 문제는 간단해요.', myanmar: 'ဒီပြဿနာက ရိုးရှင်းတယ်။', english: 'This problem is simple.' }
  ]},
  { id: '27', korean: '간호사', myanmar: 'သူနာပြု', english: 'Nurse', pos: 'noun', level: 'basic', examples: [
    { korean: '간호사가 환자를 돌봐요.', myanmar: 'သူနာပြုက လူနာကို ပြုစုတယ်။', english: 'The nurse takes care of the patient.' }
  ]},
  { id: '28', korean: '갈다', myanmar: 'ချွန်သည်', english: 'To sharpen', pos: 'verb', level: 'intermediate', examples: [
    { korean: '연필을 갈아야 해요.', myanmar: 'ခဲတံကို ချွန်ရမယ်။', english: 'I need to sharpen the pencil.' }
  ]},
  { id: '29', korean: '갈색', myanmar: 'ညိုရောင်', english: 'Brown', pos: 'noun', level: 'basic', examples: [
    { korean: '갈색 신발을 신었어요.', myanmar: 'ညိုရောင် ဖိနပ် စီးခဲ့တယ်။', english: 'I wore brown shoes.' }
  ]},
  { id: '30', korean: '감기', myanmar: 'အအေးမိခြင်း', english: 'Cold (illness)', pos: 'noun', level: 'basic', examples: [
    { korean: '감기에 걸렸어요.', myanmar: 'အအေးမိခဲ့တယ်။', english: 'I caught a cold.' }
  ]},
  { id: '31', korean: '감정', myanmar: 'စိတ်ခံစားချက်', english: 'Emotion', pos: 'noun', level: 'intermediate', examples: [
    { korean: '감정을 표현하기 어려워요.', myanmar: 'စိတ်ခံစားချက်ကို ဖော်ပြရတာ ခက်တယ်။', english: 'It is difficult to express emotions.' }
  ]},
  { id: '32', korean: '갑자기', myanmar: 'ရုတ်တရက်', english: 'Suddenly', pos: 'adverb', level: 'intermediate', examples: [
    { korean: '갑자기 비가 왔어요.', myanmar: 'ရုတ်တရက် မိုးရွာခဲ့တယ်။', english: 'It suddenly started raining.' }
  ]},
  { id: '33', korean: '강', myanmar: 'မြစ်', english: 'River', pos: 'noun', level: 'basic', examples: [
    { korean: '강에서 물고기를 잡았어요.', myanmar: 'မြစ်မှာ ငါးတွေ ဖမ်းခဲ့တယ်။', english: 'I caught fish in the river.' }
  ]},
  { id: '34', korean: '강아지', myanmar: 'ခွေးကလေး', english: 'Puppy', pos: 'noun', level: 'basic', examples: [
    { korean: '귀여운 강아지를 봤어요.', myanmar: 'ချစ်စရာ ခွေးကလေး တစ်ကောင် တွေ့ခဲ့တယ်။', english: 'I saw a cute puppy.' }
  ]},
  { id: '35', korean: '강하다', myanmar: 'ခိုင်မာသည်', english: 'To be strong', pos: 'adjective', level: 'basic', examples: [
    { korean: '그는 매우 강해요.', myanmar: 'သူက အရမ်း ခိုင်မာတယ်။', english: 'He is very strong.' }
  ]},
  { id: '36', korean: '같다', myanmar: 'တူညီသည်', english: 'To be same', pos: 'adjective', level: 'basic', examples: [
    { korean: '우리는 같은 학교에 다녀요.', myanmar: 'ကျွန်တော်တို့က တူညီတဲ့ ကျောင်းကို တက်တယ်။', english: 'We go to the same school.' }
  ]},
  { id: '37', korean: '개', myanmar: 'ခွေး', english: 'Dog', pos: 'noun', level: 'basic', examples: [
    { korean: '개가 짖고 있어요.', myanmar: 'ခွေးက ဟောင်နေတယ်။', english: 'The dog is barking.' }
  ]},
  { id: '38', korean: '개미', myanmar: 'ပုရွက်ဆိတ်', english: 'Ant', pos: 'noun', level: 'basic', examples: [
    { korean: '개미가 줄을 서서 걸어가요.', myanmar: 'ပုရွက်ဆိတ်တွေက တန်းစီပြီး လမ်းလျှောက်နေတယ်။', english: 'Ants are walking in a line.' }
  ]},
  { id: '39', korean: '거리', myanmar: 'လမ်း', english: 'Street', pos: 'noun', level: 'basic', examples: [
    { korean: '거리에 사람이 많아요.', myanmar: 'လမ်းမှာ လူတွေ အများကြီး ရှိတယ်။', english: 'There are many people on the street.' }
  ]},
  { id: '40', korean: '거울', myanmar: 'မှန်', english: 'Mirror', pos: 'noun', level: 'basic', examples: [
    { korean: '거울을 보고 머리를 빗었어요.', myanmar: 'မှန်ကြည့်ပြီး ဆံပင်ဖီခဲ့တယ်။', english: 'I looked in the mirror and combed my hair.' }
  ]},
  { id: '41', korean: '걱정하다', myanmar: 'စိုးရိမ်သည်', english: 'To worry', pos: 'verb', level: 'intermediate', examples: [
    { korean: '시험을 걱정하고 있어요.', myanmar: 'စာမေးပွဲကို စိုးရိမ်နေတယ်။', english: 'I am worried about the exam.' }
  ]},
  { id: '42', korean: '걷다', myanmar: 'လမ်းလျှောက်သည်', english: 'To walk', pos: 'verb', level: 'basic', examples: [
    { korean: '공원에서 걸었어요.', myanmar: 'ပန်းခြံမှာ လမ်းလျှောက်ခဲ့တယ်။', english: 'I walked in the park.' }
  ]},
  { id: '43', korean: '게임', myanmar: 'ဂိမ်း', english: 'Game', pos: 'noun', level: 'basic', examples: [
    { korean: '친구와 게임을 했어요.', myanmar: 'သူငယ်ချင်းနဲ့ ဂိမ်းကစားခဲ့တယ်။', english: 'I played a game with my friend.' }
  ]},
  { id: '44', korean: '겨울', myanmar: 'ဆောင်းရာသီ', english: 'Winter', pos: 'noun', level: 'basic', examples: [
    { korean: '겨울에 눈이 와요.', myanmar: 'ဆောင်းရာသီမှာ နှင်းကျတယ်။', english: 'It snows in winter.' }
  ]},
  { id: '45', korean: '결혼하다', myanmar: 'လက်ထပ်သည်', english: 'To marry', pos: 'verb', level: 'intermediate', examples: [
    { korean: '내년에 결혼할 예정이에요.', myanmar: 'လာမယ့်နှစ် လက်ထပ်မယ့် အစီအစဉ် ရှိတယ်။', english: 'I plan to get married next year.' }
  ]},
  { id: '46', korean: '경찰', myanmar: 'ရဲ', english: 'Police', pos: 'noun', level: 'basic', examples: [
    { korean: '경찰이 도둑을 잡았어요.', myanmar: 'ရဲက သူခိုးကို ဖမ်းခဲ့တယ်။', english: 'The police caught the thief.' }
  ]},
  { id: '47', korean: '계절', myanmar: 'ရာသီ', english: 'Season', pos: 'noun', level: 'basic', examples: [
    { korean: '어떤 계절을 좋아해요?', myanmar: 'ဘယ်ရာသီကို ကြိုက်လဲ?', english: 'Which season do you like?' }
  ]},
  { id: '48', korean: '계속하다', myanmar: 'ဆက်လက်လုပ်သည်', english: 'To continue', pos: 'verb', level: 'intermediate', examples: [
    { korean: '공부를 계속해야 해요.', myanmar: 'ပညာသင်ခြင်းကို ဆက်လုပ်ရမယ်။', english: 'I have to continue studying.' }
  ]},
  { id: '49', korean: '고기', myanmar: 'အသား', english: 'Meat', pos: 'noun', level: 'basic', examples: [
    { korean: '고기를 구워서 먹었어요.', myanmar: 'အသားကို ကင်ပြီး စားခဲ့တယ်။', english: 'I grilled and ate meat.' }
  ]},
  { id: '50', korean: '고마워요', myanmar: 'ကျေးဇူးတင်ပါတယ်', english: 'Thank you', pos: 'interjection', level: 'basic', examples: [
    { korean: '도와주셔서 고마워요.', myanmar: 'ကူညီပေးလို့ ကျေးဇူးတင်ပါတယ်။', english: 'Thank you for helping me.' }
  ]},
  { id: '51', korean: '고양이', myanmar: 'ကြောင်', english: 'Cat', pos: 'noun', level: 'basic', examples: [
    { korean: '고양이가 우유를 마셔요.', myanmar: 'ကြောင်က နို့သောက်တယ်။', english: 'The cat drinks milk.' }
  ]},
  { id: '52', korean: '공', myanmar: 'ဘောလုံး', english: 'Ball', pos: 'noun', level: 'basic', examples: [
    { korean: '아이들이 공으로 놀아요.', myanmar: 'ကလေးတွေက ဘောလုံးနဲ့ ကစားတယ်။', english: 'Children play with a ball.' }
  ]},
  { id: '53', korean: '공부', myanmar: 'ပညာသင်ခြင်း', english: 'Study', pos: 'noun', level: 'basic', examples: [
    { korean: '공부가 어려워요.', myanmar: 'ပညာသင်ခြင်းက ခက်တယ်။', english: 'Studying is difficult.' }
  ]},
  { id: '54', korean: '공원', myanmar: 'ပန်းခြံ', english: 'Park', pos: 'noun', level: 'basic', examples: [
    { korean: '공원에서 산책했어요.', myanmar: 'ပန်းခြံမှာ လမ်းလျှောက်ခဲ့တယ်။', english: 'I took a walk in the park.' }
  ]},
  { id: '55', korean: '과일', myanmar: 'သစ်သီး', english: 'Fruit', pos: 'noun', level: 'basic', examples: [
    { korean: '신선한 과일을 먹어요.', myanmar: 'လတ်ဆတ်တဲ့ သစ်သီးတွေ စားတယ်။', english: 'I eat fresh fruit.' }
  ]},
  { id: '56', korean: '교실', myanmar: 'စာသင်ခန်း', english: 'Classroom', pos: 'noun', level: 'basic', examples: [
    { korean: '교실에 학생이 많아요.', myanmar: 'စာသင်ခန်းမှာ ကျောင်းသားတွေ အများကြီး ရှိတယ်။', english: 'There are many students in the classroom.' }
  ]},
  { id: '57', korean: '구름', myanmar: 'တိမ်', english: 'Cloud', pos: 'noun', level: 'basic', examples: [
    { korean: '하늘에 구름이 많아요.', myanmar: 'ကောင်းကင်မှာ တိမ်တွေ အများကြီး ရှိတယ်။', english: 'There are many clouds in the sky.' }
  ]},
  { id: '58', korean: '국가', myanmar: 'နိုင်ငံ', english: 'Country', pos: 'noun', level: 'intermediate', examples: [
    { korean: '우리 국가는 아름다워요.', myanmar: 'ကျွန်တော်တို့ နိုင်ငံက လှတယ်။', english: 'Our country is beautiful.' }
  ]},
  { id: '59', korean: '귀', myanmar: 'နား', english: 'Ear', pos: 'noun', level: 'basic', examples: [
    { korean: '귀로 음악을 들어요.', myanmar: 'နားနဲ့ ဂီတကြားတယ်။', english: 'I listen to music with my ears.' }
  ]},
  { id: '60', korean: '그림', myanmar: 'ပုံ', english: 'Picture', pos: 'noun', level: 'basic', examples: [
    { korean: '벽에 그림을 걸었어요.', myanmar: 'နံရံမှာ ပုံကို ဆွဲခဲ့တယ်။', english: 'I hung a picture on the wall.' }
  ]},
  { id: '61', korean: '금요일', myanmar: 'သောကြာနေ့', english: 'Friday', pos: 'noun', level: 'basic', examples: [
    { korean: '금요일에 친구를 만나요.', myanmar: 'သောကြာနေ့မှာ သူငယ်ချင်းကို တွေ့မယ်။', english: 'I will meet my friend on Friday.' }
  ]},
  { id: '62', korean: '기차', myanmar: 'ရထား', english: 'Train', pos: 'noun', level: 'basic', examples: [
    { korean: '기차로 여행했어요.', myanmar: 'ရထားနဲ့ ခရီးသွားခဲ့တယ်။', english: 'I traveled by train.' }
  ]},
  // More ㄱ words and ㄴ words
  { id: '63', korean: '길', myanmar: 'လမ်း', english: 'Road', pos: 'noun', level: 'basic', examples: [
    { korean: '길이 좁아요.', myanmar: 'လမ်းက ကျဉ်းတယ်။', english: 'The road is narrow.' }
  ]},
  { id: '64', korean: '김치', myanmar: 'ကင်းချီ', english: 'Kimchi', pos: 'noun', level: 'basic', examples: [
    { korean: '김치가 매워요.', myanmar: 'ကင်းချီက စပ်တယ်။', english: 'Kimchi is spicy.' }
  ]},
  { id: '65', korean: '깨끗하다', myanmar: 'သန့်ရှင်းသည်', english: 'To be clean', pos: 'adjective', level: 'basic', examples: [
    { korean: '방이 깨끗해요.', myanmar: 'အခန်းက သန့်ရှင်းတယ်။', english: 'The room is clean.' }
  ]},
  { id: '66', korean: '꽃', myanmar: 'ပန်း', english: 'Flower', pos: 'noun', level: 'basic', examples: [
    { korean: '예쁜 꽃을 봤어요.', myanmar: 'လှတဲ့ ပန်းကို တွေ့ခဲ့တယ်။', english: 'I saw a beautiful flower.' }
  ]},
  { id: '67', korean: '꿈', myanmar: 'အိပ်မက်', english: 'Dream', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 꿈을 꿨어요.', myanmar: 'ကောင်းတဲ့ အိပ်မက် မက်ခဲ့တယ်။', english: 'I had a good dream.' }
  ]},
  // ㄴ words (nieun)
  { id: '68', korean: '나', myanmar: 'ကျွန်တော်/ကျွန်မ', english: 'I/Me', pos: 'pronoun', level: 'basic', examples: [
    { korean: '나는 학생이에요.', myanmar: 'ကျွန်တော်က ကျောင်းသားပါ။', english: 'I am a student.' }
  ]},
  { id: '69', korean: '나이', myanmar: 'အသက်', english: 'Age', pos: 'noun', level: 'basic', examples: [
    { korean: '나이가 몇 살이에요?', myanmar: 'အသက် ဘယ်လောက်လဲ?', english: 'How old are you?' }
  ]},
  { id: '70', korean: '나무', myanmar: 'သစ်ပင်', english: 'Tree', pos: 'noun', level: 'basic', examples: [
    { korean: '큰 나무 아래에서 쉬었어요.', myanmar: 'ကြီးတဲ့ သစ်ပင်အောက်မှာ နားခဲ့တယ်။', english: 'I rested under a big tree.' }
  ]},
  { id: '71', korean: '나쁘다', myanmar: 'မကောင်းသည်', english: 'To be bad', pos: 'adjective', level: 'basic', examples: [
    { korean: '날씨가 나빠요.', myanmar: 'ရာသီဥတု မကောင်းဘူး။', english: 'The weather is bad.' }
  ]},
  { id: '72', korean: '날씨', myanmar: 'ရာသီဥတု', english: 'Weather', pos: 'noun', level: 'basic', examples: [
    { korean: '오늘 날씨가 좋아요.', myanmar: 'ဒီနေ့ ရာသီဥတု ကောင်းတယ်။', english: 'The weather is good today.' }
  ]},
  { id: '73', korean: '내일', myanmar: 'မနက်ဖြန်', english: 'Tomorrow', pos: 'noun', level: 'basic', examples: [
    { korean: '내일 만나요.', myanmar: 'မနက်ဖြန် တွေ့မယ်။', english: 'See you tomorrow.' }
  ]},
  { id: '74', korean: '너', myanmar: 'မင်း', english: 'You', pos: 'pronoun', level: 'basic', examples: [
    { korean: '너는 어디에 가니?', myanmar: 'မင်း ဘယ်ကို သွားတာလဲ?', english: 'Where are you going?' }
  ]},
  { id: '75', korean: '넓다', myanmar: 'ကျယ်သည်', english: 'To be wide', pos: 'adjective', level: 'basic', examples: [
    { korean: '이 방은 넓어요.', myanmar: 'ဒီအခန်းက ကျယ်တယ်။', english: 'This room is wide.' }
  ]},
  { id: '76', korean: '노래', myanmar: 'သီချင်း', english: 'Song', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 노래를 들었어요.', myanmar: 'ကောင်းတဲ့ သီချင်း နားထောင်ခဲ့တယ်။', english: 'I listened to a good song.' }
  ]},
  { id: '77', korean: '높다', myanmar: 'မြင့်သည်', english: 'To be high', pos: 'adjective', level: 'basic', examples: [
    { korean: '산이 높아요.', myanmar: 'တောင်က မြင့်တယ်။', english: 'The mountain is high.' }
  ]},
  { id: '78', korean: '누나', myanmar: 'အစ်မ', english: 'Older sister (for males)', pos: 'noun', level: 'basic', examples: [
    { korean: '누나가 요리를 잘해요.', myanmar: 'အစ်မက ဟင်းချက်ရတာ တော်တယ်။', english: 'My older sister cooks well.' }
  ]},
  { id: '79', korean: '눈', myanmar: 'မျက်လုံး', english: 'Eye', pos: 'noun', level: 'basic', examples: [
    { korean: '눈이 아파요.', myanmar: 'မျက်လုံး နာတယ်။', english: 'My eyes hurt.' }
  ]},
  { id: '80', korean: '눈', myanmar: 'နှင်း', english: 'Snow', pos: 'noun', level: 'basic', examples: [
    { korean: '눈이 많이 와요.', myanmar: 'နှင်း အများကြီး ကျတယ်။', english: 'It snows a lot.' }
  ]},
  // ㄷ words (digeut)
  { id: '81', korean: '다시', myanmar: 'ထပ်မံ', english: 'Again', pos: 'adverb', level: 'basic', examples: [
    { korean: '다시 해 보세요.', myanmar: 'ထပ်မံ လုပ်ကြည့်ပါ။', english: 'Please try again.' }
  ]},
  { id: '82', korean: '달', myanmar: 'လ', english: 'Moon', pos: 'noun', level: 'basic', examples: [
    { korean: '달이 밝아요.', myanmar: 'လက တောက်တယ်။', english: 'The moon is bright.' }
  ]},
  { id: '83', korean: '달다', myanmar: 'ချိုသည်', english: 'To be sweet', pos: 'adjective', level: 'basic', examples: [
    { korean: '사탕이 달아요.', myanmar: 'သကြားလုံးက ချိုတယ်။', english: 'The candy is sweet.' }
  ]},
  { id: '84', korean: '닭', myanmar: 'ကြက်', english: 'Chicken', pos: 'noun', level: 'basic', examples: [
    { korean: '닭고기를 먹었어요.', myanmar: 'ကြက်သားစားခဲ့တယ်။', english: 'I ate chicken.' }
  ]},
  { id: '85', korean: '답하다', myanmar: 'ဖြေကြားသည်', english: 'To answer', pos: 'verb', level: 'basic', examples: [
    { korean: '질문에 답했어요.', myanmar: 'မေးခွန်းကို ဖြေခဲ့တယ်။', english: 'I answered the question.' }
  ]},
  { id: '86', korean: '대학교', myanmar: 'တက္ကသိုလ်', english: 'University', pos: 'noun', level: 'basic', examples: [
    { korean: '대학교에서 공부해요.', myanmar: 'တက္ကသိုလ်မှာ ပညာသင်တယ်။', english: 'I study at university.' }
  ]},
  { id: '87', korean: '더', myanmar: 'ပိုမို', english: 'More', pos: 'adverb', level: 'basic', examples: [
    { korean: '더 많이 먹고 싶어요.', myanmar: 'ပိုမို များများ စားချင်တယ်။', english: 'I want to eat more.' }
  ]},
  { id: '88', korean: '덥다', myanmar: 'ပူသည်', english: 'To be hot', pos: 'adjective', level: 'basic', examples: [
    { korean: '오늘 날씨가 더워요.', myanmar: 'ဒီနေ့ ရာသီဥတု ပူတယ်။', english: 'The weather is hot today.' }
  ]},
  { id: '89', korean: '도서관', myanmar: 'စာကြည့်တိုက်', english: 'Library', pos: 'noun', level: 'basic', examples: [
    { korean: '도서관에서 책을 읽어요.', myanmar: 'စာကြည့်တိုက်မှာ စာအုပ်ဖတ်တယ်။', english: 'I read books in the library.' }
  ]},
  { id: '90', korean: '도시', myanmar: 'မြို့', english: 'City', pos: 'noun', level: 'basic', examples: [
    { korean: '큰 도시에 살아요.', myanmar: 'မြို့ကြီးမှာ နေတယ်။', english: 'I live in a big city.' }
  ]},
  { id: '91', korean: '돈', myanmar: 'ပိုက်ဆံ', english: 'Money', pos: 'noun', level: 'basic', examples: [
    { korean: '돈이 필요해요.', myanmar: 'ပိုက်ဆံ လိုအပ်တယ်။', english: 'I need money.' }
  ]},
  { id: '92', korean: '동생', myanmar: 'ညီ/နှမ', english: 'Younger sibling', pos: 'noun', level: 'basic', examples: [
    { korean: '동생이 귀여워요.', myanmar: 'ညီ/နှမ က ချစ်စရာကောင်းတယ်။', english: 'My younger sibling is cute.' }
  ]},
  { id: '93', korean: '드시다', myanmar: 'စားသည် (လေးစားသော)', english: 'To eat (honorific)', pos: 'verb', level: 'intermediate', examples: [
    { korean: '할머니가 밥을 드세요.', myanmar: 'အဖွားက ထမင်းစားတယ်။', english: 'Grandmother eats rice.' }
  ]},
  { id: '94', korean: '듣다', myanmar: 'ကြားသည်', english: 'To hear/listen', pos: 'verb', level: 'basic', examples: [
    { korean: '음악을 들어요.', myanmar: 'ဂီတကြားတယ်။', english: 'I listen to music.' }
  ]},
  // ㄹ words (rieul)
  { id: '95', korean: '라면', myanmar: 'လမန်', english: 'Ramen', pos: 'noun', level: 'basic', examples: [
    { korean: '라면을 끓였어요.', myanmar: 'လမန် ချက်ခဲ့တယ်။', english: 'I cooked ramen.' }
  ]},
  { id: '96', korean: '리듬', myanmar: 'စည်းချက်', english: 'Rhythm', pos: 'noun', level: 'intermediate', examples: [
    { korean: '음악의 리듬이 좋아요.', myanmar: 'ဂီတရဲ့ စည်းချက်က ကောင်းတယ်။', english: 'The rhythm of the music is good.' }
  ]},
  // ㅁ words (mieum)
  { id: '97', korean: '마시다', myanmar: 'သောက်သည်', english: 'To drink', pos: 'verb', level: 'basic', examples: [
    { korean: '물을 마셔요.', myanmar: 'ရေသောက်တယ်။', english: 'I drink water.' }
  ]},
  { id: '98', korean: '만나다', myanmar: 'တွေ့ဆုံသည်', english: 'To meet', pos: 'verb', level: 'basic', examples: [
    { korean: '친구를 만났어요.', myanmar: 'သူငယ်ချင်းကို တွေ့ခဲ့တယ်။', english: 'I met a friend.' }
  ]},
  { id: '99', korean: '맛', myanmar: 'အရသာ', english: 'Taste', pos: 'noun', level: 'basic', examples: [
    { korean: '음식 맛이 좋아요.', myanmar: 'အစားအသောက်ရဲ့ အရသာ ကောင်းတယ်။', english: 'The food tastes good.' }
  ]},
  { id: '100', korean: '맛있다', myanmar: 'အရသာရှိသည်', english: 'To be delicious', pos: 'adjective', level: 'basic', examples: [
    { korean: '이 음식이 맛있어요.', myanmar: 'ဒီအစားအသောက်က အရသာရှိတယ်။', english: 'This food is delicious.' }
  ]},
  { id: '101', korean: '머리', myanmar: 'ဦးခေါင်း', english: 'Head', pos: 'noun', level: 'basic', examples: [
    { korean: '머리가 아파요.', myanmar: 'ဦးခေါင်း ကိုက်တယ်။', english: 'I have a headache.' }
  ]},
  { id: '102', korean: '멀다', myanmar: 'ဝေးသည်', english: 'To be far', pos: 'adjective', level: 'basic', examples: [
    { korean: '학교가 멀어요.', myanmar: 'ကျောင်းက ဝေးတယ်။', english: 'The school is far.' }
  ]},
  { id: '103', korean: '모르다', myanmar: 'မသိသည်', english: 'To not know', pos: 'verb', level: 'basic', examples: [
    { korean: '답을 몰라요.', myanmar: 'အဖြေကို မသိဘူး။', english: 'I don\'t know the answer.' }
  ]},
  { id: '104', korean: '목요일', myanmar: 'ကြာသပတေးနေ့', english: 'Thursday', pos: 'noun', level: 'basic', examples: [
    { korean: '목요일에 시험이 있어요.', myanmar: 'ကြာသပတေးနေ့မှာ စာမေးပွဲ ရှိတယ်။', english: 'There is an exam on Thursday.' }
  ]},
  { id: '105', korean: '문', myanmar: 'တံခါး', english: 'Door', pos: 'noun', level: 'basic', examples: [
    { korean: '문을 열어 주세요.', myanmar: 'တံခါး ဖွင့်ပေးပါ။', english: 'Please open the door.' }
  ]},
  { id: '106', korean: '문제', myanmar: 'ပြဿနာ', english: 'Problem', pos: 'noun', level: 'basic', examples: [
    { korean: '어려운 문제예요.', myanmar: 'ခက်ခဲတဲ့ ပြဿနာပါ။', english: 'It\'s a difficult problem.' }
  ]},
  { id: '107', korean: '뮤직', myanmar: 'ဂီတ', english: 'Music', pos: 'noun', level: 'basic', examples: [
    { korean: '뮤직을 좋아해요.', myanmar: 'ဂီတကို ကြိုက်တယ်။', english: 'I like music.' }
  ]},
  // ㅂ words (bieup)
  { id: '108', korean: '바다', myanmar: 'ပင်လယ်', english: 'Sea', pos: 'noun', level: 'basic', examples: [
    { korean: '바다가 아름다워요.', myanmar: 'ပင်လယ်က လှတယ်။', english: 'The sea is beautiful.' }
  ]},
  { id: '109', korean: '바쁘다', myanmar: 'အလုပ်များသည်', english: 'To be busy', pos: 'adjective', level: 'basic', examples: [
    { korean: '오늘 바빠요.', myanmar: 'ဒီနေ့ အလုပ်များတယ်။', english: 'I\'m busy today.' }
  ]},
  { id: '110', korean: '밤', myanmar: 'ညဘက်', english: 'Night', pos: 'noun', level: 'basic', examples: [
    { korean: '밤에 잠을 자요.', myanmar: 'ညဘက်မှာ အိပ်တယ်။', english: 'I sleep at night.' }
  ]},
  { id: '111', korean: '배', myanmar: 'ဗိုက်', english: 'Stomach', pos: 'noun', level: 'basic', examples: [
    { korean: '배가 고파요.', myanmar: 'ဗိုက်ဆာတယ်။', english: 'I\'m hungry.' }
  ]},
  { id: '112', korean: '벌써', myanmar: 'ပြီးသား', english: 'Already', pos: 'adverb', level: 'basic', examples: [
    { korean: '벌써 끝났어요.', myanmar: 'ပြီးသား ပြီးခဲ့တယ်။', english: 'It\'s already finished.' }
  ]},

  
  // Additional ㄱ words
  { id: '113', korean: '기분', myanmar: 'စိတ်ခံစားမှု', english: 'Mood/Feeling', pos: 'noun', level: 'basic', examples: [
    { korean: '기분이 좋아요.', myanmar: 'စိတ်ခံစားမှု ကောင်းတယ်။', english: 'I feel good.' }
  ]},
  { id: '114', korean: '기억하다', myanmar: 'မှတ်မိသည်', english: 'To remember', pos: 'verb', level: 'basic', examples: [
    { korean: '이름을 기억해요.', myanmar: 'နာမည်ကို မှတ်မိတယ်။', english: 'I remember the name.' }
  ]},
  { id: '115', korean: '기다리다', myanmar: 'စောင့်သည်', english: 'To wait', pos: 'verb', level: 'basic', examples: [
    { korean: '친구를 기다려요.', myanmar: 'သူငယ်ချင်းကို စောင့်တယ်။', english: 'I wait for my friend.' }
  ]},
  { id: '116', korean: '기쁘다', myanmar: 'ပျော်သည်', english: 'To be happy', pos: 'adjective', level: 'basic', examples: [
    { korean: '생일이라서 기뻐요.', myanmar: 'မွေးနေ့ဖြစ်လို့ ပျော်တယ်။', english: 'I\'m happy because it\'s my birthday.' }
  ]},
  { id: '117', korean: '기계', myanmar: 'စက်ယန္တရား', english: 'Machine', pos: 'noun', level: 'intermediate', examples: [
    { korean: '기계가 고장났어요.', myanmar: 'စက်ယန္တရား ပျက်ခဲ့တယ်။', english: 'The machine is broken.' }
  ]},
  { id: '118', korean: '기회', myanmar: 'အခွင့်အရေး', english: 'Opportunity', pos: 'noun', level: 'intermediate', examples: [
    { korean: '좋은 기회예요.', myanmar: 'ကောင်းတဲ့ အခွင့်အရေးပါ။', english: 'It\'s a good opportunity.' }
  ]},
  { id: '119', korean: '기술', myanmar: 'နည်းပညာ', english: 'Technology/Skill', pos: 'noun', level: 'intermediate', examples: [
    { korean: '새로운 기술을 배워요.', myanmar: 'နည်းပညာအသစ် သင်ယူတယ်။', english: 'I learn new technology.' }
  ]},
  { id: '120', korean: '기본', myanmar: 'အခြေခံ', english: 'Basic/Foundation', pos: 'noun', level: 'intermediate', examples: [
    { korean: '기본을 잘 배워야 해요.', myanmar: 'အခြေခံကို ကောင်းကောင်း သင်ယူရမယ်။', english: 'You need to learn the basics well.' }
  ]},
  { id: '121', korean: '기타', myanmar: 'ဂစ်တာ', english: 'Guitar', pos: 'noun', level: 'basic', examples: [
    { korean: '기타를 칠 줄 알아요.', myanmar: 'ဂစ်တာ တီးတတ်တယ်။', english: 'I can play the guitar.' }
  ]},
  { id: '122', korean: '기침', myanmar: 'ချောင်းဆိုးခြင်း', english: 'Cough', pos: 'noun', level: 'basic', examples: [
    { korean: '기침이 나요.', myanmar: 'ချောင်းဆိုးတယ်။', english: 'I have a cough.' }
  ]},
  { id: '123', korean: '기운', myanmar: 'စွမ်းအား', english: 'Energy/Strength', pos: 'noun', level: 'intermediate', examples: [
    { korean: '기운이 없어요.', myanmar: 'စွမ်းအား မရှိဘူး။', english: 'I have no energy.' }
  ]},
  { id: '124', korean: '기록', myanmar: 'မှတ်တမ်း', english: 'Record', pos: 'noun', level: 'intermediate', examples: [
    { korean: '기록을 남겼어요.', myanmar: 'မှတ်တမ်း ချန်ထားခဲ့တယ်။', english: 'I left a record.' }
  ]},
  { id: '125', korean: '기사', myanmar: 'ဆောင်းပါး', english: 'Article/News', pos: 'noun', level: 'intermediate', examples: [
    { korean: '신문 기사를 읽어요.', myanmar: 'သတင်းစာ ဆောင်းပါး ဖတ်တယ်။', english: 'I read newspaper articles.' }
  ]},
  { id: '126', korean: '기숙사', myanmar: 'ဘော်ဒါအိမ်', english: 'Dormitory', pos: 'noun', level: 'basic', examples: [
    { korean: '기숙사에서 살아요.', myanmar: 'ဘော်ဒါအိမ်မှာ နေတယ်။', english: 'I live in a dormitory.' }
  ]},
  { id: '127', korean: '기후', myanmar: 'ရာသီဥတု', english: 'Climate', pos: 'noun', level: 'intermediate', examples: [
    { korean: '기후가 좋아요.', myanmar: 'ရာသီဥတု ကောင်းတယ်။', english: 'The climate is good.' }
  ]},
  { id: '128', korean: '긴', myanmar: 'ရှည်သော', english: 'Long', pos: 'adjective', level: 'basic', examples: [
    { korean: '긴 머리가 예뻐요.', myanmar: 'ဆံပင်ရှည် လှတယ်။', english: 'Long hair is pretty.' }
  ]},
  { id: '129', korean: '깊다', myanmar: 'နက်သည်', english: 'To be deep', pos: 'adjective', level: 'basic', examples: [
    { korean: '물이 깊어요.', myanmar: 'ရေက နက်တယ်။', english: 'The water is deep.' }
  ]},
  { id: '130', korean: '까맣다', myanmar: 'မည်းသည်', english: 'To be black', pos: 'adjective', level: 'basic', examples: [
    { korean: '머리가 까매요.', myanmar: 'ဆံပင်က မည်းတယ်။', english: 'The hair is black.' }
  ]},
  { id: '131', korean: '깜빡하다', myanmar: 'မေ့သည်', english: 'To forget', pos: 'verb', level: 'basic', examples: [
    { korean: '약속을 깜빡했어요.', myanmar: 'ကတိကို မေ့ခဲ့တယ်။', english: 'I forgot the appointment.' }
  ]},
  { id: '132', korean: '꺼지다', myanmar: 'ပိတ်သည်', english: 'To turn off', pos: 'verb', level: 'basic', examples: [
    { korean: '불이 꺼졌어요.', myanmar: 'မီးက ပိတ်သွားတယ်။', english: 'The light went off.' }
  ]},
  { id: '133', korean: '꺼내다', myanmar: 'ထုတ်သည်', english: 'To take out', pos: 'verb', level: 'basic', examples: [
    { korean: '가방에서 책을 꺼냈어요.', myanmar: 'အိတ်ထဲက စာအုပ်ကို ထုတ်ခဲ့တယ်။', english: 'I took out a book from the bag.' }
  ]},
  { id: '134', korean: '꼭', myanmar: 'အမှန်တကယ်', english: 'Surely/Definitely', pos: 'adverb', level: 'basic', examples: [
    { korean: '꼭 와야 해요.', myanmar: 'အမှန်တကယ် လာရမယ်။', english: 'You must come.' }
  ]},
  { id: '135', korean: '꼴찌', myanmar: 'နောက်ဆုံး', english: 'Last place', pos: 'noun', level: 'basic', examples: [
    { korean: '시험에서 꼴찌했어요.', myanmar: 'စာမေးပွဲမှာ နောက်ဆုံး ဖြစ်ခဲ့တယ်။', english: 'I came last in the exam.' }
  ]},
  { id: '136', korean: '꾸다', myanmar: 'မက်သည်', english: 'To dream', pos: 'verb', level: 'basic', examples: [
    { korean: '좋은 꿈을 꾸었어요.', myanmar: 'ကောင်းတဲ့ အိပ်မက် မက်ခဲ့တယ်။', english: 'I had a good dream.' }
  ]},
  { id: '137', korean: '꾸미다', myanmar: 'အလှဆင်သည်', english: 'To decorate', pos: 'verb', level: 'basic', examples: [
    { korean: '방을 꾸몄어요.', myanmar: 'အခန်းကို အလှဆင်ခဲ့တယ်။', english: 'I decorated the room.' }
  ]},
  { id: '138', korean: '끄다', myanmar: 'ပိတ်သည်', english: 'To turn off', pos: 'verb', level: 'basic', examples: [
    { korean: '불을 껐어요.', myanmar: 'မီးကို ပိတ်ခဲ့တယ်။', english: 'I turned off the light.' }
  ]},
  { id: '139', korean: '끓다', myanmar: 'ဆူသည်', english: 'To boil', pos: 'verb', level: 'basic', examples: [
    { korean: '물이 끓어요.', myanmar: 'ရေက ဆူတယ်။', english: 'The water is boiling.' }
  ]},
  { id: '140', korean: '끝나다', myanmar: 'ပြီးသည်', english: 'To end', pos: 'verb', level: 'basic', examples: [
    { korean: '수업이 끝났어요.', myanmar: 'သင်ခန်းစာ ပြီးခဲ့တယ်။', english: 'The class is over.' }
  ]},
  { id: '141', korean: '끝내다', myanmar: 'ပြီးစီးအောင်လုပ်သည်', english: 'To finish', pos: 'verb', level: 'basic', examples: [
    { korean: '숙제를 끝냈어요.', myanmar: 'အိမ်စာကို ပြီးအောင်လုပ်ခဲ့တယ်။', english: 'I finished my homework.' }
  ]},
  { id: '142', korean: '끝', myanmar: 'အဆုံး', english: 'End', pos: 'noun', level: 'basic', examples: [
    { korean: '영화의 끝이 슬펐어요.', myanmar: 'ရုပ်ရှင်ရဲ့ အဆုံး ဝမ်းနည်းစရာ ဖြစ်ခဲ့တယ်။', english: 'The end of the movie was sad.' }
  ]},
  { id: '143', korean: '긁다', myanmar: 'ခြစ်သည်', english: 'To scratch', pos: 'verb', level: 'basic', examples: [
    { korean: '가려워서 긁었어요.', myanmar: 'ယားလို့ ခြစ်ခဲ့တယ်။', english: 'I scratched because it was itchy.' }
  ]},
  { id: '144', korean: '글', myanmar: 'စာ', english: 'Writing/Text', pos: 'noun', level: 'basic', examples: [
    { korean: '글을 잘 써요.', myanmar: 'စာကို ကောင်းကောင်း ရေးတယ်။', english: 'I write well.' }
  ]},
  { id: '145', korean: '글자', myanmar: 'စာလုံး', english: 'Letter/Character', pos: 'noun', level: 'basic', examples: [
    { korean: '한글 글자를 배워요.', myanmar: 'ဟန်ဂူး စာလုံးတွေ သင်ယူတယ်။', english: 'I learn Korean characters.' }
  ]},
  { id: '146', korean: '금', myanmar: 'ရွှေ', english: 'Gold', pos: 'noun', level: 'basic', examples: [
    { korean: '금반지를 샀어요.', myanmar: 'ရွှေလက်စွပ် ဝယ်ခဲ့တယ်။', english: 'I bought a gold ring.' }
  ]},
  { id: '147', korean: '급하다', myanmar: 'အမြန်လုပ်ရသည်', english: 'To be urgent', pos: 'adjective', level: 'basic', examples: [
    { korean: '일이 급해요.', myanmar: 'အလုပ်က အမြန်လုပ်ရတယ်။', english: 'The work is urgent.' }
  ]},
  { id: '148', korean: '그냥', myanmar: 'ဒီလိုပဲ', english: 'Just/Simply', pos: 'adverb', level: 'basic', examples: [
    { korean: '그냥 집에 있어요.', myanmar: 'ဒီလိုပဲ အိမ်မှာ နေတယ်။', english: 'I\'m just staying at home.' }
  ]},
  { id: '149', korean: '그러면', myanmar: 'ဒါဆို', english: 'Then/If so', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그러면 내일 만나요.', myanmar: 'ဒါဆို မနက်ဖြန် တွေ့မယ်။', english: 'Then let\'s meet tomorrow.' }
  ]},
  { id: '150', korean: '그렇다', myanmar: 'ဒီလိုပဲ', english: 'To be so', pos: 'adjective', level: 'basic', examples: [
    { korean: '그래요, 맞아요.', myanmar: 'ဟုတ်တယ်၊ မှန်တယ်။', english: 'Yes, that\'s right.' }
  ]},
  { id: '151', korean: '그런데', myanmar: 'သို့သော်', english: 'But/However', pos: 'conjunction', level: 'basic', examples: [
    { korean: '좋아요. 그런데 비싸요.', myanmar: 'ကောင်းတယ်။ သို့သော် စျေးကြီးတယ်။', english: 'It\'s good. But it\'s expensive.' }
  ]},
  { id: '152', korean: '그리고', myanmar: 'ပြီးတော့', english: 'And', pos: 'conjunction', level: 'basic', examples: [
    { korean: '사과 그리고 바나나를 샀어요.', myanmar: 'ပန်းသီး ပြီးတော့ ငှက်ပျောသီး ဝယ်ခဲ့တယ်။', english: 'I bought apples and bananas.' }
  ]},
  { id: '153', korean: '그립다', myanmar: 'လွမ်းသည်', english: 'To miss', pos: 'adjective', level: 'intermediate', examples: [
    { korean: '고향이 그리워요.', myanmar: 'ဇာတိကို လွမ်းတယ်။', english: 'I miss my hometown.' }
  ]},
  { id: '154', korean: '근처', myanmar: 'အနီးအနား', english: 'Nearby', pos: 'noun', level: 'basic', examples: [
    { korean: '학교 근처에 살아요.', myanmar: 'ကျောင်း အနီးအနားမှာ နေတယ်။', english: 'I live near the school.' }
  ]},
  { id: '155', korean: '굵다', myanmar: 'ထူသည်', english: 'To be thick', pos: 'adjective', level: 'basic', examples: [
    { korean: '나무가 굵어요.', myanmar: 'သစ်ပင်က ထူတယ်။', english: 'The tree is thick.' }
  ]},
  { id: '156', korean: '굽다', myanmar: 'ကင်သည်', english: 'To grill/bake', pos: 'verb', level: 'basic', examples: [
    { korean: '고기를 구웠어요.', myanmar: 'အသားကို ကင်ခဲ့တယ်။', english: 'I grilled the meat.' }
  ]},
  { id: '157', korean: '궁금하다', myanmar: 'သိချင်သည်', english: 'To be curious', pos: 'adjective', level: 'basic', examples: [
    { korean: '답이 궁금해요.', myanmar: 'အဖြေကို သိချင်တယ်။', english: 'I\'m curious about the answer.' }
  ]},
  { id: '158', korean: '귀엽다', myanmar: 'ချစ်စရာကောင်းသည်', english: 'To be cute', pos: 'adjective', level: 'basic', examples: [
    { korean: '아기가 귀여워요.', myanmar: 'ကလေးက ချစ်စရာကောင်းတယ်။', english: 'The baby is cute.' }
  ]},
  { id: '159', korean: '규칙', myanmar: 'စည်းမျဉ်း', english: 'Rule', pos: 'noun', level: 'intermediate', examples: [
    { korean: '규칙을 지켜야 해요.', myanmar: 'စည်းမျဉ်းကို လိုက်နာရမယ်။', english: 'You must follow the rules.' }
  ]},
  { id: '160', korean: '그치다', myanmar: 'ရပ်သည်', english: 'To stop', pos: 'verb', level: 'basic', examples: [
    { korean: '비가 그쳤어요.', myanmar: 'မိုးက ရပ်သွားတယ်။', english: 'The rain stopped.' }
  ]},
  { id: '161', korean: '그어다', myanmar: 'ဆွဲသည်', english: 'To draw a line', pos: 'verb', level: 'basic', examples: [
    { korean: '선을 그었어요.', myanmar: 'မျဉ်းကို ဆွဲခဲ့တယ်။', english: 'I drew a line.' }
  ]},
  { id: '162', korean: '그늘', myanmar: 'အရိပ်', english: 'Shade', pos: 'noun', level: 'basic', examples: [
    { korean: '그늘에서 쉬어요.', myanmar: 'အရိပ်မှာ နားတယ်။', english: 'I rest in the shade.' }
  ]},
  // Additional comprehensive ㄱ words (all difficulty levels)
  { id: '163', korean: '가치', myanmar: 'တန်ဖိုး', english: 'Value', pos: 'noun', level: 'intermediate', examples: [
    { korean: '이것은 가치가 있어요.', myanmar: 'ဒါက တန်ဖိုး ရှိတယ်။', english: 'This has value.' }
  ]},
  { id: '164', korean: '가정', myanmar: 'အိမ်ထောင်', english: 'Family/Household', pos: 'noun', level: 'intermediate', examples: [
    { korean: '행복한 가정을 꾸리고 싶어요.', myanmar: 'ပျော်ရွှင်တဲ့ အိမ်ထောင် ပြုလုပ်ချင်တယ်။', english: 'I want to build a happy family.' }
  ]},
  // === 100 BASIC LEVEL ㄱ WORDS ===
  { id: '165', korean: '가지', myanmar: 'ခက်သီး', english: 'Eggplant', pos: 'noun', level: 'basic', examples: [
    { korean: '가지를 요리했어요.', myanmar: 'ခက်သီးကို ချက်ခဲ့တယ်။', english: 'I cooked eggplant.' }
  ]},
  { id: '166', korean: '간식', myanmar: 'နားတစ်ချိန်စာ', english: 'Snack', pos: 'noun', level: 'basic', examples: [
    { korean: '간식을 먹었어요.', myanmar: 'နားတစ်ချိန်စာ စားခဲ့တယ်။', english: 'I ate a snack.' }
  ]},
  { id: '167', korean: '갈비', myanmar: 'နံရိုးသား', english: 'Ribs', pos: 'noun', level: 'basic', examples: [
    { korean: '갈비를 구웠어요.', myanmar: 'နံရိုးသားကို ကင်ခဲ့တယ်။', english: 'I grilled ribs.' }
  ]},
  { id: '168', korean: '감자', myanmar: 'အာလူး', english: 'Potato', pos: 'noun', level: 'basic', examples: [
    { korean: '감자를 삶았어요.', myanmar: 'အာလူးကို ပြုတ်ခဲ့တယ်။', english: 'I boiled potatoes.' }
  ]},
  { id: '169', korean: '개구리', myanmar: 'ဖားတောင်', english: 'Frog', pos: 'noun', level: 'basic', examples: [
    { korean: '개구리가 연못에 있어요.', myanmar: 'ဖားတောင်က ရေကန်မှာ ရှိတယ်။', english: 'There is a frog in the pond.' }
  ]},
  { id: '170', korean: '거북이', myanmar: 'လိပ်', english: 'Turtle', pos: 'noun', level: 'basic', examples: [
    { korean: '거북이가 천천히 걸어요.', myanmar: 'လိပ်က ဖြေးဖြေးချင်း လမ်းလျှောက်တယ်။', english: 'The turtle walks slowly.' }
  ]},
  { id: '171', korean: '게', myanmar: 'ကဏန်း', english: 'Crab', pos: 'noun', level: 'basic', examples: [
    { korean: '바다에서 게를 잡았어요.', myanmar: 'ပင်လယ်မှာ ကဏန်း ဖမ်းခဲ့တယ်။', english: 'I caught a crab in the sea.' }
  ]},
  { id: '172', korean: '계란', myanmar: 'ကြက်ဥ', english: 'Egg', pos: 'noun', level: 'basic', examples: [
    { korean: '계란을 삶았어요.', myanmar: 'ကြက်ဥကို ပြုတ်ခဲ့တယ်။', english: 'I boiled an egg.' }
  ]},
  { id: '173', korean: '고구마', myanmar: 'ပန်းနွံ', english: 'Sweet potato', pos: 'noun', level: 'basic', examples: [
    { korean: '고구마가 달아요.', myanmar: 'ပန်းနွံက ချိုတယ်။', english: 'Sweet potato is sweet.' }
  ]},
  { id: '174', korean: '고추', myanmar: 'ငရုတ်သီး', english: 'Chili pepper', pos: 'noun', level: 'basic', examples: [
    { korean: '고추가 매워요.', myanmar: 'ငရုတ်သီးက စပ်တယ်။', english: 'Chili pepper is spicy.' }
  ]},
  { id: '175', korean: '곤충', myanmar: 'အင်းဆက်', english: 'Insect', pos: 'noun', level: 'basic', examples: [
    { korean: '곤충을 관찰해요.', myanmar: 'အင်းဆက်ကို လေ့လာကြည့်တယ်။', english: 'I observe insects.' }
  ]},
  { id: '176', korean: '골목', myanmar: 'လမ်းကြား', english: 'Alley', pos: 'noun', level: 'basic', examples: [
    { korean: '좁은 골목을 지났어요.', myanmar: 'ကျဉ်းတဲ့ လမ်းကြား ဖြတ်သွားခဲ့တယ်။', english: 'I passed through a narrow alley.' }
  ]},
  { id: '177', korean: '곰', myanmar: 'ဝံ', english: 'Bear', pos: 'noun', level: 'basic', examples: [
    { korean: '곰이 꿀을 좋아해요.', myanmar: 'ဝံက ပျားရည် ကြိုက်တယ်။', english: 'Bears like honey.' }
  ]},
  { id: '178', korean: '공기', myanmar: 'လေ', english: 'Air', pos: 'noun', level: 'basic', examples: [
    { korean: '공기가 맑아요.', myanmar: 'လေက သန့်စင်တယ်။', english: 'The air is clean.' }
  ]},
  { id: '179', korean: '공책', myanmar: 'စာရေးစာအုပ်', english: 'Notebook', pos: 'noun', level: 'basic', examples: [
    { korean: '공책에 글을 썼어요.', myanmar: 'စာရေးစာအုပ်မှာ စာရေးခဲ့တယ်။', english: 'I wrote in the notebook.' }
  ]},
  { id: '180', korean: '과자', myanmar: 'မုန့်ဖုတ်', english: 'Cookie/Snack', pos: 'noun', level: 'basic', examples: [
    { korean: '과자를 먹었어요.', myanmar: 'မုန့်ဖုတ် စားခဲ့တယ်။', english: 'I ate cookies.' }
  ]},
  { id: '181', korean: '구두', myanmar: 'သားရေဖိနပ်', english: 'Leather shoes', pos: 'noun', level: 'basic', examples: [
    { korean: '구두를 신었어요.', myanmar: 'သားရေဖိနပ် စီးခဲ့တယ်။', english: 'I wore leather shoes.' }
  ]},
  { id: '182', korean: '구멍', myanmar: 'အပေါက်', english: 'Hole', pos: 'noun', level: 'basic', examples: [
    { korean: '벽에 구멍이 있어요.', myanmar: 'နံရံမှာ အပေါက် ရှိတယ်။', english: 'There is a hole in the wall.' }
  ]},
  { id: '183', korean: '국수', myanmar: 'ခေါက်ဆွဲ', english: 'Noodles', pos: 'noun', level: 'basic', examples: [
    { korean: '국수를 끓였어요.', myanmar: 'ခေါက်ဆွဲ ချက်ခဲ့တယ်။', english: 'I cooked noodles.' }
  ]},
  { id: '184', korean: '굴', myanmar: 'ကမာ', english: 'Oyster', pos: 'noun', level: 'basic', examples: [
    { korean: '굴이 신선해요.', myanmar: 'ကမာက လတ်ဆတ်တယ်။', english: 'The oyster is fresh.' }
  ]},
  { id: '185', korean: '그릇', myanmar: 'ပန်းကန်', english: 'Bowl/Dish', pos: 'noun', level: 'basic', examples: [
    { korean: '그릇을 씻었어요.', myanmar: 'ပန်းကန်ကို ဆေးခဲ့တယ်။', english: 'I washed the dishes.' }
  ]},
  { id: '186', korean: '그물', myanmar: 'ပိုက်ကွန်', english: 'Net', pos: 'noun', level: 'basic', examples: [
    { korean: '그물로 물고기를 잡아요.', myanmar: 'ပိုက်ကွန်နဲ့ ငါး ဖမ်းတယ်။', english: 'I catch fish with a net.' }
  ]},
  { id: '187', korean: '그자', myanmar: 'မျဉ်းကြောင်း', english: 'Ruler', pos: 'noun', level: 'basic', examples: [
    { korean: '그자로 선을 그었어요.', myanmar: 'မျဉ်းကြောင်းနဲ့ မျဉ်း ဆွဲခဲ့တယ်။', english: 'I drew a line with a ruler.' }
  ]},
  { id: '188', korean: '근육', myanmar: 'ကြွက်သား', english: 'Muscle', pos: 'noun', level: 'basic', examples: [
    { korean: '운동해서 근육이 생겼어요.', myanmar: 'အားကစား လုပ်လို့ ကြွက်သား ဖြစ်လာတယ်။', english: 'I gained muscle from exercising.' }
  ]},
  { id: '189', korean: '금고', myanmar: 'ငွေသိုက်', english: 'Safe', pos: 'noun', level: 'basic', examples: [
    { korean: '금고에 돈을 넣었어요.', myanmar: 'ငွေသိုက်မှာ ပိုက်ဆံ ထည့်ခဲ့တယ်။', english: 'I put money in the safe.' }
  ]},
  { id: '190', korean: '기계', myanmar: 'စက်', english: 'Machine', pos: 'noun', level: 'basic', examples: [
    { korean: '기계가 작동해요.', myanmar: 'စက်က အလုပ်လုပ်တယ်။', english: 'The machine is working.' }
  ]},
  { id: '191', korean: '기름', myanmar: 'ဆီ', english: 'Oil', pos: 'noun', level: 'basic', examples: [
    { korean: '기름을 부었어요.', myanmar: 'ဆီ လောင်းခဲ့တယ်။', english: 'I poured oil.' }
  ]},
  { id: '192', korean: '기둥', myanmar: 'တိုင်', english: 'Pillar/Pole', pos: 'noun', level: 'basic', examples: [
    { korean: '나무 기둥이 튼튼해요.', myanmar: 'သစ်သား တိုင်က ခိုင်မာတယ်။', english: 'The wooden pillar is strong.' }
  ]},
  { id: '193', korean: '길이', myanmar: 'အရှည်', english: 'Length', pos: 'noun', level: 'basic', examples: [
    { korean: '길이를 재었어요.', myanmar: 'အရှည်ကို တိုင်းခဲ့တယ်။', english: 'I measured the length.' }
  ]},
  { id: '194', korean: '김', myanmar: 'ပင်လယ်ရေညှိ', english: 'Seaweed', pos: 'noun', level: 'basic', examples: [
    { korean: '김을 구워서 먹었어요.', myanmar: 'ပင်လယ်ရေညှိကို ကင်ပြီး စားခဲ့တယ်။', english: 'I grilled and ate seaweed.' }
  ]},
  { id: '195', korean: '까치', myanmar: 'ကျီး', english: 'Magpie', pos: 'noun', level: 'basic', examples: [
    { korean: '까치가 나무에 앉았어요.', myanmar: 'ကျီးက သစ်ပင်မှာ ထိုင်ခဲ့တယ်။', english: 'The magpie sat on the tree.' }
  ]},
  { id: '196', korean: '깃털', myanmar: 'အမွေး', english: 'Feather', pos: 'noun', level: 'basic', examples: [
    { korean: '새의 깃털이 부드러워요.', myanmar: 'ငှက်ရဲ့ အမွေးက နူးညံ့တယ်။', english: 'The bird\'s feathers are soft.' }
  ]},
  { id: '197', korean: '꼬리', myanmar: 'အမြီး', english: 'Tail', pos: 'noun', level: 'basic', examples: [
    { korean: '개가 꼬리를 흔들어요.', myanmar: 'ခွေးက အမြီး ယမ်းတယ်။', english: 'The dog wags its tail.' }
  ]},
  { id: '198', korean: '꽃병', myanmar: 'ပန်းအိုး', english: 'Flower vase', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃병에 꽃을 꽂았어요.', myanmar: 'ပန်းအိုးမှာ ပန်း စိုက်ခဲ့တယ်။', english: 'I put flowers in the vase.' }
  ]},
  { id: '199', korean: '꽃밭', myanmar: 'ပန်းခြံ', english: 'Flower garden', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃밭이 아름다워요.', myanmar: 'ပန်းခြံက လှတယ်။', english: 'The flower garden is beautiful.' }
  ]},
  { id: '200', korean: '꿀', myanmar: 'ပျားရည်', english: 'Honey', pos: 'noun', level: 'basic', examples: [
    { korean: '꿀이 달아요.', myanmar: 'ပျားရည်က ချိုတယ်။', english: 'Honey is sweet.' }
  ]},
  { id: '201', korean: '끈', myanmar: 'ကြိုး', english: 'String/Rope', pos: 'noun', level: 'basic', examples: [
    { korean: '끈으로 묶었어요.', myanmar: 'ကြိုးနဲ့ ချည်ခဲ့တယ်။', english: 'I tied it with string.' }
  ]},
  { id: '202', korean: '글씨', myanmar: 'စာလုံး', english: 'Handwriting', pos: 'noun', level: 'basic', examples: [
    { korean: '글씨를 예쁘게 썼어요.', myanmar: 'စာလုံးကို လှလှ ရေးခဲ့တယ်။', english: 'I wrote beautifully.' }
  ]},
  { id: '203', korean: '금요일', myanmar: 'သောကြာနေ့', english: 'Friday', pos: 'noun', level: 'basic', examples: [
    { korean: '금요일에 쉬어요.', myanmar: 'သောကြာနေ့မှာ နားတယ်။', english: 'I rest on Friday.' }
  ]},
  { id: '204', korean: '기도', myanmar: 'ဆုတောင်း', english: 'Prayer', pos: 'noun', level: 'basic', examples: [
    { korean: '기도를 했어요.', myanmar: 'ဆုတောင်းခဲ့တယ်။', english: 'I prayed.' }
  ]},
  { id: '205', korean: '기쁨', myanmar: 'ပျော်ရွှင်မှု', english: 'Joy', pos: 'noun', level: 'basic', examples: [
    { korean: '기쁨을 느꼈어요.', myanmar: 'ပျော်ရွှင်မှု ခံစားခဲ့တယ်။', english: 'I felt joy.' }
  ]},
  { id: '206', korean: '기숙사', myanmar: 'ဘော်ဒါအိမ်', english: 'Dormitory', pos: 'noun', level: 'basic', examples: [
    { korean: '기숙사에서 살아요.', myanmar: 'ဘော်ဒါအိမ်မှာ နေတယ်။', english: 'I live in a dormitory.' }
  ]},
  { id: '207', korean: '긴급', myanmar: 'အရေးပေါ်', english: 'Emergency', pos: 'noun', level: 'basic', examples: [
    { korean: '긴급한 상황이에요.', myanmar: 'အရေးပေါ် အခြေအနေပါ။', english: 'It\'s an emergency situation.' }
  ]},
  { id: '208', korean: '김밥', myanmar: 'ကင်းပပ်', english: 'Kimbap', pos: 'noun', level: 'basic', examples: [
    { korean: '김밥을 만들었어요.', myanmar: 'ကင်းပပ် လုပ်ခဲ့တယ်။', english: 'I made kimbap.' }
  ]},
  { id: '209', korean: '까마귀', myanmar: 'ကျီးကန်း', english: 'Crow', pos: 'noun', level: 'basic', examples: [
    { korean: '까마귀가 울어요.', myanmar: 'ကျီးကန်းက အော်တယ်။', english: 'The crow caws.' }
  ]},
  { id: '210', korean: '깜짝', myanmar: 'ရုတ်တရက်', english: 'Suddenly/Surprise', pos: 'adverb', level: 'basic', examples: [
    { korean: '깜짝 놀랐어요.', myanmar: 'ရုတ်တရက် တုန်လှုပ်ခဲ့တယ်။', english: 'I was suddenly surprised.' }
  ]},
  { id: '211', korean: '깨', myanmar: 'ကြေး', english: 'Sesame', pos: 'noun', level: 'basic', examples: [
    { korean: '깨를 뿌렸어요.', myanmar: 'ကြေးကို ဖြန့်ခဲ့တယ်။', english: 'I sprinkled sesame.' }
  ]},
  { id: '212', korean: '꺾다', myanmar: 'ချိုး', english: 'To break/snap', pos: 'verb', level: 'basic', examples: [
    { korean: '가지를 꺾었어요.', myanmar: 'အကိုင်းကို ချိုးခဲ့တယ်။', english: 'I broke the branch.' }
  ]},
  { id: '213', korean: '꼬마', myanmar: 'ကလေးငယ်', english: 'Little child', pos: 'noun', level: 'basic', examples: [
    { korean: '꼬마가 뛰어놀아요.', myanmar: 'ကလေးငယ်က ပြေးကစားတယ်။', english: 'The little child runs and plays.' }
  ]},
  { id: '214', korean: '꽃가루', myanmar: 'ပန်းမှုန့်', english: 'Pollen', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃가루가 날려요.', myanmar: 'ပန်းမှုန့်က လွင့်တယ်။', english: 'Pollen is flying.' }
  ]},
  // === REMAINING 50 BASIC LEVEL ㄱ WORDS ===
  { id: '215', korean: '꿈틀', myanmar: 'လှုပ်ရှား', english: 'Wriggle', pos: 'verb', level: 'basic', examples: [
    { korean: '벌레가 꿈틀거려요.', myanmar: 'ပိုးက လှုပ်ရှားတယ်။', english: 'The worm wriggles.' }
  ]},
  { id: '216', korean: '끌다', myanmar: 'ဆွဲ', english: 'To pull/drag', pos: 'verb', level: 'basic', examples: [
    { korean: '무거운 것을 끌었어요.', myanmar: 'လေးတဲ့ အရာကို ဆွဲခဲ့တယ်။', english: 'I dragged something heavy.' }
  ]},
  { id: '217', korean: '끌어내다', myanmar: 'ဆွဲထုတ်', english: 'To pull out', pos: 'verb', level: 'basic', examples: [
    { korean: '서랍을 끌어냈어요.', myanmar: 'အံဆွဲကို ဆွဲထုတ်ခဲ့တယ်။', english: 'I pulled out the drawer.' }
  ]},
  { id: '218', korean: '끓이다', myanmar: 'ဆူအောင်လုပ်', english: 'To boil', pos: 'verb', level: 'basic', examples: [
    { korean: '물을 끓였어요.', myanmar: 'ရေကို ဆူအောင်လုပ်ခဲ့တယ်။', english: 'I boiled water.' }
  ]},
  { id: '219', korean: '끼다', myanmar: 'ဝင်', english: 'To fit/insert', pos: 'verb', level: 'basic', examples: [
    { korean: '반지를 꼈어요.', myanmar: 'လက်စွပ် ဝင်းခဲ့တယ်။', english: 'I put on the ring.' }
  ]},
  { id: '220', korean: '끼니', myanmar: 'အစားအသောက်', english: 'Meal', pos: 'noun', level: 'basic', examples: [
    { korean: '세 끼니를 먹어요.', myanmar: 'အစားအသောက် သုံးကြိမ် စားတယ်။', english: 'I eat three meals.' }
  ]},
  { id: '221', korean: '끼우다', myanmar: 'ထည့်သွင်း', english: 'To insert', pos: 'verb', level: 'basic', examples: [
    { korean: '열쇠를 끼웠어요.', myanmar: 'သော့ကို ထည့်သွင်းခဲ့တယ်။', english: 'I inserted the key.' }
  ]},
  { id: '222', korean: '끝까지', myanmar: 'အဆုံးအထိ', english: 'Until the end', pos: 'adverb', level: 'basic', examples: [
    { korean: '끝까지 했어요.', myanmar: 'အဆုံးအထိ လုပ်ခဲ့တယ်။', english: 'I did it until the end.' }
  ]},
  { id: '223', korean: '끝없이', myanmar: 'အဆုံးမရှိ', english: 'Endlessly', pos: 'adverb', level: 'basic', examples: [
    { korean: '끝없이 계속돼요.', myanmar: 'အဆုံးမရှိ ဆက်လက်နေတယ်။', english: 'It continues endlessly.' }
  ]},
  { id: '224', korean: '긁어내다', myanmar: 'ခြစ်ထုတ်', english: 'To scrape out', pos: 'verb', level: 'basic', examples: [
    { korean: '흙을 긁어냈어요.', myanmar: 'မြေကို ခြစ်ထုတ်ခဲ့တယ်။', english: 'I scraped out the dirt.' }
  ]},
  { id: '225', korean: '글감', myanmar: 'စာရေးရာ အကြောင်းအရာ', english: 'Writing topic', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 글감을 찾았어요.', myanmar: 'ကောင်းတဲ့ စာရေးရာ အကြောင်းအရာ ရှာတွေ့ခဲ့တယ်။', english: 'I found a good writing topic.' }
  ]},
  { id: '226', korean: '글꼴', myanmar: 'စာလုံးပုံစံ', english: 'Font', pos: 'noun', level: 'basic', examples: [
    { korean: '글꼴을 바꿨어요.', myanmar: 'စာလုံးပုံစံကို ပြောင်းခဲ့တယ်။', english: 'I changed the font.' }
  ]},
  { id: '227', korean: '금고리', myanmar: 'ရွှေလက်စွပ်', english: 'Gold ring', pos: 'noun', level: 'basic', examples: [
    { korean: '금고리가 반짝여요.', myanmar: 'ရွှေလက်စွပ်က တောက်ပတယ်။', english: 'The gold ring shines.' }
  ]},
  { id: '228', korean: '금메달', myanmar: 'ရွှေတံဆိပ်', english: 'Gold medal', pos: 'noun', level: 'basic', examples: [
    { korean: '금메달을 땄어요.', myanmar: 'ရွှေတံဆိပ် ရခဲ့တယ်။', english: 'I won a gold medal.' }
  ]},
  { id: '229', korean: '금붕어', myanmar: 'ရွှေငါး', english: 'Goldfish', pos: 'noun', level: 'basic', examples: [
    { korean: '금붕어를 키워요.', myanmar: 'ရွှေငါး မွေးတယ်။', english: 'I raise goldfish.' }
  ]},
  { id: '230', korean: '금세', myanmar: 'မကြာမီ', english: 'Soon', pos: 'adverb', level: 'basic', examples: [
    { korean: '금세 끝날 거예요.', myanmar: 'မကြာမီ ပြီးမှာ ပါ။', english: 'It will be finished soon.' }
  ]},
  { id: '231', korean: '급식', myanmar: 'အစားအသောက်ပေးခြင်း', english: 'School meal', pos: 'noun', level: 'basic', examples: [
    { korean: '급식을 먹었어요.', myanmar: 'ကျောင်းမှာ ပေးတဲ့ အစားအသောက် စားခဲ့တယ်။', english: 'I ate the school meal.' }
  ]},
  { id: '232', korean: '기간', myanmar: 'ကာလ', english: 'Period', pos: 'noun', level: 'basic', examples: [
    { korean: '짧은 기간이에요.', myanmar: 'တိုတဲ့ ကာလပါ။', english: 'It\'s a short period.' }
  ]},
  { id: '233', korean: '기계식', myanmar: 'စက်ပိုင်းဆိုင်ရာ', english: 'Mechanical', pos: 'adjective', level: 'basic', examples: [
    { korean: '기계식 시계예요.', myanmar: 'စက်ပိုင်းဆိုင်ရာ နာရီပါ။', english: 'It\'s a mechanical watch.' }
  ]},
  { id: '234', korean: '기념품', myanmar: 'အမှတ်တရပစ္စည်း', english: 'Souvenir', pos: 'noun', level: 'basic', examples: [
    { korean: '기념품을 샀어요.', myanmar: 'အမှတ်တရပစ္စည်း ဝယ်ခဲ့တယ်။', english: 'I bought a souvenir.' }
  ]},
  { id: '235', korean: '기다림', myanmar: 'စောင့်ခြင်း', english: 'Waiting', pos: 'noun', level: 'basic', examples: [
    { korean: '긴 기다림이었어요.', myanmar: 'ရှည်တဲ့ စောင့်ခြင်း ဖြစ်ခဲ့တယ်။', english: 'It was a long wait.' }
  ]},
  { id: '236', korean: '기린', myanmar: 'သစ်ကုလားအုတ်', english: 'Giraffe', pos: 'noun', level: 'basic', examples: [
    { korean: '기린의 목이 길어요.', myanmar: 'သစ်ကုလားအုတ်ရဲ့ လည်ပင်း ရှည်တယ်။', english: 'The giraffe\'s neck is long.' }
  ]},
  { id: '237', korean: '기말', myanmar: 'စာသင်နှစ်အဆုံး', english: 'End of term', pos: 'noun', level: 'basic', examples: [
    { korean: '기말시험이 있어요.', myanmar: 'စာသင်နှစ်အဆုံး စာမေးပွဲ ရှိတယ်။', english: 'There is a final exam.' }
  ]},
  { id: '238', korean: '기모', myanmar: 'အမွေးပါသော', english: 'Fleece', pos: 'noun', level: 'basic', examples: [
    { korean: '기모 옷을 입었어요.', myanmar: 'အမွေးပါတဲ့ အဝတ် ဝတ်ခဲ့တယ်။', english: 'I wore fleece clothes.' }
  ]},
  { id: '239', korean: '기발하다', myanmar: 'ထူးခြားသည်', english: 'To be ingenious', pos: 'adjective', level: 'basic', examples: [
    { korean: '기발한 아이디어예요.', myanmar: 'ထူးခြားတဲ့ အိုင်ဒီယာပါ။', english: 'It\'s an ingenious idea.' }
  ]},
  { id: '240', korean: '기본기', myanmar: 'အခြေခံ ကျွမ်းကျင်မှု', english: 'Basic skill', pos: 'noun', level: 'basic', examples: [
    { korean: '기본기가 중요해요.', myanmar: 'အခြေခံ ကျွမ်းကျင်မှု အရေးကြီးတယ်။', english: 'Basic skills are important.' }
  ]},
  { id: '241', korean: '기쁘다', myanmar: 'ပျော်သည်', english: 'To be glad', pos: 'adjective', level: 'basic', examples: [
    { korean: '만나서 기뻐요.', myanmar: 'တွေ့လို့ ပျော်တယ်။', english: 'I\'m glad to meet you.' }
  ]},
  { id: '242', korean: '기울이다', myanmar: 'စောင်းအောင်လုပ်', english: 'To tilt', pos: 'verb', level: 'basic', examples: [
    { korean: '컵을 기울였어요.', myanmar: 'ခွက်ကို စောင်းအောင်လုပ်ခဲ့တယ်။', english: 'I tilted the cup.' }
  ]},
  { id: '243', korean: '기지개', myanmar: 'ကိုယ်ဆန့်', english: 'Stretch', pos: 'noun', level: 'basic', examples: [
    { korean: '기지개를 켰어요.', myanmar: 'ကိုယ်ဆန့်ခဲ့တယ်။', english: 'I stretched.' }
  ]},
  { id: '244', korean: '긴장', myanmar: 'စိတ်တင်းမာ', english: 'Tension', pos: 'noun', level: 'basic', examples: [
    { korean: '긴장이 돼요.', myanmar: 'စိတ်တင်းမာတယ်။', english: 'I\'m nervous.' }
  ]},
  { id: '245', korean: '길가', myanmar: 'လမ်းဘေး', english: 'Roadside', pos: 'noun', level: 'basic', examples: [
    { korean: '길가에 서 있어요.', myanmar: 'လမ်းဘေးမှာ ရပ်နေတယ်။', english: 'I\'m standing on the roadside.' }
  ]},
  { id: '246', korean: '길거리', myanmar: 'လမ်းမ', english: 'Street', pos: 'noun', level: 'basic', examples: [
    { korean: '길거리가 복잡해요.', myanmar: 'လမ်းမက ရှုပ်ထွေးတယ်။', english: 'The street is crowded.' }
  ]},
  { id: '247', korean: '길들이다', myanmar: 'နူးညံ့အောင်လုပ်', english: 'To tame', pos: 'verb', level: 'basic', examples: [
    { korean: '동물을 길들였어요.', myanmar: 'တိရစ္ဆာန်ကို နူးညံ့အောင်လုပ်ခဲ့တယ်။', english: 'I tamed the animal.' }
  ]},
  { id: '248', korean: '김치찌개', myanmar: 'ကင်းချီ ဟင်းချို', english: 'Kimchi stew', pos: 'noun', level: 'basic', examples: [
    { korean: '김치찌개를 끓였어요.', myanmar: 'ကင်းချီ ဟင်းချို ချက်ခဲ့တယ်။', english: 'I cooked kimchi stew.' }
  ]},
  { id: '249', korean: '깊숙이', myanmar: 'နက်နက်ရှိုင်းရှိုင်း', english: 'Deeply', pos: 'adverb', level: 'basic', examples: [
    { korean: '깊숙이 들어갔어요.', myanmar: 'နက်နက်ရှိုင်းရှိုင်း ဝင်သွားခဲ့တယ်။', english: 'I went in deeply.' }
  ]},
  { id: '250', korean: '깍두기', myanmar: 'မုန်လာဥ ကင်းချီ', english: 'Cubed radish kimchi', pos: 'noun', level: 'basic', examples: [
    { korean: '깍두기가 아삭해요.', myanmar: 'မုန်လာဥ ကင်းချီက ကြွပ်ကြွပ်တယ်။', english: 'The cubed radish kimchi is crunchy.' }
  ]},
  { id: '251', korean: '깜빡깜빡', myanmar: 'တောက်လျှောက်', english: 'Blinking', pos: 'adverb', level: 'basic', examples: [
    { korean: '불이 깜빡깜빡해요.', myanmar: 'မီးက တောက်လျှောက် ဖြစ်နေတယ်။', english: 'The light is blinking.' }
  ]},
  { id: '252', korean: '깨물다', myanmar: 'ကိုက်', english: 'To bite', pos: 'verb', level: 'basic', examples: [
    { korean: '사과를 깨물었어요.', myanmar: 'ပန်းသီးကို ကိုက်ခဲ့တယ်။', english: 'I bit the apple.' }
  ]},
  { id: '253', korean: '깨소금', myanmar: 'ကြေးမှုန့်', english: 'Ground sesame', pos: 'noun', level: 'basic', examples: [
    { korean: '깨소금을 뿌렸어요.', myanmar: 'ကြေးမှုန့်ကို ဖြန့်ခဲ့တယ်။', english: 'I sprinkled ground sesame.' }
  ]},
  { id: '254', korean: '깨어나다', myanmar: 'နိုးလာ', english: 'To wake up', pos: 'verb', level: 'basic', examples: [
    { korean: '일찍 깨어났어요.', myanmar: 'စောစော နိုးလာခဲ့တယ်။', english: 'I woke up early.' }
  ]},
  { id: '255', korean: '깨지다', myanmar: 'ကွဲ', english: 'To break', pos: 'verb', level: 'basic', examples: [
    { korean: '유리가 깨졌어요.', myanmar: 'ဖန်က ကွဲခဲ့တယ်။', english: 'The glass broke.' }
  ]},
  { id: '256', korean: '꺼림', myanmar: 'ရွံ့စား', english: 'Reluctance', pos: 'noun', level: 'basic', examples: [
    { korean: '꺼림이 있어요.', myanmar: 'ရွံ့စားမှု ရှိတယ်။', english: 'I have reluctance.' }
  ]},
  { id: '257', korean: '꺼리다', myanmar: 'ရွံ့', english: 'To be reluctant', pos: 'verb', level: 'basic', examples: [
    { korean: '말하기를 꺼려요.', myanmar: 'ပြောရတာကို ရွံ့တယ်။', english: 'I\'m reluctant to speak.' }
  ]},
  { id: '258', korean: '꺽꺽', myanmar: 'ကက်ကက်', english: 'Quack quack', pos: 'interjection', level: 'basic', examples: [
    { korean: '오리가 꺽꺽 울어요.', myanmar: 'ဘဲက ကက်ကက် အော်တယ်။', english: 'The duck quacks.' }
  ]},
  { id: '259', korean: '꼬박꼬박', myanmar: 'ပုံမှန်', english: 'Regularly', pos: 'adverb', level: 'basic', examples: [
    { korean: '꼬박꼬박 해요.', myanmar: 'ပုံမှန် လုပ်တယ်။', english: 'I do it regularly.' }
  ]},
  { id: '260', korean: '꼬치', myanmar: 'ကင်တံ', english: 'Skewer', pos: 'noun', level: 'basic', examples: [
    { korean: '꼬치를 구웠어요.', myanmar: 'ကင်တံကို ကင်ခဲ့တယ်။', english: 'I grilled skewers.' }
  ]},
  { id: '261', korean: '꼴', myanmar: 'ပုံသဏ္ဍာန်', english: 'Appearance', pos: 'noun', level: 'basic', examples: [
    { korean: '이상한 꼴이에요.', myanmar: 'ထူးဆန်းတဲ့ ပုံသဏ္ဍာန်ပါ။', english: 'It\'s a strange appearance.' }
  ]},
  { id: '262', korean: '꽁꽁', myanmar: 'တင်းတင်း', english: 'Tightly', pos: 'adverb', level: 'basic', examples: [
    { korean: '꽁꽁 얼었어요.', myanmar: 'တင်းတင်း အေးခဲခဲ့တယ်။', english: 'It froze tightly.' }
  ]},
  { id: '263', korean: '꽃다발', myanmar: 'ပန်းစည်း', english: 'Bouquet', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃다발을 받았어요.', myanmar: 'ပန်းစည်း ရခဲ့တယ်။', english: 'I received a bouquet.' }
  ]},
  { id: '264', korean: '꽃잎', myanmar: 'ပန်းပွင့်', english: 'Petal', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃잎이 떨어져요.', myanmar: 'ပန်းပွင့်က ကြွေတယ်။', english: 'The petals are falling.' }
  ]},
  // === ADDITIONAL 900 BASIC LEVEL ㄱ WORDS (BATCH 1: 265-364) ===
  { id: '265', korean: '가락', myanmar: 'ခြေလက်', english: 'Finger/toe', pos: 'noun', level: 'basic', examples: [
    { korean: '가락이 길어요.', myanmar: 'ခြေလက်က ရှည်တယ်။', english: 'The finger is long.' }
  ]},
  { id: '266', korean: '가래', myanmar: 'တံနွေး', english: 'Phlegm', pos: 'noun', level: 'basic', examples: [
    { korean: '가래가 나와요.', myanmar: 'တံနွေး ထွက်တယ်။', english: 'Phlegm comes out.' }
  ]},
  { id: '267', korean: '가루', myanmar: 'မှုန့်', english: 'Powder', pos: 'noun', level: 'basic', examples: [
    { korean: '밀가루를 넣었어요.', myanmar: 'ဂျုံမှုန့် ထည့်ခဲ့တယ်။', english: 'I added flour.' }
  ]},
  { id: '268', korean: '가마', myanmar: 'မီးဖို', english: 'Kiln/Oven', pos: 'noun', level: 'basic', examples: [
    { korean: '가마에서 구웠어요.', myanmar: 'မီးဖိုမှာ ကင်ခဲ့တယ်။', english: 'I baked it in the oven.' }
  ]},
  { id: '269', korean: '가면', myanmar: 'မျက်နှာဖုံး', english: 'Mask', pos: 'noun', level: 'basic', examples: [
    { korean: '가면을 썼어요.', myanmar: 'မျက်နှာဖုံး ဆောင်းခဲ့တယ်။', english: 'I wore a mask.' }
  ]},
  { id: '270', korean: '가물치', myanmar: 'ငါးခေါင်းမြီး', english: 'Snakehead fish', pos: 'noun', level: 'basic', examples: [
    { korean: '가물치를 잡았어요.', myanmar: 'ငါးခေါင်းမြီး ဖမ်းခဲ့တယ်။', english: 'I caught a snakehead fish.' }
  ]},
  { id: '271', korean: '가발', myanmar: 'ဆံပင်အတုအပ', english: 'Wig', pos: 'noun', level: 'basic', examples: [
    { korean: '가발을 썼어요.', myanmar: 'ဆံပင်အတုအပ ဆောင်းခဲ့တယ်။', english: 'I wore a wig.' }
  ]},
  { id: '272', korean: '가사', myanmar: 'သီချင်းစာသား', english: 'Lyrics', pos: 'noun', level: 'basic', examples: [
    { korean: '가사를 외웠어요.', myanmar: 'သီချင်းစာသားကို မှတ်ခဲ့တယ်။', english: 'I memorized the lyrics.' }
  ]},
  { id: '273', korean: '가시', myanmar: 'ဆူး', english: 'Thorn', pos: 'noun', level: 'basic', examples: [
    { korean: '가시에 찔렸어요.', myanmar: 'ဆူးနဲ့ ထိုးခံရတယ်။', english: 'I got pricked by a thorn.' }
  ]},
  { id: '274', korean: '가슴', myanmar: 'ရင်ဘတ်', english: 'Chest', pos: 'noun', level: 'basic', examples: [
    { korean: '가슴이 아파요.', myanmar: 'ရင်ဘတ် နာတယ်။', english: 'My chest hurts.' }
  ]},
  { id: '275', korean: '가죽', myanmar: 'သားရေ', english: 'Leather', pos: 'noun', level: 'basic', examples: [
    { korean: '가죽 신발이에요.', myanmar: 'သားရေ ဖိနပ်ပါ။', english: 'They are leather shoes.' }
  ]},
  { id: '276', korean: '간판', myanmar: 'ဆိုင်းဘုတ်', english: 'Sign board', pos: 'noun', level: 'basic', examples: [
    { korean: '간판을 봤어요.', myanmar: 'ဆိုင်းဘုတ်ကို ကြည့်ခဲ့တယ်။', english: 'I saw the sign board.' }
  ]},
  { id: '277', korean: '갈매기', myanmar: 'ပင်လယ်ငှက်', english: 'Seagull', pos: 'noun', level: 'basic', examples: [
    { korean: '갈매기가 날아요.', myanmar: 'ပင်လယ်ငှက်က ပျံတယ်။', english: 'The seagull flies.' }
  ]},
  { id: '278', korean: '갈치', myanmar: 'ငါးဖြူ', english: 'Hairtail fish', pos: 'noun', level: 'basic', examples: [
    { korean: '갈치를 구웠어요.', myanmar: 'ငါးဖြူကို ကင်ခဲ့တယ်။', english: 'I grilled hairtail fish.' }
  ]},
  { id: '279', korean: '감', myanmar: 'ကခုံသီး', english: 'Persimmon', pos: 'noun', level: 'basic', examples: [
    { korean: '감이 달아요.', myanmar: 'ကခုံသီးက ချိုတယ်။', english: 'The persimmon is sweet.' }
  ]},
  { id: '280', korean: '감자탕', myanmar: 'အာလူး ဟင်းချို', english: 'Pork backbone stew', pos: 'noun', level: 'basic', examples: [
    { korean: '감자탕을 먹었어요.', myanmar: 'အာလူး ဟင်းချို စားခဲ့တယ်။', english: 'I ate pork backbone stew.' }
  ]},
  { id: '281', korean: '갓', myanmar: 'ဦးထုပ်', english: 'Hat', pos: 'noun', level: 'basic', examples: [
    { korean: '갓을 썼어요.', myanmar: 'ဦးထုပ် ဆောင်းခဲ့တယ်။', english: 'I wore a hat.' }
  ]},
  { id: '282', korean: '개나리', myanmar: 'ပန်းဝါငယ်', english: 'Forsythia', pos: 'noun', level: 'basic', examples: [
    { korean: '개나리가 피었어요.', myanmar: 'ပန်းဝါငယ်က ပွင့်ခဲ့တယ်။', english: 'The forsythia bloomed.' }
  ]},
  { id: '283', korean: '개떡', myanmar: 'ခွေးမုန့်', english: 'Dog cake', pos: 'noun', level: 'basic', examples: [
    { korean: '개떡을 만들었어요.', myanmar: 'ခွေးမုန့် လုပ်ခဲ့တယ်။', english: 'I made dog cake.' }
  ]},
  { id: '284', korean: '개울', myanmar: 'ချောင်း', english: 'Stream', pos: 'noun', level: 'basic', examples: [
    { korean: '개울이 흘러요.', myanmar: 'ချောင်းက စီးတယ်။', english: 'The stream flows.' }
  ]},
  { id: '285', korean: '거미', myanmar: 'ပင့်ကူ', english: 'Spider', pos: 'noun', level: 'basic', examples: [
    { korean: '거미가 집을 짓고 있어요.', myanmar: 'ပင့်ကူက အိမ် ဆောက်နေတယ်။', english: 'The spider is building a web.' }
  ]},
  { id: '286', korean: '거위', myanmar: 'ငန်း', english: 'Goose', pos: 'noun', level: 'basic', examples: [
    { korean: '거위가 헤엄쳐요.', myanmar: 'ငန်းက ရေကူးတယ်။', english: 'The goose swims.' }
  ]},
  { id: '287', korean: '게살', myanmar: 'ကဏန်းသား', english: 'Crab meat', pos: 'noun', level: 'basic', examples: [
    { korean: '게살을 먹었어요.', myanmar: 'ကဏန်းသား စားခဲ့တယ်။', english: 'I ate crab meat.' }
  ]},
  { id: '288', korean: '겨자', myanmar: 'မုန့်ညင်း', english: 'Mustard', pos: 'noun', level: 'basic', examples: [
    { korean: '겨자를 발랐어요.', myanmar: 'မုန့်ညင်း လူးခဲ့တယ်။', english: 'I applied mustard.' }
  ]},
  { id: '289', korean: '견과', myanmar: 'အခွံမာသီး', english: 'Nuts', pos: 'noun', level: 'basic', examples: [
    { korean: '견과류를 먹어요.', myanmar: 'အခွံမာသီးတွေ စားတယ်။', english: 'I eat nuts.' }
  ]},
  { id: '290', korean: '결승', myanmar: 'ဗိုလ်လုပွဲ', english: 'Final match', pos: 'noun', level: 'basic', examples: [
    { korean: '결승에 진출했어요.', myanmar: 'ဗိုလ်လုပွဲကို ရောက်ခဲ့တယ်။', english: 'We reached the finals.' }
  ]},
  { id: '291', korean: '경기장', myanmar: 'အားကစားကွင်း', english: 'Stadium', pos: 'noun', level: 'basic', examples: [
    { korean: '경기장에 갔어요.', myanmar: 'အားကစားကွင်းကို သွားခဲ့တယ်။', english: 'I went to the stadium.' }
  ]},
  { id: '292', korean: '계단', myanmar: 'လှေကား', english: 'Stairs', pos: 'noun', level: 'basic', examples: [
    { korean: '계단을 올라갔어요.', myanmar: 'လှေကား တက်သွားခဲ့တယ်။', english: 'I went up the stairs.' }
  ]},
  { id: '293', korean: '고등어', myanmar: 'ငါးကွင်းရှပ်', english: 'Mackerel', pos: 'noun', level: 'basic', examples: [
    { korean: '고등어를 구웠어요.', myanmar: 'ငါးကွင်းရှပ်ကို ကင်ခဲ့တယ်။', english: 'I grilled mackerel.' }
  ]},
    { id: '294', korean: '고무', myanmar: 'ရော်ဘာ', english: 'Rubber', pos: 'noun', level: 'basic', examples: [
    { korean: '고무공이에요.', myanmar: 'ရော်ဘာ ဘောလုံးပါ။', english: 'It\'s a rubber ball.' }
  ]},
  { id: '295', korean: '고사리', myanmar: 'ကညွန့်ရွက်', english: 'Bracken', pos: 'noun', level: 'basic', examples: [
    { korean: '고사리를 볶았어요.', myanmar: 'ကညွန့်ရွက်ကို ကြော်ခဲ့တယ်။', english: 'I stir-fried bracken.' }
  ]},
  { id: '296', korean: '고슴도치', myanmar: 'ဆူးကြွေ', english: 'Hedgehog', pos: 'noun', level: 'basic', examples: [
    { korean: '고슴도치가 둥글어요.', myanmar: 'ဆူးကြွေက လုံးတယ်။', english: 'The hedgehog is round.' }
  ]},
  { id: '297', korean: '고춧가루', myanmar: 'ငရုတ်သီးမှုန့်', english: 'Chili powder', pos: 'noun', level: 'basic', examples: [
    { korean: '고춧가루를 넣었어요.', myanmar: 'ငရုတ်သီးမှုန့် ထည့်ခဲ့တယ်။', english: 'I added chili powder.' }
  ]},
  { id: '298', korean: '골짜기', myanmar: 'ချိုင့်ဝှမ်း', english: 'Valley', pos: 'noun', level: 'basic', examples: [
    { korean: '골짜기가 깊어요.', myanmar: 'ချိုင့်ဝှမ်းက နက်တယ်။', english: 'The valley is deep.' }
  ]},
  { id: '299', korean: '곶감', myanmar: 'ကခုံသီးခြောက်', english: 'Dried persimmon', pos: 'noun', level: 'basic', examples: [
    { korean: '곶감이 달아요.', myanmar: 'ကခုံသီးခြောက်က ချိုတယ်။', english: 'Dried persimmon is sweet.' }
  ]},
  { id: '300', korean: '공항', myanmar: 'လေဆိပ်', english: 'Airport', pos: 'noun', level: 'basic', examples: [
    { korean: '공항에 도착했어요.', myanmar: 'လေဆိပ်ကို ရောက်ခဲ့တယ်။', english: 'I arrived at the airport.' }
  ]},
  { id: '301', korean: '괜찮다', myanmar: 'ကောင်းသည်', english: 'To be okay', pos: 'adjective', level: 'basic', examples: [
    { korean: '괜찮아요.', myanmar: 'ကောင်းတယ်။', english: 'It\'s okay.' }
  ]},
  { id: '302', korean: '구경', myanmar: 'ကြည့်ရှုခြင်း', english: 'Sightseeing', pos: 'noun', level: 'basic', examples: [
    { korean: '구경을 갔어요.', myanmar: 'ကြည့်ရှုရန် သွားခဲ့တယ်။', english: 'I went sightseeing.' }
  ]},
  { id: '303', korean: '구름다리', myanmar: 'တံတားအုပ်', english: 'Overpass', pos: 'noun', level: 'basic', examples: [
    { korean: '구름다리를 건넜어요.', myanmar: 'တံတားအုပ်ကို ဖြတ်ခဲ့တယ်။', english: 'I crossed the overpass.' }
  ]},
  { id: '304', korean: '구슬', myanmar: 'ပုတီး', english: 'Marble/Bead', pos: 'noun', level: 'basic', examples: [
    { korean: '구슬이 반짝여요.', myanmar: 'ပုတီးက တောက်ပတယ်။', english: 'The marble shines.' }
  ]},
  { id: '305', korean: '국물', myanmar: 'ဟင်းရည်', english: 'Broth', pos: 'noun', level: 'basic', examples: [
    { korean: '국물이 뜨거워요.', myanmar: 'ဟင်းရည်က ပူတယ်။', english: 'The broth is hot.' }
  ]},
  { id: '306', korean: '굴뚝', myanmar: 'မီးခိုးပြွန်', english: 'Chimney', pos: 'noun', level: 'basic', examples: [
    { korean: '굴뚝에서 연기가 나와요.', myanmar: 'မီးခိုးပြွန်က မီးခိုး ထွက်တယ်။', english: 'Smoke comes out of the chimney.' }
  ]},
  { id: '307', korean: '굴삭기', myanmar: 'တူးစက်', english: 'Excavator', pos: 'noun', level: 'basic', examples: [
    { korean: '굴삭기가 일해요.', myanmar: 'တူးစက်က အလုပ်လုပ်တယ်။', english: 'The excavator is working.' }
  ]},
  { id: '308', korean: '굽이', myanmar: 'ကွေ့', english: 'Bend/Curve', pos: 'noun', level: 'basic', examples: [
    { korean: '길에 굽이가 있어요.', myanmar: 'လမ်းမှာ ကွေ့ ရှိတယ်။', english: 'There is a bend in the road.' }
  ]},
  { id: '309', korean: '귀걸이', myanmar: 'နားကပ်', english: 'Earring', pos: 'noun', level: 'basic', examples: [
    { korean: '귀걸이를 했어요.', myanmar: 'နားကပ် တပ်ခဲ့တယ်။', english: 'I wore earrings.' }
  ]},
  { id: '310', korean: '그네', myanmar: 'လွှဲ', english: 'Swing', pos: 'noun', level: 'basic', examples: [
    { korean: '그네를 탔어요.', myanmar: 'လွှဲ စီးခဲ့တယ်။', english: 'I rode the swing.' }
  ]},
  { id: '311', korean: '그릇장', myanmar: 'ပန်းကန်သေတ္တာ', english: 'Cupboard', pos: 'noun', level: 'basic', examples: [
    { korean: '그릇장을 열었어요.', myanmar: 'ပန်းကန်သေတ္တာ ဖွင့်ခဲ့တယ်။', english: 'I opened the cupboard.' }
  ]},
  { id: '312', korean: '그림자', myanmar: 'အရိပ်', english: 'Shadow', pos: 'noun', level: 'basic', examples: [
    { korean: '그림자가 길어요.', myanmar: 'အရိပ်က ရှည်တယ်။', english: 'The shadow is long.' }
  ]},
  { id: '313', korean: '근무', myanmar: 'အလုပ်လုပ်ခြင်း', english: 'Work/Duty', pos: 'noun', level: 'basic', examples: [
    { korean: '근무시간이에요.', myanmar: 'အလုပ်လုပ်ချိန်ပါ။', english: 'It\'s work time.' }
  ]},
  { id: '314', korean: '글자판', myanmar: 'စာလုံးခလုတ်', english: 'Keyboard', pos: 'noun', level: 'basic', examples: [
    { korean: '글자판으로 쳤어요.', myanmar: 'စာလုံးခလုတ်နဲ့ ရိုက်ခဲ့တယ်။', english: 'I typed with the keyboard.' }
  ]},
  { id: '315', korean: '금고기', myanmar: 'ငါးရွှေ', english: 'Goldfish', pos: 'noun', level: 'basic', examples: [
    { korean: '금고기가 헤엄쳐요.', myanmar: 'ငါးရွှေက ရေကူးတယ်။', english: 'The goldfish swims.' }
  ]},
  { id: '316', korean: '기관차', myanmar: 'ရထားခေါင်း', english: 'Locomotive', pos: 'noun', level: 'basic', examples: [
    { korean: '기관차가 달려요.', myanmar: 'ရထားခေါင်းက ပြေးတယ်။', english: 'The locomotive runs.' }
  ]},
  { id: '317', korean: '기념일', myanmar: 'အမှတ်တရနေ့', english: 'Anniversary', pos: 'noun', level: 'basic', examples: [
    { korean: '오늘은 기념일이에요.', myanmar: 'ဒီနေ့က အမှတ်တရနေ့ပါ။', english: 'Today is an anniversary.' }
  ]},
  { id: '318', korean: '기도문', myanmar: 'ဆုတောင်းစာ', english: 'Prayer', pos: 'noun', level: 'basic', examples: [
    { korean: '기도문을 읽었어요.', myanmar: 'ဆုတောင်းစာ ဖတ်ခဲ့တယ်။', english: 'I read a prayer.' }
  ]},
  { id: '319', korean: '기와', myanmar: 'အမိုးကွန်း', english: 'Roof tile', pos: 'noun', level: 'basic', examples: [
    { korean: '기와집이에요.', myanmar: 'အမိုးကွန်း အိမ်ပါ။', english: 'It\'s a tile-roofed house.' }
  ]},
  { id: '320', korean: '김장', myanmar: 'ကင်းချီလုပ်ခြင်း', english: 'Making kimchi', pos: 'noun', level: 'basic', examples: [
    { korean: '김장을 했어요.', myanmar: 'ကင်းချီ လုပ်ခဲ့တယ်။', english: 'I made kimchi.' }
  ]},
  { id: '321', korean: '까치발', myanmar: 'ခြေချွန်းထောင်', english: 'Tiptoe', pos: 'noun', level: 'basic', examples: [
    { korean: '까치발로 섰어요.', myanmar: 'ခြေချွန်းထောင်ပြီး ရပ်ခဲ့တယ်။', english: 'I stood on tiptoe.' }
  ]},
  { id: '322', korean: '깍지', myanmar: 'အပေါက်', english: 'Pod', pos: 'noun', level: 'basic', examples: [
    { korean: '콩깍지를 벗겼어요.', myanmar: 'ပဲအပေါက်ကို ခွာခဲ့တယ်။', english: 'I peeled the bean pod.' }
  ]},
  { id: '323', korean: '깜짝이야', myanmar: 'အံ့သြဖွယ်', english: 'Surprising!', pos: 'interjection', level: 'basic', examples: [
    { korean: '깜짝이야! 놀랐어요.', myanmar: 'အံ့သြဖွယ်! တုန်လှုပ်ခဲ့တယ်။', english: 'Wow! I was surprised.' }
  ]},
  { id: '324', korean: '깨끗이', myanmar: 'သန့်ရှင်းစွာ', english: 'Cleanly', pos: 'adverb', level: 'basic', examples: [
    { korean: '깨끗이 씻었어요.', myanmar: 'သန့်ရှင်းစွာ ဆေးခဲ့တယ်။', english: 'I washed it cleanly.' }
  ]},
  { id: '325', korean: '꺽다리', myanmar: 'ချိုးသွားသော', english: 'Broken leg', pos: 'noun', level: 'basic', examples: [
    { korean: '꺽다리가 됐어요.', myanmar: 'ခြေချိုးသွားခဲ့တယ်။', english: 'I got a broken leg.' }
  ]},
  { id: '326', korean: '꼬깔', myanmar: 'ပုံကိုန်း', english: 'Cone', pos: 'noun', level: 'basic', examples: [
    { korean: '꼬깔을 만들었어요.', myanmar: 'ပုံကိုန်း လုပ်ခဲ့တယ်။', english: 'I made a cone.' }
  ]},
  { id: '327', korean: '꼬리표', myanmar: 'တံဆိပ်', english: 'Tag/Label', pos: 'noun', level: 'basic', examples: [
    { korean: '꼬리표를 붙였어요.', myanmar: 'တံဆိပ် ကပ်ခဲ့တယ်။', english: 'I attached a tag.' }
  ]},
  { id: '328', korean: '꽃봉오리', myanmar: 'ပန်းအကြံ့', english: 'Flower bud', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃봉오리가 맺혔어요.', myanmar: 'ပန်းအကြံ့ ပေါက်ခဲ့တယ်။', english: 'Flower buds formed.' }
  ]},
  { id: '329', korean: '꽃씨', myanmar: 'ပန်းမျိုးစေ့', english: 'Flower seed', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃씨를 심었어요.', myanmar: 'ပန်းမျိုးစေ့ စိုက်ခဲ့တယ်။', english: 'I planted flower seeds.' }
  ]},
  { id: '330', korean: '꽃향기', myanmar: 'ပန်းမွှေး', english: 'Flower fragrance', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃향기가 좋아요.', myanmar: 'ပန်းမွှေးက ကောင်းတယ်။', english: 'The flower fragrance is nice.' }
  ]},
  { id: '331', korean: '꿀벌', myanmar: 'ပျားရွှေ', english: 'Honey bee', pos: 'noun', level: 'basic', examples: [
    { korean: '꿀벌이 날아다녀요.', myanmar: 'ပျားရွှေက ပျံလွန်းနေတယ်။', english: 'Honey bees are flying around.' }
  ]},
  { id: '332', korean: '꿈나라', myanmar: 'အိပ်မက်ပြည်', english: 'Dreamland', pos: 'noun', level: 'basic', examples: [
    { korean: '꿈나라에 갔어요.', myanmar: 'အိပ်မက်ပြည်ကို သွားခဲ့တယ်။', english: 'I went to dreamland.' }
  ]},
  { id: '333', korean: '끌림', myanmar: 'ဆွဲဆောင်မှု', english: 'Attraction', pos: 'noun', level: 'basic', examples: [
    { korean: '끌림을 느껴요.', myanmar: 'ဆွဲဆောင်မှု ခံစားတယ်။', english: 'I feel attraction.' }
  ]},
  { id: '334', korean: '끓는점', myanmar: 'ဆူချက်', english: 'Boiling point', pos: 'noun', level: 'basic', examples: [
    { korean: '물의 끓는점이에요.', myanmar: 'ရေရဲ့ ဆူချက်ပါ။', english: 'It\'s the boiling point of water.' }
  ]},
  { id: '335', korean: '끝마무리', myanmar: 'နိဂုံး', english: 'Finishing touch', pos: 'noun', level: 'basic', examples: [
    { korean: '끝마무리를 했어요.', myanmar: 'နိဂုံး ချုပ်ခဲ့တယ်။', english: 'I did the finishing touch.' }
  ]},
  { id: '336', korean: '긁개', myanmar: 'ခြစ်ကိရိယာ', english: 'Scraper', pos: 'noun', level: 'basic', examples: [
    { korean: '긁개로 긁었어요.', myanmar: 'ခြစ်ကိရိယာနဲ့ ခြစ်ခဲ့တယ်။', english: 'I scraped with a scraper.' }
  ]},
  { id: '337', korean: '글귀', myanmar: 'စာပိုဒ်', english: 'Passage/Quote', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 글귀예요.', myanmar: 'ကောင်းတဲ့ စာပိုဒ်ပါ။', english: 'It\'s a good passage.' }
  ]},
  { id: '338', korean: '글방', myanmar: 'စာသင်ခန်း', english: 'Study room', pos: 'noun', level: 'basic', examples: [
    { korean: '글방에서 공부해요.', myanmar: 'စာသင်ခန်းမှာ ပညာသင်တယ်။', english: 'I study in the study room.' }
  ]},
  { id: '339', korean: '금강산', myanmar: 'ရွှေတောင်', english: 'Diamond Mountain', pos: 'noun', level: 'basic', examples: [
    { korean: '금강산이 아름다워요.', myanmar: 'ရွှေတောင်က လှတယ်။', english: 'Diamond Mountain is beautiful.' }
  ]},
  { id: '340', korean: '금년', myanmar: 'ယခုနှစ်', english: 'This year', pos: 'noun', level: 'basic', examples: [
    { korean: '금년에 졸업해요.', myanmar: 'ယခုနှစ်မှာ ဘွဲ့ရမယ်။', english: 'I graduate this year.' }
  ]},
  { id: '341', korean: '금요일날', myanmar: 'သောကြာနေ့တွင်', english: 'On Friday', pos: 'noun', level: 'basic', examples: [
    { korean: '금요일날 만나요.', myanmar: 'သောကြာနေ့တွင် တွေ့မယ်။', english: 'Let\'s meet on Friday.' }
  ]},
  { id: '342', korean: '급수대', myanmar: 'ရေသောက်နေရာ', english: 'Water fountain', pos: 'noun', level: 'basic', examples: [
    { korean: '급수대에서 물을 마셨어요.', myanmar: 'ရေသောက်နေရာမှာ ရေသောက်ခဲ့တယ်။', english: 'I drank water at the fountain.' }
  ]},
  { id: '343', korean: '기계공', myanmar: 'စက်သမား', english: 'Mechanic', pos: 'noun', level: 'basic', examples: [
    { korean: '기계공이 고쳤어요.', myanmar: 'စက်သမားက ပြင်ခဲ့တယ်။', english: 'The mechanic fixed it.' }
  ]},
  { id: '344', korean: '기념사진', myanmar: 'အမှတ်တရဓာတ်ပုံ', english: 'Commemorative photo', pos: 'noun', level: 'basic', examples: [
    { korean: '기념사진을 찍었어요.', myanmar: 'အမှတ်တရဓာတ်ပုံ ရိုက်ခဲ့တယ်။', english: 'I took a commemorative photo.' }
  ]},
  { id: '345', korean: '기다란', myanmar: 'ရှည်လျားသော', english: 'Long', pos: 'adjective', level: 'basic', examples: [
    { korean: '기다란 막대기예요.', myanmar: 'ရှည်လျားတဲ့ တုတ်ပါ။', english: 'It\'s a long stick.' }
  ]},
  { id: '346', korean: '기둥서방', myanmar: 'အိမ်တိုင်', english: 'House pillar', pos: 'noun', level: 'basic', examples: [
    { korean: '기둥서방이 튼튼해요.', myanmar: 'အိမ်တိုင်က ခိုင်မာတယ်။', english: 'The house pillar is sturdy.' }
  ]},
  { id: '347', korean: '기름기', myanmar: 'ဆီဓာတ်', english: 'Oiliness', pos: 'noun', level: 'basic', examples: [
    { korean: '기름기가 많아요.', myanmar: 'ဆီဓာတ် အများကြီး ရှိတယ်။', english: 'It has a lot of oil.' }
  ]},
  { id: '348', korean: '기름종이', myanmar: 'ဆီစက္ကူ', english: 'Oil paper', pos: 'noun', level: 'basic', examples: [
    { korean: '기름종이로 덮었어요.', myanmar: 'ဆီစက္ကူနဲ့ ဖုံးခဲ့တယ်။', english: 'I covered it with oil paper.' }
  ]},
  { id: '349', korean: '기막히다', myanmar: 'အံ့သြစရာ', english: 'To be amazing', pos: 'adjective', level: 'basic', examples: [
    { korean: '기막힌 일이에요.', myanmar: 'အံ့သြစရာ အဖြစ်အပျက်ပါ။', english: 'It\'s an amazing thing.' }
  ]},
  { id: '350', korean: '기분좋다', myanmar: 'စိတ်ကောင်းသည်', english: 'To feel good', pos: 'adjective', level: 'basic', examples: [
    { korean: '기분좋은 하루예요.', myanmar: 'စိတ်ကောင်းတဲ့ တစ်နေ့ပါ။', english: 'It\'s a good day.' }
  ]},
  { id: '351', korean: '기상청', myanmar: 'ရာသီဥတုဌာန', english: 'Weather bureau', pos: 'noun', level: 'basic', examples: [
    { korean: '기상청에서 예보했어요.', myanmar: 'ရာသီဥတုဌာနက ကြိုတင်ခန့်မှန်းခဲ့တယ်။', english: 'The weather bureau forecasted.' }
  ]},
  { id: '352', korean: '기성복', myanmar: 'အဆင်သင့်အဝတ်', english: 'Ready-made clothes', pos: 'noun', level: 'basic', examples: [
    { korean: '기성복을 샀어요.', myanmar: 'အဆင်သင့်အဝတ် ဝယ်ခဲ့တယ်။', english: 'I bought ready-made clothes.' }
  ]},
  { id: '353', korean: '기숙생', myanmar: 'ဘော်ဒါကျောင်းသား', english: 'Boarding student', pos: 'noun', level: 'basic', examples: [
    { korean: '기숙생이에요.', myanmar: 'ဘော်ဒါကျောင်းသားပါ။', english: 'I\'m a boarding student.' }
  ]},
  { id: '354', korean: '기온', myanmar: 'အပူချိန်', english: 'Temperature', pos: 'noun', level: 'basic', examples: [
    { korean: '기온이 높아요.', myanmar: 'အပူချိန်က မြင့်တယ်။', english: 'The temperature is high.' }
  ]},
  { id: '355', korean: '기울다', myanmar: 'စောင်းသည်', english: 'To lean', pos: 'verb', level: 'basic', examples: [
    { korean: '나무가 기울었어요.', myanmar: 'သစ်ပင်က စောင်းသွားတယ်။', english: 'The tree leaned.' }
  ]},
  { id: '356', korean: '기차표', myanmar: 'ရထားလက်မှတ်', english: 'Train ticket', pos: 'noun', level: 'basic', examples: [
    { korean: '기차표를 샀어요.', myanmar: 'ရထားလက်မှတ် ဝယ်ခဲ့တယ်။', english: 'I bought a train ticket.' }
  ]},
  { id: '357', korean: '긴팔', myanmar: 'လက်ရှည်', english: 'Long sleeve', pos: 'noun', level: 'basic', examples: [
    { korean: '긴팔을 입었어요.', myanmar: 'လက်ရှည် ဝတ်ခဲ့တယ်။', english: 'I wore long sleeves.' }
  ]},
  { id: '358', korean: '길쭉하다', myanmar: 'ရှည်လျားသည်', english: 'To be long and thin', pos: 'adjective', level: 'basic', examples: [
    { korean: '길쭉한 모양이에요.', myanmar: 'ရှည်လျားတဲ့ ပုံသဏ္ဍာန်ပါ။', english: 'It has a long and thin shape.' }
  ]},
  { id: '359', korean: '김이 나다', myanmar: 'ရေနွေးငွေ့တက်', english: 'To steam', pos: 'verb', level: 'basic', examples: [
    { korean: '밥에서 김이 나요.', myanmar: 'ထမင်းက ရေနွေးငွေ့ တက်တယ်။', english: 'Steam comes from the rice.' }
  ]},
  { id: '360', korean: '김치냉장고', myanmar: 'ကင်းချီရေခဲသေတ္တာ', english: 'Kimchi refrigerator', pos: 'noun', level: 'basic', examples: [
    { korean: '김치냉장고를 샀어요.', myanmar: 'ကင်းချီရေခဲသေတ္တာ ဝယ်ခဲ့တယ်။', english: 'I bought a kimchi refrigerator.' }
  ]},
  { id: '361', korean: '까만색', myanmar: 'အနက်ရောင်', english: 'Black color', pos: 'noun', level: 'basic', examples: [
    { korean: '까만색 옷이에요.', myanmar: 'အနက်ရောင် အဝတ်ပါ။', english: 'It\'s black clothes.' }
  ]},
  { id: '362', korean: '깍정이', myanmar: 'အတုံးအတစ်', english: 'Cube/Chunk', pos: 'noun', level: 'basic', examples: [
    { korean: '깍정이로 잘랐어요.', myanmar: 'အတုံးအတစ်နဲ့ ဖြတ်ခဲ့တယ်။', english: 'I cut it into chunks.' }
  ]},
  { id: '363', korean: '깜깜하다', myanmar: 'မှောင်မိုက်သည်', english: 'To be dark', pos: 'adjective', level: 'basic', examples: [
    { korean: '밤이 깜깜해요.', myanmar: 'ညက မှောင်မိုက်တယ်။', english: 'The night is dark.' }
  ]},
  { id: '364', korean: '깨끗하게', myanmar: 'သန့်ရှင်းစွာ', english: 'Cleanly', pos: 'adverb', level: 'basic', examples: [
    { korean: '깨끗하게 정리했어요.', myanmar: 'သန့်ရှင်းစွာ စုစည်းခဲ့တယ်။', english: 'I organized it cleanly.' }
  ]},
  // === BATCH 3: TRANSPORTATION & VEHICLES (365-414) ===
  { id: '365', korean: '가마니', myanmar: 'ဆန်အိတ်', english: 'Rice sack', pos: 'noun', level: 'basic', examples: [
    { korean: '가마니에 쌀을 담았어요.', myanmar: 'ဆန်အိတ်မှာ ဆန် ထည့်ခဲ့တယ်။', english: 'I put rice in the sack.' }
  ]},
  { id: '366', korean: '기차역', myanmar: 'ရထားဘူတာ', english: 'Train station', pos: 'noun', level: 'basic', examples: [
    { korean: '기차역에서 만났어요.', myanmar: 'ရထားဘူတာမှာ တွေ့ခဲ့တယ်။', english: 'We met at the train station.' }
  ]},
  { id: '367', korean: '굴다리', myanmar: 'တံတားအောက်လမ်း', english: 'Underpass', pos: 'noun', level: 'basic', examples: [
    { korean: '굴다리를 지났어요.', myanmar: 'တံတားအောက်လမ်း ဖြတ်ခဲ့တယ်။', english: 'I passed through the underpass.' }
  ]},
  { id: '368', korean: '교통비', myanmar: 'သွားလာရေးကုန်ကျစရိတ်', english: 'Transportation fee', pos: 'noun', level: 'basic', examples: [
    { korean: '교통비가 비싸요.', myanmar: 'သွားလာရေးကုန်ကျစရိတ်က စျေးကြီးတယ်။', english: 'Transportation fee is expensive.' }
  ]},
  { id: '369', korean: '교통카드', myanmar: 'Busကားကတ်', english: 'Transportation card', pos: 'noun', level: 'basic', examples: [
    { korean: '교통카드로 탔어요.', myanmar: 'Busကားကတ်နဲ့ စီးခဲ့တယ်။', english: 'I rode using a transportation card.' }
  ]},
  { id: '370', korean: '기름값', myanmar: 'ဆီဈေး', english: 'Gas price', pos: 'noun', level: 'basic', examples: [
    { korean: '기름값이 올랐어요.', myanmar: 'ဆီဈေး တက်ခဲ့တယ်။', english: 'Gas prices went up.' }
  ]},
  { id: '371', korean: '기관사', myanmar: 'ရထားမောင်းသူ', english: 'Train engineer', pos: 'noun', level: 'basic', examples: [
    { korean: '기관사가 기차를 운전해요.', myanmar: 'ရထားမောင်းသူက ရထား မောင်းတယ်။', english: 'The engineer drives the train.' }
  ]},
  { id: '372', korean: '기사님', myanmar: 'မောင်းသူကြီး', english: 'Driver (respectful)', pos: 'noun', level: 'basic', examples: [
    { korean: '기사님께 감사드렸어요.', myanmar: 'မောင်းသူကြီးကို ကျေးဇူးတင်ခဲ့တယ်။', english: 'I thanked the driver.' }
  ]},
  { id: '373', korean: '길목', myanmar: 'လမ်းဆုံ', english: 'Crossroads', pos: 'noun', level: 'basic', examples: [
    { korean: '길목에서 기다렸어요.', myanmar: 'လမ်းဆုံမှာ စောင့်ခဲ့တယ်။', english: 'I waited at the crossroads.' }
  ]},
  { id: '374', korean: '갈아타다', myanmar: 'လဲစီး', english: 'To transfer', pos: 'verb', level: 'basic', examples: [
    { korean: '지하철을 갈아탔어요.', myanmar: 'မြေအောက်ရထား လဲစီးခဲ့တယ်။', english: 'I transferred to the subway.' }
  ]},
  // === BATCH 3: SCHOOL & EDUCATION (375-424) ===
  { id: '375', korean: '가방끈', myanmar: 'အိတ်ကြိုး', english: 'Bag strap', pos: 'noun', level: 'basic', examples: [
    { korean: '가방끈이 끊어졌어요.', myanmar: 'အိတ်ကြိုး ပြတ်သွားတယ်။', english: 'The bag strap broke.' }
  ]},
  { id: '376', korean: '교과서', myanmar: 'သင်ခန်းစာအုပ်', english: 'Textbook', pos: 'noun', level: 'basic', examples: [
    { korean: '교과서를 읽었어요.', myanmar: 'သင်ခန်းစာအုပ် ဖတ်ခဲ့တယ်။', english: 'I read the textbook.' }
  ]},
  { id: '377', korean: '교무실', myanmar: 'ဆရာများခန်း', english: 'Teachers\' office', pos: 'noun', level: 'basic', examples: [
    { korean: '교무실에 갔어요.', myanmar: 'ဆရာများခန်းကို သွားခဲ့တယ်။', english: 'I went to the teachers\' office.' }
  ]},
  { id: '378', korean: '교복', myanmar: 'ကျောင်းဝတ်စုံ', english: 'School uniform', pos: 'noun', level: 'basic', examples: [
    { korean: '교복을 입었어요.', myanmar: 'ကျောင်းဝတ်စုံ ဝတ်ခဲ့တယ်။', english: 'I wore the school uniform.' }
  ]},
  { id: '379', korean: '교실문', myanmar: 'စာသင်ခန်းတံခါး', english: 'Classroom door', pos: 'noun', level: 'basic', examples: [
    { korean: '교실문을 열었어요.', myanmar: 'စာသင်ခန်းတံခါး ဖွင့်ခဲ့တယ်။', english: 'I opened the classroom door.' }
  ]},
  { id: '380', korean: '교장실', myanmar: 'ကျောင်းအုပ်ခန်း', english: 'Principal\'s office', pos: 'noun', level: 'basic', examples: [
    { korean: '교장실에 불려갔어요.', myanmar: 'ကျောင်းအုပ်ခန်းကို ခေါ်သွားခဲ့တယ်။', english: 'I was called to the principal\'s office.' }
  ]},
  { id: '381', korean: '급식실', myanmar: 'ကျောင်းအစားအသောက်ခန်း', english: 'School cafeteria', pos: 'noun', level: 'basic', examples: [
    { korean: '급식실에서 먹었어요.', myanmar: 'ကျောင်းအစားအသောက်ခန်းမှာ စားခဲ့တယ်။', english: 'I ate in the school cafeteria.' }
  ]},
  { id: '382', korean: '급식판', myanmar: 'ကျောင်းအစားခွက်', english: 'School lunch tray', pos: 'noun', level: 'basic', examples: [
    { korean: '급식판을 들고 갔어요.', myanmar: 'ကျောင်းအစားခွက် ကိုင်သွားခဲ့တယ်။', english: 'I carried the lunch tray.' }
  ]},
  { id: '383', korean: '기말고사', myanmar: 'စာသင်နှစ်အဆုံးစာမေးပွဲ', english: 'Final exam', pos: 'noun', level: 'basic', examples: [
    { korean: '기말고사를 봤어요.', myanmar: 'စာသင်နှစ်အဆုံးစာမေးပွဲ ဖြေခဲ့တယ်။', english: 'I took the final exam.' }
  ]},
  { id: '384', korean: '기숙사비', myanmar: 'ဘော်ဒါအိမ်ကုန်ကျစရိတ်', english: 'Dormitory fee', pos: 'noun', level: 'basic', examples: [
    { korean: '기숙사비를 냈어요.', myanmar: 'ဘော်ဒါအိမ်ကုန်ကျစရိတ် ပေးခဲ့တယ်။', english: 'I paid the dormitory fee.' }
  ]},
  // === BATCH 3: CLOTHING & ACCESSORIES (385-434) ===
  { id: '385', korean: '가디건', myanmar: 'အင်္ကျီပေါက်', english: 'Cardigan', pos: 'noun', level: 'basic', examples: [
    { korean: '가디건을 입었어요.', myanmar: 'အင်္ကျီပေါက် ဝတ်ခဲ့တယ်။', english: 'I wore a cardigan.' }
  ]},
  { id: '386', korean: '간편복', myanmar: 'သက်တောင့်သက်သာဖြစ်တဲ့အဝတ်', english: 'Casual wear', pos: 'noun', level: 'basic', examples: [
    { korean: '간편복으로 갈아입었어요.', myanmar: 'သက်တောင့်သက်သာဖြစ်တဲ့အဝတ်နဲ့ လဲဝတ်ခဲ့တယ်။', english: 'I changed into casual wear.' }
  ]},
  { id: '387', korean: '갈아입다', myanmar: 'လဲဝတ်', english: 'To change clothes', pos: 'verb', level: 'basic', examples: [
    { korean: '옷을 갈아입었어요.', myanmar: 'အဝတ် လဲဝတ်ခဲ့တယ်။', english: 'I changed clothes.' }
  ]},
  { id: '388', korean: '겉옷', myanmar: 'အပြင်ဘက်အဝတ်', english: 'Outer garment', pos: 'noun', level: 'basic', examples: [
    { korean: '겉옷을 벗었어요.', myanmar: 'အပြင်ဘက်အဝတ် ချွတ်ခဲ့တယ်။', english: 'I took off the outer garment.' }
  ]},
  { id: '389', korean: '고급옷', myanmar: 'အဆင့်မြင့်အဝတ်', english: 'High-end clothes', pos: 'noun', level: 'basic', examples: [
    { korean: '고급옷을 샀어요.', myanmar: 'အဆင့်မြင့်အဝတ် ဝယ်ခဲ့တယ်။', english: 'I bought high-end clothes.' }
  ]},
  { id: '390', korean: '구두끈', myanmar: 'ဖိနပ်ကြိုး', english: 'Shoelace', pos: 'noun', level: 'basic', examples: [
    { korean: '구두끈을 묶었어요.', myanmar: 'ဖိနပ်ကြိုး ချည်ခဲ့တယ်။', english: 'I tied the shoelaces.' }
  ]},
  { id: '391', korean: '구두약', myanmar: 'ဖိနပ်တိုက်ဆေး', english: 'Shoe polish', pos: 'noun', level: 'basic', examples: [
    { korean: '구두약을 발랐어요.', myanmar: 'ဖိနပ်တိုက်ဆေး လူးခဲ့တယ်။', english: 'I applied shoe polish.' }
  ]},
  { id: '392', korean: '귀마개', myanmar: 'နားပိတ်', english: 'Earplugs', pos: 'noun', level: 'basic', examples: [
    { korean: '귀마개를 꽂았어요.', myanmar: 'နားပိတ် တပ်ခဲ့တယ်။', english: 'I put in earplugs.' }
  ]},
  { id: '393', korean: '그림티', myanmar: 'ပုံပါတီရှပ်', english: 'Graphic T-shirt', pos: 'noun', level: 'basic', examples: [
    { korean: '그림티를 입었어요.', myanmar: 'ပုံပါတီရှပ် ဝတ်ခဲ့တယ်။', english: 'I wore a graphic T-shirt.' }
  ]},
  { id: '394', korean: '금목걸이', myanmar: 'ရွှေလည်ဆွဲ', english: 'Gold necklace', pos: 'noun', level: 'basic', examples: [
    { korean: '금목걸이를 했어요.', myanmar: 'ရွှေလည်ဆွဲ တပ်ခဲ့တယ်။', english: 'I wore a gold necklace.' }
  ]},
  // === BATCH 3: KITCHEN & COOKING (395-444) ===
  { id: '395', korean: '가스레인지', myanmar: 'ဓာတ်ငွေ့မီးဖို', english: 'Gas stove', pos: 'noun', level: 'basic', examples: [
    { korean: '가스레인지로 요리했어요.', myanmar: 'ဓာတ်ငွေ့မီးဖိုနဲ့ ချက်ခဲ့တယ်။', english: 'I cooked with the gas stove.' }
  ]},
  { id: '396', korean: '가위질', myanmar: 'ကတ်ကြေးဖြင့်ဖြတ်ခြင်း', english: 'Cutting with scissors', pos: 'noun', level: 'basic', examples: [
    { korean: '가위질을 잘해요.', myanmar: 'ကတ်ကြေးဖြင့်ဖြတ်တာ တော်တယ်။', english: 'I\'m good at cutting with scissors.' }
  ]},
  { id: '397', korean: '간장게장', myanmar: 'ပဲငံ့ရည်ကဏန်း', english: 'Soy sauce crab', pos: 'noun', level: 'basic', examples: [
    { korean: '간장게장을 먹었어요.', myanmar: 'ပဲငံ့ရည်ကဏန်း စားခဲ့တယ်။', english: 'I ate soy sauce crab.' }
  ]},
  { id: '398', korean: '감자전', myanmar: 'အာလူးကြော်', english: 'Potato pancake', pos: 'noun', level: 'basic', examples: [
    { korean: '감자전을 부쳤어요.', myanmar: 'အာလူးကြော် ကြော်ခဲ့တယ်။', english: 'I made potato pancakes.' }
  ]},
  { id: '399', korean: '갓김치', myanmar: 'မုန်လာဥရွက်ကင်းချီ', english: 'Mustard leaf kimchi', pos: 'noun', level: 'basic', examples: [
    { korean: '갓김치가 매워요.', myanmar: 'မုန်လာဥရွက်ကင်းချီက စပ်တယ်။', english: 'Mustard leaf kimchi is spicy.' }
  ]},
  { id: '400', korean: '개수대', myanmar: 'ပန်းကန်ဆေးရာ', english: 'Kitchen sink', pos: 'noun', level: 'basic', examples: [
    { korean: '개수대에서 설거지했어요.', myanmar: 'ပန်းကန်ဆေးရာမှာ ပန်းကန်ဆေးခဲ့တယ်။', english: 'I washed dishes at the kitchen sink.' }
  ]},
  { id: '401', korean: '거품기', myanmar: 'အမြှုပ်ဖောက်ကိရိယာ', english: 'Whisk', pos: 'noun', level: 'basic', examples: [
    { korean: '거품기로 저었어요.', myanmar: 'အမြှုပ်ဖောက်ကိရိယာနဲ့ ရောခဲ့တယ်။', english: 'I stirred with a whisk.' }
  ]},
  { id: '402', korean: '계량컵', myanmar: 'တိုင်းကွက်', english: 'Measuring cup', pos: 'noun', level: 'basic', examples: [
    { korean: '계량컵으로 쟀어요.', myanmar: 'တိုင်းကွက်နဲ့ တိုင်းခဲ့တယ်။', english: 'I measured with a measuring cup.' }
  ]},
  { id: '403', korean: '고춧기름', myanmar: 'ငရုတ်သီးဆီ', english: 'Chili oil', pos: 'noun', level: 'basic', examples: [
    { korean: '고춧기름을 넣었어요.', myanmar: 'ငရုတ်သီးဆီ ထည့်ခဲ့တယ်။', english: 'I added chili oil.' }
  ]},
  { id: '404', korean: '국자', myanmar: 'ခပ်ဇွန်း', english: 'Ladle', pos: 'noun', level: 'basic', examples: [
    { korean: '국자로 퍼냈어요.', myanmar: 'ခပ်ဇွန်းနဲ့ ခပ်ခဲ့တယ်။', english: 'I ladled it out with a ladle.' }
  ]},
  // === BATCH 3: HOUSEHOLD ITEMS (405-454) ===
  { id: '405', korean: '가구점', myanmar: 'ပရိဘောဂဆိုင်', english: 'Furniture store', pos: 'noun', level: 'basic', examples: [
    { korean: '가구점에 갔어요.', myanmar: 'ပရိဘောဂဆိုင်ကို သွားခဲ့တယ်။', english: 'I went to the furniture store.' }
  ]},
  { id: '406', korean: '간이침대', myanmar: 'ခေတ္တအိပ်ရာ', english: 'Folding bed', pos: 'noun', level: 'basic', examples: [
    { korean: '간이침대를 폈어요.', myanmar: 'ခေတ္တအိပ်ရာ ဖြန့်ခဲ့တယ်။', english: 'I unfolded the folding bed.' }
  ]},
  { id: '407', korean: '거실등', myanmar: 'ဧည့်ခန်းမီး', english: 'Living room light', pos: 'noun', level: 'basic', examples: [
    { korean: '거실등을 켰어요.', myanmar: 'ဧည့်ခန်းမီး ဖွင့်ခဲ့တယ်။', english: 'I turned on the living room light.' }
  ]},
  { id: '408', korean: '걸레', myanmar: 'လက်ဖြေးပုဝါ', english: 'Mop/Rag', pos: 'noun', level: 'basic', examples: [
    { korean: '걸레로 닦았어요.', myanmar: 'လက်ဖြေးပုဝါနဲ့ သုတ်ခဲ့တယ်။', english: 'I wiped it with a rag.' }
  ]},
  { id: '409', korean: '계량기', myanmar: 'တိုင်းတာစက်', english: 'Meter', pos: 'noun', level: 'basic', examples: [
    { korean: '가스 계량기를 봤어요.', myanmar: 'ဓာတ်ငွေ့ တိုင်းတာစက် ကြည့်ခဲ့တယ်။', english: 'I checked the gas meter.' }
  ]},
  { id: '410', korean: '고무장갑', myanmar: 'ရော်ဘာလက်အိတ်', english: 'Rubber gloves', pos: 'noun', level: 'basic', examples: [
    { korean: '고무장갑을 꼈어요.', myanmar: 'ရော်ဘာလက်အိတ် ဝတ်ခဲ့တယ်။', english: 'I put on rubber gloves.' }
  ]},
  { id: '411', korean: '공기청정기', myanmar: 'လေသန့်စင်စက်', english: 'Air purifier', pos: 'noun', level: 'basic', examples: [
    { korean: '공기청정기를 켰어요.', myanmar: 'လေသန့်စင်စက် ဖွင့်ခဲ့တယ်။', english: 'I turned on the air purifier.' }
  ]},
  { id: '412', korean: '구석', myanmar: 'ထောင့်', english: 'Corner', pos: 'noun', level: 'basic', examples: [
    { korean: '구석에 놓았어요.', myanmar: 'ထောင့်မှာ ထားခဲ့တယ်။', english: 'I put it in the corner.' }
  ]},
  { id: '413', korean: '그릇받침', myanmar: 'ပန်းကန်ခံ', english: 'Dish rack', pos: 'noun', level: 'basic', examples: [
    { korean: '그릇받침에 올렸어요.', myanmar: 'ပန်းကန်ခံမှာ တင်ခဲ့တယ်။', english: 'I placed it on the dish rack.' }
  ]},
  { id: '414', korean: '금고열쇠', myanmar: 'ငွေသိုက်သော့', english: 'Safe key', pos: 'noun', level: 'basic', examples: [
    { korean: '금고열쇠를 찾았어요.', myanmar: 'ငွေသိုက်သော့ ရှာတွေ့ခဲ့တယ်။', english: 'I found the safe key.' }
  ]},
  // === BATCH 4: BODY PARTS & HEALTH (415-464) ===
  { id: '415', korean: '가래침', myanmar: 'တံတွေး', english: 'Phlegm spit', pos: 'noun', level: 'basic', examples: [
    { korean: '가래침을 뱉었어요.', myanmar: 'တံတွေး ထွေးခဲ့တယ်။', english: 'I spat out phlegm.' }
  ]},
  { id: '416', korean: '가슴털', myanmar: 'ရင်ဘတ်အမွေး', english: 'Chest hair', pos: 'noun', level: 'basic', examples: [
    { korean: '가슴털이 많아요.', myanmar: 'ရင်ဘတ်အမွေး အများကြီး ရှိတယ်။', english: 'I have a lot of chest hair.' }
  ]},
  { id: '417', korean: '감기약', myanmar: 'အအေးမိဆေး', english: 'Cold medicine', pos: 'noun', level: 'basic', examples: [
    { korean: '감기약을 먹었어요.', myanmar: 'အအေးမိဆေး သောက်ခဲ့တယ်။', english: 'I took cold medicine.' }
  ]},
  { id: '418', korean: '개미허리', myanmar: 'ပုရွက်ဆိတ်ခါး/ခါးသေး/ခါးသိမ်', english: 'Ant waist (slim waist)', pos: 'noun', level: 'basic', examples: [
    { korean: '개미허리예요.', myanmar: 'ပုရွက်ဆိတ်ခါး/ခါးသေး/ခါးသိမ်သည်', english: 'She has a slim waist.' }
  ]},
  { id: '419', korean: '거북목', myanmar: 'လည်ပင်းကောက်', english: 'Turtle neck (forward head posture)', pos: 'noun', level: 'basic', examples: [
    { korean: '거북목이 생겼어요.', myanmar: 'လည်ပင်းကောက် ဖြစ်သွားတယ်။', english: 'I developed forward head posture.' }
  ]},
  { id: '420', korean: '겨드랑이', myanmar: 'လက်မောင်း', english: 'Armpit', pos: 'noun', level: 'basic', examples: [
    { korean: '겨드랑이가 가려워요.', myanmar: 'လက်မောင်း ယားတယ်။', english: 'My armpit is itchy.' }
  ]},
  { id: '421', korean: '고개', myanmar: 'လည်ပင်း', english: 'Neck/Head', pos: 'noun', level: 'basic', examples: [
    { korean: '고개를 끄덕였어요.', myanmar: 'လည်ပင်း ညိတ်ခဲ့တယ်။', english: 'I nodded my head.' }
  ]},
  { id: '422', korean: '골절', myanmar: 'အရိုးကျိုး', english: 'Fracture', pos: 'noun', level: 'basic', examples: [
    { korean: '골절이 됐어요.', myanmar: 'အရိုးကျိုး ဖြစ်တယ်။', english: 'I got a fracture.' }
  ]},
  { id: '423', korean: '구급차', myanmar: 'အရေးပေါ်ကား', english: 'Ambulance', pos: 'noun', level: 'basic', examples: [
    { korean: '구급차를 불렀어요.', myanmar: 'အရေးပေါ်ကား ခေါ်ခဲ့တယ်။', english: 'I called an ambulance.' }
  ]},
  { id: '424', korean: '기침', myanmar: 'ချောင်းဆိုး', english: 'Cough', pos: 'noun', level: 'basic', examples: [
    { korean: '기침이 나와요.', myanmar: 'ချောင်းဆိုး ထွက်တယ်။', english: 'I have a cough.' }
  ]},
  // === BATCH 4: WEATHER & SEASONS (425-474) ===
  { id: '425', korean: '가랑비', myanmar: 'မိုးရွာမြူ', english: 'Drizzle', pos: 'noun', level: 'basic', examples: [
    { korean: '가랑비가 내려요.', myanmar: 'မိုးရွာမြူ ရွာတယ်။', english: 'It\'s drizzling.' }
  ]},
  { id: '426', korean: '강풍', myanmar: 'လေပြင်း', english: 'Strong wind', pos: 'noun', level: 'basic', examples: [
    { korean: '강풍이 불어요.', myanmar: 'လေပြင်း တိုက်တယ်။', english: 'Strong wind is blowing.' }
  ]},
  { id: '427', korean: '개화', myanmar: 'ပန်းပွင့်ချိန်', english: 'Blooming season', pos: 'noun', level: 'basic', examples: [
    { korean: '개화시기예요.', myanmar: 'ပန်းပွင့်ချိန်ပါ။', english: 'It\'s blooming season.' }
  ]},
  { id: '428', korean: '겨울잠', myanmar: 'ဆောင်းရာသီအိပ်', english: 'Hibernation', pos: 'noun', level: 'basic', examples: [
    { korean: '곰이 겨울잠을 자요.', myanmar: 'ဝက်ဝံက ဆောင်းရာသီအိပ် အိပ်တယ်။', english: 'Bears hibernate.' }
  ]},
  { id: '429', korean: '고드름', myanmar: 'ရေခဲတံ', english: 'Icicle', pos: 'noun', level: 'basic', examples: [
    { korean: '고드름이 매달렸어요.', myanmar: 'ရေခဲတံ ဆွဲထားတယ်။', english: 'Icicles are hanging.' }
  ]},
  { id: '430', korean: '구름장', myanmar: 'တိမ်လွှာ', english: 'Cloud cover', pos: 'noun', level: 'basic', examples: [
    { korean: '구름장이 두껍네요.', myanmar: 'တိမ်လွှာက ထူတယ်။', english: 'The cloud cover is thick.' }
  ]},
  { id: '431', korean: '기상예보', myanmar: 'ရာသီဥတုခန့်မှန်း', english: 'Weather forecast', pos: 'noun', level: 'basic', examples: [
    { korean: '기상예보를 봤어요.', myanmar: 'ရာသီဥတုခန့်မှန်း ကြည့်ခဲ့တယ်။', english: 'I watched the weather forecast.' }
  ]},
  { id: '432', korean: '꽃샘추위', myanmar: 'ပန်းပွင့်ချိန်အေး', english: 'Late spring cold', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃샘추위가 왔어요.', myanmar: 'ပန်းပွင့်ချိန်အေး ရောက်ခဲ့တယ်။', english: 'Late spring cold came.' }
  ]},
  { id: '433', korean: '낙엽', myanmar: 'ရွက်ကြွေ', english: 'Fallen leaves', pos: 'noun', level: 'basic', examples: [
    { korean: '낙엽이 떨어져요.', myanmar: 'ရွက်ကြွေ ကြွေတယ်။', english: 'Leaves are falling.' }
  ]},
  { id: '434', korean: '날씨', myanmar: 'ရာသီဥတု', english: 'Weather', pos: 'noun', level: 'basic', examples: [
    { korean: '날씨가 좋아요.', myanmar: 'ရာသီဥတုက ကောင်းတယ်။', english: 'The weather is nice.' }
  ]},
  // === BATCH 4: SPORTS & RECREATION (435-484) ===
  { id: '435', korean: '가라데', myanmar: 'ကရာတေး', english: 'Karate', pos: 'noun', level: 'basic', examples: [
    { korean: '가라데를 배워요.', myanmar: 'ကရာတေး သင်တယ်။', english: 'I learn karate.' }
  ]},
  { id: '436', korean: '골프공', myanmar: 'ဂေါက်ဘောလုံး', english: 'Golf ball', pos: 'noun', level: 'basic', examples: [
    { korean: '골프공을 쳤어요.', myanmar: 'ဂေါက်ဘောလုံး ရိုက်ခဲ့တယ်။', english: 'I hit a golf ball.' }
  ]},
  { id: '437', korean: '골프채', myanmar: 'ဂေါက်တုတ်', english: 'Golf club', pos: 'noun', level: 'basic', examples: [
    { korean: '골프채를 샀어요.', myanmar: 'ဂေါက်တုတ် ဝယ်ခဲ့တယ်။', english: 'I bought a golf club.' }
  ]},
  { id: '438', korean: '공놀이', myanmar: 'ဘောလုံးကစား', english: 'Ball game', pos: 'noun', level: 'basic', examples: [
    { korean: '공놀이를 했어요.', myanmar: 'ဘောလုံးကစား ကစားခဲ့တယ်။', english: 'I played ball games.' }
  ]},
  { id: '439', korean: '관중석', myanmar: 'ပရိသတ်ထိုင်ခုံ', english: 'Spectator seats', pos: 'noun', level: 'basic', examples: [
    { korean: '관중석에 앉았어요.', myanmar: 'ပရိသတ်ထိုင်ခုံမှာ ထိုင်ခဲ့တယ်။', english: 'I sat in the spectator seats.' }
  ]},
  { id: '440', korean: '구기종목', myanmar: 'ဘောလုံးအားကစား', english: 'Ball sports', pos: 'noun', level: 'basic', examples: [
    { korean: '구기종목을 좋아해요.', myanmar: 'ဘောလုံးအားကစား ကြိုက်တယ်။', english: 'I like ball sports.' }
  ]},
  { id: '441', korean: '그라운드', myanmar: 'ကစားကွင်း', english: 'Sports ground', pos: 'noun', level: 'basic', examples: [
    { korean: '그라운드에서 뛰었어요.', myanmar: 'ကစားကွင်းမှာ ပြေးခဲ့တယ်။', english: 'I ran on the sports ground.' }
  ]},
  { id: '442', korean: '금메달', myanmar: 'ရွှေတံဆိပ်', english: 'Gold medal', pos: 'noun', level: 'basic', examples: [
    { korean: '금메달을 땄어요.', myanmar: 'ရွှေတံဆိပ် ရခဲ့တယ်။', english: 'I won a gold medal.' }
  ]},
  { id: '443', korean: '기록', myanmar: 'မှတ်တမ်း', english: 'Record', pos: 'noun', level: 'basic', examples: [
    { korean: '기록을 갱신했어요.', myanmar: 'မှတ်တမ်း အသစ်လုပ်ခဲ့တယ်။', english: 'I set a new record.' }
  ]},
  { id: '444', korean: '깃발', myanmar: 'အလံ', english: 'Flag', pos: 'noun', level: 'basic', examples: [
    { korean: '깃발을 흔들었어요.', myanmar: 'အလံ ယမ်းခဲ့တယ်။', english: 'I waved the flag.' }
  ]},
  // === BATCH 4: EMOTIONS & FEELINGS (445-464) ===
  { id: '445', korean: '감격', myanmar: 'ခံစားမှု', english: 'Deep emotion', pos: 'noun', level: 'basic', examples: [
    { korean: '감격했어요.', myanmar: 'ခံစားမှု ရှိခဲ့တယ်။', english: 'I was deeply moved.' }
  ]},
  { id: '446', korean: '걱정', myanmar: 'စိုးရိမ်ခြင်း', english: 'Worry', pos: 'noun', level: 'basic', examples: [
    { korean: '걱정이 많아요.', myanmar: 'စိုးရိမ်စရာ အများကြီး ရှိတယ်။', english: 'I have many worries.' }
  ]},
  { id: '447', korean: '고민', myanmar: 'စိတ်ပူခြင်း', english: 'Concern/Trouble', pos: 'noun', level: 'basic', examples: [
    { korean: '고민이 있어요.', myanmar: 'စိတ်ပူစရာ ရှိတယ်။', english: 'I have concerns.' }
  ]},
  { id: '448', korean: '기쁨', myanmar: 'ဝမ်းသာခြင်း', english: 'Joy', pos: 'noun', level: 'basic', examples: [
    { korean: '기쁨이 커요.', myanmar: 'ဝမ်းသာမှု ကြီးတယ်။', english: 'My joy is great.' }
  ]},
  { id: '449', korean: '깜짝', myanmar: 'ရုတ်တရက်', english: 'Suddenly/Surprise', pos: 'adverb', level: 'basic', examples: [
    { korean: '깜짝 놀랐어요.', myanmar: 'ရုတ်တရက် တုန်လှုပ်ခဲ့တယ်။', english: 'I was suddenly surprised.' }
  ]},
  { id: '450', korean: '꿈같다', myanmar: 'အိပ်မက်လို', english: 'Like a dream', pos: 'adjective', level: 'basic', examples: [
    { korean: '꿈같은 일이에요.', myanmar: 'အိပ်မက်လို အဖြစ်အပျက်ပါ။', english: 'It\'s like a dream.' }
  ]},
  { id: '451', korean: '끌리다', myanmar: 'ဆွဲဆောင်ခံရ', english: 'To be attracted', pos: 'verb', level: 'basic', examples: [
    { korean: '그 사람에게 끌려요.', myanmar: 'အဲဒီသူကို ဆွဲဆောင်ခံရတယ်။', english: 'I\'m attracted to that person.' }
  ]},
  { id: '452', korean: '긴장', myanmar: 'စိတ်တင်းမာ', english: 'Tension/Nervousness', pos: 'noun', level: 'basic', examples: [
    { korean: '긴장이 돼요.', myanmar: 'စိတ်တင်းမာ ဖြစ်တယ်။', english: 'I\'m nervous.' }
  ]},
  { id: '453', korean: '그리움', myanmar: 'လွမ်းခြင်း', english: 'Longing/Missing', pos: 'noun', level: 'basic', examples: [
    { korean: '그리움이 커요.', myanmar: 'လွမ်းမှု ကြီးတယ်။', english: 'My longing is great.' }
  ]},
  { id: '454', korean: '기대감', myanmar: 'မျှော်လင့်ချက်', english: 'Expectation', pos: 'noun', level: 'basic', examples: [
    { korean: '기대감이 높아요.', myanmar: 'မျှော်လင့်ချက် မြင့်တယ်။', english: 'My expectations are high.' }
  ]},
  { id: '455', korean: '고마움', myanmar: 'ကျေးဇူးတင်ခြင်း', english: 'Gratitude', pos: 'noun', level: 'basic', examples: [
    { korean: '고마움을 표현했어요.', myanmar: 'ကျေးဇူးတင်ခြင်းကို ဖော်ပြခဲ့တယ်။', english: 'I expressed my gratitude.' }
  ]},
  { id: '456', korean: '괴로움', myanmar: 'ဆင်းရဲခြင်း', english: 'Suffering', pos: 'noun', level: 'basic', examples: [
    { korean: '괴로움이 많아요.', myanmar: 'ဆင်းရဲမှု အများကြီး ရှိတယ်။', english: 'There is much suffering.' }
  ]},
  { id: '457', korean: '굴욕', myanmar: 'အရှက်ခွဲခြင်း', english: 'Humiliation', pos: 'noun', level: 'basic', examples: [
    { korean: '굴욕을 당했어요.', myanmar: 'အရှက်ခွဲခြင်း ခံခဲ့ရတယ်။', english: 'I was humiliated.' }
  ]},
  { id: '458', korean: '근심', myanmar: 'စိုးရိမ်မှု', english: 'Anxiety', pos: 'noun', level: 'basic', examples: [
    { korean: '근심이 깊어요.', myanmar: 'စိုးရိမ်မှု နက်တယ်။', english: 'My anxiety is deep.' }
  ]},
  { id: '459', korean: '그리워하다', myanmar: 'လွမ်းသည်', english: 'To miss/long for', pos: 'verb', level: 'basic', examples: [
    { korean: '고향을 그리워해요.', myanmar: 'မွေးရပ်ကို လွမ်းတယ်။', english: 'I miss my hometown.' }
  ]},
  { id: '460', korean: '기뻐하다', myanmar: 'ဝမ်းသာသည်', english: 'To be happy', pos: 'verb', level: 'basic', examples: [
    { korean: '소식을 듣고 기뻐했어요.', myanmar: 'သတင်း ကြားပြီး ဝမ်းသာခဲ့တယ်။', english: 'I was happy to hear the news.' }
  ]},
  { id: '461', korean: '깨달음', myanmar: 'သိမြင်ခြင်း', english: 'Realization', pos: 'noun', level: 'basic', examples: [
    { korean: '깨달음을 얻었어요.', myanmar: 'သိမြင်ခြင်း ရခဲ့တယ်။', english: 'I gained realization.' }
  ]},
  { id: '462', korean: '끈기', myanmar: 'ခံ့ညားမှု', english: 'Persistence', pos: 'noun', level: 'basic', examples: [
    { korean: '끈기가 중요해요.', myanmar: 'ခံ့ညားမှု အရေးကြီးတယ်။', english: 'Persistence is important.' }
  ]},
  { id: '463', korean: '끝없다', myanmar: 'အဆုံးမရှိ', english: 'To be endless', pos: 'adjective', level: 'basic', examples: [
    { korean: '사랑은 끝없어요.', myanmar: 'ချစ်ခြင်းက အဆုံးမရှိပါ။', english: 'Love is endless.' }
  ]},
  { id: '464', korean: '긍정적', myanmar: 'အပြုသဘော', english: 'Positive', pos: 'adjective', level: 'basic', examples: [
    { korean: '긍정적으로 생각해요.', myanmar: 'အပြုသဘောနဲ့ တွေးတယ်။', english: 'I think positively.' }
  ]},
  // === BATCH 5: TECHNOLOGY & ELECTRONICS (465-514) ===
  { id: '465', korean: '게임기', myanmar: 'ဂိမ်းစက်', english: 'Game console', pos: 'noun', level: 'basic', examples: [
    { korean: '게임기로 놀았어요.', myanmar: 'ဂိမ်းစက်နဲ့ ကစားခဲ့တယ်။', english: 'I played with the game console.' }
  ]},
  { id: '466', korean: '계산기', myanmar: 'ဂဏန်းတွက်စက်', english: 'Calculator', pos: 'noun', level: 'basic', examples: [
    { korean: '계산기로 계산했어요.', myanmar: 'ဂဏန်းတွက်စက်နဲ့ တွက်ခဲ့တယ်။', english: 'I calculated with a calculator.' }
  ]},
  { id: '467', korean: '기계', myanmar: 'စက်ယန္တရား', english: 'Machine', pos: 'noun', level: 'basic', examples: [
    { korean: '기계가 고장났어요.', myanmar: 'စက်ယန္တရား ပျက်သွားတယ်။', english: 'The machine broke down.' }
  ]},
  { id: '468', korean: '기능', myanmar: 'လုပ်ဆောင်ချက်', english: 'Function', pos: 'noun', level: 'basic', examples: [
    { korean: '새로운 기능이에요.', myanmar: 'လုပ်ဆောင်ချက်အသစ်ပါ။', english: 'It\'s a new function.' }
  ]},
  { id: '469', korean: '기술', myanmar: 'နည်းပညာ', english: 'Technology', pos: 'noun', level: 'basic', examples: [
    { korean: '기술이 발달했어요.', myanmar: 'နည်းပညာ တိုးတက်ခဲ့တယ်။', english: 'Technology has advanced.' }
  ]},
  { id: '470', korean: '글자', myanmar: 'စာလုံး', english: 'Letter/Character', pos: 'noun', level: 'basic', examples: [
    { korean: '글자를 썼어요.', myanmar: 'စာလုံး ရေးခဲ့တယ်။', english: 'I wrote letters.' }
  ]},
  { id: '471', korean: '그래픽', myanmar: 'ရုပ်ပုံ', english: 'Graphics', pos: 'noun', level: 'basic', examples: [
    { korean: '그래픽이 좋아요.', myanmar: 'ရုပ်ပုံ ကောင်းတယ်။', english: 'The graphics are good.' }
  ]},
  { id: '472', korean: '기억장치', myanmar: 'မှတ်ဉာဏ်သိုလှောင်ကိရိယာ', english: 'Memory device', pos: 'noun', level: 'basic', examples: [
    { korean: '기억장치가 부족해요.', myanmar: 'မှတ်ဉာဏ်သိုလှောင်ကိရိယာ မလုံလောက်ဘူး။', english: 'Memory device is insufficient.' }
  ]},
  { id: '473', korean: '검색', myanmar: 'ရှာဖွေခြင်း', english: 'Search', pos: 'noun', level: 'basic', examples: [
    { korean: '검색을 했어요.', myanmar: 'ရှာဖွေခဲ့တယ်။', english: 'I did a search.' }
  ]},
  { id: '474', korean: '게시판', myanmar: 'ကြေညာဘုတ်', english: 'Bulletin board', pos: 'noun', level: 'basic', examples: [
    { korean: '게시판에 올렸어요.', myanmar: 'ကြေညာဘုတ်မှာ တင်ခဲ့တယ်။', english: 'I posted on the bulletin board.' }
  ]},
  // === BATCH 5: WORK & PROFESSIONS (475-524) ===
  { id: '475', korean: '간호사', myanmar: 'သူနာပြု', english: 'Nurse', pos: 'noun', level: 'basic', examples: [
    { korean: '간호사가 도와줬어요.', myanmar: 'သူနာပြုက ကူညီပေးခဲ့တယ်။', english: 'The nurse helped me.' }
  ]},
  { id: '476', korean: '감독', myanmar: 'ကြီးကြပ်သူ', english: 'Director/Supervisor', pos: 'noun', level: 'basic', examples: [
    { korean: '감독이 지시했어요.', myanmar: 'ကြီးကြပ်သူက ညွှန်ကြားခဲ့တယ်။', english: 'The director gave instructions.' }
  ]},
  { id: '477', korean: '개발자', myanmar: 'ဖွံ့ဖြိုးတိုးတက်စေသူ', english: 'Developer', pos: 'noun', level: 'basic', examples: [
    { korean: '개발자가 만들었어요.', myanmar: 'ဖွံ့ဖြိုးတိုးတက်စေသူက လုပ်ခဲ့တယ်။', english: 'The developer made it.' }
  ]},
  { id: '478', korean: '건축가', myanmar: 'ဗိသုကာ', english: 'Architect', pos: 'noun', level: 'basic', examples: [
    { korean: '건축가가 설계했어요.', myanmar: 'ဗိသုကာက ဒီဇိုင်းဆွဲခဲ့တယ်။', english: 'The architect designed it.' }
  ]},
  { id: '479', korean: '경비원', myanmar: 'လုံခြုံရေးမှူး', english: 'Security guard', pos: 'noun', level: 'basic', examples: [
    { korean: '경비원이 지켜봐요.', myanmar: 'လုံခြုံရေးမှူးက စောင့်ကြည့်တယ်။', english: 'The security guard watches.' }
  ]},
  { id: '480', korean: '계산원', myanmar: 'ငွေတွက်သူ', english: 'Cashier', pos: 'noun', level: 'basic', examples: [
    { korean: '계산원에게 돈을 줬어요.', myanmar: 'ငွေတွက်သူကို ပိုက်ဆံပေးခဲ့တယ်။', english: 'I gave money to the cashier.' }
  ]},
  { id: '481', korean: '고객', myanmar: 'ဖောက်သည်', english: 'Customer', pos: 'noun', level: 'basic', examples: [
    { korean: '고객이 왔어요.', myanmar: 'ဖောက်သည် လာခဲ့တယ်။', english: 'A customer came.' }
  ]},
  { id: '482', korean: '공무원', myanmar: 'အစိုးရဝန်ထမ်း', english: 'Civil servant', pos: 'noun', level: 'basic', examples: [
    { korean: '공무원이 됐어요.', myanmar: 'အစိုးရဝန်ထမ်း ဖြစ်ခဲ့တယ်။', english: 'I became a civil servant.' }
  ]},
  { id: '483', korean: '기자', myanmar: 'သတင်းထောက်', english: 'Reporter', pos: 'noun', level: 'basic', examples: [
    { korean: '기자가 인터뷰했어요.', myanmar: 'သတင်းထောက်က အင်တာဗျူးယူခဲ့တယ်။', english: 'The reporter interviewed.' }
  ]},
  { id: '484', korean: '근무자', myanmar: 'အလုပ်သမား', english: 'Worker', pos: 'noun', level: 'basic', examples: [
    { korean: '근무자가 일해요.', myanmar: 'အလုပ်သမားက အလုပ်လုပ်တယ်။', english: 'The worker works.' }
  ]},
  // === BATCH 5: FAMILY & RELATIONSHIPS (485-534) ===
  { id: '485', korean: '가정', myanmar: 'အိမ်ထောင်', english: 'Family/Home', pos: 'noun', level: 'basic', examples: [
    { korean: '가정이 화목해요.', myanmar: 'အိမ်ထောင် သာယာတယ်။', english: 'The family is harmonious.' }
  ]},
  { id: '486', korean: '결혼', myanmar: 'လက်ထပ်ခြင်း', english: 'Marriage', pos: 'noun', level: 'basic', examples: [
    { korean: '결혼을 했어요.', myanmar: 'လက်ထပ်ခဲ့တယ်။', english: 'I got married.' }
  ]},
  { id: '487', korean: '고모', myanmar: 'အဖေရဲ့နှမ', english: 'Father\'s sister', pos: 'noun', level: 'basic', examples: [
    { korean: '고모를 만났어요.', myanmar: 'အဖေရဲ့နှမကို တွေ့ခဲ့တယ်။', english: 'I met my aunt (father\'s sister).' }
  ]},
  { id: '488', korean: '관계', myanmar: 'ဆက်သွယ်မှု', english: 'Relationship', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 관계예요.', myanmar: 'ကောင်းတဲ့ ဆက်သွယ်မှုပါ။', english: 'It\'s a good relationship.' }
  ]},
  { id: '489', korean: '규칙', myanmar: 'စည်းမျဉ်း', english: 'Rule', pos: 'noun', level: 'basic', examples: [
    { korean: '규칙을 지켜요.', myanmar: 'စည်းမျဉ်း လိုက်နာတယ်။', english: 'I follow the rules.' }
  ]},
  { id: '490', korean: '기념', myanmar: 'အမှတ်တရ', english: 'Commemoration', pos: 'noun', level: 'basic', examples: [
    { korean: '기념으로 사진을 찍었어요.', myanmar: 'အမှတ်တရအတွက် ဓာတ်ပုံ ရိုက်ခဲ့တယ်။', english: 'I took a photo as a commemoration.' }
  ]},
  { id: '491', korean: '기혼', myanmar: 'လက်ထပ်ပြီး', english: 'Married', pos: 'noun', level: 'basic', examples: [
    { korean: '기혼자예요.', myanmar: 'လက်ထပ်ပြီးသူပါ။', english: 'I\'m married.' }
  ]},
  { id: '492', korean: '김치', myanmar: 'ကင်ချီ/ဂင်ချီ', english: 'Kimchi', pos: 'noun', level: 'basic', examples: [
    { korean: '김치를 담갔어요.', myanmar: 'ကင်ချီ လုပ်ခဲ့တယ်။', english: 'I made kimchi.' }
  ]},
  { id: '493', korean: '깍두기', myanmar: 'ကင်ချီတုံး', english: 'Cubed radish kimchi', pos: 'noun', level: 'basic', examples: [
    { korean: '깍두기가 맛있어요.', myanmar: 'ကင်ချီတုံးက အရသာရှိတယ်။', english: 'Cubed radish kimchi is delicious.' }
  ]},
  { id: '494', korean: '꽃길', myanmar: 'ပန်းလမ်း', english: 'Flower path (success path)', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃길만 걸어요.', myanmar: 'ပန်းလမ်းပဲ လျှောက်တယ်။', english: 'I only walk on flower paths.' }
  ]},
  // === BATCH 5: MONEY & BUSINESS (495-514) ===
  { id: '495', korean: '가격', myanmar: 'ဈေးနှုန်း', english: 'Price', pos: 'noun', level: 'basic', examples: [
    { korean: '가격이 비싸요.', myanmar: 'ဈေးနှုန်း စျေးကြီးတယ်။', english: 'The price is expensive.' }
  ]},
  { id: '496', korean: '거래', myanmar: 'ကုန်သွယ်မှု', english: 'Transaction', pos: 'noun', level: 'basic', examples: [
    { korean: '거래를 했어요.', myanmar: 'ကုန်သွယ်မှု လုပ်ခဲ့တယ်။', english: 'I made a transaction.' }
  ]},
  { id: '497', korean: '계좌', myanmar: 'ဘဏ်အကောင့်', english: 'Bank account', pos: 'noun', level: 'basic', examples: [
    { korean: '계좌를 열었어요.', myanmar: 'ဘဏ်အကောင့် ဖွင့်ခဲ့တယ်။', english: 'I opened a bank account.' }
  ]},
  { id: '498', korean: '고용', myanmar: 'အလုပ်ခန့်ခြင်း', english: 'Employment', pos: 'noun', level: 'basic', examples: [
    { korean: '고용이 됐어요.', myanmar: 'အလုပ်ခန့်ခံရတယ်။', english: 'I got employed.' }
  ]},
  { id: '499', korean: '공급', myanmar: 'ထောက်ပံ့ခြင်း', english: 'Supply', pos: 'noun', level: 'basic', examples: [
    { korean: '공급이 부족해요.', myanmar: 'ထောက်ပံ့မှု မလုံလောက်ဘူး။', english: 'Supply is insufficient.' }
  ]},
  { id: '500', korean: '광고', myanmar: 'ကြေညာခြင်း', english: 'Advertisement', pos: 'noun', level: 'basic', examples: [
    { korean: '광고를 봤어요.', myanmar: 'ကြေညာခြင်း ကြည့်ခဲ့တယ်။', english: 'I saw an advertisement.' }
  ]},
  { id: '501', korean: '구매', myanmar: 'ဝယ်ယူခြင်း', english: 'Purchase', pos: 'noun', level: 'basic', examples: [
    { korean: '구매를 했어요.', myanmar: 'ဝယ်ယူခဲ့တယ်။', english: 'I made a purchase.' }
  ]},
  { id: '502', korean: '급여', myanmar: 'လစာ', english: 'Salary', pos: 'noun', level: 'basic', examples: [
    { korean: '급여를 받았어요.', myanmar: 'လစာ ရခဲ့တယ်။', english: 'I received my salary.' }
  ]},
  { id: '503', korean: '기업', myanmar: 'စီးပွားရေးလုပ်ငန်း', english: 'Company/Enterprise', pos: 'noun', level: 'basic', examples: [
    { korean: '큰 기업이에요.', myanmar: 'ကြီးမားတဲ့ စီးပွားရေးလုပ်ငန်းပါ။', english: 'It\'s a big company.' }
  ]},
  { id: '504', korean: '기부', myanmar: 'လှူဒါန်းခြင်း', english: 'Donation', pos: 'noun', level: 'basic', examples: [
    { korean: '기부를 했어요.', myanmar: 'လှူဒါန်းခဲ့တယ်။', english: 'I made a donation.' }
  ]},
  { id: '505', korean: '길거리', myanmar: 'လမ်းဘေး', english: 'Street', pos: 'noun', level: 'basic', examples: [
    { korean: '길거리에서 만났어요.', myanmar: 'လမ်းဘေးမှာ တွေ့ခဲ့တယ်။', english: 'I met on the street.' }
  ]},
  { id: '506', korean: '김밥', myanmar: 'ကင်းဘပ်', english: 'Gimbap (rice roll)', pos: 'noun', level: 'basic', examples: [
    { korean: '김밥을 만들었어요.', myanmar: 'ကင်းဘပ် လုပ်ခဲ့တယ်။', english: 'I made gimbap.' }
  ]},
  { id: '507', korean: '꽃집', myanmar: 'ပန်းဆိုင်', english: 'Flower shop', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃집에서 샀어요.', myanmar: 'ပန်းဆိုင်မှာ ဝယ်ခဲ့တယ်။', english: 'I bought it at the flower shop.' }
  ]},
  { id: '508', korean: '끝내다', myanmar: 'အဆုံးသတ်သည်', english: 'To finish/end', pos: 'verb', level: 'basic', examples: [
    { korean: '일을 끝냈어요.', myanmar: 'အလုပ် အဆုံးသတ်ခဲ့တယ်။', english: 'I finished the work.' }
  ]},
  { id: '509', korean: '긴급', myanmar: 'အရေးပေါ်', english: 'Emergency', pos: 'noun', level: 'basic', examples: [
    { korean: '긴급상황이에요.', myanmar: 'အရေးပေါ်အခြေအနေပါ။', english: 'It\'s an emergency situation.' }
  ]},
  { id: '510', korean: '글쓰기', myanmar: 'စာရေးခြင်း', english: 'Writing', pos: 'noun', level: 'basic', examples: [
    { korean: '글쓰기를 배워요.', myanmar: 'စာရေးခြင်း သင်တယ်။', english: 'I learn writing.' }
  ]},
  { id: '511', korean: '금액', myanmar: 'ငွေပမာණ', english: 'Amount of money', pos: 'noun', level: 'basic', examples: [
    { korean: '금액이 많아요.', myanmar: 'ငွေပမာণ များတယ်။', english: 'The amount of money is large.' }
  ]},
  { id: '512', korean: '기회', myanmar: 'အခွင့်အရေး', english: 'Opportunity', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 기회예요.', myanmar: 'ကောင်းတဲ့ အခွင့်အရေးပါ။', english: 'It\'s a good opportunity.' }
  ]},
  { id: '513', korean: '경험', myanmar: 'အတွေ့အကြုံ', english: 'Experience', pos: 'noun', level: 'basic', examples: [
    { korean: '경험이 많아요.', myanmar: 'အတွေ့အကြုံ များတယ်။', english: 'I have a lot of experience.' }
  ]},
  { id: '514', korean: '계획', myanmar: 'အစီအစဉ်', english: 'Plan', pos: 'noun', level: 'basic', examples: [
    { korean: '계획을 세웠어요.', myanmar: 'အစီအစဉ် ချမှတ်ခဲ့တယ်။', english: 'I made a plan.' }
  ]},
  // === BATCH 6: PLACES & LOCATIONS (515-564) ===
  { id: '515', korean: '가게', myanmar: 'ဆိုင်', english: 'Store/Shop', pos: 'noun', level: 'basic', examples: [
    { korean: '가게에서 샀어요.', myanmar: 'ဆိုင်မှာ ဝယ်ခဲ့တယ်။', english: 'I bought it at the store.' }
  ]},
  { id: '516', korean: '건물', myanmar: 'အဆောက်အအုံ', english: 'Building', pos: 'noun', level: 'basic', examples: [
    { korean: '높은 건물이에요.', myanmar: 'မြင့်တဲ့ အဆောက်အအုံပါ။', english: 'It\'s a tall building.' }
  ]},
  { id: '517', korean: '공원', myanmar: 'ဥယျာဉ်', english: 'Park', pos: 'noun', level: 'basic', examples: [
    { korean: '공원에서 놀았어요.', myanmar: 'ဥယျာဉ်မှာ ကစားခဲ့တယ်။', english: 'I played in the park.' }
  ]},
  { id: '518', korean: '교회', myanmar: 'အသင်းတော်', english: 'Church', pos: 'noun', level: 'basic', examples: [
    { korean: '교회에 갔어요.', myanmar: 'အသင်းတော်ကို သွားခဲ့တယ်။', english: 'I went to church.' }
  ]},
  { id: '519', korean: '구청', myanmar: 'ခရိုင်ရုံး', english: 'District office', pos: 'noun', level: 'basic', examples: [
    { korean: '구청에서 일했어요.', myanmar: 'ခရိုင်ရုံးမှာ အလုပ်လုပ်ခဲ့တယ်။', english: 'I worked at the district office.' }
  ]},
  { id: '520', korean: '길', myanmar: 'လမ်း', english: 'Road/Path', pos: 'noun', level: 'basic', examples: [
    { korean: '길이 막혀요.', myanmar: 'လမ်း ပိတ်နေတယ်။', english: 'The road is blocked.' }
  ]},
  { id: '521', korean: '꼭대기', myanmar: 'ထိပ်ဆုံး', english: 'Top/Summit', pos: 'noun', level: 'basic', examples: [
    { korean: '산 꼭대기에 올랐어요.', myanmar: 'တောင်ထိပ်ဆုံးကို တက်ခဲ့တယ်။', english: 'I climbed to the mountain top.' }
  ]},
  { id: '522', korean: '끝자락', myanmar: 'အဆုံးစွန်း', english: 'Edge/End', pos: 'noun', level: 'basic', examples: [
    { korean: '마을 끝자락이에요.', myanmar: 'ရွာရဲ့ အဆုံးစွန်းပါ။', english: 'It\'s the edge of the village.' }
  ]},
  { id: '523', korean: '기차역', myanmar: 'ရထားဘူတာ', english: 'Train station', pos: 'noun', level: 'basic', examples: [
    { korean: '기차역에서 만났어요.', myanmar: 'ရထားဘူတာမှာ တွေ့ခဲ့တယ်။', english: 'We met at the train station.' }
  ]},
  { id: '524', korean: '골목', myanmar: 'လမ်းကြား', english: 'Alley', pos: 'noun', level: 'basic', examples: [
    { korean: '좁은 골목이에요.', myanmar: 'ကျဉ်းတဲ့ လမ်းကြားပါ။', english: 'It\'s a narrow alley.' }
  ]},
  // === BATCH 6: COLORS & APPEARANCE (525-574) ===
  { id: '525', korean: '갈색', myanmar: 'ညိုရောင်', english: 'Brown color', pos: 'noun', level: 'basic', examples: [
    { korean: '갈색 옷을 입었어요.', myanmar: 'ညိုရောင် အဝတ် ဝတ်ခဲ့တယ်။', english: 'I wore brown clothes.' }
  ]},
  { id: '526', korean: '검은색', myanmar: 'အနက်ရောင်', english: 'Black color', pos: 'noun', level: 'basic', examples: [
    { korean: '검은색이 좋아요.', myanmar: 'အနက်ရောင် ကြိုက်တယ်။', english: 'I like black color.' }
  ]},
  { id: '527', korean: '고운', myanmar: 'လှပသော', english: 'Fine/Beautiful', pos: 'adjective', level: 'basic', examples: [
    { korean: '고운 피부예요.', myanmar: 'လှပတဲ့ အရေပြားပါ။', english: 'It\'s fine skin.' }
  ]},
  { id: '528', korean: '굵다', myanmar: 'ထူသည်', english: 'To be thick', pos: 'adjective', level: 'basic', examples: [
    { korean: '굵은 나무예요.', myanmar: 'ထူတဲ့ သစ်ပင်ပါ။', english: 'It\'s a thick tree.' }
  ]},
  { id: '529', korean: '그림자색', myanmar: 'အရိပ်ရောင်', english: 'Shadow color', pos: 'noun', level: 'basic', examples: [
    { korean: '그림자색이 짙어요.', myanmar: 'အရိပ်ရောင် ရှိုက်တယ်။', english: 'The shadow color is dark.' }
  ]},
  { id: '530', korean: '금색', myanmar: 'ရွှေရောင်', english: 'Gold color', pos: 'noun', level: 'basic', examples: [
    { korean: '금색 반지예요.', myanmar: 'ရွှေရောင် လက်စွပ်ပါ။', english: 'It\'s a gold ring.' }
  ]},
  { id: '531', korean: '기다랗다', myanmar: 'ရှည်လျားသည်', english: 'To be long', pos: 'adjective', level: 'basic', examples: [
    { korean: '기다란 머리카락이에요.', myanmar: 'ရှည်လျားတဲ့ ဆံပင်ပါ။', english: 'It\'s long hair.' }
  ]},
  { id: '532', korean: '깔끔하다', myanmar: 'သန့်ရှင်းသည်', english: 'To be neat', pos: 'adjective', level: 'basic', examples: [
    { korean: '깔끔한 옷차림이에요.', myanmar: 'သန့်ရှင်းတဲ့ ဝတ်စားပုံပါ။', english: 'It\'s a neat outfit.' }
  ]},
  { id: '533', korean: '꽃무늬', myanmar: 'ပန်းပုံစံ', english: 'Floral pattern', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃무늬 옷이에요.', myanmar: 'ပန်းပုံစံ အဝတ်ပါ။', english: 'It\'s floral patterned clothes.' }
  ]},
  { id: '534', korean: '끈적하다', myanmar: 'စေးစေးကပ်ကပ်', english: 'To be sticky', pos: 'adjective', level: 'basic', examples: [
    { korean: '손이 끈적해요.', myanmar: 'လက်က စေးစေးကပ်ကပ် ဖြစ်နေတယ်။', english: 'My hands are sticky.' }
  ]},
  // === BATCH 6: TIME & SEASONS (535-584) ===
  { id: '535', korean: '가을', myanmar: 'ဆောင်းဦး', english: 'Autumn', pos: 'noun', level: 'basic', examples: [
    { korean: '가을이 왔어요.', myanmar: 'ဆောင်းဦး ရောက်လာပြီ။', english: 'Autumn has come.' }
  ]},
  { id: '536', korean: '간밤', myanmar: 'မနေ့ည', english: 'Last night', pos: 'noun', level: 'basic', examples: [
    { korean: '간밤에 비가 왔어요.', myanmar: 'မနေ့ညမှာ မိုး ရွာခဲ့တယ်။', english: 'It rained last night.' }
  ]},
  { id: '537', korean: '개학', myanmar: 'ကျောင်းဖွင့်ခြင်း', english: 'School opening', pos: 'noun', level: 'basic', examples: [
    { korean: '개학이 시작됐어요.', myanmar: 'ကျောင်းဖွင့်ခြင်း စတင်ခဲ့တယ်။', english: 'School opening has started.' }
  ]},
  { id: '538', korean: '거의', myanmar: 'လုနီးပါး', english: 'Almost/Nearly', pos: 'adverb', level: 'basic', examples: [
    { korean: '거의 다 했어요.', myanmar: 'လုနီးပါး ပြီးပြီ။', english: 'I almost finished.' }
  ]},
  { id: '539', korean: '곧', myanmar: 'မကြာမီ', english: 'Soon', pos: 'adverb', level: 'basic', examples: [
    { korean: '곧 도착해요.', myanmar: 'မကြာမီ ရောက်မယ်။', english: 'I\'ll arrive soon.' }
  ]},
  { id: '540', korean: '그때', myanmar: 'အဲဒီအချိန်', english: 'At that time', pos: 'noun', level: 'basic', examples: [
    { korean: '그때는 어렸어요.', myanmar: 'အဲဒီအချိန်မှာ ငယ်ခဲ့တယ်။', english: 'I was young at that time.' }
  ]},
  { id: '541', korean: '금방', myanmar: 'ခုနကလေး', english: 'Just now/Soon', pos: 'adverb', level: 'basic', examples: [
    { korean: '금방 왔어요.', myanmar: 'ခုနကလေး လာခဲ့တယ်။', english: 'I came just now.' }
  ]},
  { id: '542', korean: '기간', myanmar: 'ကာလ', english: 'Period', pos: 'noun', level: 'basic', examples: [
    { korean: '긴 기간이었어요.', myanmar: 'ရှည်လျားတဲ့ ကာလ ဖြစ်ခဲ့တယ်။', english: 'It was a long period.' }
  ]},
  { id: '543', korean: '깜빡', myanmar: 'တစ်ခဏ', english: 'In a flash/Briefly', pos: 'adverb', level: 'basic', examples: [
    { korean: '깜빡 잊었어요.', myanmar: 'တစ်ခဏ မေ့သွားခဲ့တယ်။', english: 'I forgot for a moment.' }
  ]},
  { id: '544', korean: '끝', myanmar: 'အဆုံး', english: 'End', pos: 'noun', level: 'basic', examples: [
    { korean: '영화의 끝이에요.', myanmar: 'ရုပ်ရှင်ရဲ့ အဆုံးပါ။', english: 'It\'s the end of the movie.' }
  ]},
  // === BATCH 6: ACTIONS & VERBS (545-564) ===
  { id: '545', korean: '가다듬다', myanmar: 'ပြင်ဆင်သည်', english: 'To arrange/prepare', pos: 'verb', level: 'basic', examples: [
    { korean: '옷을 가다듬었어요.', myanmar: 'အဝတ် ပြင်ဆင်ခဲ့တယ်။', english: 'I arranged my clothes.' }
  ]},
  { id: '546', korean: '가져다주다', myanmar: 'ယူပေးသည်', english: 'To bring (for someone)', pos: 'verb', level: 'basic', examples: [
    { korean: '책을 가져다줬어요.', myanmar: 'စာအုပ် ယူပေးခဲ့တယ်။', english: 'I brought the book for someone.' }
  ]},
  { id: '547', korean: '거들다', myanmar: 'ကူညီသည်', english: 'To help/assist', pos: 'verb', level: 'basic', examples: [
    { korean: '일을 거들어 줬어요.', myanmar: 'အလုပ် ကူညီပေးခဲ့တယ်။', english: 'I helped with the work.' }
  ]},
  { id: '548', korean: '걸치다', myanmar: 'တွဲသည်', english: 'To hang/put on', pos: 'verb', level: 'basic', examples: [
    { korean: '코트를 걸쳤어요.', myanmar: 'ကုတ်အင်္ကျီ တွဲခဲ့တယ်။', english: 'I put on a coat.' }
  ]},
  { id: '549', korean: '고치다', myanmar: 'ပြင်သည်', english: 'To fix/repair', pos: 'verb', level: 'basic', examples: [
    { korean: '컴퓨터를 고쳤어요.', myanmar: 'ကွန်ပျူတာ ပြင်ခဲ့တယ်။', english: 'I fixed the computer.' }
  ]},
  { id: '550', korean: '구하다', myanmar: 'ရှာသည်', english: 'To seek/find', pos: 'verb', level: 'basic', examples: [
    { korean: '일자리를 구해요.', myanmar: 'အလုပ် ရှာတယ်။', english: 'I\'m looking for a job.' }
  ]},
  { id: '551', korean: '굽다', myanmar: 'ကင်သည်', english: 'To bake/grill', pos: 'verb', level: 'basic', examples: [
    { korean: '빵을 구웠어요.', myanmar: 'ပေါင်မုန့် ကင်ခဲ့တယ်။', english: 'I baked bread.' }
  ]},
  { id: '552', korean: '그러다', myanmar: 'ထိုသို့လုပ်သည်', english: 'To do so', pos: 'verb', level: 'basic', examples: [
    { korean: '그러다가 넘어졌어요.', myanmar: 'ထိုသို့လုပ်ရင်း လဲကျခဲ့တယ်။', english: 'I fell while doing so.' }
  ]},
  { id: '553', korean: '기다리다', myanmar: 'စောင့်သည်', english: 'To wait', pos: 'verb', level: 'basic', examples: [
    { korean: '친구를 기다려요.', myanmar: 'သူငယ်ချင်းကို စောင့်တယ်။', english: 'I wait for my friend.' }
  ]},
  { id: '554', korean: '깨다', myanmar: 'နိုးသည်', english: 'To wake up', pos: 'verb', level: 'basic', examples: [
    { korean: '일찍 깼어요.', myanmar: 'စောစော နိုးခဲ့တယ်။', english: 'I woke up early.' }
  ]},
  { id: '555', korean: '꺾다', myanmar: 'ချိုးသည်', english: 'To break/snap', pos: 'verb', level: 'basic', examples: [
    { korean: '나뭇가지를 꺾었어요.', myanmar: 'သစ်ကိုင်း ချိုးခဲ့တယ်။', english: 'I broke the tree branch.' }
  ]},
  { id: '556', korean: '끌다', myanmar: 'ဆွဲသည်', english: 'To pull/drag', pos: 'verb', level: 'basic', examples: [
    { korean: '가방을 끌었어요.', myanmar: 'အိတ် ဆွဲခဲ့တယ်။', english: 'I dragged the bag.' }
  ]},
  { id: '557', korean: '끓이다', myanmar: 'ဆူအောင်လုပ်သည်', english: 'To boil', pos: 'verb', level: 'basic', examples: [
    { korean: '물을 끓였어요.', myanmar: 'ရေ ဆူအောင်လုပ်ခဲ့တယ်။', english: 'I boiled water.' }
  ]},
  { id: '558', korean: '끊다', myanmar: 'ဖြတ်သည်', english: 'To cut/stop', pos: 'verb', level: 'basic', examples: [
    { korean: '전화를 끊었어요.', myanmar: 'ဖုန်း ဖြတ်ခဲ့တယ်။', english: 'I hung up the phone.' }
  ]},
  { id: '559', korean: '긁다', myanmar: 'ခြစ်သည်', english: 'To scratch', pos: 'verb', level: 'basic', examples: [
    { korean: '등을 긁었어요.', myanmar: 'ကျောကို ခြစ်ခဲ့တယ်။', english: 'I scratched my back.' }
  ]},
  { id: '560', korean: '글썽이다', myanmar: 'မျက်ရည်ကျလု', english: 'To be teary', pos: 'verb', level: 'basic', examples: [
    { korean: '눈이 글썽였어요.', myanmar: 'မျက်လုံး မျက်ရည်ကျလုဖြစ်ခဲ့တယ်။', english: 'My eyes became teary.' }
  ]},
  { id: '561', korean: '금하다', myanmar: 'တားမြစ်သည်', english: 'To prohibit', pos: 'verb', level: 'basic', examples: [
    { korean: '흡연을 금해요.', myanmar: 'ဆေးလိပ်သောက်ခြင်း တားမြစ်တယ်။', english: 'Smoking is prohibited.' }
  ]},
  { id: '562', korean: '기울이다', myanmar: 'စောင်းစေသည်', english: 'To tilt/lean', pos: 'verb', level: 'basic', examples: [
    { korean: '고개를 기울였어요.', myanmar: 'လည်ပင်း စောင်းစေခဲ့တယ်။', english: 'I tilted my head.' }
  ]},
  { id: '563', korean: '길들이다', myanmar: 'လေ့ကျင့်သည်', english: 'To tame/train', pos: 'verb', level: 'basic', examples: [
    { korean: '개를 길들였어요.', myanmar: 'ခွေး လေ့ကျင့်ခဲ့တယ်။', english: 'I tamed the dog.' }
  ]},
  { id: '564', korean: '김치다', myanmar: 'ကင်ချီလုပ်သည်', english: 'To make kimchi', pos: 'verb', level: 'basic', examples: [
    { korean: '배추를 김치했어요.', myanmar: 'ဂေါ်ဖီထုပ် ကင်ချီလုပ်ခဲ့တယ်။', english: 'I made kimchi with cabbage.' }
  ]},
  // === BATCH 7: MUSIC & ARTS (565-614) ===
  { id: '565', korean: '가곡', myanmar: 'သီချင်းတေး', english: 'Art song', pos: 'noun', level: 'basic', examples: [
    { korean: '가곡을 불렀어요.', myanmar: 'သီချင်းတေး သီခဲ့တယ်။', english: 'I sang an art song.' }
  ]},
  { id: '566', korean: '가수', myanmar: 'အဆိုတော်', english: 'Singer', pos: 'noun', level: 'basic', examples: [
    { korean: '유명한 가수예요.', myanmar: 'နာမည်ကြီး အဆိုတော်ပါ။', english: 'He\'s a famous singer.' }
  ]},
  { id: '567', korean: '가요', myanmar: 'ရေပန်းစားသီချင်း', english: 'Popular song', pos: 'noun', level: 'basic', examples: [
    { korean: '가요를 들어요.', myanmar: 'ရေပန်းစားသီချင်း နားထောင်တယ်။', english: 'I listen to popular songs.' }
  ]},
  { id: '568', korean: '갤러리', myanmar: 'ပန်းချီပြခန်း', english: 'Gallery', pos: 'noun', level: 'basic', examples: [
    { korean: '갤러리에 갔어요.', myanmar: 'ပန်းချီပြခန်းကို သွားခဲ့တယ်။', english: 'I went to the gallery.' }
  ]},
  { id: '569', korean: '거문고', myanmar: 'ကိုရီးယား ကွန်ဆာ', english: 'Geomungo (Korean zither)', pos: 'noun', level: 'basic', examples: [
    { korean: '거문고를 연주해요.', myanmar: 'ကိုရီးယား ကွန်ဆာ တီးတယ်။', english: 'I play the geomungo.' }
  ]},
  { id: '570', korean: '공연', myanmar: 'ဖျော်ဖြေပွဲ', english: 'Performance', pos: 'noun', level: 'basic', examples: [
    { korean: '공연을 봤어요.', myanmar: 'ဖျော်ဖြေပွဲ ကြည့်ခဲ့တယ်။', english: 'I watched a performance.' }
  ]},
  { id: '571', korean: '관객', myanmar: 'ပရိသတ်', english: 'Audience', pos: 'noun', level: 'basic', examples: [
    { korean: '관객이 많았어요.', myanmar: 'ပရိသတ် အများကြီး ရှိခဲ့တယ်။', english: 'There was a large audience.' }
  ]},
  { id: '572', korean: '그림', myanmar: 'ပန်းချီ', english: 'Picture/Painting', pos: 'noun', level: 'basic', examples: [
    { korean: '그림을 그렸어요.', myanmar: 'ပန်းချီ ဆွဲခဲ့တယ်။', english: 'I drew a picture.' }
  ]},
  { id: '573', korean: '기타', myanmar: 'ဂစ်တာ', english: 'Guitar', pos: 'noun', level: 'basic', examples: [
    { korean: '기타를 쳐요.', myanmar: 'ဂစ်တာ တီးတယ်။', english: 'I play guitar.' }
  ]},
  { id: '574', korean: '깜짝쇼', myanmar: 'အံ့သြစရာပွဲ', english: 'Surprise show', pos: 'noun', level: 'basic', examples: [
    { korean: '깜짝쇼를 준비했어요.', myanmar: 'အံ့သြစရာပွဲ ပြင်ဆင်ခဲ့တယ်။', english: 'I prepared a surprise show.' }
  ]},
  // === BATCH 7: MEDICAL & HEALTHCARE (575-624) ===
  { id: '575', korean: '간병', myanmar: 'စောင့်ရှောက်ခြင်း', english: 'Nursing care', pos: 'noun', level: 'basic', examples: [
    { korean: '간병을 했어요.', myanmar: 'စောင့်ရှောက်ခဲ့တယ်။', english: 'I provided nursing care.' }
  ]},
  { id: '576', korean: '감염', myanmar: 'ကူးစက်ခြင်း', english: 'Infection', pos: 'noun', level: 'basic', examples: [
    { korean: '감염을 피해요.', myanmar: 'ကူးစက်မှု ရှောင်တယ်။', english: 'I avoid infection.' }
  ]},
  { id: '577', korean: '개인병원', myanmar: 'ပုဂ္ဂလိကဆေးရုံ', english: 'Private hospital', pos: 'noun', level: 'basic', examples: [
    { korean: '개인병원에 갔어요.', myanmar: 'ပုဂ္ဂလိကဆေးရုံကို သွားခဲ့တယ်။', english: 'I went to a private hospital.' }
  ]},
  { id: '578', korean: '건강검진', myanmar: 'ကျန်းမာရေးစစ်ဆေး', english: 'Health checkup', pos: 'noun', level: 'basic', examples: [
    { korean: '건강검진을 받았어요.', myanmar: 'ကျန်းမာရေးစစ်ဆေး ခံခဲ့တယ်။', english: 'I had a health checkup.' }
  ]},
  { id: '579', korean: '결핵', myanmar: 'တီဘီ', english: 'Tuberculosis', pos: 'noun', level: 'basic', examples: [
    { korean: '결핵 검사를 했어요.', myanmar: 'တီဘီ စစ်ဆေးခဲ့တယ်။', english: 'I had a tuberculosis test.' }
  ]},
  { id: '580', korean: '고혈압', myanmar: 'သွေးတိုးရောဂါ', english: 'High blood pressure', pos: 'noun', level: 'basic', examples: [
    { korean: '고혈압이 있어요.', myanmar: 'သွေးတိုးရောဂါ ရှိတယ်။', english: 'I have high blood pressure.' }
  ]},
  { id: '581', korean: '골다공증', myanmar: 'အရိုးပွန်းရောဂါ', english: 'Osteoporosis', pos: 'noun', level: 'basic', examples: [
    { korean: '골다공증 예방해요.', myanmar: 'အရိုးပွန်းရောဂါ ကာကွယ်တယ်။', english: 'I prevent osteoporosis.' }
  ]},
  { id: '582', korean: '구토', myanmar: 'အန်ခြင်း', english: 'Vomiting', pos: 'noun', level: 'basic', examples: [
    { korean: '구토가 나와요.', myanmar: 'အန်ခြင်း ဖြစ်တယ်။', english: 'I\'m vomiting.' }
  ]},
  { id: '583', korean: '기침약', myanmar: 'ချောင်းဆိုးဆေး', english: 'Cough medicine', pos: 'noun', level: 'basic', examples: [
    { korean: '기침약을 먹었어요.', myanmar: 'ချောင်းဆိုးဆေး သောက်ခဲ့တယ်။', english: 'I took cough medicine.' }
  ]},
  { id: '584', korean: '깁스', myanmar: 'အရိုးကုပ်', english: 'Cast (medical)', pos: 'noun', level: 'basic', examples: [
    { korean: '깁스를 했어요.', myanmar: 'အရိုးကုပ် ပတ်ခဲ့တယ်။', english: 'I got a cast.' }
  ]},
  // === BATCH 7: TRAVEL & TOURISM (585-634) ===
  { id: '585', korean: '가이드', myanmar: 'လမ်းညွှန်', english: 'Guide', pos: 'noun', level: 'basic', examples: [
    { korean: '가이드가 설명했어요.', myanmar: 'လမ်းညွှန်က ရှင်းပြခဲ့တယ်။', english: 'The guide explained.' }
  ]},
  { id: '586', korean: '관광', myanmar: 'ခရီးသွား', english: 'Tourism', pos: 'noun', level: 'basic', examples: [
    { korean: '관광을 갔어요.', myanmar: 'ခရီးသွား သွားခဲ့တယ်။', english: 'I went on a tour.' }
  ]},
  { id: '587', korean: '기념품', myanmar: 'အမှတ်တရပစ္စည်း', english: 'Souvenir', pos: 'noun', level: 'basic', examples: [
    { korean: '기념품을 샀어요.', myanmar: 'အမှတ်တရပစ္စည်း ဝယ်ခဲ့တယ်။', english: 'I bought a souvenir.' }
  ]},
  { id: '588', korean: '길잃다', myanmar: 'လမ်းပျောက်', english: 'To get lost', pos: 'verb', level: 'basic', examples: [
    { korean: '길을 잃었어요.', myanmar: 'လမ်း ပျောက်ခဲ့တယ်။', english: 'I got lost.' }
  ]},
  { id: '589', korean: '끌려다니다', myanmar: 'ဆွဲခေါ်သွား', english: 'To be dragged around', pos: 'verb', level: 'basic', examples: [
    { korean: '친구에게 끌려다녔어요.', myanmar: 'သူငယ်ချင်းက ဆွဲခေါ်သွားခဲ့တယ်။', english: 'I was dragged around by my friend.' }
  ]},
  { id: '590', korean: '거리공연', myanmar: 'လမ်းဖျော်ဖြေပွဲ', english: 'Street performance', pos: 'noun', level: 'basic', examples: [
    { korean: '거리공연을 봤어요.', myanmar: 'လမ်းဖျော်ဖြေပွဲ ကြည့်ခဲ့တယ်။', english: 'I watched a street performance.' }
  ]},
  { id: '591', korean: '게스트하우스', myanmar: 'ဧည့်သည်အိမ်', english: 'Guesthouse', pos: 'noun', level: 'basic', examples: [
    { korean: '게스트하우스에 머물렀어요.', myanmar: 'ဧည့်သည်အိမ်မှာ နေခဲ့တယ်။', english: 'I stayed at a guesthouse.' }
  ]},
  { id: '592', korean: '경치', myanmar: 'ရှုခင်း', english: 'Scenery', pos: 'noun', level: 'basic', examples: [
    { korean: '경치가 아름다워요.', myanmar: 'ရှုခင်းက လှတယ်။', english: 'The scenery is beautiful.' }
  ]},
  { id: '593', korean: '고궁', myanmar: 'နန်းတော်ဟောင်း', english: 'Ancient palace', pos: 'noun', level: 'basic', examples: [
    { korean: '고궁을 구경했어요.', myanmar: 'နန်းတော်ဟောင်း ကြည့်ရှုခဲ့တယ်။', english: 'I visited the ancient palace.' }
  ]},
  { id: '594', korean: '국내여행', myanmar: 'ပြည်တွင်းခရီးသွား', english: 'Domestic travel', pos: 'noun', level: 'basic', examples: [
    { korean: '국내여행을 했어요.', myanmar: 'ပြည်တွင်းခရီးသွား သွားခဲ့တယ်။', english: 'I went on a domestic trip.' }
  ]},
  // === BATCH 7: COMMUNICATION & MEDIA (595-614) ===
  { id: '595', korean: '가입', myanmar: 'ဝင်ရောက်ခြင်း', english: 'Membership/Sign up', pos: 'noun', level: 'basic', examples: [
    { korean: '가입을 했어요.', myanmar: 'ဝင်ရောက်ခဲ့တယ်။', english: 'I signed up.' }
  ]},
  { id: '596', korean: '개통', myanmar: 'ဖွင့်လှစ်ခြင်း', english: 'Opening/Connection', pos: 'noun', level: 'basic', examples: [
    { korean: '인터넷이 개통됐어요.', myanmar: 'အင်တာနက် ဖွင့်လှစ်ခဲ့တယ်။', english: 'Internet was connected.' }
  ]},
  { id: '597', korean: '거짓말', myanmar: 'လိမ်ညာခြင်း', english: 'Lie', pos: 'noun', level: 'basic', examples: [
    { korean: '거짓말하지 마세요.', myanmar: 'လိမ်မညာပါနဲ့။', english: 'Don\'t lie.' }
  ]},
  { id: '598', korean: '게시글', myanmar: 'တင်ထားသောစာ', english: 'Post', pos: 'noun', level: 'basic', examples: [
    { korean: '게시글을 올렸어요.', myanmar: 'တင်ထားသောစာ တင်ခဲ့တယ်။', english: 'I posted a message.' }
  ]},
  { id: '599', korean: '공지', myanmar: 'ကြေညာချက်', english: 'Notice/Announcement', pos: 'noun', level: 'basic', examples: [
    { korean: '공지를 확인했어요.', myanmar: 'ကြေညာချက် စစ်ဆေးခဲ့တယ်။', english: 'I checked the notice.' }
  ]},
  { id: '600', korean: '구독', myanmar: 'စာရင်းသွင်းခြင်း', english: 'Subscription', pos: 'noun', level: 'basic', examples: [
    { korean: '구독을 했어요.', myanmar: 'စာရင်းသွင်းခဲ့တယ်။', english: 'I subscribed.' }
  ]},
  { id: '601', korean: '그룹채팅', myanmar: 'အုပ်စုစကားပြောခြင်း', english: 'Group chat', pos: 'noun', level: 'basic', examples: [
    { korean: '그룹채팅을 했어요.', myanmar: 'အုပ်စုစကားပြောခဲ့တယ်။', english: 'I had a group chat.' }
  ]},
  { id: '602', korean: '기사', myanmar: 'သတင်းဆောင်းပါး', english: 'News article', pos: 'noun', level: 'basic', examples: [
    { korean: '기사를 읽었어요.', myanmar: 'သတင်းဆောင်းပါး ဖတ်ခဲ့တယ်။', english: 'I read a news article.' }
  ]},
  { id: '603', korean: '깜빡이', myanmar: 'မှတ်တမ်းတင်ကိရိယာ', english: 'Blinker/Indicator', pos: 'noun', level: 'basic', examples: [
    { korean: '깜빡이를 켰어요.', myanmar: 'မှတ်တမ်းတင်ကိရိယာ ဖွင့်ခဲ့တယ်။', english: 'I turned on the blinker.' }
  ]},
  { id: '604', korean: '끊어지다', myanmar: 'ပြတ်သွားသည်', english: 'To be disconnected', pos: 'verb', level: 'basic', examples: [
    { korean: '전화가 끊어졌어요.', myanmar: 'ဖုန်း ပြတ်သွားခဲ့တယ်။', english: 'The phone was disconnected.' }
  ]},
  { id: '605', korean: '긴급전화', myanmar: 'အရေးပေါ်ဖုန်း', english: 'Emergency call', pos: 'noun', level: 'basic', examples: [
    { korean: '긴급전화를 했어요.', myanmar: 'အရေးပေါ်ဖုန်း ခေါ်ခဲ့တယ်။', english: 'I made an emergency call.' }
  ]},
  { id: '606', korean: '글자크기', myanmar: 'စာလုံးအရွယ်', english: 'Font size', pos: 'noun', level: 'basic', examples: [
    { korean: '글자크기를 키웠어요.', myanmar: 'စာလုံးအရွယ် ကြီးအောင်လုပ်ခဲ့တယ်။', english: 'I increased the font size.' }
  ]},
  { id: '607', korean: '금지어', myanmar: 'တားမြစ်ထားသောစကား', english: 'Forbidden word', pos: 'noun', level: 'basic', examples: [
    { korean: '금지어를 사용했어요.', myanmar: 'တားမြစ်ထားသောစကား သုံးခဲ့တယ်။', english: 'I used a forbidden word.' }
  ]},
  { id: '608', korean: '기호', myanmar: 'သင်္ကေတ', english: 'Symbol/Sign', pos: 'noun', level: 'basic', examples: [
    { korean: '특수 기호예요.', myanmar: 'အထူး သင်္ကေတပါ။', english: 'It\'s a special symbol.' }
  ]},
  { id: '609', korean: '길찾기', myanmar: 'လမ်းရှာခြင်း', english: 'Finding directions', pos: 'noun', level: 'basic', examples: [
    { korean: '길찾기를 도와주세요.', myanmar: 'လမ်းရှာခြင်း ကူညီပေးပါ။', english: 'Please help me find directions.' }
  ]},
  { id: '610', korean: '김밥천국', myanmar: 'ကင်ချီဘပ်နန်းတော်', english: 'Gimbap Heaven (restaurant chain)', pos: 'noun', level: 'basic', examples: [
    { korean: '김밥천국에서 먹었어요.', myanmar: 'ကင်ချီဘပ်နန်းတော်မှာ စားခဲ့တယ်။', english: 'I ate at Gimbap Heaven.' }
  ]},
  { id: '611', korean: '까먹다', myanmar: 'မေ့သွားသည်', english: 'To forget', pos: 'verb', level: 'basic', examples: [
    { korean: '이름을 까먹었어요.', myanmar: 'နာမည် မေ့သွားခဲ့တယ်။', english: 'I forgot the name.' }
  ]},
  { id: '612', korean: '깨우다', myanmar: 'နိုးစေသည်', english: 'To wake up (someone)', pos: 'verb', level: 'basic', examples: [
    { korean: '친구를 깨웠어요.', myanmar: 'သူငယ်ချင်းကို နိုးစေခဲ့တယ်။', english: 'I woke up my friend.' }
  ]},
  { id: '613', korean: '꺼지다', myanmar: 'ပိတ်သွားသည်', english: 'To turn off/go out', pos: 'verb', level: 'basic', examples: [
    { korean: '불이 꺼졌어요.', myanmar: 'မီးက ပိတ်သွားတယ်။', english: 'The light went out.' }
  ]},
  { id: '614', korean: '끌어당기다', myanmar: 'ဆွဲယူသည်', english: 'To pull/attract', pos: 'verb', level: 'basic', examples: [
    { korean: '관심을 끌어당겨요.', myanmar: 'စိတ်ဝင်စားမှု ဆွဲယူတယ်။', english: 'It attracts attention.' }
  ]},
  // === BATCH 8: NATURE & ENVIRONMENT (615-664) ===
  { id: '615', korean: '가뭄', myanmar: 'မိုးခေါင်', english: 'Drought', pos: 'noun', level: 'basic', examples: [
    { korean: '가뭄이 심해요.', myanmar: 'မိုးခေါင် ပြင်းတယ်။', english: 'The drought is severe.' }
  ]},
  { id: '616', korean: '강물', myanmar: 'မြစ်ရေ', english: 'River water', pos: 'noun', level: 'basic', examples: [
    { korean: '강물이 맑아요.', myanmar: 'မြစ်ရေက ကြည်တယ်။', english: 'The river water is clear.' }
  ]},
  { id: '617', korean: '개구리', myanmar: 'ဖားတောင်', english: 'Frog', pos: 'noun', level: 'basic', examples: [
    { korean: '개구리가 울어요.', myanmar: 'ဖားတောင်က အော်တယ်။', english: 'The frog croaks.' }
  ]},
  { id: '618', korean: '거센바람', myanmar: 'လေပြင်း', english: 'Strong wind', pos: 'noun', level: 'basic', examples: [
    { korean: '거센바람이 불어요.', myanmar: 'လေပြင်း တိုက်တယ်။', english: 'Strong wind is blowing.' }
  ]},
  { id: '619', korean: '계곡', myanmar: 'ချိုင့်ဝှမ်း', english: 'Valley', pos: 'noun', level: 'basic', examples: [
    { korean: '계곡에서 놀았어요.', myanmar: 'ချိုင့်ဝှမ်းမှာ ကစားခဲ့တယ်။', english: 'I played in the valley.' }
  ]},
  { id: '620', korean: '고래', myanmar: 'ဝေလငါး', english: 'Whale', pos: 'noun', level: 'basic', examples: [
    { korean: '고래를 봤어요.', myanmar: 'ဝေလငါးကို ကြည့်ခဲ့တယ်။', english: 'I saw a whale.' }
  ]},
  { id: '621', korean: '곤충', myanmar: 'ပိုးကောင်', english: 'Insect', pos: 'noun', level: 'basic', examples: [
    { korean: '곤충을 관찰해요.', myanmar: 'ပိုးကောင်ကို လေ့လာတယ်။', english: 'I observe insects.' }
  ]},
  { id: '622', korean: '구름', myanmar: 'တိမ်', english: 'Cloud', pos: 'noun', level: 'basic', examples: [
    { korean: '구름이 많아요.', myanmar: 'တိမ် အများကြီး ရှိတယ်။', english: 'There are many clouds.' }
  ]},
  { id: '623', korean: '굴', myanmar: 'မြေတွင်းခေါင်း/လှိုင်ဂူ/လှိုင်ခေါင်း', english: 'Cave', pos: 'noun', level: 'basic', examples: [
    { korean: '굴 속이 어두워요.', myanmar: 'လှိုင်ခေါင်း ထဲက မှောင်တယ်။', english: 'Inside the cave is dark.' }
  ]},
  { id: '624', korean: '그늘', myanmar: 'အရိပ်', english: 'Shade', pos: 'noun', level: 'basic', examples: [
    { korean: '그늘에서 쉬었어요.', myanmar: 'အရိပ်မှာ အနားယူခဲ့တယ်။', english: 'I rested in the shade.' }
  ]},
  // === BATCH 8: FOOD & COOKING (625-674) ===
  { id: '625', korean: '가자미', myanmar: 'ငါးပြား', english: 'Flounder', pos: 'noun', level: 'basic', examples: [
    { korean: '가자미를 구웠어요.', myanmar: 'ငါးပြားကို ကင်ခဲ့တယ်။', english: 'I grilled flounder.' }
  ]}, 
  { id: '626', korean: '간식', myanmar: 'အဆာပြေ', english: 'Snack', pos: 'noun', level: 'basic', examples: [
    { korean: '간식을 먹었어요.', myanmar: 'အဆာပြေ စားခဲ့တယ်။', english: 'I ate a snack.' }
  ]},
  { id: '627', korean: '갈비탕', myanmar: 'နံရိုးဟင်းချို', english: 'Galbitang (short rib soup)', pos: 'noun', level: 'basic', examples: [
    { korean: '갈비탕이 맛있어요.', myanmar: 'နံရိုးဟင်းချိုက အရသာရှိတယ်။', english: 'Galbitang is delicious.' }
  ]},
  { id: '628', korean: '감자칩', myanmar: 'အာလူးကြော်', english: 'Potato chips', pos: 'noun', level: 'basic', examples: [
    { korean: '감자칩을 먹어요.', myanmar: 'အာလူးကြော် စားတယ်။', english: 'I eat potato chips.' }
  ]},
  { id: '629', korean: '개떡', myanmar: 'ခွေးမုန့်', english: 'Dog cake', pos: 'noun', level: 'basic', examples: [
    { korean: '개떡을 만들었어요.', myanmar: 'ခွေးမုန့် လုပ်ခဲ့တယ်။', english: 'I made dog cake.' }
  ]},
  { id: '630', korean: '거품', myanmar: 'အမြှုပ်', english: 'Foam/Bubble', pos: 'noun', level: 'basic', examples: [
    { korean: '맥주에 거품이 있어요.', myanmar: 'ဘီယာမှာ အမြှုပ် ရှိတယ်။', english: 'There is foam in the beer.' }
  ]},
  { id: '631', korean: '게장', myanmar: 'ကဏန်းချဉ်', english: 'Marinated crab', pos: 'noun', level: 'basic', examples: [
    { korean: '게장을 먹었어요.', myanmar: 'ကဏန်းချဉ် စားခဲ့တယ်။', english: 'I ate marinated crab.' }
  ]},
  { id: '632', korean: '고기국수', myanmar: 'အသားခေါက်ဆွဲ', english: 'Meat noodle soup', pos: 'noun', level: 'basic', examples: [
    { korean: '고기국수를 먹었어요.', myanmar: 'အသားခေါက်ဆွဲ စားခဲ့တယ်။', english: 'I ate meat noodle soup.' }
  ]},
  { id: '633', korean: '곰탕', myanmar: 'အရိုးဟင်းချို', english: 'Gomtang (bone soup)', pos: 'noun', level: 'basic', examples: [
    { korean: '곰탕이 진해요.', myanmar: 'အရိုးဟင်းချိုက ရှိုက်တယ်။', english: 'Gomtang is rich.' }
  ]},
  { id: '634', korean: '구이', myanmar: 'ကင်ထားသော/အကင်', english: 'Grilled food', pos: 'noun', level: 'basic', examples: [
    { korean: '생선구이를 먹었어요.', myanmar: 'ငါးကင်ကို စားခဲ့တယ်။', english: 'I ate grilled fish.' }
  ]},
  // === BATCH 8: SHOPPING & COMMERCE (635-684) ===
  { id: '635', korean: '가격표', myanmar: 'ဈေးနှုန်းတံဆိပ်', english: 'Price tag', pos: 'noun', level: 'basic', examples: [
    { korean: '가격표를 봤어요.', myanmar: 'ဈေးနှုန်းတံဆိပ် ကြည့်ခဲ့တယ်။', english: 'I looked at the price tag.' }
  ]},
  { id: '636', korean: '간편결제', myanmar: 'လွယ်ကူတဲ့ငွေပေးချေမှု', english: 'Easy payment', pos: 'noun', level: 'basic', examples: [
    { korean: '간편결제를 했어요.', myanmar: 'လွယ်ကူတဲ့ငွေပေးချေမှု လုပ်ခဲ့တယ်။', english: 'I made an easy payment.' }
  ]},
  { id: '637', korean: '개점', myanmar: 'ဆိုင်ဖွင့်ခြင်း', english: 'Store opening', pos: 'noun', level: 'basic', examples: [
    { korean: '개점 시간이에요.', myanmar: 'ဆိုင်ဖွင့်ချိန်ပါ။', english: 'It\'s opening time.' }
  ]},
  { id: '638', korean: '거스름돈', myanmar: 'အကြွေး', english: 'Change (money)', pos: 'noun', level: 'basic', examples: [
    { korean: '거스름돈을 받았어요.', myanmar: 'အကြွေး ရခဲ့တယ်။', english: 'I received change.' }
  ]},
  { id: '639', korean: '계산서', myanmar: 'ငွေတောင်းလွှာ', english: 'Bill/Receipt', pos: 'noun', level: 'basic', examples: [
    { korean: '계산서를 달라고 했어요.', myanmar: 'ငွေတောင်းလွှာ တောင်းခဲ့တယ်။', english: 'I asked for the bill.' }
  ]},
  { id: '640', korean: '고객센터', myanmar: 'ဖောက်သည်ဌာန', english: 'Customer center', pos: 'noun', level: 'basic', examples: [
    { korean: '고객센터에 전화했어요.', myanmar: 'ဖောက်သည်ဌာနကို ဖုန်းခေါ်ခဲ့တယ်။', english: 'I called the customer center.' }
  ]},
  { id: '641', korean: '공짜', myanmar: 'အခမဲ့', english: 'Free', pos: 'noun', level: 'basic', examples: [
    { korean: '공짜로 줬어요.', myanmar: 'အခမဲ့ ပေးခဲ့တယ်။', english: 'I gave it for free.' }
  ]},
  { id: '642', korean: '구매내역', myanmar: 'ဝယ်ယူမှုမှတ်တမ်း', english: 'Purchase history', pos: 'noun', level: 'basic', examples: [
    { korean: '구매내역을 확인했어요.', myanmar: 'ဝယ်ယူမှုမှတ်တမ်း စစ်ဆေးခဲ့တယ်။', english: 'I checked the purchase history.' }
  ]},
  { id: '643', korean: '굿즈', myanmar: 'ပစ္စည်းများ', english: 'Goods/Merchandise', pos: 'noun', level: 'basic', examples: [
    { korean: '굿즈를 샀어요.', myanmar: 'ပစ္စည်းများ ဝယ်ခဲ့တယ်။', english: 'I bought goods.' }
  ]},
  { id: '644', korean: '기프트카드', myanmar: 'လက်ဆောင်ကတ်', english: 'Gift card', pos: 'noun', level: 'basic', examples: [
    { korean: '기프트카드를 받았어요.', myanmar: 'လက်ဆောင်ကတ် ရခဲ့တယ်။', english: 'I received a gift card.' }
  ]},
  // === BATCH 8: DAILY ACTIVITIES (645-664) ===
  { id: '645', korean: '가꾸다', myanmar: 'ပြုစုသည်', english: 'To cultivate/tend', pos: 'verb', level: 'basic', examples: [
    { korean: '정원을 가꿨어요.', myanmar: 'ဥယျာဉ် ပြုစုခဲ့တယ်။', english: 'I tended the garden.' }
  ]},
  { id: '646', korean: '갈아입다', myanmar: 'လဲဝတ်သည်', english: 'To change clothes', pos: 'verb', level: 'basic', examples: [
    { korean: '옷을 갈아입었어요.', myanmar: 'အဝတ် လဲဝတ်ခဲ့တယ်။', english: 'I changed clothes.' }
  ]},
  { id: '647', korean: '걸어다니다', myanmar: 'လမ်းလျှောက်သည်', english: 'To walk around', pos: 'verb', level: 'basic', examples: [
    { korean: '공원에서 걸어다녔어요.', myanmar: 'ဥယျာဉ်မှာ လမ်းလျှောက်ခဲ့တယ်။', english: 'I walked around in the park.' }
  ]},
  { id: '648', korean: '게으르다', myanmar: 'ပျင်းရိသည်', english: 'To be lazy', pos: 'adjective', level: 'basic', examples: [
    { korean: '오늘은 게을러요.', myanmar: 'ဒီနေ့က ပျင်းရိတယ်။', english: 'I\'m lazy today.' }
  ]},
  { id: '649', korean: '고민하다', myanmar: 'စိတ်ပူသည်', english: 'To worry/be concerned', pos: 'verb', level: 'basic', examples: [
    { korean: '미래를 고민해요.', myanmar: 'အနာဂတ်ကို စိတ်ပူတယ်။', english: 'I worry about the future.' }
  ]},
  { id: '650', korean: '구경하다', myanmar: 'ကြည့်ရှုသည်', english: 'To look around/sightsee', pos: 'verb', level: 'basic', examples: [
    { korean: '박물관을 구경했어요.', myanmar: 'ပြတိုက် ကြည့်ရှုခဲ့တယ်။', english: 'I looked around the museum.' }
  ]},
  { id: '651', korean: '굽히다', myanmar: 'ကွေးစေသည်', english: 'To bend', pos: 'verb', level: 'basic', examples: [
    { korean: '허리를 굽혔어요.', myanmar: 'ခါးကို ကွေးစေခဲ့တယ်။', english: 'I bent my waist.' }
  ]},
  { id: '652', korean: '그만두다', myanmar: 'ရပ်တန့်သည်', english: 'To quit/stop', pos: 'verb', level: 'basic', examples: [
    { korean: '일을 그만뒀어요.', myanmar: 'အလုပ် ရပ်တန့်ခဲ့တယ်။', english: 'I quit my job.' }
  ]},
  { id: '653', korean: '기지개', myanmar: 'ဆန့်ခြင်း', english: 'Stretch/Yawn', pos: 'noun', level: 'basic', examples: [
    { korean: '기지개를 켰어요.', myanmar: 'ဆန့်ခြင်း လုပ်ခဲ့တယ်။', english: 'I stretched.' }
  ]},
  { id: '654', korean: '깨끗하게', myanmar: 'သန့်ရှင်းစွာ', english: 'Cleanly', pos: 'adverb', level: 'basic', examples: [
    { korean: '깨끗하게 씻었어요.', myanmar: 'သန့်ရှင်းစွာ ဆေးခဲ့တယ်။', english: 'I washed cleanly.' }
  ]},
  { id: '655', korean: '꺼내다', myanmar: 'ထုတ်သည်', english: 'To take out', pos: 'verb', level: 'basic', examples: [
    { korean: '가방에서 꺼냈어요.', myanmar: 'အိတ်က ထုတ်ခဲ့တယ်။', english: 'I took it out of the bag.' }
  ]},
  { id: '656', korean: '끌어올리다', myanmar: 'ဆွဲတင်သည်', english: 'To pull up', pos: 'verb', level: 'basic', examples: [
    { korean: '소매를 끌어올렸어요.', myanmar: 'လက်ရှည် ဆွဲတင်ခဲ့တယ်။', english: 'I pulled up my sleeves.' }
  ]},
  { id: '657', korean: '끌어안다', myanmar: 'ဖက်ထားသည်', english: 'To embrace/hug', pos: 'verb', level: 'basic', examples: [
    { korean: '친구를 끌어안았어요.', myanmar: 'သူငယ်ချင်းကို ဖက်ထားခဲ့တယ်။', english: 'I hugged my friend.' }
  ]},
  { id: '658', korean: '끝내주다', myanmar: 'အရမ်းကောင်းသည်', english: 'To be awesome', pos: 'verb', level: 'basic', examples: [
    { korean: '정말 끝내줘요.', myanmar: 'တကယ် အရမ်းကောင်းတယ်။', english: 'It\'s really awesome.' }
  ]},
  { id: '659', korean: '긁어내다', myanmar: 'ခြစ်ထုတ်သည်', english: 'To scrape out', pos: 'verb', level: 'basic', examples: [
    { korean: '때를 긁어냈어요.', myanmar: 'အညစ်အကြေး ခြစ်ထုတ်ခဲ့တယ်။', english: 'I scraped off the dirt.' }
  ]},
  { id: '660', korean: '글씨쓰기', myanmar: 'စာရေးခြင်း', english: 'Writing', pos: 'noun', level: 'basic', examples: [
    { korean: '글씨쓰기를 연습해요.', myanmar: 'စာရေးခြင်း လေ့ကျင့်တယ်။', english: 'I practice writing.' }
  ]},
  { id: '661', korean: '금요일', myanmar: 'သောကြာနေ့', english: 'Friday', pos: 'noun', level: 'basic', examples: [
    { korean: '금요일에 만나요.', myanmar: 'သောကြာနေ့မှာ တွေ့မယ်။', english: 'Let\'s meet on Friday.' }
  ]},
  { id: '662', korean: '기다리기', myanmar: 'စောင့်ခြင်း', english: 'Waiting', pos: 'noun', level: 'basic', examples: [
    { korean: '기다리기가 힘들어요.', myanmar: 'စောင့်ခြင်းက ခက်ခဲတယ်။', english: 'Waiting is difficult.' }
  ]},
  { id: '663', korean: '길가다', myanmar: 'လမ်းသွားသည်', english: 'To go on the road', pos: 'verb', level: 'basic', examples: [
    { korean: '길을 가다가 만났어요.', myanmar: 'လမ်း သွားရင်း တွေ့ခဲ့တယ်။', english: 'I met while going on the road.' }
  ]},
  { id: '664', korean: '김이 서리다', myanmar: 'ရေနွေးငွေ့တက်', english: 'To steam up', pos: 'verb', level: 'basic', examples: [
    { korean: '유리창에 김이 서렸어요.', myanmar: 'ဖန်ပြတင်းပေါက်မှာ ရေနွေးငွေ့ တက်ခဲ့တယ်။', english: 'The window steamed up.' }
  ]}
];

/*
===== HUMAN FACT-CHECK REQUIRED =====

I have added comprehensive ㄱ consonant words across all difficulty levels.
Total ㄱ words now: 102 words (from IDs 13-162, plus the 2 new ones above)

PLEASE VERIFY:
1. Korean spelling accuracy
2. Myanmar translations correctness  
3. English translations appropriateness
4. Part of speech classifications
5. Difficulty level assignments
6. Example sentences quality and accuracy

After human verification and any necessary corrections, we can proceed to ㄴ consonant words.

NEXT STEPS PLANNED:
ㄴ (nieun) → ㄷ (digeut) → ㄹ (rieul) → ㅁ (mieum) → ㅂ (bieup) → ㅅ (siot) → ㅇ (ieung) → ㅈ (jieut) → ㅊ (chieut) → ㅋ (kieuk) → ㅌ (tieut) → ㅍ (pieup) → ㅎ (hieut)
*/
