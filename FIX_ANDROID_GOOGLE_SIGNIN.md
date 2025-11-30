# Fix Android Google Sign-In Error

## Problem
You're getting this error on Android:
```
Access blocked: Authorization Error
Custom scheme URIs are not allowed for 'WEB' client type.
Error 400: invalid_request
```

## Root Cause
Android is trying to use a custom scheme URI (`com.aksp17.app://oauth`) with the WEB client ID, but WEB clients only allow HTTP/HTTPS redirect URIs, not custom schemes.

## Solution: Create Android OAuth Client ID

### Step 1: Go to Google Cloud Console
1. Open [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: **mm-kr-expo**
3. Navigate to: **APIs & Services** → **Credentials**

### Step 2: Create Android OAuth Client
1. Click **"+ CREATE CREDENTIALS"** → **"OAuth client ID"**
2. Select **"Android"** as the application type
3. Fill in:
   - **Name**: `Myanmar Korean Dictionary - Android` (or any name you prefer)
   - **Package name**: `com.aksp17.app` (must match your app.json package name)
   - **SHA-1 certificate fingerprint**: 
     - For development: Get your debug keystore SHA-1
     - For production: Get your release keystore SHA-1
   
4. Click **"CREATE"**

### Step 3: Get Your SHA-1 Certificate Fingerprint

#### For Development (Debug Build):
```bash
# On macOS/Linux:
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

# On Windows:
keytool -list -v -keystore %USERPROFILE%\.android\debug.keystore -alias androiddebugkey -storepass android -keypass android
```

Look for the **SHA-1** value in the output (it looks like: `AA:BB:CC:DD:EE:FF:...`)

#### For Production (Release Build):
If you're using EAS Build, you can get the SHA-1 from:
- EAS Build dashboard → Your build → Download credentials
- Or generate a keystore and get its SHA-1

### Step 4: Update Your Code

After creating the Android OAuth client, you'll get a new Client ID that looks like:
```
974504645463-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com
```

Update `app/data/AuthContext.tsx`:

```typescript
const androidClientId = 'YOUR_NEW_ANDROID_CLIENT_ID_HERE.apps.googleusercontent.com';
```

### Step 5: Verify Redirect URI

The Android client will automatically use the custom scheme:
- **Redirect URI**: `com.aksp17.app://oauth`

This is automatically configured when you create an Android OAuth client with the correct package name.

### Step 6: Test

1. Rebuild your Android app
2. Try signing in with Google
3. It should work now!

## Important Notes

1. **Different Clients for Different Platforms**:
   - **Web Client**: For web app (uses HTTP/HTTPS redirect URIs)
   - **iOS Client**: For iOS app (uses custom scheme)
   - **Android Client**: For Android app (uses custom scheme) ← **YOU NEED THIS**

2. **SHA-1 Fingerprint**:
   - You need to add the SHA-1 fingerprint for each keystore you use
   - Development builds use the debug keystore
   - Production builds use your release keystore
   - You can add multiple SHA-1 fingerprints to the same Android client

3. **Testing**:
   - After creating the Android client, wait a few minutes for changes to propagate
   - Make sure you're using the correct SHA-1 for your build type (debug vs release)

## Current Status

Currently, your `androidClientId` is set to the same as `expoClientId` (WEB client), which causes the error. Once you create the Android client and update the code, it should work.

