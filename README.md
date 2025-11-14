# mm-kr-dictionary

Cross-platform Myanmar–Korean–English dictionary built with Expo + React Native.

## Scripts
- yarn ios / yarn android / yarn web
- From repo root: yarn ios / yarn android / yarn web (proxies to app)

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
