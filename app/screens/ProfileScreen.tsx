import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Pressable, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemedColors } from '../components/Theme';
import { useSettings } from '../data/SettingsContext';
import { useAuth } from '../data/AuthContext';
import { useUserPoints } from '../data/UserPointsContext';
import { i18nLabels } from '../data/settings';

export function ProfileScreen({ navigation }: { navigation: any }) {
  const C = useThemedColors();
  const { settings } = useSettings();
  const { user, logOut } = useAuth();
  const { points, totalSubmissions, isPro, refreshPoints } = useUserPoints();
  const labels = i18nLabels[settings.uiLanguage];
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  
  if (!user) {
    return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: C.background }]}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <Ionicons name="person-circle-outline" size={80} color={C.textTertiary} />
          <Text style={[styles.title, { color: C.textPrimary, marginTop: 16 }]}>
            {settings.uiLanguage === 'myanmar' ? 'အကောင့်မရှိပါ' : settings.uiLanguage === 'korean' ? '로그인 필요' : 'Not Logged In'}
          </Text>
          <Text style={{ color: C.textSecondary, textAlign: 'center', marginTop: 8 }}>
            {settings.uiLanguage === 'myanmar' 
              ? 'ပရိုဖိုင်ကြည့်ရန် အကောင့်ဝင်ရောက်ပါ'
              : settings.uiLanguage === 'korean'
              ? '프로필을 보려면 로그인하세요'
              : 'Please login to view your profile'}
          </Text>
        </View>
      </SafeAreaView>
    );
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
          <View style={[styles.card, { flex: 1, backgroundColor: C.surface, borderColor: C.border, alignItems: 'center' }]}>
            <Ionicons name="document-text" size={32} color="#10B981" style={{ marginBottom: 8 }} />
            <Text style={{ fontSize: 24, fontWeight: '700', color: C.textPrimary }}>{totalSubmissions}</Text>
            <Text style={{ fontSize: 12, color: C.textSecondary, textAlign: 'center' }}>
              {settings.uiLanguage === 'myanmar' ? 'တင်သွင်းမှုများ' : settings.uiLanguage === 'korean' ? '제출' : 'Submissions'}
            </Text>
          </View>
          
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
          </View>
        </View>
        
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
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
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
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  primaryBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

