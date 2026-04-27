import { useEffect, useMemo, useState } from 'react';
import type { SyncStatus } from '../types/app';

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isSyncing, setIsSyncing] = useState(false);
  const [hasError] = useState(false);

  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) {
      setIsSyncing(false);
      return;
    }
    setIsSyncing(true);
    const timer = window.setTimeout(() => setIsSyncing(false), 1000);
    return () => window.clearTimeout(timer);
  }, [isOnline]);

  const syncStatus: SyncStatus = useMemo(() => {
    if (hasError) return 'error';
    if (!isOnline) return 'offline';
    if (isSyncing) return 'syncing';
    return 'online';
  }, [hasError, isOnline, isSyncing]);

  return { isOnline, syncStatus };
};
