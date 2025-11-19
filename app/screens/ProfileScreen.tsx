import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useAuth } from '../data/AuthContext';
import { useUserPoints } from '../data/UserPointsContext';
import { i18nLabels } from '../data/settings';
import { AuthScreen } from './AuthScreen';
  
export function ProfileScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const { user, logOut } = useAuth();
  const { points, totalSubmissions, approvedSubmissions, isPro, topikUnlocked, refreshPoints, unlockTopik } = useUserPoints();
  const labels = i18nLabels[settings.uiLanguage];
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  
  if (!user) {
    // Show AuthScreen (login/signup) when user is not logged in
    return <AuthScreen />;
  }
  
  // Calculate level based on points
  const level = Math.floor(points / 50) + 1;
  const pointsToNextLevel = (level * 50) - points;
  const levelProgress = ((points % 50) / 50) * 100;
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshPoints();
    setTimeout(() => setIsRefreshing(false), 500);
  };
  
  const handleTOPIKAccess = () => {
    // If PRO or already unlocked, grant access
    if (isPro || topikUnlocked) {
      navigation.navigate('Practice', { screen: 'TOPIKTest' });
      return;
    }

    // If not enough points
    if (points < 1000) {
      const messages = {
        myanmar: `TOPIK စာမေးပွဲကို ဖွင့်ရန် ၁၀၀၀ အမှတ် လိုအပ်ပါသည်။\n\nလက်ရှိအမှတ်: ${points}\nလိုအပ်သေးသော အမှတ်: ${1000 - points}`,
        korean: `TOPIK 시험을 잠금 해제하려면 1000포인트가 필요합니다.\n\n현재 포인트: ${points}\n필요한 포인트: ${1000 - points}`,
        english: `You need 1000 points to unlock TOPIK Test.\n\nCurrent points: ${points}\nPoints needed: ${1000 - points}`
      };
      Alert.alert(
        settings.uiLanguage === 'myanmar' ? 'အမှတ်မလုံလောက်ပါ' : settings.uiLanguage === 'korean' ? '포인트 부족' : 'Insufficient Points',
        messages[settings.uiLanguage]
      );
      return;
    }

    // Confirm unlock with 1000 points
    const titles = {
      myanmar: 'TOPIK စာမေးပွဲ ဖွင့်မည်',
      korean: 'TOPIK 시험 잠금 해제',
      english: 'Unlock TOPIK Test'
    };
    const messages = {
      myanmar: `၁၀၀၀ အမှတ်ဖြင့် TOPIK စာမေးပွဲကို အပြီးတိုင် ဖွင့်လိုပါသလား?\n\n• အမြဲတမ်း ဝင်ရောက်အသုံးပြုနိုင်ပါသည်\n• စာမေးပွဲ ၅ ခု အကြိမ်မရွေး ဖြေဆိုနိုင်ပါသည်`,
      korean: `1000포인트로 TOPIK 시험을 영구적으로 잠금 해제하시겠습니까?\n\n• 무제한 액세스\n• 5개 문제 무제한 반복`,
      english: `Unlock TOPIK Test permanently for 1000 points?\n\n• Unlimited access forever\n• Retake 5 questions anytime`
    };

    Alert.alert(
      titles[settings.uiLanguage],
      messages[settings.uiLanguage],
      [
        {
          text: settings.uiLanguage === 'myanmar' ? 'မလုပ်တော့ပါ' : settings.uiLanguage === 'korean' ? '취소' : 'Cancel',
          style: 'cancel'
        },
        {
          text: settings.uiLanguage === 'myanmar' ? 'ဖွင့်မည်' : settings.uiLanguage === 'korean' ? '잠금 해제' : 'Unlock',
          onPress: async () => {
            await unlockTopik();
            navigation.navigate('Practice', { screen: 'TOPIKTest' });
          }
        }
      ]
    );
  };

  const handleLogout = () => {
    const titles = {
      myanmar: 'ထွက်မည်လား?',
      korean: '로그아웃하시겠습니까?',
      english: 'Logout?'
    };
    
    const messages = {
      myanmar: 'သင့်အကောင့်မှ ထွက်ရန် သေချာပါသလား?',
      korean: '정말로 로그아웃 하시겠습니까?',
      english: 'Are you sure you want to logout?'
    };
    
    const cancelText = {
      myanmar: 'မထွက်ပါ',
      korean: '취소',
      english: 'Cancel'
    };
    
    const confirmText = {
      myanmar: 'ထွက်မည်',
      korean: '로그아웃',
      english: 'Logout'
    };
    
    Alert.alert(
      titles[settings.uiLanguage],
      messages[settings.uiLanguage],
      [
        {
          text: cancelText[settings.uiLanguage],
          style: 'cancel'
        },
        {
          text: confirmText[settings.uiLanguage],
          style: 'destructive',
          onPress: async () => {
            await logOut();
            navigation.navigate('Home');
          }
        }
      ]
    );
  };
  
  const showSubmissionDetails = () => {
    const pending = totalSubmissions - approvedSubmissions;
    
    const titles = {
      myanmar: 'တင်သွင်းမှုများ',
      korean: '제출 내역',
      english: 'Submissions'
    };
    
    const messages = {
      myanmar: `✅ အတည်ပြုပြီး: ${approvedSubmissions}\n⏳ စောင့်ဆိုင်းဆဲ: ${pending}\n📝 စုစုပေါင်း: ${totalSubmissions}`,
      korean: `✅ 승인됨: ${approvedSubmissions}\n⏳ 대기 중: ${pending}\n📝 총 제출: ${totalSubmissions}`,
      english: `✅ Approved: ${approvedSubmissions}\n⏳ Pending: ${pending}\n📝 Total: ${totalSubmissions}`
    };
    
    Alert.alert(
      titles[settings.uiLanguage],
      messages[settings.uiLanguage],
      [{ text: 'OK', style: 'default' }]
    );
  };
  
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Profile Header */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <View style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: C.brand,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
            borderWidth: 4,
            borderColor: C.surface,
          }}>
            <Ionicons name="person" size={50} color="#FFFFFF" />
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Text style={[styles.title, { color: C.textPrimary, marginBottom: 0 }]}>
              {user.displayName || 'User'}
            </Text>
            {isPro && (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fbbf24',
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 12,
                gap: 4,
              }}>
                <Ionicons name="star" size={12} color="#FFFFFF" />
                <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: '700' }}>
                  {settings.uiLanguage === 'myanmar' ? 'PRO' : settings.uiLanguage === 'korean' ? 'PRO' : 'PRO'}
                </Text>
              </View>
            )}
          </View>
          <Text style={{ color: C.textSecondary, fontSize: 14, marginBottom: 8 }}>
            {user.email}
          </Text>
          
          {/* Level Badge */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: C.brandMuted,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
            gap: 6,
          }}>
            <Ionicons name="trophy" size={20} color={C.brand} />
            <Text style={{ color: C.brand, fontWeight: '700', fontSize: 16 }}>
              {settings.uiLanguage === 'myanmar' ? `အဆင့် ${level}` : settings.uiLanguage === 'korean' ? `레벨 ${level}` : `Level ${level}`}
            </Text>
          </View>
          
          {/* Refresh Button */}
          <Pressable
            onPress={handleRefresh}
            disabled={isRefreshing}
            style={({ pressed }) => ({
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              marginTop: 12,
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: pressed ? C.border : 'transparent',
              borderWidth: 1,
              borderColor: C.border,
              opacity: isRefreshing ? 0.5 : 1,
            })}
          >
            <Ionicons 
              name="refresh" 
              size={16} 
              color={C.textSecondary} 
              style={{ transform: [{ rotate: isRefreshing ? '360deg' : '0deg' }] }}
            />
            <Text style={{ color: C.textSecondary, fontSize: 13, fontWeight: '500' }}>
              {isRefreshing 
                ? (settings.uiLanguage === 'myanmar' ? 'စောင့်ပါ...' : settings.uiLanguage === 'korean' ? '새로고침 중...' : 'Refreshing...')
                : (settings.uiLanguage === 'myanmar' ? 'ရမှတ်ပြန်စစ်ရန်' : settings.uiLanguage === 'korean' ? '포인트 새로고침' : 'Refresh Points')
              }
            </Text>
          </Pressable>
        </View>
        
        {/* Points Card */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Ionicons name="star" size={24} color="#F59E0B" />
              <Text style={{ fontSize: 18, fontWeight: '700', color: C.textPrimary }}>
                {settings.uiLanguage === 'myanmar' ? 'ရမှတ်များ' : settings.uiLanguage === 'korean' ? '포인트' : 'Points'}
              </Text>
            </View>
            <Text style={{ fontSize: 32, fontWeight: '700', color: C.brand }}>{points}</Text>
          </View>
          
          {/* Progress to Next Level */}
          <View style={{ marginBottom: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
              <Text style={{ fontSize: 12, color: C.textSecondary }}>
                {settings.uiLanguage === 'myanmar' ? `နောက်အဆင့်အထိ` : settings.uiLanguage === 'korean' ? `다음 레벨까지` : `To Next Level`}
              </Text>
              <Text style={{ fontSize: 12, color: C.textSecondary, fontWeight: '600' }}>
                {pointsToNextLevel} {settings.uiLanguage === 'myanmar' ? 'ရမှတ်' : settings.uiLanguage === 'korean' ? '포인트' : 'pts'}
              </Text>
            </View>
            <View style={{ height: 8, backgroundColor: C.border, borderRadius: 4, overflow: 'hidden' }}>
              <View style={{ height: '100%', width: `${levelProgress}%`, backgroundColor: C.brand }} />
            </View>
          </View>
        </View>
        
        {/* Stats Grid */}
        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
          <Pressable 
            onPress={showSubmissionDetails}
            style={({ pressed }) => [
              styles.card, 
              { 
                flex: 1, 
                backgroundColor: C.surface, 
                borderColor: C.border, 
                alignItems: 'center',
                opacity: pressed ? 0.7 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }]
              }
            ]}
          >
            <Ionicons name="document-text" size={32} color="#10B981" style={{ marginBottom: 8 }} />
            <Text style={{ fontSize: 24, fontWeight: '700', color: C.textPrimary }}>{totalSubmissions}</Text>
            <Text style={{ fontSize: 12, color: C.textSecondary, textAlign: 'center' }}>
              {settings.uiLanguage === 'myanmar' ? 'တင်သွင်းမှုများ' : settings.uiLanguage === 'korean' ? '제출' : 'Submissions'}
            </Text>
            {approvedSubmissions > 0 && (
              <Text style={{ fontSize: 10, color: '#10B981', marginTop: 4, fontWeight: '600' }}>
                ✓ {approvedSubmissions} {settings.uiLanguage === 'myanmar' ? 'အတည်ပြုပြီး' : settings.uiLanguage === 'korean' ? '승인됨' : 'approved'}
              </Text>
            )}
          </Pressable>
          
          <View style={[styles.card, { flex: 1, backgroundColor: C.surface, borderColor: C.border, alignItems: 'center' }]}>
            <Ionicons name="flame" size={32} color="#EF4444" style={{ marginBottom: 8 }} />
            <Text style={{ fontSize: 24, fontWeight: '700', color: C.textPrimary }}>{Math.min(totalSubmissions, 30)}</Text>
            <Text style={{ fontSize: 12, color: C.textSecondary, textAlign: 'center' }}>
              {settings.uiLanguage === 'myanmar' ? 'ဆက်တိုက်' : settings.uiLanguage === 'korean' ? '연속' : 'Streak'}
            </Text>
          </View>
        </View>
        
        {/* How to Earn Points */}
        <View style={[styles.card, { backgroundColor: C.surface, borderColor: C.border, marginBottom: 16 }]}>
          <Text style={[styles.sectionTitle, { color: C.textPrimary, marginBottom: 12 }]}>
            {settings.uiLanguage === 'myanmar' ? 'ရမှတ်ရယူနည်း' : settings.uiLanguage === 'korean' ? '포인트 획득 방법' : 'How to Earn Points'}
          </Text>
          
          <View style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: C.brandMuted, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: C.brand }}>+5</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: C.textPrimary, fontWeight: '600' }}>
                  {settings.uiLanguage === 'myanmar' ? 'စကားလုံးတင်သွင်းခြင်း' : settings.uiLanguage === 'korean' ? '단어 제출' : 'Submit a Word'}
                </Text>
                <Text style={{ color: C.textSecondary, fontSize: 12 }}>
                  {settings.uiLanguage === 'myanmar' ? 'စကားလုံးအသစ်တစ်ခုကို အောင်မြင်စွာတင်သွင်းပါ' : settings.uiLanguage === 'korean' ? '새 단어를 성공적으로 제출하세요' : 'Successfully submit a new word'}
                </Text>
              </View>
            </View>
            
            {/* Submit Word Button */}
            <Pressable
              onPress={() => navigation.navigate('Input New Words')}
              style={({ pressed }) => ({
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                paddingVertical: 14,
                paddingHorizontal: 20,
                borderRadius: 12,
                backgroundColor: pressed ? C.brandMuted : C.brand,
                marginTop: 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              })}
            >
              <Ionicons name="add-circle" size={20} color="#FFFFFF" />
              <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '600' }}>
                {settings.uiLanguage === 'myanmar' ? 'စကားလုံးတင်သွင်းရန်' : settings.uiLanguage === 'korean' ? '단어 제출하기' : 'Submit Word'}
              </Text>
            </Pressable>
          </View>
        </View>
        
        {/* TOPIK Test Card */}
        <Pressable
          onPress={handleTOPIKAccess}
          style={({ pressed }) => ([
            styles.card,
            {
              backgroundColor: C.surface,
              borderColor: isPro || topikUnlocked ? '#8b5cf6' : C.border,
              borderWidth: isPro || topikUnlocked ? 2 : 1.5,
              opacity: pressed ? 0.8 : 1,
              marginBottom: 16,
            }
          ])}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* Icon */}
            <View style={[
              styles.iconCircle,
              { backgroundColor: '#ede9fe', borderColor: '#8b5cf6', borderWidth: 1.5 }
            ]}>
              <Ionicons name="school" size={32} color="#8b5cf6" />
            </View>

            {/* Content */}
            <View style={{ flex: 1, marginLeft: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                <Text style={[styles.cardTitle, { color: C.textPrimary }]}>
                  {settings.uiLanguage === 'myanmar' ? 'TOPIK စာမေးပွဲ' : settings.uiLanguage === 'korean' ? 'TOPIK 시험' : 'TOPIK Test'}
                </Text>
                {isPro && (
                  <View style={{ 
                    backgroundColor: '#8b5cf6', 
                    paddingHorizontal: 8, 
                    paddingVertical: 2, 
                    borderRadius: 8, 
                    marginLeft: 8 
                  }}>
                    <Text style={{ color: '#fff', fontSize: 10, fontWeight: '700' }}>PRO</Text>
                  </View>
                )}
              </View>
              
              <Text style={{ fontSize: 13, color: C.textSecondary, marginBottom: 8 }}>
                {settings.uiLanguage === 'myanmar' 
                  ? 'ကိုရီးယား စာမေးပွဲ အခြေခံ' 
                  : settings.uiLanguage === 'korean' 
                  ? '한국어 능력 시험 (기초)' 
                  : 'Korean Proficiency Test (Basic)'}
              </Text>

              {/* Status Badge */}
              {isPro || topikUnlocked ? (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                  <Text style={{ fontSize: 13, color: '#10B981', marginLeft: 6, fontWeight: '600' }}>
                    {settings.uiLanguage === 'myanmar' ? 'ဖွင့်ထားပြီး' : settings.uiLanguage === 'korean' ? '잠금 해제됨' : 'Unlocked'}
                  </Text>
                </View>
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons name="lock-closed" size={16} color="#F59E0B" />
                  <Text style={{ fontSize: 13, color: '#F59E0B', marginLeft: 6, fontWeight: '600' }}>
                    {settings.uiLanguage === 'myanmar' ? '၁၀၀၀ အမှတ်' : settings.uiLanguage === 'korean' ? '1000 포인트' : '1000 Points'}
                  </Text>
                </View>
              )}
            </View>

            {/* Arrow */}
            <Ionicons name="chevron-forward" size={24} color={C.textTertiary} />
          </View>
        </Pressable>
        
        {/* Logout Button */}
        <Pressable
          onPress={handleLogout}
          style={({ pressed }) => ([
            styles.primaryBtn,
            {
              backgroundColor: pressed ? '#DC2626' : '#EF4444',
              marginTop: 8,
            }
          ])}
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.primaryBtnText}>
            {settings.uiLanguage === 'myanmar' ? 'ထွက်မည်' : settings.uiLanguage === 'korean' ? '로그아웃' : 'Logout'}
          </Text>
        </Pressable>
      </ScrollView>
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
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
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

