import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';
import { GoogleGeminiChatProvider, type ChatMessage } from '../data/ai';

export function AIChatScreen() {
  const C = useThemedColors();
  const { settings } = useSettings();
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const scrollViewRef = React.useRef<ScrollView>(null);
  
  // Use Google Gemini API
  const GEMINI_API_KEY = 'AIzaSyBBuzkwhzcI0kETOP3uHb5WVlNzl-RdGOU';
  const provider = React.useMemo(() => new GoogleGeminiChatProvider(GEMINI_API_KEY), []);

  // Initial welcome message
  React.useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        role: 'assistant',
        content: settings.uiLanguage === 'myanmar' 
          ? 'မင်္ဂလာပါ! ကျွန်တော် Google Gemini AI ဖြစ်ပါတယ်။ မြန်မာ-ကိုရီးယား အဘိဓာန်နဲ့ ပတ်သက်ပြီး ကူညီပေးနိုင်ပါတယ်။ ဘာမေးစရာရှိပါသလဲ?'
          : settings.uiLanguage === 'korean'
          ? '안녕하세요! 저는 Google Gemini AI입니다. 미얀마-한국어 사전 관련하여 도와드릴 수 있습니다. 무엇을 도와드릴까요?'
          : 'Hello! I\'m Google Gemini AI. I can help you with Myanmar-Korean dictionary questions. How can I assist you today?'
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  async function send() {
    if (!input.trim() || isTyping) return;
    
    const userMessage = input.trim();
    const next: ChatMessage[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(next);
    setInput('');
    setIsTyping(true);

    // Scroll to bottom
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);

    try {
      const reply = await provider.send(next);
      setMessages((m) => [...m, reply]);
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    } catch (e: any) {
      const errorMsg = settings.uiLanguage === 'myanmar'
        ? `အမှား: ${e?.message ?? 'အမည်မသိ အမှား'}`
        : settings.uiLanguage === 'korean'
        ? `오류: ${e?.message ?? '알 수 없는 오류'}`
        : `Error: ${e?.message ?? 'unknown error'}`;
      setMessages((m) => [...m, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsTyping(false);
    }
  }

  const clearChat = () => {
    setMessages([]);
    setInput('');
  };

  const labels = i18nLabels[settings.uiLanguage];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          paddingHorizontal: 16, 
          paddingVertical: 12,
          backgroundColor: C.surface,
          borderBottomWidth: 1,
          borderBottomColor: C.border,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#4285F4',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}>
              <Ionicons name="sparkles" size={22} color="#fff" />
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: '700', color: C.textPrimary }}>
                {settings.uiLanguage === 'myanmar' ? 'AI လက်ထောက်' : settings.uiLanguage === 'korean' ? 'AI 어시스턴트' : 'AI Assistant'}
              </Text>
              <Text style={{ fontSize: 12, color: C.textSecondary }}>
                Powered by Google Gemini
              </Text>
            </View>
          </View>
          
          <Pressable 
            onPress={clearChat}
            style={({ pressed }) => ({
              padding: 8,
              borderRadius: 8,
              backgroundColor: pressed ? C.border + '40' : 'transparent',
            })}
          >
            <Ionicons name="trash-outline" size={22} color={C.textSecondary} />
          </Pressable>
        </View>

        {/* Messages */}
        <ScrollView 
          ref={scrollViewRef}
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16, paddingBottom: 8 }}
        >
          {messages.map((m, idx) => (
            <View 
              key={idx} 
              style={{ 
                marginBottom: 16,
                alignItems: m.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <View style={{
                maxWidth: '80%',
                backgroundColor: m.role === 'user' ? '#4285F4' : C.surface,
                borderRadius: 18,
                borderWidth: m.role === 'user' ? 0 : 1.5,
                borderColor: C.border,
                padding: 14,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}>
                {m.role === 'assistant' && (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                    <Ionicons name="sparkles" size={14} color="#4285F4" />
                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#4285F4', marginLeft: 4 }}>
                      Gemini
                    </Text>
                  </View>
                )}
                <Text style={{ 
                  fontSize: 15, 
                  lineHeight: 22,
                  color: m.role === 'user' ? '#fff' : C.textPrimary,
                }}>
                  {m.content}
                </Text>
              </View>
            </View>
          ))}
          
          {isTyping && (
            <View style={{ alignItems: 'flex-start', marginBottom: 16 }}>
              <View style={{
                backgroundColor: C.surface,
                borderRadius: 18,
                borderWidth: 1.5,
                borderColor: C.border,
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Ionicons name="sparkles" size={14} color="#4285F4" style={{ marginRight: 8 }} />
                <Text style={{ color: C.textSecondary, fontSize: 14 }}>
                  {settings.uiLanguage === 'myanmar' ? 'ရေးနေသည်...' : settings.uiLanguage === 'korean' ? '입력 중...' : 'Typing...'}
                </Text>
              </View>
            </View>
          )}
        </ScrollView>

        {/* Input Area */}
        <View style={{
          backgroundColor: C.surface,
          borderTopWidth: 1,
          borderTopColor: C.border,
          paddingHorizontal: 16,
          paddingVertical: 12,
          paddingBottom: 20,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8 }}>
            <TextInput
              value={input}
              onChangeText={setInput}
              onSubmitEditing={send}
              placeholder={
                settings.uiLanguage === 'myanmar' 
                  ? 'သင့်မေးခွန်းကို ရေးပါ...'
                  : settings.uiLanguage === 'korean'
                  ? '질문을 입력하세요...'
                  : 'Type your question...'
              }
              placeholderTextColor={C.textTertiary}
              multiline
              maxLength={1000}
              style={{
                flex: 1,
                borderWidth: 1.5,
                borderColor: C.border,
                borderRadius: 24,
                paddingHorizontal: 16,
                paddingVertical: 10,
                fontSize: 15,
                color: C.textPrimary,
                backgroundColor: C.background,
                maxHeight: 100,
              }}
            />
            <Pressable 
              onPress={send}
              disabled={!input.trim() || isTyping}
              style={({ pressed }) => ({
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: (!input.trim() || isTyping) ? C.border : '#4285F4',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: pressed ? 0.8 : 1,
                shadowColor: '#4285F4',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: (!input.trim() || isTyping) ? 0 : 0.3,
                shadowRadius: 8,
                elevation: (!input.trim() || isTyping) ? 0 : 6,
              })}
            >
              <Ionicons name="send" size={20} color="#fff" />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

