# mm-kr-dictionary

Cross-platform Myanmar–Korean–English dictionary built with Expo + React Native.

## 📱 Try the App

### 🌐 Web Version
Try it now: **[https://mm-krdictionary.vercel.app](https://mm-krdictionary.vercel.app)**

### 📲 Mobile App (Expo Go)
<img src="app/assets/mm-kr-app.png" alt="QR Code" width="200"/>

Scan the QR code with your camera (iOS) or Expo Go app (Android) to try the mobile app!

## Scripts
- cd app             ##1st
- yarn install       ## 2nd
- yarn start         ## 3rd
- npx expo start
## Error Occuor , run yarn web directly
- yarn ios / yarn android / yarn web
- From repo root: yarn ios / yarn android / yarn web (proxies to app)

## Build  IOS App (On Simulator)
- npx expo run:ios                                 ##(on Simulator Mode)

## Build on Device With XCode
- npx expo run:ios --device                        ##(check device lists)
- xcrun xctrace list devices
- xcrun xctrace list devices 2>&1 | grep -i iphone  ##(verify connection with  usb)
- xcrun xctrace list devices 2>&1 | grep -v Simulator | grep -v "==" | 
grep -v "MacBook"                                   ##(Detect Devive on Mac)
-  npx expo run:ios --device                        ##(build app on Device)
- open /Users/aungkoko/Desktop/git/mm-kr-dictionary-/app/ios/MyanmarKoreanDictionary.xcworkspace                 ##(Open XCode)


## Features
- Responsive UI for phones/tablets
- Search across Korean, Myanmar, English (partial, case-insensitive)
- Sort by Korean (Korean locale)
- Clear search (native iOS or custom on Android/Web)
- Part of speech chips and English gloss

## Structure
- app/App.tsx – UI, filtering, sorting
- app/components/SearchBox.tsx – search input
- app/data/dictionary.ts – sample data

## Admin Panel
- Open `app/admin.html` in browser to manage dictionary words and approve submissions
- Login with: admin@mmkr.com / mmkr2025
