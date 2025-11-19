import React from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../data/AuthContext';
import { useUserPoints } from '../data/UserPointsContext';
import { useSettings } from '../data/SettingsContext';
import { i18nLabels } from '../data/settings';

export type FeatureType = 'ai-chat' | 'translate' | 'topik';

const FEATURE_COST = 50; // Points cost for non-pro users

export function useFeatureAccess() {
  const { user } = useAuth();
  const { points, isPro, addPoints } = useUserPoints();
  const { settings } = useSettings();
  const labels = i18nLabels[settings.uiLanguage];

  const checkAccess = (
    featureType: FeatureType,
    onSuccess: () => void,
    onNavigateToLogin?: () => void
  ): void => {
    // Check if user is logged in
    if (!user) {
      Alert.alert(
        labels.needLogin,
        labels.needLoginMsg,
        [
          {
            text: settings.uiLanguage === 'myanmar' ? 'မလုပ်တော့ပါ' : settings.uiLanguage === 'korean' ? '취소' : 'Cancel',
            style: 'cancel',
          },
          {
            text: settings.uiLanguage === 'myanmar' ? 'အကောင့်ဝင်မည်' : settings.uiLanguage === 'korean' ? '로그인' : 'Login',
            onPress: () => {
              if (onNavigateToLogin) {
                onNavigateToLogin();
              }
            },
          },
        ]
      );
      return;
    }

    // TOPIK is PRO-only
    if (featureType === 'topik') {
      if (!isPro) {
        Alert.alert(
          labels.proOnly,
          labels.proOnlyMsg,
          [
            {
              text: settings.uiLanguage === 'myanmar' ? 'ကောင်းပြီ' : settings.uiLanguage === 'korean' ? '확인' : 'OK',
            },
          ]
        );
        return;
      }
      // PRO user, grant access
      onSuccess();
      return;
    }

    // AI Chat and Translate: Free for PRO, 50 points for others
    if (isPro) {
      onSuccess();
      return;
    }

    // Check if user has enough points
    if (points < FEATURE_COST) {
      Alert.alert(
        labels.needPoints,
        `${labels.needPointsMsg} ${points}`,
        [
          {
            text: settings.uiLanguage === 'myanmar' ? 'ကောင်းပြီ' : settings.uiLanguage === 'korean' ? '확인' : 'OK',
          },
        ]
      );
      return;
    }

    // User has enough points, ask for confirmation
    Alert.alert(
      labels.useFeature,
      labels.useFeatureMsg,
      [
        {
          text: settings.uiLanguage === 'myanmar' ? 'မလုပ်တော့ပါ' : settings.uiLanguage === 'korean' ? '취소' : 'Cancel',
          style: 'cancel',
        },
        {
          text: settings.uiLanguage === 'myanmar' ? 'သုံးမည်' : settings.uiLanguage === 'korean' ? '사용' : 'Use',
          onPress: async () => {
            // Deduct points (don't increment submission count)
            await addPoints(-FEATURE_COST, false);
            onSuccess();
          },
        },
      ]
    );
  };

  const getFeatureLabel = (featureType: FeatureType): string => {
    if (featureType === 'ai-chat') return labels.navAIChat;
    if (featureType === 'translate') return labels.navTranslate;
    if (featureType === 'topik') return labels.navTOPIK;
    return '';
  };

  const canAccessFeature = (featureType: FeatureType): boolean => {
    if (!user) return false;
    if (featureType === 'topik') return isPro;
    return isPro || points >= FEATURE_COST;
  };

  return {
    checkAccess,
    getFeatureLabel,
    canAccessFeature,
    featureCost: FEATURE_COST,
  };
}

