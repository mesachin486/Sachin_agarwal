// Safely resolve Firebase configuration from environment or local config
let config: Record<string, string> = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'gen-lang-client-0335621513',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1046339878138:web:130f29ead0684106dc9d43',
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'gen-lang-client-0335621513.firebaseapp.com',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'gen-lang-client-0335621513.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1046339878138',
  oAuthClientId: import.meta.env.VITE_FIREBASE_OAUTH_CLIENT_ID || '1046339878138-64q2a6qlmnbrc0mmgr8gm2mudlk0p336.apps.googleusercontent.com',
};

// import.meta.glob gracefully handles cases where firebase-applet-config.json is absent on clean clones
const configModules = import.meta.glob('../../firebase-applet-config.json', { eager: true });
const localConfigModule = configModules['../../firebase-applet-config.json'] as { default?: Record<string, string> } | undefined;

if (localConfigModule) {
  const localData = localConfigModule.default || (localConfigModule as Record<string, string>);
  config = {
    ...config,
    ...localData,
  };
}

export default config;
