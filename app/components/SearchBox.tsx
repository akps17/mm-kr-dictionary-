import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
};

export function SearchBox({ value, placeholder, onChangeText, onClear }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={18}
        color="#6B7280"
        style={styles.leftIcon}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
      />
      {Platform.OS !== 'ios' && value.length > 0 && (
        <Pressable
          onPress={onClear}
          android_ripple={{ color: '#E5E7EB', borderless: true }}
          style={styles.clearButton}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
        >
          <Ionicons name="close-circle" size={18} color="#9CA3AF" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  leftIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    paddingRight: 36,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

