# Fix EAS Build Gradle Error

## Issue
The build failed with: "Gradle build failed with unknown error. See logs for the 'Run gradlew' phase for more information."

## Fix Applied
✅ **Commented out hardcoded Java path in `gradle.properties`**
- The line `org.gradle.java.home=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home` was causing issues
- EAS Build servers have their own Java installation, so this path doesn't exist on their servers
- This is now commented out and will only be used for local builds if needed

## How to Check Build Logs

1. **View logs in browser:**
   - Go to: https://expo.dev/accounts/aksp17/projects/app/builds/ed36ac46-ab00-4dd3-87b6-7d368b296fe9
   - Or check your latest build at: https://expo.dev/accounts/aksp17/projects/app/builds

2. **View logs via CLI:**
   ```bash
   eas build:list
   eas build:view [build-id]
   ```

3. **Look for these common issues in logs:**
   - Java version mismatches
   - Missing dependencies
   - Gradle plugin version conflicts
   - Memory issues (out of memory errors)
   - Missing Android SDK components

## Next Steps

1. **Try building again:**
   ```bash
   cd app
   eas build --platform android --profile production
   ```

2. **If it still fails, check the logs for:**
   - Specific error messages
   - Missing dependencies
   - Version conflicts

## Common EAS Build Issues

### 1. Java Version
- ✅ Fixed: Removed hardcoded Java path
- EAS uses Java 17 automatically

### 2. Memory Issues
- Current setting: `org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m`
- If you see OOM errors, you might need to increase this

### 3. Version Code Conflicts
- EAS auto-incremented versionCode from 1 to 2
- This should be fine, but if you see version conflicts, check `app/build.gradle`

### 4. Missing Dependencies
- Check if all npm packages are compatible with Expo SDK 54
- Run `npm install` before building

## Alternative: Build Preview APK First

If production build keeps failing, try preview build first (faster, less strict):

```bash
cd app
eas build --platform android --profile preview
```

Preview builds are APK files that can be installed directly for testing.

## If Build Still Fails

1. Check the actual error in the build logs
2. Share the specific error message from the "Run gradlew" phase
3. Common fixes:
   - Update Expo SDK if needed
   - Check for dependency conflicts
   - Verify all native modules are compatible
   - Check Android SDK requirements

