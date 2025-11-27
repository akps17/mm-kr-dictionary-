# Update OAuth Consent Screen to Show "Myanmar Korean Dictionary"

## Problem
The Google sign-in consent screen shows "Sign in to project-974504645463" instead of "Myanmar Korean Dictionary" or "mm-kr".

## Solution
Configure the OAuth consent screen in Google Cloud Console.

## Steps

### 1. Go to OAuth Consent Screen
1. Visit: [Google Cloud Console - OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent?project=mm-kr-expo)
2. Or navigate manually:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Select project: **mm-kr-expo**
   - Click **☰ (hamburger menu)** → **APIs & Services** → **OAuth consent screen**

### 2. Configure App Information

**User Type:**
- Select **External** (unless you have a Google Workspace account)
- Click **CREATE**

**App Information:**
- **App name**: `Myanmar Korean Dictionary` (or `mm-kr`)
- **User support email**: Select your email (e.g., `edu.mmkr@gmail.com`)
- **App logo** (optional): Upload your app icon (`./assets/dictionary_icon.png`)
- **App domain** (optional): Leave blank or add your domain
- **Application home page** (optional): Your website URL if you have one
- **Privacy policy link** (optional): If you have a privacy policy
- **Terms of service link** (optional): If you have terms of service
- **Authorized domains** (optional): Add your domain if you have one

**Developer contact information:**
- **Email addresses**: Add your email (e.g., `edu.mmkr@gmail.com`)

### 3. Scopes (Already Configured)
The scopes should already be set:
- `openid`
- `profile`
- `email`

These are automatically added when you use Google Sign-In.

### 4. Test Users (For Testing)
If your app is in "Testing" mode:
- Add test users who can sign in
- Add: `aungko17101999@gmail.com` (your email)
- Add any other test emails

### 5. Save and Continue
1. Click **SAVE AND CONTINUE**
2. Review the summary
3. Click **BACK TO DASHBOARD**

### 6. Publish (If Ready)
If you want to make the app available to all users:
1. Go to **Publishing status** section
2. Click **PUBLISH APP**
3. Confirm the publishing

**Note:** For testing, you can keep it in "Testing" mode and add test users.

## Result
After configuration, the consent screen will show:
- **"Sign in to Myanmar Korean Dictionary"** (or whatever you set as App name)
- Your app logo (if uploaded)
- Professional appearance instead of the project ID

## Important Notes
- Changes may take a few minutes to propagate
- Test users must be added if app is in "Testing" mode
- The app name will appear in the consent screen header
- You can update this anytime in Google Cloud Console

