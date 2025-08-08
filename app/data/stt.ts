// Simple STT client for OpenAI Whisper via REST
// NOTE: Requires a dev build or server proxy to avoid exposing keys in client apps.

export async function transcribeWithOpenAI(fileUri: string, apiKey: string): Promise<string> {
  // In Expo client, fetch with multipart requires reading file into blob
  const file = await (await fetch(fileUri)).blob();
  const form = new FormData();
  form.append('file', file as any, 'audio.m4a');
  form.append('model', 'whisper-1');
  // Optional: form.append('language', 'my');

  const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: form as any,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI STT failed: ${res.status} ${text}`);
  }
  const json = await res.json();
  return json.text as string;
}

