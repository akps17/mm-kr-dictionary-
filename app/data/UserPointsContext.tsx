import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from './AuthContext';

type UserPointsContextType = {
  points: number;
  totalSubmissions: number;
  addPoints: (amount: number) => Promise<void>;
  resetPoints: () => Promise<void>;
  loading: boolean;
};

const POINTS_KEY_PREFIX = 'user_points_';
const SUBMISSIONS_KEY_PREFIX = 'user_submissions_';

const UserPointsContext = createContext<UserPointsContextType>({
  points: 0,
  totalSubmissions: 0,
  addPoints: async () => {},
  resetPoints: async () => {},
  loading: true,
});

export function UserPointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(0);
  const [totalSubmissions, setTotalSubmissions] = useState(0);
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
      setLoading(false);
    }
  }, [user]);

  const loadUserData = async (userId: string) => {
    try {
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
      
      await Promise.all([
        AsyncStorage.setItem(`${POINTS_KEY_PREFIX}${user.uid}`, newPoints.toString()),
        AsyncStorage.setItem(`${SUBMISSIONS_KEY_PREFIX}${user.uid}`, newSubmissions.toString())
      ]);
      
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

  return (
    <UserPointsContext.Provider value={{ points, totalSubmissions, addPoints, resetPoints, loading }}>
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

