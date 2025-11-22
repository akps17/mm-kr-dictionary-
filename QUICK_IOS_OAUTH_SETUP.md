# Quick Guide: Create iOS OAuth Client ID

## Fastest Way (Direct Link)

**Click this link:**
👉 https://console.cloud.google.com/apis/credentials?project=mm-kr-expo

Then:
1. Click **+ CREATE CREDENTIALS** (blue button at top)
2. Select **OAuth client ID**
3. If you see "OAuth consent screen" warning, click **CONFIGURE CONSENT SCREEN** first:
   - User Type: **External** (unless you have Google Workspace)
   - App name: **Myanmar Korean Dictionary**
   - User support email: Your email
   - Developer contact: Your email
   - Click **SAVE AND CONTINUE** through the steps
   - Click **BACK TO DASHBOARD** when done
4. Now click **+ CREATE CREDENTIALS** → **OAuth client ID** again
5. Application type: **iOS**
6. Name: `mm-kr-ios-client`
7. Bundle ID: `com.aksp17.app`
8. Click **CREATE**
9. **Copy the Client ID** (the long string ending in `.apps.googleusercontent.com`)

## Update Your Code

Open `app/data/AuthContext.tsx` and find line ~141:
```typescript
const iosClientId = 'REPLACE_WITH_YOUR_IOS_OAUTH_CLIENT_ID.apps.googleusercontent.com';
```

Replace `REPLACE_WITH_YOUR_IOS_OAUTH_CLIENT_ID.apps.googleusercontent.com` with the Client ID you just copied.

## Alternative: Via Firebase Console

1. Go to: https://console.firebase.google.com/project/mm-kr-expo/settings/general
2. Scroll to **"Your apps"** section
3. If you see an iOS app, click on it
4. Look for **"OAuth 2.0 Client IDs"** section
5. Or click **"Add app"** → **iOS** → Bundle ID: `com.aksp17.app`
6. After adding, you'll see the OAuth Client ID listed

## Still Can't Find It?

Make sure you:
- Are logged into the correct Google account
- Have **Project Owner** or **Project Editor** permissions
- Are in the correct project: **mm-kr-expo**

If you're not the project owner, ask the project owner to:
1. Go to IAM & Admin → IAM
2. Add your email with **Editor** or **Owner** role

