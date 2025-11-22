import React, { createContext, useContext, useState, useEffect } from 'react';
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
import * as Crypto from 'expo-crypto';

const AUTH_USER_KEY = '@auth_user_persisted';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string, nationality: string, birthdate: string, koreanLevel: string, position: string) => Promise<void>;
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

  const signUp = async (email: string, password: string, name: string, nationality: string, birthdate: string, koreanLevel: string, position: string) => {
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
              position: position
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

  const signInWithGoogle = async () => {
    try {
      // Use different client IDs based on platform
      // iOS needs an iOS OAuth client ID (not web client)
      // Web/Android can use the web client ID
      const webClientId = '974504645463-9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com';
      // iOS Client ID - TODO: Replace with your iOS OAuth Client ID from Google Cloud Console
      // Create iOS OAuth client at: https://console.cloud.google.com/apis/credentials
      // Application type: iOS, Bundle ID: com.aksp17.app
      const iosClientId = '974504645463-u6jqjmks8h24bucsb5b9hkma493utcto.apps.googleusercontent.com';
      
      // Select client ID based on platform
      const clientId = Platform.OS === 'ios' ? iosClientId : webClientId;
      
      console.log('📱 Platform:', Platform.OS);
      console.log('🔑 Using Client ID:', clientId);
      
      // Create a random state for security
      const state = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        Math.random().toString()
      );

      // Request Google OAuth
      // For iOS, use custom scheme
      // For Android/Web, also use custom scheme (Android supports it, web will use expo proxy)
      const redirectUri = AuthSession.makeRedirectUri({
        scheme: 'com.aksp17.app',
      });
      
      console.log('🔗 Redirect URI:', redirectUri);
      
      const request = new AuthSession.AuthRequest({
        clientId: clientId,
        scopes: ['openid', 'profile', 'email'],
        responseType: AuthSession.ResponseType.IdToken,
        redirectUri: redirectUri,
        state: state,
        // Remove code challenge for IdToken response type
        usePKCE: false,
      });

      const discovery = {
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenEndpoint: 'https://oauth2.googleapis.com/token',
        revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
      };

      const result = await request.promptAsync(discovery);

      if (result.type === 'success') {
        const { id_token } = result.params;
        
        if (!id_token) {
          throw new Error('No ID token received from Google');
        }

        // Create Firebase credential from Google ID token
        const credential = GoogleAuthProvider.credential(id_token);
        
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
      } else {
        throw new Error('Google sign-in was cancelled or failed');
      }
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