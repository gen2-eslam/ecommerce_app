# Ecommerce App 🛒

A modern Ecommerce mobile application built with React Native and Expo. This project demonstrates a clean architecture for an online shopping experience with features like user authentication and product browsing.

## 🚀 Features

- **User Authentication**: Secure Login screen with email and password validation.
- **Home Screen**: A landing page for authenticated users to start their shopping journey.
- **Dynamic Routing**: Built using Expo Router for seamless navigation.
- **Type Safety**: Fully implemented in TypeScript for robust development.
- **Responsive Design**: Styled with flexible layouts for various devices.

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [@expo/vector-icons](https://icons.expo.fyi/)
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## 📂 Project Structure

- `app/`: Contains the main application routes and screens.
  - `auth/`: Authentication related screens (e.g., `login_screen.tsx`).
  - `home/`: Main application content screens (e.g., `home_screen.tsx`).
  - `utils/`: Common styling and helper functions.
- `assets/`: Images, fonts, and other static resources.

## 🏁 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the App

```bash
npx expo start
```

Use the Expo Go app on your phone or an emulator to preview the application:

- Press `a` for Android.
- Press `i` for iOS.
- Press `w` for Web.

## 📜 Scripts

- `npm run start`: Starts the Expo development server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run reset-project`: Resets the project to a blank state (use with caution).

---

Developed with ❤️ using Expo.
