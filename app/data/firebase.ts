import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOT1jC27f26f3BIW-yFcgHTLGdEWeiopQ",
  authDomain: "mm-kr-expo.firebaseapp.com",
  projectId: "mm-kr-expo",
  storageBucket: "mm-kr-expo.firebasestorage.app",
  messagingSenderId: "974504645463",
  appId: "1:974504645463:web:0cd68a7b52ea2bcddb6412"
};

console.log('Firebase initializing with config:', firebaseConfig.projectId);

export const app = initializeApp(firebaseConfig);

// Initialize Auth with React Native persistence (keeps user logged in)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

// Add error handling for auth
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User authenticated:', user.email);
  } else {
    console.log('User not authenticated');
  }
}, (error) => {
  console.error('Auth state change error:', error);
});

console.log('Firebase Auth and Firestore initialized successfully');

