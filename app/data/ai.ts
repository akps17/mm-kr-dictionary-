// Provider interfaces for Chat and Translation

export type ChatMessage = { role: 'user' | 'assistant' | 'system'; content: string };

export interface ChatProvider {
  send(messages: ChatMessage[], opts?: { model?: string }): Promise<ChatMessage>;
}

export interface TranslationProvider {
  translate(text: string, source: string, target: string): Promise<string>;
}

// Google Translate REST provider
export class GoogleTranslateProvider implements TranslationProvider {
  constructor(private apiKey: string) {}

  async translate(text: string, source: string, target: string): Promise<string> {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: text, source, target, format: 'text' }),
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`Translate failed: ${res.status} ${t}`);
    }
    const json = await res.json();
    return json.data.translations[0].translatedText as string;
  }
}

// OpenAI Chat provider (placeholder; key provided later)
export class OpenAIChatProvider implements ChatProvider {
  constructor(private apiKey: string) {}
  async send(messages: ChatMessage[], opts?: { model?: string }): Promise<ChatMessage> {
    const model = opts?.model ?? 'gpt-4o-mini';
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({ model, messages }),
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`Chat failed: ${res.status} ${t}`);
    }
    const json = await res.json();
    const content = json.choices?.[0]?.message?.content ?? '';
    return { role: 'assistant', content };
  }
}

