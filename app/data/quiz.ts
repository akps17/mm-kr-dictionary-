import { dictionaryEntries } from './dictionary';

export type MCQQuestion = {
  id: string;
  prompt: string; // Korean
  choices: string[]; // Myanmar choices
  answerIndex: number;
};

export type TFQuestion = {
  id: string;
  statement: string; // Korean → Myanmar pairing
  isTrue: boolean;
};

export type Flashcard = {
  id: string;
  front: string; // Korean
  back: string; // Myanmar (and maybe English)
};

function sample<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < Math.min(count, arr.length)) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}

export function generateMCQ(count = 20): MCQQuestion[] {
  const base = sample(dictionaryEntries, count);
  return base.map((entry) => {
    const distractors = sample(
      dictionaryEntries.filter((e) => e.id !== entry.id),
      3
    ).map((e) => e.myanmar);
    const correct = entry.myanmar;
    const choices = [...distractors, correct];
    // shuffle
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    const answerIndex = choices.indexOf(correct);
    return {
      id: entry.id,
      prompt: entry.korean,
      choices,
      answerIndex,
    };
  });
}

export function generateTF(count = 20): TFQuestion[] {
  const base = sample(dictionaryEntries, count);
  return base.map((entry, idx) => {
    const truth = Math.random() > 0.5;
    let shown = entry.myanmar;
    if (!truth) {
      const other = sample(
        dictionaryEntries.filter((e) => e.id !== entry.id),
        1
      )[0];
      shown = other.myanmar;
    }
    return {
      id: `${entry.id}-${idx}`,
      statement: `${entry.korean} → ${shown}`,
      isTrue: truth,
    };
  });
}

export function generateFlashcards(count = 20): Flashcard[] {
  const base = sample(dictionaryEntries, count);
  return base.map((e) => ({ id: e.id, front: e.korean, back: `${e.myanmar}${e.english ? `\n(${e.english})` : ''}` }));
}

