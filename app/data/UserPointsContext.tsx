import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './AuthContext';
import { db } from './firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

type UserPointsContextType = {
  points: number;
  totalSubmissions: number;
  approvedSubmissions: number;
  isPro: boolean;
  addPoints: (amount: number) => Promise<void>;
  resetPoints: () => Promise<void>;
  refreshPoints: () => Promise<void>;
  loading: boolean;
};

const POINTS_KEY_PREFIX = 'user_points_';
const SUBMISSIONS_KEY_PREFIX = 'user_submissions_';

const UserPointsContext = createContext<UserPointsContextType>({
  points: 0,
  totalSubmissions: 0,
  approvedSubmissions: 0,
  isPro: false,
  addPoints: async () => {},
  resetPoints: async () => {},
  refreshPoints: async () => {},
  loading: true,
});

export function UserPointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(0);
  const [totalSubmissions, setTotalSubmissions] = useState(0);
  const [approvedSubmissions, setApprovedSubmissions] = useState(0);
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Load user points when user changes
  useEffect(() => {
    if (user) {
      loadUserData(user.uid);
    } else {
      // Clear points when user logs out
      setPoints(0);
      setTotalSubmissions(0);
      setApprovedSubmissions(0);
      setIsPro(false);
      setLoading(false);
    }
  }, [user]);

  // Reload points when app comes to foreground
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active' && user) {
        // App has come to the foreground, reload points
        console.log('App is active, reloading user points...');
        loadUserData(user.uid);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [user]);

  const loadUserData = async (userId: string) => {
    try {
      // First, try to load from Firestore (source of truth for admin-managed points)
      if (user?.email) {
        try {
          const userDocRef = doc(db, 'user_points', user.email);
          const userDoc = await getDoc(userDocRef);
          
          // Fetch approved submissions from dictionary collection
          let approvedCount = 0;
          try {
            // Try to fetch by userEmail (new format)
            const dictQuery = query(
              collection(db, 'dictionary'),
              where('userEmail', '==', user.email)
            );
            const dictSnapshot = await getDocs(dictQuery);
            approvedCount = dictSnapshot.size;
            
            console.log(`Found ${approvedCount} approved submissions for ${user.email}`);
          } catch (dictError) {
            console.log('Could not fetch approved submissions:', dictError);
          }
          
          if (userDoc.exists()) {
            const data = userDoc.data();
            const firestorePoints = data.points || 0;
            const firestoreSubmissions = data.totalSubmissions || 0;
            const firestorePro = data.isPro || false;
            
            // Update local storage with Firestore data
            await Promise.all([
              AsyncStorage.setItem(`${POINTS_KEY_PREFIX}${userId}`, firestorePoints.toString()),
              AsyncStorage.setItem(`${SUBMISSIONS_KEY_PREFIX}${userId}`, firestoreSubmissions.toString())
            ]);
            
            setPoints(firestorePoints);
            setTotalSubmissions(firestoreSubmissions);
            setApprovedSubmissions(approvedCount);
            setIsPro(firestorePro);
            setLoading(false);
            return;
          } else {
            // User doc doesn't exist yet, but we can still show approved count
            setApprovedSubmissions(approvedCount);
          }
        } catch (firestoreError) {
          console.log('Firestore not available, using local storage:', firestoreError);
        }
      }
      
      // Fallback to AsyncStorage if Firestore fails or no data exists
      const [pointsStr, submissionsStr] = await Promise.all([
        AsyncStorage.getItem(`${POINTS_KEY_PREFIX}${userId}`),
        AsyncStorage.getItem(`${SUBMISSIONS_KEY_PREFIX}${userId}`)
      ]);
      
      setPoints(pointsStr ? parseInt(pointsStr, 10) : 0);
      setTotalSubmissions(submissionsStr ? parseInt(submissionsStr, 10) : 0);
    } catch (error) {
      console.error('Error loading user points:', error);
    } finally {
      setLoading(false);
    }
  };

  const addPoints = async (amount: number) => {
    if (!user) return;
    
    try {
      const newPoints = points + amount;
      const newSubmissions = totalSubmissions + 1;
      
      // Save to AsyncStorage
      await Promise.all([
        AsyncStorage.setItem(`${POINTS_KEY_PREFIX}${user.uid}`, newPoints.toString()),
        AsyncStorage.setItem(`${SUBMISSIONS_KEY_PREFIX}${user.uid}`, newSubmissions.toString())
      ]);
      
      // Also sync to Firestore for admin visibility
      if (user.email) {
        try {
          const userDocRef = doc(db, 'user_points', user.email);
          await setDoc(userDocRef, {
            userEmail: user.email,
            points: newPoints,
            totalSubmissions: newSubmissions,
            lastUpdated: new Date().toISOString()
          }, { merge: true });
        } catch (firestoreError) {
          console.log('Failed to sync to Firestore:', firestoreError);
          // Continue even if Firestore sync fails
        }
      }
      
      setPoints(newPoints);
      setTotalSubmissions(newSubmissions);
    } catch (error) {
      console.error('Error adding points:', error);
    }
  };

  const resetPoints = async () => {
    if (!user) return;
    
    try {
      await Promise.all([
        AsyncStorage.removeItem(`${POINTS_KEY_PREFIX}${user.uid}`),
        AsyncStorage.removeItem(`${SUBMISSIONS_KEY_PREFIX}${user.uid}`)
      ]);
      
      setPoints(0);
      setTotalSubmissions(0);
    } catch (error) {
      console.error('Error resetting points:', error);
    }
  };

  const refreshPoints = async () => {
    if (!user) return;
    console.log('Manual refresh points triggered');
    await loadUserData(user.uid);
  };

  return (
    <UserPointsContext.Provider value={{ points, totalSubmissions, approvedSubmissions, isPro, addPoints, resetPoints, refreshPoints, loading }}>
      {children}
    </UserPointsContext.Provider>
  );
}

export function useUserPoints() {
  const context = useContext(UserPointsContext);
  if (!context) {
    throw new Error('useUserPoints must be used within a UserPointsProvider');
  }
  return context;
}

