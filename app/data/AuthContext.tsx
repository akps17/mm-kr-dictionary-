import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  User 
} from 'firebase/auth';
import { auth } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_USER_KEY = '@auth_user_persisted';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signUp: async () => {},
  signIn: async () => {},
  logOut: async () => {},
  isAuthenticated: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load persisted auth state on app start
  useEffect(() => {
    const loadPersistedAuth = async () => {
      try {
        const persistedEmail = await AsyncStorage.getItem(AUTH_USER_KEY);
        console.log('Checking for persisted auth:', persistedEmail);
      } catch (error) {
        console.error('Error loading persisted auth:', error);
      }
    };
    
    loadPersistedAuth();
  }, []);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
      
      // Persist the user's email when they're logged in
      if (firebaseUser) {
        try {
          await AsyncStorage.setItem(AUTH_USER_KEY, firebaseUser.email || '');
          console.log('✅ Auth state changed: Logged in as', firebaseUser.email, '(persisted to AsyncStorage)');
        } catch (error) {
          console.error('Failed to persist auth:', error);
        }
      } else {
        // Clear persisted auth when user logs out
        try {
          await AsyncStorage.removeItem(AUTH_USER_KEY);
          console.log('🔓 Auth state changed: Logged out (cleared from AsyncStorage)');
        } catch (error) {
          console.error('Failed to clear persisted auth:', error);
        }
      }
    });

    return unsubscribe;
  }, []);

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Update the user's profile with their name
      if (result.user) {
        await updateProfile(result.user, {
          displayName: name
        });
        // Force refresh the user object to get the updated profile
        setUser({ ...result.user });
      }
      console.log('User signed up successfully with name:', name);
    } catch (error: any) {
      console.error('Sign up error:', error.message);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');
    } catch (error: any) {
      console.error('Sign in error:', error.message);
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error: any) {
      console.error('Logout error:', error.message);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signUp,
    signIn,
    logOut,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}