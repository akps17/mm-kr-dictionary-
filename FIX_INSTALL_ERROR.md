# Fix: INSTALL_FAILED_UPDATE_INCOMPATIBLE Error

## Error Message
```
INSTALL_FAILED_UPDATE_INCOMPATIBLE: Existing package com.aksp17.app signatures do not match newer version; ignoring!
```

## Cause
There's already an app installed on your emulator/phone with package name `com.aksp17.app`, but it was signed with a **different keystore** than the new build. Android won't allow installing an app update if the signatures don't match (security feature).

## Solution: Uninstall Existing App First

### Option 1: Uninstall via ADB (Recommended)

1. **Connect to your device/emulator:**
   ```bash
   adb devices
   # Should show your device/emulator
   ```

2. **Uninstall the existing app:**
   ```bash
   adb uninstall com.aksp17.app
   ```

3. **Install the new APK:**
   ```bash
   adb install /path/to/your-app.apk
   ```
   Or let EAS install it again:
   ```bash
   cd app
   eas build --platform android --profile preview --local
   ```

### Option 2: Uninstall from Device/Emulator

**On Android Emulator:**
1. Long press the app icon
2. Drag to "Uninstall" or tap "Uninstall"
3. Confirm uninstall

**On Physical Phone:**
1. Go to **Settings** → **Apps**
2. Find "Myanmar Korean Dictionary" or "com.aksp17.app"
3. Tap **"Uninstall"**
4. Confirm

### Option 3: Uninstall via EAS (if using emulator)

```bash
cd app
adb uninstall com.aksp17.app
# Then try installing again
eas build --platform android --profile preview
```

---

## Why This Happens

- **Different Keystores**: The old app was signed with a debug keystore or different production keystore
- **New Keystore**: EAS created a new keystore for this build
- **Android Security**: Android prevents installing apps with mismatched signatures to protect users

---

## Prevention

To avoid this in the future:
- Always use the same keystore for production builds
- EAS manages keystores automatically, so future builds will work
- For development, use the same debug keystore

---

## Quick Fix Command

```bash
# Uninstall existing app
adb uninstall com.aksp17.app

# Then install new APK
adb install /path/to/downloaded-apk.apk
```

Or if you want EAS to handle it:
```bash
cd app
adb uninstall com.aksp17.app
eas build --platform android --profile preview
```

---

## For Physical Phone Installation

1. **Uninstall old app** from phone (Settings → Apps)
2. **Download new APK** from EAS dashboard
3. **Transfer to phone** and install
4. Enable "Install unknown apps" if needed

The signature mismatch won't occur on a fresh install (when old app is removed first).

