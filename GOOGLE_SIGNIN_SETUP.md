# Google Sign-In Setup Guide

## Step 1: Add SHA-1 Fingerprint to Firebase

Your **SHA-1 fingerprint** is:
```
5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
```

### Instructions:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **mm-kr-expo**
3. Click the gear icon ⚙️ → **Project Settings**
4. Scroll down to **"Your apps"** section
5. Find your Android app: **mm_kr_android**
6. Click **"Add fingerprint"** or edit the app
7. Paste the SHA-1: `5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25`
8. Click **"Save"**

## Step 2: Download google-services.json

1. After adding the SHA-1, click **"Download google-services.json"** button
2. Save the file

## Step 3: Place google-services.json in Your Project

Place the downloaded `google-services.json` file in:
```
app/android/app/google-services.json
```

## Step 4: Update build.gradle Files

The build.gradle files need to include the Google Services plugin. Check if these are already added:

### In `app/android/build.gradle`:
Should have:
```gradle
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.4.0'
    }
}
```

### In `app/android/app/build.gradle`:
Should have at the bottom:
```gradle
apply plugin: 'com.google.gms.google-services'
```

## Step 5: Install Required Packages

Make sure you have the Google Sign-In package installed:
```bash
cd app
npm install @react-native-google-signin/google-signin
# or
yarn add @react-native-google-signin/google-signin
```

## Step 6: Test Google Sign-In

After completing all steps, rebuild your app:
```bash
cd app
npx expo run:android
```

## Notes:
- For **release builds**, you'll also need to add the release keystore SHA-1 fingerprint
- The SHA-1 above is for the **debug keystore** (development)
- Make sure the package name in Firebase matches: `com.aksp17.app`

