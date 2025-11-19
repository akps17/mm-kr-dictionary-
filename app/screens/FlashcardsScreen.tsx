import React from 'react';
import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useUserPoints } from '../data/UserPointsContext';
import { useDictionarySync, mergeApprovedWords } from '../data/DictionarySync';
import { dictionaryEntries } from '../data/dictionary';
import { generateFlashcards, type DifficultyLevel } from '../data/quiz';
import { i18nLabels } from '../data/settings';

export function FlashcardsScreen({ route, navigation }: { route: any; navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { addPoints } = useUserPoints();
  const { approvedWords } = useDictionarySync();
  const selectedLevel: DifficultyLevel = route?.params?.selectedLevel || 'all';
  
  // Create merged dictionary for flashcard generation
  const mergedDictionary = React.useMemo(() => {
    return mergeApprovedWords(dictionaryEntries, approvedWords);
  }, [approvedWords]);
  
  const cards = React.useMemo(() => generateFlashcards(20, mergedDictionary, selectedLevel), [mergedDictionary, selectedLevel]);
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [pointsAwarded, setPointsAwarded] = React.useState(false);
  
  // Reset flashcards when dictionary or level changes
  React.useEffect(() => {
    setIndex(0);
    setFlipped(false);
    setPointsAwarded(false);
  }, [mergedDictionary, selectedLevel]);
  
  const card = cards[index];
  const done = index >= cards.length;

  // Award points for completing all flashcards
  React.useEffect(() => {
    if (done && !pointsAwarded && cards.length > 0) {
      setPointsAwarded(true);
      addPoints(10, false); // Award 10 points, don't increment submission count
    }
  }, [done, pointsAwarded, cards.length, addPoints]);
  
  if (done) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={{ flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons name="sparkles" size={64} color="#6366F1" />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 8 }]}>
            {labels.greatJob || 'Great job!'}
          </Text>
          {pointsAwarded && (
            <View style={{ 
              backgroundColor: C.brandMuted, 
              paddingHorizontal: 16, 
              paddingVertical: 8, 
              borderRadius: 12, 
              marginTop: 8,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
              <Ionicons name="star" size={20} color={C.brand} />
              <Text style={{ color: C.brand, fontWeight: '700', fontSize: 16 }}>
                {labels.earnedPoints || '+10 Points Earned! 🎉'}
              </Text>
            </View>
          )}
          <Text style={{ color: C.textSecondary, textAlign: 'center', marginTop: 6 }}>
            {labels.keepReviewing || 'Keep reviewing to build long-term memory.'}
          </Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
            <Pressable
              onPress={() => { setFlipped(false); setIndex(0); setPointsAwarded(false); }}
              style={[styles.primaryBtn, { backgroundColor: '#2563EB' }]}
            >
              <Ionicons name="refresh" size={18} color="#fff" />
              <Text style={styles.primaryBtnText}>{labels.restart || 'Restart'}</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <View style={{ flex: 1, padding: 16, paddingTop: 56 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            { 
              position: 'absolute',
              top: 16,
              left: 16,
              padding: 8,
              zIndex: 10,
              opacity: pressed ? 0.5 : 1 
            }
          ]}
        >
          <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
        </Pressable>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: C.textTertiary, textAlign: 'center', marginBottom: 12, paddingHorizontal: 40 }}>{labels.flashHelp}</Text>
          <Pressable
            onPress={() => setFlipped((f) => !f)}
            hitSlop={8}
            style={[
              styles.flashcard,
              {
                backgroundColor: C.surface,
                borderColor: C.border,
              }
            ]}
            accessibilityRole="button"
          >
            <Text
              style={{
                color: C.textPrimary,
                textAlign: 'center',
                fontWeight: flipped ? '400' : '700',
                fontSize: flipped ? 16 : 22,
              }}
            >
              {flipped ? card.back : card.front}
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', gap: 12, marginTop: 12 }}>
          <Pressable onPress={() => setIndex((i) => Math.max(0, i - 1))} style={[styles.primaryBtn, { backgroundColor: '#6B7280', flex: 1 }]}>
            <Text style={styles.primaryBtnText}>{labels.prev || 'Prev'}</Text>
          </Pressable>
          <Pressable onPress={() => { setFlipped(false); setIndex((i) => i + 1); }} style={[styles.primaryBtn, { backgroundColor: '#2563EB', flex: 1 }]}>
            <Text style={styles.primaryBtnText}>{labels.next || 'Next'}</Text>
          </Pressable>
        </View>
        <Text style={{ color: C.textTertiary, marginTop: 8 }}>{index + 1} / {cards.length}</Text>
      </View>
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
  },
  flashcard: {
    width: '100%',
    minHeight: 200,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});

