import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  type User
} from 'firebase/auth';
import {
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
  getFirestore
} from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

let emulatorConnected = false;

/**
 * 設定 Firestore 離線快取。
 * 第一版採用 persistence，讓旅行資料可離線瀏覽。
 */
export const setupFirestoreOffline = async (): Promise<void> => {
  try {
    await enableIndexedDbPersistence(db);
  } catch (error) {
    console.warn('Firestore 離線快取啟用失敗：', error);
  }
};

/**
 * 訪客匿名登入。
 * 若已登入會回傳現有使用者。
 */
export const signInGuest = async (): Promise<User> => {
  if (auth.currentUser) {
    return auth.currentUser;
  }

  const credential = await signInAnonymously(auth);
  return credential.user;
};

/**
 * 監聽 Firebase Auth 狀態。
 */
export const watchAuthState = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);

/**
 * 本地開發可切換 Firebase Emulator。
 */
export const setupFirebaseEmulators = (): void => {
  const shouldUseEmulator = import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true';

  if (!shouldUseEmulator || emulatorConnected) {
    return;
  }

  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  connectStorageEmulator(storage, '127.0.0.1', 9199);

  emulatorConnected = true;
};

export { app };
