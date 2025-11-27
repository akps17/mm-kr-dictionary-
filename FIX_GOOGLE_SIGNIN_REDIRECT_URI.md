# Fix Google Sign-In Redirect URI Mismatch Error

## Problem
Error: **"Error 400: redirect_uri_mismatch"**

This happens when the redirect URI used by your app doesn't match what's configured in Google Cloud Console.

## Solution Steps

### ⚠️ IMPORTANT: Based on the Error Message

The error shows: `redirect_uri=http://localhost:8081`

This is the **Expo development server** redirect URI. You need to add this to your Google OAuth client.

### Step 1: Find Your Redirect URI

1. Open your app and try to sign in with Google
2. Check the console logs - you should see:
   ```
   🔗 Redirect URI: [some URI here]
   ⚠️ IMPORTANT: Add this exact redirect URI to your Google OAuth client in Google Cloud Console!
   ```

3. **Copy the exact redirect URI** from the console logs

Common redirect URI formats:
- **Web (Expo Go)**: `https://auth.expo.io/@your-username/your-slug`
- **Web (Standalone)**: `com.aksp17.app://oauth` or `https://your-domain.com/oauth`
- **iOS**: `com.aksp17.app://oauth`
- **Android**: `com.aksp17.app://oauth`

### Step 2: Add Redirect URI to Google Cloud Console

1. Go to [Google Cloud Console - Credentials](https://console.cloud.google.com/apis/credentials?project=mm-kr-expo)
2. Select your project: **mm-kr-expo** (if not already selected)
3. Find your **OAuth 2.0 Client ID**:
   - For **Web**: Look for the client ID ending in `...9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com`
   - For **iOS**: Look for the client ID ending in `...u6jqjmks8h24bucsb5b9hkma493utcto.apps.googleusercontent.com`
4. Click on the **Web client ID** to edit it (the one ending in `...9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com`)
5. Under **"Authorized redirect URIs"**, click **"+ ADD URI"**
6. Add these redirect URIs (one at a time):
   - `http://localhost:8081` ← **This is the one causing the error!**
   - `com.aksp17.app://oauth` (for standalone apps)
   - `https://auth.expo.io/@your-username/your-slug` (if using Expo Go - check console logs for exact value)
7. Click **"SAVE"** after adding each URI

### Step 3: For Web Client (if using web)

If you're testing on web, you need to add the redirect URI to the **Web client**:

1. Find the Web client ID: `974504645463-9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com`
2. Add these redirect URIs:
   - `https://auth.expo.io/@your-username/your-slug` (if using Expo Go)
   - `com.aksp17.app://oauth` (for standalone web)
   - `http://localhost:19006` (for local development)
   - `https://your-vercel-domain.vercel.app/oauth` (if deployed on Vercel)

### Step 4: For iOS Client (if using iOS)

For iOS, you typically don't need to add redirect URIs manually - the bundle ID (`com.aksp17.app`) is used automatically. However, if you're still getting errors:

1. Make sure your iOS OAuth client has:
   - **Application type**: iOS
   - **Bundle ID**: `com.aksp17.app` (must match exactly)

### Step 5: Test Again

1. Close and restart your app
2. Try signing in with Google again
3. The error should be resolved

## Quick Check: What Platform Are You Using?

Run this command to see what redirect URI is being generated:
```bash
# The app will log the redirect URI in the console when you try to sign in
```

Or check the console output when you click "Sign in with Google" - it will show:
```
📱 Platform: [ios/android/web]
🔑 Using Client ID: [client-id]
🔗 Redirect URI: [redirect-uri]
```

## Common Issues

### Issue 1: Multiple Redirect URIs
- Make sure you add **all** redirect URIs that might be used:
  - Development (localhost)
  - Production (your domain)
  - Expo Go (if testing)

### Issue 2: Trailing Slashes
- Make sure the redirect URI matches **exactly** (including trailing slashes or lack thereof)
- `com.aksp17.app://oauth` ≠ `com.aksp17.app://oauth/`

### Issue 3: HTTP vs HTTPS
- For web, make sure you use the correct protocol
- `http://localhost:19006` for local development
- `https://your-domain.com` for production

## Still Having Issues?

1. Check the exact error message in the browser/app console
2. Verify the redirect URI in the console logs matches what you added
3. Make sure you saved the changes in Google Cloud Console
4. Wait a few minutes for changes to propagate
5. Clear your app cache and try again

## Need Help?

If you're still stuck, share:
1. The exact redirect URI from console logs
2. The platform you're testing on (iOS/Android/Web)
3. The error message you're seeing

