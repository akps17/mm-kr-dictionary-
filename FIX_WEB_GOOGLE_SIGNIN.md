# Fix Google Sign-In for Web Version

## Problem
Google sign-in works on mobile (iOS/Android) but doesn't work on web.

## Solution
Add the correct redirect URIs to your Google OAuth Web client in Google Cloud Console.

## Steps to Fix

### 1. Check Console Logs
When you run the web app, check the browser console. You should see logs like:
```
🌐 Web Platform Detected
🔗 Redirect URI (custom scheme): [some URI]
🔗 Current Origin: [your origin]
⚠️ IMPORTANT: Add these to Web client redirect URIs...
```

### 2. Add Redirect URIs to Google Cloud Console

1. Go to [Google Cloud Console - Credentials](https://console.cloud.google.com/apis/credentials?project=mm-kr-expo)
2. Find your **Web OAuth 2.0 Client ID** (ending in `...9vcp2gp4qpug7di56fqfp3fgtgt0onmt.apps.googleusercontent.com`)
3. Click to **edit** it
4. Under **"Authorized redirect URIs"**, click **"+ ADD URI"**
5. Add these redirect URIs (one at a time):

   **For Development:**
   - `http://localhost:8081` (Expo dev server)
   - `http://localhost:19006` (Expo web default port)
   - `com.aksp17.app://` (custom scheme)
   - The exact redirect URI shown in console logs

   **For Production (if deployed):**
   - `https://your-domain.com` (your production domain)
   - `https://your-domain.vercel.app` (if using Vercel)

6. Click **"SAVE"** after adding each URI

### 3. Common Redirect URIs for Web

Based on the code, these are the redirect URIs that might be used:

- **Custom Scheme**: `com.aksp17.app://` or `com.aksp17.app://oauth`
- **Local Development**: 
  - `http://localhost:8081`
  - `http://localhost:19006`
  - `http://localhost:3000` (if using different port)
- **Current Origin**: Whatever `window.location.origin` is (check console logs)

### 4. Test Again

1. Clear browser cache/cookies
2. Restart your Expo web server
3. Try signing in with Google again
4. Check console logs for any errors

### 5. Debugging

If it still doesn't work, check the console for:

**Success indicators:**
- `📋 OAuth Response received: { type: 'success' }`
- `✅ ID token received, signing in to Firebase...`
- `User signed in with Google successfully`

**Error indicators:**
- `❌ Google OAuth error:` - Check the error message
- `❌ No ID token in response params:` - Redirect URI mismatch
- `Error 400: redirect_uri_mismatch` - Need to add the redirect URI

### 6. Verify Redirect URI

The code now logs the exact redirect URI being used. Make sure that **exact URI** is added to Google Cloud Console.

## Important Notes

- **Redirect URIs must match exactly** (including protocol, port, path)
- Changes in Google Cloud Console may take 1-2 minutes to propagate
- For web, the redirect URI might be different from mobile
- Check browser console logs to see the exact redirect URI being used

## Quick Checklist

- [ ] Checked console logs for redirect URI
- [ ] Added `http://localhost:8081` to Web client redirect URIs
- [ ] Added `http://localhost:19006` to Web client redirect URIs
- [ ] Added custom scheme URI (`com.aksp17.app://`) to Web client redirect URIs
- [ ] Added current origin (from console logs) to Web client redirect URIs
- [ ] Saved changes in Google Cloud Console
- [ ] Waited 1-2 minutes for changes to propagate
- [ ] Cleared browser cache
- [ ] Tested sign-in again

