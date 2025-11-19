import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSubmissions } from '../data/SubmissionsContext';
import { useAuth } from '../data/AuthContext';
import { useUserPoints } from '../data/UserPointsContext';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';
import { AuthScreen } from './AuthScreen';
import { WordInputForm } from '../components/WordInputForm';

export function SubmitWordScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { submitEntry, pendingEntries } = useSubmissions();
  const { user, logOut, loading } = useAuth();
  const { addPoints } = useUserPoints();
  const [msg, setMsg] = React.useState('');

  // Show auth screen if not logged in
  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ color: C.textSecondary }}>{labels.loading}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  async function onSubmit(entry: any) {
    if (!entry.korean.trim() || !entry.myanmar.trim() || !entry.english.trim()) {
      setMsg(labels.fillAllFields);
      return;
    }
    await submitEntry({ 
      ...entry,
      userEmail: user?.email || 'anonymous' 
    });
    
    // Award 5 points for submitting a word
    await addPoints(5);
    
    setMsg(labels.submittedSuccess);
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}> 
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Back Button */}
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16,
            paddingVertical: 8,
            paddingHorizontal: 4,
            opacity: pressed ? 0.6 : 1,
          })}
        >
          <Ionicons name="arrow-back" size={24} color={C.textPrimary} />
          <Text style={{ color: C.textPrimary, fontSize: 16, fontWeight: '600' }}>{labels.back}</Text>
        </Pressable>

        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Image source={require('../assets/dictionary_icon.png')} style={styles.aboutLogo} />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 12 }]}>{labels.navInputNewWords}</Text>
        </View>
        
        {/* User Info */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ color: C.textSecondary, fontSize: 12 }}>{labels.loggedInAs}</Text>
              <Text style={{ color: C.textPrimary, fontWeight: '600' }}>{user.displayName || 'User'}</Text>
              <Text style={{ color: C.textSecondary, fontSize: 12 }}>{user.email}</Text>
            </View>
            <Pressable onPress={logOut} style={[styles.pill, { backgroundColor: C.border }]}>
              <Ionicons name="log-out-outline" size={16} color={C.textSecondary} />
              <Text style={{ color: C.textSecondary, fontSize: 12 }}>{labels.logout}</Text>
            </Pressable>
          </View>
        </View>

        {/* Enhanced Word Input Form */}
        <WordInputForm onSubmit={onSubmit} />

        {/* Success Message */}
        {!!msg && (
          <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginTop: 16 }]}>
            <Text style={{ color: C.textSecondary, textAlign: 'center' }}>{msg}</Text>
          </View>
        )}

        {/* My Word Submissions */}
        <View style={[styles.card, { marginTop: 16, backgroundColor: C.surface, borderColor: C.border }]}>
          <Text style={{ fontWeight: '700', color: C.textSecondary, marginBottom: 4 }}>{labels.mySubmissions}</Text>
          <Text style={{ color: C.textTertiary, fontSize: 12, marginBottom: 12 }}>{labels.trackSubmissions}</Text>
          {pendingEntries.length === 0 ? (
            <Text style={{ color: C.textTertiary }}>{labels.noSubmissions}</Text>
          ) : (
            pendingEntries.map((entry) => (
              <View key={entry.id} style={{ paddingVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: C.border }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <Text style={{ color: C.textPrimary, fontWeight: '600' }}>{entry.korean}</Text>
                  {entry.status && (
                    <View style={[
                      styles.pill,
                      entry.status === 'approved' && { backgroundColor: '#D1FAE5', borderColor: '#A7F3D0' },
                      entry.status === 'rejected' && { backgroundColor: '#FEE2E2', borderColor: '#FCA5A5' },
                      entry.status === 'pending' && { backgroundColor: '#FEF3C7', borderColor: '#FCD34D' }
                    ]}>
                      <Ionicons 
                        name={
                          entry.status === 'approved' ? 'checkmark-circle-outline' :
                          entry.status === 'rejected' ? 'close-circle-outline' :
                          'time-outline'
                        } 
                        size={14} 
                        color={
                          entry.status === 'approved' ? '#059669' :
                          entry.status === 'rejected' ? '#DC2626' :
                          '#D97706'
                        }
                        style={{ marginRight: 4 }}
                      />
                      <Text style={[
                        { fontSize: 12 },
                        entry.status === 'approved' && { color: '#059669' },
                        entry.status === 'rejected' && { color: '#DC2626' },
                        entry.status === 'pending' && { color: '#D97706' }
                      ]}>
                        {entry.status === 'approved' ? labels.approved :
                         entry.status === 'rejected' ? labels.notApproved :
                         labels.pendingReview}
                      </Text>
                    </View>
                  )}
                </View>
                <Text style={{ color: C.textPrimary, fontFamily: 'NotoSansMyanmar_400Regular' }}>{entry.myanmar}</Text>
                {entry.english && (
                  <Text style={{ color: C.textSecondary, fontSize: 12, marginTop: 2 }}>{entry.english}</Text>
                )}
                <Text style={{ color: C.textSecondary, fontSize: 12, marginTop: 2 }}>
                  [{entry.pos}] • {new Date(entry.createdAt).toLocaleDateString()}
                </Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  card: {
    padding: 18,
    borderRadius: 16,
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  aboutLogo: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
});

