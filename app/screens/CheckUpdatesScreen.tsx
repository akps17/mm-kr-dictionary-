import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useUpdates } from '../data/UpdatesContext';
import { i18nLabels } from '../data/settings';

export function CheckUpdatesScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];
  const { 
    availableUpdates, 
    isCheckingUpdates, 
    lastUpdateCheck, 
    checkForUpdates, 
    syncUpdatesToLocal, 
    markUpdatesAsApplied, 
    getUpdatesSummary 
  } = useUpdates();
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<string>('');
  
  const summary = getUpdatesSummary();
  
  const handleCheckUpdates = async () => {
    try {
      await checkForUpdates();
    } catch (error) {
      console.error('Failed to check updates:', error);
    }
  };
  
  const handleSyncUpdates = async () => {
    if (availableUpdates.length === 0) return;
    
    setIsSyncing(true);
    setSyncResult('');
    
    try {
      const result = await syncUpdatesToLocal(availableUpdates);
      setSyncResult(result);
      
      // Mark updates as applied
      await markUpdatesAsApplied();
      
    } catch (error) {
      setSyncResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSyncing(false);
    }
  };
  
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <Text style={[styles.screenTitle, { color: C.textPrimary }]}>
          {labels.navCheckUpdates}
        </Text>
        
        {/* Status Card */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border }]}>
          <View style={styles.updateStatusRow}>
            <Ionicons name="sync-outline" size={24} color={C.brand} />
            <Text style={[styles.updateStatusTitle, { color: C.textPrimary }]}>
              {labels.updateStatus}
            </Text>
          </View>
          
          <View style={styles.statusGrid}>
            <View style={styles.statusItem}>
              <Text style={[styles.statusNumber, { color: C.brand }]}>{summary.totalUpdates}</Text>
              <Text style={[styles.statusLabel, { color: C.textSecondary }]}>{labels.availableUpdates}</Text>
            </View>
            <View style={styles.statusItem}>
              <Text style={[styles.statusNumber, { color: '#10B981' }]}>{summary.newWords}</Text>
              <Text style={[styles.statusLabel, { color: C.textSecondary }]}>{labels.newWords}</Text>
            </View>
          </View>
          
          {lastUpdateCheck && (
            <Text style={[styles.lastCheckText, { color: C.textSecondary }]}>
              {labels.lastChecked} {lastUpdateCheck.toLocaleString()}
            </Text>
          )}
        </View>
        
        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.updateButton, { backgroundColor: C.brand }]}
            onPress={handleCheckUpdates}
            disabled={isCheckingUpdates}
          >
            <Ionicons 
              name={isCheckingUpdates ? "hourglass-outline" : "refresh-outline"} 
              size={20} 
              color="white" 
            />
            <Text style={styles.buttonText}>
              {isCheckingUpdates ? labels.checking : labels.checkForUpdates}
            </Text>
          </Pressable>
          
          {availableUpdates.length > 0 && (
            <Pressable
              style={[styles.updateButton, { backgroundColor: '#10B981' }]}
              onPress={handleSyncUpdates}
              disabled={isSyncing}
            >
              <Ionicons 
                name={isSyncing ? "hourglass-outline" : "download-outline"} 
                size={20} 
                color="white" 
              />
              <Text style={styles.buttonText}>
                {isSyncing ? labels.syncing : `${labels.syncUpdates} (${availableUpdates.length})`}
              </Text>
            </Pressable>
          )}
        </View>
        
        {/* Sync Result */}
        {syncResult && (
          <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginTop: 16 }]}>
            <Text style={[styles.sectionTitle, { color: C.textPrimary }]}>{labels.syncResult}</Text>
            <Text style={[styles.syncResultText, { color: C.textSecondary }]}>{syncResult}</Text>
          </View>
        )}
        
        {/* Available Updates List */}
        {availableUpdates.length > 0 && (
          <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginTop: 16 }]}>
            <Text style={[styles.sectionTitle, { color: C.textPrimary }]}>
              {labels.availableUpdatesList} ({availableUpdates.length})
            </Text>
            
            {availableUpdates.slice(0, 10).map((update) => (
              <View key={update.id} style={[styles.updateItem, { borderBottomColor: C.border }]}>
                <View style={styles.updateItemHeader}>
                  <Text style={[styles.updateKorean, { color: C.textPrimary }]}>{update.korean}</Text>
                  {update.isNew && (
                    <View style={[styles.newBadge, { backgroundColor: '#10B981' }]}>
                      <Text style={styles.newBadgeText}>{labels.new}</Text>
                    </View>
                  )}
                </View>
                <Text style={[styles.updateMyanmar, { color: C.textSecondary, fontFamily: 'NotoSansMyanmar_400Regular' }]}>
                  {update.myanmar}
                </Text>
                {update.english && (
                  <Text style={[styles.updateEnglish, { color: C.textSecondary }]}>{update.english}</Text>
                )}
                <Text style={[styles.updateMeta, { color: C.textSecondary }]}>
                  {labels.addedBy} {update.approvedBy} • {update.approvedAt.toLocaleDateString()}
                </Text>
              </View>
            ))}
            
            {availableUpdates.length > 10 && (
              <Text style={[styles.moreUpdatesText, { color: C.textSecondary }]}>
                {labels.andMore.replace('{count}', String(availableUpdates.length - 10))}
              </Text>
            )}
          </View>
        )}
        
        {/* Help Text */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginTop: 16 }]}>
          <Text style={[styles.sectionTitle, { color: C.textPrimary }]}>{labels.howUpdatesWork}</Text>
          <Text style={[styles.helpText, { color: C.textSecondary }]}>
            {labels.howUpdatesWorkDesc}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
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
    marginBottom: 16,
  },
  updateStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  updateStatusTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  statusGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  statusItem: {
    flex: 1,
    alignItems: 'center',
  },
  statusNumber: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  statusLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  lastCheckText: {
    fontSize: 12,
    marginTop: 8,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 16,
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  syncResultText: {
    fontSize: 14,
    lineHeight: 20,
  },
  updateItem: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  updateItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  updateKorean: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  newBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  newBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
  updateMyanmar: {
    fontSize: 16,
    marginBottom: 4,
  },
  updateEnglish: {
    fontSize: 14,
    marginBottom: 4,
  },
  updateMeta: {
    fontSize: 12,
    marginTop: 4,
  },
  moreUpdatesText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  helpText: {
    fontSize: 14,
    lineHeight: 22,
  },
});

