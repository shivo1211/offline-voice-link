import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lanchat.offline',
  appName: 'LAN Chat',
  webDir: 'dist',
  server: {
    // For development with live reload: uncomment and set your local dev URL
    // url: 'http://YOUR_LOCAL_IP:8080',
    // cleartext: true,
    androidScheme: 'https'
  },
  plugins: {
    // Custom plugin configurations
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
