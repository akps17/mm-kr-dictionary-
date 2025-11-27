# How to Build Android APK for Myanmar Korean Dictionary

## Option 1: Using EAS Build (Recommended - Cloud Build)

### Prerequisites
1. Install EAS CLI globally:
   ```bash
   npm install -g eas-cli
   ```

2. Login to your Expo account:
   ```bash
   eas login
   ```

3. Configure the project (if not already done):
   ```bash
   eas build:configure
   ```

### Build APK

1. **For Preview/Testing (APK):**
   ```bash
   cd app
   eas build --platform android --profile preview
   ```
   This will create an APK file that you can download and install directly.

2. **For Production (AAB - required for Google Play Store or app store /// AAB ):**
   ```bash
   cd app
   eas build --platform android --profile production

   ##or submit
   eas submit --platform android #android
   eas submit --platform ios #ios
   ```
   This creates an AAB (Android App Bundle) file for Google Play Store submission.

### Download the Build
After the build completes, you'll get a download link. You can also check your builds at:
- https://expo.dev/accounts/[your-account]/projects/[project-slug]/builds   #or
 https://expo.dev/accounts/aksp17/projects/app/builds

---

## Option 2: Local Build (Requires Android Studio)

### Prerequisites
1. Install Android Studio
2. Set up Android SDK
3. Set JAVA_HOME to Java 17 (as configured in `gradle.properties`)

### Build Locally

1. **Generate native Android project:**
   ```bash
   cd app
   npx expo prebuild --platform android
   ```

2. **Build APK:**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

3. **Find the APK:**
   The APK will be located at:
   ```
   app/android/app/build/outputs/apk/release/app-release.apk
   ```

---

## Option 3: Using Expo Development Build

If you want to test the app with development features:

```bash
cd app
eas build --platform android --profile development
```

---

## Notes

- **APK vs AAB**: 
  - APK: For direct installation/testing
  - AAB: Required for Google Play Store (smaller file size, optimized)
  
- **Signing**: Production builds require a keystore. EAS can manage this automatically, or you can provide your own.

- **Build Time**: 
  - EAS Build: ~15-30 minutes (cloud build)
  - Local Build: Depends on your machine (~5-15 minutes)

- **Current Configuration**: 
  - Package: `com.aksp17.app`
  - Version: `1.0.0`
  - EAS Project ID: `9184fd51-6a68-43a4-a43f-8665d8c37adf`

---

## Quick Start (EAS Build)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Build APK for testing
cd app
eas build --platform android --profile preview
```

The build will be available for download once complete!

