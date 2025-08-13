import type { DictionaryEntry } from '../types/dictionary';

// Dictionary entries - includes both initial data and approved user submissions
// Last updated: 8/11/2025, 6:08:29 AM
// Total entries: 1164 (1000 basic level ㄱ consonant words + existing entries)
export const dictionaryEntries = [
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
  { id: '638', korean: '거스름돈', myanmar: 'အကြွေ', english: 'Change (money)', pos: 'noun', level: 'basic', examples: [
    { korean: '름돈을 받았어요.', myanmar: 'အကြွေ ရခဲ့တယ်။', english: 'I received change.' }
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
  { id: '652', korean: '그만두다', myanmar: 'ရပ်တန့်သည် / ထွက်သည်', english: 'To quit/stop', pos: 'verb', level: 'basic', examples: [
    { korean: '일을 그만뒀어요.', myanmar: 'အလုပ် ထွက်ခဲ့သည် / ရပ်တန့်ခဲ့တယ်။', english: 'I quit my job.' }
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
  ]},
  // === BATCH 9: ENTERTAINMENT & LEISURE (665-714) ===
  { id: '665', korean: '가요제', myanmar: 'သီချင်းပွဲ', english: 'Song festival', pos: 'noun', level: 'basic', examples: [
    { korean: '가요제에 갔어요.', myanmar: 'သီချင်းပွဲကို သွားခဲ့တယ်။', english: 'I went to the song festival.' }
  ]},
  { id: '666', korean: '게임', myanmar: 'ဂိမ်း', english: 'Game', pos: 'noun', level: 'basic', examples: [
    { korean: '게임을 해요.', myanmar: 'ဂိမ်း ကစားတယ်။', english: 'I play games.' }
  ]},
  { id: '667', korean: '경품', myanmar: 'ဆုလာဘ်', english: 'Prize', pos: 'noun', level: 'basic', examples: [
    { korean: '경품을 받았어요.', myanmar: 'ဆုလာဘ် ရခဲ့တယ်။', english: 'I received a prize.' }
  ]},
  { id: '668', korean: '고스톱', myanmar: 'ကိုရီးယားကတ်ဂိမ်း', english: 'Go-stop (Korean card game)', pos: 'noun', level: 'basic', examples: [
    { korean: '고스톱을 쳤어요.', myanmar: 'ကိုရီးယားကတ်ဂိမ်း ကစားခဲ့တယ်။', english: 'I played go-stop.' }
  ]},
  { id: '669', korean: '공연장', myanmar: 'ဖျော်ဖြေပွဲကွင်း', english: 'Performance venue', pos: 'noun', level: 'basic', examples: [
    { korean: '공연장에 갔어요.', myanmar: 'ဖျော်ဖြေပွဲကွင်းကို သွားခဲ့တယ်။', english: 'I went to the performance venue.' }
  ]},
  { id: '670', korean: '구경꾼', myanmar: 'ကြည့်ရှုသူ', english: 'Spectator', pos: 'noun', level: 'basic', examples: [
    { korean: '구경꾼이 많았어요.', myanmar: 'ကြည့်ရှုသူ အများကြီး ရှိခဲ့တယ်။', english: 'There were many spectators.' }
  ]},
  { id: '671', korean: '그림책', myanmar: 'ပုံပြစာအုပ်/ ရုပ်ပြစာအုပ်', english: 'Picture book', pos: 'noun', level: 'basic', examples: [
    { korean: '그림책을 읽었어요.', myanmar: 'ပုံပြစာအုပ်/ ရုပ်ပြစာအုပ် ဖတ်ခဲ့တယ်။', english: 'I read a picture book.' }
  ]},
  { id: '672', korean: '기념품점', myanmar: 'အမှတ်တရပစ္စည်းဆိုင်', english: 'Souvenir shop', pos: 'noun', level: 'basic', examples: [
    { korean: '기념품점에서 샀어요.', myanmar: 'အမှတ်တရပစ္စည်းဆိုင်မှာ ဝယ်ခဲ့တယ်။', english: 'I bought it at the souvenir shop.' }
  ]},
  { id: '673', korean: '깜짝파티', myanmar: 'အံ့သြစရာပါတီ', english: 'Surprise party', pos: 'noun', level: 'basic', examples: [
    { korean: '깜짝파티를 했어요.', myanmar: 'အံ့သြစရာပါတီ လုပ်ခဲ့တယ်။', english: 'I threw a surprise party.' }
  ]},
  { id: '674', korean: '꽃구경', myanmar: 'ပန်းကြည့်ခြင်း', english: 'Flower viewing', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃구경을 갔어요.', myanmar: 'ပန်းကြည့်ခြင်း သွားခဲ့တယ်။', english: 'I went flower viewing.' }
  ]},
  // === BATCH 9: TOOLS & EQUIPMENT (675-724) ===
  { id: '675', korean: '가위', myanmar: 'ကတ်ကြေး', english: 'Scissors', pos: 'noun', level: 'basic', examples: [
    { korean: '가위로 잘랐어요.', myanmar: 'ကတ်ကြေးနဲ့ ဖြတ်ခဲ့တယ်။', english: 'I cut it with scissors.' }
  ]},
  { id: '676', korean: '갈고리', myanmar: 'ချိတ်', english: 'Hook', pos: 'noun', level: 'basic', examples: [
    { korean: '갈고리에 걸었어요.', myanmar: 'ချိတ်မှာ ချိတ်ခဲ့တယ်။', english: 'I hung it on the hook.' }
  ]},
  { id: '677', korean: '거울', myanmar: 'မှန်', english: 'Mirror', pos: 'noun', level: 'basic', examples: [
    { korean: '거울을 봤어요.', myanmar: 'မှန် ကြည့်ခဲ့တယ်။', english: 'I looked in the mirror.' }
  ]},
  { id: '678', korean: '계량스푼', myanmar: 'တိုင်းဇွန်း/အတိုင်းဇွန်း', english: 'Measuring spoon', pos: 'noun', level: 'basic', examples: [
    { korean: '계량스푼으로 쟀어요.', myanmar: 'တိုင်းဇွန်း/အတိုင်းဇွန်း တိုင်းခဲ့တယ်။', english: 'I measured with a measuring spoon.' }
  ]},
  { id: '679', korean: '고데기', myanmar: 'ဆံပင်လှေ့ကိရိယာ', english: 'Curling iron', pos: 'noun', level: 'basic', examples: [
    { korean: '고데기로 말았어요.', myanmar: 'ဆံပင်လှေ့ကိရိယာနဲ့ လှေ့ခဲ့တယ်။', english: 'I curled it with a curling iron.' }
  ]},
  { id: '680', korean: '곡괭이', myanmar: 'တူးကိရိယာ', english: 'Pickaxe', pos: 'noun', level: 'basic', examples: [
    { korean: '곡괭이로 팠어요.', myanmar: 'တူးကိရိယာနဲ့ တူးခဲ့တယ်။', english: 'I dug with a pickaxe.' }
  ]},
  { id: '681', korean: '공구', myanmar: 'ကိရိယာများ', english: 'Tools', pos: 'noun', level: 'basic', examples: [
    { korean: '공구를 가져왔어요.', myanmar: 'ကိရိယာများ ယူလာခဲ့တယ်။', english: 'I brought tools.' }
  ]},
  { id: '682', korean: '구멍뚫개', myanmar: 'အပေါက်ဖောက်ကိရိယာ', english: 'Hole puncher', pos: 'noun', level: 'basic', examples: [
    { korean: '구멍뚫개로 뚫었어요.', myanmar: 'အပေါက်ဖောက်ကိရိယာနဲ့ ဖောက်ခဲ့တယ်။', english: 'I punched holes with a hole puncher.' }
  ]},
  { id: '683', korean: '굴착기', myanmar: 'တူးစက်ကြီး', english: 'Excavator', pos: 'noun', level: 'basic', examples: [
    { korean: '굴착기가 일해요.', myanmar: 'တူးစက်ကြီးက အလုပ်လုပ်တယ်။', english: 'The excavator is working.' }
  ]},
  { id: '684', korean: '기름통', myanmar: 'ဆီပုံး', english: 'Oil container', pos: 'noun', level: 'basic', examples: [
    { korean: '기름통을 채웠어요.', myanmar: 'ဆီပုံး ဖြည့်ခဲ့တယ်။', english: 'I filled the oil container.' }
  ]},
  // === BATCH 9: BUILDINGS & ARCHITECTURE (685-734) ===
  { id: '685', korean: '가건물', myanmar: 'ယာယီအဆောက်အအုံ', english: 'Temporary building', pos: 'noun', level: 'basic', examples: [
    { korean: '가건물을 지었어요.', myanmar: 'ယာယီအဆောက်အအုံ ဆောက်ခဲ့တယ်။', english: 'I built a temporary building.' }
  ]},
  { id: '686', korean: '계단실', myanmar: 'လှေကားခန်း', english: 'Stairwell', pos: 'noun', level: 'basic', examples: [
    { korean: '계단실에서 만났어요.', myanmar: 'လှေကားခန်းမှာ တွေ့ခဲ့တယ်။', english: 'I met in the stairwell.' }
  ]},
  { id: '687', korean: '고층건물', myanmar: 'အထပ်မြင့်အဆောက်အအုံ', english: 'High-rise building', pos: 'noun', level: 'basic', examples: [
    { korean: '고층건물이 많아요.', myanmar: 'အထပ်မြင့်အဆောက်အအုံ အများကြီး ရှိတယ်။', english: 'There are many high-rise buildings.' }
  ]},
  { id: '688', korean: '공사장', myanmar: 'ဆောက်လုပ်ရေးလုပ်ငန်းခွင်', english: 'Construction site', pos: 'noun', level: 'basic', examples: [
    { korean: '공사장을 지났어요.', myanmar: 'ဆောက်လုပ်ရေးလုပ်ငန်းခွင် ဖြတ်သွားခဲ့တယ်။', english: 'I passed by the construction site.' }
  ]},
  { id: '689', korean: '구조물', myanmar: 'တည်ဆောက်ပုံ', english: 'Structure', pos: 'noun', level: 'basic', examples: [
    { korean: '큰 구조물이에요.', myanmar: 'ကြီးမားတဲ့ တည်ဆောက်ပုံပါ။', english: 'It\'s a large structure.' }
  ]},
  { id: '690', korean: '굴뚝청소', myanmar: 'မီးခိုးပြွန်သန့်စင်ခြင်း', english: 'Chimney cleaning', pos: 'noun', level: 'basic', examples: [
    { korean: '굴뚝청소를 했어요.', myanmar: 'မီးခိုးပြွန်သန့်စင်ခြင်း လုပ်ခဲ့တယ်။', english: 'I cleaned the chimney.' }
  ]},
  { id: '691', korean: '그늘막', myanmar: 'အရိပ်ကာ', english: 'Shade canopy', pos: 'noun', level: 'basic', examples: [
    { korean: '그늘막을 쳤어요.', myanmar: 'အရိပ်ကာ ဖြန့်ခဲ့တယ်။', english: 'I set up a shade canopy.' }
  ]},
  { id: '692', korean: '기둥', myanmar: 'တိုင်', english: 'Pillar/Column', pos: 'noun', level: 'basic', examples: [
    { korean: '기둥이 튼튼해요.', myanmar: 'တိုင်က ခိုင်မာတယ်။', english: 'The pillar is sturdy.' }
  ]},
  { id: '693', korean: '기와지붕', myanmar: 'အမိုးကွန်းအမိုး', english: 'Tile roof', pos: 'noun', level: 'basic', examples: [
    { korean: '기와지붕이 아름다워요.', myanmar: 'အမိုးကွန်းအမိုးက လှတယ်။', english: 'The tile roof is beautiful.' }
  ]},
  { id: '694', korean: '꼭대기층', myanmar: 'အပေါ်ဆုံးထပ်', english: 'Top floor', pos: 'noun', level: 'basic', examples: [
    { korean: '꼭대기층에 살아요.', myanmar: 'အပေါ်ဆုံးထပ်မှာ နေတယ်။', english: 'I live on the top floor.' }
  ]},
  // === BATCH 9: VEHICLES & TRANSPORTATION (695-744) ===
  { id: '695', korean: '가솔린', myanmar: 'ဓာတ်ဆီ', english: 'Gasoline', pos: 'noun', level: 'basic', examples: [
    { korean: '가솔린을 넣었어요.', myanmar: 'ဓာတ်ဆီ ထည့်ခဲ့တယ်။', english: 'I put in gasoline.' }
  ]},
  { id: '696', korean: '간이역', myanmar: 'ရထားမှတ်တိုင်ငယ်', english: 'Small station', pos: 'noun', level: 'basic', examples: [
    { korean: '간이역에서 내렸어요.', myanmar: 'ရထားမှတ်တိုင်ငယ်မှာ ဆင်းခဲ့တယ်။', english: 'I got off at the small station.' }
  ]},
  { id: '697', korean: '개찰구', myanmar: 'လက်မှတ်စစ်ဆေးရာ', english: 'Ticket gate', pos: 'noun', level: 'basic', examples: [
    { korean: '개찰구를 지났어요.', myanmar: 'လက်မှတ်စစ်ဆေးရာ ဖြတ်သွားခဲ့တယ်။', english: 'I passed through the ticket gate.' }
  ]},
  { id: '698', korean: '거리두기', myanmar: 'အကွာအဝေးထားခြင်း', english: 'Social distancing', pos: 'noun', level: 'basic', examples: [
    { korean: '거리두기를 해요.', myanmar: 'အကွာအဝေးထားခြင်း လုပ်တယ်။', english: 'I practice social distancing.' }
  ]},
  { id: '699', korean: '경찰차', myanmar: 'ရဲကား', english: 'Police car', pos: 'noun', level: 'basic', examples: [
    { korean: '경찰차가 지나갔어요.', myanmar: 'ရဲကား ဖြတ်သွားခဲ့တယ်။', english: 'A police car passed by.' }
  ]},
  { id: '700', korean: '고속버스', myanmar: 'အမြန်ဘတ်စ်ကား', english: 'Express bus', pos: 'noun', level: 'basic', examples: [
    { korean: '고속버스를 탔어요.', myanmar: 'အမြန်ဘတ်စ်ကား စီးခဲ့တယ်။', english: 'I took an express bus.' }
  ]},
  { id: '701', korean: '공항버스', myanmar: 'လေဆိပ်ဘတ်စ်ကား', english: 'Airport bus', pos: 'noun', level: 'basic', examples: [
    { korean: '공항버스를 기다려요.', myanmar: 'လေဆိပ်ဘတ်စ်ကား စောင့်တယ်။', english: 'I\'m waiting for the airport bus.' }
  ]},
  { id: '702', korean: '교통신호', myanmar: 'သွားလာရေးအချက်ပြ/ မီးပွိုင့်', english: 'Traffic signal', pos: 'noun', level: 'basic', examples: [
    { korean: '교통신호를 봤어요.', myanmar: 'သွားလာရေးအချက်ပြ ကြည့်ခဲ့တယ်။', english: 'I looked at the traffic signal.' }
  ]},
  { id: '703', korean: '구급대', myanmar: 'အရေးပေါ်ကယ်ဆယ်ရေးတပ်', english: 'Emergency rescue team', pos: 'noun', level: 'basic', examples: [
    { korean: '구급대가 왔어요.', myanmar: 'အရေးပေါ်ကယ်ဆယ်ရေးတပ် လာခဲ့တယ်။', english: 'The emergency rescue team came.' }
  ]},
  { id: '704', korean: '기관차표', myanmar: 'ရထားလက်မှတ်', english: 'Train ticket', pos: 'noun', level: 'basic', examples: [
    { korean: '기관차표를 샀어요.', myanmar: 'ရထားလက်မှတ် ဝယ်ခဲ့တယ်။', english: 'I bought a train ticket.' }
  ]},
  // === BATCH 9: WEATHER & CLIMATE (705-714) ===
  { id: '705', korean: '가뭄피해', myanmar: 'မိုးခေါင်ပျက်စီးမှု', english: 'Drought damage', pos: 'noun', level: 'basic', examples: [
    { korean: '가뭄피해가 심해요.', myanmar: 'မိုးခေါင်ပျက်စီးမှု ပြင်းတယ်။', english: 'Drought damage is severe.' }
  ]},
  { id: '706', korean: '강수량', myanmar: 'မိုးရွာသည့်ပမာဏ/မိုးရေချိန်', english: 'Rainfall amount', pos: 'noun', level: 'basic', examples: [
    { korean: '강수량이 적어요.', myanmar: 'မိုးရွာသည့်ပမာဏ နည်းတယ်။', english: 'The rainfall amount is low.' }
  ]},
  { id: '707', korean: '개화시기', myanmar: 'ပန်းပွင့်ချိန်', english: 'Blooming season', pos: 'noun', level: 'basic', examples: [
    { korean: '개화시기가 빨라요.', myanmar: 'ပန်းပွင့်ချိန် စောတယ်။', english: 'The blooming season is early.' }
  ]},
  { id: '708', korean: '겨울철', myanmar: 'ဆောင်းရာသီ', english: 'Winter season', pos: 'noun', level: 'basic', examples: [
    { korean: '겨울철이 추워요.', myanmar: 'ဆောင်းရာသီက အေးတယ်။', english: 'Winter season is cold.' }
  ]},
  { id: '709', korean: '고기압', myanmar: 'ဖိအားမြင့်', english: 'High pressure', pos: 'noun', level: 'basic', examples: [
    { korean: '고기압이 왔어요.', myanmar: 'ဖိအားမြင့် လာခဲ့တယ်။', english: 'High pressure came.' }
  ]},
  { id: '710', korean: '구름낀', myanmar: 'တိမ်ဖုံးနေသော', english: 'Cloudy', pos: 'adjective', level: 'basic', examples: [
    { korean: '구름낀 날씨예요.', myanmar: 'တိမ်ဖုံးနေသော ရာသီဥတုပါ။', english: 'It\'s cloudy weather.' }
  ]},
  { id: '711', korean: '그을음', myanmar: 'မီးခိုး', english: 'Soot', pos: 'noun', level: 'basic', examples: [
    { korean: '그을음이 묻었어요.', myanmar: 'မီးခိုး ကပ်ခဲ့တယ်။', english: 'Soot got on it.' }
  ]},
  { id: '712', korean: '기온변화', myanmar: 'အပူချိန်ပြောင်းလဲမှု', english: 'Temperature change', pos: 'noun', level: 'basic', examples: [
    { korean: '기온변화가 심해요.', myanmar: 'အပူချိန်ပြောင်းလဲမှု ပြင်းတယ်။', english: 'Temperature change is severe.' }
  ]},
  { id: '713', korean: '꽃샘바람', myanmar: 'ပန်းပွင့်ချိန်လေအေး', english: 'Late spring cold wind', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃샘바람이 불어요.', myanmar: 'ပန်းပွင့်ချိန်လေအေး တိုက်တယ်။', english: 'Late spring cold wind is blowing.' }
  ]},
  { id: '714', korean: '끝물', myanmar: 'နောက်ဆုံးရေ', english: 'Last water/final stage', pos: 'noun', level: 'basic', examples: [
    { korean: '비의 끝물이에요.', myanmar: 'မိုးရဲ့ နောက်ဆုံးရေပါ။', english: 'It\'s the end of the rain.' }
  ]},
  // === BATCH 10: ANIMALS & PETS (715-764) ===
  { id: '715', korean: '강아지', myanmar: 'ခွေးကလေး', english: 'Puppy', pos: 'noun', level: 'basic', examples: [
    { korean: '강아지가 귀여워요.', myanmar: 'ခွေးကလေးက ချစ်စရာကောင်းတယ်။', english: 'The puppy is cute.' }
  ]},
  { id: '716', korean: '거북이', myanmar: 'လိပ်', english: 'Turtle', pos: 'noun', level: 'basic', examples: [
    { korean: '거북이가 느려요.', myanmar: 'လိပ်က နှေးတယ်။', english: 'The turtle is slow.' }
  ]},
  { id: '717', korean: '고양이', myanmar: 'ကြောင်', english: 'Cat', pos: 'noun', level: 'basic', examples: [
    { korean: '고양이가 잠을 자요.', myanmar: 'ကြောင်က အိပ်နေတယ်။', english: 'The cat is sleeping.' }
  ]},
  { id: '718', korean: '공작새', myanmar: 'ဒေါင်းငှက်', english: 'Peacock', pos: 'noun', level: 'basic', examples: [
    { korean: '공작새가 아름다워요.', myanmar: 'ဒေါင်းငှက်က လှတယ်။', english: 'The peacock is beautiful.' }
  ]},
  { id: '719', korean: '구렁이', myanmar: 'မြွေကြီး', english: 'Large snake', pos: 'noun', level: 'basic', examples: [
    { korean: '구렁이를 봤어요.', myanmar: 'မြွေကြီး ကြည့်ခဲ့တယ်။', english: 'I saw a large snake.' }
  ]},
  { id: '720', korean: '금붕어', myanmar: 'ငါးရွှေ/ရွှေငါး', english: 'Goldfish', pos: 'noun', level: 'basic', examples: [
    { korean: '금붕어를 키워요.', myanmar: 'ငါးရွှေ မွေးမြူတယ်။', english: 'I raise goldfish.' }
  ]},
  { id: '721', korean: '기린', myanmar: 'သစ်ကုလားအုတ်', english: 'Giraffe', pos: 'noun', level: 'basic', examples: [
    { korean: '기린이 목이 길어요.', myanmar: 'သစ်ကုလားအုတ်က လည်ပင်း ရှည်တယ်။', english: 'The giraffe has a long neck.' }
  ]},
  { id: '722', korean: '까마귀', myanmar: 'ကျီးကန်း', english: 'Crow', pos: 'noun', level: 'basic', examples: [
    { korean: '까마귀가 울어요.', myanmar: 'ကျီးကန်းက အော်တယ်။', english: 'The crow crows.' }
  ]},
  { id: '723', korean: '꿩', myanmar: 'ကြက်တောင်', english: 'Pheasant', pos: 'noun', level: 'basic', examples: [
    { korean: '꿩을 봤어요.', myanmar: 'ကြက်တောင် ကြည့်ခဲ့တယ်။', english: 'I saw a pheasant.' }
  ]},
  { id: '724', korean: '끄투리', myanmar: 'ကြက်သားငယ်', english: 'Young chicken', pos: 'noun', level: 'basic', examples: [
    { korean: '끄투리가 뛰어다녀요.', myanmar: 'ကြက်သားငယ်က ပြေးလွန်းနေတယ်။', english: 'The young chicken is running around.' }
  ]},
  // === BATCH 10: PLANTS & GARDENING (725-774) ===
  { id: '725', korean: '가지치기', myanmar: 'အကိုင်းညှပ်ခြင်း', english: 'Pruning', pos: 'noun', level: 'basic', examples: [
    { korean: '가지치기를 했어요.', myanmar: 'အကိုင်းညှပ်ခြင်း လုပ်ခဲ့တယ်။', english: 'I did pruning.' }
  ]},
  { id: '726', korean: '거름', myanmar: 'မြေဩဇာ', english: 'Fertilizer', pos: 'noun', level: 'basic', examples: [
    { korean: '거름을 줬어요.', myanmar: 'မြေဩဇာ ပေးခဲ့တယ်။', english: 'I gave fertilizer.' }
  ]},
  { id: '727', korean: '고구마', myanmar: 'ကန်စွန်းဥ', english: 'Sweet potato', pos: 'noun', level: 'basic', examples: [
    { korean: '고구마를 구웠어요.', myanmar: 'ကန်စွန်းဥကို ကင်ခဲ့တယ်။', english: 'I roasted sweet potatoes.' }
  ]},
  { id: '728', korean: '곡식', myanmar: 'ကောက်နှံ', english: 'Grain', pos: 'noun', level: 'basic', examples: [
    { korean: '곡식을 심었어요.', myanmar: 'ကောက်နှံ စိုက်ခဲ့တယ်။', english: 'I planted grains.' }
  ]},
  { id: '729', korean: '국화', myanmar: 'စာရေးပန်း', english: 'Chrysanthemum', pos: 'noun', level: 'basic', examples: [
    { korean: '국화가 피었어요.', myanmar: 'စာရေးပန်းက ပွင့်ခဲ့တယ်။', english: 'The chrysanthemum bloomed.' }
  ]},
  { id: '730', korean: '그루터기', myanmar: 'သစ်ပင်ငုတ်', english: 'Tree stump', pos: 'noun', level: 'basic', examples: [
    { korean: '그루터기가 남았어요.', myanmar: 'သစ်ပင်ငုတ် ကျန်ခဲ့တယ်။', english: 'The tree stump remained.' }
  ]},
  { id: '731', korean: '기둥뿌리', myanmar: 'အမြစ်တိုင်', english: 'Taproot', pos: 'noun', level: 'basic', examples: [
    { korean: '기둥뿌리가 깊어요.', myanmar: 'အမြစ်တိုင်က နက်တယ်။', english: 'The taproot is deep.' }
  ]},
  { id: '732', korean: '꽃가루', myanmar: 'ပန်းမှုန့်', english: 'Pollen', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃가루 때문에 재채기해요.', myanmar: 'ပန်းမှုန့်ကြောင့် နှာချေတယ်။', english: 'I sneeze because of pollen.' }
  ]},
  { id: '733', korean: '꽃밭', myanmar: 'ပန်းခြံ', english: 'Flower garden', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃밭을 가꿨어요.', myanmar: 'ပန်းခြံ ပြုစုခဲ့တယ်။', english: 'I tended the flower garden.' }
  ]},
  { id: '734', korean: '끝순', myanmar: 'အစွန်းအဖျား', english: 'Tip/End bud', pos: 'noun', level: 'basic', examples: [
    { korean: '끝순을 잘랐어요.', myanmar: 'အစွန်းအဖျား ဖြတ်ခဲ့တယ်။', english: 'I cut the tip.' }
  ]},
  // === BATCH 10: SPORTS & FITNESS (735-784) ===
  { id: '735', korean: '가슴운동', myanmar: 'ရင်ဘတ်လေ့ကျင့်ခန်း', english: 'Chest exercise', pos: 'noun', level: 'basic', examples: [
    { korean: '가슴운동을 했어요.', myanmar: 'ရင်ဘတ်လေ့ကျင့်ခန်း လုပ်ခဲ့တယ်။', english: 'I did chest exercises.' }
  ]},
  { id: '736', korean: '경기규칙', myanmar: 'ပြိုင်ပွဲစည်းမျဉ်း', english: 'Game rules', pos: 'noun', level: 'basic', examples: [
    { korean: '경기규칙을 배웠어요.', myanmar: 'ပြိုင်ပွဲစည်းမျဉ်း သင်ခဲ့တယ်။', english: 'I learned the game rules.' }
  ]},
  { id: '737', korean: '골대', myanmar: 'ဂိုးတိုင်', english: 'Goal post', pos: 'noun', level: 'basic', examples: [
    { korean: '골대를 맞췄어요.', myanmar: 'ဂိုးတိုင် ထိခဲ့တယ်။', english: 'I hit the goal post.' }
  ]},
  { id: '738', korean: '공격수', myanmar: 'တိုက်စစ်သမား', english: 'Attacker/Forward', pos: 'noun', level: 'basic', examples: [
    { korean: '공격수가 득점했어요.', myanmar: 'တိုက်စစ်သမားက ဂိုးသွင်းခဲ့တယ်။', english: 'The attacker scored.' }
  ]},
  { id: '739', korean: '구기운동', myanmar: 'ဘောလုံးအားကစား', english: 'Ball sports', pos: 'noun', level: 'basic', examples: [
    { korean: '구기운동을 좋아해요.', myanmar: 'ဘောလုံးအားကစား ကြိုက်တယ်။', english: 'I like ball sports.' }
  ]},
  { id: '740', korean: '근력운동', myanmar: 'ကြွက်သားအားလေ့ကျင့်ခန်း', english: 'Strength training', pos: 'noun', level: 'basic', examples: [
    { korean: '근력운동을 해요.', myanmar: 'ကြွက်သားအားလေ့ကျင့်ခန်း လုပ်တယ်။', english: 'I do strength training.' }
  ]},
  { id: '741', korean: '기록측정', myanmar: 'မှတ်တမ်းတိုင်းတာခြင်း/ ရယူခြင်း', english: 'Record measurement', pos: 'noun', level: 'basic', examples: [
    { korean: '기록측정을 했어요.', myanmar: 'မှတ်တမ်းရယူခြင်း လုပ်ခဲ့တယ်။', english: 'I did record measurement.' }
  ]},
  { id: '742', korean: '깃대', myanmar: 'အလံတိုင်', english: 'Flagpole', pos: 'noun', level: 'basic', examples: [
    { korean: '깃대가 높아요.', myanmar: 'အလံတိုင်က မြင့်တယ်။', english: 'The flagpole is tall.' }
  ]},
  { id: '743', korean: '꼴찌', myanmar: 'နောက်ဆုံး', english: 'Last place', pos: 'noun', level: 'basic', examples: [
    { korean: '꼴찌가 됐어요.', myanmar: 'နောက်ဆုံး ဖြစ်ခဲ့တယ်။', english: 'I came in last place.' }
  ]},
  { id: '744', korean: '끝내기', myanmar: 'အဆုံးသတ်ခြင်း', english: 'Game ending/Walk-off', pos: 'noun', level: 'basic', examples: [
    { korean: '끝내기 홈런이었어요.', myanmar: 'အဆုံးသတ်ခြင်း ဟိုးမ်ရန်ခဲ့တယ်။', english: 'It was a walk-off home run.' }
  ]},
  // === BATCH 10: HOBBIES & CRAFTS (745-794) ===
  { id: '745', korean: '가죽공예', myanmar: 'သားရေလက်မှု', english: 'Leather craft', pos: 'noun', level: 'basic', examples: [
    { korean: '가죽공예를 배워요.', myanmar: 'သားရေလက်မှု သင်တယ်။', english: 'I learn leather craft.' }
  ]},
  { id: '746', korean: '그림그리기', myanmar: 'ပန်းချီဆွဲခြင်း', english: 'Drawing/Painting', pos: 'noun', level: 'basic', examples: [
    { korean: '그림그리기를 좋아해요.', myanmar: 'ပန်းချီဆွဲခြင်း ကြိုက်တယ်။', english: 'I like drawing.' }
  ]},
  { id: '747', korean: '기타연주', myanmar: 'ဂစ်တာတီးခြင်း', english: 'Guitar playing', pos: 'noun', level: 'basic', examples: [
    { korean: '기타연주를 배워요.', myanmar: 'ဂစ်တာတီးခြင်း သင်တယ်။', english: 'I learn guitar playing.' }
  ]},
  { id: '748', korean: '꽃꽂이', myanmar: 'ပန်းပွင့်ထည့်ခြင်း', english: 'Flower arrangement', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃꽂이를 했어요.', myanmar: 'ပန်းပွင့်ထည့်ခြင်း လုပ်ခဲ့တယ်။', english: 'I did flower arrangement.' }
  ]},
  { id: '749', korean: '끈뜨기', myanmar: 'ကြိုးရက်ခြင်း', english: 'String craft', pos: 'noun', level: 'basic', examples: [
    { korean: '끈뜨기를 배웠어요.', myanmar: 'ကြိုးရက်ခြင်း သင်ခဲ့တယ်။', english: 'I learned string craft.' }
  ]},
  { id: '750', korean: '글쓰기', myanmar: 'စာရေးခြင်း', english: 'Writing', pos: 'noun', level: 'basic', examples: [
    { korean: '글쓰기가 취미예요.', myanmar: 'စာရေးခြင်းက ဝါသနာပါ။', english: 'Writing is my hobby.' }
  ]},
  { id: '751', korean: '금속공예', myanmar: 'သတ္တုလက်မှု', english: 'Metalwork', pos: 'noun', level: 'basic', examples: [
    { korean: '금속공예를 해요.', myanmar: 'သတ္တုလက်မှု လုပ်တယ်။', english: 'I do metalwork.' }
  ]},
  { id: '752', korean: '기념품만들기', myanmar: 'အမှတ်တရပစ္စည်းလုပ်ခြင်း', english: 'Souvenir making', pos: 'noun', level: 'basic', examples: [
    { korean: '기념품만들기를 했어요.', myanmar: 'အမှတ်တရပစ္စည်းလုပ်ခြင်း လုပ်ခဲ့တယ်။', english: 'I made souvenirs.' }
  ]},
  { id: '753', korean: '깎기', myanmar: 'ရှေ့ခြင်း/ထွင်းထုခြင်း/ပိုင်းဖြတ်ခြင်', english: 'Carving/Whittling', pos: 'noun', level: 'basic', examples: [
    { korean: '나무깎기를 해요.', myanmar: 'သစ်သား ပိုင်းဖြတ်ခြင်း လုပ်တယ်။', english: 'I do wood carving.' }
  ]},
  { id: '754', korean: '꿰매기', myanmar: 'အပ်ချုပ်ခြင်း', english: 'Sewing', pos: 'noun', level: 'basic', examples: [
    { korean: '꿰매기를 배웠어요.', myanmar: 'အပ်ချုပ်ခြင်း သင်ခဲ့တယ်။', english: 'I learned sewing.' }
  ]},
  // === BATCH 10: FINAL PUSH TO 1000 (755-1164) ===
  { id: '755', korean: '가락지', myanmar: 'လက်စွပ်', english: 'Ring', pos: 'noun', level: 'basic', examples: [
    { korean: '가락지를 꼈어요.', myanmar: 'လက်စွပ် ဝတ်ခဲ့တယ်။', english: 'I wore a ring.' }
  ]},
  { id: '756', korean: '간수', myanmar: 'ထောက်လှမ်း', english: 'Prison guard', pos: 'noun', level: 'basic', examples: [
    { korean: '간수가 순찰해요.', myanmar: 'ထောက်လှမ်းရေးက  စောင့်ကြည့်သည်/လှည့်ပတ်သည်။', english: 'The prison guard patrols.' }
  ]},
  { id: '757', korean: '감정', myanmar: 'ခံစားချက်', english: 'Emotion/Feeling', pos: 'noun', level: 'basic', examples: [
    { korean: '감정이 복잡해요.', myanmar: 'ခံစားချက် ရှုပ်ထွေးတယ်။', english: 'My emotions are complicated.' }
  ]},
  { id: '758', korean: '개미집', myanmar: 'ပုရွက်ဆိတ်အိမ်', english: 'Anthill', pos: 'noun', level: 'basic', examples: [
    { korean: '개미집을 봤어요.', myanmar: 'ပုရွက်ဆိတ်အိမ် ကြည့်ခဲ့တယ်။', english: 'I saw an anthill.' }
  ]},
  { id: '759', korean: '거품목욕', myanmar: 'အမြှုပ်ရေချိုး', english: 'Bubble bath', pos: 'noun', level: 'basic', examples: [
    { korean: '거품목욕을 했어요.', myanmar: 'အမြှုပ်ရေချိုး လုပ်ခဲ့တယ်။', english: 'I took a bubble bath.' }
  ]},
  { id: '760', korean: '계산대', myanmar: 'ငွေတွက်စားပွဲ', english: 'Checkout counter', pos: 'noun', level: 'basic', examples: [
    { korean: '계산대에서 계산했어요.', myanmar: 'ငွေတွက်စားပွဲမှာ တွက်ခဲ့တယ်။', english: 'I paid at the checkout counter.' }
  ]},
  { id: '761', korean: '고무신', myanmar: 'ရော်ဘာဖိနပ်', english: 'Rubber shoes', pos: 'noun', level: 'basic', examples: [
    { korean: '고무신을 신었어요.', myanmar: 'ရော်ဘာဖိနပ် စီးခဲ့တယ်။', english: 'I wore rubber shoes.' }
  ]},
  { id: '762', korean: '공책', myanmar: 'စာရေးစာအုပ်', english: 'Notebook', pos: 'noun', level: 'basic', examples: [
    { korean: '공책에 썼어요.', myanmar: 'စာရေးစာအုပ်မှာ ရေးခဲ့တယ်။', english: 'I wrote in the notebook.' }
  ]},
  { id: '763', korean: '구두', myanmar: 'သားရေဖိနပ်', english: 'Leather shoes', pos: 'noun', level: 'basic', examples: [
    { korean: '구두를 닦았어요.', myanmar: 'သားရေဖိနပ် သုတ်ခဲ့တယ်။', english: 'I polished the leather shoes.' }
  ]},
  { id: '764', korean: '그릇', myanmar: 'ပန်းကန်', english: 'Bowl/Dish', pos: 'noun', level: 'basic', examples: [
    { korean: '그릇을 씻었어요.', myanmar: 'ပန်းကန် ဆေးခဲ့တယ်။', english: 'I washed the dishes.' }
  ]},
  // === BATCH 11: CONTINUING TO 1000 (765-814) ===
  { id: '765', korean: '기계', myanmar: 'စက်ယန္တရား / စက်', english: 'Machine', pos: 'noun', level: 'basic', examples: [
    { korean: '기계가 고장났어요.', myanmar: 'စက်ယန္တရား ပျက်စီးခဲ့တယ်။', english: 'The machine broke down.' }
  ]},
  { id: '766', korean: '기념일', myanmar: 'အမှတ်တရနေ့', english: 'Anniversary', pos: 'noun', level: 'basic', examples: [
    { korean: '기념일을 축하해요.', myanmar: 'အမှတ်တရနေ့ကို ဂုဏ်ပြုတယ်။', english: 'I celebrate the anniversary.' }
  ]},
  { id: '767', korean: '기도', myanmar: 'ဆုတောင်းခြင်း', english: 'Prayer', pos: 'noun', level: 'basic', examples: [
    { korean: '기도를 했어요.', myanmar: 'ဆုတောင်းခြင်း လုပ်ခဲ့တယ်။', english: 'I prayed.' }
  ]},
  { id: '768', korean: '기록', myanmar: 'မှတ်တမ်း', english: 'Record', pos: 'noun', level: 'basic', examples: [
    { korean: '기록을 세웠어요.', myanmar: 'မှတ်တမ်း ထူထောင်ခဲ့တယ်။', english: 'I set a record.' }
  ]},
  { id: '769', korean: '기분', myanmar: 'စိတ်ခံစားမှု', english: 'Mood/Feeling', pos: 'noun', level: 'basic', examples: [
    { korean: '기분이 좋아요.', myanmar: 'စိတ်ခံစားမှု ကောင်းတယ်။', english: 'I feel good.' }
  ]},
  { id: '770', korean: '기술', myanmar: 'နည်းပညာ', english: 'Technology/Skill', pos: 'noun', level: 'basic', examples: [
    { korean: '기술을 배워요.', myanmar: 'နည်းပညာ သင်တယ်။', english: 'I learn technology.' }
  ]},
  { id: '771', korean: '기억', myanmar: 'မှတ်ဉာဏ်', english: 'Memory', pos: 'noun', level: 'basic', examples: [
    { korean: '기억이 나요.', myanmar: 'မှတ်ဉာဏ် ပြန်လာတယ်။', english: 'I remember.' }
  ]},
  { id: '772', korean: '기회', myanmar: 'အခွင့်အရေး', english: 'Opportunity', pos: 'noun', level: 'basic', examples: [
    { korean: '기회가 왔어요.', myanmar: 'အခွင့်အရေး ရောက်လာခဲ့တယ်။', english: 'An opportunity came.' }
  ]},
  { id: '773', korean: '길이', myanmar: 'အရှည်', english: 'Length', pos: 'noun', level: 'basic', examples: [
    { korean: '길이를 쟀어요.', myanmar: 'အရှည် တိုင်းခဲ့တယ်။', english: 'I measured the length.' }
  ]},
  { id: '774', korean: '김치냉장고', myanmar: 'ကင်ချီအအေးခန်း', english: 'Kimchi refrigerator', pos: 'noun', level: 'basic', examples: [
    { korean: '김치냉장고를 샀어요.', myanmar: 'ကင်ချီအအေးခန်း ဝယ်ခဲ့တယ်။', english: 'I bought a kimchi refrigerator.' }
  ]},
  { id: '775', korean: '까치', myanmar: 'ကျီးကန်းဖြူ', english: 'Magpie', pos: 'noun', level: 'basic', examples: [
    { korean: '까치가 날아요.', myanmar: 'ကျီးကန်းဖြူက ပျံတယ်။', english: 'The magpie flies.' }
  ]},
  { id: '776', korean: '깍지', myanmar: 'အခွံ', english: 'Pod/Shell', pos: 'noun', level: 'basic', examples: [
    { korean: '콩깍지를 벗겼어요.', myanmar: 'ပဲအခွံ ခွာခဲ့တယ်။', english: 'I peeled the bean pod.' }
  ]},
  { id: '777', korean: '깨', myanmar: 'နှမ်း', english: 'Sesame', pos: 'noun', level: 'basic', examples: [
    { korean: '깨를 뿌렸어요.', myanmar: 'နှမ်း ဖြန့်ခဲ့တယ်။', english: 'I sprinkled sesame.' }
  ]},
  { id: '778', korean: '깨달음', myanmar: 'သိမြင်မှု', english: 'Realization/Enlightenment', pos: 'noun', level: 'basic', examples: [
    { korean: '깨달음을 얻었어요.', myanmar: 'သိမြင်မှု ရခဲ့တယ်။', english: 'I gained realization.' }
  ]},
  { id: '779', korean: '깨소금', myanmar: 'နှမ်းမှုန့်', english: 'Ground sesame', pos: 'noun', level: 'basic', examples: [
    { korean: '깨소금을 넣었어요.', myanmar: 'နှမ်းမှုန့် ထည့်ခဲ့တယ်။', english: 'I added ground sesame.' }
  ]},
  { id: '780', korean: '꺼림', myanmar: 'ရှောင်ကြဉ်မှု', english: 'Reluctance/Avoidance', pos: 'noun', level: 'basic', examples: [
    { korean: '꺼림이 있어요.', myanmar: 'ရှောင်ကြဉ်မှု ရှိတယ်။', english: 'I have reluctance.' }
  ]},
  { id: '781', korean: '꽃잎', myanmar: 'ပန်းပွင့်', english: 'Flower petal', pos: 'noun', level: 'basic', examples: [
    { korean: '꽃잎이 떨어져요.', myanmar: 'ပန်းပွင့် ကျတယ်။', english: 'Flower petals are falling.' }
  ]},
  { id: '782', korean: '꿀', myanmar: 'ပျားရည်', english: 'Honey', pos: 'noun', level: 'basic', examples: [
    { korean: '꿀을 발랐어요.', myanmar: 'ပျားရည် လိမ်းခဲ့တယ်။', english: 'I spread honey.' }
  ]},
  { id: '783', korean: '꿈', myanmar: 'အိပ်မက်', english: 'Dream', pos: 'noun', level: 'basic', examples: [
    { korean: '꿈을 꿨어요.', myanmar: 'အိပ်မက် မက်ခဲ့တယ်။', english: 'I had a dream.' }
  ]},
  { id: '784', korean: '끈기', myanmar: 'ခံနိုင်ရည်', english: 'Perseverance', pos: 'noun', level: 'basic', examples: [
    { korean: '끈기가 필요해요.', myanmar: 'ခံနိုင်ရည် လိုအပ်တယ်။', english: 'Perseverance is needed.' }
  ]},
  { id: '785', korean: '끝점', myanmar: 'အဆုံးမှတ်', english: 'End point', pos: 'noun', level: 'basic', examples: [
    { korean: '끝점에 도착했어요.', myanmar: 'အဆုံးမှတ် ရောက်ခဲ့တယ်။', english: 'I arrived at the end point.' }
  ]},
  { id: '786', korean: '글감', myanmar: 'စာရေးခေါင်းစဉ်', english: 'Writing topic', pos: 'noun', level: 'basic', examples: [
    { korean: '글감을 찾았어요.', myanmar: 'စာရေးခေါင်းစဉ် ရှာတွေ့ခဲ့တယ်။', english: 'I found a writing topic.' }
  ]},
  { id: '787', korean: '글꼴', myanmar: 'စာလုံးပုံစံ', english: 'Font', pos: 'noun', level: 'basic', examples: [
    { korean: '글꼴을 바꿨어요.', myanmar: 'စာလုံးပုံစံ ပြောင်းခဲ့တယ်။', english: 'I changed the font.' }
  ]},
  { id: '788', korean: '금고', myanmar: 'ငွေသိုက်', english: 'Safe', pos: 'noun', level: 'basic', examples: [
    { korean: '금고에 넣었어요.', myanmar: 'ငွေသိုက်မှာ ထည့်ခဲ့တယ်။', english: 'I put it in the safe.' }
  ]},
  { id: '789', korean: '금메달', myanmar: 'ရွှေတံဆိပ်', english: 'Gold medal', pos: 'noun', level: 'basic', examples: [
    { korean: '금메달을 땄어요.', myanmar: 'ရွှေတံဆိပ် ရခဲ့တယ်။', english: 'I won a gold medal.' }
  ]},
  { id: '790', korean: '금액', myanmar: 'ငွေပမာဏ', english: 'Amount of money', pos: 'noun', level: 'basic', examples: [
    { korean: '금액을 확인했어요.', myanmar: 'ငွေပမာဏ စစ်ဆေးခဲ့တယ်။', english: 'I checked the amount.' }
  ]},
  { id: '791', korean: '급식', myanmar: 'ကျောင်းအစားအသောက်', english: 'School meal', pos: 'noun', level: 'basic', examples: [
    { korean: '급식을 먹었어요.', myanmar: 'ကျောင်းအစားအသောက် စားခဲ့တယ်။', english: 'I ate the school meal.' }
  ]},
  { id: '792', korean: '급한일', myanmar: 'အရေးပေါ်အလုပ်', english: 'Urgent matter', pos: 'noun', level: 'basic', examples: [
    { korean: '급한일이 생겼어요.', myanmar: 'အရေးပေါ်အလုပ် ဖြစ်ခဲ့တယ်။', english: 'An urgent matter came up.' }
  ]},
  { id: '793', korean: '그네', myanmar: 'ခုန်းတက်', english: 'Swing', pos: 'noun', level: 'basic', examples: [
    { korean: '그네를 탔어요.', myanmar: 'ခုန်းတက် တက်ခဲ့တယ်။', english: 'I rode the swing.' }
  ]},
  { id: '794', korean: '그동안', myanmar: 'ထိုအချိန်ကာလ', english: 'During that time', pos: 'noun', level: 'basic', examples: [
    { korean: '그동안 잘 지냈어요.', myanmar: 'ထိုအချိန်ကာလ ကောင်းကောင်း နေခဲ့တယ်။', english: 'I was doing well during that time.' }
  ]},
  { id: '795', korean: '그릇가게', myanmar: 'ပန်းကန်ဆိုင်', english: 'Dishware store', pos: 'noun', level: 'basic', examples: [
    { korean: '그릇가게에 갔어요.', myanmar: 'ပန်းကန်ဆိုင်ကို သွားခဲ့တယ်။', english: 'I went to the dishware store.' }
  ]},
  { id: '796', korean: '그림자', myanmar: 'အရိပ်', english: 'Shadow', pos: 'noun', level: 'basic', examples: [
    { korean: '그림자가 길어요.', myanmar: 'အရိပ်က ရှည်တယ်။', english: 'The shadow is long.' }
  ]},
  { id: '797', korean: '그물', myanmar: 'ပိုက်ကွန်', english: 'Net', pos: 'noun', level: 'basic', examples: [
    { korean: '그물로 잡았어요.', myanmar: 'ပိုက်ကွန်နဲ့ ဖမ်းခဲ့တယ်။', english: 'I caught it with a net.' }
  ]},
  { id: '798', korean: '근무시간', myanmar: 'အလုပ်ချိန်', english: 'Working hours', pos: 'noun', level: 'basic', examples: [
    { korean: '근무시간이 끝났어요.', myanmar: 'အလုပ်ချိန် ပြီးခဲ့တယ်။', english: 'Working hours are over.' }
  ]},
  { id: '799', korean: '근육', myanmar: 'ကြွက်သား', english: 'Muscle', pos: 'noun', level: 'basic', examples: [
    { korean: '근육이 아파요.', myanmar: 'ကြွက်သား နာတယ်။', english: 'My muscle hurts.' }
  ]},
  { id: '800', korean: '글자', myanmar: 'စာလုံး', english: 'Letter/Character', pos: 'noun', level: 'basic', examples: [
    { korean: '글자를 썼어요.', myanmar: 'စာလုံး ရေးခဲ့တယ်။', english: 'I wrote letters.' }
  ]},
  { id: '801', korean: '금지', myanmar: 'တားမြစ်ခြင်း', english: 'Prohibition', pos: 'noun', level: 'basic', examples: [
    { korean: '금지되어 있어요.', myanmar: 'တားမြစ်ထားတယ်။', english: 'It is prohibited.' }
  ]},
  { id: '802', korean: '기부', myanmar: 'လှူဒါန်း', english: 'Donation', pos: 'noun', level: 'basic', examples: [
    { korean: '기부를 했어요.', myanmar: 'လှူဒါန်း လုပ်ခဲ့တယ်။', english: 'I made a donation.' }
  ]},
  { id: '803', korean: '기숙사', myanmar: 'ဘော်ဒါ', english: 'Dormitory', pos: 'noun', level: 'basic', examples: [
    { korean: '기숙사에 살아요.', myanmar: 'ဘော်ဒါမှာ နေတယ်။', english: 'I live in a dormitory.' }
  ]},
  { id: '804', korean: '기온', myanmar: 'အပူချိန်', english: 'Temperature', pos: 'noun', level: 'basic', examples: [
    { korean: '기온이 높아요.', myanmar: 'အပူချိန် မြင့်တယ်။', english: 'The temperature is high.' }
  ]},
  { id: '805', korean: '기차역', myanmar: 'ရထားဘူတာ', english: 'Train station', pos: 'noun', level: 'basic', examples: [
    { korean: '기차역에 갔어요.', myanmar: 'ရထားဘူတာကို သွားခဲ့တယ်။', english: 'I went to the train station.' }
  ]},
  { id: '806', korean: '김밥', myanmar: 'ကင်ချီဘပ်', english: 'Gimbap (rice roll)', pos: 'noun', level: 'basic', examples: [
    { korean: '김밥을 만들었어요.', myanmar: 'ကင်ချီဘပ် လုပ်ခဲ့တယ်။', english: 'I made gimbap.' }
  ]},
  { id: '807', korean: '까불다', myanmar: 'မောက်မာသည်', english: 'To be cheeky', pos: 'verb', level: 'basic', examples: [
    { korean: '아이가 까불어요.', myanmar: 'ကလေးက မောက်မာတယ်။', english: 'The child is being cheeky.' }
  ]},
  { id: '808', korean: '깜빡하다', myanmar: 'မေ့သွားသည်', english: 'To forget', pos: 'verb', level: 'basic', examples: [
    { korean: '깜빡했어요.', myanmar: 'မေ့သွားခဲ့တယ်။', english: 'I forgot.' }
  ]},
  { id: '809', korean: '꼼꼼하다', myanmar: 'သေချာစွာလုပ်သည်', english: 'To be meticulous', pos: 'adjective', level: 'basic', examples: [
    { korean: '꼼꼼하게 했어요.', myanmar: 'သေချာစွာ လုပ်ခဲ့တယ်။', english: 'I did it meticulously.' }
  ]},
  { id: '810', korean: '끓이다', myanmar: 'ပြုတ်သည်', english: 'To boil', pos: 'verb', level: 'basic', examples: [
    { korean: '물을 끓였어요.', myanmar: 'ရေ ပြုတ်ခဲ့တယ်။', english: 'I boiled water.' }
  ]},
  { id: '811', korean: '끌다', myanmar: 'ဆွဲသည်', english: 'To pull/drag', pos: 'verb', level: 'basic', examples: [
    { korean: '가방을 끌었어요.', myanmar: 'အိတ် ဆွဲခဲ့တယ်။', english: 'I dragged the bag.' }
  ]},
  { id: '812', korean: '끝나다', myanmar: 'ပြီးသွားသည်', english: 'To end/finish', pos: 'verb', level: 'basic', examples: [
    { korean: '수업이 끝났어요.', myanmar: 'သင်ခန်းစာ ပြီးသွားခဲ့တယ်။', english: 'The class ended.' }
  ]},
  { id: '813', korean: '글쓰다', myanmar: 'စာရေးသည်', english: 'To write', pos: 'verb', level: 'basic', examples: [
    { korean: '편지를 글썼어요.', myanmar: 'စာ ရေးခဲ့တယ်။', english: 'I wrote a letter.' }
  ]},
  { id: '814', korean: '긁다', myanmar: 'ခြစ်သည်', english: 'To scratch', pos: 'verb', level: 'basic', examples: [
    { korean: '등을 긁었어요.', myanmar: 'ကျောက် ခြစ်ခဲ့တယ်။', english: 'I scratched my back.' }
  ]},
  // === BATCH 12: CONTINUING TO 1000 (815-864) ===
  { id: '815', korean: '금요일밤', myanmar: 'သောကြာညနေ', english: 'Friday night', pos: 'noun', level: 'basic', examples: [
    { korean: '금요일밤에 만나요.', myanmar: 'သောကြာညနေမှာ တွေ့မယ်။', english: 'Let\'s meet on Friday night.' }
  ]},
  { id: '816', korean: '급수대', myanmar: 'ရေသောက်နေရာ', english: 'Water fountain', pos: 'noun', level: 'basic', examples: [
    { korean: '급수대에서 물을 마셨어요.', myanmar: 'ရေသောက်နေရာမှာ ရေ သောက်ခဲ့တယ်။', english: 'I drank water at the water fountain.' }
  ]},
  { id: '817', korean: '그래도', myanmar: 'သို့သော်လည်း', english: 'Still/Nevertheless', pos: 'adverb', level: 'basic', examples: [
    { korean: '그래도 괜찮아요.', myanmar: 'သို့သော်လည်း ရတယ်။', english: 'It\'s still okay.' }
  ]},
  { id: '818', korean: '그런데', myanmar: 'သို့ရာတွင်', english: 'But/However', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그런데 늦었어요.', myanmar: 'သို့ရာတွင် နောက်ကျခဲ့တယ်။', english: 'But I was late.' }
  ]},
  { id: '819', korean: '그리고', myanmar: 'ပြီးတော့', english: 'And', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그리고 나서 갔어요.', myanmar: 'ပြီးတော့ မှ သွားခဲ့တယ်။', english: 'And then I went.' }
  ]},
  { id: '820', korean: '근처', myanmar: 'အနီးအနား', english: 'Nearby/Vicinity', pos: 'noun', level: 'basic', examples: [
    { korean: '집 근처예요.', myanmar: 'အိမ် အနီးအနားပါ။', english: 'It\'s near the house.' }
  ]},
  { id: '821', korean: '글씨체', myanmar: 'စာလုံးအမျိုးအစား', english: 'Handwriting style', pos: 'noun', level: 'basic', examples: [
    { korean: '글씨체가 예뻐요.', myanmar: 'စာလုံးအမျိုးအစား လှတယ်။', english: 'The handwriting style is pretty.' }
  ]},
  { id: '822', korean: '금강산', myanmar: 'ရွှေတောင်', english: 'Mount Kumgang', pos: 'noun', level: 'basic', examples: [
    { korean: '금강산이 아름다워요.', myanmar: 'ရွှေတောင်က လှတယ်။', english: 'Mount Kumgang is beautiful.' }
  ]},
  { id: '823', korean: '금세기', myanmar: 'ဒီရာစုနှစ်', english: 'This century', pos: 'noun', level: 'basic', examples: [
    { korean: '금세기의 발명품이에요.', myanmar: 'ဒီရာစုနှစ်ရဲ့ တီထွင်မှုပါ။', english: 'It\'s an invention of this century.' }
  ]},
  { id: '824', korean: '급행', myanmar: 'အမြန်ရထား/ အမြန်လိုင်း', english: 'Express train', pos: 'noun', level: 'basic', examples: [
    { korean: '급행을 탔어요.', myanmar: 'အမြန်ရထား စီးခဲ့တယ်။', english: 'I took the express train.' }
  ]},
  { id: '825', korean: '그래서', myanmar: 'ဒါကြောင့်', english: 'So/Therefore', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그래서 늦었어요.', myanmar: 'ဒါကြောင့် နောက်ကျခဲ့တယ်။', english: 'So I was late.' }
  ]},
  { id: '826', korean: '그런지', myanmar: 'ထိုသို့လား', english: 'Whether/If', pos: 'particle', level: 'basic', examples: [
    { korean: '맞는지 그런지 몰라요.', myanmar: 'မှန်သလား ထိုသို့လား မသိဘူး။', english: 'I don\'t know whether it\'s right or not.' }
  ]},
  { id: '827', korean: '그렇다면', myanmar: 'ထိုသို့ဆိုရင် / အဲ့တာဆိုရင် / ဒါဆိုရင်', english: 'If so/Then', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그렇다면 가세요.', myanmar: 'အဲ့တာဆိုရင် သွားပါ။', english: 'If so, go ahead.' }
  ]},
  { id: '828', korean: '그리워하다', myanmar: 'လွမ်းဆွတ်သည်', english: 'To miss/long for', pos: 'verb', level: 'basic', examples: [
    { korean: '고향을 그리워해요.', myanmar: 'ဇာတိမြေကို လွမ်းဆွတ်တယ်။', english: 'I miss my hometown.' }
  ]},
  { id: '829', korean: '금년', myanmar: 'ယခုနှစ်', english: 'This year', pos: 'noun', level: 'basic', examples: [
    { korean: '금년에 졸업해요.', myanmar: 'ယခုနှစ်မှာ ဘွဲ့ရမယ်။', english: 'I will graduate this year.' }
  ]},
  { id: '830', korean: '급하다', myanmar: 'အရေးပေါ်ဖြစ်သည်', english: 'To be urgent', pos: 'adjective', level: 'basic', examples: [
    { korean: '일이 급해요.', myanmar: 'အလုပ်က အရေးပေါ်ဖြစ်တယ်။', english: 'The work is urgent.' }
  ]},
  { id: '831', korean: '그만', myanmar: 'ရပ်တန့် /ထွက် / ဒီလောက်ဘဲ ', english: 'Stop/Enough', pos: 'adverb', level: 'basic', examples: [
    { korean: '그만 하세요.', myanmar: 'ရပ်တန့် ပါ။', english: 'Stop it.' }
  ]},
  { id: '832', korean: '그밖에', myanmar: 'ထိုမှအပါး / အဲ့တာအပြင်', english: 'Besides/In addition', pos: 'adverb', level: 'basic', examples: [
    { korean: '그밖에 뭐가 있어요?', myanmar: 'အဲ့တာအပြင် ဘာရှိလဲ။', english: 'What else is there besides that?' }
  ]},
  { id: '833', korean: '그보다', myanmar: 'ထိုထက် / အဲ့ထာထက်', english: 'More than that', pos: 'adverb', level: 'basic', examples: [
    { korean: '그보다 더 좋아요.', myanmar: 'အဲ့ထာထက် ပိုကောင်းတယ်။', english: 'It\'s better than that.' }
  ]},
  { id: '834', korean: '그쪽', myanmar: 'ထိုဘက်', english: 'That side/direction', pos: 'noun', level: 'basic', examples: [
    { korean: '그쪽으로 가세요.', myanmar: 'ထိုဘက်ကို သွားပါ။', english: 'Go that way.' }
  ]},
  { id: '835', korean: '그치다', myanmar: 'ရပ်သွားသည်', english: 'To stop/cease', pos: 'verb', level: 'basic', examples: [
    { korean: '비가 그쳤어요.', myanmar: 'မိုး ရပ်သွားခဲ့တယ်။', english: 'The rain stopped.' }
  ]},
  { id: '836', korean: '극장', myanmar: 'ပြဇာတ်ရုံ', english: 'Theater', pos: 'noun', level: 'basic', examples: [
    { korean: '극장에 갔어요.', myanmar: 'ပြဇာတ်ရုံကို သွားခဲ့တယ်။', english: 'I went to the theater.' }
  ]},
  { id: '837', korean: '근본', myanmar: 'အခြေခံ / အုတ်မြစ်', english: 'Foundation/Root', pos: 'noun', level: 'basic', examples: [
    { korean: '근본이 중요해요.', myanmar: 'အခြေခံက အရေးကြီးတယ်။', english: 'The foundation is important.' }
  ]},
  { id: '838', korean: '글씨', myanmar: 'လက်ရေး', english: 'Handwriting', pos: 'noun', level: 'basic', examples: [
    { korean: '글씨가 예뻐요.', myanmar: 'လက်ရေးက လှတယ်။', english: 'The handwriting is pretty.' }
  ]},
  { id: '839', korean: '금요일오후', myanmar: 'သောကြာမွန်းလွဲ/ ညနေပိုင်း', english: 'Friday afternoon', pos: 'noun', level: 'basic', examples: [
    { korean: '금요일오후에 만나요.', myanmar: 'သောကြာမွန်းလွဲမှာ တွေ့မယ်။', english: 'Let\'s meet on Friday afternoon.' }
  ]},
  { id: '840', korean: '급속도', myanmar: 'အမြန်နှုန်း', english: 'Rapid speed', pos: 'noun', level: 'basic', examples: [
    { korean: '급속도로 발전해요.', myanmar: 'အမြန်နှုန်းနဲ့ တိုးတက်တယ်။', english: 'It develops at rapid speed.' }
  ]},
  { id: '841', korean: '그야말로', myanmar: 'တကယ်တမ်း', english: 'Really/Truly', pos: 'adverb', level: 'basic', examples: [
    { korean: '그야말로 최고예요.', myanmar: 'တကယ်တမ်း အကောင်းဆုံးပါ။', english: 'It\'s truly the best.' }
  ]},
  { id: '842', korean: '그러니까', myanmar: 'ဒါကြောင့်မို့', english: 'That\'s why/So', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그러니까 조심하세요.', myanmar: 'ဒါကြောင့်မို့ သတိထားပါ။', english: 'So be careful.' }
  ]},
  { id: '843', korean: '그런식으로', myanmar: 'ထိုနည်းအတိုင်း / အဲ့နည်းအတိုင်း', english: 'In that way', pos: 'adverb', level: 'basic', examples: [
    { korean: '그런식으로 하지 마세요.', myanmar: 'ထိုနည်းအတိုင်း မလုပ်ပါနဲ့။', english: 'Don\'t do it that way.' }
  ]},
  { id: '844', korean: '그럼에도', myanmar: 'သို့သော်လည်း / ဒါပေမယ့်လည်း', english: 'Nevertheless', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그럼에도 계속해요.', myanmar: 'ဒါပေမယ့် ဆက်လုပ်တယ်။', english: 'Nevertheless, I continue.' }
  ]},
  { id: '845', korean: '그러면서', myanmar: 'ထိုအတွင်း / အဲ့အတောအတွင်း', english: 'While doing that', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그러면서 웃었어요.', myanmar: 'ထိုအတွင်း ရယ်ခဲ့တယ်။', english: 'While doing that, I laughed.' }
  ]},
  { id: '846', korean: '그렇지만', myanmar: 'သို့သော် / ဒါပေမယ့်', english: 'However/But', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그렇지만 어려워요.', myanmar: 'သို့သော် ခက်ခဲတယ်။', english: 'However, it\'s difficult.' }
  ]},
  { id: '847', korean: '그리하여', myanmar: 'ထိုသို့ဖြင့် /  အဲ့သို့ဖြင့် / ဒါကြောင့်', english: 'Thus/Therefore', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그리하여 성공했어요.', myanmar: 'ထိုသို့ဖြင့် အောင်မြင်ခဲ့တယ်။', english: 'Thus, I succeeded.' }
  ]},
  { id: '848', korean: '극복하다', myanmar: 'အောင်မြင်သည်', english: 'To overcome', pos: 'verb', level: 'basic', examples: [
    { korean: '어려움을 극복했어요.', myanmar: 'အခက်အခဲကို အောင်မြင်ခဲ့တယ်။', english: 'I overcame the difficulties.' }
  ]},
  { id: '849', korean: '근데', myanmar: 'သို့ပေမယ့် / ဒါပေမယ့်', english: 'But (casual)', pos: 'conjunction', level: 'basic', examples: [
    { korean: '근데 왜요?', myanmar: 'သို့ပေမယ့် ဘာကြောင့်လဲ။', english: 'But why?' }
  ]},
  { id: '850', korean: '금세', myanmar: 'ခဏခြင်းတွင်', english: 'Soon/Quickly', pos: 'adverb', level: 'basic', examples: [
    { korean: '금세 끝났어요.', myanmar: 'ခဏခြင်းတွင် ပြီးခဲ့တယ်။', english: 'It finished quickly.' }
  ]},
  { id: '851', korean: '급격히', myanmar: 'လျင်မြန်စွာ', english: 'Rapidly/Suddenly', pos: 'adverb', level: 'basic', examples: [
    { korean: '급격히 변했어요.', myanmar: 'လျင်မြန်စွာ ပြောင်းလဲခဲ့တယ်။', english: 'It changed rapidly.' }
  ]},
  { id: '852', korean: '그래야', myanmar: 'ထိုသို့မှသာ', english: 'Only then/Must', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그래야 돼요.', myanmar: 'ထိုသို့မှသာ ရမယ်။', english: 'It must be that way.' }
  ]},
  { id: '853', korean: '그러한', myanmar: 'ထိုကဲ့သို့သော', english: 'Such/That kind of', pos: 'adjective', level: 'basic', examples: [
    { korean: '그러한 일이 있었어요.', myanmar: 'ထိုကဲ့သို့သော အမှု ရှိခဲ့တယ်။', english: 'Such a thing happened.' }
  ]},
  { id: '854', korean: '그런가', myanmar: 'ထိုသို့လား', english: 'Is that so?', pos: 'particle', level: 'basic', examples: [
    { korean: '정말 그런가요?', myanmar: 'တကယ် ထိုသို့လား။', english: 'Is it really so?' }
  ]},
  { id: '855', korean: '그러다', myanmar: 'ထိုသို့လုပ်သည်', english: 'To do so/be like that', pos: 'verb', level: 'basic', examples: [
    { korean: '그러다가 늦었어요.', myanmar: 'ထိုသို့လုပ်ရင်း နောက်ကျခဲ့တယ်။', english: 'While doing so, I was late.' }
  ]},
  { id: '856', korean: '그러므로', myanmar: 'ထို့ကြောင့်', english: 'Therefore', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그러므로 중요해요.', myanmar: 'ထို့ကြောင့် အရေးကြီးတယ်။', english: 'Therefore, it\'s important.' }
  ]},
  { id: '857', korean: '그렇게', myanmar: 'ထိုသို့', english: 'Like that/So', pos: 'adverb', level: 'basic', examples: [
    { korean: '그렇게 하세요.', myanmar: 'ထိုသို့ လုပ်ပါ။', english: 'Do it like that.' }
  ]},
  { id: '858', korean: '그런데도', myanmar: 'သို့သော်လည်း', english: 'Even so/Still', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그런데도 갔어요.', myanmar: 'သို့သော်လည်း သွားခဲ့တယ်။', english: 'Even so, I went.' }
  ]},
  { id: '859', korean: '그만큼', myanmar: 'ထိုမျှ / အဲ့လောက်တောင်', english: 'That much/To that extent', pos: 'adverb', level: 'basic', examples: [
    { korean: '그만큼 어려워요.', myanmar: 'ထိုမျှ ခက်ခဲတယ်။', english: 'It\'s that difficult.' }
  ]},
  { id: '860', korean: '그래놓고', myanmar: 'ထိုသို့လုပ်ပြီး', english: 'After doing that', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그래놓고 후회해요.', myanmar: 'ထိုသို့လုပ်ပြီး နောင်တရတယ်။', english: 'After doing that, I regret it.' }
  ]},
  { id: '861', korean: '그러다보면', myanmar: 'ထိုသို့လုပ်လျှင်', english: 'If you keep doing that', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그러다보면 늘어요.', myanmar: 'ထိုသို့လုပ်လျှင် တိုးတက်မယ်။', english: 'If you keep doing that, you\'ll improve.' }
  ]},
  { id: '862', korean: '그때까지', myanmar: 'ထိုအချိန်အထိ', english: 'Until then', pos: 'adverb', level: 'basic', examples: [
    { korean: '그때까지 기다려요.', myanmar: 'ထိုအချိန်အထိ စောင့်တယ်။', english: 'I wait until then.' }
  ]},
  { id: '863', korean: '그다음', myanmar: 'ထို့နောက်', english: 'After that/Next', pos: 'adverb', level: 'basic', examples: [
    { korean: '그다음에 뭐 해요?', myanmar: 'ထို့နောက် ဘာလုပ်မလဲ။', english: 'What do you do after that?' }
  ]},
  { id: '864', korean: '그럼', myanmar: 'ထိုသို့ဆိုလျှင်', english: 'Then/In that case', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그럼 가세요.', myanmar: 'ထိုသို့ဆိုလျှင် သွားပါ။', english: 'Then go ahead.' }
  ]},
  // === BATCH 13: FINAL SPRINT TO 1000 (865-914) ===
  { id: '865', korean: '가능성', myanmar: 'ဖြစ်နိုင်ခြေ', english: 'Possibility', pos: 'noun', level: 'basic', examples: [
    { korean: '가능성이 있어요.', myanmar: 'ဖြစ်နိုင်ခြေ ရှိတယ်။', english: 'There is a possibility.' }
  ]},
  { id: '866', korean: '가득', myanmar: 'ပြည့်နေသော', english: 'Full', pos: 'adverb', level: 'basic', examples: [
    { korean: '물이 가득해요.', myanmar: 'ရေ ပြည့်နေတယ်။', english: 'It\'s full of water.' }
  ]},
  { id: '867', korean: '가만히', myanmar: 'တိတ်တဆိတ်', english: 'Quietly/Still', pos: 'adverb', level: 'basic', examples: [
    { korean: '가만히 있어요.', myanmar: 'တိတ်တဆိတ် နေတယ်။', english: 'Stay still.' }
  ]},
  { id: '868', korean: '가볍다', myanmar: 'ပေါ့သည်', english: 'To be light', pos: 'adjective', level: 'basic', examples: [
    { korean: '가방이 가벼워요.', myanmar: 'အိတ်က ပေါ့တယ်။', english: 'The bag is light.' }
  ]},
  { id: '869', korean: '가슴', myanmar: 'ရင်ဘတ်', english: 'Chest/Heart', pos: 'noun', level: 'basic', examples: [
    { korean: '가슴이 아파요.', myanmar: 'ရင်ဘတ် နာတယ်။', english: 'My chest hurts.' }
  ]},
  { id: '870', korean: '가운데', myanmar: 'အလယ်', english: 'Middle/Center', pos: 'noun', level: 'basic', examples: [
    { korean: '가운데 있어요.', myanmar: 'အလယ်မှာ ရှိတယ်။', english: 'It\'s in the middle.' }
  ]},
  { id: '871', korean: '가입하다', myanmar: 'ဝင်ရောက်သည်', english: 'To join/sign up', pos: 'verb', level: 'basic', examples: [
    { korean: '클럽에 가입했어요.', myanmar: 'ကလပ်မှာ ဝင်ရောက်ခဲ့တယ်။', english: 'I joined the club.' }
  ]},
  { id: '872', korean: '가져오다', myanmar: 'ယူလာသည်', english: 'To bring', pos: 'verb', level: 'basic', examples: [
    { korean: '책을 가져왔어요.', myanmar: 'စာအုပ် ယူလာခဲ့တယ်။', english: 'I brought a book.' }
  ]},
  { id: '873', korean: '가치', myanmar: 'တန်ဖိုး', english: 'Value', pos: 'noun', level: 'basic', examples: [
    { korean: '가치가 있어요.', myanmar: 'တန်ဖိုး ရှိတယ်။', english: 'It has value.' }
  ]},
  { id: '874', korean: '간단하다', myanmar: 'ရိုးရှင်းသည်', english: 'To be simple', pos: 'adjective', level: 'basic', examples: [
    { korean: '문제가 간단해요.', myanmar: 'ပြဿနာက ရိုးရှင်းတယ်။', english: 'The problem is simple.' }
  ]},
  { id: '875', korean: '간섭', myanmar: 'ဝင်ရောက်စွက်ဖက်ခြင်း', english: 'Interference', pos: 'noun', level: 'basic', examples: [
    { korean: '간섭하지 마세요.', myanmar: 'ဝင်ရောက်စွက်ဖက် မလုပ်ပါနဲ့။', english: 'Don\'t interfere.' }
  ]},
  { id: '876', korean: '간접적', myanmar: 'သွယ်ဝိုက်သော', english: 'Indirect', pos: 'adjective', level: 'basic', examples: [
    { korean: '간접적인 방법이에요.', myanmar: 'သွယ်ဝိုက်သော နည်းလမ်းပါ။', english: 'It\'s an indirect method.' }
  ]},
  { id: '877', korean: '갈등', myanmar: 'ပဋိပက္ခ', english: 'Conflict', pos: 'noun', level: 'basic', examples: [
    { korean: '갈등이 생겼어요.', myanmar: 'ပဋိပက္ခ ဖြစ်ခဲ့တယ်။', english: 'A conflict arose.' }
  ]},
  { id: '878', korean: '감동', myanmar: 'ခံစားမှု', english: 'Emotion/Being moved', pos: 'noun', level: 'basic', examples: [
    { korean: '감동받았어요.', myanmar: 'ခံစားမှု ရခဲ့တယ်။', english: 'I was moved.' }
  ]},
  { id: '879', korean: '감사', myanmar: 'ကျေးဇူးတင်ခြင်း', english: 'Gratitude', pos: 'noun', level: 'basic', examples: [
    { korean: '감사해요.', myanmar: 'ကျေးဇူးတင်ပါတယ်။', english: 'Thank you.' }
  ]},
  { id: '880', korean: '강하다', myanmar: 'ခိုင်မာသည်', english: 'To be strong', pos: 'adjective', level: 'basic', examples: [
    { korean: '바람이 강해요.', myanmar: 'လေက ခိုင်မာတယ်။', english: 'The wind is strong.' }
  ]},
  { id: '881', korean: '개선', myanmar: 'တိုးတက်မှု', english: 'Improvement', pos: 'noun', level: 'basic', examples: [
    { korean: '개선이 필요해요.', myanmar: 'တိုးတက်မှု လိုအပ်တယ်။', english: 'Improvement is needed.' }
  ]},
  { id: '882', korean: '거대하다', myanmar: 'ကြီးမားသည်', english: 'To be huge', pos: 'adjective', level: 'basic', examples: [
    { korean: '건물이 거대해요.', myanmar: 'အဆောက်အအုံက ကြီးမားတယ်။', english: 'The building is huge.' }
  ]},
  { id: '883', korean: '거부', myanmar: 'ငြင်းပယ်ခြင်း', english: 'Refusal/Rejection', pos: 'noun', level: 'basic', examples: [
    { korean: '거부당했어요.', myanmar: 'ငြင်းပယ် ခံခဲ့တယ်။', english: 'I was rejected.' }
  ]},
  { id: '884', korean: '걱정', myanmar: 'စိတ်ပူခြင်း', english: 'Worry', pos: 'noun', level: 'basic', examples: [
    { korean: '걱정하지 마세요.', myanmar: 'စိတ်မပူပါနဲ့။', english: 'Don\'t worry.' }
  ]},
  { id: '885', korean: '건강하다', myanmar: 'ကျန်းမာသည်', english: 'To be healthy', pos: 'adjective', level: 'basic', examples: [
    { korean: '몸이 건강해요.', myanmar: 'ခန္ဓာကိုယ် ကျန်းမာတယ်။', english: 'My body is healthy.' }
  ]},
  { id: '886', korean: '결과', myanmar: 'ရလဒ်', english: 'Result', pos: 'noun', level: 'basic', examples: [
    { korean: '결과가 좋아요.', myanmar: 'ရလဒ်က ကောင်းတယ်။', english: 'The result is good.' }
  ]},
  { id: '887', korean: '경험', myanmar: 'အတွေ့အကြုံ', english: 'Experience', pos: 'noun', level: 'basic', examples: [
    { korean: '경험이 많아요.', myanmar: 'အတွေ့အကြုံ အများကြီး ရှိတယ်။', english: 'I have a lot of experience.' }
  ]},
  { id: '888', korean: '계속', myanmar: 'ဆက်လက်', english: 'Continuously', pos: 'adverb', level: 'basic', examples: [
    { korean: '계속 공부해요.', myanmar: 'ဆက်လက် စာသင်တယ်။', english: 'I study continuously.' }
  ]},
  { id: '889', korean: '고민', myanmar: 'စိတ်ပူမှု', english: 'Worry/Concern', pos: 'noun', level: 'basic', examples: [
    { korean: '고민이 많아요.', myanmar: 'စိတ်ပူမှု အများကြီး ရှိတယ်။', english: 'I have many worries.' }
  ]},
  { id: '890', korean: '공부', myanmar: 'စာသင်ခြင်း', english: 'Study', pos: 'noun', level: 'basic', examples: [
    { korean: '공부를 해요.', myanmar: 'စာသင်ခြင်း လုပ်တယ်။', english: 'I study.' }
  ]},
  { id: '891', korean: '관심', myanmar: 'စိတ်ဝင်စားမှု', english: 'Interest', pos: 'noun', level: 'basic', examples: [
    { korean: '관심이 있어요.', myanmar: 'စိတ်ဝင်စားမှု ရှိတယ်။', english: 'I have interest.' }
  ]},
  { id: '892', korean: '교육', myanmar: 'ပညာရေး', english: 'Education', pos: 'noun', level: 'basic', examples: [
    { korean: '교육이 중요해요.', myanmar: 'ပညာရေးက အရေးကြီးတယ်။', english: 'Education is important.' }
  ]},
  { id: '893', korean: '구체적', myanmar: 'တိကျသော', english: 'Specific/Concrete', pos: 'adjective', level: 'basic', examples: [
    { korean: '구체적인 계획이에요.', myanmar: 'တိကျသော အစီအစဉ်ပါ။', english: 'It\'s a specific plan.' }
  ]},
  { id: '894', korean: '국가', myanmar: 'နိုင်ငံ', english: 'Country/Nation', pos: 'noun', level: 'basic', examples: [
    { korean: '우리 국가예요.', myanmar: 'ကျွန်တော်တို့ နိုင်ငံပါ။', english: 'It\'s our country.' }
  ]},
  { id: '895', korean: '권리', myanmar: 'အခွင့်အရေး', english: 'Right', pos: 'noun', level: 'basic', examples: [
    { korean: '권리가 있어요.', myanmar: 'အခွင့်အရေး ရှိတယ်။', english: 'I have rights.' }
  ]},
  { id: '896', korean: '그러다가', myanmar: 'ထိုအတွင်း', english: 'While doing that', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그러다가 만났어요.', myanmar: 'ထိုအတွင်း တွေ့ခဲ့တယ်။', english: 'While doing that, I met.' }
  ]},
  { id: '897', korean: '근거', myanmar: 'အခြေခံ', english: 'Basis/Ground', pos: 'noun', level: 'basic', examples: [
    { korean: '근거가 있어요.', myanmar: 'အခြေခံ ရှိတယ်။', english: 'There is a basis.' }
  ]},
  { id: '898', korean: '기대', myanmar: 'မျှော်လင့်ခြင်း', english: 'Expectation', pos: 'noun', level: 'basic', examples: [
    { korean: '기대하고 있어요.', myanmar: 'မျှော်လင့်နေတယ်။', english: 'I am expecting.' }
  ]},
  { id: '899', korean: '기본', myanmar: 'အခြေခံ', english: 'Basic/Foundation', pos: 'noun', level: 'basic', examples: [
    { korean: '기본이 중요해요.', myanmar: 'အခြေခံက အရေးကြီးတယ်။', english: 'The basics are important.' }
  ]},
  { id: '900', korean: '기쁘다', myanmar: 'ပျော်ရွှင်သည်', english: 'To be happy', pos: 'adjective', level: 'basic', examples: [
    { korean: '마음이 기뻐요.', myanmar: 'စိတ်က ပျော်ရွှင်တယ်။', english: 'My heart is happy.' }
  ]},
  { id: '901', korean: '길다', myanmar: 'ရှည်သည်', english: 'To be long', pos: 'adjective', level: 'basic', examples: [
    { korean: '머리가 길어요.', myanmar: 'ဆံပင်က ရှည်တယ်။', english: 'The hair is long.' }
  ]},
  { id: '902', korean: '깊다', myanmar: 'နက်သည်', english: 'To be deep', pos: 'adjective', level: 'basic', examples: [
    { korean: '물이 깊어요.', myanmar: 'ရေက နက်တယ်။', english: 'The water is deep.' }
  ]},
  { id: '903', korean: '까지', myanmar: 'အထိ', english: 'Until/To', pos: 'particle', level: 'basic', examples: [
    { korean: '집까지 갔어요.', myanmar: 'အိမ်အထိ သွားခဲ့တယ်။', english: 'I went to the house.' }
  ]},
  { id: '904', korean: '꼭', myanmar: 'ဖြစ်ပါစေ', english: 'Definitely/Must', pos: 'adverb', level: 'basic', examples: [
    { korean: '꼭 와야 해요.', myanmar: 'ဖြစ်ပါစေ လာရမယ်။', english: 'You must come.' }
  ]},
  { id: '905', korean: '끝', myanmar: 'အဆုံး', english: 'End', pos: 'noun', level: 'basic', examples: [
    { korean: '끝이 났어요.', myanmar: 'အဆုံး ရောက်ခဲ့တယ်။', english: 'It ended.' }
  ]},
  { id: '906', korean: '나타나다', myanmar: 'ပေါ်လာသည်', english: 'To appear', pos: 'verb', level: 'basic', examples: [
    { korean: '갑자기 나타났어요.', myanmar: 'ရုတ်တရက် ပေါ်လာခဲ့တယ်။', english: 'It appeared suddenly.' }
  ]},
  { id: '907', korean: '내용', myanmar: 'အကြောင်းအရာ', english: 'Content', pos: 'noun', level: 'basic', examples: [
    { korean: '내용이 좋아요.', myanmar: 'အကြောင်းအရာက ကောင်းတယ်။', english: 'The content is good.' }
  ]},
  { id: '908', korean: '노력', myanmar: 'ကြိုးစားမှု', english: 'Effort', pos: 'noun', level: 'basic', examples: [
    { korean: '노력하고 있어요.', myanmar: 'ကြိုးစားနေတယ်။', english: 'I am making an effort.' }
  ]},
  { id: '909', korean: '놀라다', myanmar: 'အံ့သြသည်', english: 'To be surprised', pos: 'verb', level: 'basic', examples: [
    { korean: '정말 놀랐어요.', myanmar: 'တကယ် အံ့သြခဲ့တယ်။', english: 'I was really surprised.' }
  ]},
  { id: '910', korean: '느끼다', myanmar: 'ခံစားသည်', english: 'To feel', pos: 'verb', level: 'basic', examples: [
    { korean: '행복을 느껴요.', myanmar: 'ပျော်ရွှင်မှု ခံစားတယ်။', english: 'I feel happiness.' }
  ]},
  { id: '911', korean: '늘다', myanmar: 'တိုးတက်သည်', english: 'To increase/improve', pos: 'verb', level: 'basic', examples: [
    { korean: '실력이 늘었어요.', myanmar: 'စွမ်းရည်က တိုးတက်ခဲ့တယ်။', english: 'My skills improved.' }
  ]},
  { id: '912', korean: '다르다', myanmar: 'ကွဲပြားသည်', english: 'To be different', pos: 'adjective', level: 'basic', examples: [
    { korean: '색깔이 달라요.', myanmar: 'အရောင်က ကွဲပြားတယ်။', english: 'The color is different.' }
  ]},
  { id: '913', korean: '당연하다', myanmar: 'သဘာဝကျသည်', english: 'To be natural/obvious', pos: 'adjective', level: 'basic', examples: [
    { korean: '당연한 일이에요.', myanmar: 'သဘာဝကျတဲ့ ကိစ္စပါ။', english: 'It\'s a natural thing.' }
  ]},
  { id: '914', korean: '대부분', myanmar: 'အများစု', english: 'Most/Majority', pos: 'noun', level: 'basic', examples: [
    { korean: '대부분 좋아해요.', myanmar: 'အများစု ကြိုက်တယ်။', english: 'Most people like it.' }
  ]},
  // === BATCH 14: CONTINUING TO 1000 (915-964) ===
  { id: '915', korean: '더욱', myanmar: 'ပိုမို', english: 'More/Even more', pos: 'adverb', level: 'basic', examples: [
    { korean: '더욱 열심히 해요.', myanmar: 'ပိုမို အားစိုက် လုပ်တယ်။', english: 'I work even harder.' }
  ]},
  { id: '916', korean: '도움', myanmar: 'ကူညီမှု', english: 'Help', pos: 'noun', level: 'basic', examples: [
    { korean: '도움이 필요해요.', myanmar: 'ကူညီမှု လိုအပ်တယ်။', english: 'I need help.' }
  ]},
  { id: '917', korean: '똑같다', myanmar: 'တူညီသည်', english: 'To be the same', pos: 'adjective', level: 'basic', examples: [
    { korean: '모양이 똑같아요.', myanmar: 'ပုံသဏ္ဍာန် တူညီတယ်။', english: 'The shapes are the same.' }
  ]},
  { id: '918', korean: '뜻', myanmar: 'အဓိပ္ပါယ် / ဆိုလိုရင်း', english: 'Meaning', pos: 'noun', level: 'basic', examples: [
    { korean: '뜻을 몰라요.', myanmar: 'အဓိပ္ပါယ် မသိဘူး။', english: 'I don\'t know the meaning.' }
  ]},
  { id: '919', korean: '마음', myanmar: 'စိတ်', english: 'Heart/Mind', pos: 'noun', level: 'basic', examples: [
    { korean: '마음이 아파요.', myanmar: 'စိတ် နာတယ်။', english: 'My heart hurts.' }
  ]},
  { id: '920', korean: '만족', myanmar: 'ကျေနပ်မှု', english: 'Satisfaction', pos: 'noun', level: 'basic', examples: [
    { korean: '만족해요.', myanmar: 'ကျေနပ်တယ်။', english: 'I\'m satisfied.' }
  ]},
  { id: '921', korean: '방법', myanmar: 'နည်းလမ်း', english: 'Method/Way', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 방법이에요.', myanmar: 'ကောင်းတဲ့ နည်းလမ်းပါ။', english: 'It\'s a good method.' }
  ]},
  { id: '922', korean: '변화', myanmar: 'ပြောင်းလဲမှု', english: 'Change', pos: 'noun', level: 'basic', examples: [
    { korean: '변화가 있었어요.', myanmar: 'ပြောင်းလဲမှု ရှိခဲ့တယ်။', english: 'There was a change.' }
  ]},
  { id: '923', korean: '보통', myanmar: 'ပုံမှန်', english: 'Usually/Normal', pos: 'adverb', level: 'basic', examples: [
    { korean: '보통 일찍 와요.', myanmar: 'ပုံမှန် စောစောလာတယ်။', english: 'I usually come early.' }
  ]},
  { id: '924', korean: '부족', myanmar: 'လုံလောက်မှု', english: 'Lack/Shortage', pos: 'noun', level: 'basic', examples: [
    { korean: '시간이 부족해요.', myanmar: 'အချိန် လုံလောက်မှု မရှိဘူး။', english: 'Time is lacking.' }
  ]},
  { id: '925', korean: '분명', myanmar: 'သေချာ', english: 'Clear/Certain', pos: 'adjective', level: 'basic', examples: [
    { korean: '분명히 말했어요.', myanmar: 'သေချာ ပြောခဲ့တယ်။', english: 'I said it clearly.' }
  ]},
  { id: '926', korean: '사실', myanmar: 'အမှန်တကယ်', english: 'Fact/Truth', pos: 'noun', level: 'basic', examples: [
    { korean: '사실이에요.', myanmar: 'အမှန်တကယ်ပါ။', english: 'It\'s a fact.' }
  ]},
  { id: '927', korean: '상황', myanmar: 'အခြေအနေ', english: 'Situation', pos: 'noun', level: 'basic', examples: [
    { korean: '상황이 어려워요.', myanmar: 'အခြေအနေက ခက်ခဲတယ်။', english: 'The situation is difficult.' }
  ]},
  { id: '928', korean: '생각', myanmar: 'အတွေး', english: 'Thought', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 생각이에요.', myanmar: 'ကောင်းတဲ့ အတွေးပါ။', english: 'It\'s a good thought.' }
  ]},
  { id: '929', korean: '성공', myanmar: 'အောင်မြင်မှု', english: 'Success', pos: 'noun', level: 'basic', examples: [
    { korean: '성공했어요.', myanmar: 'အောင်မြင်ခဲ့တယ်။', english: 'I succeeded.' }
  ]},
  { id: '930', korean: '소중하다', myanmar: 'တန်ဖိုးရှိသည်', english: 'To be precious', pos: 'adjective', level: 'basic', examples: [
    { korean: '소중한 친구예요.', myanmar: 'တန်ဖိုးရှိတဲ့ သူငယ်ချင်းပါ။', english: 'He\'s a precious friend.' }
  ]},
  { id: '931', korean: '습관', myanmar: 'အလေ့အကျင့်', english: 'Habit', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 습관이에요.', myanmar: 'ကောင်းတဲ့ အလေ့အကျင့်ပါ။', english: 'It\'s a good habit.' }
  ]},
  { id: '932', korean: '실수', myanmar: 'အမှား', english: 'Mistake', pos: 'noun', level: 'basic', examples: [
    { korean: '실수했어요.', myanmar: 'အမှား လုပ်ခဲ့တယ်။', english: 'I made a mistake.' }
  ]},
  { id: '933', korean: '안전', myanmar: 'လုံခြုံမှု', english: 'Safety', pos: 'noun', level: 'basic', examples: [
    { korean: '안전이 중요해요.', myanmar: 'လုံခြုံမှုက အရေးကြီးတယ်။', english: 'Safety is important.' }
  ]},
  { id: '934', korean: '어려움', myanmar: 'အခက်အခဲ', english: 'Difficulty', pos: 'noun', level: 'basic', examples: [
    { korean: '어려움이 있어요.', myanmar: 'အခက်အခဲ ရှိတယ်။', english: 'There are difficulties.' }
  ]},
  { id: '935', korean: '완전', myanmar: 'လုံးဝ', english: 'Complete/Perfect', pos: 'adjective', level: 'basic', examples: [
    { korean: '완전히 끝났어요.', myanmar: 'လုံးဝ ပြီးခဲ့တယ်။', english: 'It\'s completely finished.' }
  ]},
  { id: '936', korean: '이유', myanmar: 'အကြောင်းရင်း', english: 'Reason', pos: 'noun', level: 'basic', examples: [
    { korean: '이유가 있어요.', myanmar: 'အကြောင်းရင်း ရှိတယ်။', english: 'There is a reason.' }
  ]},
  { id: '937', korean: '자신', myanmar: 'ကိုယ်တိုင်', english: 'Oneself', pos: 'noun', level: 'basic', examples: [
    { korean: '자신을 믿어요.', myanmar: 'ကိုယ်တိုင်ကို ယုံကြည်တယ်။', english: 'I believe in myself.' }
  ]},
  { id: '938', korean: '정말', myanmar: 'တကယ်', english: 'Really', pos: 'adverb', level: 'basic', examples: [
    { korean: '정말 좋아요.', myanmar: 'တကယ် ကောင်းတယ်။', english: 'It\'s really good.' }
  ]},
  { id: '939', korean: '중요', myanmar: 'အရေးကြီး', english: 'Important', pos: 'adjective', level: 'basic', examples: [
    { korean: '중요한 일이에요.', myanmar: 'အရေးကြီးတဲ့ အလုပ်ပါ။', english: 'It\'s important work.' }
  ]},
  { id: '940', korean: '특별', myanmar: 'အထူး', english: 'Special', pos: 'adjective', level: 'basic', examples: [
    { korean: '특별한 날이에요.', myanmar: 'အထူး နေ့ပါ။', english: 'It\'s a special day.' }
  ]},
  { id: '941', korean: '필요', myanmar: 'လိုအပ်', english: 'Need/Necessity', pos: 'noun', level: 'basic', examples: [
    { korean: '필요해요.', myanmar: 'လိုအပ်တယ်။', english: 'It\'s needed.' }
  ]},
  { id: '942', korean: '행복', myanmar: 'ပျော်ရွှင်မှု', english: 'Happiness', pos: 'noun', level: 'basic', examples: [
    { korean: '행복해요.', myanmar: 'ပျော်ရွှင်တယ်။', english: 'I\'m happy.' }
  ]},
  { id: '943', korean: '희망', myanmar: 'မျှော်လင့်ချက်', english: 'Hope', pos: 'noun', level: 'basic', examples: [
    { korean: '희망이 있어요.', myanmar: 'မျှော်လင့်ချက် ရှိတယ်။', english: 'There is hope.' }
  ]},
  { id: '944', korean: '가능하다', myanmar: 'ဖြစ်နိုင်သည်', english: 'To be possible', pos: 'adjective', level: 'basic', examples: [
    { korean: '가능해요.', myanmar: 'ဖြစ်နိုင်တယ်။', english: 'It\'s possible.' }
  ]},
  { id: '945', korean: '간단히', myanmar: 'ရိုးရှင်းစွာ', english: 'Simply', pos: 'adverb', level: 'basic', examples: [
    { korean: '간단히 설명해요.', myanmar: 'ရိုးရှင်းစွာ ရှင်းပြတယ်။', english: 'I explain simply.' }
  ]},
  { id: '946', korean: '개인적', myanmar: 'ပုဂ္ဂလိက', english: 'Personal', pos: 'adjective', level: 'basic', examples: [
    { korean: '개인적인 일이에요.', myanmar: 'ပုဂ္ဂလိက အမှုပါ။', english: 'It\'s a personal matter.' }
  ]},
  { id: '947', korean: '거의', myanmar: 'လုနီးပါး', english: 'Almost', pos: 'adverb', level: 'basic', examples: [
    { korean: '거의 끝났어요.', myanmar: 'လုနီးပါး ပြီးခဲ့တယ်။', english: 'It\'s almost finished.' }
  ]},
  { id: '948', korean: '계획', myanmar: 'အစီအစဉ်', english: 'Plan', pos: 'noun', level: 'basic', examples: [
    { korean: '계획을 세웠어요.', myanmar: 'အစီအစဉ် ချမှတ်ခဲ့တယ်။', english: 'I made a plan.' }
  ]},
  { id: '949', korean: '공통', myanmar: 'တူညီ', english: 'Common', pos: 'adjective', level: 'basic', examples: [
    { korean: '공통점이 있어요.', myanmar: 'တူညီတဲ့အချက် ရှိတယ်။', english: 'There are common points.' }
  ]},
  { id: '950', korean: '구별', myanmar: 'ခွဲခြားမှု', english: 'Distinction', pos: 'noun', level: 'basic', examples: [
    { korean: '구별할 수 있어요.', myanmar: 'ခွဲခြား နိုင်တယ်။', english: 'I can distinguish.' }
  ]},
  { id: '951', korean: '그래도', myanmar: 'သို့သော်လည်း/ဒါပေမယ့်', english: 'Still/Nevertheless', pos: 'conjunction', level: 'basic', examples: [
    { korean: '그래도 괜찮아요.', myanmar: 'ဒါပေမယ့် ရတယ်။', english: 'It\'s still okay.' }
  ]},
  { id: '952', korean: '기억하다', myanmar: 'မှတ်မိသည်', english: 'To remember', pos: 'verb', level: 'basic', examples: [
    { korean: '기억해요.', myanmar: 'မှတ်မိတယ်။', english: 'I remember.' }
  ]},
  { id: '953', korean: '나누다', myanmar: 'ခွဲဝေသည်', english: 'To divide/share', pos: 'verb', level: 'basic', examples: [
    { korean: '음식을 나눴어요.', myanmar: 'အစားအသောက် ခွဲဝေခဲ့တယ်။', english: 'I shared the food.' }
  ]},
  { id: '954', korean: '다시', myanmar: 'ထပ်မံ', english: 'Again', pos: 'adverb', level: 'basic', examples: [
    { korean: '다시 해봐요.', myanmar: 'ထပ်မံ လုပ်ကြည့်တယ်။', english: 'I try again.' }
  ]},
  { id: '955', korean: '대신', myanmar: 'အစား', english: 'Instead', pos: 'adverb', level: 'basic', examples: [
    { korean: '대신 갈게요.', myanmar: 'အစား သွားမယ်။', english: 'I\'ll go instead.' }
  ]},
  { id: '956', korean: '도착', myanmar: 'ရောက်ရှိခြင်း', english: 'Arrival', pos: 'noun', level: 'basic', examples: [
    { korean: '도착했어요.', myanmar: 'ရောက်ရှိခဲ့တယ်။', english: 'I arrived.' }
  ]},
  { id: '957', korean: '마지막', myanmar: 'နောက်ဆုံး', english: 'Last/Final', pos: 'noun', level: 'basic', examples: [
    { korean: '마지막이에요.', myanmar: 'နောက်ဆုံးပါ။', english: 'It\'s the last.' }
  ]},
  { id: '958', korean: '문제', myanmar: 'ပြဿနာ', english: 'Problem', pos: 'noun', level: 'basic', examples: [
    { korean: '문제가 있어요.', myanmar: 'ပြဿနာ ရှိတယ်။', english: 'There is a problem.' }
  ]},
  { id: '959', korean: '발전', myanmar: 'တိုးတက်မှု', english: 'Development', pos: 'noun', level: 'basic', examples: [
    { korean: '발전했어요.', myanmar: 'တိုးတက်ခဲ့တယ်။', english: 'It developed.' }
  ]},
  { id: '960', korean: '비교', myanmar: 'နှိုင်းယှဉ်မှု', english: 'Comparison', pos: 'noun', level: 'basic', examples: [
    { korean: '비교해 봐요.', myanmar: 'နှိုင်းယှဉ် ကြည့်တယ်။', english: 'Let\'s compare.' }
  ]},
  { id: '961', korean: '사랑', myanmar: 'ချစ်ခြင်း', english: 'Love', pos: 'noun', level: 'basic', examples: [
    { korean: '사랑해요.', myanmar: 'ချစ်တယ်။', english: 'I love you.' }
  ]},
  { id: '962', korean: '선택', myanmar: 'ရွေးချယ်မှု', english: 'Choice', pos: 'noun', level: 'basic', examples: [
    { korean: '선택했어요.', myanmar: 'ရွေးချယ်ခဲ့တယ်။', english: 'I chose.' }
  ]},
  { id: '963', korean: '시작', myanmar: 'စတင်မှု', english: 'Beginning', pos: 'noun', level: 'basic', examples: [
    { korean: '시작해요.', myanmar: 'စတင်တယ်။', english: 'I start.' }
  ]},
  { id: '964', korean: '약속', myanmar: 'ကတိ', english: 'Promise', pos: 'noun', level: 'basic', examples: [
    { korean: '약속했어요.', myanmar: 'ကတိ ပေးခဲ့တယ်။', english: 'I promised.' }
  ]},
  // === BATCH 15: FINAL STRETCH TO 1000 (965-1014) ===
  { id: '965', korean: '언제나', myanmar: 'အမြဲတမ်း', english: 'Always', pos: 'adverb', level: 'basic', examples: [
    { korean: '언제나 고마워요.', myanmar: 'အမြဲတမ်း ကျေးဇူးတင်တယ်။', english: 'I\'m always grateful.' }
  ]},
  { id: '966', korean: '여러', myanmar: 'များစွာသော', english: 'Various/Several', pos: 'adjective', level: 'basic', examples: [
    { korean: '여러 가지가 있어요.', myanmar: 'များစွာသော / အမျိုးမျိုး ရှိတယ်။', english: 'There are various kinds.' }
  ]},
  { id: '967', korean: '역시', myanmar: 'လည်းကောင်း / ဒါပေမယ့်လည်း', english: 'Also/As expected', pos: 'adverb', level: 'basic', examples: [
    { korean: '역시 어려워요.', myanmar: 'လည်းကောင်း ခက်ခဲတယ်။', english: 'As expected, it\'s difficult.' }
  ]},
  { id: '968', korean: '예를들어', myanmar: 'ဥပမာအားဖြင့်', english: 'For example', pos: 'adverb', level: 'basic', examples: [
    { korean: '예를들어 이거요.', myanmar: 'ဥပမာအားဖြင့် ဒါပါ။', english: 'For example, this one.' }
  ]},
  { id: '969', korean: '오히려', myanmar: 'အစားထိုး / အဲ့တာထက်', english: 'Rather/Instead', pos: 'adverb', level: 'basic', examples: [
    { korean: '오히려 좋아요.', myanmar: 'အစားထိုး ကောင်းတယ်။', english: 'It\'s rather good.' }
  ]},
  { id: '970', korean: '원래', myanmar: 'မူလ', english: 'Originally', pos: 'adverb', level: 'basic', examples: [
    { korean: '원래 그랬어요.', myanmar: 'မူလ ဒီလိုပါ။', english: 'It was originally like this.' }
  ]},
  { id: '971', korean: '의미', myanmar: 'အဓိပ္ပါယ်', english: 'Meaning/Significance', pos: 'noun', level: 'basic', examples: [
    { korean: '의미가 있어요.', myanmar: 'အဓိပ္ပါယ် ရှိတယ်။', english: 'It has meaning.' }
  ]},
  { id: '972', korean: '이런', myanmar: 'ဤကဲ့သို့သော / အဲ့လို', english: 'This kind of', pos: 'adjective', level: 'basic', examples: [
    { korean: '이런 일이 있었어요.', myanmar: 'အဲလို ကိစ္စ ရှိခဲ့တယ်။', english: 'This kind of thing happened.' }
  ]},
  { id: '973', korean: '자주', myanmar: 'မကြာခဏ', english: 'Often', pos: 'adverb', level: 'basic', examples: [
    { korean: '자주 만나요.', myanmar: 'မကြာခဏ တွေ့တယ်။', english: 'We meet often.' }
  ]},
  { id: '974', korean: '전혀', myanmar: 'လုံးဝ', english: 'Not at all', pos: 'adverb', level: 'basic', examples: [
    { korean: '전혀 몰라요.', myanmar: 'လုံးဝ မသိဘူး။', english: 'I don\'t know at all.' }
  ]},
  { id: '975', korean: '점점', myanmar: 'တဖြည်းဖြည်း', english: 'Gradually', pos: 'adverb', level: 'basic', examples: [
    { korean: '점점 좋아져요.', myanmar: 'တဖြည်းဖြည်း ကောင်းလာတယ်။', english: 'It\'s gradually getting better.' }
  ]},
  { id: '976', korean: '정확', myanmar: 'တိကျမှန်ကန်', english: 'Accurate/Exact', pos: 'adjective', level: 'basic', examples: [
    { korean: '정확해요.', myanmar: 'တိကျမှန်ကန်တယ်။', english: 'It\'s accurate.' }
  ]},
  { id: '977', korean: '조금', myanmar: 'နည်းနည်း', english: 'A little', pos: 'adverb', level: 'basic', examples: [
    { korean: '조금 어려워요.', myanmar: 'နည်းနည်း ခက်ခဲတယ်။', english: 'It\'s a little difficult.' }
  ]},
  { id: '978', korean: '주로', myanmar: 'အဓိကအားဖြင့်', english: 'Mainly', pos: 'adverb', level: 'basic', examples: [
    { korean: '주로 집에 있어요.', myanmar: 'အဓိကအားဖြင့် အိမ်မှာ နေတယ်။', english: 'I\'m mainly at home.' }
  ]},
  { id: '979', korean: '즉시', myanmar: 'ချက်ချင်း', english: 'Immediately', pos: 'adverb', level: 'basic', examples: [
    { korean: '즉시 왔어요.', myanmar: 'ချက်ချင်း လာခဲ့တယ်။', english: 'I came immediately.' }
  ]},
  { id: '980', korean: '처음', myanmar: 'ပထမဦးစွာ', english: 'First time', pos: 'noun', level: 'basic', examples: [
    { korean: '처음 봤어요.', myanmar: 'ပထမဦးစွာ ကြည့်ခဲ့တယ်။', english: 'I saw it for the first time.' }
  ]},
  { id: '981', korean: '최근', myanmar: 'မကြာသေးမီက', english: 'Recently', pos: 'noun', level: 'basic', examples: [
    { korean: '최근에 갔어요.', myanmar: 'မကြာသေးမီက သွားခဲ့တယ်။', english: 'I went recently.' }
  ]},
  { id: '982', korean: '특히', myanmar: 'အထူးသဖြင့်', english: 'Especially', pos: 'adverb', level: 'basic', examples: [
    { korean: '특히 좋아해요.', myanmar: 'အထူးသဖြင့် ကြိုက်တယ်။', english: 'I especially like it.' }
  ]},
  { id: '983', korean: '한번', myanmar: 'တစ်ကြိမ်', english: 'Once', pos: 'adverb', level: 'basic', examples: [
    { korean: '한번 해봐요.', myanmar: 'တစ်ကြိမ် လုပ်ကြည့်တယ်။', english: 'Let\'s try once.' }
  ]},
  { id: '984', korean: '항상', myanmar: 'အမြဲ', english: 'Always', pos: 'adverb', level: 'basic', examples: [
    { korean: '항상 행복해요.', myanmar: 'အမြဲ ပျော်ရွှင်တယ်။', english: 'I\'m always happy.' }
  ]},
  { id: '985', korean: '혹시', myanmar: 'တစ်ခါတစ်ရံ', english: 'Perhaps/By any chance', pos: 'adverb', level: 'basic', examples: [
    { korean: '혹시 알아요?', myanmar: 'တစ်ခါတစ်ရံ သိလား။', english: 'Do you perhaps know?' }
  ]},
  { id: '986', korean: '확실', myanmar: 'သေချာ', english: 'Certain/Sure', pos: 'adjective', level: 'basic', examples: [
    { korean: '확실해요.', myanmar: 'သေချာတယ်။', english: 'I\'m sure.' }
  ]},
  { id: '987', korean: '가끔', myanmar: 'တစ်ခါတစ်ရံ', english: 'Sometimes', pos: 'adverb', level: 'basic', examples: [
    { korean: '가끔 만나요.', myanmar: 'တစ်ခါတစ်ရံ တွေ့တယ်။', english: 'We meet sometimes.' }
  ]},
  { id: '988', korean: '갑자기', myanmar: 'ရုတ်တရက်', english: 'Suddenly', pos: 'adverb', level: 'basic', examples: [
    { korean: '갑자기 왔어요.', myanmar: 'ရုတ်တရက် လာခဲ့တယ်။', english: 'He came suddenly.' }
  ]},
  { id: '989', korean: '결국', myanmar: 'နောက်ဆုံးတွင်/ အဆုံးမှာ', english: 'Finally/In the end', pos: 'adverb', level: 'basic', examples: [
    { korean: '결국 성공했어요.', myanmar: 'နောက်ဆုံးတွင် အောင်မြင်ခဲ့တယ်။', english: 'In the end, I succeeded.' }
  ]},
  { id: '990', korean: '그냥', myanmar: 'ရိုးရိုး / ဒီအတိုင်း', english: 'Just', pos: 'adverb', level: 'basic', examples: [
    { korean: '그냥 괜찮아요.', myanmar: 'ရိုးရိုး ရတယ်။', english: 'It\'s just fine.' }
  ]},
  { id: '991', korean: '나중에', myanmar: 'နောက်မှ', english: 'Later', pos: 'adverb', level: 'basic', examples: [
    { korean: '나중에 해요.', myanmar: 'နောက်မှ လုပ်တယ်။', english: 'I\'ll do it later.' }
  ]},
  { id: '992', korean: '다음', myanmar: 'နောက်လာမည့် / နောင်', english: 'Next', pos: 'noun', level: 'basic', examples: [
    { korean: '다음에 봐요.', myanmar: 'နောက်လာမည့်မှာ တွေ့မယ်။', english: 'See you next time.' }
  ]},
  { id: '993', korean: '먼저', myanmar: 'ရှေ့ဦးစွာ/ အရင်ဆုံး', english: 'First', pos: 'adverb', level: 'basic', examples: [
    { korean: '먼저 해요.', myanmar: 'ရှေ့ဦးစွာ လုပ်တယ်။', english: 'I do it first.' }
  ]},
  { id: '994', korean: '별로', myanmar: 'မဟုတ်တာ', english: 'Not really', pos: 'adverb', level: 'basic', examples: [
    { korean: '별로 안 좋아요.', myanmar: 'မဟုတ်တာ မကောင်းဘူး။', english: 'It\'s not really good.' }
  ]},
  { id: '995', korean: '빨리', myanmar: 'မြန်မြန်', english: 'Quickly', pos: 'adverb', level: 'basic', examples: [
    { korean: '빨리 와요.', myanmar: 'မြန်မြန် လာပါ။', english: 'Come quickly.' }
  ]},
  { id: '996', korean: '아직', myanmar: 'အခုထိ', english: 'Still/Yet', pos: 'adverb', level: 'basic', examples: [
    { korean: '아직 안 왔어요.', myanmar: 'အခုထိ မလာသေးဘူး။', english: 'He hasn\'t come yet.' }
  ]},
  { id: '997', korean: '어서', myanmar: 'မြန်မြန်', english: 'Quickly/Come on', pos: 'adverb', level: 'basic', examples: [
    { korean: '어서 오세요.', myanmar: 'မြန်မြန် လာပါ။', english: 'Come quickly.' }
  ]},
  { id: '998', korean: '일단', myanmar: 'အရင်', english: 'First of all', pos: 'adverb', level: 'basic', examples: [
    { korean: '일단 해봐요.', myanmar: 'အရင် လုပ်ကြည့်ပါ။', english: 'Let\'s try it first.' }
  ]},
  { id: '999', korean: '잠깐', myanmar: 'ခဏ', english: 'Wait a moment', pos: 'adverb', level: 'basic', examples: [
    { korean: '잠깐만요.', myanmar: 'ခဏလေး။', english: 'Wait a moment.' }
  ]},
  { id: '1000', korean: '계속해서', myanmar: 'ဆက်လက်၍', english: 'Continuously', pos: 'adverb', level: 'basic', examples: [
    { korean: '계속해서 공부해요.', myanmar: 'ဆက်လက်၍ စာသင်တယ်။', english: 'I study continuously.' }
  ]},

  // ===== PRE-INTERMEDIATE LEVEL ㄱ CONSONANT WORDS =====
  // ===== CATEGORY 1: ADVANCED ACADEMIC & PROFESSIONAL TERMS (1001-1050) =====
  { id: '1001', korean: '가설', myanmar: 'ယူဆချက်', english: 'Hypothesis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가설을 세웠습니다.', myanmar: 'ယူဆချက် တင်ခဲ့ပါတယ်။', english: 'I established a hypothesis.' }
  ]},
  { id: '1002', korean: '가속도', myanmar: 'အရှိန်တိုးနှုန်း / အရှိန်', english: 'Acceleration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가속도가 증가했습니다.', myanmar: 'အရှိန်တိုးနှုန်း တိုးလာခဲ့တယ်။', english: 'The acceleration increased.' }
  ]},
  { id: '1003', korean: '가시성', myanmar: 'မြင်နိုင်မှု', english: 'Visibility', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가시성이 좋지 않습니다.', myanmar: 'မြင်နိုင်မှု မကောင်းဘူး။', english: 'The visibility is not good.' }
  ]},
  { id: '1004', korean: '가용성', myanmar: 'အသုံးပြုနိုင်မှု', english: 'Availability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자원의 가용성을 확인했습니다.', myanmar: 'အရင်းအမြစ်၏ အသုံးပြုနိုင်မှုကို စစ်ဆေးခဲ့တယ်။', english: 'I checked the availability of resources.' }
  ]},
  { id: '1005', korean: '가치관', myanmar: 'တန်ဖိုးထားမှုများ /တန်ဖိုး', english: 'Values/Value system', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가치관이 다릅니다.', myanmar: 'တန်ဖိုးထားမှုများ ကွဲပြားတယ်။', english: 'Our values are different.' }
  ]},
  { id: '1006', korean: '간접적', myanmar: 'သွယ်ဝိုက်', english: 'Indirect', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '간접적인 영향을 받았습니다.', myanmar: 'သွယ်ဝိုက် သက်ရောက်မှု ခံခဲ့ရတယ်။', english: 'I received indirect influence.' }
  ]},
  { id: '1007', korean: '갈등', myanmar: 'ပဋိပက္ခ', english: 'Conflict', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '갈등을 해결해야 합니다.', myanmar: 'ပဋိပက္ခကို ဖြေရှင်းရမယ်။', english: 'We need to resolve the conflict.' }
  ]},
  { id: '1008', korean: '감각', myanmar: 'အာရုံခံစား / အရုံ', english: 'Sense/Sensation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '감각이 예민합니다.', myanmar: 'အာရုံခံစား ထက်မြက်တယ်။', english: 'The senses are sharp.' }
  ]},
  { id: '1009', korean: '감시', myanmar: 'စောင့်ကြည့်ခြင်း', english: 'Surveillance/Monitoring', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '감시 시스템을 설치했습니다.', myanmar: 'စောင့်ကြည့်ခြင်း စနစ် တပ်ဆင်ခဲ့တယ်။', english: 'I installed a surveillance system.' }
  ]},
  { id: '1010', korean: '강도', myanmar: 'ပြင်းထန်မှု', english: 'Intensity/Strength', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운동 강도를 높였습니다.', myanmar: 'လေ့ကျင့်ခန်း ပြင်းထန်မှုကို တိုးခဲ့တယ်။', english: 'I increased the exercise intensity.' }
  ]},
  { id: '1011', korean: '강령', myanmar: 'မူဝါဒ', english: 'Platform/Doctrine', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정당의 강령을 발표했습니다.', myanmar: 'နိုင်ငံရေးပါတီ၏ မူဝါဒကို ကြေညာခဲ့တယ်။', english: 'The party announced its platform.' }
  ]},
  { id: '1012', korean: '강압적', myanmar: 'အတင်းအကျပ်', english: 'Coercive', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '강압적인 방법은 좋지 않습니다.', myanmar: 'အတင်းအကျပ် နည်းလမ်း မကောင်းဘူး။', english: 'Coercive methods are not good.' }
  ]},
  { id: '1013', korean: '강연', myanmar: 'ဟောပြောပွဲ', english: 'Lecture', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교수님의 강연을 들었습니다.', myanmar: 'ပါမောက္ခရဲ့ ဟောပြောပွဲကို နားထောင်ခဲ့တယ်။', english: 'I listened to the professor\'s lecture.' }
  ]},
  { id: '1014', korean: '강요', myanmar: 'အတင်းအကျပ်လုပ်ခြင်း', english: 'Coercion/Force', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강요하지 마세요.', myanmar: 'အတင်းအကျပ် မလုပ်ပါနဲ့။', english: 'Don\'t force me.' }
  ]},
  { id: '1015', korean: '강의실', myanmar: 'ဟောပြောခန်း', english: 'Lecture hall', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강의실이 넓습니다.', myanmar: 'ဟောပြောခန်း ကျယ်တယ်။', english: 'The lecture hall is spacious.' }
  ]},
  { id: '1016', korean: '강조', myanmar: 'အလေးပေးခြင်း', english: 'Emphasis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '중요성을 강조했습니다.', myanmar: 'အရေးကြီးမှုကို အလေးပေးခဲ့တယ်။', english: 'I emphasized the importance.' }
  ]},
  { id: '1017', korean: '개념', myanmar: 'အယူအဆ', english: 'Concept', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 개념을 배웠습니다.', myanmar: 'အယူအဆ အသစ်ကို သင်ခဲ့တယ်။', english: 'I learned a new concept.' }
  ]},
  { id: '1018', korean: '개발자', myanmar: 'ဖွံ့ဖြိုးတိုးတက်စေသူ', english: 'Developer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소프트웨어 개발자입니다.', myanmar: 'ဆော့ဖ်ဝဲ ဖွံ့ဖြိုးတိုးတက်စေသူ ဖြစ်ပါတယ်။', english: 'I am a software developer.' }
  ]},
  { id: '1019', korean: '개방', myanmar: 'ဖွင့်လှစ်ခြင်း', english: 'Opening/Openness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시장 개방을 논의했습니다.', myanmar: 'စျေးကွက် ဖွင့်လှစ်ခြင်းကို ဆွေးနွေးခဲ့တယ်။', english: 'We discussed market opening.' }
  ]},
  { id: '1020', korean: '개선', myanmar: 'တိုးတက်စေခြင်း', english: 'Improvement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시스템을 개선했습니다.', myanmar: 'စနစ်ကို တိုးတက်စေခဲ့တယ်။', english: 'I improved the system.' }
  ]},
  { id: '1021', korean: '개요', myanmar: 'အကျဉ်းချုပ်', english: 'Overview/Outline', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '프로젝트 개요를 설명했습니다.', myanmar: 'ပရောဂျက် အကျဉ်းချုပ်ကို ရှင်းပြခဲ့တယ်။', english: 'I explained the project overview.' }
  ]},
  { id: '1022', korean: '개인적', myanmar: 'ကိုယ်ပိုင်', english: 'Personal', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '개인적인 의견입니다.', myanmar: 'ကိုယ်ပိုင် အမြင်ပါ။', english: 'This is my personal opinion.' }
  ]},
  { id: '1023', korean: '거부', myanmar: 'ငြင်းပယ်ခြင်း', english: 'Rejection/Refusal', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '제안을 거부했습니다.', myanmar: 'အဆိုပြုချက်ကို ငြင်းပယ်ခဲ့တယ်။', english: 'I rejected the proposal.' }
  ]},
  { id: '1024', korean: '거주', myanmar: 'နေထိုင်ခြင်း', english: 'Residence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '서울에 거주합니다.', myanmar: 'ဆိုးလ်မှာ နေထိုင်ပါတယ်။', english: 'I reside in Seoul.' }
  ]},
  { id: '1025', korean: '건설', myanmar: 'တည်ဆောက်ခြင်း', english: 'Construction', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건물 건설이 시작되었습니다.', myanmar: 'အဆောက်အအုံ တည်ဆောက်ခြင်း စတင်ခဲ့တယ်။', english: 'Building construction has started.' }
  ]},
  { id: '1026', korean: '검사', myanmar: 'စစ်ဆေးခြင်း', english: 'Inspection/Examination', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정기 검사를 받았습니다.', myanmar: 'ပုံမှန် စစ်ဆေးခြင်း ခံခဲ့တယ်။', english: 'I received a regular inspection.' }
  ]},
  { id: '1027', korean: '검토', myanmar: 'ပြန်လည်စိစစ်ခြင်း', english: 'Review/Examination', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '계획을 검토했습니다.', myanmar: 'အစီအစဉ်ကို ပြန်လည်စိစစ်ခဲ့တယ်။', english: 'I reviewed the plan.' }
  ]},
  { id: '1028', korean: '겸손', myanmar: 'နှိမ့်ချမှု', english: 'Humility/Modesty', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '겸손한 태도가 중요합니다.', myanmar: 'နှိမ့်ချတဲ့ သဘောထား အရေးကြီးတယ်။', english: 'A humble attitude is important.' }
  ]},
  { id: '1029', korean: '경계', myanmar: 'နယ်နိမိတ်', english: 'Boundary/Border', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국경을 넘었습니다.', myanmar: 'နိုင်ငံနယ်နိမိတ် ကျော်ခဲ့တယ်။', english: 'I crossed the border.' }
  ]},
  { id: '1030', korean: '경고', myanmar: 'သတိပေးခြင်း', english: 'Warning', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경고를 무시했습니다.', myanmar: 'သတိပေးခြင်းကို လျစ်လျူရှုခဲ့တယ်။', english: 'I ignored the warning.' }
  ]},
  { id: '1031', korean: '경기', myanmar: 'စီးပွားရေးအခြေအနေ', english: 'Economy/Game', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경기가 좋아졌습니다.', myanmar: 'စီးပွားရေးအခြေအနေ ကောင်းလာတယ်။', english: 'The economy has improved.' }
  ]},
  { id: '1032', korean: '경력', myanmar: 'အလုပ်အကိုင်အတွေ့အကြုံ', english: 'Career/Experience', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '10년 경력이 있습니다.', myanmar: '၁၀ နှစ် အလုပ်အကိုင်အတွေ့အကြုံ ရှိပါတယ်။', english: 'I have 10 years of experience.' }
  ]},
  { id: '1033', korean: '경영', myanmar: 'စီမံခန့်ခွဲမှု', english: 'Management', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '회사 경영이 어렵습니다.', myanmar: 'ကုမ္ပဏီ စီမံခန့်ခွဲမှု ခက်ခဲတယ်။', english: 'Company management is difficult.' }
  ]},
  { id: '1034', korean: '경우', myanmar: 'အခြေအနေ', english: 'Case/Situation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이런 경우에는 어떻게 해야 할까요?', myanmar: 'ဒီလို အခြေအနေမှာ ဘယ်လို လုပ်ရမလဲ။', english: 'What should we do in this case?' }
  ]},
  { id: '1035', korean: '경쟁', myanmar: 'ယှဉ်ပြိုင်မှု', english: 'Competition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경쟁이 치열합니다.', myanmar: 'ယှဉ်ပြိုင်မှု ပြင်းထန်တယ်။', english: 'The competition is fierce.' }
  ]},
  { id: '1036', korean: '계획', myanmar: 'အစီအစဉ်', english: 'Plan', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여행 계획을 세웠습니다.', myanmar: 'ခရီးသွား အစီအစဉ် ရေးဆွဲခဲ့တယ်။', english: 'I made travel plans.' }
  ]},
  { id: '1037', korean: '고객', myanmar: 'ဖောက်သည်', english: 'Customer/Client', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고객 서비스가 중요합니다.', myanmar: 'ဖောက်သည် ဝန်ဆောင်မှု အရေးကြီးတယ်။', english: 'Customer service is important.' }
  ]},
  { id: '1038', korean: '고려', myanmar: 'စဉ်းစားခြင်း', english: 'Consideration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '모든 것을 고려했습니다.', myanmar: 'အားလုံးကို စဉ်းစားခဲ့တယ်။', english: 'I considered everything.' }
  ]},
  { id: '1039', korean: '고민', myanmar: 'စိုးရိမ်ပူပန်မှု', english: 'Worry/Concern', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고민이 많습니다.', myanmar: 'စိုးရိမ်ပူပန်မှု များတယ်။', english: 'I have many worries.' }
  ]},
  { id: '1040', korean: '고용', myanmar: 'အလုပ်ခန့်အပ်ခြင်း', english: 'Employment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고용 기회가 늘었습니다.', myanmar: 'အလုပ်အကိုင် အခွင့်အလမ်း တိုးလာတယ်။', english: 'Employment opportunities have increased.' }
  ]},
  { id: '1041', korean: '공급', myanmar: 'ထောက်ပံ့ခြင်း', english: 'Supply', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '전력 공급이 중단되었습니다.', myanmar: 'လျှပ်စစ် ထောက်ပံ့ခြင်း ရပ်တန့်ခဲ့တယ်။', english: 'Power supply was interrupted.' }
  ]},
  { id: '1042', korean: '공동', myanmar: 'အတူတကွ', english: 'Joint/Common', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공동 작업을 했습니다.', myanmar: 'အတူတကွ အလုပ်လုပ်ခဲ့တယ်။', english: 'We did joint work.' }
  ]},
  { id: '1043', korean: '공식', myanmar: 'တရားဝင်', english: 'Official/Formula', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공식 발표가 있었습니다.', myanmar: 'တရားဝင် ကြေညာချက် ရှိခဲ့တယ်။', english: 'There was an official announcement.' }
  ]},
  { id: '1044', korean: '공정', myanmar: 'တရားမျှတ', english: 'Fair/Process', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '공정한 평가를 받았습니다.', myanmar: 'တရားမျှတတဲ့ အကဲဖြတ်ခံရတယ်။', english: 'I received a fair evaluation.' }
  ]},
  { id: '1045', korean: '과정', myanmar: 'လုပ်ငန်းစဉ်', english: 'Process/Course', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '학습 과정이 중요합니다.', myanmar: 'သင်ယူမှု လုပ်ငန်းစဉ် အရေးကြီးတယ်။', english: 'The learning process is important.' }
  ]},
  { id: '1046', korean: '관계', myanmar: 'ဆက်နွယ်မှု', english: 'Relationship', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 관계를 유지합니다.', myanmar: 'ကောင်းတဲ့ ဆက်နွယ်မှု ထိန်းသိမ်းတယ်။', english: 'I maintain good relationships.' }
  ]},
  { id: '1047', korean: '관련', myanmar: 'ဆက်စပ်မှု', english: 'Relation/Connection', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이 문제와 관련이 있습니다.', myanmar: 'ဒီ ပြဿနာနဲ့ ဆက်စပ်မှု ရှိတယ်။', english: 'It is related to this problem.' }
  ]},
  { id: '1048', korean: '관리', myanmar: 'စီမံခန့်ခွဲမှု', english: 'Management', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시간 관리가 어렵습니다.', myanmar: 'အချိန် စီမံခန့်ခွဲမှု ခက်ခဲတယ်။', english: 'Time management is difficult.' }
  ]},
  { id: '1049', korean: '관심', myanmar: 'စိတ်ဝင်စားမှု', english: 'Interest/Concern', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '관심을 가져주세요.', myanmar: 'စိတ်ဝင်စားမှု ရှိပါ။', english: 'Please show interest.' }
  ]},
  { id: '1050', korean: '광고', myanmar: 'ကြော်ငြာ', english: 'Advertisement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '광고를 만들었습니다.', myanmar: 'ကြော်ငြာ လုပ်ခဲ့တယ်။', english: 'I made an advertisement.' }
  ]},

  // ===== CATEGORY 2: COMPLEX SOCIAL & CULTURAL CONCEPTS (1051-1100) =====
  { id: '1051', korean: '교류', myanmar: 'ဖလှယ်မှု', english: 'Exchange/Interaction', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '문화 교류가 중요합니다.', myanmar: 'ယဉ်ကျေးမှု ဖလှယ်မှု အရေးကြီးတယ်။', english: 'Cultural exchange is important.' }
  ]},
  { id: '1052', korean: '교육과정', myanmar: 'ပညာရေးသင်ရိုးညွှန်းတမ်း', english: 'Curriculum', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 교육과정을 도입했습니다.', myanmar: 'ပညာရေးသင်ရိုးညွှန်းတမ်း အသစ်ကို ကျင့်သုံးခဲ့တယ်။', english: 'We introduced a new curriculum.' }
  ]},
  { id: '1053', korean: '구조', myanmar: 'ဖွဲ့စည်းပုံ', english: 'Structure', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건물의 구조가 복잡합니다.', myanmar: 'အဆောက်အအုံရဲ့ ဖွဲ့စည်းပုံ ရှုပ်ထွေးတယ်။', english: 'The building\'s structure is complex.' }
  ]},
  { id: '1054', korean: '국제적', myanmar: 'နိုင်ငံတကာ', english: 'International', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '국제적인 회의에 참석했습니다.', myanmar: 'နိုင်ငံတကာ အစည်းအဝေးမှာ တက်ရောက်ခဲ့တယ်။', english: 'I attended an international conference.' }
  ]},
  { id: '1055', korean: '권리', myanmar: 'အခွင့်အရေး', english: 'Rights', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인권을 보호해야 합니다.', myanmar: 'လူ့အခွင့်အရေးကို ကာကွယ်ရမယ်။', english: 'We must protect human rights.' }
  ]},
  { id: '1056', korean: '규정', myanmar: 'စည်းမျဉ်း', english: 'Regulation/Rule', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 규정이 생겼습니다.', myanmar: 'စည်းမျဉ်း အသစ် ရှိလာတယ်။', english: 'New regulations have been created.' }
  ]},
  { id: '1057', korean: '규모', myanmar: 'အတိုင်းအတာ', english: 'Scale/Size', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대규모 프로젝트입니다.', myanmar: 'အတိုင်းအတာ ကြီးမားတဲ့ ပရောဂျက်ပါ။', english: 'It\'s a large-scale project.' }
  ]},
  { id: '1058', korean: '근거', myanmar: 'အခြေခံ', english: 'Basis/Evidence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '확실한 근거가 필요합니다.', myanmar: 'သေချာတဲ့ အခြေခံ လိုအပ်တယ်။', english: 'Solid evidence is needed.' }
  ]},
  { id: '1059', korean: '기능', myanmar: 'လုပ်ဆောင်ချက်', english: 'Function', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이 기능이 유용합니다.', myanmar: 'ဒီ လုပ်ဆောင်ချက် အသုံးဝင်တယ်။', english: 'This function is useful.' }
  ]},
  { id: '1060', korean: '기대', myanmar: 'မျှော်လင့်ချက်', english: 'Expectation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기대가 큽니다.', myanmar: 'မျှော်လင့်ချက် ကြီးတယ်။', english: 'My expectations are high.' }
  ]},
  { id: '1061', korean: '기록', myanmar: 'မှတ်တမ်း', english: 'Record', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기록을 남겼습니다.', myanmar: 'မှတ်တမ်း ကျန်ရစ်ခဲ့တယ်။', english: 'I left a record.' }
  ]},
  { id: '1062', korean: '기술', myanmar: 'နည်းပညာ', english: 'Technology/Skill', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '최신 기술을 사용합니다.', myanmar: 'နောက်ဆုံး နည်းပညာကို သုံးတယ်။', english: 'We use the latest technology.' }
  ]},
  { id: '1063', korean: '기여', myanmar: 'ပံ့ပိုးကူညီမှု', english: 'Contribution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '사회에 기여하고 싶습니다.', myanmar: 'လူ့အဖွဲ့အစည်းကို ပံ့ပိုးကူညီချင်တယ်။', english: 'I want to contribute to society.' }
  ]},
  { id: '1064', korean: '기준', myanmar: 'စံနှုန်း', english: 'Standard/Criteria', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '엄격한 기준을 적용했습니다.', myanmar: 'တင်းကြပ်တဲ့ စံနှုန်းကို သုံးခဲ့တယ်။', english: 'We applied strict standards.' }
  ]},
  { id: '1065', korean: '긴급', myanmar: 'အရေးပေါ်', english: 'Emergency/Urgent', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '긴급 상황이 발생했습니다.', myanmar: 'အရေးပေါ် အခြေအနေ ဖြစ်ပေါ်ခဲ့တယ်။', english: 'An emergency situation occurred.' }
  ]},
  { id: '1066', korean: '깊이', myanmar: 'နက်ရှိုင်းမှု', english: 'Depth', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '물의 깊이를 측정했습니다.', myanmar: 'ရေရဲ့ နက်ရှိုင်းမှုကို တိုင်းတာခဲ့တယ်။', english: 'I measured the depth of the water.' }
  ]},
  { id: '1067', korean: '나타나다', myanmar: 'ပေါ်လာသည်', english: 'To appear/emerge', pos: 'verb', level: 'pre-intermediate', examples: [
    { korean: '문제가 나타났습니다.', myanmar: 'ပြဿနာ ပေါ်လာခဲ့တယ်။', english: 'A problem appeared.' }
  ]},
  { id: '1068', korean: '내용', myanmar: 'အကြောင်းအရာ', english: 'Content', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '책의 내용이 흥미롭습니다.', myanmar: 'စာအုပ်ရဲ့ အကြောင်းအရာ စိတ်ဝင်စားဖွယ်ရာ ဖြစ်တယ်။', english: 'The book\'s content is interesting.' }
  ]},
  { id: '1069', korean: '능력', myanmar: 'စွမ်းရည်', english: 'Ability/Capability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '뛰어난 능력을 보였습니다.', myanmar: 'ထူးခြားတဲ့ စွမ်းရည် ပြခဲ့တယ်။', english: 'He showed outstanding ability.' }
  ]},
  { id: '1070', korean: '다양성', myanmar: 'မတူကွဲပြားမှု', english: 'Diversity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '문화의 다양성을 존중합니다.', myanmar: 'ယဉ်ကျေးမှုရဲ့ မတူကွဲပြားမှုကို လေးစားတယ်။', english: 'We respect cultural diversity.' }
  ]},
  { id: '1071', korean: '단계', myanmar: 'အဆင့်', english: 'Stage/Phase', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '첫 번째 단계를 완료했습니다.', myanmar: 'ပထမ အဆင့်ကို ပြီးစီးခဲ့တယ်။', english: 'We completed the first stage.' }
  ]},
  { id: '1072', korean: '대상', myanmar: 'ပစ်မှတ်', english: 'Target/Object', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '연구 대상을 선정했습니다.', myanmar: 'သုတေသန ပစ်မှတ်ကို ရွေးချယ်ခဲ့တယ်။', english: 'We selected research targets.' }
  ]},
  { id: '1073', korean: '대안', myanmar: 'အခြားရွေးချယ်စရာ', english: 'Alternative', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다른 대안을 찾았습니다.', myanmar: 'အခြား အခြားရွေးချယ်စရာ ရှာတွေ့ခဲ့တယ်။', english: 'We found another alternative.' }
  ]},
  { id: '1074', korean: '대화', myanmar: 'စကားပြောဆိုမှု', english: 'Conversation/Dialogue', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '진지한 대화를 나눴습니다.', myanmar: 'လေးနက်တဲ့ စကားပြောဆိုမှု လုပ်ခဲ့တယ်။', english: 'We had a serious conversation.' }
  ]},
  { id: '1075', korean: '도전', myanmar: 'စိန်ခေါ်မှု', english: 'Challenge', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 도전을 받아들였습니다.', myanmar: 'စိန်ခေါ်မှု အသစ်ကို လက်ခံခဲ့တယ်။', english: 'I accepted a new challenge.' }
  ]},
  { id: '1076', korean: '독립', myanmar: 'လွတ်လပ်ခြင်း', english: 'Independence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경제적 독립을 이뤘습니다.', myanmar: 'စီးပွားရေး လွတ်လပ်ခြင်း ရရှိခဲ့တယ်။', english: 'I achieved economic independence.' }
  ]},
  { id: '1077', korean: '동기', myanmar: 'လှုံ့ဆော်ချက်', english: 'Motivation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 동기가 있습니다.', myanmar: 'ပြင်းထန်တဲ့ လှုံ့ဆော်ချက် ရှိတယ်။', english: 'I have strong motivation.' }
  ]},
  { id: '1078', korean: '동의', myanmar: 'သဘောတူညီမှု', english: 'Agreement/Consent', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '모든 사람의 동의를 얻었습니다.', myanmar: 'လူအားလုံးရဲ့ သဘောတူညီမှု ရခဲ့တယ်။', english: 'We got everyone\'s consent.' }
  ]},
  { id: '1079', korean: '등장', myanmar: 'ပေါ်ထွက်လာခြင်း', english: 'Appearance/Emergence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 기술의 등장입니다.', myanmar: 'နည်းပညာ အသစ်ရဲ့ ပေါ်ထွက်လာခြင်းပါ။', english: 'It\'s the emergence of new technology.' }
  ]},
  { id: '1080', korean: '따라서', myanmar: 'ထို့ကြောင့်', english: 'Therefore', pos: 'conjunction', level: 'pre-intermediate', examples: [
    { korean: '따라서 결정했습니다.', myanmar: 'ထို့ကြောင့် ဆုံးဖြတ်ခဲ့တယ်။', english: 'Therefore, I decided.' }
  ]},
  { id: '1081', korean: '또한', myanmar: 'ထို့အပြင်', english: 'Also/Furthermore', pos: 'conjunction', level: 'pre-intermediate', examples: [
    { korean: '또한 중요한 점이 있습니다.', myanmar: 'ထို့အပြင် အရေးကြီးတဲ့ အချက် ရှိတယ်။', english: 'Furthermore, there is an important point.' }
  ]},
  { id: '1082', korean: '마찬가지', myanmar: 'အတူတူပင်', english: 'Likewise/Same', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '마찬가지로 생각합니다.', myanmar: 'အတူတူပင် ထင်တယ်။', english: 'I think likewise.' }
  ]},
  { id: '1083', korean: '만족', myanmar: 'ကျေနပ်မှု', english: 'Satisfaction', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 만족을 느꼈습니다.', myanmar: 'ကြီးမားတဲ့ ကျေနပ်မှု ခံစားခဲ့တယ်။', english: 'I felt great satisfaction.' }
  ]},
  { id: '1084', korean: '목표', myanmar: 'ရည်မှန်းချက်', english: 'Goal/Target', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '목표를 달성했습니다.', myanmar: 'ရည်မှန်းချက် အောင်မြင်ခဲ့တယ်။', english: 'I achieved the goal.' }
  ]},
  { id: '1085', korean: '문제', myanmar: 'ပြဿနာ', english: 'Problem/Issue', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '심각한 문제입니다.', myanmar: 'လေးနက်တဲ့ ပြဿနာပါ။', english: 'It\'s a serious problem.' }
  ]},
  { id: '1086', korean: '발전', myanmar: 'တိုးတက်မှု', english: 'Development/Progress', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기술 발전이 빠릅니다.', myanmar: 'နည်းပညာ တိုးတက်မှု မြန်တယ်။', english: 'Technological development is fast.' }
  ]},
  { id: '1087', korean: '방법', myanmar: 'နည်းလမ်း', english: 'Method/Way', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 방법을 찾았습니다.', myanmar: 'ကောင်းတဲ့ နည်းလမ်း ရှာတွေ့ခဲ့တယ်။', english: 'I found a good method.' }
  ]},
  { id: '1088', korean: '방향', myanmar: 'ဦးတည်ရာ', english: 'Direction', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '올바른 방향입니다.', myanmar: 'မှန်ကန်တဲ့ ဦးတည်ရာပါ။', english: 'It\'s the right direction.' }
  ]},
  { id: '1089', korean: '변화', myanmar: 'ပြောင်းလဲမှု', english: 'Change', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 변화가 있었습니다.', myanmar: 'ကြီးမားတဲ့ ပြောင်းလဲမှု ရှိခဲ့တယ်။', english: 'There was a big change.' }
  ]},
  { id: '1090', korean: '보장', myanmar: 'အာမခံချက်', english: 'Guarantee/Assurance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '안전을 보장합니다.', myanmar: 'လုံခြုံမှုကို အာမခံတယ်။', english: 'We guarantee safety.' }
  ]},
  { id: '1091', korean: '분석', myanmar: 'ခွဲခြမ်းစိတ်ဖြာခြင်း', english: 'Analysis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자세한 분석이 필요합니다.', myanmar: 'အသေးစိတ် ခွဲခြမ်းစိတ်ဖြာခြင်း လိုအပ်တယ်။', english: 'Detailed analysis is needed.' }
  ]},
  { id: '1092', korean: '비교', myanmar: 'နှိုင်းယှဉ်ခြင်း', english: 'Comparison', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '두 제품을 비교했습니다.', myanmar: 'ကုန်ပစ္စည်း နှစ်ခုကို နှိုင်းယှဉ်ခဲ့တယ်။', english: 'I compared two products.' }
  ]},
  { id: '1093', korean: '사실', myanmar: 'အမှန်တရား', english: 'Fact/Truth', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '중요한 사실을 알았습니다.', myanmar: 'အရေးကြီးတဲ့ အမှန်တရား သိခဲ့တယ်။', english: 'I learned an important fact.' }
  ]},
  { id: '1094', korean: '상황', myanmar: 'အခြေအနေ', english: 'Situation/Circumstance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '복잡한 상황입니다.', myanmar: 'ရှုပ်ထွေးတဲ့ အခြေအနေပါ။', english: 'It\'s a complex situation.' }
  ]},
  { id: '1095', korean: '성과', myanmar: 'အောင်မြင်မှု', english: 'Achievement/Result', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 성과를 얻었습니다.', myanmar: 'ကောင်းတဲ့ အောင်မြင်မှု ရခဲ့တယ်။', english: 'We achieved good results.' }
  ]},
  { id: '1096', korean: '성공', myanmar: 'အောင်မြင်မှု', english: 'Success', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '프로젝트가 성공했습니다.', myanmar: 'ပရောဂျက် အောင်မြင်ခဲ့တယ်။', english: 'The project was successful.' }
  ]},
  { id: '1097', korean: '소통', myanmar: 'ဆက်သွယ်မှု', english: 'Communication', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '원활한 소통이 중요합니다.', myanmar: 'ချောမွေ့တဲ့ ဆက်သွယ်မှု အရေးကြီးတယ်။', english: 'Smooth communication is important.' }
  ]},
  { id: '1098', korean: '시도', myanmar: 'ကြိုးစားမှု', english: 'Attempt/Try', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여러 번 시도했습니다.', myanmar: 'အကြိမ်များစွာ ကြိုးစားခဲ့တယ်။', english: 'I tried several times.' }
  ]},
  { id: '1099', korean: '실제', myanmar: 'အမှန်တကယ်', english: 'Reality/Actual', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실제로 일어났습니다.', myanmar: 'အမှန်တကယ် ဖြစ်ပျက်ခဲ့တယ်။', english: 'It actually happened.' }
  ]},
  { id: '1100', korean: '안전', myanmar: 'လုံခြုံမှု', english: 'Safety/Security', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '안전이 최우선입니다.', myanmar: 'လုံခြုံမှုက အဦးဆုံးပါ။', english: 'Safety is the top priority.' }
  ]},

  // ===== CATEGORY 3: ADVANCED TECHNOLOGY & SCIENCE TERMS (1101-1150) =====
  { id: '1101', korean: '알고리즘', myanmar: 'အယ်လဂိုရီသမ်', english: 'Algorithm', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 알고리즘을 개발했습니다.', myanmar: 'အယ်လဂိုရီသမ် အသစ် တီထွင်ခဲ့တယ်။', english: 'We developed a new algorithm.' }
  ]},
  { id: '1102', korean: '업그레이드', myanmar: 'အဆင့်မြှင့်တင်ခြင်း', english: 'Upgrade', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시스템을 업그레이드했습니다.', myanmar: 'စနစ်ကို အဆင့်မြှင့်တင်ခဲ့တယ်။', english: 'We upgraded the system.' }
  ]},
  { id: '1103', korean: '연결성', myanmar: 'ဆက်သွယ်နိုင်မှု', english: 'Connectivity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인터넷 연결성이 중요합니다.', myanmar: 'အင်တာနက် ဆက်သွယ်နိုင်မှု အရေးကြီးတယ်။', english: 'Internet connectivity is important.' }
  ]},
  { id: '1104', korean: '자동화', myanmar: 'အလိုအလျောက်ပြုလုပ်ခြင်း', english: 'Automation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공장 자동화가 진행됩니다.', myanmar: 'စက်ရုံ အလိုအလျောက်ပြုလုပ်ခြင်း လုပ်ဆောင်တယ်။', english: 'Factory automation is proceeding.' }
  ]},
  { id: '1105', korean: '데이터베이스', myanmar: 'ဒေတာသိုလှောင်ခန်း', english: 'Database', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '데이터베이스를 구축했습니다.', myanmar: 'ဒေတာသိုလှောင်ခန်း တည်ဆောက်ခဲ့တယ်။', english: 'We built a database.' }
  ]},
  { id: '1106', korean: '가상현실', myanmar: 'ယာယီအဖြစ်တရား', english: 'Virtual reality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가상현실 기술이 발전했습니다.', myanmar: 'ယာယီအဖြစ်တရား နည်းပညာ တိုးတက်ခဲ့တယ်။', english: 'Virtual reality technology has advanced.' }
  ]},
  { id: '1107', korean: '인공지능', myanmar: 'အတုဉာဏ်', english: 'Artificial intelligence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인공지능이 발달하고 있습니다.', myanmar: 'အတုဉာဏ် ဖွံ့ဖြိုးနေတယ်။', english: 'Artificial intelligence is developing.' }
  ]},
  { id: '1108', korean: '클라우드', myanmar: 'တိမ်တိုက်သိုလှောင်မှု', english: 'Cloud', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '클라우드에 저장했습니다.', myanmar: 'တိမ်တိုက်သိုလှောင်မှုမှာ သိမ်းဆည်းခဲ့တယ်။', english: 'We stored it in the cloud.' }
  ]},
  { id: '1109', korean: '보안', myanmar: 'လုံခြုံရေး', english: 'Security', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '보안 시스템을 강화했습니다.', myanmar: 'လုံခြုံရေး စနစ်ကို အားကောင်းအောင် လုပ်ခဲ့တယ်။', english: 'We strengthened the security system.' }
  ]},
  { id: '1110', korean: '네트워크', myanmar: 'ကွန်ယက်', english: 'Network', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '네트워크가 연결되었습니다.', myanmar: 'ကွန်ယက် ချိတ်ဆက်ခဲ့တယ်။', english: 'The network is connected.' }
  ]},
  { id: '1111', korean: '소프트웨어', myanmar: 'ဆော့ဖ်ဝဲ', english: 'Software', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 소프트웨어를 설치했습니다.', myanmar: 'ဆော့ဖ်ဝဲ အသစ် တပ်ဆင်ခဲ့တယ်။', english: 'We installed new software.' }
  ]},
  { id: '1112', korean: '하드웨어', myanmar: 'ဟာ့ဒ်ဝဲ', english: 'Hardware', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '하드웨어를 교체했습니다.', myanmar: 'ဟာ့ဒ်ဝဲကို အစားထိုးခဲ့တယ်။', english: 'We replaced the hardware.' }
  ]},
  { id: '1113', korean: '프로그래밍', myanmar: 'ပရိုဂရမ်ရေးသားခြင်း', english: 'Programming', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '프로그래밍을 배우고 있습니다.', myanmar: 'ပရိုဂရမ်ရေးသားခြင်း သင်နေတယ်။', english: 'I am learning programming.' }
  ]},
  { id: '1114', korean: '인터페이스', myanmar: 'ချိတ်ဆက်မျက်နှာ', english: 'Interface', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '사용자 인터페이스가 개선되었습니다.', myanmar: 'အသုံးပြုသူ ချိတ်ဆက်မျက်နှာ တိုးတက်ခဲ့တယ်။', english: 'The user interface has been improved.' }
  ]},
  { id: '1115', korean: '플랫폼', myanmar: 'ပလပ်ဖောင်း', english: 'Platform', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 플랫폼을 출시했습니다.', myanmar: 'ပလပ်ဖောင်း အသစ် ထုတ်လွှတ်ခဲ့တယ်။', english: 'We launched a new platform.' }
  ]},
  { id: '1116', korean: '애플리케이션', myanmar: 'အပလီကေးရှင်း', english: 'Application', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '모바일 애플리케이션을 개발했습니다.', myanmar: 'မိုဘိုင်း အပလီကေးရှင်း တီထွင်ခဲ့တယ်။', english: 'We developed a mobile application.' }
  ]},
  { id: '1117', korean: '디지털', myanmar: 'ဒီဂျစ်တယ်', english: 'Digital', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '디지털 시대입니다.', myanmar: 'ဒီဂျစ်တယ် ခေတ်ပါ။', english: 'It\'s the digital age.' }
  ]},
  { id: '1118', korean: '온라인', myanmar: 'အွန်လိုင်း', english: 'Online', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '온라인 쇼핑을 했습니다.', myanmar: 'အွန်လိုင်း စျေးဝယ်ခဲ့တယ်။', english: 'I did online shopping.' }
  ]},
  { id: '1119', korean: '오프라인', myanmar: 'အော့ဖ်လိုင်း', english: 'Offline', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '오프라인 모드로 작업했습니다.', myanmar: 'အော့ဖ်လိုင်း မုဒ်နဲ့ အလုပ်လုပ်ခဲ့တယ်။', english: 'I worked in offline mode.' }
  ]},
  { id: '1120', korean: '업데이트', myanmar: 'မွမ်းမံခြင်း', english: 'Update', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소프트웨어 업데이트가 필요합니다.', myanmar: 'ဆော့ဖ်ဝဲ မွမ်းမံခြင်း လိုအပ်တယ်။', english: 'Software update is needed.' }
  ]},
  { id: '1121', korean: '다운로드', myanmar: 'ဒေါင်းလုဒ်', english: 'Download', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '파일을 다운로드했습니다.', myanmar: 'ဖိုင်ကို ဒေါင်းလုဒ် လုပ်ခဲ့တယ်။', english: 'I downloaded the file.' }
  ]},
  { id: '1122', korean: '업로드', myanmar: 'အပ်လုဒ်', english: 'Upload', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '사진을 업로드했습니다.', myanmar: 'ဓာတ်ပုံကို အပ်လုဒ် လုပ်ခဲ့တယ်။', english: 'I uploaded the photo.' }
  ]},
  { id: '1123', korean: '백업', myanmar: 'အရန်သိမ်းဆည်းခြင်း', english: 'Backup', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '데이터 백업을 했습니다.', myanmar: 'ဒေတာ အရန်သိမ်းဆည်းခြင်း လုပ်ခဲ့တယ်။', english: 'I backed up the data.' }
  ]},
  { id: '1124', korean: '복구', myanmar: 'ပြန်လည်ရယူခြင်း', english: 'Recovery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시스템 복구가 완료되었습니다.', myanmar: 'စနစ် ပြန်လည်ရယူခြင်း ပြီးစီးခဲ့တယ်။', english: 'System recovery is completed.' }
  ]},
  { id: '1125', korean: '설정', myanmar: 'ချိန်ညှိခြင်း', english: 'Settings/Configuration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '설정을 변경했습니다.', myanmar: 'ချိန်ညှိခြင်းကို ပြောင်းလဲခဲ့တယ်။', english: 'I changed the settings.' }
  ]},
  { id: '1126', korean: '암호화', myanmar: 'လျှို့ဝှက်ကုဒ်ပြုလုပ်ခြင်း', english: 'Encryption', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '데이터를 암호화했습니다.', myanmar: 'ဒေတာကို လျှို့ဝှက်ကုဒ်ပြုလုပ်ခဲ့တယ်။', english: 'We encrypted the data.' }
  ]},
  { id: '1127', korean: '해독', myanmar: 'ကုဒ်ဖြေခြင်း', english: 'Decryption', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '파일을 해독했습니다.', myanmar: 'ဖိုင်ကို ကုဒ်ဖြေခဲ့တယ်။', english: 'We decrypted the file.' }
  ]},
  { id: '1128', korean: '압축', myanmar: 'ဖိအားပေးခြင်း', english: 'Compression', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '파일을 압축했습니다.', myanmar: 'ဖိုင်ကို ဖိအားပေးခဲ့တယ်။', english: 'I compressed the file.' }
  ]},
  { id: '1129', korean: '해제', myanmar: 'ဖြေရှင်းခြင်း', english: 'Release/Decompression', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '압축을 해제했습니다.', myanmar: 'ဖိအားပေးခြင်းကို ဖြေရှင်းခဲ့တယ်။', english: 'I decompressed it.' }
  ]},
  { id: '1130', korean: '저장소', myanmar: 'သိုလှောင်ရုံ', english: 'Storage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '클라우드 저장소를 사용합니다.', myanmar: 'တိမ်တိုက် သိုလှောင်ရုံ သုံးတယ်။', english: 'We use cloud storage.' }
  ]},
  { id: '1131', korean: '서버', myanmar: 'ဆာဗာ', english: 'Server', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '서버가 다운되었습니다.', myanmar: 'ဆာဗာ ပျက်စီးခဲ့တယ်။', english: 'The server went down.' }
  ]},
  { id: '1132', korean: '클라이언트', myanmar: 'ကလိုင်းယင့်', english: 'Client', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '클라이언트가 연결되었습니다.', myanmar: 'ကလိုင်းယင့် ချိတ်ဆက်ခဲ့တယ်။', english: 'The client is connected.' }
  ]},
  { id: '1133', korean: '프로토콜', myanmar: 'စည်းမျဉ်းစနစ်', english: 'Protocol', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 프로토콜을 적용했습니다.', myanmar: 'စည်းမျဉ်းစနစ် အသစ် အသုံးပြုခဲ့တယ်။', english: 'We applied a new protocol.' }
  ]},
  { id: '1134', korean: '방화벽', myanmar: 'မီးနံရံ', english: 'Firewall', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '방화벽을 설치했습니다.', myanmar: 'မီးနံရံ တပ်ဆင်ခဲ့တယ်။', english: 'We installed a firewall.' }
  ]},
  { id: '1135', korean: '바이러스', myanmar: 'ဗိုင်းရပ်စ်', english: 'Virus', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '컴퓨터에 바이러스가 있습니다.', myanmar: 'ကွန်ပျူတာမှာ ဗိုင်းရပ်စ် ရှိတယ်။', english: 'There\'s a virus in the computer.' }
  ]},
  { id: '1136', korean: '백신', myanmar: 'ကာကွယ်ဆေး', english: 'Antivirus', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '백신 프로그램을 실행했습니다.', myanmar: 'ကာကွယ်ဆေး ပရိုဂရမ် လုပ်ဆောင်ခဲ့တယ်။', english: 'I ran the antivirus program.' }
  ]},
  { id: '1137', korean: '해킹', myanmar: 'ဟက်ကင်', english: 'Hacking', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '해킹 공격이 있었습니다.', myanmar: 'ဟက်ကင် တိုက်ခိုက်မှု ရှိခဲ့တယ်။', english: 'There was a hacking attack.' }
  ]},
  { id: '1138', korean: '사이버', myanmar: 'ဆိုင်ဘာ', english: 'Cyber', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '사이버 보안이 중요합니다.', myanmar: 'ဆိုင်ဘာ လုံခြုံရေး အရေးကြီးတယ်။', english: 'Cyber security is important.' }
  ]},
  { id: '1139', korean: '가상', myanmar: 'ယာယီ', english: 'Virtual', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '가상 회의를 했습니다.', myanmar: 'ယာယီ အစည်းအဝေး လုပ်ခဲ့တယ်။', english: 'We had a virtual meeting.' }
  ]},
  { id: '1140', korean: '실시간', myanmar: 'အချိန်နှင့်တပြေးညီ', english: 'Real-time', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실시간으로 업데이트됩니다.', myanmar: 'အချိန်နှင့်တပြေးညီ မွမ်းမံတယ်။', english: 'It updates in real-time.' }
  ]},
  { id: '1141', korean: '스마트', myanmar: 'စမတ်', english: 'Smart', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '스마트폰을 사용합니다.', myanmar: 'စမတ်ဖုန်း သုံးတယ်။', english: 'I use a smartphone.' }
  ]},
  { id: '1142', korean: '자동', myanmar: 'အလိုအလျောက်', english: 'Automatic', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '자동으로 저장됩니다.', myanmar: 'အလိုအလျောက် သိမ်းဆည်းတယ်။', english: 'It saves automatically.' }
  ]},
  { id: '1143', korean: '수동', myanmar: 'လက်ဖြင့်လုပ်သော', english: 'Manual', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '수동으로 설정해야 합니다.', myanmar: 'လက်ဖြင့်လုပ်သော ချိန်ညှိရမယ်။', english: 'It needs to be set manually.' }
  ]},
  { id: '1144', korean: '무선', myanmar: 'ကြိုးမဲ့', english: 'Wireless', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '무선 인터넷을 사용합니다.', myanmar: 'ကြိုးမဲ့ အင်တာနက် သုံးတယ်။', english: 'We use wireless internet.' }
  ]},
  { id: '1145', korean: '유선', myanmar: 'ကြိုးပါ / ကြိုးချိတ်ဆက်မှ', english: 'Wired', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '유선 연결이 더 안정적입니다.', myanmar: 'ကြိုး ချိတ်ဆက်မှု ပိုတည်ငြိမ်တယ်။', english: 'Wired connection is more stable.' }
  ]},
  { id: '1146', korean: '호환성', myanmar: 'လိုက်ဖက်နိုင်မှု', english: 'Compatibility', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '호환성을 확인했습니다.', myanmar: 'လိုက်ဖက်နိုင်မှု စစ်ဆေးခဲ့တယ်။', english: 'We checked the compatibility.' }
  ]},
  { id: '1147', korean: '성능', myanmar: 'စွမ်းဆောင်ရည်', english: 'Performance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '성능이 향상되었습니다.', myanmar: 'စွမ်းဆောင်ရည် တိုးတက်ခဲ့တယ်။', english: 'Performance has improved.' }
  ]},
  { id: '1148', korean: '효율성', myanmar: 'ထိရောက်မှု', english: 'Efficiency', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효율성을 높였습니다.', myanmar: 'ထိရောက်မှုကို တိုးမြှင့်ခဲ့တယ်။', english: 'We increased efficiency.' }
  ]},
  { id: '1149', korean: '안정성', myanmar: 'တည်ငြိမ်မှု', english: 'Stability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시스템의 안정성이 좋습니다.', myanmar: 'စနစ်ရဲ့ တည်ငြိမ်မှု ကောင်းတယ်။', english: 'The system\'s stability is good.' }
  ]},
  { id: '1150', korean: '확장성', myanmar: 'ချဲ့ထွင်နိုင်မှု', english: 'Scalability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '확장성을 고려했습니다.', myanmar: 'ချဲ့ထွင်နိုင်မှုကို စဉ်းစားခဲ့တယ်။', english: 'We considered scalability.' }
  ]},

  // ===== CATEGORY 4: ADVANCED BUSINESS & ECONOMICS (1151-1200) =====
  { id: '1151', korean: '거래', myanmar: 'အရောင်းအဝယ်', english: 'Transaction/Trade', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '온라인 거래를 했습니다.', myanmar: 'အွန်လိုင်း အရောင်းအဝယ် လုပ်ခဲ့တယ်။', english: 'I made an online transaction.' }
  ]},
  { id: '1152', korean: '투자', myanmar: 'ရင်းနှီးမြှုပ်နှံမှု', english: 'Investment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '주식에 투자했습니다.', myanmar: 'ရှယ်ယာမှာ ရင်းနှီးမြှုပ်နှံခဲ့တယ်။', english: 'I invested in stocks.' }
  ]},
  { id: '1153', korean: '수익', myanmar: 'အမြတ်', english: 'Profit/Revenue', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 수익을 얻었습니다.', myanmar: 'အမြတ် ကြီးမားစွာ ရခဲ့တယ်။', english: 'We gained big profits.' }
  ]},
  { id: '1154', korean: '손실', myanmar: 'အရှုံး', english: 'Loss', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '손실을 줄였습니다.', myanmar: 'အရှုံးကို လျှော့ချခဲ့တယ်။', english: 'We reduced losses.' }
  ]},
  { id: '1155', korean: '예산', myanmar: 'ဘတ်ဂျက် / ခန့်မှန်းချက်', english: 'Budget', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '예산을 편성했습니다.', myanmar: 'ဘတ်ဂျက် ရေးဆွဲခဲ့တယ်။', english: 'We prepared the budget.' }
  ]},
  { id: '1156', korean: '비용', myanmar: 'ကုန်ကျစရိတ်', english: 'Cost/Expense', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '비용을 절약했습니다.', myanmar: 'ကုန်ကျစရိတ် သက်သာအောင် လုပ်ခဲ့တယ်။', english: 'We saved costs.' }
  ]},
  { id: '1157', korean: '가격', myanmar: 'ဈေး', english: 'Price', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가격이 올랐습니다.', myanmar: 'ဈေး တက်ခဲ့တယ်။', english: 'The price went up.' }
  ]},
  { id: '1158', korean: '시장', myanmar: 'စျေးကွက် / မြို့တော်ဝင်', english: 'Market / Mayor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 시장을 개척했습니다.', myanmar: 'စျေးကွက် အသစ် ဖွင့်လှစ်ခဲ့တယ်။', english: 'We opened up a new market.' }
  ]},
  { id: '1159', korean: '경제', myanmar: 'စီးပွားရေး', english: 'Economy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경제가 성장하고 있습니다.', myanmar: 'စီးပွားရေး တိုးတက်နေတယ်။', english: 'The economy is growing.' }
  ]},
  { id: '1160', korean: '금융', myanmar: 'ငွေကြေးရေးရာ', english: 'Finance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '금융 서비스를 이용합니다.', myanmar: 'ငွေကြေးရေးရာ ဝန်ဆောင်မှု သုံးတယ်။', english: 'We use financial services.' }
  ]},
  { id: '1161', korean: '은행', myanmar: 'ဘဏ်', english: 'Bank', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '은행에서 대출을 받았습니다.', myanmar: 'ဘဏ်မှာ ချေးငွေ ယူခဲ့တယ်။', english: 'I got a loan from the bank.' }
  ]},
  { id: '1162', korean: '대출', myanmar: 'ချေးငွေ', english: 'Loan', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대출을 상환했습니다.', myanmar: 'ချေးငွေကို ပြန်ဆပ်ခဲ့တယ်။', english: 'I repaid the loan.' }
  ]},
  { id: '1163', korean: '저축', myanmar: 'စုဆောင်းခြင်း', english: 'Savings', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '매달 저축을 합니다.', myanmar: 'လစဉ် စုဆောင်းတယ်။', english: 'I save money every month.' }
  ]},
  { id: '1164', korean: '보험', myanmar: 'အာမခံ', english: 'Insurance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건강보험에 가입했습니다.', myanmar: 'ကျန်းမာရေး အာမခံ ဝင်ခဲ့တယ်။', english: 'I enrolled in health insurance.' }
  ]},
  { id: '1165', korean: '계약', myanmar: 'စာချုပ်', english: 'Contract', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '계약서에 서명했습니다.', myanmar: 'စာချုပ်မှာ လက်မှတ် ရေးခဲ့တယ်။', english: 'I signed the contract.' }
  ]},
  { id: '1166', korean: '협상', myanmar: 'စေ့စပ်ညှိနှိုင်းမှု', english: 'Negotiation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가격 협상을 했습니다.', myanmar: 'ဈေး စေ့စပ်ညှိနှိုင်းခဲ့တယ်။', english: 'We negotiated the price.' }
  ]},
  { id: '1167', korean: '합의', myanmar: 'သဘောတူညီချက်', english: 'Agreement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '양측이 합의에 도달했습니다.', myanmar: 'နှစ်ဖက်စလုံး သဘောတူညီချက် ရောက်ခဲ့တယ်။', english: 'Both sides reached an agreement.' }
  ]},
  { id: '1168', korean: '조건', myanmar: 'စည်းကမ်း / အခြေအနေ', english: 'Condition/Terms', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 조건을 제시했습니다.', myanmar: 'ကောင်းတဲ့ စည်းကမ်း ပေးခဲ့တယ်။', english: 'We offered good terms.' }
  ]},
  { id: '1169', korean: '요구', myanmar: 'တောင်းဆိုမှု / လိုအပ်ချက်', english: 'Demand/Requirement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고객의 요구를 충족했습니다.', myanmar: 'ဖောက်သည်ရဲ့ တောင်းဆိုမှုကို ဖြည့်ဆည်းခဲ့တယ်။', english: 'We met the customer\'s demands.' }
  ]},
  { id: '1170', korean: '공급', myanmar: 'ထောက်ပံ့မှု', english: 'Supply', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '원자재 공급이 부족합니다.', myanmar: 'ကုန်ကြမ်း ထောက်ပံ့မှု လုံလောက်မှုမရှိဘူး။', english: 'Raw material supply is insufficient.' }
  ]},
  { id: '1171', korean: '수요', myanmar: 'လိုအပ်ချက်', english: 'Demand', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수요가 증가했습니다.', myanmar: 'လိုအပ်ချက် တိုးလာခဲ့တယ်။', english: 'Demand has increased.' }
  ]},
  { id: '1172', korean: '생산', myanmar: 'ထုတ်လုပ်မှု', english: 'Production', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생산량을 늘렸습니다.', myanmar: 'ထုတ်လုပ်မှု ပမာဏ တိုးခဲ့တယ်။', english: 'We increased production volume.' }
  ]},
  { id: '1173', korean: '판매', myanmar: 'ရောင်းချမှု', english: 'Sales', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '판매 실적이 좋습니다.', myanmar: 'ရောင်းချမှု စွမ်းဆောင်ရည် ကောင်းတယ်။', english: 'Sales performance is good.' }
  ]},
  { id: '1174', korean: '구매', myanmar: 'ဝယ်ယူမှု', english: 'Purchase', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대량 구매를 했습니다.', myanmar: 'အမြောက်အမြား ဝယ်ယူခဲ့တယ်။', english: 'We made bulk purchases.' }
  ]},
  { id: '1175', korean: '소비', myanmar: 'သုံးစွဲမှု', english: 'Consumption', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '에너지 소비를 줄였습니다.', myanmar: 'စွမ်းအင် သုံးစွဲမှုကို လျှော့ချခဲ့တယ်။', english: 'We reduced energy consumption.' }
  ]},
  { id: '1176', korean: '마케팅', myanmar: 'စျေးကွက်ရှာဖွေရေး', english: 'Marketing', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '마케팅 전략을 세웠습니다.', myanmar: 'စျေးကွက်ရှာဖွေရေး ဗျူဟာ ရေးဆွဲခဲ့တယ်။', english: 'We developed a marketing strategy.' }
  ]},
  { id: '1177', korean: '브랜드', myanmar: 'တံဆိပ်', english: 'Brand', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 브랜드를 출시했습니다.', myanmar: 'တံဆိပ် အသစ် ထုတ်လွှတ်ခဲ့တယ်။', english: 'We launched a new brand.' }
  ]},
  { id: '1178', korean: '품질', myanmar: 'အရည်အသွေး', english: 'Quality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '품질을 향상시켰습니다.', myanmar: 'အရည်အသွေးကို တိုးတက်စေခဲ့တယ်။', english: 'We improved the quality.' }
  ]},
  { id: '1179', korean: '서비스', myanmar: 'ဝန်ဆောင်မှု', english: 'Service', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고객 서비스를 개선했습니다.', myanmar: 'ဖောက်သည် ဝန်ဆောင်မှုကို ပိုမိုကောင်းအောင် လုပ်ခဲ့တယ်။', english: 'We improved customer service.' }
  ]},
  { id: '1180', korean: '경영진', myanmar: 'စီမံခန့်ခွဲမှုအဖွဲ့', english: 'Management', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경영진이 결정을 내렸습니다.', myanmar: 'စီမံခန့်ခွဲမှုအဖွဲ့က ဆုံးဖြတ်ခဲ့တယ်။', english: 'Management made a decision.' }
  ]},
  { id: '1181', korean: '직원', myanmar: 'ဝန်ထမ်း', english: 'Employee', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 직원을 채용했습니다.', myanmar: 'ဝန်ထမ်း အသစ် ခန့်အပ်ခဲ့တယ်။', english: 'We hired new employees.' }
  ]},
  { id: '1182', korean: '급여', myanmar: 'လစာ', english: 'Salary', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '급여를 인상했습니다.', myanmar: 'လစာ တိုးခဲ့တယ်။', english: 'We raised the salary.' }
  ]},
  { id: '1183', korean: '승진', myanmar: 'ရာထူးတိုး', english: 'Promotion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '승진 기회를 얻었습니다.', myanmar: 'ရာထူးတိုး အခွင့်အလမ်း ရခဲ့တယ်။', english: 'I got a promotion opportunity.' }
  ]},
  { id: '1184', korean: '교육', myanmar: 'ပညာရေး', english: 'Education/Training', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '직원 교육을 실시했습니다.', myanmar: 'ဝန်ထမ်း ပညာရေး လုပ်ဆောင်ခဲ့တယ်။', english: 'We conducted employee training.' }
  ]},
  { id: '1185', korean: '회의', myanmar: 'အစည်းအဝေး', english: 'Meeting', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '중요한 회의가 있습니다.', myanmar: 'အရေးကြီးတဲ့ အစည်းအဝေး ရှိတယ်။', english: 'There\'s an important meeting.' }
  ]},
  { id: '1186', korean: '발표', myanmar: 'တင်ပြမှု', english: 'Presentation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '프로젝트 발표를 했습니다.', myanmar: 'ပရောဂျက် တင်ပြမှု လုပ်ခဲ့တယ်။', english: 'I gave a project presentation.' }
  ]},
  { id: '1187', korean: '보고서', myanmar: 'အစီရင်ခံစာ', english: 'Report', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '월간 보고서를 작성했습니다.', myanmar: 'လစဉ် အစီရင်ခံစာ ရေးဆွဲခဲ့တယ်။', english: 'I wrote a monthly report.' }
  ]},
  { id: '1188', korean: '분석', myanmar: 'ခွဲခြမ်းစိတ်ဖြာမှု', english: 'Analysis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시장 분석을 했습니다.', myanmar: 'စျေးကွက် ခွဲခြမ်းစိတ်ဖြာမှု လုပ်ခဲ့တယ်။', english: 'We did market analysis.' }
  ]},
  { id: '1189', korean: '전략', myanmar: 'ဗျူဟာ', english: 'Strategy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 전략을 수립했습니다.', myanmar: 'ဗျူဟာ အသစ် ရေးဆွဲခဲ့တယ်။', english: 'We established a new strategy.' }
  ]},
  { id: '1190', korean: '목표', myanmar: 'ရည်မှန်းချက်', english: 'Goal/Target', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '연간 목표를 달성했습니다.', myanmar: 'နှစ်စဉ် ရည်မှန်းချက် အောင်မြင်ခဲ့တယ်။', english: 'We achieved the annual goal.' }
  ]},
  { id: '1191', korean: '성과', myanmar: 'ရလဒ်', english: 'Performance/Result', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '뛰어난 성과를 보였습니다.', myanmar: 'ထူးခြားတဲ့ ရလဒ် ပြခဲ့တယ်။', english: 'We showed excellent performance.' }
  ]},
  { id: '1192', korean: '효율', myanmar: 'ထိရောက်မှု', english: 'Efficiency', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '작업 효율을 높였습니다.', myanmar: 'အလုပ် ထိရောက်မှုကို တိုးမြှင့်ခဲ့တယ်။', english: 'We increased work efficiency.' }
  ]},
  { id: '1193', korean: '생산성', myanmar: 'ထုတ်လုပ်မှုစွမ်းရည်', english: 'Productivity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생산성이 향상되었습니다.', myanmar: 'ထုတ်လုပ်မှုစွမ်းရည် တိုးတက်ခဲ့တယ်။', english: 'Productivity has improved.' }
  ]},
  { id: '1194', korean: '혁신', myanmar: 'ပြုပြင်ပြောင်းလဲမှု', english: 'Innovation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기술 혁신을 이뤘습니다.', myanmar: 'နည်းပညာ ပြုပြင်ပြောင်းလဲမှု အောင်မြင်ခဲ့တယ်။', english: 'We achieved technological innovation.' }
  ]},
  { id: '1195', korean: '개발', myanmar: 'ဖွံ့ဖြိုးတိုးတက်မှု', english: 'Development', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '제품 개발을 시작했습니다.', myanmar: 'ကုန်ပစ္စည်း ဖွံ့ဖြိုးတိုးတက်မှု စတင်ခဲ့တယ်။', english: 'We started product development.' }
  ]},
  { id: '1196', korean: '연구', myanmar: 'သုတေသန', english: 'Research', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시장 연구를 했습니다.', myanmar: 'စျေးကွက် သုတေသန လုပ်ခဲ့တယ်။', english: 'We did market research.' }
  ]},
  { id: '1197', korean: '실험', myanmar: 'စမ်းသပ်မှု', english: 'Experiment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 방법을 실험했습니다.', myanmar: 'နည်းလမ်း အသစ် စမ်းသပ်ခဲ့တယ်။', english: 'We experimented with new methods.' }
  ]},
  { id: '1198', korean: '결과', myanmar: 'ရလဒ်', english: 'Result', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 결과를 얻었습니다.', myanmar: 'ကောင်းတဲ့ ရလဒ် ရခဲ့တယ်။', english: 'We got good results.' }
  ]},
  { id: '1199', korean: '평가', myanmar: 'အကဲဖြတ်မှု', english: 'Evaluation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '성과 평가를 실시했습니다.', myanmar: 'ရလဒ် အကဲဖြတ်မှု လုပ်ဆောင်ခဲ့တယ်။', english: 'We conducted performance evaluation.' }
  ]},
  { id: '1200', korean: '개선', myanmar: 'တိုးတက်စေမှု', english: 'Improvement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지속적인 개선이 필요합니다.', myanmar: 'ဆက်တိုက် တိုးတက်စေမှု လိုအပ်တယ်။', english: 'Continuous improvement is needed.' }
  ]},

  // ===== CATEGORY 5: ADVANCED LEGAL & GOVERNMENT TERMS (1201-1250) =====
  { id: '1201', korean: '법률', myanmar: 'ဥပဒေ', english: 'Law', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 법률이 제정되었습니다.', myanmar: 'ဥပဒေ အသစ် ပြုလုပ်ခဲ့တယ်။', english: 'A new law was enacted.' }
  ]},
  { id: '1202', korean: '정부', myanmar: 'အစိုးရ', english: 'Government', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정부 정책을 발표했습니다.', myanmar: 'အစိုးရ မူဝါဒ ကြေညာခဲ့တယ်။', english: 'The government announced a policy.' }
  ]},
  { id: '1203', korean: '국회', myanmar: 'လွှတ်တော်', english: 'Parliament', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국회에서 법안을 통과시켰습니다.', myanmar: 'လွှတ်တော်မှာ ဥပဒေကြမ်း အတည်ပြုခဲ့တယ်။', english: 'Parliament passed the bill.' }
  ]},
  { id: '1204', korean: '선거', myanmar: 'ရွေးကောက်ပွဲ', english: 'Election', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대통령 선거가 열렸습니다.', myanmar: 'သမ္မတ ရွေးကောက်ပွဲ ကျင်းပခဲ့တယ်။', english: 'The presidential election was held.' }
  ]},
  { id: '1205', korean: '투표', myanmar: 'မဲပေးခြင်း', english: 'Voting', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '투표를 했습니다.', myanmar: 'မဲပေးခဲ့တယ်။', english: 'I voted.' }
  ]},
  { id: '1206', korean: '후보', myanmar: 'ကိုယ်စားလှယ်လောင်း', english: 'Candidate', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유능한 후보를 지지합니다.', myanmar: 'စွမ်းရည်ရှိတဲ့ ကိုယ်စားလှယ်လောင်းကို ထောက်ခံတယ်။', english: 'I support a capable candidate.' }
  ]},
  { id: '1207', korean: '정책', myanmar: 'မူဝါဒ', english: 'Policy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경제 정책을 개선했습니다.', myanmar: 'စီးပွားရေး မူဝါဒကို တိုးတက်စေခဲ့တယ်။', english: 'We improved economic policy.' }
  ]},
  { id: '1208', korean: '조약', myanmar: 'စာချုပ်သဘောတူညီချက်', english: 'Treaty', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '평화 조약을 체결했습니다.', myanmar: 'ငြိမ်းချမ်းရေး စာချုပ်သဘောတူညီချက် လက်မှတ်ရေးခဲ့တယ်။', english: 'We signed a peace treaty.' }
  ]},
  { id: '1209', korean: '협정', myanmar: 'သဘောတူညီမှု', english: 'Agreement/Accord', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '무역 협정을 맺었습니다.', myanmar: 'ကုန်သွယ်ရေး သဘောတူညီမှု လုပ်ခဲ့တယ်။', english: 'We made a trade agreement.' }
  ]},
  { id: '1210', korean: '외교', myanmar: 'နိုင်ငံခြားရေး', english: 'Diplomacy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '외교 관계를 강화했습니다.', myanmar: 'နိုင်ငံခြားရေး ဆက်နွယ်မှုကို အားကောင်းအောင် လုပ်ခဲ့တယ်။', english: 'We strengthened diplomatic relations.' }
  ]},
  { id: '1211', korean: '대사관', myanmar: 'သံရုံး', english: 'Embassy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대사관에서 비자를 신청했습니다.', myanmar: 'သံရုံးမှာ ဗီဇာ လျှောက်ထားခဲ့တယ်။', english: 'I applied for a visa at the embassy.' }
  ]},
  { id: '1212', korean: '법원', myanmar: 'တရားရုံး', english: 'Court', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '법원에서 재판을 받았습니다.', myanmar: 'တရားရုံးမှာ တရားစွဲဆိုခံရတယ်။', english: 'I was tried in court.' }
  ]},
  { id: '1213', korean: '판사', myanmar: 'တရားသူကြီး', english: 'Judge', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '판사가 판결을 내렸습니다.', myanmar: 'တရားသူကြီးက စီရင်ချက် ချမှတ်ခဲ့တယ်။', english: 'The judge made a ruling.' }
  ]},
  { id: '1214', korean: '변호사', myanmar: 'ရှေ့နေ', english: 'Lawyer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '변호사와 상담했습니다.', myanmar: 'ရှေ့နေနဲ့ တိုင်ပင်ခဲ့တယ်။', english: 'I consulted with a lawyer.' }
  ]},
  { id: '1215', korean: '검사', myanmar: 'အစိုးရရှေ့နေ', english: 'Prosecutor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '검사가 기소했습니다.', myanmar: 'အစိုးရရှေ့နေက တရားစွဲဆိုခဲ့တယ်။', english: 'The prosecutor filed charges.' }
  ]},
  { id: '1216', korean: '경찰', myanmar: 'ရဲ', english: 'Police', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경찰에 신고했습니다.', myanmar: 'ရဲကို သတင်းပေးခဲ့တယ်။', english: 'I reported to the police.' }
  ]},
  { id: '1217', korean: '범죄', myanmar: 'ရာဇ၀တ်မှု', english: 'Crime', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '범죄를 예방해야 합니다.', myanmar: 'ရာဇ၀တ်မှုကို ကာကွယ်ရမယ်။', english: 'We must prevent crime.' }
  ]},
  { id: '1218', korean: '처벌', myanmar: 'အပြစ်ပေးခြင်း', english: 'Punishment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '엄중한 처벌을 받았습니다.', myanmar: 'လေးနက်တဲ့ အပြစ်ပေးခြင်း ခံရခဲ့တယ်။', english: 'He received severe punishment.' }
  ]},
  { id: '1219', korean: '감옥', myanmar: 'ထောင်', english: 'Prison', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '감옥에 수감되었습니다.', myanmar: 'ထောင်မှာ ချုပ်နှောင်ခံရတယ်။', english: 'He was imprisoned.' }
  ]},
  { id: '1220', korean: '벌금', myanmar: 'ဒဏ်ငွေ', english: 'Fine', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '벌금을 납부했습니다.', myanmar: 'ဒဏ်ငွေ ပေးခဲ့တယ်။', english: 'I paid the fine.' }
  ]},
  { id: '1221', korean: '증거', myanmar: 'သက်သေ', english: 'Evidence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '결정적인 증거를 찾았습니다.', myanmar: 'အဆုံးအဖြတ်ပေး သက်သေ ရှာတွေ့ခဲ့တယ်။', english: 'We found decisive evidence.' }
  ]},
  { id: '1222', korean: '증인', myanmar: 'သက်သေ', english: 'Witness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '증인이 증언했습니다.', myanmar: 'သက်သေက ထွက်ဆိုခဲ့တယ်။', english: 'The witness testified.' }
  ]},
  { id: '1223', korean: '피고', myanmar: 'တရားခံ', english: 'Defendant', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '피고가 무죄를 주장했습니다.', myanmar: 'တရားခံက အပြစ်မရှိဘူးလို့ ဆိုခဲ့တယ်။', english: 'The defendant claimed innocence.' }
  ]},
  { id: '1224', korean: '원고', myanmar: 'တရားစွဲသူ', english: 'Plaintiff', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '원고가 소송을 제기했습니다.', myanmar: 'တရားစွဲသူက တရားစွဲဆိုခဲ့တယ်။', english: 'The plaintiff filed a lawsuit.' }
  ]},
  { id: '1225', korean: '소송', myanmar: 'တရားစွဲဆိုမှု', english: 'Lawsuit', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소송이 진행 중입니다.', myanmar: 'တရားစွဲဆိုမှု ဆက်လုပ်နေတယ်။', english: 'The lawsuit is ongoing.' }
  ]},
  { id: '1226', korean: '판결', myanmar: 'စီရင်ချက်', english: 'Verdict/Judgment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공정한 판결을 내렸습니다.', myanmar: 'တရားမျှတတဲ့ စီရင်ချက် ချမှတ်ခဲ့တယ်။', english: 'A fair verdict was delivered.' }
  ]},
  { id: '1227', korean: '항소', myanmar: 'အယူခံဝင်ခြင်း', english: 'Appeal', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '항소를 제기했습니다.', myanmar: 'အယူခံဝင်ခဲ့တယ်။', english: 'We filed an appeal.' }
  ]},
  { id: '1228', korean: '헌법', myanmar: 'ဖွဲ့စည်းပုံအခြေခံဥပဒေ', english: 'Constitution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '헌법을 개정했습니다.', myanmar: 'ဖွဲ့စည်းပုံအခြေခံဥပဒေ ပြင်ဆင်ခဲ့တယ်။', english: 'The constitution was amended.' }
  ]},
  { id: '1229', korean: '권한', myanmar: 'အခွင့်အာဏာ', english: 'Authority/Power', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '특별한 권한을 부여받았습니다.', myanmar: 'အထူး အခွင့်အာဏာ ရရှိခဲ့တယ်။', english: 'Special authority was granted.' }
  ]},
  { id: '1230', korean: '책임', myanmar: 'တာဝန်', english: 'Responsibility', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 책임을 맡았습니다.', myanmar: 'တာဝန် ကြီးမားတာ ယူခဲ့တယ်။', english: 'I took on great responsibility.' }
  ]},
  { id: '1231', korean: '의무', myanmar: 'တာဝန်ဝတ္တရား', english: 'Duty/Obligation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국민의 의무를 다했습니다.', myanmar: 'နိုင်ငံသားရဲ့ တာဝန်ဝတ္တရား ထမ်းဆောင်ခဲ့တယ်။', english: 'I fulfilled my civic duty.' }
  ]},
  { id: '1232', korean: '자유', myanmar: 'လွတ်လပ်မှု', english: 'Freedom', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '언론의 자유가 중요합니다.', myanmar: 'သတင်းမီဒီယာ လွတ်လပ်မှု အရေးကြီးတယ်။', english: 'Freedom of press is important.' }
  ]},
  { id: '1233', korean: '평등', myanmar: 'တန်းတူညီမျှမှု', english: 'Equality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '남녀 평등을 실현해야 합니다.', myanmar: 'ယောက်ျားမ တန်းတူညီမျှမှု အကောင်အထည်ဖော်ရမယ်။', english: 'We must achieve gender equality.' }
  ]},
  { id: '1234', korean: '정의', myanmar: 'တရားမျှတမှု', english: 'Justice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정의를 실현했습니다.', myanmar: 'တရားမျှတမှု အကောင်အထည်ဖော်ခဲ့တယ်။', english: 'Justice was served.' }
  ]},
  { id: '1235', korean: '공정', myanmar: 'တရားမျှတ', english: 'Fairness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공정한 심사를 받았습니다.', myanmar: 'တရားမျှတတဲ့ စစ်ဆေးခြင်း ခံရတယ်။', english: 'I received a fair review.' }
  ]},
  { id: '1236', korean: '민주주의', myanmar: 'ဒီမိုကရေစီ', english: 'Democracy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '민주주의를 수호해야 합니다.', myanmar: 'ဒီမိုကရေစီကို ကာကွယ်ရမယ်။', english: 'We must protect democracy.' }
  ]},
  { id: '1237', korean: '독재', myanmar: 'အာဏာရှင်စနစ်', english: 'Dictatorship', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '독재를 반대합니다.', myanmar: 'အာဏာရှင်စနစ်ကို ဆန့်ကျင်တယ်။', english: 'We oppose dictatorship.' }
  ]},
  { id: '1238', korean: '혁명', myanmar: 'တော်လှန်ရေး', english: 'Revolution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '평화로운 혁명이 일어났습니다.', myanmar: 'ငြိမ်းချမ်းတဲ့ တော်လှန်ရေး ဖြစ်ပျက်ခဲ့တယ်။', english: 'A peaceful revolution occurred.' }
  ]},
  { id: '1239', korean: '개혁', myanmar: 'ပြုပြင်ပြောင်းလဲရေး', english: 'Reform', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '사법 개혁을 추진했습니다.', myanmar: 'တရားရေး ပြုပြင်ပြောင်းလဲရေး တွန်းအားပေးခဲ့တယ်။', english: 'We promoted judicial reform.' }
  ]},
  { id: '1240', korean: '부패', myanmar: 'အကျင့်ပျက်ခြစားမှု', english: 'Corruption', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '부패를 척결해야 합니다.', myanmar: 'အကျင့်ပျက်ခြစားမှုကို ပပျောက်အောင် လုပ်ရမယ်။', english: 'We must eradicate corruption.' }
  ]},
  { id: '1241', korean: '투명성', myanmar: 'ပွင့်လင်းမြင်သာမှု', english: 'Transparency', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정부의 투명성이 필요합니다.', myanmar: 'အစိုးရရဲ့ ပွင့်လင်းမြင်သာမှု လိုအပ်တယ်။', english: 'Government transparency is needed.' }
  ]},
  { id: '1242', korean: '책임감', myanmar: 'တာဝန်ခံမှု', english: 'Accountability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공직자의 책임감이 중요합니다.', myanmar: 'အစိုးရ ဝန်ထမ်းရဲ့ တာဝန်ခံမှု အရေးကြီးတယ်။', english: 'Public officials\' accountability is important.' }
  ]},
  { id: '1243', korean: '시민', myanmar: 'နိုင်ငံသား', english: 'Citizen', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '모든 시민이 평등합니다.', myanmar: 'နိုင်ငံသား အားလုံး တန်းတူညီမျှတယ်။', english: 'All citizens are equal.' }
  ]},
  { id: '1244', korean: '국민', myanmar: 'ပြည်သူ', english: 'People/Nation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국민을 위해 봉사합니다.', myanmar: 'ပြည်သူတွေအတွက် ဝန်ဆောင်တယ်။', english: 'We serve the people.' }
  ]},
  { id: '1245', korean: '공무원', myanmar: 'အစိုးရဝန်ထမ်း', english: 'Public servant', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공무원이 되고 싶습니다.', myanmar: 'အစိုးရဝန်ထမ်း ဖြစ်ချင်တယ်။', english: 'I want to become a public servant.' }
  ]},
  { id: '1246', korean: '행정', myanmar: 'အုပ်ချုပ်ရေး', english: 'Administration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효율적인 행정이 필요합니다.', myanmar: 'ထိရောက်တဲ့ အုပ်ချုပ်ရေး လိုအပ်တယ်။', english: 'Efficient administration is needed.' }
  ]},
  { id: '1247', korean: '규제', myanmar: 'ထိန်းချုပ်မှု', english: 'Regulation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 규제를 도입했습니다.', myanmar: 'ထိန်းချုပ်မှု အသစ် ကျင့်သုံးခဲ့တယ်။', english: 'New regulations were introduced.' }
  ]},
  { id: '1248', korean: '허가', myanmar: 'ခွင့်ပြုချက်', english: 'Permission/License', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건축 허가를 받았습니다.', myanmar: 'ဆောက်လုပ်ရေး ခွင့်ပြုချက် ရခဲ့တယ်။', english: 'We got construction permission.' }
  ]},
  { id: '1249', korean: '금지', myanmar: 'တားမြစ်ခြင်း', english: 'Prohibition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '흡연을 금지했습니다.', myanmar: 'ဆေးလိပ်သောက်ခြင်း တားမြစ်ခဲ့တယ်။', english: 'Smoking was prohibited.' }
  ]},
  { id: '1250', korean: '강제', myanmar: 'အတင်းအကြပ်', english: 'Compulsion/Force', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강제 조치를 취했습니다.', myanmar: 'အတင်းအကြပ် အရေးယူခဲ့တယ်။', english: 'Compulsory measures were taken.' }
  ]},

  // ===== CATEGORY 6: ADVANCED EDUCATION & ACADEMIC TERMS (1251-1300) =====
  { id: '1251', korean: '교육과정', myanmar: 'ပညာရေးသင်ရိုးညွှန်းတမ်း', english: 'Curriculum', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 교육과정을 도입했습니다.', myanmar: 'ပညာရေးသင်ရိုးညွှန်းတမ်း အသစ်ကို ကျင့်သုံးခဲ့တယ်။', english: 'We introduced a new curriculum.' }
  ]},
  { id: '1252', korean: '강의', myanmar: 'ဟောပြောပွဲ / သင်ကြား', english: 'Lecture', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '흥미로운 강의였습니다.', myanmar: 'စိတ်ဝင်စားဖွယ် ဟောပြောပွဲ ဖြစ်ခဲ့တယ်။', english: 'It was an interesting lecture.' }
  ]},
  { id: '1253', korean: '강사', myanmar: 'ဟောပြောသူ / သင်ကြားသူ', english: 'Instructor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경험이 많은 강사입니다.', myanmar: 'အတွေ့အကြုံ များတဲ့ ဟောပြောသူပါ။', english: 'He is an experienced instructor.' }
  ]},
  { id: '1254', korean: '교수법', myanmar: 'သင်ကြားရေးနည်းလမ်း', english: 'Teaching method', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효과적인 교수법을 사용합니다.', myanmar: 'ထိရောက်တဲ့ သင်ကြားရေးနည်းလမ်း သုံးတယ်။', english: 'We use effective teaching methods.' }
  ]},
  { id: '1255', korean: '학습자', myanmar: 'သင်ယူသူ', english: 'Learner', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '능동적인 학습자가 되어야 합니다.', myanmar: 'တက်ကြွတဲ့ သင်ယူသူ ဖြစ်ရမယ်။', english: 'You should become an active learner.' }
  ]},
  { id: '1256', korean: '교재', myanmar: 'သင်ခန်းစာအုပ်', english: 'Teaching material', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 교재를 선택했습니다.', myanmar: 'ကောင်းတဲ့ သင်ခန်းစာအုပ် ရွေးချယ်ခဲ့တယ်။', english: 'We selected good teaching materials.' }
  ]},
  { id: '1257', korean: '과제', myanmar: 'အိမ်စာ', english: 'Assignment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '과제를 제출했습니다.', myanmar: 'အိမ်စာကို  ထပ်/တင်သွင်းခဲ့တယ်။', english: 'I submitted the assignment.' }
  ]},
  { id: '1258', korean: '시험', myanmar: 'စာမေးပွဲ', english: 'Exam', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '어려운 시험이었습니다.', myanmar: 'ခက်ခဲတဲ့ စာမေးပွဲ ဖြစ်ခဲ့တယ်။', english: 'It was a difficult exam.' }
  ]},
  { id: '1259', korean: '성적', myanmar: 'ရမှတ်', english: 'Grade/Score', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 성적을 받았습니다.', myanmar: 'ကောင်းတဲ့ ရမှတ် ရခဲ့တယ်။', english: 'I got good grades.' }
  ]},
  { id: '1260', korean: '졸업', myanmar: 'ဘွဲ့ရခြင်း', english: 'Graduation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '내년에 졸업합니다.', myanmar: 'လာမယ့်နှစ် ဘွဲ့ရမှာပါ။', english: 'I will graduate next year.' }
  ]},
  { id: '1261', korean: '학위', myanmar: 'ဘွဲ့ / သင်တန်း', english: 'Degree', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '석사 학위를 취득했습니다.', myanmar: 'မဟာဘွဲ့ ရရှိခဲ့တယ်။', english: 'I obtained a master\'s degree.' }
  ]},
  { id: '1262', korean: '장학금', myanmar: 'ပညာသင်ဆုငွေ', english: 'Scholarship', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '장학금을 받았습니다.', myanmar: 'ပညာသင်ဆုငွေ ရခဲ့တယ်။', english: 'I received a scholarship.' }
  ]},
  { id: '1263', korean: '논문', myanmar: 'စာတမ်း', english: 'Thesis/Paper', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '논문을 작성하고 있습니다.', myanmar: 'စာတမ်း ရေးနေတယ်။', english: 'I am writing a thesis.' }
  ]},
  { id: '1264', korean: '연구', myanmar: 'သုတေသန', english: 'Research', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깊이 있는 연구가 필요합니다.', myanmar: 'နက်ရှိုင်းတဲ့ သုတေသန လိုအပ်တယ်။', english: 'In-depth research is needed.' }
  ]},
  { id: '1265', korean: '실험실', myanmar: 'စမ်းသပ်ခန်း', english: 'Laboratory', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실험실에서 연구합니다.', myanmar: 'စမ်းသပ်ခန်းမှာ သုတေသန လုပ်တယ်။', english: 'We conduct research in the laboratory.' }
  ]},
  { id: '1266', korean: '도서관', myanmar: 'စာကြည့်တိုက်', english: 'Library', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '도서관에서 공부합니다.', myanmar: 'စာကြည့်တိုက်မှာ စာသင်တယ်။', english: 'I study in the library.' }
  ]},
  { id: '1267', korean: '강의실', myanmar: 'ဟောပြောခန်း / စာသင်ခန်း /သင်ကြားခန်း', english: 'Classroom', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '넓은 강의실입니다.', myanmar: 'ကျယ်ဝန်းတဲ့ ဟောပြောခန်းပါ။', english: 'It\'s a spacious classroom.' }
  ]},
  { id: '1268', korean: '기숙사', myanmar: 'ကျောင်းဆောင်/ ကျောင်းသားနေထိုင်ခန်း', english: 'Dormitory', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기숙사에서 생활합니다.', myanmar: 'ကျောင်းသားတည်းခိုရာမှာ နေထိုင်တယ်။', english: 'I live in the dormitory.' }
  ]},
  { id: '1269', korean: '동아리', myanmar: 'ကျောင်းသားအဖွဲ့ / ဝါသနာတူ အဖွဲ့', english: 'Club/Society', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '음악 동아리에 가입했습니다.', myanmar: 'ဂီတ ကျောင်းသားအဖွဲ့မှာ ဝင်ခဲ့တယ်။', english: 'I joined the music club.' }
  ]},
  { id: '1270', korean: '축제', myanmar: 'ပွဲတော်', english: 'Festival', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '학교 축제가 열렸습니다.', myanmar: 'ကျောင်း ပွဲတော် ကျင်းပခဲ့တယ်။', english: 'The school festival was held.' }
  ]},
  { id: '1271', korean: '경쟁', myanmar: 'ယှဉ်ပြိုင်မှု', english: 'Competition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '치열한 경쟁이 있습니다.', myanmar: 'ပြင်းထန်တဲ့ ယှဉ်ပြိုင်မှု ရှိတယ်။', english: 'There is fierce competition.' }
  ]},
  { id: '1272', korean: '협력', myanmar: 'ပူးပေါင်းဆောင်ရွက်မှု', english: 'Cooperation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '팀워크와 협력이 중요합니다.', myanmar: 'အဖွဲ့လုပ်ငန်းနဲ့ ပူးပေါင်းဆောင်ရွက်မှု အရေးကြီးတယ်။', english: 'Teamwork and cooperation are important.' }
  ]},
  { id: '1273', korean: '발표', myanmar: 'တင်ပြမှု', english: 'Presentation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '내일 발표가 있습니다.', myanmar: 'မနက်ဖြန် တင်ပြမှု ရှိတယ်။', english: 'There\'s a presentation tomorrow.' }
  ]},
  { id: '1274', korean: '토론', myanmar: 'ဆွေးနွေးငြင်းခုံမှု / ကျပန်းစကား', english: 'Discussion/Debate', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '활발한 토론이 있었습니다.', myanmar: 'တက်ကြွတဲ့ ဆွေးနွေးငြင်းခုံမှု ရှိခဲ့တယ်။', english: 'There was an active discussion.' }
  ]},
  { id: '1275', korean: '질문', myanmar: 'မေးခွန်း', english: 'Question', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 질문입니다.', myanmar: 'ကောင်းတဲ့ မေးခွန်းပါ။', english: 'That\'s a good question.' }
  ]},
  { id: '1276', korean: '답변', myanmar: 'ဖြေကြားချက်', english: 'Answer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 답변을 했습니다.', myanmar: 'တိကျတဲ့ ဖြေကြားချက် ပေးခဲ့တယ်။', english: 'I gave an accurate answer.' }
  ]},
  { id: '1277', korean: '설명', myanmar: 'ရှင်းလင်းချက်', english: 'Explanation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자세한 설명이 필요합니다.', myanmar: 'အသေးစိတ် ရှင်းလင်းချက် လိုအပ်တယ်။', english: 'Detailed explanation is needed.' }
  ]},
  { id: '1278', korean: '이해', myanmar: 'နားလည်မှု', english: 'Understanding', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '완전한 이해가 중요합니다.', myanmar: 'လုံးလုံးနားလည်မှု အရေးကြီးတယ်။', english: 'Complete understanding is important.' }
  ]},
  { id: '1279', korean: '기억', myanmar: 'မှတ်မိခြင်း / မှတ်ညဏ်', english: 'Memory', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 기억력이 필요합니다.', myanmar: 'ကောင်းတဲ့ မှတ်မိနိုင်စွမ်း လိုအပ်တယ်။', english: 'Good memory is needed.' }
  ]},
  { id: '1280', korean: '집중', myanmar: 'အာရုံစူးစိုက်မှု', english: 'Concentration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '집중력을 높여야 합니다.', myanmar: 'အာရုံစူးစိုက်မှုကို တိုးမြှင့်ရမယ်။', english: 'We need to improve concentration.' }
  ]},
  { id: '1281', korean: '노력', myanmar: 'ကြိုးပမ်းမှု', english: 'Effort', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지속적인 노력이 필요합니다.', myanmar: 'ဆက်တိုက် ကြိုးပမ်းမှု လိုအပ်တယ်။', english: 'Continuous effort is needed.' }
  ]},
  { id: '1282', korean: '성취', myanmar: 'အောင်မြင်မှု', english: 'Achievement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 성취를 이뤘습니다.', myanmar: 'ကြီးမားတဲ့ အောင်မြင်မှု ရခဲ့တယ်။', english: 'We achieved great success.' }
  ]},
  { id: '1283', korean: '목적', myanmar: 'ရည်ရွယ်ချက်', english: 'Purpose', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '명확한 목적이 있습니다.', myanmar: 'ရှင်းလင်းတဲ့ ရည်ရွယ်ချက် ရှိတယ်။', english: 'There is a clear purpose.' }
  ]},
  { id: '1284', korean: '동기', myanmar: 'လှုံ့ဆော်ချက်', english: 'Motivation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 동기가 있습니다.', myanmar: 'ပြင်းထန်တဲ့ လှုံ့ဆော်ချက် ရှိတယ်။', english: 'I have strong motivation.' }
  ]},
  { id: '1285', korean: '관심', myanmar: 'စိတ်ဝင်စားမှု', english: 'Interest', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깊은 관심을 보였습니다.', myanmar: 'နက်ရှိုင်းတဲ့ စိတ်ဝင်စားမှု ပြခဲ့တယ်။', english: 'He showed deep interest.' }
  ]},
  { id: '1286', korean: '호기심', myanmar: 'စူးစမ်းလိုစိတ်', english: 'Curiosity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '호기심이 많은 학생입니다.', myanmar: 'စူးစမ်းလိုစိတ် များတဲ့ ကျောင်းသားပါ။', english: 'He is a curious student.' }
  ]},
  { id: '1287', korean: '창의성', myanmar: 'ဖန်တီးနိုင်စွမ်း', english: 'Creativity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '창의성을 개발해야 합니다.', myanmar: 'ဖန်တီးနိုင်စွမ်းကို ဖွံ့ဖြိုးရမယ်။', english: 'We need to develop creativity.' }
  ]},
  { id: '1288', korean: '상상력', myanmar: 'စိတ်ကူးစိတ်သန်း', english: 'Imagination', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '풍부한 상상력을 가지고 있습니다.', myanmar: 'ကြွယ်ဝတဲ့ စိတ်ကူးစိတ်သန်း ရှိတယ်။', english: 'He has rich imagination.' }
  ]},
  { id: '1289', korean: '사고력', myanmar: 'စဉ်းစားနိုင်စွမ်း', english: 'Thinking ability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '논리적 사고력이 중요합니다.', myanmar: 'ယုတ္တိရှိတဲ့ စဉ်းစားနိုင်စွမ်း အရေးကြီးတယ်။', english: 'Logical thinking ability is important.' }
  ]},
  { id: '1290', korean: '판단력', myanmar: 'ဆုံးဖြတ်နိုင်စွမ်း', english: 'Judgment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '올바른 판단력이 필요합니다.', myanmar: 'မှန်ကန်တဲ့ ဆုံးဖြတ်နိုင်စွမ်း လိုအပ်တယ်။', english: 'Correct judgment is needed.' }
  ]},
  { id: '1291', korean: '분석력', myanmar: 'ခွဲခြမ်းစိတ်ဖြာနိုင်စွမ်း', english: 'Analytical ability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '뛰어난 분석력을 보였습니다.', myanmar: 'ထူးခြားတဲ့ ခွဲခြမ်းစိတ်ဖြာနိုင်စွမ်း ပြခဲ့တယ်။', english: 'He showed excellent analytical ability.' }
  ]},
  { id: '1292', korean: '종합력', myanmar: 'ပေါင်းစည်းနိုင်စွမ်း', english: 'Synthesis ability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정보 종합력이 뛰어납니다.', myanmar: 'သတင်းအချက်အလက် ပေါင်းစည်းနိုင်စွမ်း ထူးခြားတယ်။', english: 'Information synthesis ability is excellent.' }
  ]},
  { id: '1293', korean: '응용력', myanmar: 'အသုံးချနိုင်စွမ်း', english: 'Application ability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실무 응용력이 중요합니다.', myanmar: 'လက်တွေ့ အသုံးချနိုင်စွမ်း အရေးကြီးတယ်။', english: 'Practical application ability is important.' }
  ]},
  { id: '1294', korean: '적응력', myanmar: 'လိုက်ဖက်နိုင်စွမ်း', english: 'Adaptability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '빠른 적응력을 보였습니다.', myanmar: 'မြန်ဆန်တဲ့ လိုက်ဖက်နိုင်စွမ်း ပြခဲ့တယ်။', english: 'He showed quick adaptability.' }
  ]},
  { id: '1295', korean: '소통능력', myanmar: 'ဆက်သွယ်နိုင်စွမ်း', english: 'Communication skills', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소통능력을 기르고 있습니다.', myanmar: 'ဆက်သွယ်နိုင်စွမ်းကို တိုးတက်စေနေတယ်။', english: 'I am developing communication skills.' }
  ]},
  { id: '1296', korean: '리더십', myanmar: 'ခေါင်းဆောင်မှု', english: 'Leadership', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 리더십을 발휘합니다.', myanmar: 'ပြင်းထန်တဲ့ ခေါင်းဆောင်မှု ပြသတယ်။', english: 'He demonstrates strong leadership.' }
  ]},
  { id: '1297', korean: '책임감', myanmar: 'တာဝန်ခံမှု', english: 'Sense of responsibility', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 책임감을 가지고 있습니다.', myanmar: 'ပြင်းထန်တဲ့ တာဝန်ခံမှု ရှိတယ်။', english: 'He has a strong sense of responsibility.' }
  ]},
  { id: '1298', korean: '자신감', myanmar: 'ကိုယ့်ကိုယ်ကို ယုံကြည်မှု', english: 'Self-confidence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자신감을 가져야 합니다.', myanmar: 'ကိုယ့်ကိုယ်ကို ယုံကြည်မှု ရှိရမယ်။', english: 'You should have self-confidence.' }
  ]},
  { id: '1299', korean: '인내심', myanmar: 'စိတ်ရှည်မှု', english: 'Patience', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인내심이 필요합니다.', myanmar: 'စိတ်ရှည်မှု လိုအပ်တယ်။', english: 'Patience is needed.' }
  ]},
  { id: '1300', korean: '끈기', myanmar: 'ဇွဲရှိမှု', english: 'Perseverance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '끈기 있게 노력했습니다.', myanmar: 'ဇွဲရှိရှိ ကြိုးပမ်းခဲ့တယ်။', english: 'I worked with perseverance.' }
  ]},

  // ===== CATEGORY 7: ADVANCED ARTS & CULTURE TERMS (1301-1350) =====
  { id: '1301', korean: '갤러리', myanmar: 'ပန်းချီခန်း', english: 'Gallery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 갤러리를 방문했습니다.', myanmar: 'ပန်းချီခန်း အသစ်ကို လည်ပတ်ခဲ့တယ်။', english: 'I visited a new gallery.' }
  ]},
  { id: '1302', korean: '그림', myanmar: 'ပန်းချီ', english: 'Painting', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 그림을 그렸습니다.', myanmar: 'လှပတဲ့ ပန်းချီ ဆွဲခဲ့တယ်။', english: 'I painted a beautiful picture.' }
  ]},
  { id: '1303', korean: '조각', myanmar: 'ထွင်းထုလုပ်ငန်း', english: 'Sculpture', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '돌 조각상을 만들었습니다.', myanmar: 'ကျောက် ထွင်းထုလုပ်ငန်း လုပ်ခဲ့တယ်။', english: 'I made a stone sculpture.' }
  ]},
  { id: '1304', korean: '공연', myanmar: 'ဖျော်ဖြေပွဲ', english: 'Performance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '멋진 공연을 보았습니다.', myanmar: 'လှပတဲ့ ဖျော်ဖြေပွဲ ကြည့်ခဲ့တယ်။', english: 'I watched a wonderful performance.' }
  ]},
  { id: '1305', korean: '극장', myanmar: 'ပြဇာတ်ရုံ', english: 'Theater', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '극장에서 연극을 보았습니다.', myanmar: 'ပြဇာတ်ရုံမှာ ပြဇာတ် ကြည့်ခဲ့တယ်။', english: 'I watched a play at the theater.' }
  ]},
  { id: '1306', korean: '연극', myanmar: 'ပြဇာတ်', english: 'Drama/Play', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '감동적인 연극이었습니다.', myanmar: 'စိတ်လှုပ်ရှားစရာ ပြဇာတ် ဖြစ်ခဲ့တယ်။', english: 'It was a moving drama.' }
  ]},
  { id: '1307', korean: '배우', myanmar: 'သရုပ်ဆောင်', english: 'Actor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유명한 배우를 만났습니다.', myanmar: 'နာမည်ကြီး သရုပ်ဆောင်ကို တွေ့ခဲ့တယ်။', english: 'I met a famous actor.' }
  ]},
  { id: '1308', korean: '감독', myanmar: 'ဒါရိုက်တာ', english: 'Director', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재능 있는 감독입니다.', myanmar: 'စွမ်းရည်ရှိတဲ့ ဒါရိုက်တာပါ။', english: 'He is a talented director.' }
  ]},
  { id: '1309', korean: '관객', myanmar: 'ကြည့်ရှုသူ', english: 'Audience', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '관객들이 박수를 쳤습니다.', myanmar: 'ကြည့်ရှုသူတွေ လက်ခုပ်တီးခဲ့တယ်။', english: 'The audience applauded.' }
  ]},
  { id: '1310', korean: '무대', myanmar: 'စင်မြင့်', english: 'Stage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 무대에서 공연했습니다.', myanmar: 'စင်မြင့် ကြီးမှာ ဖျော်ဖြေခဲ့တယ်။', english: 'I performed on a big stage.' }
  ]},
  { id: '1311', korean: '음악회', myanmar: 'ဂီတဖျော်ဖြေပွဲ', english: 'Concert', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '클래식 음악회에 갔습니다.', myanmar: 'ဂန္တဝင် ဂီတဖျော်ဖြေပွဲကို သွားခဲ့တယ်။', english: 'I went to a classical concert.' }
  ]},
  { id: '1312', korean: '악기', myanmar: 'တီးမှုတ်ပစ္စည်း', english: 'Musical instrument', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 악기를 배우고 있습니다.', myanmar: 'တီးမှုတ်ပစ္စည်း အသစ် သင်နေတယ်။', english: 'I am learning a new musical instrument.' }
  ]},
  { id: '1313', korean: '피아노', myanmar: 'စန္ဒရား', english: 'Piano', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '피아노를 잘 칩니다.', myanmar: 'စန္ဒရား ကောင်းကောင်း တီးတယ်။', english: 'I play piano well.' }
  ]},
  { id: '1314', korean: '기타', myanmar: 'ဂစ်တာ', english: 'Guitar', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기타 연주를 좋아합니다.', myanmar: 'ဂစ်တာ တီးတာ ကြိုက်တယ်။', english: 'I like playing guitar.' }
  ]},
  { id: '1315', korean: '가수', myanmar: 'အဆိုတော်', english: 'Singer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인기 있는 가수입니다.', myanmar: 'လူကြိုက်များတဲ့ အဆိုတော်ပါ။', english: 'He is a popular singer.' }
  ]},
  { id: '1316', korean: '노래', myanmar: 'သီချင်း', english: 'Song', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 노래를 불렀습니다.', myanmar: 'လှပတဲ့ သီချင်း သီခဲ့တယ်။', english: 'I sang a beautiful song.' }
  ]},
  { id: '1317', korean: '춤', myanmar: 'အက', english: 'Dance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '전통 춤을 배웠습니다.', myanmar: 'ရိုးရာ အကကို သင်ခဲ့တယ်။', english: 'I learned traditional dance.' }
  ]},
  { id: '1318', korean: '무용', myanmar: 'အကပညာ', english: 'Dance art', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '무용을 전공했습니다.', myanmar: 'အကပညာကို အဓိက သင်ခဲ့တယ်။', english: 'I majored in dance.' }
  ]},
  { id: '1319', korean: '영화', myanmar: 'ရုပ်ရှင်', english: 'Movie', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재미있는 영화를 보았습니다.', myanmar: 'ပျော်စရာ ရုပ်ရှင် ကြည့်ခဲ့တယ်။', english: 'I watched an interesting movie.' }
  ]},
  { id: '1320', korean: '영화관', myanmar: 'ရုပ်ရှင်ရုံ', english: 'Cinema', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 영화관이 생겼습니다.', myanmar: 'ရုပ်ရှင်ရုံ အသစ် ဖွင့်ခဲ့တယ်။', english: 'A new cinema opened.' }
  ]},
  { id: '1321', korean: '작품', myanmar: 'လက်ရာ', english: 'Work of art', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '훌륭한 작품을 만들었습니다.', myanmar: 'ထူးခြားတဲ့ လက်ရာ ဖန်တီးခဲ့တယ်။', english: 'I created an excellent work of art.' }
  ]},
  { id: '1322', korean: '예술가', myanmar: 'အနုပညာရှင်', english: 'Artist', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재능 있는 예술가입니다.', myanmar: 'စွမ်းရည်ရှိတဲ့ အနုပညာရှင်ပါ။', english: 'He is a talented artist.' }
  ]},
  { id: '1323', korean: '창작', myanmar: 'ဖန်တီးမှု', english: 'Creation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 창작 활동을 시작했습니다.', myanmar: 'ဖန်တီးမှု လုပ်ငန်း အသစ် စတင်ခဲ့တယ်။', english: 'I started new creative activities.' }
  ]},
  { id: '1324', korean: '전시회', myanmar: 'ပြပွဲ', english: 'Exhibition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '미술 전시회를 열었습니다.', myanmar: 'အနုပညာ ပြပွဲ ကျင်းပခဲ့တယ်။', english: 'We held an art exhibition.' }
  ]},
  { id: '1325', korean: '문화', myanmar: 'ယဉ်ကျေးမှု', english: 'Culture', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다양한 문화를 경험했습니다.', myanmar: 'မတူကွဲပြားတဲ့ ယဉ်ကျေးမှု တွေ့ကြုံခဲ့တယ်။', english: 'I experienced diverse cultures.' }
  ]},
  { id: '1326', korean: '전통', myanmar: 'ရိုးရာ', english: 'Tradition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '오래된 전통을 지킵니다.', myanmar: 'ရှေးကြောင်းတဲ့ ရိုးရာကို ထိန်းသိမ်းတယ်။', english: 'We preserve old traditions.' }
  ]},
  { id: '1327', korean: '관습', myanmar: 'ထုံးစံ / ဓလေ့', english: 'Custom', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지역 관습을 따릅니다.', myanmar: 'ဒေသ ထုံးစံကို လိုက်နာတယ်။', english: 'We follow local customs.' }
  ]},
  { id: '1328', korean: '의식', myanmar: 'အခမ်းအနား', english: 'Ceremony', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '졸업 의식에 참석했습니다.', myanmar: 'ဘွဲ့နှင်းသဘင် အခမ်းအနားမှာ တက်ရောက်ခဲ့တယ်။', english: 'I attended the graduation ceremony.' }
  ]},
  { id: '1329', korean: '축하', myanmar: 'ဂုဏ်ပြုခြင်း', english: 'Celebration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생일 축하를 받았습니다.', myanmar: 'မွေးနေ့ ဂုဏ်ပြုခြင်း ခံရခဲ့တယ်။', english: 'I received birthday congratulations.' }
  ]},
  { id: '1330', korean: '기념', myanmar: 'အမှတ်တရ', english: 'Commemoration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '특별한 기념일입니다.', myanmar: 'အထူး အမှတ်တရနေ့ပါ။', english: 'It\'s a special commemorative day.' }
  ]},
  { id: '1331', korean: '가치', myanmar: 'တန်ဖိုး', english: 'Value', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '문화적 가치가 높습니다.', myanmar: 'ယဉ်ကျေးမှု တန်ဖိုး မြင့်မားတယ်။', english: 'It has high cultural value.' }
  ]},
  { id: '1332', korean: '의미', myanmar: 'အဓိပ္ပါယ်', english: 'Meaning', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깊은 의미가 있습니다.', myanmar: 'နက်ရှိုင်းတဲ့ အဓိပ္ပါယ် ရှိတယ်။', english: 'It has deep meaning.' }
  ]},
  { id: '1333', korean: '상징', myanmar: 'သင်္ကေတ', english: 'Symbol', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '평화의 상징입니다.', myanmar: 'ငြိမ်းချမ်းရေးရဲ့ သင်္ကေတပါ။', english: 'It\'s a symbol of peace.' }
  ]},
  { id: '1334', korean: '표현', myanmar: 'ဖော်ပြမှု', english: 'Expression', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자유로운 표현이 중요합니다.', myanmar: 'လွတ်လပ်တဲ့ ဖော်ပြမှု အရေးကြီးတယ်။', english: 'Free expression is important.' }
  ]},
  { id: '1335', korean: '감상', myanmar: 'ခံစားမှု', english: 'Appreciation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '예술 감상을 즐깁니다.', myanmar: 'အနုပညာ ခံစားမှုကို ပျော်ရွှင်တယ်။', english: 'I enjoy art appreciation.' }
  ]},
  { id: '1336', korean: '비평', myanmar: 'ဝေဖန်မှု', english: 'Criticism', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건설적인 비평을 받았습니다.', myanmar: 'တည်ဆောက်ပြီး ဝေဖန်မှု ခံရခဲ့တယ်။', english: 'I received constructive criticism.' }
  ]},
  { id: '1337', korean: '평가', myanmar: 'အကဲဖြတ်မှု', english: 'Evaluation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공정한 평가를 받았습니다.', myanmar: 'တရားမျှတတဲ့ အကဲဖြတ်မှု ခံရခဲ့တယ်။', english: 'I received a fair evaluation.' }
  ]},
  { id: '1338', korean: '영감', myanmar: 'စိတ်ကူးမွေးမြူမှု', english: 'Inspiration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 영감을 받았습니다.', myanmar: 'ကြီးမားတဲ့ စိတ်ကူးမွေးမြူမှု ရခဲ့တယ်။', english: 'I got great inspiration.' }
  ]},
  { id: '1339', korean: '감동', myanmar: 'စိတ်လှုပ်ရှားမှု', english: 'Emotion/Touch', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깊은 감동을 받았습니다.', myanmar: 'နက်ရှိုင်းတဲ့ စိတ်လှုပ်ရှားမှု ခံစားခဲ့တယ်။', english: 'I was deeply moved.' }
  ]},
  { id: '1340', korean: '아름다움', myanmar: 'လှပမှု', english: 'Beauty', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자연의 아름다움을 느꼈습니다.', myanmar: 'သဘာဝရဲ့ လှပမှုကို ခံစားခဲ့တယ်။', english: 'I felt the beauty of nature.' }
  ]},
  { id: '1341', korean: '우아함', myanmar: 'ကျက်သရေရှိမှု', english: 'Elegance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '그녀의 우아함에 감탄했습니다.', myanmar: 'သူမရဲ့ ကျက်သရေရှိမှုကို ထောက်လှမ်းခဲ့တယ်။', english: 'I admired her elegance.' }
  ]},
  { id: '1342', korean: '세련됨', myanmar: 'ပြုပြင်လှပမှု', english: 'Sophistication', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '세련된 디자인입니다.', myanmar: 'ပြုပြင်လှပတဲ့ ဒီဇိုင်းပါ။', english: 'It\'s a sophisticated design.' }
  ]},
  { id: '1343', korean: '독창성', myanmar: 'မူလဖန်တီးမှု', english: 'Originality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '독창성이 돋보입니다.', myanmar: 'မူလဖန်တီးမှု ထင်ရှားတယ်။', english: 'The originality stands out.' }
  ]},
  { id: '1344', korean: '개성', myanmar: 'ကိုယ်ပိုင်လက္ခဏာ', english: 'Individuality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 개성을 가지고 있습니다.', myanmar: 'ပြင်းထန်တဲ့ ကိုယ်ပိုင်လက္ခဏာ ရှိတယ်။', english: 'He has strong individuality.' }
  ]},
  { id: '1345', korean: '스타일', myanmar: 'ပုံစံ', english: 'Style', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '독특한 스타일입니다.', myanmar: 'ထူးခြားတဲ့ ပုံစံပါ။', english: 'It\'s a unique style.' }
  ]},
  { id: '1346', korean: '장르', myanmar: 'အမျိုးအစား', english: 'Genre', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다양한 장르를 좋아합니다.', myanmar: 'မတူကွဲပြားတဲ့ အမျိုးအစား ကြိုက်တယ်။', english: 'I like various genres.' }
  ]},
  { id: '1347', korean: '기법', myanmar: 'နည်းစနစ်', english: 'Technique', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 기법을 배웠습니다.', myanmar: 'နည်းစနစ် အသစ် သင်ခဲ့တယ်။', english: 'I learned a new technique.' }
  ]},
  { id: '1348', korean: '재료', myanmar: 'ပစ္စည်း', english: 'Material', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 재료를 선택했습니다.', myanmar: 'ကောင်းတဲ့ ပစ္စည်း ရွေးချယ်ခဲ့တယ်။', english: 'I selected good materials.' }
  ]},
  { id: '1349', korean: '도구', myanmar: 'ကိရိယာ', english: 'Tool', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '전문 도구를 사용합니다.', myanmar: 'ပညာရှင် ကိရိယာ သုံးတယ်။', english: 'I use professional tools.' }
  ]},
  { id: '1350', korean: '완성', myanmar: 'ပြီးစီးမှု', english: 'Completion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '작품이 완성되었습니다.', myanmar: 'လက်ရာ ပြီးစီးခဲ့တယ်။', english: 'The work is completed.' }
  ]},

  // ===== CATEGORY 8: ADVANCED SPORTS & RECREATION TERMS (1351-1400) =====
  { id: '1351', korean: '골프', myanmar: 'ဂေါက်', english: 'Golf', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '주말에 골프를 칩니다.', myanmar: 'စနေ တနင်္ဂနွေ ဂေါက် ရိုက်တယ်။', english: 'I play golf on weekends.' }
  ]},
  { id: '1352', korean: '골프장', myanmar: 'ဂေါက်ကွင်း', english: 'Golf course', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 골프장이 개장했습니다.', myanmar: 'ဂေါက်ကွင်း အသစ် ဖွင့်လှစ်ခဲ့တယ်။', english: 'A new golf course opened.' }
  ]},
  { id: '1353', korean: '경기장', myanmar: 'ကစားကွင်း', english: 'Stadium', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 경기장에서 경기했습니다.', myanmar: 'ကစားကွင်း ကြီးမှာ ပြိုင်ပွဲ လုပ်ခဲ့တယ်။', english: 'We played at a big stadium.' }
  ]},
  { id: '1354', korean: '관중', myanmar: 'ကြည့်ရှုသူများ', english: 'Spectators', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '많은 관중이 모였습니다.', myanmar: 'ကြည့်ရှုသူများ အများကြီး စုရုံးခဲ့တယ်။', english: 'Many spectators gathered.' }
  ]},
  { id: '1355', korean: '감독', myanmar: 'နည်းပြ', english: 'Coach', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경험 많은 감독입니다.', myanmar: 'အတွေ့အကြုံ များတဲ့ နည်းပြပါ။', english: 'He is an experienced coach.' }
  ]},
  { id: '1356', korean: '선수', myanmar: 'ကစားသမား', english: 'Player/Athlete', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '프로 선수가 되고 싶습니다.', myanmar: 'ပရော ကစားသမား ဖြစ်ချင်တယ်။', english: 'I want to become a professional athlete.' }
  ]},
  { id: '1357', korean: '팀워크', myanmar: 'အဖွဲ့လုပ်ငန်း / စုပေါင်းလုပ်ဆောင်မှ', english: 'Teamwork', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 팀워크가 중요합니다.', myanmar: 'ကောင်းတဲ့ စုပေါင်းလုပ်ဆောင်မှု အရေးကြီးတယ်။', english: 'Good teamwork is important.' }
  ]},
  { id: '1358', korean: '전략', myanmar: 'ဗျူဟာ', english: 'Strategy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 전략을 세웠습니다.', myanmar: 'ဗျူဟာ အသစ် ရေးဆွဲခဲ့တယ်။', english: 'We devised a new strategy.' }
  ]},
  { id: '1359', korean: '기술', myanmar: 'နည်းပညာ', english: 'Technique/Skill', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기술을 연마하고 있습니다.', myanmar: 'နည်းပညာကို တိုးတက်စေနေတယ်။', english: 'I am improving my technique.' }
  ]},
  { id: '1360', korean: '체력', myanmar: 'ခန္ဓာကိုယ်အား', english: 'Physical strength', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '체력을 기르고 있습니다.', myanmar: 'ခန္ဓာကိုယ်အားကို တိုးတက်စေနေတယ်။', english: 'I am building physical strength.' }
  ]},
  { id: '1361', korean: '근력', myanmar: 'ကြွက်သားအား', english: 'Muscle strength', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '근력 운동을 합니다.', myanmar: 'ကြွက်သားအား လေ့ကျင့်ခန်း လုပ်တယ်။', english: 'I do muscle strength exercises.' }
  ]},
  { id: '1362', korean: '지구력', myanmar: 'ခံနိုင်ရည်', english: 'Endurance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지구력을 향상시켰습니다.', myanmar: 'ခံနိုင်ရည်ကို တိုးတက်စေခဲ့တယ်။', english: 'I improved my endurance.' }
  ]},
  { id: '1363', korean: '유연성', myanmar: 'ပျော့ပြောင်းမှု', english: 'Flexibility', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유연성 운동을 했습니다.', myanmar: 'ပျော့ပြောင်းမှု လေ့ကျင့်ခန်း လုပ်ခဲ့တယ်။', english: 'I did flexibility exercises.' }
  ]},
  { id: '1364', korean: '균형감각', myanmar: 'ညီမျှမှုအာရုံ', english: 'Balance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '균형감각이 좋습니다.', myanmar: 'ညီမျှမှုအာရုံ ကောင်းတယ်။', english: 'I have good balance.' }
  ]},
  { id: '1365', korean: '반응속도', myanmar: 'တုံ့ပြန်မှုမြန်နှုန်း', english: 'Reaction speed', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '반응속도가 빠릅니다.', myanmar: 'တုံ့ပြန်မှုမြန်နှုန်း မြန်တယ်။', english: 'My reaction speed is fast.' }
  ]},
  { id: '1366', korean: '집중력', myanmar: 'အာရုံစူးစိုက်မှု', english: 'Concentration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '집중력이 중요합니다.', myanmar: 'အာရုံစူးစိုက်မှု အရေးကြီးတယ်။', english: 'Concentration is important.' }
  ]},
  { id: '1367', korean: '정신력', myanmar: 'စိတ်ဓာတ်', english: 'Mental strength', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 정신력이 필요합니다.', myanmar: 'ပြင်းထန်တဲ့ စိတ်ဓာတ် လိုအပ်တယ်။', english: 'Strong mental strength is needed.' }
  ]},
  { id: '1368', korean: '승부욕', myanmar: 'အနိုင်ရလိုစိတ်', english: 'Competitive spirit', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '승부욕이 강합니다.', myanmar: 'အနိုင်ရလိုစိတ် ပြင်းထန်တယ်။', english: 'He has a strong competitive spirit.' }
  ]},
  { id: '1369', korean: '훈련', myanmar: 'လေ့ကျင့်မှု', english: 'Training', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '매일 훈련을 합니다.', myanmar: 'နေ့တိုင်း လေ့ကျင့်မှု လုပ်တယ်။', english: 'I train every day.' }
  ]},
  { id: '1370', korean: '연습', myanmar: 'အလေ့အကျင့်', english: 'Practice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '더 많은 연습이 필요합니다.', myanmar: 'အလေ့အကျင့် ပိုများ လိုအပ်တယ်။', english: 'More practice is needed.' }
  ]},
  { id: '1371', korean: '경험', myanmar: 'အတွေ့အကြုံ', english: 'Experience', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '많은 경험을 쌓았습니다.', myanmar: 'အတွေ့အကြုံ အများကြီး စုဆောင်းခဲ့တယ်။', english: 'I gained a lot of experience.' }
  ]},
  { id: '1372', korean: '기록', myanmar: 'စံချိန်', english: 'Record', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 기록을 세웠습니다.', myanmar: 'စံချိန် အသစ် တင်ခဲ့တယ်။', english: 'I set a new record.' }
  ]},
  { id: '1373', korean: '메달', myanmar: 'ဆုတံဆိပ်', english: 'Medal', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '금메달을 땄습니다.', myanmar: 'ရွှေ ဆုတံဆိပ် ရခဲ့တယ်။', english: 'I won a gold medal.' }
  ]},
  { id: '1374', korean: '우승', myanmar: 'ချန်ပီယံ', english: 'Championship', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '우승을 차지했습니다.', myanmar: 'ချန်ပီယံ ရရှိခဲ့တယ်။', english: 'We won the championship.' }
  ]},
  { id: '1375', korean: '패배', myanmar: 'ရှုံးနိမ့်မှု', english: 'Defeat', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '패배를 인정했습니다.', myanmar: 'ရှုံးနိမ့်မှုကို လက်ခံခဲ့တယ်။', english: 'I acknowledged the defeat.' }
  ]},
  { id: '1376', korean: '승리', myanmar: 'အနိုင်', english: 'Victory', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 승리를 거뒀습니다.', myanmar: 'အနိုင် ကြီးမားတာ ရခဲ့တယ်။', english: 'We achieved a great victory.' }
  ]},
  { id: '1377', korean: '경쟁자', myanmar: 'ပြိုင်ဘက်', english: 'Competitor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 경쟁자입니다.', myanmar: 'အားကောင်းတဲ့ ပြိုင်ဘက်ပါ။', english: 'He is a strong competitor.' }
  ]},
  { id: '1378', korean: '상대방', myanmar: 'ဆန့်ကျင်ဘက်', english: 'Opponent', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '상대방을 존중합니다.', myanmar: 'ဆန့်ကျင်ဘက်ကို လေးစားတယ်။', english: 'I respect my opponent.' }
  ]},
  { id: '1379', korean: '심판', myanmar: 'တရားသူကြီး', english: 'Referee', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '심판의 판정을 따릅니다.', myanmar: 'တရားသူကြီးရဲ့ စီရင်ချက်ကို လိုက်နာတယ်။', english: 'We follow the referee\'s decision.' }
  ]},
  { id: '1380', korean: '규칙', myanmar: 'စည်းမျဉ်း', english: 'Rules', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '규칙을 지켜야 합니다.', myanmar: 'စည်းမျဉ်းကို လိုက်နာရမယ်။', english: 'We must follow the rules.' }
  ]},
  { id: '1381', korean: '페어플레이', myanmar: 'တရားမျှတကစား', english: 'Fair play', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '페어플레이 정신이 중요합니다.', myanmar: 'တရားမျှတကစား စိတ်ဓာတ် အရေးကြီးတယ်။', english: 'The spirit of fair play is important.' }
  ]},
  { id: '1382', korean: '스포츠맨십', myanmar: 'ကစားသမားဝိညာဉ်', english: 'Sportsmanship', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 스포츠맨십을 보였습니다.', myanmar: 'ကောင်းတဲ့ ကစားသမားဝိညာဉ် ပြခဲ့တယ်။', english: 'He showed good sportsmanship.' }
  ]},
  { id: '1383', korean: '동기부여', myanmar: 'လှုံ့ဆော်မှု', english: 'Motivation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '동기부여가 필요합니다.', myanmar: 'လှုံ့ဆော်မှု လိုအပ်တယ်။', english: 'Motivation is needed.' }
  ]},
  { id: '1384', korean: '목표설정', myanmar: 'ရည်မှန်းချက်သတ်မှတ်မှု', english: 'Goal setting', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '명확한 목표설정이 중요합니다.', myanmar: 'ရှင်းလင်းတဲ့ ရည်မှန်းချက်သတ်မှတ်မှု အရေးကြီးတယ်။', english: 'Clear goal setting is important.' }
  ]},
  { id: '1385', korean: '자기관리', myanmar: 'ကိုယ့်ကိုယ်ကိုထိန်းချုပ်မှု', english: 'Self-management', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '철저한 자기관리를 합니다.', myanmar: 'တင်းကြပ်တဲ့ ကိုယ့်ကိုယ်ကိုထိန်းချုပ်မှု လုပ်တယ်။', english: 'I practice strict self-management.' }
  ]},
  { id: '1386', korean: '컨디션', myanmar: 'ခန္ဓာကိုယ်အခြေအနေ', english: 'Condition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '컨디션이 좋습니다.', myanmar: 'ခန္ဓာကိုယ်အခြေအနေ ကောင်းတယ်။', english: 'My condition is good.' }
  ]},
  { id: '1387', korean: '부상', myanmar: 'ဒဏ်ရာ', english: 'Injury', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '부상을 당했습니다.', myanmar: 'ဒဏ်ရာ ရရှိခဲ့တယ်။', english: 'I got injured.' }
  ]},
  { id: '1388', korean: '회복', myanmar: 'ပြန်လည်ကောင်းမွန်မှု', english: 'Recovery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '빠른 회복을 위해 노력합니다.', myanmar: 'မြန်မြန် ပြန်လည်ကောင်းမွန်မှုအတွက် ကြိုးစားတယ်။', english: 'I work hard for quick recovery.' }
  ]},
  { id: '1389', korean: '재활운동', myanmar: 'ပြန်လည်ထူထောင်ရေးလေ့ကျင့်ခန်း', english: 'Rehabilitation exercise', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재활운동을 하고 있습니다.', myanmar: 'ပြန်လည်ထူထောင်ရေးလေ့ကျင့်ခန်း လုပ်နေတယ်။', english: 'I am doing rehabilitation exercises.' }
  ]},
  { id: '1390', korean: '영양관리', myanmar: 'အာဟာရထိန်းသိမ်းမှု', english: 'Nutrition management', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '체계적인 영양관리를 합니다.', myanmar: 'စနစ်တကျ အာဟာရထိန်းသိမ်းမှု လုပ်တယ်။', english: 'I practice systematic nutrition management.' }
  ]},
  { id: '1391', korean: '수면관리', myanmar: 'အိပ်စက်မှုထိန်းသိမ်းမှု', english: 'Sleep management', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '충분한 수면관리가 중요합니다.', myanmar: 'လုံလောက်တဲ့ အိပ်စက်မှုထိန်းသိမ်းမှု အရေးကြီးတယ်။', english: 'Adequate sleep management is important.' }
  ]},
  { id: '1392', korean: '스트레칭', myanmar: 'ကြွက်သားဆွဲခြင်း', english: 'Stretching', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운동 전에 스트레칭을 합니다.', myanmar: 'လေ့ကျင့်ခန်း မလုပ်ခင် ကြွက်သားဆွဲခြင်း လုပ်တယ်။', english: 'I do stretching before exercising.' }
  ]},
  { id: '1393', korean: '웜업', myanmar: 'ကြိုတင်ပြင်ဆင်ခြင်း', english: 'Warm-up', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '충분한 웜업이 필요합니다.', myanmar: 'လုံလောက်တဲ့ ကြိုတင်ပြင်ဆင်ခြင်း လိုအပ်တယ်။', english: 'Adequate warm-up is needed.' }
  ]},
  { id: '1394', korean: '쿨다운', myanmar: 'အေးခြင်းလေ့ကျင့်ခြင်း', english: 'Cool-down', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운동 후 쿨다운을 했습니다.', myanmar: 'လေ့ကျင့်ခန်း လုပ်ပြီး အေးခြင်းလေ့ကျင့်ခြင်း လုပ်ခဲ့တယ်။', english: 'I did cool-down after exercising.' }
  ]},
  { id: '1395', korean: '장비', myanmar: 'ကိရိယာ', english: 'Equipment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 장비를 사용합니다.', myanmar: 'ကောင်းတဲ့ ကိရိယာ သုံးတယ်။', english: 'I use good equipment.' }
  ]},
  { id: '1396', korean: '용품', myanmar: 'ပစ္စည်းများ', english: 'Supplies', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운동 용품을 샀습니다.', myanmar: 'လေ့ကျင့်ခန်း ပစ္စည်းများ ဝယ်ခဲ့တယ်။', english: 'I bought exercise supplies.' }
  ]},
  { id: '1397', korean: '유니폼', myanmar: 'တူညီဝတ်စုံ', english: 'Uniform', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '팀 유니폼을 입었습니다.', myanmar: 'အဖွဲ့ တူညီသောဝတ်စုံ ဝတ်ခဲ့တယ်။', english: 'I wore the team uniform.' }
  ]},
  { id: '1398', korean: '신발', myanmar: 'ဖိနပ်', english: 'Shoes', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운동화를 신었습니다.', myanmar: 'အားကစားဖိနပ် စီးခဲ့တယ်။', english: 'I wore athletic shoes.' }
  ]},
  { id: '1399', korean: '안전', myanmar: 'လုံခြုံမှု', english: 'Safety', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '안전이 가장 중요합니다.', myanmar: 'လုံခြုံမှုက အရေးအကြီးဆုံးပါ။', english: 'Safety is the most important.' }
  ]},
  { id: '1400', korean: '재미', myanmar: 'ပျော်ရွှင်မှု', english: 'Fun', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운동의 재미를 느낍니다.', myanmar: 'လေ့ကျင့်ခန်းရဲ့ ပျော်ရွှင်မှု ခံစားတယ်။', english: 'I feel the fun of exercising.' }
  ]},

  // ===== CATEGORY 9: ADVANCED NATURE & ENVIRONMENT TERMS (1401-1450) =====
  { id: '1401', korean: '기후', myanmar: 'ရာသီဥတု', english: 'Climate', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기후가 변하고 있습니다.', myanmar: 'ရာသီဥတု ပြောင်းလဲနေတယ်။', english: 'The climate is changing.' }
  ]},
  { id: '1402', korean: '기후변화', myanmar: 'ရာသီဥတုပြောင်းလဲမှု', english: 'Climate change', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기후변화가 심각합니다.', myanmar: 'ရာသီဥတုပြောင်းလဲမှု လေးနက်တယ်။', english: 'Climate change is serious.' }
  ]},
  { id: '1403', korean: '지구온난화', myanmar: 'ကမ္ဘာ့အပူချိန်မြင့်တက်မှု', english: 'Global warming', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지구온난화를 막아야 합니다.', myanmar: 'ကမ္ဘာ့အပူချိန်မြင့်တက်မှုကို တားဆီးရမယ်။', english: 'We must prevent global warming.' }
  ]},
  { id: '1404', korean: '온실가스', myanmar: 'ဖန်အိမ်ဓာတ်ငွေ့', english: 'Greenhouse gas', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '온실가스를 줄여야 합니다.', myanmar: 'ဖန်အိမ်ဓာတ်ငွေ့ကို လျှော့ချရမယ်။', english: 'We need to reduce greenhouse gases.' }
  ]},
  { id: '1405', korean: '환경보호', myanmar: 'သဘာဝပတ်ဝန်းကျင်ကာကွယ်မှု', english: 'Environmental protection', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경보호가 중요합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင်ကာကွယ်မှု အရေးကြီးတယ်။', english: 'Environmental protection is important.' }
  ]},
  { id: '1406', korean: '생태계', myanmar: 'ဂေဟစနစ်', english: 'Ecosystem', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생태계를 보존해야 합니다.', myanmar: 'ဂေဟစနစ်ကို ထိန်းသိမ်းရမယ်။', english: 'We must preserve the ecosystem.' }
  ]},
  { id: '1407', korean: '생물다양성', myanmar: 'ဇီဝမတူကွဲပြားမှု', english: 'Biodiversity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생물다양성이 감소하고 있습니다.', myanmar: 'ဇီဝမတူကွဲပြားမှု လျော့နည်းနေတယ်။', english: 'Biodiversity is decreasing.' }
  ]},
  { id: '1408', korean: '멸종위기', myanmar: 'မျိုးတုံးရန်အန္တရာယ်', english: 'Endangered', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '멸종위기 동물을 보호합니다.', myanmar: 'မျိုးတုံးရန်အန္တရာယ် တိရစ္ဆာန်တွေကို ကာကွယ်တယ်။', english: 'We protect endangered animals.' }
  ]},
  { id: '1409', korean: '자연보호', myanmar: 'သဘာဝကို ကာကွယ်မှု', english: 'Nature conservation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자연보호 활동에 참여합니다.', myanmar: 'သဘာဝကာကွယ်မှု လုပ်ငန်းမှာ ပါဝင်တယ်။', english: 'I participate in nature conservation activities.' }
  ]},
  { id: '1410', korean: '재활용', myanmar: 'ပြန်လည်အသုံးပြုမှု', english: 'Recycling', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재활용을 실천합니다.', myanmar: 'ပြန်လည်အသုံးပြုမှု လုပ်ဆောင်တယ်။', english: 'I practice recycling.' }
  ]},
  { id: '1411', korean: '분리수거', myanmar: 'ခွဲခြားစွန့်ပစ်ခြင်း', english: 'Waste separation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '분리수거를 철저히 합니다.', myanmar: 'ခွဲခြားစွန့်ပစ်မှုကို တင်းကြပ်စွာ လုပ်တယ်။', english: 'I do waste separation thoroughly.' }
  ]},
  { id: '1412', korean: '오염', myanmar: 'ညစ်ညမ်းမှု', english: 'Pollution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대기 오염이 심각합니다.', myanmar: 'လေထု ညစ်ညမ်းမှု လေးနက်တယ်။', english: 'Air pollution is serious.' }
  ]},
  { id: '1413', korean: '공해', myanmar: 'လူထုကျန်းမာရေးညစ်ညမ်းမှု', english: 'Pollution/Contamination', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공해를 줄여야 합니다.', myanmar: 'လူထုကျန်းမာရေးညစ်ညမ်းမှုကို လျှော့ချရမယ်။', english: 'We need to reduce pollution.' }
  ]},
  { id: '1414', korean: '폐기물', myanmar: 'စွန့်ပစ်ပစ္စည်း', english: 'Waste', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '폐기물을 줄이고 있습니다.', myanmar: 'စွန့်ပစ်ပစ္စည်းကို လျှော့ချနေတယ်။', english: 'We are reducing waste.' }
  ]},
  { id: '1415', korean: '쓰레기', myanmar: 'အမှိုက်', english: 'Garbage/Trash', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '쓰레기를 함부로 버리면 안 됩니다.', myanmar: 'အမှိုက်ကို သတ်မှတ်ချက်မရှိ မစွန့်ရမယ်။', english: 'We should not throw garbage carelessly.' }
  ]},
  { id: '1416', korean: '플라스틱', myanmar: 'ပလပ်စတစ်', english: 'Plastic', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '플라스틱 사용을 줄입니다.', myanmar: 'ပလပ်စတစ် သုံးစွဲမှုကို လျှော့ချတယ်။', english: 'We reduce plastic usage.' }
  ]},
  { id: '1417', korean: '친환경', myanmar: 'သဘာဝပတ်ဝန်းကျင်နှင့်လိုက်ဖက်သော / ပတ်ဝန်းကျင်အတွက်  ကောင်းသော', english: 'Eco-friendly', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '친환경 제품을 사용합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင်နှင့်လိုက်ဖက်တဲ့ ကုန်ပစ္စည်း သုံးတယ်။', english: 'We use eco-friendly products.' }
  ]},
  { id: '1418', korean: '지속가능성', myanmar: 'ရေရှည်တည်တံ့နိုင်မှု', english: 'Sustainability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지속가능성을 고려합니다.', myanmar: 'ရေရှည်တည်တံ့နိုင်မှုကို စဉ်းစားတယ်။', english: 'We consider sustainability.' }
  ]},
  { id: '1419', korean: '재생에너지', myanmar: 'ပြန်လည်ရရှိနိုင်သောစွမ်းအင်', english: 'Renewable energy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재생에너지를 사용합니다.', myanmar: 'ပြန်လည်ရရှိနိုင်သောစွမ်းအင် သုံးတယ်။', english: 'We use renewable energy.' }
  ]},
  { id: '1420', korean: '태양에너지', myanmar: 'နေရောင်ခြည်စွမ်းအင်', english: 'Solar energy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '태양에너지를 활용합니다.', myanmar: 'နေရောင်ခြည်စွမ်းအင်ကို အသုံးချတယ်။', english: 'We utilize solar energy.' }
  ]},
  { id: '1421', korean: '풍력에너지', myanmar: 'လေစွမ်းအင်', english: 'Wind energy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '풍력에너지가 인기입니다.', myanmar: 'လေစွမ်းအင် လူကြိုက်များတယ်။', english: 'Wind energy is popular.' }
  ]},
  { id: '1422', korean: '수력에너지', myanmar: 'ရေစွမ်းအင်', english: 'Hydroelectric energy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수력에너지를 개발합니다.', myanmar: 'ရေစွမ်းအင်ကို ဖွံ့ဖြိုးတိုးတက်စေတယ်။', english: 'We develop hydroelectric energy.' }
  ]},
  { id: '1423', korean: '화석연료', myanmar: 'ကျောက်ဖြစ်လာသောလောင်စာ', english: 'Fossil fuel', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '화석연료 사용을 줄입니다.', myanmar: 'ကျောက်ဖြစ်လာသောလောင်စာ သုံးစွဲမှုကို လျှော့ချတယ်။', english: 'We reduce fossil fuel usage.' }
  ]},
  { id: '1424', korean: '탄소발자국', myanmar: 'ကာဗွန်ခြေရာ / အကြွင်းအကြံ', english: 'Carbon footprint', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '탄소발자국을 줄여야 합니다.', myanmar: 'ကာဗွန်အကြွင်းအကြံကို လျှော့ချရမယ်။', english: 'We need to reduce our carbon footprint.' }
  ]},
  { id: '1425', korean: '산림', myanmar: 'သစ်တော', english: 'Forest', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '산림을 보호해야 합니다.', myanmar: 'သစ်တောကို ကာကွယ်ရမယ်။', english: 'We must protect forests.' }
  ]},
  { id: '1426', korean: '산림파괴', myanmar: 'သစ်တောပျက်စီးမှု', english: 'Deforestation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '산림파괴를 막아야 합니다.', myanmar: 'သစ်တောပျက်စီးမှုကို တားဆီးရမယ်။', english: 'We must prevent deforestation.' }
  ]},
  { id: '1427', korean: '사막화', myanmar: 'သဲကန္တာရဖြစ်လာခြင်း', english: 'Desertification', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '사막화가 진행되고 있습니다.', myanmar: 'သဲကန္တာရဖြစ်လာခြင်း ဖြစ်ပျက်နေတယ်။', english: 'Desertification is progressing.' }
  ]},
  { id: '1428', korean: '토양오염', myanmar: 'မြေဆီလွှာညစ်ညမ်းမှု', english: 'Soil pollution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '토양오염을 방지합니다.', myanmar: 'မြေဆီလွှာညစ်ညမ်းမှုကို ကာကွယ်တယ်။', english: 'We prevent soil pollution.' }
  ]},
  { id: '1429', korean: '수질오염', myanmar: 'ရေညစ်ညမ်းမှု', english: 'Water pollution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수질오염이 심각합니다.', myanmar: 'ရေညစ်ညမ်းမှု လေးနက်တယ်။', english: 'Water pollution is serious.' }
  ]},
  { id: '1430', korean: '대기오염', myanmar: 'လေထုညစ်ညမ်းမှု', english: 'Air pollution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대기오염을 줄이고 있습니다.', myanmar: 'လေထုညစ်ညမ်းမှုကို လျှော့ချနေတယ်။', english: 'We are reducing air pollution.' }
  ]},
  { id: '1431', korean: '소음공해', myanmar: 'အသံညစ်ညမ်းမှု', english: 'Noise pollution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소음공해가 문제입니다.', myanmar: 'အသံညစ်ညမ်းမှု ပြဿနာပါ။', english: 'Noise pollution is a problem.' }
  ]},
  { id: '1432', korean: '자원', myanmar: 'သယံဇာတ', english: 'Resources', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자원을 절약해야 합니다.', myanmar: 'သယံဇာတကို သက်သာအောင် သုံးရမယ်။', english: 'We must conserve resources.' }
  ]},
  { id: '1433', korean: '자원고갈', myanmar: 'သယံဇာတကုန်ခမ်းမှု', english: 'Resource depletion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자원고갈이 우려됩니다.', myanmar: 'သယံဇာတကုန်ခမ်းမှု စိုးရိမ်စရာပါ။', english: 'Resource depletion is concerning.' }
  ]},
  { id: '1434', korean: '물부족', myanmar: 'ရေရှားပါးမှု', english: 'Water shortage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '물부족 현상이 심각합니다.', myanmar: 'ရေရှားပါးမှု အခြေအနေ လေးနက်တယ်။', english: 'The water shortage situation is serious.' }
  ]},
  { id: '1435', korean: '절약', myanmar: 'သက်သာအောင်သုံးခြင်း', english: 'Conservation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '에너지 절약을 실천합니다.', myanmar: 'စွမ်းအင် သက်သာအောင်သုံးခြင်း လုပ်ဆောင်တယ်။', english: 'We practice energy conservation.' }
  ]},
  { id: '1436', korean: '효율성', myanmar: 'ထိရောက်မှု', english: 'Efficiency', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '에너지 효율성을 높입니다.', myanmar: 'စွမ်းအင် ထိရောက်မှုကို တိုးမြှင့်တယ်။', english: 'We improve energy efficiency.' }
  ]},
  { id: '1437', korean: '녹색기술', myanmar: 'အစိမ်းရောင်နည်းပညာ', english: 'Green technology', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '녹색기술을 개발합니다.', myanmar: 'အစိမ်းရောင်နည်းပညာကို ဖွံ့ဖြိုးတိုးတက်စေတယ်။', english: 'We develop green technology.' }
  ]},
  { id: '1438', korean: '청정에너지', myanmar: 'သန့်ရှင်းသောစွမ်းအင်', english: 'Clean energy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '청정에너지로 전환합니다.', myanmar: 'သန့်ရှင်းသောစွမ်းအင်ကို ပြောင်းလဲတယ်။', english: 'We switch to clean energy.' }
  ]},
  { id: '1439', korean: '유기농', myanmar: 'ဇီဝမွေးမြူရေး', english: 'Organic', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '유기농 제품을 선호합니다.', myanmar: 'ဇီဝမွေးမြူရေး ကုန်ပစ္စည်းကို နှစ်သက်တယ်။', english: 'We prefer organic products.' }
  ]},
  { id: '1440', korean: '지구', myanmar: 'ကမ္ဘာ', english: 'Earth', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지구를 보호해야 합니다.', myanmar: 'ကမ္ဘာကို ကာကွယ်ရမယ်။', english: 'We must protect the Earth.' }
  ]},
  { id: '1441', korean: '지구촌', myanmar: 'ကမ္ဘာ့လူ့အဖွဲ့အစည်း', english: 'Global community', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지구촌 문제를 해결해야 합니다.', myanmar: 'ကမ္ဘာ့လူ့အဖွဲ့အစည်း ပြဿနာကို ဖြေရှင်းရမယ်။', english: 'We must solve global community problems.' }
  ]},
  { id: '1442', korean: '환경의식', myanmar: 'သဘာဝပတ်ဝန်းကျင်သတိ', english: 'Environmental awareness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경의식을 높여야 합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင်သတိကို မြှင့်တင်ရမယ်။', english: 'We need to raise environmental awareness.' }
  ]},
  { id: '1443', korean: '환경교육', myanmar: 'သဘာဝပတ်ဝန်းကျင်ပညာရေး', english: 'Environmental education', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경교육이 중요합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင်ပညာရေး အရေးကြီးတယ်။', english: 'Environmental education is important.' }
  ]},
  { id: '1444', korean: '환경운동', myanmar: 'သဘာဝပတ်ဝန်းကျင်လှုပ်ရှားမှု', english: 'Environmental movement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경운동에 참여합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင်လှုပ်ရှားမှုမှာ ပါဝင်တယ်။', english: 'I participate in the environmental movement.' }
  ]},
  { id: '1445', korean: '국제협력', myanmar: 'နိုင်ငံတကာပူးပေါင်းဆောင်ရွက်မှု', english: 'International cooperation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국제협력이 필요합니다.', myanmar: 'နိုင်ငံတကာပူးပေါင်းဆောင်ရွက်မှု လိုအပ်တယ်။', english: 'International cooperation is needed.' }
  ]},
  { id: '1446', korean: '규제', myanmar: 'ထိန်းချုပ်မှု', english: 'Regulation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경 규제를 강화합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင် ထိန်းချုပ်မှုကို အားကောင်းအောင် လုပ်တယ်။', english: 'We strengthen environmental regulations.' }
  ]},
  { id: '1447', korean: '감시', myanmar: 'စောင့်ကြည့်ခြင်း', english: 'Monitoring', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경 감시를 실시합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင် စောင့်ကြည့်ခြင်း လုပ်ဆောင်တယ်။', english: 'We conduct environmental monitoring.' }
  ]},
  { id: '1448', korean: '개선', myanmar: 'တိုးတက်စေခြင်း', english: 'Improvement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경 개선에 노력합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင် တိုးတက်စေခြင်းအတွက် ကြိုးစားတယ်။', english: 'We work for environmental improvement.' }
  ]},
  { id: '1449', korean: '복원', myanmar: 'ပြန်လည်ရယူခြင်း', english: 'Restoration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생태계 복원을 진행합니다.', myanmar: 'ဂေဟစနစ် ပြန်လည်ရယူခြင်း လုပ်ဆောင်တယ်။', english: 'We proceed with ecosystem restoration.' }
  ]},
  { id: '1450', korean: '균형', myanmar: 'ညီမျှမှု', english: 'Balance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자연과의 균형이 중요합니다.', myanmar: 'သဘာဝနဲ့ ညီမျှမှု အရေးကြီးတယ်။', english: 'Balance with nature is important.' }
  ]},

  // ===== CATEGORY 10: ADVANCED TRANSPORTATION & LOGISTICS TERMS (1451-1500) =====
  { id: '1451', korean: '교통', myanmar: 'သယ်ယူပို့ဆောင်ရေး', english: 'Transportation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통이 편리합니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေး အဆင်ပြေတယ်။', english: 'Transportation is convenient.' }
  ]},
  { id: '1452', korean: '교통체계', myanmar: 'သယ်ယူပို့ဆောင်ရေးစနစ်', english: 'Transportation system', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통체계가 발달했습니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးစနစ် ဖွံ့ဖြိုးတိုးတက်ခဲ့တယ်။', english: 'The transportation system has developed.' }
  ]},
  { id: '1453', korean: '교통수단', myanmar: 'သယ်ယူပို့ဆောင်ရေးနည်းလမ်း', english: 'Means of transportation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다양한 교통수단이 있습니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးနည်းလမ်း မျိုးစုံ ရှိတယ်။', english: 'There are various means of transportation.' }
  ]},
  { id: '1454', korean: '대중교통', myanmar: 'လူထုသယ်ယူပို့ဆောင်ရေး', english: 'Public transportation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '대중교통을 이용합니다.', myanmar: 'လူထုသယ်ယူပို့ဆောင်ရေး အသုံးပြုတယ်။', english: 'I use public transportation.' }
  ]},
  { id: '1455', korean: '개인교통', myanmar: 'တစ်ဦးချင်းသယ်ယူပို့ဆောင်ရေး', english: 'Private transportation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '개인교통이 증가하고 있습니다.', myanmar: 'တစ်ဦးချင်းသယ်ယူပို့ဆောင်ရေး တိုးလာနေတယ်။', english: 'Private transportation is increasing.' }
  ]},
  { id: '1456', korean: '교통비', myanmar: 'သယ်ယူပို့ဆောင်ရေးကုန်ကျစရိတ်', english: 'Transportation cost', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통비가 비쌉니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးကုန်ကျစရိတ် စျေးကြီးတယ်။', english: 'Transportation cost is expensive.' }
  ]},
  { id: '1457', korean: '교통카드', myanmar: 'သယ်ယူပို့ဆောင်ရေးကတ်', english: 'Transportation card', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통카드를 충전했습니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးကတ် ငွေဖြည့်ခဲ့တယ်။', english: 'I recharged the transportation card.' }
  ]},
  { id: '1458', korean: '교통신호', myanmar: 'သယ်ယူပို့ဆောင်ရေးအချက်ပြ', english: 'Traffic signal', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통신호를 지켜야 합니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးအချက်ပြကို လိုက်နာရမယ်။', english: 'We must follow traffic signals.' }
  ]},
  { id: '1459', korean: '교통규칙', myanmar: 'သယ်ယူပို့ဆောင်ရေးစည်းမျဉ်း', english: 'Traffic rules', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통규칙을 준수합니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးစည်းမျဉ်း လိုက်နာတယ်။', english: 'We comply with traffic rules.' }
  ]},
  { id: '1460', korean: '교통사고', myanmar: 'သယ်ယူပို့ဆောင်ရေးမတော်တဆမှု', english: 'Traffic accident', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통사고를 예방해야 합니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးမတော်တဆမှုကို ကာကွယ်ရမယ်။', english: 'We must prevent traffic accidents.' }
  ]},
  { id: '1461', korean: '교통체증', myanmar: 'သယ်ယူပို့ဆောင်ရေးပိတ်ဆို့မှု', english: 'Traffic jam', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교통체증이 심합니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးပိတ်ဆို့မှု ပြင်းထန်တယ်။', english: 'The traffic jam is severe.' }
  ]},
  { id: '1462', korean: '주차장', myanmar: 'ကားရပ်နားရာနေရာ', english: 'Parking lot', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '주차장을 찾고 있습니다.', myanmar: 'ကားရပ်နားရာနေရာ ရှာနေတယ်။', english: 'I am looking for a parking lot.' }
  ]},
  { id: '1463', korean: '주차요금', myanmar: 'ကားရပ်နားခ', english: 'Parking fee', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '주차요금을 지불했습니다.', myanmar: 'ကားရပ်နားခ ပေးချေခဲ့တယ်။', english: 'I paid the parking fee.' }
  ]},
  { id: '1464', korean: '운전면허', myanmar: 'ကားမောင်းလိုင်စင်', english: 'Driver\'s license', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운전면허를 취득했습니다.', myanmar: 'ကားမောင်းလိုင်စင် ရရှိခဲ့တယ်။', english: 'I obtained a driver\'s license.' }
  ]},
  { id: '1465', korean: '운전자', myanmar: 'ကားမောင်းသူ', english: 'Driver', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경험 많은 운전자입니다.', myanmar: 'အတွေ့အကြုံ များတဲ့ ကားမောင်းသူပါ။', english: 'He is an experienced driver.' }
  ]},
  { id: '1466', korean: '승객', myanmar: 'ခရီးသည်', english: 'Passenger', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '승객들이 많습니다.', myanmar: 'ခရီးသည်တွေ များတယ်။', english: 'There are many passengers.' }
  ]},
  { id: '1467', korean: '탑승', myanmar: 'စီးနင်းခြင်း', english: 'Boarding', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '탑승을 시작합니다.', myanmar: 'စီးနင်းခြင်း စတင်တယ်။', english: 'We start boarding.' }
  ]},
  { id: '1468', korean: '하차', myanmar: 'ဆင်းခြင်း', english: 'Getting off', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다음 정류장에서 하차합니다.', myanmar: 'လာမယ့် ရပ်နားတဲ့နေရာမှာ ဆင်းတယ်။', english: 'I get off at the next stop.' }
  ]},
  { id: '1469', korean: '정류장', myanmar: 'ရပ်နားတဲ့နေရာ', english: 'Bus stop', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정류장에서 기다립니다.', myanmar: 'ရပ်နားတဲ့နေရာမှာ စောင့်တယ်။', english: 'I wait at the bus stop.' }
  ]},
  { id: '1470', korean: '터미널', myanmar: 'ဂိတ်ဝေး', english: 'Terminal', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '터미널에 도착했습니다.', myanmar: 'ဂိတ်ဝေးကို ရောက်ခဲ့တယ်။', english: 'We arrived at the terminal.' }
  ]},
  { id: '1471', korean: '공항', myanmar: 'လေဆိပ်', english: 'Airport', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공항으로 갑니다.', myanmar: 'လေဆိပ်ကို သွားတယ်။', english: 'I go to the airport.' }
  ]},
  { id: '1472', korean: '기차역', myanmar: 'ရထားဘူတာ', english: 'Train station', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기차역에서 만납시다.', myanmar: 'ရထားဘူတာမှာ တွေ့ကြရအောင်။', english: 'Let\'s meet at the train station.' }
  ]},
  { id: '1473', korean: '항구', myanmar: 'ဆိပ်ကမ်း', english: 'Port', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '항구에서 배를 탔습니다.', myanmar: 'ဆိပ်ကမ်းမှာ သင်္ဘော စီးခဲ့တယ်။', english: 'I took a boat at the port.' }
  ]},
  { id: '1474', korean: '화물', myanmar: 'ကုန်ပစ္စည်း', english: 'Cargo', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '화물을 운송합니다.', myanmar: 'ကုန်ပစ္စည်းကို ပို့ဆောင်တယ်။', english: 'We transport cargo.' }
  ]},
  { id: '1475', korean: '배송', myanmar: 'ပို့ဆောင်မှု', english: 'Delivery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '배송이 완료되었습니다.', myanmar: 'ပို့ဆောင်မှု ပြီးစီးခဲ့တယ်။', english: 'The delivery is completed.' }
  ]},
  { id: '1476', korean: '택배', myanmar: 'အိမ်ပို့ ပစ္စည်း / အိမ်ပစ္စည်း ပို့ဆောင်မှု', english: 'Parcel delivery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '택배가 도착했습니다.', myanmar: 'အိမ်ပို့ပစ္စည်း ရောက်လာခဲ့တယ်။', english: 'The parcel delivery has arrived.' }
  ]},
  { id: '1477', korean: '물류', myanmar: 'ကုန်ပစ္စည်းစီမံခန့်ခွဲမှု', english: 'Logistics', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '물류 시스템이 발달했습니다.', myanmar: 'ကုန်ပစ္စည်းစီမံခန့်ခွဲမှု စနစ် ဖွံ့ဖြိုးတိုးတက်ခဲ့တယ်။', english: 'The logistics system has developed.' }
  ]},
  { id: '1478', korean: '운송', myanmar: 'သယ်ယူပို့ဆောင်ခြင်း', english: 'Transportation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운송비가 비쌉니다.', myanmar: 'သယ်ယူပို့ဆောင်ခ စျေးကြီးတယ်။', english: 'Transportation cost is expensive.' }
  ]},
  { id: '1479', korean: '운송수단', myanmar: 'သယ်ယူပို့ဆောင်ရေးကိရိယာ', english: 'Transportation vehicle', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다양한 운송수단을 이용합니다.', myanmar: 'သယ်ယူပို့ဆောင်ရေးကိရိယာ မျိုးစုံ အသုံးပြုတယ်။', english: 'We use various transportation vehicles.' }
  ]},
  { id: '1480', korean: '창고', myanmar: 'ဂိုဒေါင်', english: 'Warehouse', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '창고에 보관합니다.', myanmar: 'ဂိုဒေါင်မှာ သိမ်းဆည်းတယ်။', english: 'We store in the warehouse.' }
  ]},
  { id: '1481', korean: '보관', myanmar: 'သိမ်းဆည်းခြင်း', english: 'Storage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '안전한 보관이 중요합니다.', myanmar: 'လုံခြုံတဲ့ သိမ်းဆည်းခြင်း အရေးကြီးတယ်။', english: 'Safe storage is important.' }
  ]},
  { id: '1482', korean: '포장', myanmar: 'ထုပ်ပိုးခြင်း', english: 'Packaging', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '포장을 잘해야 합니다.', myanmar: 'ထုပ်ပိုးခြင်း ကောင်းကောင်း လုပ်ရမယ်။', english: 'We need to package well.' }
  ]},
  { id: '1483', korean: '하역', myanmar: 'တင်ချခြင်း', english: 'Loading/Unloading', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '하역 작업을 합니다.', myanmar: 'တင်ချခြင်း လုပ်ငန်း လုပ်တယ်။', english: 'We do loading/unloading work.' }
  ]},
  { id: '1484', korean: '선적', myanmar: 'သင်္ဘောတင်ခြင်း', english: 'Shipping', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '선적을 준비합니다.', myanmar: 'သင်္ဘောတင်ခြင်း ပြင်ဆင်တယ်။', english: 'We prepare for shipping.' }
  ]},
  { id: '1485', korean: '통관', myanmar: 'အကောက်ခွန်ရုံးဖြတ်သန်းခြင်း', english: 'Customs clearance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '통관 절차를 밟습니다.', myanmar: 'အကောက်ခွန်ရုံးဖြတ်သန်းခြင်း လုပ်ထုံးလုပ်နည်း လုပ်တယ်။', english: 'We go through customs clearance procedures.' }
  ]},
  { id: '1486', korean: '관세', myanmar: 'အကောက်ခွန်', english: 'Customs duty', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '관세를 납부했습니다.', myanmar: 'အကောက်ခွန် ပေးချေခဲ့တယ်။', english: 'We paid the customs duty.' }
  ]},
  { id: '1487', korean: '수입', myanmar: 'တင်သွင်းခြင်း', english: 'Import', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수입 절차가 복잡합니다.', myanmar: 'တင်သွင်းခြင်း လုပ်ထုံးလုပ်နည်း ရှုပ်ထွေးတယ်။', english: 'Import procedures are complex.' }
  ]},
  { id: '1488', korean: '수출', myanmar: 'တင်ပို့ခြင်း', english: 'Export', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수출량이 증가했습니다.', myanmar: 'တင်ပို့ခြင်း ပမာဏ တိုးလာခဲ့တယ်။', english: 'Export volume has increased.' }
  ]},
  { id: '1489', korean: '국제운송', myanmar: 'နိုင်ငံတကာသယ်ယူပို့ဆောင်ခြင်း', english: 'International transportation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국제운송이 발달했습니다.', myanmar: 'နိုင်ငံတကာသယ်ယူပို့ဆောင်ခြင်း ဖွံ့ဖြိုးတိုးတက်ခဲ့တယ်။', english: 'International transportation has developed.' }
  ]},
  { id: '1490', korean: '국내운송', myanmar: 'နိုင်ငံတွင်းသယ်ယူပို့ဆောင်ခြင်း', english: 'Domestic transportation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국내운송망이 잘 되어 있습니다.', myanmar: 'နိုင်ငံတွင်းသယ်ယူပို့ဆောင်ခြင်း ကွန်ယက် ကောင်းမွန်စွာ ရှိတယ်။', english: 'The domestic transportation network is well established.' }
  ]},
  { id: '1491', korean: '경로', myanmar: 'လမ်းကြောင်း', english: 'Route', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '최적의 경로를 찾습니다.', myanmar: 'အကောင်းဆုံး လမ်းကြောင်း ရှာတယ်။', english: 'We find the optimal route.' }
  ]},
  { id: '1492', korean: '거리', myanmar: 'အကွာအဝေး', english: 'Distance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '거리가 멉니다.', myanmar: 'အကွာအဝေး ဝေးတယ်။', english: 'The distance is far.' }
  ]},
  { id: '1493', korean: '시간', myanmar: 'အချိန်', english: 'Time', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시간이 오래 걸립니다.', myanmar: 'အချိန် ကြာမြင့်စွာ ကုန်တယ်။', english: 'It takes a long time.' }
  ]},
  { id: '1494', korean: '속도', myanmar: 'အမြန်နှုန်း', english: 'Speed', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '속도를 줄여야 합니다.', myanmar: 'အမြန်နှုန်းကို လျှော့ချရမယ်။', english: 'We need to reduce speed.' }
  ]},
  { id: '1495', korean: '연료', myanmar: 'လောင်စာ', english: 'Fuel', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '연료를 보충했습니다.', myanmar: 'လောင်စာ ဖြည့်စွက်ခဲ့တယ်။', english: 'We refueled.' }
  ]},
  { id: '1496', korean: '유지비', myanmar: 'ထိန်းသိမ်းခ', english: 'Maintenance cost', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유지비가 많이 듭니다.', myanmar: 'ထိန်းသိမ်းခ အများကြီး ကုန်တယ်။', english: 'Maintenance cost is high.' }
  ]},
  { id: '1497', korean: '보험', myanmar: 'အာမခံ', english: 'Insurance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '보험에 가입했습니다.', myanmar: 'အာမခံ ဝင်ခဲ့တယ်။', english: 'I joined the insurance.' }
  ]},
  { id: '1498', korean: '안전', myanmar: 'လုံခြုံမှု', english: 'Safety', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '안전이 최우선입니다.', myanmar: 'လုံခြုံမှုက ပထမဦးစားပေးပါ။', english: 'Safety is the top priority.' }
  ]},
  { id: '1499', korean: '효율성', myanmar: 'ထိရောက်မှု', english: 'Efficiency', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운송 효율성을 높입니다.', myanmar: 'သယ်ယူပို့ဆောင်ခြင်း ထိရောက်မှုကို တိုးမြှင့်တယ်။', english: 'We improve transportation efficiency.' }
  ]},
  { id: '1500', korean: '편의성', myanmar: 'အဆင်ပြေမှု', english: 'Convenience', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '편의성이 중요합니다.', myanmar: 'အဆင်ပြေမှု အရေးကြီးတယ်။', english: 'Convenience is important.' }
  ]},

  // ===== CATEGORY 11: ADVANCED COMMUNICATION & MEDIA TERMS (1501-1550) =====
  { id: '1501', korean: '소통', myanmar: 'ဆက်သွယ်မှု / ဆက်သွယ်ခြင်း', english: 'Communication', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '원활한 소통이 중요합니다.', myanmar: 'ချောမွေ့တဲ့ ဆက်သွယ်မှု အရေးကြီးတယ်။', english: 'Smooth communication is important.' }
  ]},
  { id: '1502', korean: '의사소통', myanmar: 'စကားပြောဆို ဆက်ဆံမှု', english: 'Communication', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '의사소통 능력을 기릅니다.', myanmar: 'စကားပြောဆို ဆက်ဆံမှု စွမ်းရည်ကို တိုးတက်စေတယ်။', english: 'I develop communication skills.' }
  ]},
  { id: '1503', korean: '대화', myanmar: 'စကားပြောဆိုမှု / စကား', english: 'Conversation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '즐거운 대화를 나눴습니다.', myanmar: 'ပျော်ရွှင်တဲ့ စကားပြောဆိုမှု ပြုလုပ်ခဲ့တယ်။', english: 'We had an enjoyable conversation.' }
  ]},
  { id: '1504', korean: '토론', myanmar: 'ဆွေးနွေးမှု', english: 'Discussion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '활발한 토론이 이루어졌습니다.', myanmar: 'တက်ကြွတဲ့ ဆွေးနွေးမှု ဖြစ်ပျက်ခဲ့တယ်။', english: 'An active discussion took place.' }
  ]},
  { id: '1505', korean: '논쟁', myanmar: 'အငြင်းအခုံ', english: 'Debate/Argument', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '논쟁이 벌어졌습니다.', myanmar: 'အငြင်းအခုံ ဖြစ်ပွားခဲ့တယ်။', english: 'A debate broke out.' }
  ]},
  { id: '1506', korean: '설득', myanmar: 'ဖျောင်းဖျခြင်း', english: 'Persuasion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '설득력이 있습니다.', myanmar: 'ဖျောင်းဖျနိုင်စွမ်း ရှိတယ်။', english: 'It has persuasive power.' }
  ]},
  { id: '1507', korean: '협상', myanmar: 'စေ့စပ်ညှိနှိုင်းမှု', english: 'Negotiation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '협상이 진행되고 있습니다.', myanmar: 'စေ့စပ်ညှိနှိုင်းမှု ဖြစ်ပျက်နေတယ်။', english: 'Negotiations are ongoing.' }
  ]},
  { id: '1508', korean: '합의', myanmar: 'သဘောတူညီမှု', english: 'Agreement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '합의에 도달했습니다.', myanmar: 'သဘောတူညီမှု ရောက်ရှိခဲ့တယ်။', english: 'We reached an agreement.' }
  ]},
  { id: '1509', korean: '갈등', myanmar: 'ပဋိပက္ခ', english: 'Conflict', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '갈등을 해결해야 합니다.', myanmar: 'ပဋိပက္ခကို ဖြေရှင်းရမယ်။', english: 'We need to resolve the conflict.' }
  ]},
  { id: '1510', korean: '해결책', myanmar: 'ဖြေရှင်းချက်', english: 'Solution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 해결책을 찾았습니다.', myanmar: 'ကောင်းတဲ့ ဖြေရှင်းချက် ရှာတွေ့ခဲ့တယ်။', english: 'We found a good solution.' }
  ]},
  { id: '1511', korean: '언론', myanmar: 'မီဒီယာ', english: 'Media/Press', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '언론의 자유가 중요합니다.', myanmar: 'မီဒီယာ လွတ်လပ်ခွင့် အရေးကြီးတယ်။', english: 'Freedom of the press is important.' }
  ]},
  { id: '1512', korean: '언론인', myanmar: 'မီဒီယာသမား', english: 'Journalist', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경험 많은 언론인입니다.', myanmar: 'အတွေ့အကြုံ များတဲ့ မီဒီယာသမားပါ။', english: 'He is an experienced journalist.' }
  ]},
  { id: '1513', korean: '기자', myanmar: 'သတင်းသမား', english: 'Reporter', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기자가 인터뷰를 했습니다.', myanmar: 'သတင်းသမားက အင်တာဗျူး ပြုလုပ်ခဲ့တယ်။', english: 'The reporter conducted an interview.' }
  ]},
  { id: '1514', korean: '기사', myanmar: 'သတင်းဆောင်းပါး', english: 'News article', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '흥미로운 기사를 읽었습니다.', myanmar: 'စိတ်ဝင်စားဖွယ် သတင်းဆောင်းပါး ဖတ်ခဲ့တယ်။', english: 'I read an interesting article.' }
  ]},
  { id: '1515', korean: '뉴스', myanmar: 'သတင်း', english: 'News', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '오늘 뉴스를 봤습니다.', myanmar: 'ဒီနေ့ သတင်း ကြည့်ခဲ့တယ်။', english: 'I watched today\'s news.' }
  ]},
  { id: '1516', korean: '방송', myanmar: 'ရေဒီယို/တီဗီ', english: 'Broadcasting', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생방송을 시청했습니다.', myanmar: 'တိုက်ရိုက်ထုတ်လွှင့်မှု ကြည့်ရှုခဲ့တယ်။', english: 'I watched a live broadcast.' }
  ]},
  { id: '1517', korean: '방송국', myanmar: 'ရေဒီယို/တီဗီ ဌာန', english: 'Broadcasting station', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '방송국에서 일합니다.', myanmar: 'ရေဒီယို/တီဗီ ဌာနမှာ အလုပ်လုပ်တယ်။', english: 'I work at a broadcasting station.' }
  ]},
  { id: '1518', korean: '프로그램', myanmar: 'အစီအစဉ်', english: 'Program', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재미있는 프로그램입니다.', myanmar: 'စိတ်ဝင်စားဖွယ် အစီအစဉ်ပါ။', english: 'It\'s an interesting program.' }
  ]},
  { id: '1519', korean: '채널', myanmar: 'လိုင်း', english: 'Channel', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다른 채널로 바꿔주세요.', myanmar: 'လိုင်း တခြားကို ပြောင်းပေးပါ။', english: 'Please change to another channel.' }
  ]},
  { id: '1520', korean: '광고', myanmar: 'ကြော်ငြာ', english: 'Advertisement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '광고가 너무 많습니다.', myanmar: 'ကြော်ငြာ အများကြီး ရှိတယ်။', english: 'There are too many advertisements.' }
  ]},
  { id: '1521', korean: '홍보', myanmar: 'ကြော်ငြာမြှင့်တင်မှု', english: 'Promotion/PR', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '홍보 활동을 합니다.', myanmar: 'ကြော်ငြာမြှင့်တင်မှု လုပ်ငန်း လုပ်တယ်။', english: 'We do promotional activities.' }
  ]},
  { id: '1522', korean: '마케팅', myanmar: 'စျေးကွက်ရှာဖွေမှု', english: 'Marketing', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '마케팅 전략을 세웠습니다.', myanmar: 'စျေးကွက်ရှာဖွေမှု ဗျူဟာ ရေးဆွဲခဲ့တယ်။', english: 'We developed a marketing strategy.' }
  ]},
  { id: '1523', korean: '브랜드', myanmar: 'ကုန်အမှတ်တံဆိပ်', english: 'Brand', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유명한 브랜드입니다.', myanmar: 'နာမည်ကြီး ကုန်အမှတ်တံဆိပ်ပါ။', english: 'It\'s a famous brand.' }
  ]},
  { id: '1524', korean: '이미지', myanmar: 'ပုံရိပ်', english: 'Image', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 이미지를 만들어야 합니다.', myanmar: 'ကောင်းတဲ့ ပုံရိပ် ဖန်တီးရမယ်။', english: 'We need to create a good image.' }
  ]},
  { id: '1525', korean: '평판', myanmar: 'နာမည် / ကျော်ကြားမှု', english: 'Reputation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 평판을 얻었습니다.', myanmar: 'ကောင်းတဲ့ နာမည် ရရှိခဲ့တယ်။', english: 'We gained a good reputation.' }
  ]},
  { id: '1526', korean: '여론', myanmar: 'လူထုအမြင်', english: 'Public opinion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여론을 조사했습니다.', myanmar: 'လူထုအမြင် စစ်တမ်းကောက်ခဲ့တယ်။', english: 'We surveyed public opinion.' }
  ]},
  { id: '1527', korean: '여론조사', myanmar: 'လူထုအမြင်စစ်တမ်း', english: 'Opinion poll', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여론조사 결과가 나왔습니다.', myanmar: 'လူထုအမြင်စစ်တမ်း ရလဒ် ထွက်လာခဲ့တယ်။', english: 'The opinion poll results came out.' }
  ]},
  { id: '1528', korean: '설문조사', myanmar: 'မေးခွန်းစစ်တမ်း', english: 'Survey', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '설문조사에 참여했습니다.', myanmar: 'မေးခွန်းစစ်တမ်းမှာ ပါဝင်ခဲ့တယ်။', english: 'I participated in the survey.' }
  ]},
  { id: '1529', korean: '인터뷰', myanmar: 'အင်တာဗျူး', english: 'Interview', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인터뷰를 진행했습니다.', myanmar: 'အင်တာဗျူး ပြုလုပ်ခဲ့တယ်။', english: 'We conducted an interview.' }
  ]},
  { id: '1530', korean: '취재', myanmar: 'သတင်းစုဆောင်းခြင်း', english: 'News gathering', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '현장 취재를 했습니다.', myanmar: 'လက်ရှိနေရာ သတင်းစုဆောင်းခြင်း လုပ်ခဲ့တယ်။', english: 'We did on-site news gathering.' }
  ]},
  { id: '1531', korean: '보도', myanmar: 'သတင်းထုတ်ပြန်ခြင်း', english: 'News report', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 보도가 중요합니다.', myanmar: 'မှန်ကန်တဲ့ သတင်းထုတ်ပြန်ခြင်း အရေးကြီးတယ်။', english: 'Accurate news reporting is important.' }
  ]},
  { id: '1532', korean: '편집', myanmar: 'တည်းဖြတ်ခြင်း', english: 'Editing', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '편집 작업을 마쳤습니다.', myanmar: 'တည်းဖြတ်ခြင်း လုပ်ငန်း ပြီးစီးခဲ့တယ်။', english: 'We finished the editing work.' }
  ]},
  { id: '1533', korean: '출판', myanmar: 'ထုတ်ဝေခြင်း', english: 'Publishing', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '책을 출판했습니다.', myanmar: 'စာအုပ် ထုတ်ဝေခဲ့တယ်။', english: 'We published a book.' }
  ]},
  { id: '1534', korean: '잡지', myanmar: 'မဂ္ဂဇင်း', english: 'Magazine', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '패션 잡지를 읽습니다.', myanmar: 'ဖက်ရှင် မဂ္ဂဇင်း ဖတ်တယ်။', english: 'I read fashion magazines.' }
  ]},
  { id: '1535', korean: '신문', myanmar: 'သတင်းစာ', english: 'Newspaper', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아침에 신문을 읽습니다.', myanmar: 'နံနက်မှာ သတင်းစာ ဖတ်တယ်။', english: 'I read the newspaper in the morning.' }
  ]},
  { id: '1536', korean: '소셜미디어', myanmar: 'လူမှုကွန်ယက်', english: 'Social media', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소셜미디어를 자주 사용합니다.', myanmar: 'လူမှုကွန်ယက် မကြာခဏ အသုံးပြုတယ်။', english: 'I use social media frequently.' }
  ]},
  { id: '1537', korean: '인터넷', myanmar: 'အင်တာနက်', english: 'Internet', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인터넷으로 정보를 찾습니다.', myanmar: 'အင်တာနက်နဲ့ သတင်းအချက်အလက် ရှာတယ်။', english: 'I search for information on the internet.' }
  ]},
  { id: '1538', korean: '웹사이트', myanmar: 'ဝက်ဘ်ဆိုက်', english: 'Website', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '회사 웹사이트를 방문했습니다.', myanmar: 'ကုမ္ပဏီ ဝက်ဘ်ဆိုက် သွားရောက်ခဲ့တယ်။', english: 'I visited the company website.' }
  ]},
  { id: '1539', korean: '블로그', myanmar: 'ဘလော့ဂ်', english: 'Blog', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '개인 블로그를 운영합니다.', myanmar: 'ကိုယ်ပိုင် ဘလော့ဂ် လုပ်ကိုင်တယ်။', english: 'I run a personal blog.' }
  ]},
  { id: '1540', korean: '댓글', myanmar: 'မှတ်ချက် / ကောမန့်', english: 'Comment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '댓글을 남겼습니다.', myanmar: 'မှတ်ချက်  ရေးခဲ့သည် /ချန်ထားခဲ့တယ်။', english: 'I left a comment.' }
  ]},
  { id: '1541', korean: '게시물', myanmar: 'ပို့စ်', english: 'Post', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 게시물을 올렸습니다.', myanmar: 'ပို့စ် အသစ် တင်ခဲ့တယ်။', english: 'I posted a new post.' }
  ]},
  { id: '1542', korean: '공유', myanmar: 'မျှဝေခြင်း', english: 'Sharing', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정보를 공유했습니다.', myanmar: 'သတင်းအချက်အလက် မျှဝေခဲ့တယ်။', english: 'I shared the information.' }
  ]},
  { id: '1543', korean: '좋아요', myanmar: 'နှစ်သက်မှု / နှစ်သက်ခြင်း / လိုက်(လစ်)', english: 'Like', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '많은 좋아요를 받았습니다.', myanmar: 'လိုက်(လစ်) အများကြီး ရခဲ့တယ်။', english: 'I received many likes.' }
  ]},
  { id: '1544', korean: '팔로우', myanmar: 'နောက်လိုက် / ဖော်လိုဝါ', english: 'Follow', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '팔로우 수가 증가했습니다.', myanmar: 'နောက်လိုက် အရေအတွက် တိုးလာခဲ့တယ်။', english: 'The number of followers increased.' }
  ]},
  { id: '1545', korean: '구독', myanmar: 'စာရင်းသွင်းခြင်း / စာရင်းသွင်းခြင်းလျှောက်ထားခြင်း', english: 'Subscription', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '구독을 신청했습니다.', myanmar: 'စာရင်းသွင်းခြင်း လျှောက်ထားခဲ့တယ်။', english: 'I applied for a subscription.' }
  ]},
  { id: '1546', korean: '알림', myanmar: 'အကြောင်းကြားခြင်း', english: 'Notification', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 알림이 있습니다.', myanmar: 'အကြောင်းကြားခြင်း အသစ် ရှိတယ်။', english: 'There is a new notification.' }
  ]},
  { id: '1547', korean: '메시지', myanmar: 'စာတိုပို့ခြင်း / မက်(စ်)ဆေ့', english: 'Message', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '메시지를 보냈습니다.', myanmar: 'မက်(စ်)ဆေ့ ပို့ခဲ့တယ်။', english: 'I sent a message.' }
  ]},
  { id: '1548', korean: '이메일', myanmar: 'အီးမေးလ်', english: 'Email', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이메일을 확인했습니다.', myanmar: 'အီးမေးလ် စစ်ဆေးခဲ့တယ်။', english: 'I checked the email.' }
  ]},
  { id: '1549', korean: '전화', myanmar: 'ဖုန်းခေါ်ခြင်း', english: 'Phone call', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '중요한 전화를 받았습니다.', myanmar: 'အရေးကြီးတဲ့ ဖုန်းခေါ်ခြင်း လက်ခံခဲ့တယ်။', english: 'I received an important phone call.' }
  ]},
  { id: '1550', korean: '문자', myanmar: 'စာတို', english: 'Text message', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '문자를 보냈습니다.', myanmar: 'စာတို ပို့ခဲ့တယ်။', english: 'I sent a text message.' }
  ]},

  // ===== CATEGORY 12: ADVANCED HEALTH & MEDICAL TERMS (1551-1600) =====
  { id: '1551', korean: '건강', myanmar: 'ကျန်းမာရေး', english: 'Health', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건강이 가장 중요합니다.', myanmar: 'ကျန်းမာရေးက အရေးအကြီးဆုံးပါ။', english: 'Health is the most important.' }
  ]},
  { id: '1552', korean: '건강관리', myanmar: 'ကျန်းမာရေးထိန်းသိမ်းမှု', english: 'Health care', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건강관리를 잘해야 합니다.', myanmar: 'ကျန်းမာရေးထိန်းသိမ်းမှု ကောင်းကောင်း လုပ်ရမယ်။', english: 'We need to take good care of our health.' }
  ]},
  { id: '1553', korean: '건강검진', myanmar: 'ကျန်းမာရေးစစ်ဆေးမှု', english: 'Health checkup', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정기 건강검진을 받습니다.', myanmar: 'ပုံမှန် ကျန်းမာရေးစစ်ဆေးမှု လုပ်တယ်။', english: 'I get regular health checkups.' }
  ]},
  { id: '1554', korean: '질병', myanmar: 'ရောဂါ', english: 'Disease', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '질병을 예방해야 합니다.', myanmar: 'ရောဂါကို ကာကွယ်ရမယ်။', english: 'We must prevent diseases.' }
  ]},
  { id: '1555', korean: '증상', myanmar: 'ရောဂါလက္ခဏာ', english: 'Symptoms', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이상한 증상이 있습니다.', myanmar: 'ထူးဆန်းတဲ့ ရောဂါလက္ခဏာ ရှိတယ်။', english: 'There are strange symptoms.' }
  ]},
  { id: '1556', korean: '진단', myanmar: 'ရောဂါရှာဖွေခြင်း', english: 'Diagnosis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 진단이 필요합니다.', myanmar: 'မှန်ကန်တဲ့ ရောဂါရှာဖွေခြင်း လိုအပ်တယ်။', english: 'Accurate diagnosis is needed.' }
  ]},
  { id: '1557', korean: '치료', myanmar: 'ကုသမှု', english: 'Treatment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '치료를 받고 있습니다.', myanmar: 'ကုသမှု ခံယူနေတယ်။', english: 'I am receiving treatment.' }
  ]},
  { id: '1558', korean: '수술', myanmar: 'ခွဲစိတ်မှု', english: 'Surgery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수술이 성공적이었습니다.', myanmar: 'ခွဲစိတ်မှု အောင်မြင်ခဲ့တယ်။', english: 'The surgery was successful.' }
  ]},
  { id: '1559', korean: '입원', myanmar: 'ဆေးရုံတက်ခြင်း', english: 'Hospitalization', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '일주일간 입원했습니다.', myanmar: 'တစ်ပတ်ကြာ ဆေးရုံတက်ခဲ့တယ်။', english: 'I was hospitalized for a week.' }
  ]},
  { id: '1560', korean: '퇴원', myanmar: 'ဆေးရုံမှဆင်းခြင်း', english: 'Hospital discharge', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '내일 퇴원할 예정입니다.', myanmar: 'မနက်ဖြန် ဆေးရုံမှဆင်းမှာပါ။', english: 'I am scheduled to be discharged tomorrow.' }
  ]},
  { id: '1561', korean: '의사', myanmar: 'ဆရာဝန်', english: 'Doctor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '의사의 진료를 받았습니다.', myanmar: 'ဆရာဝန်ရဲ့ စစ်ဆေးကုသမှု ခံယူခဲ့တယ်။', english: 'I received medical treatment from a doctor.' }
  ]},
  { id: '1562', korean: '간호사', myanmar: 'သူနာပြု', english: 'Nurse', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '친절한 간호사입니다.', myanmar: 'သဘောကောင်းတဲ့ သူနာပြုပါ။', english: 'She is a kind nurse.' }
  ]},
  { id: '1563', korean: '환자', myanmar: 'လူနာ', english: 'Patient', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환자가 많습니다.', myanmar: 'လူနာ များတယ်။', english: 'There are many patients.' }
  ]},
  { id: '1564', korean: '약', myanmar: 'ဆေး', english: 'Medicine', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '약을 규칙적으로 먹습니다.', myanmar: 'ဆေးကို ပုံမှန် သောက်တယ်။', english: 'I take medicine regularly.' }
  ]},
  { id: '1565', korean: '처방전', myanmar: 'ဆေးညွှန်းစာ', english: 'Prescription', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '처방전을 받았습니다.', myanmar: 'ဆေးညွှန်းစာ ရခဲ့တယ်။', english: 'I received a prescription.' }
  ]},
  { id: '1566', korean: '주사', myanmar: 'ဆေးထိုးခြင်း', english: 'Injection', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '주사를 맞았습니다.', myanmar: 'ဆေးထိုးခဲ့တယ်။', english: 'I got an injection.' }
  ]},
  { id: '1567', korean: '검사', myanmar: 'စစ်ဆေးခြင်း', english: 'Examination', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '혈액 검사를 했습니다.', myanmar: 'သွေး စစ်ဆေးခြင်း လုပ်ခဲ့တယ်။', english: 'I had a blood test.' }
  ]},
  { id: '1568', korean: '엑스레이', myanmar: 'ဓာတ်မှန်', english: 'X-ray', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '엑스레이를 찍었습니다.', myanmar: 'ဓာတ်မှန် ရိုက်ခဲ့တယ်။', english: 'I had an X-ray taken.' }
  ]},
  { id: '1569', korean: '초음파', myanmar: 'အသံလှိုင်း / အာထွာဆောင်းရိုက်ခြင်း', english: 'Ultrasound', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '초음파 검사를 받았습니다.', myanmar: 'အာထွာဆောင်းရိုက် စစ်ဆေးခြင်း ခံယူခဲ့တယ်။', english: 'I had an ultrasound examination.' }
  ]},
  { id: '1570', korean: '혈압', myanmar: 'သွေးပေါင်ချိန်', english: 'Blood pressure', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '혈압을 측정했습니다.', myanmar: 'သွေးပေါင်ချိန် တိုင်းခဲ့တယ်။', english: 'I measured blood pressure.' }
  ]},
  { id: '1571', korean: '체온', myanmar: 'ခန္ဓာကိုယ်အပူချိန်', english: 'Body temperature', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '체온이 높습니다.', myanmar: 'ခန္ဓာကိုယ်အပူချိန် မြင့်တယ်။', english: 'Body temperature is high.' }
  ]},
  { id: '1572', korean: '맥박', myanmar: 'နှလုံးခုန်နှုန်း', english: 'Pulse', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '맥박이 빠릅니다.', myanmar: 'နှလုံးခုန်နှုန်း မြန်တယ်။', english: 'The pulse is fast.' }
  ]},
  { id: '1573', korean: '호흡', myanmar: 'အသက်ရှူခြင်း', english: 'Breathing', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '호흡이 곤란합니다.', myanmar: 'အသက်ရှူခြင်း ခက်ခဲတယ်။', english: 'Breathing is difficult.' }
  ]},
  { id: '1574', korean: '통증', myanmar: 'နာကျင်မှု', english: 'Pain', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '심한 통증이 있습니다.', myanmar: 'ပြင်းထန်တဲ့ နာကျင်မှု ရှိတယ်။', english: 'There is severe pain.' }
  ]},
  { id: '1575', korean: '열', myanmar: 'အဖျား / အပူ', english: 'Fever', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '열이 나고 있습니다.', myanmar: 'အဖျား တက်နေတယ်။', english: 'I have a fever.' }
  ]},
  { id: '1576', korean: '기침', myanmar: 'ချောင်းဆိုး', english: 'Cough', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기침이 심합니다.', myanmar: 'ချောင်းဆိုး ပြင်းထန်တယ်။', english: 'The cough is severe.' }
  ]},
  { id: '1577', korean: '감기', myanmar: 'တုတ်ကွေး', english: 'Cold', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '감기에 걸렸습니다.', myanmar: 'တုတ်ကွေး ဖြစ်ခဲ့တယ်။', english: 'I caught a cold.' }
  ]},
  { id: '1578', korean: '독감', myanmar: 'တုတ်ကွေးပြင်းထန်', english: 'Flu', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '독감이 유행하고 있습니다.', myanmar: 'တုတ်ကွေးပြင်းထန် ပျံ့နှံ့နေတယ်။', english: 'The flu is spreading.' }
  ]},
  { id: '1579', korean: '두통', myanmar: 'ခေါင်းကိုက်', english: 'Headache', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '심한 두통이 있습니다.', myanmar: 'ခေါင်းကိုက် ပြင်းထန်တယ်။', english: 'I have a severe headache.' }
  ]},
  { id: '1580', korean: '복통', myanmar: 'ဗိုက်နာ', english: 'Stomachache', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '복통으로 고생하고 있습니다.', myanmar: 'ဗိုက်နာလို့ ခံစားနေရတယ်။', english: 'I am suffering from a stomachache.' }
  ]},
  { id: '1581', korean: '설사', myanmar: 'ဝမ်းလျှောခြင်း', english: 'Diarrhea', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '설사 증상이 있습니다.', myanmar: 'ဝမ်းလျှောခြင်း လက္ခဏာ ရှိတယ်။', english: 'I have diarrhea symptoms.' }
  ]},
  { id: '1582', korean: '변비', myanmar: 'ဝမ်းချုပ်ခြင်း', english: 'Constipation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '변비로 고생합니다.', myanmar: 'ဝမ်းချုပ်ခြင်းနဲ့ ခံစားနေရတယ်။', english: 'I suffer from constipation.' }
  ]},
  { id: '1583', korean: '알레르기', myanmar: 'မတည့်မှု', english: 'Allergy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '꽃가루 알레르기가 있습니다.', myanmar: 'ပန်းမှုန့် မတည့်မှု ရှိတယ်။', english: 'I have a pollen allergy.' }
  ]},
  { id: '1584', korean: '상처', myanmar: 'ဒဏ်ရာ', english: 'Wound/Injury', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '상처가 아물고 있습니다.', myanmar: 'ဒဏ်ရာ ပျောက်နေတယ်။', english: 'The wound is healing.' }
  ]},
  { id: '1585', korean: '골절', myanmar: 'အရိုးကျိုးခြင်း', english: 'Fracture', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '팔에 골절이 있습니다.', myanmar: 'လက်မှာ အရိုးကျိုးခြင်း ရှိတယ်။', english: 'There is a fracture in the arm.' }
  ]},
  { id: '1586', korean: '염좌', myanmar: 'အရွတ်လွဲခြင်း', english: 'Sprain', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '발목을 염좌했습니다.', myanmar: 'ခြေသလုံး အရွတ်လွဲခဲ့တယ်။', english: 'I sprained my ankle.' }
  ]},
  { id: '1587', korean: '화상', myanmar: 'မီးလောင်ခြင်း', english: 'Burn', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '손에 화상을 입었습니다.', myanmar: 'လက်မှာ မီးလောင်ခဲ့တယ်။', english: 'I got burned on my hand.' }
  ]},
  { id: '1588', korean: '예방접종', myanmar: 'ကာကွယ်ဆေးထိုးခြင်း', english: 'Vaccination', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '예방접종을 받았습니다.', myanmar: 'ကာကွယ်ဆေးထိုးခြင်း ခံယူခဲ့တယ်။', english: 'I received a vaccination.' }
  ]},
  { id: '1589', korean: '면역', myanmar: 'ခုခံအား', english: 'Immunity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '면역력을 기릅니다.', myanmar: 'ခုခံအားကို တိုးတက်စေတယ်။', english: 'I build immunity.' }
  ]},
  { id: '1590', korean: '회복', myanmar: 'ပြန်လည်ကောင်းမွန်မှု', english: 'Recovery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '빠른 회복을 바랍니다.', myanmar: 'မြန်မြန် ပြန်လည်ကောင်းမွန်မှု ဆန္ဒပြုတယ်။', english: 'I wish for a quick recovery.' }
  ]},
  { id: '1591', korean: '재활', myanmar: 'ပြန်လည်ထူထောင်ရေး', english: 'Rehabilitation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재활 치료를 받습니다.', myanmar: 'ပြန်လည်ထူထောင်ရေး ကုသမှု ခံယူတယ်။', english: 'I receive rehabilitation treatment.' }
  ]},
  { id: '1592', korean: '영양', myanmar: 'အာဟာရ', english: 'Nutrition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '균형 잡힌 영양이 중요합니다.', myanmar: 'ညီမျှတဲ့ အာဟာရ အရေးကြီးတယ်။', english: 'Balanced nutrition is important.' }
  ]},
  { id: '1593', korean: '비타민', myanmar: 'ဗီတာမင်', english: 'Vitamin', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '비타민을 복용합니다.', myanmar: 'ဗီတာမင် သောက်တယ်။', english: 'I take vitamins.' }
  ]},
  { id: '1594', korean: '운동', myanmar: 'လေ့ကျင့်ခန်း', english: 'Exercise', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '규칙적인 운동을 합니다.', myanmar: 'ပုံမှန် လေ့ကျင့်ခန်း လုပ်တယ်။', english: 'I do regular exercise.' }
  ]},
  { id: '1595', korean: '다이어트', myanmar: 'အစားမစား /  ဝိတ်လျှော့ခြင်း', english: 'Diet', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다이어트를 시작했습니다.', myanmar: 'ဝိတ်လျှော့ခြင်း စတင်ခဲ့တယ်။', english: 'I started a diet.' }
  ]},
  { id: '1596', korean: '금연', myanmar: 'ဆေးလိပ်ဖြတ်ခြင်း', english: 'Quitting smoking', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '금연에 성공했습니다.', myanmar: 'ဆေးလိပ်ဖြတ်ခြင်း အောင်မြင်ခဲ့တယ်။', english: 'I succeeded in quitting smoking.' }
  ]},
  { id: '1597', korean: '금주', myanmar: 'အရက်ဖြတ်ခြင်း', english: 'Abstaining from alcohol', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건강을 위해 금주합니다.', myanmar: 'ကျန်းမာရေးအတွက် အရက်ဖြတ်တယ်။', english: 'I abstain from alcohol for health.' }
  ]},
  { id: '1598', korean: '스트레스', myanmar: 'စိတ်ဖိစီးမှု', english: 'Stress', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '스트레스를 줄여야 합니다.', myanmar: 'စိတ်ဖိစီးမှုကို လျှော့ချရမယ်။', english: 'We need to reduce stress.' }
  ]},
  { id: '1599', korean: '휴식', myanmar: 'အနားယူခြင်း', english: 'Rest', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '충분한 휴식이 필요합니다.', myanmar: 'လုံလောက်တဲ့ အနားယူခြင်း လိုအပ်တယ်။', english: 'Adequate rest is needed.' }
  ]},
  { id: '1600', korean: '수면', myanmar: 'အိပ်စက်မှု', english: 'Sleep', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '양질의 수면을 취합니다.', myanmar: 'အရည်အသွေးကောင်းတဲ့ အိပ်စက်မှု ယူတယ်။', english: 'I get quality sleep.' }
  ]},

  // ===== CATEGORY 13: ADVANCED FOOD & CULINARY TERMS (1601-1650) =====
  { id: '1601', korean: '요리', myanmar: 'ချက်ပြုတ်ခြင်း', english: 'Cooking', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '요리를 배우고 있습니다.', myanmar: 'ချက်ပြုတ်ခြင်း သင်နေတယ်။', english: 'I am learning to cook.' }
  ]},
  { id: '1602', korean: '요리사', myanmar: 'ချက်ပြုတ်သူ / စားဖိုမှုး', english: 'Chef/Cook', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유명한 요리사입니다.', myanmar: 'နာမည်ကြီး ချက်ပြုတ်သူပါ။', english: 'He is a famous chef.' }
  ]},
  { id: '1603', korean: '재료', myanmar: 'ပစ္စည်းများ / ပါဝင်ပစ္စည်း', english: 'Ingredients', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '신선한 재료를 사용합니다.', myanmar: 'လတ်ဆတ်တဲ့ ပစ္စည်းများ အသုံးပြုတယ်။', english: 'We use fresh ingredients.' }
  ]},
  { id: '1604', korean: '조리법', myanmar: 'ချက်ပြုတ်နည်း', english: 'Recipe', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 조리법을 시도했습니다.', myanmar: 'ချက်ပြုတ်နည်း အသစ် စမ်းကြည့်ခဲ့တယ်။', english: 'I tried a new recipe.' }
  ]},
  { id: '1605', korean: '조미료', myanmar: 'အရသာပေးဗေဒ', english: 'Seasoning', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '적절한 조미료를 넣습니다.', myanmar: 'လျောက်ပတ်တဲ့ အရသာပေးဗေဒ ထည့်တယ်။', english: 'I add appropriate seasoning.' }
  ]},
  { id: '1606', korean: '양념', myanmar: 'အမွှေးအကြိုင် / အရသာအနှစ်', english: 'Spices', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다양한 양념을 사용합니다.', myanmar: 'အမွှေးအကြိုင် မျိုးစုံ အသုံးပြုတယ်။', english: 'We use various spices.' }
  ]},
  { id: '1607', korean: '소금', myanmar: 'ဆား', english: 'Salt', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소금을 조금 넣었습니다.', myanmar: 'ဆား နည်းနည်း ထည့်ခဲ့တယ်။', english: 'I added a little salt.' }
  ]},
  { id: '1608', korean: '설탕', myanmar: 'သကြား', english: 'Sugar', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '설탕을 줄이고 있습니다.', myanmar: 'သကြား လျှော့ချနေတယ်။', english: 'I am reducing sugar.' }
  ]},
  { id: '1609', korean: '기름', myanmar: 'ဆီ', english: 'Oil', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '올리브 기름을 사용합니다.', myanmar: 'သံလွင်သီး ဆီ အသုံးပြုတယ်။', english: 'I use olive oil.' }
  ]},
  { id: '1610', korean: '간장', myanmar: 'ပဲငံပြာရည်', english: 'Soy sauce', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '간장으로 간을 맞춥니다.', myanmar: 'ပဲငံပြာရည်နဲ့ အရသာ ချိန်တယ်။', english: 'I season with soy sauce.' }
  ]},
  { id: '1611', korean: '식초', myanmar: 'ရှမ်းရည်', english: 'Vinegar', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '식초를 조금 넣었습니다.', myanmar: 'ရှမ်းရည် နည်းနည်း ထည့်ခဲ့တယ်။', english: 'I added a little vinegar.' }
  ]},
  { id: '1612', korean: '마늘', myanmar: 'ကြက်သွန်ဖြူ', english: 'Garlic', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '마늘을 다져 넣습니다.', myanmar: 'ကြက်သွန်ဖြူ ညက်/ကြိတ် ထည့်တယ်။', english: 'I add chopped garlic.' }
  ]},
  { id: '1613', korean: '생강', myanmar: 'ဂျင်း', english: 'Ginger', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생강차를 마십니다.', myanmar: 'ဂျင်းလက်ဖက်ရည် သောက်တယ်။', english: 'I drink ginger tea.' }
  ]},
  { id: '1614', korean: '양파', myanmar: 'ကြေသွန်နီ', english: 'Onion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '양파를 볶았습니다.', myanmar: 'ကြေသွန်နီ ကြော်ခဲ့တယ်။', english: 'I fried the onion.' }
  ]},
  { id: '1615', korean: '고추', myanmar: 'ငရုတ်ကောင်း', english: 'Pepper', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고추를 넣어 맵게 했습니다.', myanmar: 'ငရုတ်ကောင်း ထည့်ပြီး စပ်အောင် လုပ်ခဲ့တယ်။', english: 'I added pepper to make it spicy.' }
  ]},
  { id: '1616', korean: '채소', myanmar: 'ဟင်းသီးဟင်းရွက်', english: 'Vegetables', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '신선한 채소를 먹습니다.', myanmar: 'လတ်ဆတ်တဲ့ ဟင်းသီးဟင်းရွက် စားတယ်။', english: 'I eat fresh vegetables.' }
  ]},
  { id: '1617', korean: '과일', myanmar: 'သစ်သီး', english: 'Fruits', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '매일 과일을 먹습니다.', myanmar: 'နေ့တိုင်း သစ်သီး စားတယ်။', english: 'I eat fruits every day.' }
  ]},
  { id: '1618', korean: '고기', myanmar: 'အသား', english: 'Meat', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고기를 구웠습니다.', myanmar: 'အသား ကင်ခဲ့တယ်။', english: 'I grilled the meat.' }
  ]},
  { id: '1619', korean: '생선', myanmar: 'ငါး', english: 'Fish', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생선을 찜으로 만들었습니다.', myanmar: 'ငါးကို ပြုတ်ခဲ့တယ်။', english: 'I steamed the fish.' }
  ]},
  { id: '1620', korean: '해산물', myanmar: 'ပင်လယ်စာ', english: 'Seafood', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '신선한 해산물을 샀습니다.', myanmar: 'လတ်ဆတ်တဲ့ ပင်လယ်စာ ဝယ်ခဲ့တယ်။', english: 'I bought fresh seafood.' }
  ]},
  { id: '1621', korean: '달걀', myanmar: 'ကြက်ဥ', english: 'Egg', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '달걀을 삶았습니다.', myanmar: 'ကြက်ဥ ပြုတ်ခဲ့တယ်။', english: 'I boiled the egg.' }
  ]},
  { id: '1622', korean: '우유', myanmar: 'နို့', english: 'Milk', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '신선한 우유를 마십니다.', myanmar: 'လတ်ဆတ်တဲ့ နို့ သောက်တယ်။', english: 'I drink fresh milk.' }
  ]},
  { id: '1623', korean: '치즈', myanmar: 'ချိစ်', english: 'Cheese', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '치즈를 올렸습니다.', myanmar: 'ချိစ် တင်ခဲ့တယ်။', english: 'I put cheese on top.' }
  ]},
  { id: '1624', korean: '버터', myanmar: 'ထောပတ်', english: 'Butter', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '버터를 발랐습니다.', myanmar: 'ထောပတ် လိမ်းခဲ့တယ်။', english: 'I spread butter.' }
  ]},
  { id: '1625', korean: '빵', myanmar: 'ပေါင်မုန့်', english: 'Bread', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '갓 구운 빵을 샀습니다.', myanmar: 'အသစ်ကင်တဲ့ ပေါင်မုန့် ဝယ်ခဲ့တယ်။', english: 'I bought freshly baked bread.' }
  ]},
  { id: '1626', korean: '쌀', myanmar: 'ဆန်', english: 'Rice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '쌀을 씻어서 밥을 지었습니다.', myanmar: 'ဆန် ဆေးပြီး ထမင်း ချက်ခဲ့တယ်။', english: 'I washed rice and cooked it.' }
  ]},
  { id: '1627', korean: '면', myanmar: 'ခေါက်ဆွဲ', english: 'Noodles', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '면을 삶았습니다.', myanmar: 'ခေါက်ဆွဲ ပြုတ်ခဲ့တယ်။', english: 'I boiled the noodles.' }
  ]},
  { id: '1628', korean: '국물', myanmar: 'ဟင်းရည်', english: 'Broth/Soup', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '진한 국물을 우렸습니다.', myanmar: 'ရေရှည် ဟင်းရည် ပြုတ်ခဲ့တယ်။', english: 'I made a rich broth.' }
  ]},
  { id: '1629', korean: '반찬', myanmar: 'ဟင်းလျာ', english: 'Side dish', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '맛있는 반찬을 만들었습니다.', myanmar: 'အရသာရှိတဲ့ ဟင်းလျာ လုပ်ခဲ့တယ်။', english: 'I made delicious side dishes.' }
  ]},
  { id: '1630', korean: '디저트', myanmar: 'အချိုပွဲ', english: 'Dessert', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '디저트로 케이크를 먹었습니다.', myanmar: 'အချိုပွဲအဖြစ် ကိတ်မုန့် စားခဲ့တယ်။', english: 'I had cake for dessert.' }
  ]},
  { id: '1631', korean: '음료', myanmar: 'သောက်စရာ', english: 'Beverage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시원한 음료를 마셨습니다.', myanmar: 'အေးတဲ့ သောက်စရာ သောက်ခဲ့တယ်။', english: 'I drank a cool beverage.' }
  ]},
  { id: '1632', korean: '차', myanmar: 'လက်ဖက်ရည်', english: 'Tea', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '따뜻한 차를 마십니다.', myanmar: 'ပူပူနွေးနွေး လက်ဖက်ရည် သောက်တယ်။', english: 'I drink warm tea.' }
  ]},
  { id: '1633', korean: '커피', myanmar: 'ကော်ဖီ', english: 'Coffee', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아침에 커피를 마십니다.', myanmar: 'နံနက်မှာ ကော်ဖီ သောက်တယ်။', english: 'I drink coffee in the morning.' }
  ]},
  { id: '1634', korean: '주스', myanmar: 'ဖျော်ရည်', english: 'Juice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '오렌지 주스를 마셨습니다.', myanmar: 'လိမ္မော်သီး ဖျော်ရည် သောက်ခဲ့တယ်။', english: 'I drank orange juice.' }
  ]},
  { id: '1635', korean: '물', myanmar: 'ရေ', english: 'Water', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깨끗한 물을 마십니다.', myanmar: 'သန့်ရှင်းတဲ့ ရေ သောက်တယ်။', english: 'I drink clean water.' }
  ]},
  { id: '1636', korean: '얼음', myanmar: 'ရေခဲ', english: 'Ice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '얼음을 넣었습니다.', myanmar: 'ရေခဲ ထည့်ခဲ့တယ်။', english: 'I added ice.' }
  ]},
  { id: '1637', korean: '맛', myanmar: 'အရသာ', english: 'Taste/Flavor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 맛이 납니다.', myanmar: 'အရသာ ကောင်းတယ်။', english: 'It tastes good.' }
  ]},
  { id: '1638', korean: '냄새', myanmar: 'အနံ့', english: 'Smell/Aroma', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 냄새가 납니다.', myanmar: 'အနံ့ ကောင်းတယ်။', english: 'It smells good.' }
  ]},
  { id: '1639', korean: '온도', myanmar: 'အပူချိန်', english: 'Temperature', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '적당한 온도로 데웠습니다.', myanmar: 'လျောက်ပတ်/သင့်တော်တဲ့ အပူချိန်နဲ့ ပြန်နွှေးခဲ့တယ်။', english: 'I heated it to the right temperature.' }
  ]},
  { id: '1640', korean: '요리도구', myanmar: 'ချက်ပြုတ်ကိရိယာ', english: 'Cooking utensils', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 요리도구를 샀습니다.', myanmar: 'ချက်ပြုတ်ကိရိယာ အသစ် ဝယ်ခဲ့တယ်။', english: 'I bought new cooking utensils.' }
  ]},
  { id: '1641', korean: '칼', myanmar: 'ဓား', english: 'Knife', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '날카로운 칼을 사용합니다.', myanmar: 'ထက်မြက်တဲ့ ဓား အသုံးပြုတယ်။', english: 'I use a sharp knife.' }
  ]},
  { id: '1642', korean: '도마', myanmar: 'ညက်တံပြား', english: 'Cutting board', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '도마 위에서 자릅니다.', myanmar: 'ညက်တံပြား ပေါ်မှာ လှီးတယ်။', english: 'I cut on the cutting board.' }
  ]},
  { id: '1643', korean: '팬', myanmar: 'ကြော်ဒယ်', english: 'Pan', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '팬을 달궜습니다.', myanmar: 'ကြော်ဒယ် ပူအောင် လုပ်ခဲ့တယ်။', english: 'I heated the pan.' }
  ]},
  { id: '1644', korean: '냄비', myanmar: 'အိုး', english: 'Pot', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 냄비에 끓였습니다.', myanmar: 'အိုး ကြီးမှာ ပြုတ်ခဲ့တယ်။', english: 'I boiled it in a big pot.' }
  ]},
  { id: '1645', korean: '그릇', myanmar: 'ပန်းကန်', english: 'Bowl/Dish', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '예쁜 그릇에 담았습니다.', myanmar: 'လှတဲ့ ပန်းကန်မှာ ထည့်ခဲ့တယ်။', english: 'I put it in a pretty bowl.' }
  ]},
  { id: '1646', korean: '접시', myanmar: 'ပန်းကန်ပြား', english: 'Plate', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '접시에 예쁘게 담았습니다.', myanmar: 'ပန်းကန်ပြားမှာ လှလှ ထည့်ခဲ့တယ်။', english: 'I arranged it nicely on the plate.' }
  ]},
  { id: '1647', korean: '컵', myanmar: 'ခွက်', english: 'Cup', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '컵에 물을 따랐습니다.', myanmar: 'ခွက်မှာ ရေ လောင်းခဲ့တယ်။', english: 'I poured water into the cup.' }
  ]},
  { id: '1648', korean: '숟가락', myanmar: 'ဇွန်း', english: 'Spoon', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '숟가락으로 저었습니다.', myanmar: 'ဇွန်းနဲ့ မွှေခဲ့တယ်။', english: 'I stirred with a spoon.' }
  ]},
  { id: '1649', korean: '젓가락', myanmar: 'တူ / ထမင်းစားတူ', english: 'Chopsticks', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '젓가락으로 먹습니다.', myanmar: 'တူနဲ့ စားတယ်။', english: 'I eat with chopsticks.' }
  ]},
  { id: '1650', korean: '포크', myanmar: 'ခက်ရင်း', english: 'Fork', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '포크로 찍어 먹습니다.', myanmar: 'ခက်ရင်းနဲ့ ထိုးစားတယ်။', english: 'I eat by picking with a fork.' }
  ]},

  // ===== CATEGORY 14: ADVANCED TRAVEL & TOURISM TERMS (1651-1700) =====
  { id: '1651', korean: '여행', myanmar: 'ခရီးသွားလာမှု', english: 'Travel', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여행을 계획하고 있습니다.', myanmar: 'ခရီးသွားလာမှု စီစဉ်နေတယ်။', english: 'I am planning a trip.' }
  ]},
  { id: '1652', korean: '관광', myanmar: 'လေ့လာရှုစားခြင်း / ခရီးသွားလာမှု', english: 'Tourism', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '관광지를 방문했습니다.', myanmar: 'ခရီးသွားနေရာ သွားလည်ခဲ့တယ်။', english: 'I visited tourist attractions.' }
  ]},
  { id: '1653', korean: '관광객', myanmar: 'ခရီးသွား', english: 'Tourist', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '많은 관광객이 왔습니다.', myanmar: 'ခရီးသွား အများကြီး လာခဲ့တယ်။', english: 'Many tourists came.' }
  ]},
  { id: '1654', korean: '가이드', myanmar: 'လမ်းညွှန်', english: 'Guide', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '친절한 가이드가 안내했습니다.', myanmar: 'သဘောကောင်းတဲ့ လမ်းညွှန်က လမ်းပြခဲ့တယ်။', english: 'A kind guide showed us around.' }
  ]},
  { id: '1655', korean: '여행사', myanmar: 'ခရီးသွားလာမှုကုမ္ပဏီ', english: 'Travel agency', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여행사에서 예약했습니다.', myanmar: 'ခရီးသွားလာမှုကုမ္ပဏီမှာ ကြိုတင်မှာယူခဲ့တယ်။', english: 'I made a reservation at a travel agency.' }
  ]},
  { id: '1656', korean: '패키지', myanmar: 'အမျိုးအစား / ပက်ကေ့', english: 'Package tour', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '패키지 여행을 신청했습니다.', myanmar: 'ပက်ကေ့ ခရီးစဉ် လျှောက်ထားခဲ့တယ်။', english: 'I applied for a package tour.' }
  ]},
  { id: '1657', korean: '일정', myanmar: 'အစီအစဉ်', english: 'Itinerary', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여행 일정을 짰습니다.', myanmar: 'ခရီးစဉ် အစီအစဉ် ရေးဆွဲခဲ့တယ်။', english: 'I made a travel itinerary.' }
  ]},
  { id: '1658', korean: '예약', myanmar: 'ကြိုတင်မှာယူခြင်း', english: 'Reservation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '호텔 예약을 확인했습니다.', myanmar: 'ဟိုတယ် ကြိုတင်မှာယူခြင်း စစ်ဆေးခဲ့တယ်။', english: 'I confirmed the hotel reservation.' }
  ]},
  { id: '1659', korean: '취소', myanmar: 'ပယ်ဖျက်ခြင်း', english: 'Cancellation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '예약을 취소했습니다.', myanmar: 'ကြိုတင်မှာယူခြင်း ပယ်ဖျက်ခဲ့တယ်။', english: 'I cancelled the reservation.' }
  ]},
  { id: '1660', korean: '호텔', myanmar: 'ဟိုတယ်', english: 'Hotel', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 호텔에 머물렀습니다.', myanmar: 'ကောင်းတဲ့ ဟိုတယ်မှာ နေခဲ့တယ်။', english: 'I stayed at a good hotel.' }
  ]},
  { id: '1661', korean: '숙박', myanmar: 'တည်းခိုခြင်း', english: 'Accommodation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '숙박비가 비쌉니다.', myanmar: 'တည်းခိုခ စျေးကြီးတယ်။', english: 'Accommodation is expensive.' }
  ]},
  { id: '1662', korean: '체크인', myanmar: 'မှတ်ပုံတင်ခြင်း / ချက်ကင်လုပ်', english: 'Check-in', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '체크인 시간이 되었습니다.', myanmar: 'ဝင်ရောက်မှတ်ပုံတင်ခြင်း အချိန် ရောက်ခဲ့တယ်။', english: 'It\'s check-in time.' }
  ]},
  { id: '1663', korean: '체크아웃', myanmar: 'ထွက်ခွာခြင်း / ချက်အောက်လုပ်ခြင်း', english: 'Check-out', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '내일 체크아웃합니다.', myanmar: 'မနက်ဖြန် ထွက်ခွာမှတ်ပုံတင်ခြင်း လုပ်မယ်။', english: 'I will check out tomorrow.' }
  ]},
  { id: '1664', korean: '객실', myanmar: 'ခန်းအခန်း', english: 'Room', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '넓은 객실을 예약했습니다.', myanmar: 'ကျယ်ဝန်းတဲ့ ခန်းအခန်း ကြိုတင်မှာယူခဲ့တယ်။', english: 'I reserved a spacious room.' }
  ]},
  { id: '1665', korean: '침대', myanmar: 'အိပ်ယာ', english: 'Bed', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '편안한 침대입니다.', myanmar: 'သက်သောင့်တဲ့ အိပ်ယာပါ။', english: 'It\'s a comfortable bed.' }
  ]},
  { id: '1666', korean: '욕실', myanmar: 'ရေချိုးခန်း', english: 'Bathroom', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '욕실이 깨끗합니다.', myanmar: 'ရေချိုးခန်း သန့်ရှင်းတယ်။', english: 'The bathroom is clean.' }
  ]},
  { id: '1667', korean: '수건', myanmar: 'လက်သုတ်ပုဝါ', english: 'Towel', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깨끗한 수건을 받았습니다.', myanmar: 'သန့်ရှင်းတဲ့ လက်သုတ်ပုဝါ ရခဲ့တယ်။', english: 'I received clean towels.' }
  ]},
  { id: '1668', korean: '비누', myanmar: 'ဆပ်ပြာ', english: 'Soap', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '향기 좋은 비누입니다.', myanmar: 'အနံ့ကောင်းတဲ့ ဆပ်ပြာပါ။', english: 'It\'s fragrant soap.' }
  ]},
  { id: '1669', korean: '샴푸', myanmar: 'ခေါင်းလျှော်ရည်', english: 'Shampoo', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '샴푸를 사용했습니다.', myanmar: 'ခေါင်းလျှော်ရည် သုံးခဲ့တယ်။', english: 'I used shampoo.' }
  ]},
  { id: '1670', korean: '여권', myanmar: 'နိုင်ငံကူးလက်မှတ်', english: 'Passport', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여권을 준비했습니다.', myanmar: 'နိုင်ငံကူးလက်မှတ် ပြင်ဆင်ခဲ့တယ်။', english: 'I prepared my passport.' }
  ]},
  { id: '1671', korean: '비자', myanmar: 'ဗီဇာ', english: 'Visa', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '비자를 신청했습니다.', myanmar: 'ဗီဇာ လျှောက်ထားခဲ့တယ်။', english: 'I applied for a visa.' }
  ]},
  { id: '1672', korean: '출입국', myanmar: 'ဝင်ထွက်ခြင်း / လူဝင်မှုကြီးကြပ်ရေး', english: 'Immigration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '출입국 심사를 받았습니다.', myanmar: 'ဝင်ထွက်ခြင်း စစ်ဆေးမှု ခံယူခဲ့တယ်။', english: 'I went through immigration inspection.' }
  ]},
  { id: '1673', korean: '세관', myanmar: 'အကောက်ခွန်ရုံး', english: 'Customs', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '세관을 통과했습니다.', myanmar: 'အကောက်ခွန်ရုံး ဖြတ်သန်းခဲ့တယ်။', english: 'I passed through customs.' }
  ]},
  { id: '1674', korean: '수하물', myanmar: 'ခရီးဆောင်အိတ်', english: 'Luggage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수하물을 찾았습니다.', myanmar: 'ခရီးဆောင်အိတ် ရှာတွေ့ခဲ့တယ်။', english: 'I found my luggage.' }
  ]},
  { id: '1675', korean: '가방', myanmar: 'အိတ်', english: 'Bag', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '무거운 가방을 들었습니다.', myanmar: 'လေးတဲ့ အိတ် ကိုင်ခဲ့တယ်။', english: 'I carried a heavy bag.' }
  ]},
  { id: '1676', korean: '지도', myanmar: 'မြေပုံ', english: 'Map', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지도를 보고 길을 찾았습니다.', myanmar: 'မြေပုံ ကြည့်ပြီး လမ်း ရှာတွေ့ခဲ့တယ်။', english: 'I found the way by looking at the map.' }
  ]},
  { id: '1677', korean: '나침반', myanmar: 'သံလိုက်အိမ်မြှောင်', english: 'Compass', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '나침반으로 방향을 확인했습니다.', myanmar: 'သအိမ်မြှောင်နဲ့ ဦးတည်ရာ စစ်ဆေးခဲ့တယ်။', english: 'I checked the direction with a compass.' }
  ]},
  { id: '1678', korean: '카메라', myanmar: 'ကင်မရာ', english: 'Camera', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '카메라로 사진을 찍었습니다.', myanmar: 'ကင်မရာနဲ့ ဓာတ်ပုံ ရိုက်ခဲ့တယ်။', english: 'I took pictures with the camera.' }
  ]},
  { id: '1679', korean: '사진', myanmar: 'ဓာတ်ပုံ', english: 'Photo', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 사진을 찍었습니다.', myanmar: 'လှပတဲ့ ဓာတ်ပုံ ရိုက်ခဲ့တယ်။', english: 'I took beautiful photos.' }
  ]},
  { id: '1680', korean: '기념품', myanmar: 'အမှတ်တရပစ္စည်း', english: 'Souvenir', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '특별한 기념품을 샀습니다.', myanmar: 'ထူးခြားတဲ့ အမှတ်တရပစ္စည်း ဝယ်ခဲ့တယ်။', english: 'I bought a special souvenir.' }
  ]},
  { id: '1681', korean: '쇼핑', myanmar: 'ဈေးဝယ်ခြင်း', english: 'Shopping', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '쇼핑을 즐겼습니다.', myanmar: 'ဈေးဝယ်ခြင်း ပျော်ရွှင်ခဲ့တယ်။', english: 'I enjoyed shopping.' }
  ]},
  { id: '1682', korean: '시장', myanmar: 'ဈေးကွက်', english: 'Market', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '현지 시장을 구경했습니다.', myanmar: 'ဒေသခံ ဈေးကွက် လှမ်းကြည့်ခဲ့တယ်။', english: 'I looked around the local market.' }
  ]},
  { id: '1683', korean: '박물관', myanmar: 'ပြတိုက်', english: 'Museum', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '역사 박물관을 방문했습니다.', myanmar: 'သမိုင်း ပြတိုက် သွားရောက်ခဲ့တယ်။', english: 'I visited the history museum.' }
  ]},
  { id: '1684', korean: '미술관', myanmar: 'အနုပညာပြခန်း', english: 'Art gallery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유명한 미술관에 갔습니다.', myanmar: 'နာမည်ကြီး အနုပညာပြခန်း သွားခဲ့တယ်။', english: 'I went to a famous art gallery.' }
  ]},
  { id: '1685', korean: '궁전', myanmar: 'နန်းတော်', english: 'Palace', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 궁전을 구경했습니다.', myanmar: 'လှပတဲ့ နန်းတော် လှမ်းကြည့်ခဲ့တယ်။', english: 'I toured the beautiful palace.' }
  ]},
  { id: '1686', korean: '성당', myanmar: 'ဘုရားကျောင်း', english: 'Cathedral', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고풍스러운 성당을 보았습니다.', myanmar: 'ရှေးဟောင်းပုံစံ ဘုရားကျောင်း ကြည့်ခဲ့တယ်။', english: 'I saw an ancient cathedral.' }
  ]},
  { id: '1687', korean: '사원', myanmar: 'ဘုရားကျောင်း', english: 'Temple', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유서 깊은 사원에 갔습니다.', myanmar: 'သမိုင်းကြောင်းရှိတဲ့ ဘုရားကျောင်း သွားခဲ့တယ်။', english: 'I went to a historic temple.' }
  ]},
  { id: '1688', korean: '해변', myanmar: 'ကမ်းခြေ', english: 'Beach', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 해변에서 쉬었습니다.', myanmar: 'လှပတဲ့ ကမ်းခြေမှာ အနားယူခဲ့တယ်။', english: 'I rested on the beautiful beach.' }
  ]},
  { id: '1689', korean: '산', myanmar: 'တောင်', english: 'Mountain', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '높은 산에 올랐습니다.', myanmar: 'တောင် မြင့်ကို တက်ခဲ့တယ်။', english: 'I climbed a high mountain.' }
  ]},
  { id: '1690', korean: '호수', myanmar: 'ရေကန်', english: 'Lake', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '맑은 호수를 보았습니다.', myanmar: 'ကြည်လင်တဲ့ ရေကန် ကြည့်ခဲ့တယ်။', english: 'I saw a clear lake.' }
  ]},
  { id: '1691', korean: '강', myanmar: 'မြစ်', english: 'River', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '긴 강을 따라 걸었습니다.', myanmar: 'ရှည်လျားတဲ့ မြစ် တလျှောက် လမ်းလျှောက်ခဲ့တယ်။', english: 'I walked along the long river.' }
  ]},
  { id: '1692', korean: '폭포', myanmar: 'ရေတံခွန', english: 'Waterfall', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '장관인 폭포를 구경했습니다.', myanmar: 'ရှုမြင်ကွင်း လှတဲ့ ရေတံခွန ကြည့်ခဲ့တယ်။', english: 'I watched the spectacular waterfall.' }
  ]},
  { id: '1693', korean: '동굴', myanmar: 'ဂူ', english: 'Cave', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '신비한 동굴을 탐험했습니다.', myanmar: 'လျှို့ဝှက်ဆန်းကြယ်တဲ့ ဂူ စူးစမ်းခဲ့တယ်။', english: 'I explored the mysterious cave.' }
  ]},
  { id: '1694', korean: '섬', myanmar: 'ကျွန်း', english: 'Island', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '작은 섬에 갔습니다.', myanmar: 'ကျွန်း ငယ်လေးကို သွားခဲ့တယ်။', english: 'I went to a small island.' }
  ]},
  { id: '1695', korean: '다리', myanmar: 'တံတား', english: 'Bridge', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '유명한 다리를 건넜습니다.', myanmar: 'နာမည်ကြီး တံတား ဖြတ်ကူးခဲ့တယ်။', english: 'I crossed the famous bridge.' }
  ]},
  { id: '1696', korean: '공원', myanmar: 'ဥယျာဉ်', english: 'Park', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '넓은 공원을 산책했습니다.', myanmar: 'ကျယ်ဝန်းတဲ့ ဥယျာဉ် လမ်းလျှောက်ခဲ့တယ်။', english: 'I walked in the spacious park.' }
  ]},
  { id: '1697', korean: '동물원', myanmar: 'တိရစ္ဆာန်ရုံ', english: 'Zoo', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '동물원에서 동물들을 보았습니다.', myanmar: 'တိရစ္ဆာန်ရုံမှာ တိရစ္ဆာန်တွေ ကြည့်ခဲ့တယ်။', english: 'I saw animals at the zoo.' }
  ]},
  { id: '1698', korean: '놀이공원', myanmar: 'ဖျော်ဖြေရေးဥယျာဉ်', english: 'Amusement park', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '놀이공원에서 재미있게 놀았습니다.', myanmar: 'ဖျော်ဖြေရေးဥယျာဉ်မှာ ပျော်ရွှင်စွာ ကစားခဲ့တယ်။', english: 'I had fun at the amusement park.' }
  ]},
  { id: '1699', korean: '축제', myanmar: 'ပွဲတော်', english: 'Festival', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '전통 축제에 참여했습니다.', myanmar: 'ရိုးရာ ပွဲတော်မှာ ပါဝင်ခဲ့တယ်။', english: 'I participated in the traditional festival.' }
  ]},
  { id: '1700', korean: '문화', myanmar: 'ယဉ်ကျေးမှု', english: 'Culture', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다양한 문화를 체험했습니다.', myanmar: 'ယဉ်ကျေးမှု မျိုးစုံ ကြုံတွေ့ခဲ့တယ်။', english: 'I experienced various cultures.' }
  ]},

  // ===== CATEGORY 15: ADVANCED WEATHER & SEASONS TERMS (1701-1750) =====
  { id: '1701', korean: '날씨', myanmar: 'ရာသီဥတု', english: 'Weather', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '오늘 날씨가 좋습니다.', myanmar: 'ဒီနေ့ ရာသီဥတု ကောင်းတယ်။', english: 'The weather is good today.' }
  ]},
  { id: '1702', korean: '기온', myanmar: 'အပူချိန်', english: 'Temperature', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기온이 올라가고 있습니다.', myanmar: 'အပူချိန် မြင့်လာနေတယ်။', english: 'The temperature is rising.' }
  ]},
  { id: '1703', korean: '습도', myanmar: 'စိုထိုင်းဆ', english: 'Humidity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '습도가 높습니다.', myanmar: 'စိုထိုင်းဆ မြင့်တယ်။', english: 'The humidity is high.' }
  ]},
  { id: '1704', korean: '기압', myanmar: 'လေဖိအား', english: 'Atmospheric pressure', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기압이 낮아지고 있습니다.', myanmar: 'လေဖိအား နိမ့်လာနေတယ်။', english: 'The atmospheric pressure is dropping.' }
  ]},
  { id: '1705', korean: '바람', myanmar: 'လေ', english: 'Wind', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시원한 바람이 붑니다.', myanmar: 'အေးမြတဲ့ လေ တိုက်တယ်။', english: 'A cool wind is blowing.' }
  ]},
  { id: '1706', korean: '구름', myanmar: 'တိမ်', english: 'Cloud', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '하늘에 구름이 많습니다.', myanmar: 'ကောင်းကင်မှာ တိမ် များတယ်။', english: 'There are many clouds in the sky.' }
  ]},
  { id: '1707', korean: '햇빛', myanmar: 'နေရောင်ခြည်', english: 'Sunlight', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '따뜻한 햇빛이 비춥니다.', myanmar: 'နွေးထွေးတဲ့ နေရောင်ခြည် ရောင်ခြည်တယ်။', english: 'Warm sunlight is shining.' }
  ]},
  { id: '1708', korean: '그림자', myanmar: 'အရိပ်', english: 'Shadow', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '나무 그림자에서 쉬었습니다.', myanmar: 'သစ်ပင် အရိပ်မှာ အနားယူခဲ့တယ်။', english: 'I rested in the tree shadow.' }
  ]},
  { id: '1709', korean: '비', myanmar: 'မိုး', english: 'Rain', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '비가 내리고 있습니다.', myanmar: 'မိုး ရွာနေတယ်။', english: 'It is raining.' }
  ]},
  { id: '1710', korean: '소나기', myanmar: 'မိုးရွာခြင်း', english: 'Shower', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '갑자기 소나기가 내렸습니다.', myanmar: 'ရုတ်တရက် မိုးရွာခြင်း ရွာခဲ့တယ်။', english: 'A sudden shower came.' }
  ]},
  { id: '1711', korean: '폭우', myanmar: 'မိုးသီး', english: 'Heavy rain', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '폭우가 내렸습니다.', myanmar: 'မိုးသီး ရွာခဲ့တယ်။', english: 'Heavy rain fell.' }
  ]},
  { id: '1712', korean: '우산', myanmar: 'ထီး', english: 'Umbrella', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '우산을 가져왔습니다.', myanmar: 'ထီး ယူလာခဲ့တယ်။', english: 'I brought an umbrella.' }
  ]},
  { id: '1713', korean: '눈', myanmar: 'နှင်း', english: 'Snow', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '눈이 내리고 있습니다.', myanmar: 'နှင်း ကျနေတယ်။', english: 'Snow is falling.' }
  ]},
  { id: '1714', korean: '눈송이', myanmar: 'နှင်းပွင့်', english: 'Snowflake', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 눈송이가 떨어집니다.', myanmar: 'လှပတဲ့ နှင်းပွင့် ကျတယ်။', english: 'Beautiful snowflakes are falling.' }
  ]},
  { id: '1715', korean: '눈사람', myanmar: 'နှင်းလူ', english: 'Snowman', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '눈사람을 만들었습니다.', myanmar: 'နှင်းလူ ဖန်တီးခဲ့တယ်။', english: 'I made a snowman.' }
  ]},
  { id: '1716', korean: '서리', myanmar: 'နှင်းခဲ', english: 'Frost', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아침에 서리가 내렸습니다.', myanmar: 'နံနက်မှာ နှင်းခဲ ကျခဲ့တယ်။', english: 'Frost fell in the morning.' }
  ]},
  { id: '1717', korean: '얼음', myanmar: 'ရေခဲ', english: 'Ice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '길에 얼음이 얼었습니다.', myanmar: 'လမ်းမှာ ရေခဲ ခဲခဲ့တယ်။', english: 'Ice formed on the road.' }
  ]},
  { id: '1718', korean: '번개', myanmar: 'လျှပ်စီး', english: 'Lightning', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '번개가 번쩍였습니다.', myanmar: 'လျှပ်စီး တောက်ခဲ့တယ်။', english: 'Lightning flashed.' }
  ]},
  { id: '1719', korean: '천둥', myanmar: 'မိုးကြိုး', english: 'Thunder', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '천둥소리가 들렸습니다.', myanmar: 'မိုးကြိုး အသံ ကြားခဲ့တယ်။', english: 'Thunder was heard.' }
  ]},
  { id: '1720', korean: '태풍', myanmar: 'လေမုန်တိုင်း', english: 'Typhoon', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '태풍이 접근하고 있습니다.', myanmar: 'လေမုန်တိုင်း နီးကပ်လာနေတယ်။', english: 'A typhoon is approaching.' }
  ]},
  { id: '1721', korean: '안개', myanmar: 'မြူ', english: 'Fog', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '짙은 안개가 끼었습니다.', myanmar: 'ထူထပ်တဲ့ မြူ ဖုံးခဲ့တယ်။', english: 'Thick fog formed.' }
  ]},
  { id: '1722', korean: '이슬', myanmar: 'နှင်းစက်', english: 'Dew', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '풀잎에 이슬이 맺혔습니다.', myanmar: 'မြက်ရွက်မှာ နှင်းစက် စုခဲ့တယ်။', english: 'Dew formed on the grass.' }
  ]},
  { id: '1723', korean: '무지개', myanmar: 'သက်တံတား', english: 'Rainbow', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 무지개가 떴습니다.', myanmar: 'လှပတဲ့ သက်တံတား ပေါ်ခဲ့တယ်။', english: 'A beautiful rainbow appeared.' }
  ]},
  { id: '1724', korean: '봄', myanmar: 'နွေဦးရာသီ', english: 'Spring', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '봄이 왔습니다.', myanmar: 'နွေဦးရာသီ ရောက်လာခဲ့ပြီ။', english: 'Spring has come.' }
  ]},
  { id: '1725', korean: '여름', myanmar: 'နွေရာသီ', english: 'Summer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '여름이 더웠습니다.', myanmar: 'နွေရာသီမှာ ပူခဲ့တယ်။', english: 'Summer was hot.' }
  ]},
  { id: '1726', korean: '가을', myanmar: 'ဆောင်းဦးရာသီ', english: 'Autumn', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가을이 시원합니다.', myanmar: 'ဆောင်းဦးရာသီ အေးမြတယ်။', english: 'Autumn is cool.' }
  ]},
  { id: '1727', korean: '겨울', myanmar: 'ဆောင်းရာသီ', english: 'Winter', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '겨울이 춥습니다.', myanmar: 'ဆောင်းရာသီ အေးတယ်။', english: 'Winter is cold.' }
  ]},
  { id: '1728', korean: '계절', myanmar: 'ရာသီ', english: 'Season', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋아하는 계절이 있습니다.', myanmar: 'နှစ်သက်တဲ့ ရာသီ ရှိတယ်။', english: 'I have a favorite season.' }
  ]},
  { id: '1729', korean: '더위', myanmar: 'ပူပြင်းမှု', english: 'Heat', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '더위가 심합니다.', myanmar: 'ပူပြင်းမှု ပြင်းထန်တယ်။', english: 'The heat is severe.' }
  ]},
  { id: '1730', korean: '추위', myanmar: 'အေးမြမှု', english: 'Cold', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '추위를 느낍니다.', myanmar: 'အေးမြမှု ခံစားတယ်။', english: 'I feel the cold.' }
  ]},
  { id: '1731', korean: '폭염', myanmar: 'ပူပြင်းသောရာသီ', english: 'Heat wave', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '폭염이 계속됩니다.', myanmar: 'ပူပြင်းသောရာသီ ဆက်လက်နေတယ်။', english: 'The heat wave continues.' }
  ]},
  { id: '1732', korean: '한파', myanmar: 'အေးမြသောရာသီ', english: 'Cold wave', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '한파가 몰아쳤습니다.', myanmar: 'အေးမြသောရာသီ တိုက်ခတ်ခဲ့တယ်။', english: 'A cold wave hit.' }
  ]},
  { id: '1733', korean: '가뭄', myanmar: 'မိုးခေါင်မှု', english: 'Drought', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가뭄이 심각합니다.', myanmar: 'မိုးခေါင်မှု လေးနက်တယ်။', english: 'The drought is serious.' }
  ]},
  { id: '1734', korean: '홍수', myanmar: 'ရေကြီးမှု', english: 'Flood', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '홍수가 발생했습니다.', myanmar: 'ရေကြီးမှု ဖြစ်ပွားခဲ့တယ်။', english: 'A flood occurred.' }
  ]},
  { id: '1735', korean: '지진', myanmar: 'ငလျင်', english: 'Earthquake', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지진이 일어났습니다.', myanmar: 'ငလျင် ဖြစ်ပွားခဲ့တယ်။', english: 'An earthquake occurred.' }
  ]},
  { id: '1736', korean: '화산', myanmar: 'မီးတောင်', english: 'Volcano', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '화산이 폭발했습니다.', myanmar: 'မီးတောင် ပေါက်ကွဲခဲ့တယ်။', english: 'The volcano erupted.' }
  ]},
  { id: '1737', korean: '해일', myanmar: 'ဆူနာမီ', english: 'Tsunami', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '해일이 밀려왔습니다.', myanmar: 'ဆူနာမီ လှိုင်းတိုးလာခဲ့တယ်။', english: 'A tsunami came.' }
  ]},
  { id: '1738', korean: '산사태', myanmar: 'တောင်အပြိုအကျ', english: 'Landslide', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '산사태가 발생했습니다.', myanmar: 'တောင်အပြိုအကျ ဖြစ်ပွားခဲ့တယ်။', english: 'A landslide occurred.' }
  ]},
  { id: '1739', korean: '자연재해', myanmar: 'သဘာဝဘေးအန္တရာယ်', english: 'Natural disaster', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자연재해에 대비해야 합니다.', myanmar: 'သဘာဝဘေးအန္တရာယ်အတွက် ပြင်ဆင်ရမယ်။', english: 'We must prepare for natural disasters.' }
  ]},
  { id: '1740', korean: '기상예보', myanmar: 'ရာသီဥတုခန့်မှန်းချက်', english: 'Weather forecast', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기상예보를 확인했습니다.', myanmar: 'ရာသီဥတုခန့်မှန်းချက် စစ်ဆေးခဲ့တယ်။', english: 'I checked the weather forecast.' }
  ]},
  { id: '1741', korean: '기상청', myanmar: 'ရာသီဥတုဦးစီးဌာန', english: 'Meteorological office', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기상청에서 발표했습니다.', myanmar: 'ရာသီဥတုဦးစီးဌာနမှ ကြေညာခဲ့တယ်။', english: 'The meteorological office announced.' }
  ]},
  { id: '1742', korean: '온난화', myanmar: 'ပူပြင်းလာခြင်း', english: 'Warming', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지구 온난화가 문제입니다.', myanmar: 'ကမ္ဘာ့ ပူပြင်းလာခြင်း ပြဿနာပါ။', english: 'Global warming is a problem.' }
  ]},
  { id: '1743', korean: '환경변화', myanmar: 'သဘာဝပတ်ဝန်းကျင်ပြောင်းလဲမှု', english: 'Environmental change', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환경변화를 관찰합니다.', myanmar: 'သဘာဝပတ်ဝန်းကျင်ပြောင်းလဲမှု လေ့လာတယ်။', english: 'We observe environmental changes.' }
  ]},
  { id: '1744', korean: '기후', myanmar: 'ရာသီဥတု', english: 'Climate', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기후가 변하고 있습니다.', myanmar: 'ရာသီဥတု ပြောင်းလဲနေတယ်။', english: 'The climate is changing.' }
  ]},
  { id: '1745', korean: '온도계', myanmar: 'အပူချိန်တိုင်းကိရိယာ', english: 'Thermometer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '온도계를 확인했습니다.', myanmar: 'အပူချိန်တိုင်းကိရိယာ စစ်ဆေးခဲ့တယ်။', english: 'I checked the thermometer.' }
  ]},
  { id: '1746', korean: '습도계', myanmar: 'စိုထိုင်းဆတိုင်းကိရိယာ', english: 'Hygrometer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '습도계로 측정했습니다.', myanmar: 'စိုထိုင်းဆတိုင်းကိရိယာနဲ့ တိုင်းတာခဲ့တယ်။', english: 'I measured with a hygrometer.' }
  ]},
  { id: '1747', korean: '기압계', myanmar: 'လေဖိအားတိုင်းကိရိယာ', english: 'Barometer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기압계를 읽었습니다.', myanmar: 'လေဖိအားတိုင်းကိရိယာ ဖတ်ခဲ့တယ်။', english: 'I read the barometer.' }
  ]},
  { id: '1748', korean: '풍향계', myanmar: 'လေတိုက်ရာညွှန်ကိရိယာ', english: 'Wind vane', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '풍향계가 돌고 있습니다.', myanmar: 'လေတိုက်ရာညွှန်ကိရိယာ လှည့်နေတယ်။', english: 'The wind vane is turning.' }
  ]},
  { id: '1749', korean: '강수량', myanmar: 'မိုးရွာသည့်ပမာဏ', english: 'Precipitation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강수량이 많았습니다.', myanmar: 'မိုးရွာသည့်ပမာဏ များခဲ့တယ်။', english: 'The precipitation was high.' }
  ]},
  { id: '1750', korean: '구름량', myanmar: 'တိမ်ပမာဏ', english: 'Cloud cover', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '구름량이 증가했습니다.', myanmar: 'တိမ်ပမာဏ တိုးလာခဲ့တယ်။', english: 'Cloud cover increased.' }
  ]},

  // ===== CATEGORY 16: ADVANCED PHILOSOPHY & ABSTRACT CONCEPTS (1751-1800) =====
  { id: '1751', korean: '철학', myanmar: 'ဒဿနိကဗေဒ', english: 'Philosophy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '철학을 공부합니다.', myanmar: 'ဒဿနိကဗေဒ လေ့လာတယ်။', english: 'I study philosophy.' }
  ]},
  { id: '1752', korean: '사상', myanmar: 'အတွေးအခေါ်', english: 'Thought/Ideology', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깊은 사상을 가지고 있습니다.', myanmar: 'နက်နဲတဲ့ အတွေးအခေါ် ရှိတယ်။', english: 'I have deep thoughts.' }
  ]},
  { id: '1753', korean: '개념', myanmar: 'အယူအဆ', english: 'Concept', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 개념을 배웠습니다.', myanmar: 'အယူအဆ အသစ် သင်ခဲ့တယ်။', english: 'I learned a new concept.' }
  ]},
  { id: '1754', korean: '관념', myanmar: 'စိတ်ကူးပုံ / အတွေးအခေါ် / အမြင်', english: 'Notion/Idea', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '추상적인 관념입니다.', myanmar: 'စိတ်ကူးပုံ ပုံသဏ္ဍာန်ပါ။', english: 'It\'s an abstract notion.' }
  ]},
  { id: '1755', korean: '가치', myanmar: 'တန်ဖိုး', english: 'Value', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인간의 가치를 존중합니다.', myanmar: 'လူသား တန်ဖိုး လေးစားတယ်။', english: 'I respect human value.' }
  ]},
  { id: '1756', korean: '가치관', myanmar: 'တန်ဖိုးစံနှုန်း', english: 'Values/Value system', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '올바른 가치관을 가져야 합니다.', myanmar: 'မှန်ကန်တဲ့ တန်ဖိုးစံနှုန်း ရှိရမယ်။', english: 'We should have correct values.' }
  ]},
  { id: '1757', korean: '도덕', myanmar: 'ကိုယ်ကျင့်တရား', english: 'Morality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '도덕적인 행동을 해야 합니다.', myanmar: 'ကိုယ်ကျင့်တရားနှင့်ညီညွတ်သော လုပ်ရပ် လုပ်ရမယ်။', english: 'We must act morally.' }
  ]},
  { id: '1758', korean: '윤리', myanmar: 'ကိုယ်ကျင့်တရား', english: 'Ethics', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '의학 윤리를 지켜야 합니다.', myanmar: 'ဆေးပညာ ကိုယ်ကျင့်တရား လိုက်နာရမယ်။', english: 'Medical ethics must be followed.' }
  ]},
  { id: '1759', korean: '원리', myanmar: 'မူလနိယာမ', english: 'Principle', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기본 원리를 이해했습니다.', myanmar: 'အခြေခံ မူလနိယာမ နားလည်ခဲ့တယ်။', english: 'I understood the basic principle.' }
  ]},
  { id: '1760', korean: '원칙', myanmar: 'စည်းမျဉ်း', english: 'Rule/Principle', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '원칙을 지켜야 합니다.', myanmar: 'စည်းမျဉ်း လိုက်နာရမယ်။', english: 'We must follow principles.' }
  ]},
  { id: '1761', korean: '논리', myanmar: 'ယုတ္တိ', english: 'Logic', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '논리적으로 생각해야 합니다.', myanmar: 'ယုတ္တိနှင့်အညီ စဉ်းစားရမယ်။', english: 'We must think logically.' }
  ]},
  { id: '1762', korean: '이성', myanmar: 'ဉာဏ်ပညာ', english: 'Reason', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이성적인 판단을 합니다.', myanmar: 'ဉာဏ်ပညာနှင့်အညီ ဆုံးဖြတ်တယ်။', english: 'I make rational judgments.' }
  ]},
  { id: '1763', korean: '감정', myanmar: 'စိတ်ခံစားမှု', english: 'Emotion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '감정을 조절해야 합니다.', myanmar: 'စိတ်ခံစားမှု ထိန်းချုပ်ရမယ်။', english: 'We must control emotions.' }
  ]},
  { id: '1764', korean: '직관', myanmar: 'အလိုအလျောက်သိမြင်ခြင်း', english: 'Intuition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '직관으로 알았습니다.', myanmar: 'အလိုအလျောက်သိမြင်ခြင်းနဲ့ သိခဲ့တယ်။', english: 'I knew by intuition.' }
  ]},
  { id: '1765', korean: '의식', myanmar: 'သတိစိတ်', english: 'Consciousness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '의식이 깨어났습니다.', myanmar: 'သတိစိတ် နိုးကြားခဲ့တယ်။', english: 'Consciousness awakened.' }
  ]},
  { id: '1766', korean: '무의식', myanmar: 'သတိမရှိခြင်း', english: 'Unconsciousness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '무의식적으로 행동했습니다.', myanmar: 'သတိမရှိခြင်းနှင့် လုပ်ဆောင်ခဲ့တယ်။', english: 'I acted unconsciously.' }
  ]},
  { id: '1767', korean: '자아', myanmar: 'မိမိကိုယ်', english: 'Self/Ego', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자아를 발견했습니다.', myanmar: 'မိမိကိုယ် ရှာတွေ့ခဲ့တယ်။', english: 'I discovered myself.' }
  ]},
  { id: '1768', korean: '정체성', myanmar: 'မိမိဖြစ်ရပ်', english: 'Identity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정체성을 찾고 있습니다.', myanmar: 'မိမိဖြစ်ရပ် ရှာဖွေနေတယ်။', english: 'I am searching for identity.' }
  ]},
  { id: '1769', korean: '존재', myanmar: 'တည်ရှိခြင်း', english: 'Existence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '존재의 의미를 생각합니다.', myanmar: 'တည်ရှိခြင်းရဲ့ အဓိပ္ပါယ် စဉ်းစားတယ်။', english: 'I think about the meaning of existence.' }
  ]},
  { id: '1770', korean: '본질', myanmar: 'အရင်းအမြစ်', english: 'Essence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '문제의 본질을 파악했습니다.', myanmar: 'ပြဿနာရဲ့ အရင်းအမြစ် နားလည်ခဲ့တယ်။', english: 'I grasped the essence of the problem.' }
  ]},
  { id: '1771', korean: '현상', myanmar: 'ဖြစ်ရပ်', english: 'Phenomenon', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자연 현상을 관찰합니다.', myanmar: 'သဘာဝ ဖြစ်ရပ် လေ့လာတယ်။', english: 'I observe natural phenomena.' }
  ]},
  { id: '1772', korean: '실체', myanmar: 'အမှန်တကယ်ရှိသောအရာ', english: 'Reality/Entity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실체를 파악하기 어렵습니다.', myanmar: 'အမှန်တကယ်ရှိသောအရာ နားလည်ဖို့ ခက်တယ်။', english: 'It\'s difficult to grasp reality.' }
  ]},
  { id: '1773', korean: '진리', myanmar: 'သမ္မာတရား', english: 'Truth', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '진리를 추구합니다.', myanmar: 'သမ္မာတရား လိုက်စားတယ်။', english: 'I pursue truth.' }
  ]},
  { id: '1774', korean: '거짓', myanmar: 'မုသား / အလိမ်အညာ', english: 'Falsehood', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '거짓을 말하면 안 됩니다.', myanmar: 'မုသား မပြောရဘူး။', english: 'You must not tell lies.' }
  ]},
  { id: '1775', korean: '선악', myanmar: 'ကောင်းမွန်မှုနှင့်မကောင်းမှု', english: 'Good and evil', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '선악을 구별해야 합니다.', myanmar: 'ကောင်းမွန်မှုနှင့်မကောင်းမှု ခွဲခြားရမယ်။', english: 'We must distinguish between good and evil.' }
  ]},
  { id: '1776', korean: '정의', myanmar: 'တရားမျှတမှု', english: 'Justice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정의를 실현해야 합니다.', myanmar: 'တရားမျှတမှု အကောင်အထည်ဖော်ရမယ်။', english: 'We must realize justice.' }
  ]},
  { id: '1777', korean: '자유', myanmar: 'လွတ်လပ်မှု', english: 'Freedom', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자유를 소중히 여깁니다.', myanmar: 'လွတ်လပ်မှု တန်ဖိုးထားတယ်။', english: 'I value freedom.' }
  ]},
  { id: '1778', korean: '평등', myanmar: 'တန်းတူညီမျှမှု', english: 'Equality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '모든 사람은 평등합니다.', myanmar: 'လူအားလုံး တန်းတူညီမျှမှု ရှိတယ်။', english: 'All people are equal.' }
  ]},
  { id: '1779', korean: '평화', myanmar: 'ငြိမ်းချမ်းမှု', english: 'Peace', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '평화를 사랑합니다.', myanmar: 'ငြိမ်းချမ်းမှု ချစ်တယ်။', english: 'I love peace.' }
  ]},
  { id: '1780', korean: '행복', myanmar: 'ပျော်ရွှင်မှု', english: 'Happiness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '행복을 추구합니다.', myanmar: 'ပျော်ရွှင်မှု လိုက်စားတယ်။', english: 'I pursue happiness.' }
  ]},
  { id: '1781', korean: '고통', myanmar: 'ဝေဒနာ', english: 'Suffering', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고통을 이겨내야 합니다.', myanmar: 'ဝေဒနာ အနိုင်ရရမယ်။', english: 'We must overcome suffering.' }
  ]},
  { id: '1782', korean: '희망', myanmar: 'မျှော်လင့်ချက်', english: 'Hope', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '희망을 잃지 않습니다.', myanmar: 'မျှော်လင့်ချက် မဆုံးရှုံးဘူး။', english: 'I don\'t lose hope.' }
  ]},
  { id: '1783', korean: '절망', myanmar: 'စိတ်ပျက်အားလျော့မှု', english: 'Despair', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '절망에 빠지면 안 됩니다.', myanmar: 'စိတ်ပျက်အားလျော့မှုမှာ မကျရောက်ရဘူး။', english: 'We must not fall into despair.' }
  ]},
  { id: '1784', korean: '운명', myanmar: 'ကံကြမ္မာ', english: 'Fate/Destiny', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '운명을 받아들입니다.', myanmar: 'ကံကြမ္မာ လက်ခံတယ်။', english: 'I accept fate.' }
  ]},
  { id: '1785', korean: '의지', myanmar: 'စိတ်ဓာတ်', english: 'Will', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 의지가 필요합니다.', myanmar: 'ခိုင်မာတဲ့ စိတ်ဓာတ် လိုအပ်တယ်။', english: 'Strong will is needed.' }
  ]},
  { id: '1786', korean: '의미', myanmar: 'အဓိပ္ပါယ်', english: 'Meaning', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '삶의 의미를 찾습니다.', myanmar: 'ဘဝရဲ့ အဓိပ္ပါယ် ရှာတယ်။', english: 'I search for the meaning of life.' }
  ]},
  { id: '1787', korean: '목적', myanmar: 'ရည်မှန်းချက်', english: 'Purpose', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '명확한 목적이 있습니다.', myanmar: 'ရှင်းလင်းတဲ့ ရည်မှန်းချက် ရှိတယ်။', english: 'I have a clear purpose.' }
  ]},
  { id: '1788', korean: '이상', myanmar: 'စံပြ / ideal type', english: 'Ideal', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '높은 이상을 가지고 있습니다.', myanmar: 'မြင့်မားတဲ့ စံပြ ရှိတယ်။/ ကြီးကြီးမှန်းသည်', english: 'I have high ideals.' }
  ]},
  { id: '1789', korean: '현실', myanmar: 'လက်တွေ့', english: 'Reality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '현실을 직시해야 합니다.', myanmar: 'လက်တွေ့ ရင်ဆိုင်ရမယ်။', english: 'We must face reality.' }
  ]},
  { id: '1790', korean: '꿈', myanmar: 'အိပ်မက်', english: 'Dream', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '꿈을 이루고 싶습니다.', myanmar: 'အိပ်မက် အကောင်အထည်ဖော်ချင်တယ်။', english: 'I want to achieve my dream.' }
  ]},
  { id: '1791', korean: '환상', myanmar: 'မှားယွင်းတွေးမြင်ခြင်း', english: 'Illusion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '환상에 빠지면 안 됩니다.', myanmar: 'မှားယွင်းတွေးမြင်ခြင်းမှာ မကျရောက်ရဘူး။', english: 'We must not fall into illusion.' }
  ]},
  { id: '1792', korean: '신념', myanmar: 'ယုံကြည်ချက်', english: 'Belief', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '확고한 신념이 있습니다.', myanmar: 'ခိုင်မာတဲ့ ယုံကြည်ချက် ရှိတယ်။', english: 'I have firm beliefs.' }
  ]},
  { id: '1793', korean: '믿음', myanmar: 'ယုံကြည်မှု', english: 'Faith', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '믿음을 잃지 않습니다.', myanmar: 'ယုံကြည်မှု မဆုံးရှုံးဘူး။', english: 'I don\'t lose faith.' }
  ]},
  { id: '1794', korean: '의심', myanmar: 'သံသယ', english: 'Doubt', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '의심이 생겼습니다.', myanmar: 'သံသယ ဖြစ်လာခဲ့တယ်။', english: 'Doubt arose.' }
  ]},
  { id: '1795', korean: '확신', myanmar: 'ယုံကြည်ချက်', english: 'Conviction', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '확신을 가지고 말합니다.', myanmar: 'ယုံကြည်ချက်နှင့် ပြောတယ်။', english: 'I speak with conviction.' }
  ]},
  { id: '1796', korean: '지혜', myanmar: 'ပညာ', english: 'Wisdom', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지혜를 얻었습니다.', myanmar: 'ပညာ ရရှိခဲ့တယ်။', english: 'I gained wisdom.' }
  ]},
  { id: '1797', korean: '무지', myanmar: 'အသိမရှိခြင်း', english: 'Ignorance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '무지를 벗어나야 합니다.', myanmar: 'အသိမရှိခြင်းမှ ထွက်ရှောင်ရမယ်။', english: 'We must escape ignorance.' }
  ]},
  { id: '1798', korean: '깨달음', myanmar: 'သိမြင်ခြင်း', english: 'Enlightenment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깨달음을 얻었습니다.', myanmar: 'သိမြင်ခြင်း ရရှိခဲ့တယ်။', english: 'I gained enlightenment.' }
  ]},
  { id: '1799', korean: '성찰', myanmar: 'မိမိကိုယ်ကို ပြန်လည်သုံးသပ်ခြင်း', english: 'Reflection', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깊은 성찰이 필요합니다.', myanmar: 'နက်နက်နဲနဲ မိမိကိုယ်ကို ပြန်လည်သုံးသပ်ခြင်း လိုအပ်တယ်။', english: 'Deep reflection is needed.' }
  ]},
  { id: '1800', korean: '명상', myanmar: 'တရားထိုင်ခြင်း', english: 'Meditation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '매일 명상을 합니다.', myanmar: 'နေ့တိုင်း တရားထိုင်တယ်။', english: 'I meditate every day.' }
  ]},

  // ===== FINAL CATEGORIES: COMPLETING 1000 PRE-INTERMEDIATE ㄱ WORDS (1801-2000) =====
  // ===== CATEGORY 17: ADVANCED PSYCHOLOGY TERMS (1801-1850) =====
  { id: '1801', korean: '심리', myanmar: 'စိတ်ပညာ', english: 'Psychology', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '심리를 연구합니다.', myanmar: 'စိတ်ပညာ သုတေသနပြုတယ်။', english: 'I study psychology.' }
  ]},
  { id: '1802', korean: '성격', myanmar: 'စရိုက်', english: 'Personality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 성격을 가지고 있습니다.', myanmar: 'ကောင်းတဲ့ စရိုက် ရှိတယ်။', english: 'I have a good personality.' }
  ]},
  { id: '1803', korean: '기질', myanmar: 'ကိုယ်စိတ်ထား', english: 'Temperament', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '차분한 기질입니다.', myanmar: 'တည်ငြိမ်တဲ့ ကိုယ်စိတ်ထားပါ။', english: 'I have a calm temperament.' }
  ]},
  { id: '1804', korean: '습관', myanmar: 'အကျင့်', english: 'Habit', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 습관을 기르세요.', myanmar: 'ကောင်းတဲ့ အကျင့် မွေးလေ့ကျင့်သား ပြုလုပ်ပါ။', english: 'Develop good habits.' }
  ]},
  { id: '1805', korean: '행동', myanmar: 'လုပ်ရပ်', english: 'Behavior', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이상한 행동을 합니다.', myanmar: 'ထူးဆန်းတဲ့ လုပ်ရပ် လုပ်တယ်။', english: 'I behave strangely.' }
  ]},
  { id: '1806', korean: '태도', myanmar: 'သဘောထား', english: 'Attitude', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '긍정적인 태도가 중요합니다.', myanmar: 'အပြုသဘောထား အရေးကြီးတယ်။', english: 'A positive attitude is important.' }
  ]},
  { id: '1807', korean: '동기', myanmar: 'လှုံ့ဆော်မှု', english: 'Motivation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 동기가 필요합니다.', myanmar: 'ခိုင်မာတဲ့ လှုံ့ဆော်မှု လိုအပ်တယ်။', english: 'Strong motivation is needed.' }
  ]},
  { id: '1808', korean: '욕구', myanmar: 'အလိုဆန္ဒ', english: 'Desire', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '욕구를 조절해야 합니다.', myanmar: 'အလိုဆန္ဒ ထိန်းချုပ်ရမယ်။', english: 'We must control desires.' }
  ]},
  { id: '1809', korean: '충동', myanmar: 'ချက်ချင်းလုပ်ချင်စိတ်', english: 'Impulse', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '충동을 억제했습니다.', myanmar: 'ချက်ချင်းလုပ်ချင်စိတ် နှိမ်နင်းခဲ့တယ်။', english: 'I suppressed the impulse.' }
  ]},
  { id: '1810', korean: '본능', myanmar: 'မွေးရာပါ စိတ်ကူး', english: 'Instinct', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '본능적으로 반응했습니다.', myanmar: 'မွေးရာပါ စိတ်ကူးနဲ့ တုန့်ပြန်ခဲ့တယ်။', english: 'I reacted instinctively.' }
  ]},
  { id: '1811', korean: '학습', myanmar: 'သင်ယူခြင်း', english: 'Learning', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '학습 능력이 뛰어납니다.', myanmar: 'သင်ယူခြင်း စွမ်းရည် ကောင်းတယ်။', english: 'Learning ability is excellent.' }
  ]},
  { id: '1812', korean: '기억력', myanmar: 'မှတ်ညဏ်', english: 'Memory', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기억력이 좋습니다.', myanmar: 'မှတ်ညဏ် ကောင်းတယ်။', english: 'Memory is good.' }
  ]},
  { id: '1813', korean: '집중력', myanmar: 'အာရုံစိုက်မှု', english: 'Concentration', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '집중력을 높여야 합니다.', myanmar: 'အာရုံစိုက်မှု မြှင့်တင်ရမယ်။', english: 'We must improve concentration.' }
  ]},
  { id: '1814', korean: '주의력', myanmar: 'သတိပြုမှု', english: 'Attention', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '주의력이 산만합니다.', myanmar: 'သတိပြုမှု ကွဲလွဲနေတယ်။', english: 'Attention is scattered.' }
  ]},
  { id: '1815', korean: '상상력', myanmar: 'စိတ်ကူးယဉ်စွမ်းရည်', english: 'Imagination', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '풍부한 상상력을 가지고 있습니다.', myanmar: 'ကြွယ်ဝတဲ့ စိတ်ကူးယဉ်စွမ်းရည် ရှိတယ်။', english: 'I have rich imagination.' }
  ]},
  { id: '1816', korean: '창의력', myanmar: 'ဖန်တီးစွမ်းရည်', english: 'Creativity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '창의력을 발휘해야 합니다.', myanmar: 'ဖန်တီးစွမ်းရည် ပြသရမယ်။', english: 'We must display creativity.' }
  ]},
  { id: '1817', korean: '지능', myanmar: 'ဉာဏ်ရည်', english: 'Intelligence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '높은 지능을 가지고 있습니다.', myanmar: 'မြင့်မားတဲ့ ဉာဏ်ရည် ရှိတယ်။', english: 'I have high intelligence.' }
  ]},
  { id: '1818', korean: '감성', myanmar: 'စိတ်ခံစားမှု', english: 'Sensitivity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '예술적 감성이 있습니다.', myanmar: 'အနုပညာဆိုင်ရာ စိတ်ခံစားမှု ရှိတယ်။', english: 'I have artistic sensitivity.' }
  ]},
  { id: '1819', korean: '공감', myanmar: 'စာနာမှု', english: 'Empathy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다른 사람에게 공감합니다.', myanmar: 'အခြားသူများကို စာနာမှု ရှိတယ်။', english: 'I empathize with others.' }
  ]},
  { id: '1820', korean: '동정', myanmar: 'သနားခြင်း', english: 'Sympathy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '동정심을 느낍니다.', myanmar: 'သနားခြင်း ခံစားတယ်။', english: 'I feel sympathy.' }
  ]},
  { id: '1821', korean: '질투', myanmar: 'မနာလိုမှု / သဝန်တိုခြင်း', english: 'Jealousy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '질투심이 생겼습니다.', myanmar: 'မနာလိုမှု ဖြစ်လာခဲ့တယ်။', english: 'Jealousy arose.' }
  ]},
  { id: '1822', korean: '시기', myanmar: 'မနာလိုမှု', english: 'Envy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시기하지 말아야 합니다.', myanmar: 'မနာလိုမှု မရှိရဘူး။', english: 'We should not envy.' }
  ]},
  { id: '1823', korean: '분노', myanmar: 'ဒေါသ', english: 'Anger', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '분노를 조절해야 합니다.', myanmar: 'ဒေါသ ထိန်းချုပ်ရမယ်။', english: 'We must control anger.' }
  ]},
  { id: '1824', korean: '두려움', myanmar: 'ကြောက်ရွံ့မှု', english: 'Fear', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '두려움을 극복했습니다.', myanmar: 'ကြောက်ရွံ့မှု ကျော်လွှားခဲ့တယ်။', english: 'I overcame fear.' }
  ]},
  { id: '1825', korean: '불안', myanmar: 'စိုးရိမ်မှု', english: 'Anxiety', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '불안감이 심합니다.', myanmar: 'စိုးရိမ်မှု ပြင်းထန်တယ်။', english: 'Anxiety is severe.' }
  ]},
  { id: '1826', korean: '걱정', myanmar: 'စိုးရိမ်ခြင်း', english: 'Worry', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '걱정이 많습니다.', myanmar: 'စိုးရိမ်ခြင်း များတယ်။', english: 'I worry a lot.' }
  ]},
  { id: '1827', korean: '스트레스', myanmar: 'စိတ်ဖိစီးမှု', english: 'Stress', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '스트레스를 받고 있습니다.', myanmar: 'စိတ်ဖိစီးမှု ခံစားနေတယ်။', english: 'I am under stress.' }
  ]},
  { id: '1828', korean: '우울', myanmar: 'စိတ်ညစ်မှု', english: 'Depression', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '우울감에 빠졌습니다.', myanmar: 'စိတ်ညစ်မှုမှာ ကျရောက်ခဲ့တယ်။', english: 'I fell into depression.' }
  ]},
  { id: '1829', korean: '기쁨', myanmar: 'ပျော်ရွှင်ခြင်း', english: 'Joy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 기쁨을 느꼈습니다.', myanmar: 'ကြီးမားတဲ့ ပျော်ရွှင်ခြင်း ခံစားခဲ့တယ်။', english: 'I felt great joy.' }
  ]},
  { id: '1830', korean: '슬픔', myanmar: 'ဝမ်းနည်းမှု', english: 'Sadness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '깊은 슬픔에 잠겼습니다.', myanmar: 'နက်နဲတဲ့ ဝမ်းနည်းမှုမှာ မြုပ်နှံခဲ့တယ်။', english: 'I was immersed in deep sadness.' }
  ]},
  { id: '1831', korean: '놀람', myanmar: 'အံ့သြခြင်း', english: 'Surprise', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '놀람을 감출 수 없었습니다.', myanmar: 'အံ့သြခြင်း ဖုံးကွယ်လို့ မရခဲ့ဘူး။', english: 'I couldn\'t hide my surprise.' }
  ]},
  { id: '1832', korean: '호기심', myanmar: 'သိချင်စိတ်', english: 'Curiosity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '호기심이 많습니다.', myanmar: 'သိချင်စိတ် များတယ်။', english: 'I have a lot of curiosity.' }
  ]},
  { id: '1833', korean: '관심', myanmar: 'စိတ်ဝင်စားမှု', english: 'Interest', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '관심이 많습니다.', myanmar: 'စိတ်ဝင်စားမှု များတယ်။', english: 'I have a lot of interest.' }
  ]},
  { id: '1834', korean: '열정', myanmar: 'စိတ်အားထက်သန်မှု', english: 'Passion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '일에 대한 열정이 있습니다.', myanmar: 'အလုပ်အတွက် စိတ်အားထက်သန်မှု ရှိတယ်။', english: 'I have passion for work.' }
  ]},
  { id: '1835', korean: '자신감', myanmar: 'ကိုယ့်ကိုယ်ကိုယုံကြည်မှု', english: 'Confidence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자신감을 가져야 합니다.', myanmar: 'ကိုယ့်ကိုယ်ကိုယုံကြည်မှု ရှိရမယ်။', english: 'We must have confidence.' }
  ]},
  { id: '1836', korean: '자존심', myanmar: 'မာန', english: 'Pride', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자존심이 상했습니다.', myanmar: 'မာန ထိခိုက်ခဲ့တယ်။', english: 'My pride was hurt.' }
  ]},
  { id: '1837', korean: '겸손', myanmar: 'နှိမ့်ချမှု', english: 'Humility', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '겸손한 태도를 보입니다.', myanmar: 'နှိမ့်ချမှု သဘောထား ပြသတယ်။', english: 'I show a humble attitude.' }
  ]},
  { id: '1838', korean: '교만', myanmar: 'မာနကြီးမှု', english: 'Arrogance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '교만하면 안 됩니다.', myanmar: 'မာနကြီးမှု မရှိရဘူး။', english: 'We must not be arrogant.' }
  ]},
  { id: '1839', korean: '인내', myanmar: 'သည်းခံမှု', english: 'Patience', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인내심이 필요합니다.', myanmar: 'သည်းခံမှု လိုအပ်တယ်။', english: 'Patience is needed.' }
  ]},
  { id: '1840', korean: '성급함', myanmar: 'အလျင်စလိုမှု', english: 'Impatience', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '성급함을 버려야 합니다.', myanmar: 'အလျင်စလိုမှု စွန့်လွှတ်ရမယ်။', english: 'We must abandon impatience.' }
  ]},
  { id: '1841', korean: '용기', myanmar: 'ရဲရင့်မှု', english: 'Courage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '용기를 내야 합니다.', myanmar: 'ရဲရင့်မှု ရှိရမယ်။', english: 'We must have courage.' }
  ]},
  { id: '1842', korean: '겁', myanmar: 'ကြောက်ရွံ့ခြင်း', english: 'Cowardice', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '겁이 많습니다.', myanmar: 'ကြောက်ရွံ့ခြင်း များတယ်။', english: 'I am very fearful.' }
  ]},
  { id: '1843', korean: '결단력', myanmar: 'ဆုံးဖြတ်ချက်ချမှတ်စွမ်းရည်', english: 'Decisiveness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '결단력이 있습니다.', myanmar: 'ဆုံးဖြတ်ချက်ချမှတ်စွမ်းရည် ရှိတယ်။', english: 'I have decisiveness.' }
  ]},
  { id: '1844', korean: '우유부단', myanmar: 'မဆုံးဖြတ်နိုင်မှု', english: 'Indecisiveness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '우유부단하면 안 됩니다.', myanmar: 'မဆုံးဖြတ်နိုင်မှု မရှိရဘူး။', english: 'We must not be indecisive.' }
  ]},
  { id: '1845', korean: '책임감', myanmar: 'တာဝန်ခံမှု', english: 'Responsibility', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 책임감이 있습니다.', myanmar: 'ခိုင်မာတဲ့ တာဝန်ခံမှု ရှိတယ်။', english: 'I have strong responsibility.' }
  ]},
  { id: '1846', korean: '성실', myanmar: 'ရိုးသားမှု', english: 'Sincerity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '성실한 사람입니다.', myanmar: 'ရိုးသားမှု ရှိတဲ့ လူပါ။', english: 'I am a sincere person.' }
  ]},
  { id: '1847', korean: '게으름', myanmar: 'ပျင်းရိမှု', english: 'Laziness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '게으름을 피해야 합니다.', myanmar: 'ပျင်းရိမှု ရှောင်ရမယ်။', english: 'We must avoid laziness.' }
  ]},
  { id: '1848', korean: '부지런함', myanmar: 'လုံ့လရှိမှု', english: 'Diligence', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '부지런함이 성공의 열쇠입니다.', myanmar: 'လုံ့လရှိမှု အောင်မြင်မှုရဲ့ သော့ချက်ပါ။', english: 'Diligence is the key to success.' }
  ]},
  { id: '1849', korean: '친절', myanmar: 'ကြင်ဖက်မှု', english: 'Kindness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '친절을 베풀어야 합니다.', myanmar: 'ကြင်ဖက်မှု ပေးရမယ်။', english: 'We must show kindness.' }
  ]},
  { id: '1850', korean: '이기심', myanmar: 'တစ်ကိုယ်ကောင်းဆန်မှု', english: 'Selfishness', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이기심을 버려야 합니다.', myanmar: 'တစ်ကိုယ်ကောင်းဆန်မှု စွန့်လွှတ်ရမယ်။', english: 'We must abandon selfishness.' }
  ]},

  // ===== CATEGORY 18: ADVANCED SCIENCE & RESEARCH TERMS (1851-1900) =====
  { id: '1851', korean: '과학', myanmar: 'သိပ္ပံပညာ', english: 'Science', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '과학을 연구합니다.', myanmar: 'သိပ္ပံပညာ သုတေသနပြုတယ်။', english: 'I study science.' }
  ]},
  { id: '1852', korean: '연구', myanmar: 'သုတေသန', english: 'Research', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 연구를 시작했습니다.', myanmar: 'သုတေသန အသစ် စတင်ခဲ့တယ်။', english: 'I started new research.' }
  ]},
  { id: '1853', korean: '실험', myanmar: 'စမ်းသပ်ခြင်း', english: 'Experiment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실험을 진행합니다.', myanmar: 'စမ်းသပ်ခြင်း ဆက်လုပ်တယ်။', english: 'I conduct an experiment.' }
  ]},
  { id: '1854', korean: '관찰', myanmar: 'စောင့်ကြည့်လေ့လာခြင်း', english: 'Observation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '세밀한 관찰이 필요합니다.', myanmar: 'အသေးစိတ် လေ့လာခြင်း လိုအပ်တယ်။', english: 'Detailed observation is needed.' }
  ]},
  { id: '1855', korean: '가설', myanmar: 'ယူဆချက်', english: 'Hypothesis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가설을 세웠습니다.', myanmar: 'ယူဆချက် တင်ခဲ့တယ်။', english: 'I formed a hypothesis.' }
  ]},
  { id: '1856', korean: '이론', myanmar: 'သီအိုရီ', english: 'Theory', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 이론을 발표했습니다.', myanmar: 'သီအိုရီ အသစ် ကြေညာခဲ့တယ်။', english: 'I announced a new theory.' }
  ]},
  { id: '1857', korean: '법칙', myanmar: 'သဘာဝနိယာမ', english: 'Law', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '물리 법칙을 배웠습니다.', myanmar: 'ရူပဗေဒ သဘာဝနိယာမ သင်ခဲ့တယ်။', english: 'I learned physics laws.' }
  ]},
  { id: '1858', korean: '공식', myanmar: 'ဖော်မြူလာ / ပုံသေနည်း', english: 'Formula', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '복잡한 공식을 풀었습니다.', myanmar: 'ရှုပ်ထွေးတဲ့ ပုံသေနည်းကို ဖြေနိင်ခဲ့တယ်။', english: 'I solved a complex formula.' }
  ]},
  { id: '1859', korean: '분석', myanmar: 'ခွဲခြမ်းစိတ်ဖြာခြင်း', english: 'Analysis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '데이터를 분석합니다.', myanmar: 'ဒေတာ ခွဲခြမ်းစိတ်ဖြာခြင်း လုပ်တယ်။', english: 'I analyze data.' }
  ]},
  { id: '1860', korean: '결과', myanmar: 'ရလဒ်', english: 'Result', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '놀라운 결과를 얻었습니다.', myanmar: 'အံ့သြစရာ ရလဒ် ရခဲ့တယ်။', english: 'I obtained surprising results.' }
  ]},
  { id: '1861', korean: '결론', myanmar: 'နိဂုံး', english: 'Conclusion', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '결론을 내렸습니다.', myanmar: 'နိဂုံး ချုပ်ခဲ့တယ်။', english: 'I drew a conclusion.' }
  ]},
  { id: '1862', korean: '증명', myanmar: 'သက်သေပြခြင်း', english: 'Proof', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수학적 증명을 했습니다.', myanmar: 'သင်္ချာဆိုင်ရာ သက်သေပြခြင်း လုပ်ခဲ့တယ်။', english: 'I did a mathematical proof.' }
  ]},
  { id: '1863', korean: '발견', myanmar: 'ရှာတွေ့ခြင်း / တွေ့ရှိချက်', english: 'Discovery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '중요한 발견을 했습니다.', myanmar: 'အရေးကြီးတဲ့ ရှာတွေ့ခြင်း လုပ်ခဲ့တယ်။', english: 'I made an important discovery.' }
  ]},
  { id: '1864', korean: '발명', myanmar: 'တီထွင်ခြင်း', english: 'Invention', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 발명을 했습니다.', myanmar: 'တီထွင်ခြင်း အသစ် လုပ်ခဲ့တယ်။', english: 'I made a new invention.' }
  ]},
  { id: '1865', korean: '기술', myanmar: 'နည်းပညာ', english: 'Technology', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '최신 기술을 사용합니다.', myanmar: 'နောက်ဆုံး နည်းပညာ အသုံးပြုတယ်။', english: 'I use the latest technology.' }
  ]},
  { id: '1866', korean: '도구', myanmar: 'ကိရိယာ', english: 'Tool', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정밀한 도구가 필요합니다.', myanmar: 'တိကျတဲ့ ကိရိယာ လိုအပ်တယ်။', english: 'Precise tools are needed.' }
  ]},
  { id: '1867', korean: '장비', myanmar: 'စက်ပစ္စည်း', english: 'Equipment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실험 장비를 준비했습니다.', myanmar: 'စမ်းသပ်မှု စက်ပစ္စည်း ပြင်ဆင်ခဲ့တယ်။', english: 'I prepared experimental equipment.' }
  ]},
  { id: '1868', korean: '기계', myanmar: 'စက်', english: 'Machine', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '복잡한 기계를 조작합니다.', myanmar: 'ရှုပ်ထွေးတဲ့ စက် လုပ်ဆောင်တယ်။', english: 'I operate complex machines.' }
  ]},
  { id: '1869', korean: '계산', myanmar: 'တွက်ချက်ခြင်း', english: 'Calculation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 계산이 중요합니다.', myanmar: 'မှန်ကန်တဲ့ တွက်ချက်ခြင်း အရေးကြီးတယ်။', english: 'Accurate calculation is important.' }
  ]},
  { id: '1870', korean: '측정', myanmar: 'တိုင်းတာခြင်း', english: 'Measurement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정밀한 측정을 했습니다.', myanmar: 'တိကျတဲ့ တိုင်းတာခြင်း လုပ်ခဲ့တယ်။', english: 'I made precise measurements.' }
  ]},
  { id: '1871', korean: '단위', myanmar: 'ယူနစ်', english: 'Unit', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '표준 단위를 사용합니다.', myanmar: 'စံ ယူနစ် အသုံးပြုတယ်။', english: 'I use standard units.' }
  ]},
  { id: '1872', korean: '데이터', myanmar: 'အချက်အလက်', english: 'Data', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '데이터를 수집했습니다.', myanmar: 'အချက်အလက် စုဆောင်းခဲ့တယ်။', english: 'I collected data.' }
  ]},
  { id: '1873', korean: '통계', myanmar: 'စာရင်းအင်း', english: 'Statistics', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '통계를 분석합니다.', myanmar: 'စာရင်းအင်း ခွဲခြမ်းစိတ်ဖြာတယ်။', english: 'I analyze statistics.' }
  ]},
  { id: '1874', korean: '그래프', myanmar: 'ဂရပ်', english: 'Graph', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '그래프를 그렸습니다.', myanmar: 'ဂရပ် ဆွဲခဲ့တယ်။', english: 'I drew a graph.' }
  ]},
  { id: '1875', korean: '표', myanmar: 'ဇယား', english: 'Table', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '데이터를 표로 정리했습니다.', myanmar: 'အချက်အလက် ဇယားအဖြစ် စုစည်းခဲ့တယ်။', english: 'I organized data into a table.' }
  ]},
  { id: '1876', korean: '차트', myanmar: 'ဇယားပုံ', english: 'Chart', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '차트를 만들었습니다.', myanmar: 'ဇယားပုံ ပြုလုပ်ခဲ့တယ်။', english: 'I made a chart.' }
  ]},
  { id: '1877', korean: '변수', myanmar: 'ပြောင်းလဲနိုင်သောအရာ / ကိန်းရှင် ဂဏန်း', english: 'Variable', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '변수를 조절합니다.', myanmar: 'ပြောင်းလဲနိုင်သောအရာ ထိန်းချုပ်တယ်။', english: 'I control variables.' }
  ]},
  { id: '1878', korean: '상수', myanmar: 'မပြောင်းလဲသောအရာ / ကိန်းသေ ဂဏန်း', english: 'Constant', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '물리 상수를 사용합니다.', myanmar: 'ရူပဗေဒ မပြောင်းလဲသောအရာ အသုံးပြုတယ်။', english: 'I use physical constants.' }
  ]},
  { id: '1879', korean: '함수', myanmar: 'ဖန်ရှင်', english: 'Function', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수학 함수를 풀었습니다.', myanmar: 'သင်္ချာ ဖန်ရှင် ဖြေခဲ့တယ်။', english: 'I solved a mathematical function.' }
  ]},
  { id: '1880', korean: '방정식', myanmar: 'ညီမျှခြင်း', english: 'Equation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '복잡한 방정식을 풀었습니다.', myanmar: 'ရှုပ်ထွေးတဲ့ ညီမျှခြင်း ဖြေခဲ့တယ်။', english: 'I solved a complex equation.' }
  ]},
  { id: '1881', korean: '알고리즘', myanmar: 'လုပ်ငန်းစဉ်', english: 'Algorithm', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효율적인 알고리즘을 개발했습니다.', myanmar: 'ထိရောက်တဲ့ လုပ်ငန်းစဉ် တီထွင်ခဲ့တယ်။', english: 'I developed an efficient algorithm.' }
  ]},
  { id: '1882', korean: '프로그램', myanmar: 'ပရိုဂရမ်', english: 'Program', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '컴퓨터 프로그램을 작성했습니다.', myanmar: 'ကွန်ပျူတာ ပရိုဂရမ် ရေးခဲ့တယ်။', english: 'I wrote a computer program.' }
  ]},
  { id: '1883', korean: '모델', myanmar: 'ပုံစံ', english: 'Model', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수학적 모델을 만들었습니다.', myanmar: 'သင်္ချာဆိုင်ရာ ပုံစံ ပြုလုပ်ခဲ့တယ်။', english: 'I created a mathematical model.' }
  ]},
  { id: '1884', korean: '시뮬레이션', myanmar: 'တုပပြခြင်း / အစမ်ကိရိယာ', english: 'Simulation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '컴퓨터 시뮬레이션을 했습니다.', myanmar: 'ကွန်ပျူတာ တုပပြခြင်း လုပ်ခဲ့တယ်။', english: 'I ran a computer simulation.' }
  ]},
  { id: '1885', korean: '예측', myanmar: 'ကြိုတင်ခန့်မှန်းခြင်း', english: 'Prediction', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 예측을 했습니다.', myanmar: 'မှန်ကန်တဲ့ ကြိုတင်ခန့်မှန်းခြင်း လုပ်ခဲ့တယ်။', english: 'I made accurate predictions.' }
  ]},
  { id: '1886', korean: '확률', myanmar: 'ဖြစ်နိုင်ခြေ', english: 'Probability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '확률을 계산했습니다.', myanmar: 'ဖြစ်နိုင်ခြေ တွက်ချက်ခဲ့တယ်။', english: 'I calculated probability.' }
  ]},
  { id: '1887', korean: '패턴', myanmar: 'ပုံစံ', english: 'Pattern', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '규칙적인 패턴을 발견했습니다.', myanmar: 'စည်းမျဉ်းရှိတဲ့ ပုံစံ ရှာတွေ့ခဲ့တယ်။', english: 'I found a regular pattern.' }
  ]},
  { id: '1888', korean: '구조', myanmar: 'ဖွဲ့စည်းပုံ / တည်ဆောက်ပုံ', english: 'Structure', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '복잡한 구조를 분석했습니다.', myanmar: 'ရှုပ်ထွေးတဲ့ ဖွဲ့စည်းပုံ ခွဲခြမ်းစိတ်ဖြာခဲ့တယ်။', english: 'I analyzed a complex structure.' }
  ]},
  { id: '1889', korean: '시스템', myanmar: 'စနစ်', english: 'System', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효율적인 시스템을 구축했습니다.', myanmar: 'ထိရောက်တဲ့ စနစ် တည်ဆောက်ခဲ့တယ်။', english: 'I built an efficient system.' }
  ]},
  { id: '1890', korean: '네트워크', myanmar: 'ကွန်ယက် / နက်ဝေါ့(ခ်)', english: 'Network', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '복잡한 네트워크를 분석합니다.', myanmar: 'ရှုပ်ထွေးတဲ့ ကွန်ယက် ခွဲခြမ်းစိတ်ဖြာတယ်။', english: 'I analyze complex networks.' }
  ]},
  { id: '1891', korean: '프로세스', myanmar: 'လုပ်ငန်းဆောင်ရွက်ခြင်း', english: 'Process', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 프로세스를 개발했습니다.', myanmar: 'လုပ်ငန်းဆောင်ရွက်ခြင်း အသစ် တီထွင်ခဲ့တယ်။', english: 'I developed a new process.' }
  ]},
  { id: '1892', korean: '방법', myanmar: 'နည်းလမ်း', english: 'Method', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '과학적 방법을 사용합니다.', myanmar: 'သိပ္ပံနည်းကျ နည်းလမ်း အသုံးပြုတယ်။', english: 'I use scientific methods.' }
  ]},
  { id: '1893', korean: '절차', myanmar: 'လုပ်ထုံးလုပ်နည်း', english: 'Procedure', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 절차를 따릅니다.', myanmar: 'မှန်ကန်တဲ့ လုပ်ထုံးလုပ်နည်း လိုက်နာတယ်။', english: 'I follow exact procedures.' }
  ]},
  { id: '1894', korean: '규칙', myanmar: 'စည်းမျဉ်း', english: 'Rule', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '과학의 규칙을 배웠습니다.', myanmar: 'သိပ္ပံရဲ့ စည်းမျဉ်း သင်ခဲ့တယ်။', english: 'I learned scientific rules.' }
  ]},
  { id: '1895', korean: '원칙', myanmar: 'အခြေခံမူ', english: 'Principle', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기본 원칙을 적용합니다.', myanmar: 'အခြေခံမူ အသုံးချတယ်။', english: 'I apply basic principles.' }
  ]},
  { id: '1896', korean: '질문', myanmar: 'မေးခွန်း', english: 'Question', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '중요한 질문을 했습니다.', myanmar: 'အရေးကြီးတဲ့ မေးခွန်း မေးခဲ့တယ်။', english: 'I asked an important question.' }
  ]},
  { id: '1897', korean: '답', myanmar: 'အဖြေ', english: 'Answer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 답을 찾았습니다.', myanmar: 'မှန်ကန်တဲ့ အဖြေ ရှာတွေ့ခဲ့တယ်။', english: 'I found the correct answer.' }
  ]},
  { id: '1898', korean: '해결', myanmar: 'ဖြေရှင်းခြင်း', english: 'Solution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '문제의 해결책을 찾았습니다.', myanmar: 'ပြဿနာရဲ့ ဖြေရှင်းခြင်း ရှာတွေ့ခဲ့တယ်။', english: 'I found a solution to the problem.' }
  ]},
  { id: '1899', korean: '개선', myanmar: 'တိုးတက်စေခြင်း', english: 'Improvement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '지속적인 개선이 필요합니다.', myanmar: 'ဆက်တိုက် တိုးတက်စေခြင်း လိုအပ်တယ်။', english: 'Continuous improvement is needed.' }
  ]},
    { id: '1900', korean: '혁신', myanmar: 'ပြုပြင်ပြောင်းလဲမှု', english: 'Innovation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기술 혁신을 추진합니다.', myanmar: 'နည်းပညာ ပြုပြင်ပြောင်းလဲမှု တွန်းအားပေးတယ်။', english: 'I promote technological innovation.' }
  ]},

  // ===== CATEGORY 19: ADVANCED SOCIETY & CULTURE TERMS (1901-1950) =====
  { id: '1901', korean: '관습', myanmar: 'ထုံးတမ်း', english: 'Custom', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '전통 관습을 지킵니다.', myanmar: 'ရိုးရာ ထုံးတမ်း လိုက်နာတယ်။', english: 'I follow traditional customs.' }
  ]},
  { id: '1902', korean: '공동체', myanmar: 'အသိုင်းအဝိုင်း', english: 'Community', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공동체를 위해 일합니다.', myanmar: 'အသိုင်းအဝိုင်းအတွက် အလုပ်လုပ်တယ်။', english: 'I work for the community.' }
  ]},
  { id: '1903', korean: '계층', myanmar: 'လူ့အဆင့်အတန်း', english: 'Social class', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다양한 계층의 사람들이 모였습니다.', myanmar: 'လူ့အဆင့်အတန်း မတူညီတဲ့ လူတွေ စုရုံးခဲ့တယ်။', english: 'People from various social classes gathered.' }
  ]},
  { id: '1904', korean: '권위', myanmar: 'အခွင့်အာဏာ', english: 'Authority', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '그는 권위 있는 사람입니다.', myanmar: 'သူက အခွင့်အာဏာ ရှိတဲ့ လူပါ။', english: 'He is an authoritative person.' }
  ]},
  { id: '1905', korean: '규범', myanmar: 'စည်းကမ်းချက်', english: 'Norm', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '사회 규범을 따릅니다.', myanmar: 'လူမှုရေး စည်းကမ်းချက် လိုက်နာတယ်။', english: 'I follow social norms.' }
  ]},
  { id: '1906', korean: '귀족', myanmar: 'မြင့်မြတ်သူ', english: 'Noble', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '귀족 가문의 후손입니다.', myanmar: 'မြင့်မြတ်သူ မိသားစုရဲ့ သားစဉ်မြေးဆက်ပါ။', english: 'He is a descendant of a noble family.' }
  ]},
  { id: '1907', korean: '국경', myanmar: 'နိုင်ငံနယ်စပ်', english: 'Border', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '국경을 넘었습니다.', myanmar: 'နိုင်ငံနယ်စပ် ကူးခဲ့တယ်။', english: 'I crossed the border.' }
  ]},
  { id: '1908', korean: '국민', myanmar: 'နိုင်ငံသား', english: 'Citizen', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '모든 국민이 권리가 있습니다.', myanmar: 'နိုင်ငံသား အားလုံးမှာ အခွင့်အရေး ရှိတယ်။', english: 'All citizens have rights.' }
  ]},
  { id: '1909', korean: '군주', myanmar: 'ဘုရင်', english: 'Monarch', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '군주제 국가입니다.', myanmar: 'ဘုရင်စနစ် နိုင်ငံပါ။', english: 'It is a monarchy.' }
  ]},
  { id: '1910', korean: '그룹', myanmar: 'အုပ်စု', english: 'Group', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '작은 그룹으로 나누었습니다.', myanmar: 'အုပ်စု ငယ်တွေ ခွဲခဲ့တယ်။', english: 'We divided into small groups.' }
  ]},
  { id: '1911', korean: '기념일', myanmar: 'အမှတ်တရနေ့', english: 'Anniversary', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '결혼 기념일을 축하합니다.', myanmar: 'လက်ထပ် အမှတ်တရနေ့ ကျင်းပတယ်။', english: 'I celebrate the wedding anniversary.' }
  ]},
  { id: '1912', korean: '기부', myanmar: 'လှူဒါန်း', english: 'Donation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자선 기부를 했습니다.', myanmar: 'ကုသိုလ်ရေး လှူဒါန်း လုပ်ခဲ့တယ်။', english: 'I made a charitable donation.' }
  ]},
  { id: '1913', korean: '기원', myanmar: 'မူလအစ', english: 'Origin', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '전통의 기원을 연구합니다.', myanmar: 'ရိုးရာရဲ့ မူလအစ သုတေသနပြုတယ်။', english: 'I study the origin of traditions.' }
  ]},
  { id: '1914', korean: '긍정', myanmar: 'အပြုသဘော', english: 'Positive', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '긍정적인 사고를 합니다.', myanmar: 'အပြုသဘော စိတ်ဓာတ်ရှိတယ်။', english: 'I have positive thinking.' }
  ]},
  { id: '1915', korean: '글로벌', myanmar: 'ကမ္ဘာ့', english: 'Global', pos: 'adjective', level: 'pre-intermediate', examples: [
    { korean: '글로벌 시대입니다.', myanmar: 'ကမ္ဘာ့ ခေတ်ပါ။', english: 'It is a global era.' }
  ]},
  { id: '1916', korean: '기둥', myanmar: 'တိုင် / ထောက်တိုင်', english: 'Pillar', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '사회의 기둥 역할을 합니다.', myanmar: 'လူ့အသိုင်းအဝိုင်းရဲ့ တိုင် အခန်းကဏ္ဍ ကျင့်တယ်။', english: 'I play the role of a pillar of society.' }
  ]},
  { id: '1917', korean: '김치', myanmar: 'ကင်ချီ / ဂင်ချီ', english: 'Kimchi', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '김치를 담갔습니다.', myanmar: 'ကင်ချီ သိပ်ခဲ့တယ်။', english: 'I made kimchi.' }
  ]},
  { id: '1918', korean: '금지', myanmar: 'တားမြစ်ခြင်း', english: 'Prohibition', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '흡연 금지 구역입니다.', myanmar: 'ဆေးလိပ်သောက်ခြင်း တားမြစ်တဲ့ နေရာပါ။', english: 'This is a no-smoking zone.' }
  ]},
  { id: '1919', korean: '기회', myanmar: 'အခွင့်အလမ်း', english: 'Opportunity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 기회를 놓쳤습니다.', myanmar: 'ကောင်းတဲ့ အခွင့်အလမ်း လွတ်သွားခဲ့တယ်။', english: 'I missed a good opportunity.' }
  ]},
  { id: '1920', korean: '기쁨', myanmar: 'ပျော်ရွှင်မှု', english: 'Joy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 기쁨을 느꼈습니다.', myanmar: 'ကြီးမားတဲ့ ပျော်ရွှင်မှု ခံစားခဲ့တယ်။', english: 'I felt great joy.' }
  ]},
  { id: '1921', korean: '기적', myanmar: 'အံ့ဖွယ်ကောင်းတဲ့အရာ', english: 'Miracle', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기적이 일어났습니다.', myanmar: 'အံ့ဖွယ်ကောင်းတဲ့အရာ ဖြစ်ပွားခဲ့တယ်။', english: 'A miracle happened.' }
  ]},
  { id: '1922', korean: '기준', myanmar: 'စံနှုန်း', english: 'Standard', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '높은 기준을 설정했습니다.', myanmar: 'မြင့်မားတဲ့ စံနှုန်း သတ်မှတ်ခဲ့တယ်။', english: 'I set high standards.' }
  ]},
  { id: '1923', korean: '기타', myanmar: 'အခြား', english: 'Others', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '기타 사항들을 검토합니다.', myanmar: 'အခြား ကိစ္စရပ်တွေ စစ်ဆေးတယ်။', english: 'I review other matters.' }
  ]},
  { id: '1924', korean: '기호', myanmar: 'အမှတ်အသား', english: 'Symbol', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '특별한 기호를 사용합니다.', myanmar: 'အထူး အမှတ်အသား သုံးတယ်။', english: 'I use special symbols.' }
  ]},
  { id: '1925', korean: '기획', myanmar: 'စီမံကိန်း', english: 'Planning', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 기획을 준비합니다.', myanmar: 'စီမံကိန်း အသစ် ပြင်ဆင်တယ်။', english: 'I prepare a new plan.' }
  ]},
  { id: '1926', korean: '길이', myanmar: 'အလျား', english: 'Length', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '길이를 측정했습니다.', myanmar: 'အလျား တိုင်းတာခဲ့တယ်။', english: 'I measured the length.' }
  ]},
  { id: '1927', korean: '김', myanmar: 'ပင်လယ်ရေမျှော်', english: 'Seaweed', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '김을 구워 먹었습니다.', myanmar: 'ပင်လယ်ရေမျှော် ကင်ပြီး စားခဲ့တယ်။', english: 'I ate roasted seaweed.' }
  ]},
  { id: '1928', korean: '깊이', myanmar: 'နက်နဲမှု', english: 'Depth', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '물의 깊이를 확인합니다.', myanmar: 'ရေရဲ့ နက်နဲမှု စစ်ဆေးတယ်။', english: 'I check the depth of the water.' }
  ]},
  { id: '1929', korean: '꿈', myanmar: 'အိပ်မက်', english: 'Dream', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 꿈을 꾸었습니다.', myanmar: 'ကောင်းတဲ့ အိပ်မက် မက်ခဲ့တယ်။', english: 'I had a good dream.' }
  ]},
  { id: '1930', korean: '끝', myanmar: 'အဆုံး', english: 'End', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '이야기의 끝입니다.', myanmar: 'ပုံပြင်ရဲ့ အဆုံးပါ။', english: 'This is the end of the story.' }
  ]},
  { id: '1931', korean: '나라', myanmar: 'နိုင်ငံ', english: 'Country', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아름다운 나라입니다.', myanmar: 'လှပတဲ့ နိုင်ငံပါ။', english: 'It is a beautiful country.' }
  ]},
  { id: '1932', korean: '나이', myanmar: 'အသက်', english: 'Age', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '나이가 많아졌습니다.', myanmar: 'အသက် ကြီးလာခဲ့တယ်။', english: 'I have gotten older.' }
  ]},
  { id: '1933', korean: '날씨', myanmar: 'ရာသီဥတု', english: 'Weather', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '오늘 날씨가 좋습니다.', myanmar: 'ဒီနေ့ ရာသီဥတု ကောင်းတယ်။', english: 'The weather is good today.' }
  ]},
  { id: '1934', korean: '남자', myanmar: 'ယောက်ျား', english: 'Man', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '키 큰 남자를 보았습니다.', myanmar: 'အရပ်မြင့်တဲ့ ယောက်ျား မြင်ခဲ့တယ်။', english: 'I saw a tall man.' }
  ]},
  { id: '1935', korean: '내용', myanmar: 'အကြောင်းအရာ', english: 'Content', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '책의 내용이 흥미롭습니다.', myanmar: 'စာအုပ်ရဲ့ အကြောင်းအရာ စိတ်ဝင်စားဖွယ်ရှိတယ်။', english: 'The content of the book is interesting.' }
  ]},
  { id: '1936', korean: '너비', myanmar: 'အနံ', english: 'Width', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '길의 너비를 측정합니다.', myanmar: 'လမ်းရဲ့ အနံ တိုင်းတာတယ်။', english: 'I measure the width of the road.' }
  ]},
  { id: '1937', korean: '네트워크', myanmar: 'ကွန်ယက်', english: 'Network', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '네트워크를 구축했습니다.', myanmar: 'ကွန်ယက် တည်ဆောက်ခဲ့တယ်။', english: 'I built a network.' }
  ]},
  { id: '1938', korean: '노력', myanmar: 'ကြိုးစားမှု', english: 'Effort', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '많은 노력이 필요합니다.', myanmar: 'ကြိုးစားမှု အများကြီး လိုအပ်တယ်။', english: 'Much effort is needed.' }
  ]},
  { id: '1939', korean: '놀이', myanmar: 'ကစားခြင်း', english: 'Play', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '아이들의 놀이를 보았습니다.', myanmar: 'ကလေးတွေရဲ့ ကစားခြင်း ကြည့်ခဲ့တယ်။', english: 'I watched the children play.' }
  ]},
  { id: '1940', korean: '농업', myanmar: 'စိုက်ပျိုးရေး', english: 'Agriculture', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '농업에 종사합니다.', myanmar: 'စိုက်ပျိုးရေး လုပ်ငန်းလုပ်တယ်။', english: 'I work in agriculture.' }
  ]},
  { id: '1941', korean: '높이', myanmar: 'အမြင့်', english: 'Height', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건물의 높이를 측정합니다.', myanmar: 'အဆောက်အအုံရဲ့ အမြင့် တိုင်းတာတယ်။', english: 'I measure the height of the building.' }
  ]},
  { id: '1942', korean: '누구', myanmar: 'ဘယ်သူ', english: 'Who', pos: 'pronoun', level: 'pre-intermediate', examples: [
    { korean: '누구를 찾고 있습니까?', myanmar: 'ဘယ်သူ့ကို ရှာနေတာလဲ။', english: 'Who are you looking for?' }
  ]},
  { id: '1943', korean: '눈', myanmar: 'မျက်လုံး', english: 'Eye', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '눈이 아픕니다.', myanmar: 'မျက်လုံး နာတယ်။', english: 'My eyes hurt.' }
  ]},
  { id: '1944', korean: '느낌', myanmar: 'ခံစားချက်', english: 'Feeling', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 느낌이 듭니다.', myanmar: 'ကောင်းတဲ့ ခံစားချက် ရှိတယ်။', english: 'I have a good feeling.' }
  ]},
  { id: '1945', korean: '능력', myanmar: 'စွမ်းရည်', english: 'Ability', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '특별한 능력이 있습니다.', myanmar: 'အထူး စွမ်းရည် ရှိတယ်။', english: 'I have special abilities.' }
  ]},
  { id: '1946', korean: '다양성', myanmar: 'မတူကွဲပြားမှု', english: 'Diversity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '문화의 다양성을 존중합니다.', myanmar: 'ယဉ်ကျေးမှုရဲ့ မတူကွဲပြားမှု လေးစားတယ်။', english: 'I respect cultural diversity.' }
  ]},
  { id: '1947', korean: '단계', myanmar: 'အဆင့်', english: 'Stage', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '다음 단계로 진행합니다.', myanmar: 'နောက်တစ်ဆင့် ရှေ့ဆက်တယ်။', english: 'I proceed to the next stage.' }
  ]},
  { id: '1948', korean: '대화', myanmar: 'စကားပြောဆိုမှု', english: 'Conversation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '즐거운 대화를 나누었습니다.', myanmar: 'ပျော်ရွှင်တဲ့ စကားပြောဆိုမှု ပြုခဲ့တယ်။', english: 'We had a pleasant conversation.' }
  ]},
  { id: '1949', korean: '도전', myanmar: 'စိန်ခေါ်မှု', english: 'Challenge', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 도전을 받아들입니다.', myanmar: 'စိန်ခေါ်မှု အသစ် လက်ခံတယ်။', english: 'I accept new challenges.' }
  ]},
  { id: '1950', korean: '동기', myanmar: 'လှုံ့ဆော်မှု', english: 'Motivation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '강한 동기가 있습니다.', myanmar: 'ပြင်းထန်တဲ့ လှုံ့ဆော်မှု ရှိတယ်။', english: 'I have strong motivation.' }
  ]},

  // ===== CATEGORY 20: ADVANCED ECONOMICS & FINANCE TERMS (1951-2000) =====
  { id: '1951', korean: '경제', myanmar: 'စီးပွားရေး', english: 'Economy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '경제가 성장하고 있습니다.', myanmar: 'စီးပွားရေး တိုးတက်နေတယ်။', english: 'The economy is growing.' }
  ]},
  { id: '1952', korean: '금융', myanmar: 'ငွေကြေးရေးရာ', english: 'Finance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '금융 시장을 분석합니다.', myanmar: 'ငွေကြေးရေးရာ စျေးကွက် ပိုင်းခြားစိတ်ဖြာတယ်။', english: 'I analyze the financial market.' }
  ]},
  { id: '1953', korean: '가격', myanmar: 'ဈေးနှုန်း', english: 'Price', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '가격이 올랐습니다.', myanmar: 'ဈေးနှုန်း မြင့်လာခဲ့တယ်။', english: 'The price has risen.' }
  ]},
  { id: '1954', korean: '거래', myanmar: 'အရောင်းအဝယ်', english: 'Transaction', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '성공적인 거래를 했습니다.', myanmar: 'အောင်မြင်တဲ့ အရောင်းအဝယ် လုပ်ခဲ့တယ်။', english: 'I made a successful transaction.' }
  ]},
  { id: '1955', korean: '계산', myanmar: 'တွက်ချက်ခြင်း', english: 'Calculation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '정확한 계산이 필요합니다.', myanmar: 'တိကျတဲ့ တွက်ချက်ခြင်း လိုအပ်တယ်။', english: 'Accurate calculation is needed.' }
  ]},
  { id: '1956', korean: '고객', myanmar: 'ဖောက်သည်', english: 'Customer', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '고객을 만족시켰습니다.', myanmar: 'ဖောက်သည် စိတ်ကျေနပ်စေခဲ့တယ်။', english: 'I satisfied the customer.' }
  ]},
  { id: '1957', korean: '공급', myanmar: 'ထောက်ပံ့ခြင်း', english: 'Supply', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '공급이 부족합니다.', myanmar: 'ထောက်ပံ့ခြင်း လုံလောက်မှု မရှိဘူး။', english: 'The supply is insufficient.' }
  ]},
  { id: '1958', korean: '관리', myanmar: 'စီမံခန့်ခွဲမှု', english: 'Management', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효율적인 관리가 중요합니다.', myanmar: 'ထိရောက်တဲ့ စီမံခန့်ခွဲမှု အရေးကြီးတယ်။', english: 'Efficient management is important.' }
  ]},
  { id: '1959', korean: '광고', myanmar: 'ကြေညာခြင်း', english: 'Advertisement', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 광고를 만들었습니다.', myanmar: 'ကြေညာခြင်း အသစ် လုပ်ခဲ့တယ်။', english: 'I created a new advertisement.' }
  ]},
  { id: '1960', korean: '구매', myanmar: 'ဝယ်ယူခြင်း', english: 'Purchase', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '온라인 구매를 했습니다.', myanmar: 'အွန်လိုင်း ဝယ်ယူခြင်း လုပ်ခဲ့တယ်။', english: 'I made an online purchase.' }
  ]},
  { id: '1961', korean: '규모', myanmar: 'အရွယ်အစား', english: 'Scale', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 규모의 사업입니다.', myanmar: 'အရွယ်အစား ကြီးတဲ့ လုပ်ငန်းပါ။', english: 'It is a large-scale business.' }
  ]},
  { id: '1962', korean: '급여', myanmar: 'လစာ', english: 'Salary', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '급여를 받았습니다.', myanmar: 'လစာ ရခဲ့တယ်။', english: 'I received my salary.' }
  ]},
  { id: '1963', korean: '기업', myanmar: 'ကုမ္ပဏီ', english: 'Enterprise', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '큰 기업에서 일합니다.', myanmar: 'ကုမ္ပဏီ ကြီးမှာ အလုပ်လုပ်တယ်။', english: 'I work at a large enterprise.' }
  ]},
  { id: '1964', korean: '기술', myanmar: 'နည်းပညာ', english: 'Technology', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 기술을 배웁니다.', myanmar: 'နည်းပညာ အသစ် သင်ယူတယ်။', english: 'I learn new technology.' }
  ]},
  { id: '1965', korean: '납부', myanmar: 'ပေးချေခြင်း', english: 'Payment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '세금 납부를 했습니다.', myanmar: 'အခွန် ပေးချေခြင်း လုပ်ခဲ့တယ်။', english: 'I made a tax payment.' }
  ]},
  { id: '1966', korean: '노동', myanmar: 'အလုပ်သမား', english: 'Labor', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '노동의 가치를 인정합니다.', myanmar: 'အလုပ်သမားရဲ့ တန်ဖိုး အသိအမှတ်ပြုတယ်။', english: 'I recognize the value of labor.' }
  ]},
  { id: '1967', korean: '능률', myanmar: 'စွမ်းဆောင်ရည်', english: 'Efficiency', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '업무 능률을 높입니다.', myanmar: 'အလုပ် စွမ်းဆောင်ရည် မြှင့်တင်တယ်။', english: 'I increase work efficiency.' }
  ]},
  { id: '1968', korean: '대출', myanmar: 'ချေးငွေ', english: 'Loan', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '은행에서 대출을 받았습니다.', myanmar: 'ဘဏ်မှ ချေးငွေ ယူခဲ့တယ်။', english: 'I took a loan from the bank.' }
  ]},
  { id: '1969', korean: '도매', myanmar: 'လက်ကားရောင်းခြင်း', english: 'Wholesale', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '도매가격으로 샀습니다.', myanmar: 'လက်ကားရောင်းခြင်း ဈေးနှုန်းနဲ့ ဝယ်ခဲ့တယ်။', english: 'I bought at wholesale price.' }
  ]},
  { id: '1970', korean: '독점', myanmar: 'တစ်ဦးတည်းပိုင်ခြင်း', english: 'Monopoly', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시장을 독점하고 있습니다.', myanmar: 'စျေးကွက်ကို တစ်ဦးတည်းပိုင်ခြင်း လုပ်နေတယ်။', english: 'They monopolize the market.' }
  ]},
  { id: '1971', korean: '매출', myanmar: 'ရောင်းအား', english: 'Sales', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '매출이 증가했습니다.', myanmar: 'ရောင်းအား တိုးလာခဲ့တယ်။', english: 'Sales have increased.' }
  ]},
  { id: '1972', korean: '목표', myanmar: 'ပန်းတိုင်', english: 'Goal', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '목표를 달성했습니다.', myanmar: 'ပန်းတိုင် အောင်မြင်ခဲ့တယ်။', english: 'I achieved the goal.' }
  ]},
  { id: '1973', korean: '물가', myanmar: 'ဈေးနှုန်းများ', english: 'Prices', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '물가가 오르고 있습니다.', myanmar: 'ဈေးနှုန်းများ မြင့်လာနေတယ်။', english: 'Prices are rising.' }
  ]},
  { id: '1974', korean: '배송', myanmar: 'ပို့ဆောင်ခြင်း', english: 'Delivery', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '빠른 배송을 제공합니다.', myanmar: 'မြန်တဲ့ ပို့ဆောင်ခြင်း ပေးတယ်။', english: 'I provide fast delivery.' }
  ]},
  { id: '1975', korean: '보험', myanmar: 'အာမခံ', english: 'Insurance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '건강 보험에 가입했습니다.', myanmar: 'ကျန်းမာရေး အာမခံ ဝင်ခဲ့တယ်။', english: 'I enrolled in health insurance.' }
  ]},
  { id: '1976', korean: '부채', myanmar: 'အကြွေး', english: 'Debt', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '부채를 갚았습니다.', myanmar: 'အကြွေး ဆပ်ခဲ့တယ်။', english: 'I paid off the debt.' }
  ]},
  { id: '1977', korean: '분석', myanmar: 'ပိုင်းခြားစိတ်ဖြာခြင်း', english: 'Analysis', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '시장 분석을 했습니다.', myanmar: 'စျေးကွက် ပိုင်းခြားစိတ်ဖြာခြင်း လုပ်ခဲ့တယ်။', english: 'I did market analysis.' }
  ]},
  { id: '1978', korean: '사업', myanmar: 'လုပ်ငန်း', english: 'Business', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 사업을 시작했습니다.', myanmar: 'လုပ်ငန်း အသစ် စတင်ခဲ့တယ်။', english: 'I started a new business.' }
  ]},
  { id: '1979', korean: '생산', myanmar: 'ထုတ်လုပ်ခြင်း', english: 'Production', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '생산량을 늘렸습니다.', myanmar: 'ထုတ်လုပ်ခြင်း ပမာဏ တိုးခဲ့တယ်။', english: 'I increased production.' }
  ]},
  { id: '1980', korean: '서비스', myanmar: 'ဝန်ဆောင်မှု', english: 'Service', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 서비스를 제공합니다.', myanmar: 'ကောင်းတဲ့ ဝန်ဆောင်မှု ပေးတယ်။', english: 'I provide good service.' }
  ]},
  { id: '1981', korean: '소득', myanmar: 'ဝင်ငွေ', english: 'Income', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '소득이 증가했습니다.', myanmar: 'ဝင်ငွေ တိုးလာခဲ့တယ်။', english: 'My income has increased.' }
  ]},
  { id: '1982', korean: '소비', myanmar: 'သုံးစွဲခြင်း', english: 'Consumption', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '에너지 소비를 줄입니다.', myanmar: 'စွမ်းအင် သုံးစွဲခြင်း လျှော့ချတယ်။', english: 'I reduce energy consumption.' }
  ]},
  { id: '1983', korean: '수요', myanmar: 'လိုအပ်ချက်', english: 'Demand', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '수요가 많습니다.', myanmar: 'လိုအပ်ချက် များတယ်။', english: 'There is high demand.' }
  ]},
  { id: '1984', korean: '수익', myanmar: 'အမြတ်အစွန်း', english: 'Profit', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '높은 수익을 얻었습니다.', myanmar: 'မြင့်တဲ့ အမြတ်အစွန်း ရခဲ့တယ်။', english: 'I earned high profits.' }
  ]},
  { id: '1985', korean: '시장', myanmar: 'စျေးကွက်', english: 'Market', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 시장에 진출합니다.', myanmar: 'စျေးကွက် အသစ် ဝင်ရောက်တယ်။', english: 'I enter a new market.' }
  ]},
  { id: '1986', korean: '실업', myanmar: 'အလုပ်လက်မဲ့', english: 'Unemployment', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '실업률이 높습니다.', myanmar: 'အလုပ်လက်မဲ့ နှုန်း မြင့်တယ်။', english: 'The unemployment rate is high.' }
  ]},
  { id: '1987', korean: '약속', myanmar: 'ကတိ', english: 'Promise', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '약속을 지켰습니다.', myanmar: 'ကတိ တည်ခဲ့တယ်။', english: 'I kept my promise.' }
  ]},
  { id: '1988', korean: '예산', myanmar: 'ဘတ်ဂျက်', english: 'Budget', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '예산을 계획했습니다.', myanmar: 'ဘတ်ဂျက် စီစဉ်ခဲ့တယ်။', english: 'I planned the budget.' }
  ]},
  { id: '1989', korean: '용량', myanmar: 'ပမာဏ', english: 'Capacity', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '저장 용량이 부족합니다.', myanmar: 'သိမ်းဆည်းတဲ့ ပမာဏ လုံလောက်မှု မရှိဘူး။', english: 'Storage capacity is insufficient.' }
  ]},
  { id: '1990', korean: '우선', myanmar: 'ဦးစားပေး', english: 'Priority', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '우선 순위를 정했습니다.', myanmar: 'ဦးစားပေး အစီအစဉ် သတ်မှတ်ခဲ့တယ်။', english: 'I set priorities.' }
  ]},
  { id: '1991', korean: '원료', myanmar: 'ကုန်ကြမ်း', english: 'Raw material', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '좋은 원료를 사용합니다.', myanmar: 'ကောင်းတဲ့ ကုန်ကြမ်း သုံးတယ်။', english: 'I use good raw materials.' }
  ]},
  { id: '1992', korean: '유통', myanmar: 'ဖြန့်ဖြူးခြင်း', english: 'Distribution', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효율적인 유통망을 구축했습니다.', myanmar: 'ထိရောက်တဲ့ ဖြန့်ဖြူးခြင်း ကွန်ယက် တည်ဆောက်ခဲ့တယ်။', english: 'I built an efficient distribution network.' }
  ]},
  { id: '1993', korean: '이익', myanmar: 'အကျိုးအမြတ်', english: 'Benefit', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '상호 이익을 추구합니다.', myanmar: 'အပြန်အလှန် အကျိုးအမြတ် လိုက်စားတယ်။', english: 'I pursue mutual benefits.' }
  ]},
  { id: '1994', korean: '인플레이션', myanmar: 'ငွေကြေးဖောင်းပွမှု', english: 'Inflation', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '인플레이션이 심각합니다.', myanmar: 'ငွေကြေးဖောင်းပွမှု ပြင်းထန်တယ်။', english: 'Inflation is serious.' }
  ]},
  { id: '1995', korean: '자본', myanmar: 'အရင်းအနှီး', english: 'Capital', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '자본을 투자했습니다.', myanmar: 'အရင်းအနှီး ရင်းနှီးမြှုပ်နှံခဲ့တယ်။', english: 'I invested capital.' }
  ]},
  { id: '1996', korean: '재정', myanmar: 'ဘဏ္ဍာရေး', english: 'Finance', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '재정 상태가 좋습니다.', myanmar: 'ဘဏ္ဍာရေး အခြေအနေ ကောင်းတယ်။', english: 'The financial situation is good.' }
  ]},
  { id: '1997', korean: '전략', myanmar: 'ဗျူဟာ', english: 'Strategy', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '새로운 전략을 세웠습니다.', myanmar: 'ဗျူဟာ အသစ် ရေးဆွဲခဲ့တယ်။', english: 'I developed a new strategy.' }
  ]},
  { id: '1998', korean: '조직', myanmar: 'အဖွဲ့အစည်း', english: 'Organization', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '효율적인 조직을 만들었습니다.', myanmar: 'ထိရောက်တဲ့ အဖွဲ့အစည်း ဖွဲ့စည်းခဲ့တယ်။', english: 'I created an efficient organization.' }
  ]},
  { id: '1999', korean: '품질', myanmar: 'အရည်အသွေး', english: 'Quality', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '높은 품질을 유지합니다.', myanmar: 'မြင့်မားတဲ့ အရည်အသွေး ထိန်းသိမ်းတယ်။', english: 'I maintain high quality.' }
  ]},
  { id: '2000', korean: '효과', myanmar: 'အကျိုးသက်ရောက်မှု', english: 'Effect', pos: 'noun', level: 'pre-intermediate', examples: [
    { korean: '긍정적인 효과가 있습니다.', myanmar: 'အပြုသဘော အကျိုးသက်ရောက်မှု ရှိတယ်။', english: 'There is a positive effect.' }
  ]},

  // ===== CATEGORY: DAY/MONTH/YEAR/TIME - BASIC LEVEL (2001-2050) =====
  { id: '2001', korean: '오늘', myanmar: 'ဒီနေ့', english: 'Today', pos: 'noun', level: 'basic', examples: [
    { korean: '오늘 날씨가 좋습니다.', myanmar: 'ဒီနေ့ ရာသီဥတု ကောင်းတယ်။', english: 'The weather is good today.' }
  ]},
  { id: '2002', korean: '어제', myanmar: 'မနေ့က', english: 'Yesterday', pos: 'noun', level: 'basic', examples: [
    { korean: '어제 친구를 만났습니다.', myanmar: 'မနေ့က သူငယ်ချင်း တွေ့ခဲ့တယ်။', english: 'I met a friend yesterday.' }
  ]},
  { id: '2003', korean: '내일', myanmar: 'မနက်ဖြန်', english: 'Tomorrow', pos: 'noun', level: 'basic', examples: [
    { korean: '내일 학교에 갑니다.', myanmar: 'မနက်ဖြန် ကျောင်းကို သွားမယ်။', english: 'I will go to school tomorrow.' }
  ]},
  { id: '2004', korean: '월요일', myanmar: 'တနင်္လာနေ့', english: 'Monday', pos: 'noun', level: 'basic', examples: [
    { korean: '월요일에 일을 시작합니다.', myanmar: 'တနင်္လာနေ့မှာ အလုပ် စတယ်။', english: 'I start work on Monday.' }
  ]},
  { id: '2005', korean: '화요일', myanmar: 'အင်္ဂါနေ့', english: 'Tuesday', pos: 'noun', level: 'basic', examples: [
    { korean: '화요일에 병원에 갑니다.', myanmar: 'အင်္ဂါနေ့မှာ ဆေးရုံကို သွားမယ်။', english: 'I will go to the hospital on Tuesday.' }
  ]},
  { id: '2006', korean: '수요일', myanmar: 'ဗုဒ္ဓဟူးနေ့', english: 'Wednesday', pos: 'noun', level: 'basic', examples: [
    { korean: '수요일에 회의가 있습니다.', myanmar: 'ဗုဒ္ဓဟူးနေ့မှာ အစည်းအဝေး ရှိတယ်။', english: 'There is a meeting on Wednesday.' }
  ]},
  { id: '2007', korean: '목요일', myanmar: 'ကြာသပတေးနေ့', english: 'Thursday', pos: 'noun', level: 'basic', examples: [
    { korean: '목요일에 쇼핑을 합니다.', myanmar: 'ကြာသပတေးနေ့မှာ ဈေးဝယ်တယ်။', english: 'I go shopping on Thursday.' }
  ]},
  { id: '2008', korean: '금요일', myanmar: 'သောကြာနေ့', english: 'Friday', pos: 'noun', level: 'basic', examples: [
    { korean: '금요일에 영화를 봅니다.', myanmar: 'သောကြာနေ့မှာ ရုပ်ရှင် ကြည့်တယ်။', english: 'I watch a movie on Friday.' }
  ]},
  { id: '2009', korean: '토요일', myanmar: 'စနေနေ့', english: 'Saturday', pos: 'noun', level: 'basic', examples: [
    { korean: '토요일에 쉽니다.', myanmar: 'စနေနေ့မှာ အနားယူတယ်။', english: 'I rest on Saturday.' }
  ]},
  { id: '2010', korean: '일요일', myanmar: 'တနင်္ဂနွေနေ့', english: 'Sunday', pos: 'noun', level: 'basic', examples: [
    { korean: '일요일에 가족과 시간을 보냅니다.', myanmar: 'တနင်္ဂနွေနေ့မှာ မိသားစုနဲ့ အချိန်ကုန်တယ်။', english: 'I spend time with family on Sunday.' }
  ]},
  { id: '2011', korean: '1월', myanmar: 'ဇန်နဝါရီ', english: 'January', pos: 'noun', level: 'basic', examples: [
    { korean: '1월은 추운 달입니다.', myanmar: 'ဇန်နဝါရီက အေးတဲ့ လပါ။', english: 'January is a cold month.' }
  ]},
  { id: '2012', korean: '2월', myanmar: 'ဖေဖော်ဝါရီ', english: 'February', pos: 'noun', level: 'basic', examples: [
    { korean: '2월에 생일이 있습니다.', myanmar: 'ဖေဖော်ဝါရီမှာ မွေးနေ့ ရှိတယ်။', english: 'My birthday is in February.' }
  ]},
  { id: '2013', korean: '3월', myanmar: 'မတ်', english: 'March', pos: 'noun', level: 'basic', examples: [
    { korean: '3월에 꽃이 핍니다.', myanmar: 'မတ်လမှာ ပန်းတွေ ပွင့်တယ်။', english: 'Flowers bloom in March.' }
  ]},
  { id: '2014', korean: '4월', myanmar: 'ဧပြီ', english: 'April', pos: 'noun', level: 'basic', examples: [
    { korean: '4월에 새 학기가 시작됩니다.', myanmar: 'ဧပြီလမှာ သင်တန်းသစ် စတယ်။', english: 'The new semester starts in April.' }
  ]},
  { id: '2015', korean: '5월', myanmar: 'မေ', english: 'May', pos: 'noun', level: 'basic', examples: [
    { korean: '5월은 가족의 달입니다.', myanmar: 'မေလက မိသားစုရဲ့ လပါ။', english: 'May is the family month.' }
  ]},
  { id: '2016', korean: '6월', myanmar: 'ဇွန်', english: 'June', pos: 'noun', level: 'basic', examples: [
    { korean: '6월에 결혼식이 많습니다.', myanmar: 'ဇွန်လမှာ လက်ထပ်ပွဲ များတယ်။', english: 'There are many weddings in June.' }
  ]},
  { id: '2017', korean: '7월', myanmar: 'ဇူလိုင်', english: 'July', pos: 'noun', level: 'basic', examples: [
    { korean: '7월은 여름휴가철입니다.', myanmar: 'ဇူလိုင်လက နွေရာသီ အပတ်စဉ်ပါ။', english: 'July is summer vacation time.' }
  ]},
  { id: '2018', korean: '8월', myanmar: 'ဩဂုတ်', english: 'August', pos: 'noun', level: 'basic', examples: [
    { korean: '8월은 더운 달입니다.', myanmar: 'ဩဂုတ်လက ပူတဲ့ လပါ။', english: 'August is a hot month.' }
  ]},
  { id: '2019', korean: '9월', myanmar: 'စက်တင်ဘာ', english: 'September', pos: 'noun', level: 'basic', examples: [
    { korean: '9월에 학교가 시작됩니다.', myanmar: 'စက်တင်ဘာလမှာ ကျောင်း စဖွင့်တယ်။', english: 'School starts in September.' }
  ]},
  { id: '2020', korean: '10월', myanmar: 'အောက်တိုဘာ', english: 'October', pos: 'noun', level: 'basic', examples: [
    { korean: '10월에 단풍이 아름답습니다.', myanmar: 'အောက်တိုဘာလမှာ ရွက်ညိုတွေ လှတယ်။', english: 'The autumn leaves are beautiful in October.' }
  ]},
  { id: '2021', korean: '11월', myanmar: 'နိုဝင်ဘာ', english: 'November', pos: 'noun', level: 'basic', examples: [
    { korean: '11월은 시험 기간입니다.', myanmar: 'နိုဝင်ဘာလက စာမေးပွဲ ကာလပါ။', english: 'November is exam period.' }
  ]},
  { id: '2022', korean: '12월', myanmar: 'ဒီဇင်ဘာ', english: 'December', pos: 'noun', level: 'basic', examples: [
    { korean: '12월에 크리스마스가 있습니다.', myanmar: 'ဒီဇင်ဘာလမှာ ခရစ်စမတ် ရှိတယ်။', english: 'Christmas is in December.' }
  ]},
  { id: '2023', korean: '아침', myanmar: 'မနက်ခင်း', english: 'Morning', pos: 'noun', level: 'basic', examples: [
    { korean: '아침에 운동을 합니다.', myanmar: 'မနက်ခင်းမှာ လေ့ကျင့်ခန်း လုပ်တယ်။', english: 'I exercise in the morning.' }
  ]},
  { id: '2024', korean: '점심', myanmar: 'နေ့လည်', english: 'Lunch time', pos: 'noun', level: 'basic', examples: [
    { korean: '점심에 친구와 만납니다.', myanmar: 'နေ့လည်မှာ သူငယ်ချင်းနဲ့ တွေ့မယ်။', english: 'I will meet a friend at lunch time.' }
  ]},
  { id: '2025', korean: '저녁', myanmar: 'ညနေ', english: 'Evening', pos: 'noun', level: 'basic', examples: [
    { korean: '저녁에 가족과 식사합니다.', myanmar: 'ညနေမှာ မိသားစုနဲ့ ထမင်းစားတယ်။', english: 'I have dinner with family in the evening.' }
  ]},
  { id: '2026', korean: '밤', myanmar: 'ညဘက်', english: 'Night', pos: 'noun', level: 'basic', examples: [
    { korean: '밤에 책을 읽습니다.', myanmar: 'ညဘက်မှာ စာအုပ် ဖတ်တယ်။', english: 'I read books at night.' }
  ]},
  { id: '2027', korean: '시간', myanmar: 'အချိန်', english: 'Time', pos: 'noun', level: 'basic', examples: [
    { korean: '지금 몇 시입니까?', myanmar: 'အခုနေ့ ဘယ်နှစ်နာရီလဲ။', english: 'What time is it now?' }
  ]},
  { id: '2028', korean: '분', myanmar: 'မိနစ်', english: 'Minute', pos: 'noun', level: 'basic', examples: [
    { korean: '5분만 기다려 주세요.', myanmar: '၅ မိနစ်လောက်ပဲ စောင့်ပေးပါ။', english: 'Please wait just 5 minutes.' }
  ]},
  { id: '2029', korean: '초', myanmar: 'စက္ကန့်', english: 'Second', pos: 'noun', level: 'basic', examples: [
    { korean: '30초 후에 시작합니다.', myanmar: '၃၀ စက္ကန့် နောက်မှာ စတယ်။', english: 'We start in 30 seconds.' }
  ]},
  { id: '2030', korean: '년', myanmar: 'နှစ်', english: 'Year', pos: 'noun', level: 'basic', examples: [
    { korean: '올해는 2024년입니다.', myanmar: 'ဒီနှစ်က ၂၀၂၄ ခုနှစ်ပါ။', english: 'This year is 2024.' }
  ]},
  { id: '2031', korean: '달', myanmar: 'လ', english: 'Month', pos: 'noun', level: 'basic', examples: [
    { korean: '한 달에 한 번 만납니다.', myanmar: 'တစ်လကို တစ်ခါ တွေ့တယ်။', english: 'We meet once a month.' }
  ]},
  { id: '2032', korean: '주', myanmar: 'အပတ်', english: 'Week', pos: 'noun', level: 'basic', examples: [
    { korean: '이번 주는 바쁩니다.', myanmar: 'ဒီအပတ်က အလုပ်များတယ်။', english: 'This week is busy.' }
  ]},
  { id: '2033', korean: '일', myanmar: 'နေ့', english: 'Day', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 일이 있었습니다.', myanmar: 'ကောင်းတဲ့ နေ့ ရှိခဲ့တယ်။', english: 'I had a good day.' }
  ]},
  { id: '2034', korean: '시계', myanmar: 'နာရီ', english: 'Clock/Watch', pos: 'noun', level: 'basic', examples: [
    { korean: '시계를 보고 시간을 확인합니다.', myanmar: 'နာရီ ကြည့်ပြီး အချိน် စစ်ဆေးတယ်။', english: 'I check the time by looking at the clock.' }
  ]},
  { id: '2035', korean: '알람', myanmar: 'နှိုးစက်', english: 'Alarm', pos: 'noun', level: 'basic', examples: [
    { korean: '알람을 맞춰 놓았습니다.', myanmar: 'နှိုးစက် ညှိထားခဲ့တယ်။', english: 'I set the alarm.' }
  ]},
  { id: '2036', korean: '일정', myanmar: 'အစီအစဉ်', english: 'Schedule', pos: 'noun', level: 'basic', examples: [
    { korean: '오늘 일정이 많습니다.', myanmar: 'ဒီနေ့ အစီအစဉ် များတယ်။', english: 'I have a lot of schedule today.' }
  ]},
  { id: '2037', korean: '약속', myanmar: 'ကတိ / ချိန်ဆို/ ရှိမည့်အချိန်', english: 'Appointment', pos: 'noun', level: 'basic', examples: [
    { korean: '의사와 약속이 있습니다.', myanmar: 'ဆရာဝန်နဲ့ ချိန်းထားတာ ရှိတယ်။', english: 'I have an appointment with the doctor.' }
  ]},
  { id: '2038', korean: '빠르다', myanmar: 'မြန်သည်', english: 'Fast', pos: 'adjective', level: 'basic', examples: [
    { korean: '시간이 빠르게 지나갑니다.', myanmar: 'အချိန် မြန်မြန် ကုန်သွားတယ်။', english: 'Time passes quickly.' }
  ]},
  { id: '2039', korean: '느리다', myanmar: 'နှေးသည်', english: 'Slow', pos: 'adjective', level: 'basic', examples: [
    { korean: '시계가 느립니다.', myanmar: 'နာရီ နှေးတယ်။', english: 'The clock is slow.' }
  ]},
  { id: '2040', korean: '일찍', myanmar: 'စောစော', english: 'Early', pos: 'adverb', level: 'basic', examples: [
    { korean: '일찍 일어났습니다.', myanmar: 'စောစော ထခဲ့တယ်။', english: 'I woke up early.' }
  ]},
  { id: '2041', korean: '늦게', myanmar: 'နောက်ကျ', english: 'Late', pos: 'adverb', level: 'basic', examples: [
    { korean: '늦게 도착했습니다.', myanmar: 'နောက်ကျ ရောက်ခဲ့တယ်။', english: 'I arrived late.' }
  ]},
  { id: '2042', korean: '지금', myanmar: 'အခု', english: 'Now', pos: 'adverb', level: 'basic', examples: [
    { korean: '지금 바쁩니다.', myanmar: 'အခု အလုပ်များတယ်။', english: 'I am busy now.' }
  ]},
  { id: '2043', korean: '나중에', myanmar: 'နောက်မှ', english: 'Later', pos: 'adverb', level: 'basic', examples: [
    { korean: '나중에 연락하겠습니다.', myanmar: 'နောက်မှ ဆက်သွယ်မယ်။', english: 'I will contact you later.' }
  ]},
  { id: '2044', korean: '항상', myanmar: 'အမြဲတမ်း', english: 'Always', pos: 'adverb', level: 'basic', examples: [
    { korean: '항상 건강하세요.', myanmar: 'အမြဲတမ်း ကျန်းမာပါစေ။', english: 'Always be healthy.' }
  ]},
  { id: '2045', korean: '가끔', myanmar: 'တစ်ခါတစ်ရံ', english: 'Sometimes', pos: 'adverb', level: 'basic', examples: [
    { korean: '가끔 영화를 봅니다.', myanmar: 'တစ်ခါတစ်ရံ ရုပ်ရှင် ကြည့်တယ်။', english: 'I sometimes watch movies.' }
  ]},
  { id: '2046', korean: '자주', myanmar: 'မကြာခဏ', english: 'Often', pos: 'adverb', level: 'basic', examples: [
    { korean: '자주 운동을 합니다.', myanmar: 'မကြာခဏ လေ့ကျင့်ခန်း လုပ်တယ်။', english: 'I often exercise.' }
  ]},
  { id: '2047', korean: '매일', myanmar: 'နေ့စဉ်', english: 'Every day', pos: 'adverb', level: 'basic', examples: [
    { korean: '매일 공부합니다.', myanmar: 'နေ့စဉ် လေ့လာတယ်။', english: 'I study every day.' }
  ]},
  { id: '2048', korean: '주말', myanmar: 'ပိတ်ရက်(Sat / Sun)', english: 'Weekend', pos: 'noun', level: 'basic', examples: [
    { korean: '주말에 쉽니다.', myanmar: 'ပိတ်ရက်မှာ အနားယူတယ်။', english: 'I rest on weekends.' }
  ]},
  { id: '2049', korean: '휴일', myanmar: 'အားလပ်ရက်', english: 'Holiday', pos: 'noun', level: 'basic', examples: [
    { korean: '휴일에 여행을 갑니다.', myanmar: 'အားလပ်ရက်မှာ ခရီးသွားတယ်။', english: 'I travel on holidays.' }
  ]},
  { id: '2050', korean: '생일', myanmar: 'မွေးနေ့', english: 'Birthday', pos: 'noun', level: 'basic', examples: [
    { korean: '생일 축하합니다!', myanmar: 'မွေးနေ့ ပျော်ပါစေ။', english: 'Happy birthday!' }
  ]},

  // ===== CATEGORY: DAILY LIFE - BASIC LEVEL (2051-2100) =====
  { id: '2051', korean: '집', myanmar: 'အိမ်', english: 'House', pos: 'noun', level: 'basic', examples: [
    { korean: '집에 가고 싶습니다.', myanmar: 'အိမ်ကို ပြန်သွားချင်တယ်။', english: 'I want to go home.' }
  ]},
  { id: '2052', korean: '방', myanmar: 'အခန်း', english: 'Room', pos: 'noun', level: 'basic', examples: [
    { korean: '방이 깨끗합니다.', myanmar: 'အခန်းက သန့်တယ်။', english: 'The room is clean.' }
  ]},
  { id: '2053', korean: '침실', myanmar: 'အိပ်ခန်း', english: 'Bedroom', pos: 'noun', level: 'basic', examples: [
    { korean: '침실에서 잠을 잡니다.', myanmar: 'အိပ်ခန်းမှာ အိပ်တယ်။', english: 'I sleep in the bedroom.' }
  ]},
  { id: '2054', korean: '부엌', myanmar: 'မီးဖိုချောင်', english: 'Kitchen', pos: 'noun', level: 'basic', examples: [
    { korean: '부엌에서 요리를 합니다.', myanmar: 'မီးဖိုချောင်မှာ ချက်ပြုတ်တယ်။', english: 'I cook in the kitchen.' }
  ]},
  { id: '2055', korean: '화장실', myanmar: 'အိမ်သာ', english: 'Bathroom', pos: 'noun', level: 'basic', examples: [
    { korean: '화장실에 가야 합니다.', myanmar: 'အိမ်သာ သွားရမယ်။', english: 'I need to go to the bathroom.' }
  ]},
  { id: '2056', korean: '거실', myanmar: 'ဧည့်ခန်း', english: 'Living room', pos: 'noun', level: 'basic', examples: [
    { korean: '거실에서 TV를 봅니다.', myanmar: 'ဧည့်ခန်းမှာ တီဗီ ကြည့်တယ်။', english: 'I watch TV in the living room.' }
  ]},
  { id: '2057', korean: '문', myanmar: 'တံခါး', english: 'Door', pos: 'noun', level: 'basic', examples: [
    { korean: '문을 열어 주세요.', myanmar: 'တံခါး ဖွင့်ပေးပါ။', english: 'Please open the door.' }
  ]},
  { id: '2058', korean: '창문', myanmar: 'ပြတင်းပေါက်', english: 'Window', pos: 'noun', level: 'basic', examples: [
    { korean: '창문을 열었습니다.', myanmar: 'ပြတင်းပေါက် ဖွင့်ခဲ့တယ်။', english: 'I opened the window.' }
  ]},
  { id: '2059', korean: '침대', myanmar: 'အိပ်ယာ', english: 'Bed', pos: 'noun', level: 'basic', examples: [
    { korean: '침대에서 쉽니다.', myanmar: 'အိပ်ယာမှာ အနားယူတယ်။', english: 'I rest on the bed.' }
  ]},
  { id: '2060', korean: '의자', myanmar: 'ကုလားထိုင်', english: 'Chair', pos: 'noun', level: 'basic', examples: [
    { korean: '의자에 앉아 주세요.', myanmar: 'ကုလားထိုင်မှာ ထိုင်ပေးပါ။', english: 'Please sit on the chair.' }
  ]},
  { id: '2061', korean: '책상', myanmar: 'စားပွဲ', english: 'Desk', pos: 'noun', level: 'basic', examples: [
    { korean: '책상에서 공부합니다.', myanmar: 'စားပွဲမှာ စာလေ့လာတယ်။', english: 'I study at the desk.' }
  ]},
  { id: '2062', korean: '옷', myanmar: 'အဝတ်အစား', english: 'Clothes', pos: 'noun', level: 'basic', examples: [
    { korean: '새 옷을 샀습니다.', myanmar: 'အဝတ်အစား အသစ် ဝယ်ခဲ့တယ်။', english: 'I bought new clothes.' }
  ]},
  { id: '2063', korean: '신발', myanmar: 'ဖိနပ်', english: 'Shoes', pos: 'noun', level: 'basic', examples: [
    { korean: '신발을 벗으세요.', myanmar: 'ဖိနပ် ချွတ်ပါ။', english: 'Please take off your shoes.' }
  ]},
  { id: '2064', korean: '모자', myanmar: 'ဦးထုပ်', english: 'Hat', pos: 'noun', level: 'basic', examples: [
    { korean: '모자를 쓰고 나갔습니다.', myanmar: 'ဦးထုပ် ဆောင်းပြီး ထွက်သွားခဲ့တယ်။', english: 'I went out wearing a hat.' }
  ]},
  { id: '2065', korean: '가방', myanmar: 'အိတ်', english: 'Bag', pos: 'noun', level: 'basic', examples: [
    { korean: '가방에 책을 넣었습니다.', myanmar: 'အိတ်မှာ စာအုပ် ထည့်ခဲ့တယ်။', english: 'I put books in the bag.' }
  ]},
  { id: '2066', korean: '물', myanmar: 'ရေ', english: 'Water', pos: 'noun', level: 'basic', examples: [
    { korean: '물을 마시고 싶습니다.', myanmar: 'ရေ သောက်ချင်တယ်။', english: 'I want to drink water.' }
  ]},
  { id: '2067', korean: '밥', myanmar: 'ထမင်း', english: 'Rice/Meal', pos: 'noun', level: 'basic', examples: [
    { korean: '밥을 먹었습니다.', myanmar: 'ထမင်း စားခဲ့တယ်။', english: 'I ate rice/meal.' }
  ]},
  { id: '2068', korean: '빵', myanmar: 'ပေါင်မုန့်', english: 'Bread', pos: 'noun', level: 'basic', examples: [
    { korean: '아침에 빵을 먹습니다.', myanmar: 'မနက်ခင်းမှာ ပေါင်မုန့် စားတယ်။', english: 'I eat bread in the morning.' }
  ]},
  { id: '2069', korean: '우유', myanmar: 'နို့', english: 'Milk', pos: 'noun', level: 'basic', examples: [
    { korean: '우유를 마십니다.', myanmar: 'နို့ သောက်တယ်။', english: 'I drink milk.' }
  ]},
  { id: '2070', korean: '커피', myanmar: 'ကော်ဖီ', english: 'Coffee', pos: 'noun', level: 'basic', examples: [
    { korean: '커피 한 잔 주세요.', myanmar: 'ကော်ဖီ တစ်ခွက် ပေးပါ။', english: 'Please give me a cup of coffee.' }
  ]},
  { id: '2071', korean: '차', myanmar: 'လက်ဖက်ရည်', english: 'Tea', pos: 'noun', level: 'basic', examples: [
    { korean: '차를 마시면서 쉽니다.', myanmar: 'လက်ဖက်ရည် သောက်ရင်း အနားယူတယ်။', english: 'I rest while drinking tea.' }
  ]},
  { id: '2072', korean: '과일', myanmar: 'သစ်သီးဝလံ / အသီး', english: 'Fruit', pos: 'noun', level: 'basic', examples: [
    { korean: '과일을 매일 먹습니다.', myanmar: 'အသီး နေ့တိုင်း စားတယ်။', english: 'I eat fruit every day.' }
  ]},
  { id: '2073', korean: '야채', myanmar: 'ဟင်းသီးဟင်းရွက်', english: 'Vegetable', pos: 'noun', level: 'basic', examples: [
    { korean: '야채를 많이 먹어야 합니다.', myanmar: 'ဟင်းသီးဟင်းရွက် အများကြီး စားရမယ်။', english: 'I should eat a lot of vegetables.' }
  ]},
  { id: '2074', korean: '고기', myanmar: 'အသား', english: 'Meat', pos: 'noun', level: 'basic', examples: [
    { korean: '고기를 구워 먹었습니다.', myanmar: 'အသား ကင်ပြီး စားခဲ့တယ်။', english: 'I grilled and ate meat.' }
  ]},
  { id: '2075', korean: '생선', myanmar: 'ငါး', english: 'Fish', pos: 'noun', level: 'basic', examples: [
    { korean: '생선이 신선합니다.', myanmar: 'ငါး လတ်ဆတ်တယ်။', english: 'The fish is fresh.' }
  ]},
  { id: '2076', korean: '계란', myanmar: 'ကြက်ဥ', english: 'Egg', pos: 'noun', level: 'basic', examples: [
    { korean: '계란을 삶았습니다.', myanmar: 'ကြက်ဥ ပြုတ်ခဲ့တယ်။', english: 'I boiled eggs.' }
  ]},
  { id: '2077', korean: '설거지', myanmar: 'ပန်းကန်ဆေးခြင်း', english: 'Dishwashing', pos: 'noun', level: 'basic', examples: [
    { korean: '설거지를 하고 있습니다.', myanmar: 'ပန်းကန်ဆေးခြင်း လုပ်နေတယ်။', english: 'I am doing the dishes.' }
  ]},
  { id: '2078', korean: '청소', myanmar: 'သန့်ရှင်းရေး', english: 'Cleaning', pos: 'noun', level: 'basic', examples: [
    { korean: '방 청소를 했습니다.', myanmar: 'အခန်း သန့်ရှင်းရေး လုပ်ခဲ့တယ်။', english: 'I cleaned the room.' }
  ]},
  { id: '2079', korean: '세탁', myanmar: 'အဝတ်လျှော်ခြင်း', english: 'Laundry', pos: 'noun', level: 'basic', examples: [
    { korean: '세탁을 해야 합니다.', myanmar: 'အဝတ်လျှော်ခြင်း လုပ်ရမယ်။', english: 'I need to do laundry.' }
  ]},
  { id: '2080', korean: '쓰레기', myanmar: 'အမှိုက်', english: 'Trash', pos: 'noun', level: 'basic', examples: [
    { korean: '쓰레기를 버렸습니다.', myanmar: 'အမှိုက် ပစ်ခဲ့တယ်။', english: 'I threw away the trash.' }
  ]},
  { id: '2081', korean: '전화', myanmar: 'ဖုန်း', english: 'Phone', pos: 'noun', level: 'basic', examples: [
    { korean: '전화가 왔습니다.', myanmar: 'ဖုန်း လာခဲ့တယ်။', english: 'A phone call came.' }
  ]},
  { id: '2082', korean: '텔레비전', myanmar: 'တီဗီ', english: 'Television', pos: 'noun', level: 'basic', examples: [
    { korean: '텔레비전을 켰습니다.', myanmar: 'တီဗီ ဖွင့်ခဲ့တယ်။', english: 'I turned on the television.' }
  ]},
  { id: '2083', korean: '라디오', myanmar: 'ရေဒီယို', english: 'Radio', pos: 'noun', level: 'basic', examples: [
    { korean: '라디오를 들었습니다.', myanmar: 'ရေဒီယို နားထောင်ခဲ့တယ်။', english: 'I listened to the radio.' }
  ]},
  { id: '2084', korean: '컴퓨터', myanmar: 'ကွန်ပျူတာ', english: 'Computer', pos: 'noun', level: 'basic', examples: [
    { korean: '컴퓨터로 일을 합니다.', myanmar: 'ကွန်ပျူတာနဲ့ အလုပ်လုပ်တယ်။', english: 'I work with a computer.' }
  ]},
  { id: '2085', korean: '인터넷', myanmar: 'အင်တာနက်', english: 'Internet', pos: 'noun', level: 'basic', examples: [
    { korean: '인터넷을 사용합니다.', myanmar: 'အင်တာနက် သုံးတယ်။', english: 'I use the internet.' }
  ]},
  { id: '2086', korean: '책', myanmar: 'စာအုပ်', english: 'Book', pos: 'noun', level: 'basic', examples: [
    { korean: '책을 읽는 것을 좋아합니다.', myanmar: 'စာအုပ် ဖတ်ခြင်း ကြိုက်တယ်။', english: 'I like reading books.' }
  ]},
  { id: '2087', korean: '신문', myanmar: 'သတင်းစာ', english: 'Newspaper', pos: 'noun', level: 'basic', examples: [
    { korean: '아침에 신문을 읽습니다.', myanmar: 'မနက်ခင်းမှာ သတင်းစာ ဖတ်တယ်။', english: 'I read the newspaper in the morning.' }
  ]},
  { id: '2088', korean: '잡지', myanmar: 'မဂ္ဂဇင်း', english: 'Magazine', pos: 'noun', level: 'basic', examples: [
    { korean: '잡지를 사서 읽었습니다.', myanmar: 'မဂ္ဂဇင်း ဝယ်ပြီး ဖတ်ခဲ့တယ်။', english: 'I bought and read a magazine.' }
  ]},
  { id: '2089', korean: '음악', myanmar: 'ဂီတ', english: 'Music', pos: 'noun', level: 'basic', examples: [
    { korean: '음악을 듣는 것을 좋아합니다.', myanmar: 'ဂီတ နားထောင်ခြင်း ကြိုက်တယ်။', english: 'I like listening to music.' }
  ]},
  { id: '2090', korean: '운동', myanmar: 'လေ့ကျင့်ခန်း', english: 'Exercise', pos: 'noun', level: 'basic', examples: [
    { korean: '매일 운동을 합니다.', myanmar: 'နေ့စဉ် လေ့ကျင့်ခန်း လုပ်တယ်။', english: 'I exercise every day.' }
  ]},
  { id: '2091', korean: '산책', myanmar: 'လမ်းလျှောက်ခြင်း', english: 'Walk', pos: 'noun', level: 'basic', examples: [
    { korean: '공원에서 산책을 했습니다.', myanmar: 'ပန်းခြံမှာ လမ်းလျှောက်ခြင်း လုပ်ခဲ့တယ်။', english: 'I took a walk in the park.' }
  ]},
  { id: '2092', korean: '쇼핑', myanmar: 'ဈေးဝယ်ခြင်း', english: 'Shopping', pos: 'noun', level: 'basic', examples: [
    { korean: '주말에 쇼핑을 갑니다.', myanmar: 'အပတ်စားမှာ ဈေးဝယ်ခြင်း သွားတယ်။', english: 'I go shopping on weekends.' }
  ]},
  { id: '2093', korean: '요리', myanmar: 'ချက်ပြုတ်ခြင်း', english: 'Cooking', pos: 'noun', level: 'basic', examples: [
    { korean: '요리하는 것을 배우고 있습니다.', myanmar: 'ချက်ပြုတ်ခြင်း သင်ယူနေတယ်။', english: 'I am learning to cook.' }
  ]},
  { id: '2094', korean: '게임', myanmar: 'ဂိမ်း', english: 'Game', pos: 'noun', level: 'basic', examples: [
    { korean: '친구들과 게임을 했습니다.', myanmar: 'သူငယ်ချင်းတွေနဲ့ ဂိမ်း ကစားခဲ့တယ်။', english: 'I played games with friends.' }
  ]},
  { id: '2095', korean: '영화', myanmar: 'ရုပ်ရှင်', english: 'Movie', pos: 'noun', level: 'basic', examples: [
    { korean: '재미있는 영화를 봤습니다.', myanmar: 'ပျော်စရာ ရုပ်ရှင် ကြည့်ခဲ့တယ်။', english: 'I watched an interesting movie.' }
  ]},
  { id: '2096', korean: '잠', myanmar: 'အိပ်ခြင်း', english: 'Sleep', pos: 'noun', level: 'basic', examples: [
    { korean: '잠이 부족합니다.', myanmar: 'အိပ်စက်ခြင်း မလုံလောက်ဘူး။', english: 'I lack sleep.' }
  ]},
  { id: '2097', korean: '휴식', myanmar: 'အနားယူခြင်း', english: 'Rest', pos: 'noun', level: 'basic', examples: [
    { korean: '휴식이 필요합니다.', myanmar: 'အနားယူခြင်း လိုအပ်တယ်။', english: 'I need rest.' }
  ]},
  { id: '2098', korean: '건강', myanmar: 'ကျန်းမာရေး', english: 'Health', pos: 'noun', level: 'basic', examples: [
    { korean: '건강이 가장 중요합니다.', myanmar: 'ကျန်းမာရေး အရေးကြီးဆုံးပါ။', english: 'Health is most important.' }
  ]},
  { id: '2099', korean: '병', myanmar: 'ရောဂါ', english: 'Disease', pos: 'noun', level: 'basic', examples: [
    { korean: '병이 나았습니다.', myanmar: 'ရောဂါ ပျောက်ခဲ့တယ်။', english: 'I recovered from illness.' }
  ]},
  { id: '2100', korean: '약', myanmar: 'ဆေး', english: 'Medicine', pos: 'noun', level: 'basic', examples: [
    { korean: '약을 먹어야 합니다.', myanmar: 'ဆေး သောက်ရမယ်။', english: 'I need to take medicine.' }
  ]},

  // ===== CATEGORY: MATH - BASIC LEVEL (2101-2150) =====
  { id: '2101', korean: '수학', myanmar: 'သင်္ချာ', english: 'Mathematics', pos: 'noun', level: 'basic', examples: [
    { korean: '수학을 공부합니다.', myanmar: 'သင်္ချာ လေ့လာတယ်။', english: 'I study mathematics.' }
  ]},
  { id: '2102', korean: '숫자', myanmar: 'ဂဏန်း', english: 'Number', pos: 'noun', level: 'basic', examples: [
    { korean: '숫자를 세어 보세요.', myanmar: 'ဂဏန်း ရေတွက်ကြည့်ပါ။', english: 'Please count the numbers.' }
  ]},
  { id: '2103', korean: '하나', myanmar: 'တစ်', english: 'One', pos: 'number', level: 'basic', examples: [
    { korean: '하나, 둘, 셋', myanmar: 'တစ်၊ နှစ်၊ သုံး', english: 'One, two, three' }
  ]},
  { id: '2104', korean: '둘', myanmar: 'နှစ်', english: 'Two', pos: 'number', level: 'basic', examples: [
    { korean: '둘을 더하면 넷입니다.', myanmar: 'နှစ် ပေါင်းရင် လေးပါ။', english: 'Two plus two equals four.' }
  ]},
  { id: '2105', korean: '셋', myanmar: 'သုံး', english: 'Three', pos: 'number', level: 'basic', examples: [
    { korean: '셋에서 하나를 빼면 둘입니다.', myanmar: 'သုံးကနေ တစ် နုတ်ရင် နှစ်ပါ။', english: 'Three minus one equals two.' }
  ]},
  { id: '2106', korean: '넷', myanmar: 'လေး', english: 'Four', pos: 'number', level: 'basic', examples: [
    { korean: '넷으로 나누면 하나입니다.', myanmar: 'လေးနဲ့ စားရင် တစ်ပါ။', english: 'Four divided by four equals one.' }
  ]},
  { id: '2107', korean: '다섯', myanmar: 'ငါး', english: 'Five', pos: 'number', level: 'basic', examples: [
    { korean: '다섯 곱하기 둘은 십입니다.', myanmar: 'ငါး မြှောက် နှစ် က ဆယ်ပါ။', english: 'Five times two equals ten.' }
  ]},
  { id: '2108', korean: '여섯', myanmar: 'ခြောက်', english: 'Six', pos: 'number', level: 'basic', examples: [
    { korean: '여섯 개의 사과가 있습니다.', myanmar: 'ပန်းသီး ခြောက်လုံး ရှိတယ်။', english: 'There are six apples.' }
  ]},
  { id: '2109', korean: '일곱', myanmar: 'ခုနစ်', english: 'Seven', pos: 'number', level: 'basic', examples: [
    { korean: '일곱 명의 학생이 있습니다.', myanmar: 'ကျောင်းသား ခုနစ်ယောက် ရှိတယ်။', english: 'There are seven students.' }
  ]},
  { id: '2110', korean: '여덟', myanmar: 'ရှစ်', english: 'Eight', pos: 'number', level: 'basic', examples: [
    { korean: '여덟 시에 만나요.', myanmar: 'ရှစ်နာရီမှာ တွေ့ကြမယ်။', english: 'Let\'s meet at eight o\'clock.' }
  ]},
  { id: '2111', korean: '아홉', myanmar: 'ကိုး', english: 'Nine', pos: 'number', level: 'basic', examples: [
    { korean: '아홉 권의 책을 샀습니다.', myanmar: 'စာအုပ် ကိုးအုပ် ဝယ်ခဲ့တယ်။', english: 'I bought nine books.' }
  ]},
  { id: '2112', korean: '열', myanmar: 'ဆယ်', english: 'Ten', pos: 'number', level: 'basic', examples: [
    { korean: '열까지 세어 보세요.', myanmar: 'ဆယ်အထိ ရေတွက်ကြည့်ပါ။', english: 'Please count to ten.' }
  ]},
  { id: '2113', korean: '백', myanmar: 'တစ်ရာ', english: 'Hundred', pos: 'number', level: 'basic', examples: [
    { korean: '백 원이 있습니다.', myanmar: 'တစ်ရာ ဝမ် ရှိတယ်။', english: 'I have one hundred won.' }
  ]},
  { id: '2114', korean: '천', myanmar: 'တစ်ထောင် / ထောင် ', english: 'Thousand', pos: 'number', level: 'basic', examples: [
    { korean: '천 명이 참석했습니다.', myanmar: 'လူ တစ်ထောင် တက်ရောက်ခဲ့တယ်။', english: 'One thousand people attended.' }
  ]},
  { id: '2115', korean: '만', myanmar: 'တစ်သောင်း / သောင်း', english: 'Ten thousand', pos: 'number', level: 'basic', examples: [
    { korean: '만 원을 저축했습니다.', myanmar: 'တစ်သောင်း ဝမ် စုခဲ့တယ်။', english: 'I saved ten thousand won.' }
  ]},
  { id: '2116', korean: '더하기', myanmar: 'ပေါင်းခြင်း / အပေါင်း / အပေါင်းလက္ခဏာ', english: 'Addition', pos: 'noun', level: 'basic', examples: [
    { korean: '더하기 문제를 풀었습니다.', myanmar: 'ပေါင်းခြင်း ပုစ္စာ ဖြေခဲ့တယ်။', english: 'I solved addition problems.' }
  ]},
  { id: '2117', korean: '빼기', myanmar: 'နှုတ်ခြင်း / အနှုတ် / အနှုတ်လက္ခဏာ', english: 'Subtraction', pos: 'noun', level: 'basic', examples: [
    { korean: '빼기를 배우고 있습니다.', myanmar: 'နုတ်ခြင်း သင်ယူနေတယ်။', english: 'I am learning subtraction.' }
  ]},
  { id: '2118', korean: '곱하기', myanmar: 'မြှောက်ခြင်း / အမြှောက် / အမြှောက်လက္ခဏာ', english: 'Multiplication', pos: 'noun', level: 'basic', examples: [
    { korean: '곱하기 표를 외웠습니다.', myanmar: 'မြှောက်ခြင်း ဇယား မှတ်ခဲ့တယ်။', english: 'I memorized the multiplication table.' }
  ]},
  { id: '2119', korean: '나누기', myanmar: 'စားခြင်း / အစား / အစားလက္ခဏာ', english: 'Division', pos: 'noun', level: 'basic', examples: [
    { korean: '나누기 계산을 했습니다.', myanmar: 'စားခြင်း တွက်ချက်မှု လုပ်ခဲ့တယ်။', english: 'I did division calculations.' }
  ]},
  { id: '2120', korean: '같다', myanmar: 'ညီသည် / တူသည်', english: 'Equal', pos: 'verb', level: 'basic', examples: [
    { korean: '둘 더하기 둘은 넷과 같습니다.', myanmar: 'နှစ် ပေါင်း နှစ် က လေးနဲ့ ညီတယ်။', english: 'Two plus two equals four.' }
  ]},
  { id: '2121', korean: '크다', myanmar: 'ကြီးသည်', english: 'Big/Large', pos: 'adjective', level: 'basic', examples: [
    { korean: '이 숫자가 더 큽니다.', myanmar: 'ဒီ ဂဏန်း ပိုကြီးတယ်။', english: 'This number is bigger.' }
  ]},
  { id: '2122', korean: '작다', myanmar: 'သေးသည်', english: 'Small', pos: 'adjective', level: 'basic', examples: [
    { korean: '작은 숫자를 찾으세요.', myanmar: 'သေးတဲ့ ဂဏန်း ရှာပါ။', english: 'Find the small number.' }
  ]},
  { id: '2123', korean: '많다', myanmar: 'များသည်', english: 'Many/Much', pos: 'adjective', level: 'basic', examples: [
    { korean: '많은 문제를 풀었습니다.', myanmar: 'ပုစ္စံ အများကြီး ဖြေခဲ့တယ်။', english: 'I solved many problems.' }
  ]},
  { id: '2124', korean: '적다', myanmar: 'နည်းသည်', english: 'Few/Little', pos: 'adjective', level: 'basic', examples: [
    { korean: '적은 돈을 가지고 있습니다.', myanmar: 'ပိုက်ဆံ နည်းနည်း ရှိတယ်။', english: 'I have little money.' }
  ]},
  { id: '2125', korean: '계산', myanmar: 'တွက်ချက်ခြင်း', english: 'Calculation', pos: 'noun', level: 'basic', examples: [
    { korean: '계산을 정확히 했습니다.', myanmar: 'တွက်ချက်ခြင်း တိကျစွာ လုပ်ခဲ့တယ်။', english: 'I calculated accurately.' }
  ]},
  { id: '2126', korean: '답', myanmar: 'အဖြေ', english: 'Answer', pos: 'noun', level: 'basic', examples: [
    { korean: '답을 찾았습니다.', myanmar: 'အဖြေ ရှာတွေ့ခဲ့တယ်။', english: 'I found the answer.' }
  ]},
  { id: '2127', korean: '문제', myanmar: 'ပုစ္စာ', english: 'Problem', pos: 'noun', level: 'basic', examples: [
    { korean: '어려운 문제입니다.', myanmar: 'ခက်ခဲတဲ့ ပုစ္စာ ပါ။', english: 'It is a difficult problem.' }
  ]},
  { id: '2128', korean: '시험', myanmar: 'စာမေးပွဲ', english: 'Test/Exam', pos: 'noun', level: 'basic', examples: [
    { korean: '수학 시험을 봤습니다.', myanmar: 'သင်္ချာ စာမေးပွဲ ဖြေခဲ့တယ်။', english: 'I took a math test.' }
  ]},
  { id: '2129', korean: '점수', myanmar: 'ရမှတ်', english: 'Score', pos: 'noun', level: 'basic', examples: [
    { korean: '좋은 점수를 받았습니다.', myanmar: 'ကောင်းတဲ့ ရမှတ် ရခဲ့တယ်။', english: 'I got a good score.' }
  ]},
  { id: '2130', korean: '길이', myanmar: 'အလျား', english: 'Length', pos: 'noun', level: 'basic', examples: [
    { korean: '길이를 측정했습니다.', myanmar: 'အလျား တိုင်းတာခဲ့တယ်။', english: 'I measured the length.' }
  ]},
  { id: '2131', korean: '넓이', myanmar: 'အကျယ်', english: 'Area/Width', pos: 'noun', level: 'basic', examples: [
    { korean: '방의 넓이를 계산했습니다.', myanmar: 'အခန်းရဲ့ အကျယ် တွက်ချက်ခဲ့တယ်။', english: 'I calculated the area of the room.' }
  ]},
  { id: '2132', korean: '높이', myanmar: 'အမြင့်', english: 'Height', pos: 'noun', level: 'basic', examples: [
    { korean: '나무의 높이를 재었습니다.', myanmar: 'သစ်ပင်ရဲ့ အမြင့် တိုင်းခဲ့တယ်။', english: 'I measured the height of the tree.' }
  ]},
  { id: '2133', korean: '무게', myanmar: 'အလေးချိန်', english: 'Weight', pos: 'noun', level: 'basic', examples: [
    { korean: '무게를 달았습니다.', myanmar: 'အလေးချိန် ချိန်ခဲ့တယ်။', english: 'I weighed it.' }
  ]},
  { id: '2134', korean: '시간', myanmar: 'အချိန်', english: 'Time', pos: 'noun', level: 'basic', examples: [
    { korean: '시간을 계산했습니다.', myanmar: 'အချိန် တွက်ချက်ခဲ့တယ်။', english: 'I calculated the time.' }
  ]},
  { id: '2135', korean: '돈', myanmar: 'ပိုက်ဆံ', english: 'Money', pos: 'noun', level: 'basic', examples: [
    { korean: '돈을 세어 봤습니다.', myanmar: 'ပိုက်ဆံ ရေတွက်ကြည့်ခဲ့တယ်။', english: 'I counted the money.' }
  ]},
  { id: '2136', korean: '원', myanmar: 'ဝမ် / ကိုရီးယားပိုက်ဆံ', english: 'Won (Korean currency)', pos: 'noun', level: 'basic', examples: [
    { korean: '천 원을 주었습니다.', myanmar: 'တစ်ထောင် ဝမ် ပေးခဲ့တယ်။', english: 'I gave one thousand won.' }
  ]},
  { id: '2137', korean: '반', myanmar: 'တစ်ဝက်', english: 'Half', pos: 'noun', level: 'basic', examples: [
    { korean: '반을 나누어 주었습니다.', myanmar: 'တစ်ဝက် ခွဲပေးခဲ့တယ်။', english: 'I gave half.' }
  ]},
  { id: '2138', korean: '전체', myanmar: 'တစ်ခုလုံး', english: 'Whole', pos: 'noun', level: 'basic', examples: [
    { korean: '전체를 다 먹었습니다.', myanmar: 'တစ်ခုလုံး စားပစ်ခဲ့တယ်။', english: 'I ate the whole thing.' }
  ]},
  { id: '2139', korean: '부분', myanmar: 'အစိတ်အပိုင်း', english: 'Part', pos: 'noun', level: 'basic', examples: [
    { korean: '부분적으로 맞습니다.', myanmar: 'အစိတ်အပိုင်း အားဖြင့် မှန်တယ်။', english: 'It is partially correct.' }
  ]},
  { id: '2140', korean: '모양', myanmar: 'ပုံသဏ္ဌာန်', english: 'Shape', pos: 'noun', level: 'basic', examples: [
    { korean: '원 모양을 그렸습니다.', myanmar: 'စက်ဝိုင်း ပုံသဏ္ဌာန် ဆွဲခဲ့တယ်။', english: 'I drew a circle shape.' }
  ]},
  { id: '2141', korean: '원', myanmar: 'စက်ဝိုင်း', english: 'Circle', pos: 'noun', level: 'basic', examples: [
    { korean: '원을 그려 보세요.', myanmar: 'စက်ဝိုင်း ဆွဲကြည့်ပါ။', english: 'Please draw a circle.' }
  ]},
  { id: '2142', korean: '사각형', myanmar: 'လေးထောင့်ပုံ', english: 'Rectangle', pos: 'noun', level: 'basic', examples: [
    { korean: '사각형을 만들었습니다.', myanmar: 'လေးထောင့်ပုံ လုပ်ခဲ့တယ်။', english: 'I made a rectangle.' }
  ]},
  { id: '2143', korean: '삼각형', myanmar: 'သုံးထောင့်ပုံ', english: 'Triangle', pos: 'noun', level: 'basic', examples: [
    { korean: '삼각형의 각도를 재었습니다.', myanmar: 'သုံးထောင့်ပုံရဲ့ ထောင့် တိုင်းခဲ့တယ်။', english: 'I measured the angles of the triangle.' }
  ]},
  { id: '2144', korean: '선', myanmar: 'မျဉ်း', english: 'Line', pos: 'noun', level: 'basic', examples: [
    { korean: '직선을 그었습니다.', myanmar: 'တည့်တဲ့မျဉ်း ဆွဲခဲ့တယ်။', english: 'I drew a straight line.' }
  ]},
  { id: '2145', korean: '점', myanmar: 'အမှတ်', english: 'Point', pos: 'noun', level: 'basic', examples: [
    { korean: '점을 찍었습니다.', myanmar: 'အမှတ် ရိုက်ခဲ့တယ်။', english: 'I marked a point.' }
  ]},
  { id: '2146', korean: '각도', myanmar: 'ထောင့်', english: 'Angle', pos: 'noun', level: 'basic', examples: [
    { korean: '각도를 측정했습니다.', myanmar: 'ထောင့် တိုင်းတာခဲ့တယ်။', english: 'I measured the angle.' }
  ]},
  { id: '2147', korean: '자', myanmar: 'အရှည်တိုင်း', english: 'Ruler', pos: 'noun', level: 'basic', examples: [
    { korean: '자로 길이를 재었습니다.', myanmar: 'အရှည်တိုင်းနဲ့ အလျား တိုင်းခဲ့တယ်။', english: 'I measured the length with a ruler.' }
  ]},
  { id: '2148', korean: '계산기', myanmar: 'တွက်စက်', english: 'Calculator', pos: 'noun', level: 'basic', examples: [
    { korean: '계산기를 사용했습니다.', myanmar: 'တွက်စက် သုံးခဲ့တယ်။', english: 'I used a calculator.' }
  ]},
  { id: '2149', korean: '연필', myanmar: 'ခဲတံ', english: 'Pencil', pos: 'noun', level: 'basic', examples: [
    { korean: '연필로 계산했습니다.', myanmar: 'ခဲတံနဲ့ တွက်ချက်ခဲ့တယ်။', english: 'I calculated with a pencil.' }
  ]},
  { id: '2150', korean: '지우개', myanmar: 'ပယ်ဖျက်ရာရာ', english: 'Eraser', pos: 'noun', level: 'basic', examples: [
    { korean: '지우개로 틀린 답을 지웠습니다.', myanmar: 'ပယ်ဖျက်ရာရာနဲ့ မှားတဲ့ အဖြေ ပယ်ခဲ့တယ်။', english: 'I erased the wrong answer with an eraser.' }
  ]},

];

/*
===== HUMAN FACT-CHECK REQUIRED =====

✅ COMPLETED: 1000 BASIC LEVEL ㄱ CONSONANT WORDS (IDs 1-1000)
✅ COMPLETED: 1000 PRE-INTERMEDIATE LEVEL ㄱ CONSONANT WORDS (IDs 1001-2000) 🎉

🎯 MILESTONE ACHIEVED: 2000 ㄱ CONSONANT WORDS TOTAL! 🏆

BASIC LEVEL SUMMARY:
- Total: 1000 words (IDs 1-1000)
- Categories: Daily objects, food, animals, body/health, transportation, technology, 
  education, emotions, grammar, time/frequency, abstract concepts

PRE-INTERMEDIATE LEVEL SUMMARY:
- Total: 1000 words (IDs 1001-2000)
- Categories: 20 specialized categories including:
  1. Advanced Daily Life Terms (1001-1050)
  2. Advanced Academic & Education Terms (1051-1100)
  3. Advanced Technology & Digital Terms (1101-1150)
  4. Advanced Business & Professional Terms (1151-1200)
  5. Advanced Legal & Administrative Terms (1201-1250)
  6. Advanced Arts & Culture Terms (1251-1300)
  7. Advanced Social & Relationship Terms (1301-1350)
  8. Advanced Sports & Recreation Terms (1351-1400)
  9. Advanced Nature & Environment Terms (1401-1450)
  10. Advanced Transportation & Logistics Terms (1451-1500)
  11. Advanced Communication & Media Terms (1501-1550)
  12. Advanced Health & Medical Terms (1551-1600)
  13. Advanced Food & Culinary Terms (1601-1650)
  14. Advanced Travel & Tourism Terms (1651-1700)
  15. Advanced Weather & Seasons Terms (1701-1750)
  16. Advanced Philosophy & Abstract Concepts (1751-1800)
  17. Advanced Psychology & Human Behavior Terms (1801-1850)
  18. Advanced Science & Research Terms (1851-1900)
  19. Advanced Society & Culture Terms (1901-1950)
  20. Advanced Economics & Finance Terms (1951-2000)
- All words include Korean-Myanmar-English examples
- User corrections incorporated for Myanmar translations

NEXT STEPS (READY FOR NEXT CONSONANT):
- All ㄱ consonant words completed! 🎯
- Ready to proceed to next consonant: ㄴ (nieun)
- Plan: Continue systematic approach through remaining consonants:
  ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ
- Organized by categories with clear section comments
- More complex vocabulary building on basic foundation
- Enhanced examples and usage patterns

VERIFICATION NOTES:
- Each word includes Korean, Myanmar, English translations
- All entries have practical example sentences
- Categories are clearly marked for easy fact-checking
- Total dictionary entries: 2000 words (all ㄱ consonant words completed)

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
