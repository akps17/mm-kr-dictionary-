import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Platform } from 'react-native';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  signInWithCredential,
  GoogleAuthProvider,
  User 
} from 'firebase/auth';
import { auth } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

const AUTH_USER_KEY = '@auth_user_persisted';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string, nationality: string, birthdate: string, koreanLevel: string, position: string, gender: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signUp: async () => {},
  signIn: async () => {},
  signInWithGoogle: async () => {},
  logOut: async () => {},
  isAuthenticated: false,
} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Client IDs for different platforms
  const expoClientId = '974504645463-9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com'; // Web client ID
  const iosClientId = '974504645463-u6jqjmks8h24bucsb5b9hkma493utcto.apps.googleusercontent.com'; // iOS client ID
  const androidClientId = '974504645463-9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com'; // Can use web client for Android

  // Log the redirect URI for web development (only once)
  React.useEffect(() => {
    // For web, this will use the Expo proxy
    const redirectUri = AuthSession.makeRedirectUri({ 
      scheme: 'com.aksp17.app',
    });
    console.log('🔗 Redirect URI:', redirectUri);
    // Also log what would be used with proxy (for web development)
    if (Platform.OS === 'web') {
      console.log('⚠️ For web development, add this to Web client redirect URIs:', redirectUri);
      console.log('⚠️ Also add: http://localhost:8081 (Expo dev server)');
    }
  }, []);

  // Use Google provider from expo-auth-session
  // Note: The provider will automatically use the correct client ID based on platform
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: expoClientId, // Web/Expo client ID (used as default)
    iosClientId: iosClientId, // iOS-specific client ID
    androidClientId: androidClientId, // Android-specific client ID (can use web client)
    scopes: ['openid', 'profile', 'email'],
  });

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
          
          // Ensure user_points record exists (for admin panel visibility)
          // This catches users who signed up before the user_points creation was added
          if (firebaseUser.email) {
            try {
              const { db } = await import('./firebase');
              const { doc, setDoc, getDoc, serverTimestamp } = await import('firebase/firestore');
              const normalizedEmail = firebaseUser.email.trim().toLowerCase();
              const userDocRef = doc(db, 'user_points', normalizedEmail);
              const userDoc = await getDoc(userDocRef);
              
              if (!userDoc.exists()) {
                await setDoc(userDocRef, {
                  userEmail: normalizedEmail,
                  displayName: firebaseUser.displayName || '',
                  points: 0,
                  totalSubmissions: 0,
                  isPro: false,
                  topikUnlocked: false,
                  createdAt: serverTimestamp(),
                  lastUpdated: serverTimestamp(),
                  signInMethod: 'auto-created'
                });
                console.log('✅ Auto-created user_points record for existing user:', normalizedEmail);
              }
            } catch (firestoreError) {
              console.log('Note: Could not auto-create user_points record (non-critical):', firestoreError);
            }
          }
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

  const signUp = async (email: string, password: string, name: string, nationality: string, birthdate: string, koreanLevel: string, position: string, gender: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Update the user's profile with their name
      if (result.user) {
        await updateProfile(result.user, {
          displayName: name
        });
        // Force refresh the user object to get the updated profile
        setUser({ ...result.user });
        
        // Create user_points record for admin panel visibility
        // Use normalized email (lowercase) as document ID
        try {
          const { db } = await import('./firebase');
          const { doc, setDoc, getDoc, serverTimestamp } = await import('firebase/firestore');
          const normalizedEmail = email.trim().toLowerCase();
          const userDocRef = doc(db, 'user_points', normalizedEmail);
          const userDoc = await getDoc(userDocRef);
          
          if (!userDoc.exists()) {
            await setDoc(userDocRef, {
              userEmail: normalizedEmail,
              displayName: name,
              nationality: nationality,
              birthdate: birthdate,
              koreanLevel: parseInt(koreanLevel) || 1,
              position: position,
              gender: gender,
              points: 0,
              totalSubmissions: 0,
              isPro: false,
              topikUnlocked: false,
              createdAt: serverTimestamp(),
              lastUpdated: serverTimestamp(),
              signInMethod: 'email'
            });
            console.log('✅ Created user_points record for new user:', normalizedEmail);
          } else {
            // Update last sign-in time and user info
            await setDoc(userDocRef, {
              lastUpdated: serverTimestamp(),
              displayName: name,
              nationality: nationality,
              birthdate: birthdate,
              koreanLevel: parseInt(koreanLevel) || 1,
              position: position,
              gender: gender
            }, { merge: true });
            console.log('✅ Updated user_points record for existing user:', normalizedEmail);
          }
        } catch (firestoreError) {
          console.error('❌ Could not create user_points record:', firestoreError);
          // Non-critical error, continue
        }
      }
      console.log('User signed up successfully with name:', name);
    } catch (error: any) {
      console.error('Sign up error:', error.message);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Ensure user_points record exists (for admin panel visibility)
      if (userCredential.user && userCredential.user.email) {
        try {
          const { db } = await import('./firebase');
          const { doc, setDoc, getDoc, serverTimestamp } = await import('firebase/firestore');
          const normalizedEmail = userCredential.user.email.trim().toLowerCase();
          const userDocRef = doc(db, 'user_points', normalizedEmail);
          const userDoc = await getDoc(userDocRef);
          
          if (!userDoc.exists()) {
            await setDoc(userDocRef, {
              userEmail: normalizedEmail,
              displayName: userCredential.user.displayName || '',
              points: 0,
              totalSubmissions: 0,
              isPro: false,
              topikUnlocked: false,
              createdAt: serverTimestamp(),
              lastUpdated: serverTimestamp(),
              signInMethod: 'email'
            });
            console.log('✅ Created user_points record for existing user on sign-in:', normalizedEmail);
          } else {
            // Update last sign-in time
            await setDoc(userDocRef, {
              lastUpdated: serverTimestamp(),
              displayName: userCredential.user.displayName || ''
            }, { merge: true });
          }
        } catch (firestoreError) {
          console.log('Note: Could not update user_points record (non-critical):', firestoreError);
        }
      }
      
      console.log('User signed in successfully');
    } catch (error: any) {
      console.error('Sign in error:', error.message);
      throw error;
    }
  };

  const handleGoogleSignIn = useCallback(async (idToken: string) => {
    try {
      if (!idToken) {
        throw new Error('No ID token received from Google');
      }

      // Create Firebase credential from Google ID token
      const credential = GoogleAuthProvider.credential(idToken);
      
      // Sign in to Firebase with Google credential
      const userCredential = await signInWithCredential(auth, credential);
        
      // Create user_points record if new user (or update if exists)
        if (userCredential.user && userCredential.user.email) {
          try {
            const { db } = await import('./firebase');
            const { doc, setDoc, getDoc, serverTimestamp } = await import('firebase/firestore');
            const normalizedEmail = userCredential.user.email.trim().toLowerCase();
            const userDocRef = doc(db, 'user_points', normalizedEmail);
            const userDoc = await getDoc(userDocRef);
            
            if (!userDoc.exists()) {
              await setDoc(userDocRef, {
                userEmail: normalizedEmail,
                displayName: userCredential.user.displayName || '',
                points: 0,
                totalSubmissions: 0,
                isPro: false,
                topikUnlocked: false,
                createdAt: serverTimestamp(),
                lastUpdated: serverTimestamp(),
                signInMethod: 'google'
              });
              console.log('✅ Created user_points record for new Google user:', normalizedEmail);
            } else {
              // Update last sign-in time
              await setDoc(userDocRef, {
                lastUpdated: serverTimestamp(),
                displayName: userCredential.user.displayName || ''
              }, { merge: true });
              console.log('✅ Updated user_points record for existing Google user:', normalizedEmail);
            }
          } catch (firestoreError) {
            console.error('❌ Could not create/update user_points record:', firestoreError);
          }
        }
        
      console.log('User signed in with Google successfully');
    } catch (error: any) {
      console.error('Google sign-in error:', error.message);
      throw error;
    }
  }, []);

  // Handle Google OAuth response
  useEffect(() => {
    if (response?.type === 'success') {
      const idToken = response.params.id_token || response.params.idToken;
      if (idToken) {
        handleGoogleSignIn(idToken);
      } else {
        console.error('❌ No ID token in response params:', response.params);
      }
    } else if (response?.type === 'error') {
      console.error('❌ Google OAuth error:', response.error);
    }
  }, [response, handleGoogleSignIn]);

  const signInWithGoogle = async () => {
    try {
      console.log('📱 Platform:', Platform.OS);
      console.log('🚀 Starting Google OAuth flow...');
      
      if (!request) {
        throw new Error('Google OAuth request not initialized');
      }
      
      await promptAsync();
    } catch (error: any) {
      console.error('Google sign-in error:', error.message);
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
    signInWithGoogle,
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