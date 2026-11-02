import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
  Auth,
} from 'firebase/auth';
import firebaseConfig from './firebaseConfig';

export const isFirebaseConfigured = (): boolean => {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.apiKey.trim().length > 0);
};

let appInstance: FirebaseApp | null = null;
let authInstance: Auth | null = null;
let providerInstance: GoogleAuthProvider | null = null;

export const getFirebaseAuth = (): Auth | null => {
  if (!isFirebaseConfigured()) {
    return null;
  }
  if (!authInstance) {
    try {
      appInstance = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      authInstance = getAuth(appInstance);
    } catch (err) {
      console.warn('Firebase initialization skipped or failed:', err);
      return null;
    }
  }
  return authInstance;
};

export const getGoogleProvider = (): GoogleAuthProvider | null => {
  if (!providerInstance) {
    providerInstance = new GoogleAuthProvider();
    providerInstance.addScope('https://www.googleapis.com/auth/drive.readonly');
    providerInstance.setCustomParameters({
      prompt: 'consent',
    });
  }
  return providerInstance;
};

// Flag to track sign-in in flight
let isSigningIn = false;
let cachedAccessToken: string | null = null;

export const initAuth = (
  onAuthSuccess?: (user: User, token: string | null) => void,
  onAuthFailure?: () => void
) => {
  const auth = getFirebaseAuth();
  if (!auth) {
    if (onAuthFailure) onAuthFailure();
    return () => {};
  }

  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        if (onAuthSuccess) onAuthSuccess(user, null);
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const signInWithGoogle = async (): Promise<{ user: User; accessToken: string } | null> => {
  const auth = getFirebaseAuth();
  const provider = getGoogleProvider();

  if (!auth || !provider) {
    throw new Error(
      'Live Google Drive sign-in requires VITE_FIREBASE_API_KEY to be configured in environment variables. You can still view all 12 pre-loaded verified certificates below.'
    );
  }

  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Failed to obtain Google Drive access token from authentication.');
    }
    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Sign In error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const logOutGoogle = async () => {
  const auth = getFirebaseAuth();
  if (auth) {
    await signOut(auth);
  }
  cachedAccessToken = null;
};
