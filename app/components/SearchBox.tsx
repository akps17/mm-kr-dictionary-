import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from './Theme';

type Props = {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
};

export function SearchBox({ value, placeholder, onChangeText, onClear }: Props) {
  const C = useThemedColors();
  
  return (
    <View style={[
      styles.container,
      {
        backgroundColor: C.surface,
        borderColor: C.border,
      }
    ]}>
      <Ionicons
        name="search"
        size={18}
        color={C.textSecondary}
        style={styles.leftIcon}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={C.textTertiary}
        autoCapitalize="none"
        autoCorrect={false}
        style={[styles.input, { color: C.textPrimary }]}
        clearButtonMode={Platform.OS === 'ios' ? 'while-editing' : 'never'}
      />
      {Platform.OS !== 'ios' && value.length > 0 && (
        <Pressable
          onPress={onClear}
          android_ripple={{ color: C.border, borderless: true }}
          style={styles.clearButton}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
        >
          <Ionicons name="close-circle" size={18} color={C.textTertiary} />
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
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
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

