# Fix Google OAuth Error 400 for iOS

## Problem
Error: "Custom scheme URIs are not allowed for 'WEB' client type"
- This happens because iOS native apps cannot use WEB client IDs with custom scheme redirect URIs
- iOS needs its own iOS OAuth client ID

## Solution
Create an iOS OAuth client ID in Google Cloud Console and use it for iOS platform.

## Steps to Fix

### 1. Create iOS OAuth Client ID in Google Cloud Console

**Option A: Direct Link (Easiest)**
1. Go directly to: https://console.cloud.google.com/apis/credentials?project=mm-kr-expo
2. If prompted, select your project: **mm-kr-expo**

**Option B: Manual Navigation**
1. Visit: https://console.cloud.google.com/
2. Select your project: **mm-kr-expo** (from the project dropdown at the top)
3. Look for the **☰ (hamburger menu)** icon in the top-left corner and click it
4. In the left sidebar menu, scroll down and find:
   - **APIs & Services** (or **"APIs & Services"**)
   - Click on it to expand
   - Then click **Credentials**

**Option C: Via Firebase Console (Alternative)**
1. Go to: https://console.firebase.google.com/
2. Select your project: **mm-kr-expo**
3. Click the **⚙️ (gear icon)** → **Project Settings**
4. Scroll down to **"Your apps"** section
5. Click on your **iOS app** (or add one if it doesn't exist)
6. Look for **"OAuth redirect URIs"** or click **"Add OAuth client"**
7. OR click the link that says **"Open Google Cloud Console"** to go to credentials

**After reaching Credentials page:**
1. Click **+ CREATE CREDENTIALS** button (usually at the top)
2. Select **OAuth client ID** from the dropdown
3. If prompted, configure the OAuth consent screen first (click **Configure consent screen** and follow the prompts)
4. Select **iOS** as the application type
5. Enter:
   - **Name**: `mm-kr-ios-client` (or any name you prefer)
   - **Bundle ID**: `com.aksp17.app`
6. Click **Create**
7. **Copy the Client ID** that is generated (it will look like: `xxxxx-xxxxx.apps.googleusercontent.com`)

**Note:** If you don't see "OAuth client ID" option, you may need to:
- First configure the OAuth consent screen (it will prompt you)
- Make sure you have the right permissions (Project Editor or Owner role)

### 2. Update the Code

The code has been updated to use platform-specific client IDs:
- **iOS**: Uses iOS OAuth client ID (you need to replace the placeholder)
- **Android/Web**: Uses web client ID

**Find this line in `app/data/AuthContext.tsx`:**
```typescript
const iosClientId = '974504645463-99858dmqbprhd2r4ao4toc997mecgrm5.apps.googleusercontent.com';
```

**Replace it with your iOS OAuth Client ID** from step 1.

### 3. Rebuild iOS App
After updating the client ID, rebuild your iOS app:
```bash
cd app
npx expo run:ios
```

## What Changed in Code
- Added `Platform.OS` detection
- Uses iOS client ID for iOS platform
- Uses web client ID for Android/Web platforms
- Removed the `path: 'oauth'` parameter from redirect URI
- Added console logs to verify platform and client ID being used

## Verify
After rebuilding, check the console logs:
```
📱 Platform: ios
🔑 Using Client ID: [your-ios-client-id]
🔗 Redirect URI: com.aksp17.app://
```

## Important Notes
- **iOS OAuth Client ID** is different from Firebase iOS client ID
- The iOS OAuth client must be created in **Google Cloud Console** (not Firebase Console)
- The Bundle ID must match exactly: `com.aksp17.app`
- You don't need to register redirect URIs for iOS OAuth clients (they use the bundle ID automatically)

