import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLibrary } from '../data/LibraryContext';

export function FavoriteButton({ entryId }: { entryId: string }) {
  const { isFavorite, toggleFavorite } = useLibrary();
  const fav = isFavorite(entryId);
  return (
    <Text onPress={() => toggleFavorite(entryId)} style={styles.favButton}>
      <Ionicons name={fav ? 'heart' : 'heart-outline'} size={20} color={fav ? '#DC2626' : '#9CA3AF'} />
    </Text>
  );
}

const styles = StyleSheet.create({
  favButton: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

