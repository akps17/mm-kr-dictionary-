# How to Install APK on Android Phone

## ✅ Build Succeeded!

Your Android build is ready. Here's how to install it on your phone.

---

## Step 1: Download the Build

### Option A: Download from EAS Dashboard
1. Go to: https://expo.dev/accounts/aksp17/projects/app/builds
2. Find your completed build
3. Click on the build to open details
4. Click **"Download"** button
5. The file will download to your computer

### Option B: Download via CLI
```bash
cd app
eas build:list
# Find your build ID, then:
eas build:download [build-id]
```

---

## Step 2: Check File Type

### If you built with `--profile preview`:
- ✅ You'll get an **APK file** (e.g., `app-release.apk`)
- **Can install directly** - skip to Step 3

### If you built with `--profile production`:
- You'll get an **AAB file** (Android App Bundle)
- AAB files are for Google Play Store
- **To install on phone, you need to:**
  - Option 1: Use `bundletool` to convert AAB to APK (see below)
  - Option 2: Build preview APK instead: `eas build --platform android --profile preview`

---

## Step 3: Transfer APK to Your Phone

### Method 1: USB Cable
1. Connect your Android phone to your computer via USB
2. Enable "File Transfer" or "MTP" mode on your phone
3. Copy the APK file to your phone's Downloads folder

### Method 2: Email/Cloud Storage
1. Email the APK to yourself
2. Open email on your phone and download the APK
3. Or upload to Google Drive/Dropbox and download on phone

### Method 3: Direct Download (if phone and computer on same network)
1. Use a file sharing app or website
2. Upload APK and download directly on phone

---

## Step 4: Install APK on Android Phone

1. **Enable Unknown Sources:**
   - Go to **Settings** → **Security** (or **Privacy**)
   - Enable **"Install unknown apps"** or **"Unknown sources"**
   - If prompted, select the app you'll use to install (Files, Chrome, etc.)

2. **Install the APK:**
   - Open **Files** app (or your file manager)
   - Navigate to **Downloads** folder
   - Tap on the APK file (e.g., `app-release.apk`)
   - Tap **"Install"**
   - Wait for installation to complete
   - Tap **"Open"** to launch the app

---

## Converting AAB to APK (If Needed)

If you have an AAB file and want to install it directly:

### Install bundletool:
```bash
# Download bundletool from:
# https://github.com/google/bundletool/releases

# Convert AAB to APK:
java -jar bundletool.jar build-apks \
  --bundle=your-app.aab \
  --output=my-app.apks \
  --mode=universal

# Extract APK from APKS:
unzip my-app.apks
# The APK will be in the extracted folder
```

### Or Build Preview APK Instead:
```bash
cd app
eas build --platform android --profile preview
```
This will give you an APK directly that you can install.

---

## Troubleshooting

### "App not installed" Error
- Make sure you uninstalled any previous version first
- Check if you have enough storage space
- Try enabling "Install via USB" in Developer Options

### "Parse Error"
- The APK file might be corrupted - download again
- Make sure the download completed fully

### "App is blocked by Play Protect"
- This is normal for apps not from Play Store
- Tap **"Install anyway"** or **"More details"** → **"Install anyway"**

### Can't find the APK file
- Check Downloads folder
- Use a file manager app to search for `.apk` files
- Check notification panel for download completion

---

## Security Note

⚠️ **Only install APKs from trusted sources!**
- Your own builds are safe
- Be cautious with APKs from unknown sources
- The app will request necessary permissions on first launch

---

## Quick Summary

1. ✅ Download APK from EAS dashboard
2. ✅ Transfer to Android phone
3. ✅ Enable "Install unknown apps" in Settings
4. ✅ Tap APK file and install
5. ✅ Open and enjoy! 🎉

---

## Need Help?

If you encounter any issues:
- Check the build logs for errors
- Make sure your phone's Android version is compatible (check `minSdkVersion` in build.gradle)
- Try building a preview APK if production AAB doesn't work

