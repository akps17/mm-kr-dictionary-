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

type UserProfileData = {
  nationality?: string;
  birthdate?: string;
  koreanLevel?: string;
  position?: string;
  gender?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  profileComplete: boolean;
  checkProfileComplete: () => Promise<boolean>;
  updateUserProfile: (profileData: UserProfileData) => Promise<void>;
  signUp: (email: string, password: string, name: string, nationality: string, birthdate: string, koreanLevel: string, position: string, gender: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  profileComplete: false,
  checkProfileComplete: async () => false,
  updateUserProfile: async () => {},
  signUp: async () => {},
  signIn: async () => {},
  signInWithGoogle: async () => {},
  logOut: async () => {},
  isAuthenticated: false,
} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileComplete, setProfileComplete] = useState(false);

  // Client IDs for different platforms
  const expoClientId = '974504645463-9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com'; // Web client ID
  const iosClientId = '974504645463-u6jqjmks8h24bucsb5b9hkma493utcto.apps.googleusercontent.com'; // iOS client ID
  const androidClientId = '974504645463-q7kte26c5r42h1v1h7k6ikq3gr8vbn14.apps.googleusercontent.com'; // Android client ID

  // Log the redirect URI for web development (only once)
  // These logs will appear in both browser console AND terminal when running expo start --web
  React.useEffect(() => {
    if (Platform.OS === 'web') {
      // For web, get the actual redirect URI that will be used
      const redirectUri = AuthSession.makeRedirectUri({ 
        scheme: 'com.aksp17.app',
      });
      const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
      const currentUrl = typeof window !== 'undefined' ? window.location.href.split('?')[0] : '';
      
      // Use console.log - these will appear in terminal when running expo start --web
      console.log('═══════════════════════════════════════════════════════');
      console.log('🌐 WEB PLATFORM DETECTED - GOOGLE SIGN-IN CONFIG');
      console.log('═══════════════════════════════════════════════════════');
      console.log('🔗 Redirect URI (custom scheme):', redirectUri);
      console.log('🔗 Current Origin:', currentOrigin);
      console.log('🔗 Current URL:', currentUrl);
      console.log('');
      console.log('⚠️  IMPORTANT: Add these to Web client redirect URIs in Google Cloud Console:');
      console.log('   1. ' + redirectUri);
      if (currentOrigin && currentOrigin !== redirectUri) {
        console.log('   2. ' + currentOrigin);
      }
      console.log('   3. http://localhost:8081 (Expo dev server)');
      console.log('   4. http://localhost:19006 (Expo web default)');
      console.log('   5. ' + currentUrl + ' (current page URL)');
      console.log('═══════════════════════════════════════════════════════');
    } else {
      const redirectUri = AuthSession.makeRedirectUri({ 
        scheme: 'com.aksp17.app',
      });
      console.log('🔗 Redirect URI:', redirectUri);
    }
  }, []);

  // Use Google provider from expo-auth-session
  // Note: The provider will automatically use the correct client ID based on platform
  // For web, expo-auth-session should use redirect flow automatically
  const redirectUri = AuthSession.makeRedirectUri({
    scheme: 'com.aksp17.app',
  });
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: expoClientId, // Web/Expo client ID (used as default)
    iosClientId: iosClientId, // iOS-specific client ID
    androidClientId: androidClientId, // Android-specific client ID (can use web client)
    scopes: ['openid', 'profile', 'email'],
    redirectUri: redirectUri, // Explicitly set redirect URI for all platforms
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
              // Update last sign-in time and ensure signInMethod is set
              await setDoc(userDocRef, {
                lastUpdated: serverTimestamp(),
                displayName: userCredential.user.displayName || '',
                signInMethod: 'google' // Ensure signInMethod is set for Google users
              }, { merge: true });
              console.log('✅ Updated user_points record for existing Google user:', normalizedEmail);
            }
          } catch (firestoreError) {
            console.error('❌ Could not create/update user_points record:', firestoreError);
          }
        }
        
      console.log('');
      console.log('═══════════════════════════════════════════════════════');
      console.log('✅ GOOGLE SIGN-IN SUCCESSFUL!');
      console.log('═══════════════════════════════════════════════════════');
        console.log('User signed in with Google successfully');
      console.log('Email:', userCredential.user.email);
      console.log('Display Name:', userCredential.user.displayName);
      console.log('═══════════════════════════════════════════════════════');
      console.log('');
    } catch (error: any) {
      console.error('Google sign-in error:', error.message);
      throw error;
    }
  }, []);

  // Handle Google OAuth response
  // These logs will appear in terminal when running expo start --web
  useEffect(() => {
    if (!response) {
      // On web, also check URL parameters in case response wasn't captured
      if (Platform.OS === 'web' && typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const idToken = urlParams.get('id_token');
        const error = urlParams.get('error');
        
        if (idToken) {
          console.log('');
          console.log('═══════════════════════════════════════════════════════');
          console.log('📋 OAUTH RESPONSE FOUND IN URL PARAMETERS');
          console.log('═══════════════════════════════════════════════════════');
          console.log('✅ ID token found in URL, signing in to Firebase...');
          handleGoogleSignIn(idToken);
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
        } else if (error) {
          console.error('❌ OAuth error in URL:', error);
          console.error('Error description:', urlParams.get('error_description'));
        }
      }
      return;
    }
    
    console.log('');
    console.log('═══════════════════════════════════════════════════════');
    console.log('📋 OAUTH RESPONSE RECEIVED');
    console.log('═══════════════════════════════════════════════════════');
    console.log('Response type:', response.type);
    console.log('Platform:', Platform.OS);
    console.log('Full response object:', JSON.stringify(response, null, 2));
    
    if (response.type === 'success') {
      const params = (response as any).params;
      const idToken = params?.id_token || params?.idToken;
      if (idToken) {
        console.log('✅ ID token received!');
        console.log('🔐 Signing in to Firebase...');
        handleGoogleSignIn(idToken);
      } else {
        console.error('❌ No ID token in response params');
        console.error('Response params:', params);
        console.error('Full response:', JSON.stringify(response, null, 2));
      }
    } else if (response.type === 'error') {
      const errorResponse = response as any;
      console.error('❌ Google OAuth error occurred');
      console.error('Error:', errorResponse.error);
      console.error('Error code:', errorResponse.errorCode);
      console.error('Full error response:', JSON.stringify(response, null, 2));
    } else if (response.type === 'dismiss' || response.type === 'cancel') {
      console.log('ℹ️  User dismissed/cancelled the OAuth flow');
    }
    console.log('═══════════════════════════════════════════════════════');
    console.log('');
  }, [response, handleGoogleSignIn]);

  // Check URL parameters on page load for OAuth response (web redirect flow)
  // This handles the case when Google redirects back with the token in the URL
  // Google OAuth can return tokens in either query params (?id_token=...) or hash fragment (#id_token=...)
  useEffect(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined' && handleGoogleSignIn) {
      // Check both query parameters and hash fragment
      const queryParams = new URLSearchParams(window.location.search);
      const hashParams = new URLSearchParams(window.location.hash.substring(1)); // Remove the # symbol
      
      // Try query params first, then hash fragment
      const idToken = queryParams.get('id_token') || hashParams.get('id_token');
      const error = queryParams.get('error') || hashParams.get('error');
      const state = queryParams.get('state') || hashParams.get('state');
      
      if (idToken || error) {
        console.log('');
        console.log('═══════════════════════════════════════════════════════');
        console.log('🔍 CHECKING URL FOR OAUTH RESPONSE (PAGE LOAD)');
        console.log('═══════════════════════════════════════════════════════');
        console.log('Current URL:', window.location.href);
        console.log('Query params:', window.location.search);
        console.log('Hash fragment:', window.location.hash);
        console.log('URL params found:', { idToken: !!idToken, error, state });
        
        // Verify state parameter for security (if we stored it)
        if (idToken && state) {
          const storedState = sessionStorage.getItem('oauth_state');
          if (storedState && storedState !== state) {
            console.error('❌ State parameter mismatch! Possible CSRF attack.');
            console.error('Expected state:', storedState);
            console.error('Received state:', state);
            const cleanUrl = window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
            return;
          }
          // Clean up stored state
          sessionStorage.removeItem('oauth_state');
          sessionStorage.removeItem('oauth_nonce');
        }
        
        if (idToken) {
          console.log('✅ ID token found in URL! Processing sign-in...');
          console.log('🔐 Token length:', idToken.length);
          handleGoogleSignIn(idToken);
          // Clean up URL to remove OAuth parameters (both query and hash)
          const cleanUrl = window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
          console.log('🧹 Cleaned up URL parameters');
        } else if (error) {
          console.error('❌ OAuth error in URL:', error);
          const errorDesc = queryParams.get('error_description') || hashParams.get('error_description');
          console.error('Error description:', errorDesc);
          // Clean up stored state
          sessionStorage.removeItem('oauth_state');
          sessionStorage.removeItem('oauth_nonce');
          // Clean up URL
          const cleanUrl = window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }
        console.log('═══════════════════════════════════════════════════════');
        console.log('');
      }
    }
  }, [handleGoogleSignIn]);

  const signInWithGoogle = async () => {
    try {
      console.log('');
      console.log('═══════════════════════════════════════════════════════');
      console.log('🚀 STARTING GOOGLE OAUTH FLOW');
      console.log('═══════════════════════════════════════════════════════');
      console.log('📱 Platform:', Platform.OS);
      
      if (!request) {
        throw new Error('Google OAuth request not initialized');
      }
      
      if (Platform.OS === 'web') {
        console.log('🌐 Web platform detected');
        const redirectUri = AuthSession.makeRedirectUri({ 
          scheme: 'com.aksp17.app',
        });
        console.log('🔗 Using redirect URI:', redirectUri);
        console.log('⚠️  Make sure this redirect URI is added to Google Cloud Console!');
        
        // For web, manually construct OAuth URL and redirect to avoid popup issues
        // This will do a full page redirect instead of opening a popup
        if (request && typeof window !== 'undefined') {
          try {
            // Generate a random state and nonce for security
            const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            const nonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            
            // Store state in sessionStorage to verify on return
            sessionStorage.setItem('oauth_state', state);
            sessionStorage.setItem('oauth_nonce', nonce);
            
            // Manually construct Google OAuth URL
            const params = new URLSearchParams({
              client_id: expoClientId,
              redirect_uri: redirectUri,
              response_type: 'id_token',
              scope: 'openid profile email',
              nonce: nonce,
              state: state,
            });
            
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
            console.log('🔗 Generated OAuth URL');
            console.log('🔄 Redirecting to Google OAuth (full page redirect, not popup)...');
            console.log('📝 After Google sign-in, you will be redirected back to:', redirectUri);
            console.log('📝 The response will be processed automatically when you return');
            console.log('═══════════════════════════════════════════════════════');
            console.log('');
            
            // Use window.location.href to redirect (full page redirect, not popup)
            window.location.href = authUrl;
            return; // Don't continue, the page will redirect
          } catch (urlError) {
            console.error('❌ Error generating auth URL:', urlError);
            // Fall back to promptAsync if URL generation fails
          }
        }
      }
      
      // For mobile (iOS/Android), use normal popup flow
      if (Platform.OS === 'android') {
        const androidRedirectUri = AuthSession.makeRedirectUri({
          scheme: 'com.aksp17.app',
        });
        console.log('🤖 Android platform detected');
        console.log('🔗 Android redirect URI:', androidRedirectUri);
        console.log('⚠️  IMPORTANT: You need to create an Android OAuth client ID in Google Cloud Console');
        console.log('⚠️  The Android client must use package name: com.aksp17.app');
        console.log('⚠️  The Android client will automatically use custom scheme: com.aksp17.app://oauth');
        console.log('⚠️  DO NOT use the WEB client ID for Android - it does not allow custom schemes');
      }
      console.log('⏳ Calling promptAsync()...');
      await promptAsync();
      
      console.log('✅ promptAsync() completed');
      // Note: For web redirect flow, we won't reach here because window.location.href redirects
      // The response will be handled by the URL parameter check useEffect when the page loads back
    } catch (error: any) {
      console.error('');
      console.error('═══════════════════════════════════════════════════════');
      console.error('❌ GOOGLE SIGN-IN ERROR');
      console.error('═══════════════════════════════════════════════════════');
      console.error('Error message:', error.message);
      if (Platform.OS === 'web') {
        console.error('🌐 Web-specific error details:', error);
        // If it's a COOP error, suggest using redirect flow
        if (error.message?.includes('Cross-Origin-Opener-Policy')) {
          console.error('💡 This error is due to browser security policy.');
          console.error('💡 The redirect flow should work if redirect URI is configured in Google Cloud Console.');
        }
      }
      console.error('═══════════════════════════════════════════════════════');
      throw error;
    }
  };

  const checkProfileComplete = useCallback(async (): Promise<boolean> => {
    if (!user?.email) return false;
    
    try {
      const { db } = await import('./firebase');
      const { doc, getDoc } = await import('firebase/firestore');
      const normalizedEmail = user.email.trim().toLowerCase();
      const userDocRef = doc(db, 'user_points', normalizedEmail);
      const userDoc = await getDoc(userDocRef);
      
      if (!userDoc.exists()) return false;
      
      const data = userDoc.data();
      const hasAllFields = !!(
        data.nationality &&
        data.birthdate &&
        data.koreanLevel &&
        data.position &&
        data.gender
      );
      
      setProfileComplete(hasAllFields);
      return hasAllFields;
    } catch (error) {
      console.error('Error checking profile completeness:', error);
      return false;
    }
  }, [user]);

  const updateUserProfile = useCallback(async (profileData: UserProfileData) => {
    if (!user?.email) {
      throw new Error('User must be logged in to update profile');
    }

    try {
      const { db } = await import('./firebase');
      const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const normalizedEmail = user.email.trim().toLowerCase();
      const userDocRef = doc(db, 'user_points', normalizedEmail);
      
      await setDoc(userDocRef, {
        ...profileData,
        koreanLevel: profileData.koreanLevel ? parseInt(profileData.koreanLevel) : undefined,
        lastUpdated: serverTimestamp(),
      }, { merge: true });
      
      // Recheck profile completeness
      await checkProfileComplete();
      
      console.log('✅ User profile updated successfully');
    } catch (error: any) {
      console.error('❌ Error updating user profile:', error);
      throw error;
    }
  }, [user, checkProfileComplete]);

  // Check profile completeness when user changes
  useEffect(() => {
    if (user && !loading) {
      checkProfileComplete();
    }
  }, [user, loading, checkProfileComplete]);

  const logOut = async () => {
    try {
      await signOut(auth);
      setProfileComplete(false);
      console.log('User logged out');
    } catch (error: any) {
      console.error('Logout error:', error.message);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    profileComplete,
    checkProfileComplete,
    updateUserProfile,
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