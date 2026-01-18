# LAN Chat - Offline Voice Link

A peer-to-peer LAN chat application with voice calling capabilities, built with React, Capacitor, and native Android plugins.

## Features

- 📱 Cross-platform (Web + Android)
- 💬 Real-time P2P messaging over LAN
- 📞 Voice calling support
- 🔍 Automatic peer discovery using mDNS/NSD
- 📴 Works completely offline (no internet required)

## Quick Start (Web)

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## Android Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Android Studio](https://developer.android.com/studio) (latest version)
- Java JDK 21 (required for Capacitor 8; select an Embedded/installed JDK 21 in Android Studio)

### Build & Run Android App

**Step 1: Install dependencies**
```sh
npm install
```

**Step 2: Build the web app**
```sh
npm run build
```

**Step 3: Sync with Android**
```sh
npx cap sync android
```

**Step 4: Open in Android Studio**
```sh
npx cap open android
```

**Step 5: Run the app**
1. Wait for Gradle sync to complete (bottom status bar)
2. Select your device/emulator from the dropdown (top toolbar)
3. Click the green Run ▶️ button

### Troubleshooting Android Studio

**"No module" in run configuration:**
- Make sure `android/settings.gradle` exists
- Run `npx cap sync android` again
- File → Sync Project with Gradle Files

**Device not showing:**
- Tools → Device Manager → Create Device (for emulator)
- For physical device: Enable USB debugging in Developer Options

**Build errors:**
- File → Invalidate Caches / Restart
- Delete `android/.gradle` folder and sync again

### Live Reload (Development)

To enable hot-reload from your local development server:

1. Edit `capacitor.config.ts`:
```ts
server: {
  url: 'http://YOUR_LOCAL_IP:8080',
  cleartext: true,
  androidScheme: 'https'
}
```

2. Rebuild and run:
```sh
npx cap sync android
npx cap run android
```

## How to Edit This Code

**Use your preferred IDE**

Clone this repo and push changes:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

## Technologies

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Mobile**: Capacitor, Android native plugins
- **P2P**: WebSocket, mDNS/NSD for discovery, WebRTC for calls

## Deployment

**Android**: Generate signed APK in Android Studio → Build → Generate Signed Bundle/APK
