import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { signInGuest, watchAuthState } from '../firebase/firebase';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    void signInGuest();
    const unsub = watchAuthState(setUser);
    return () => unsub();
  }, []);

  return { user };
};
