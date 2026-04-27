export type SyncStatus = 'online' | 'offline' | 'syncing' | 'error';

export type AppStatus = {
  isOnline: boolean;
  syncStatus: SyncStatus;
  lastSyncedAt?: Date;
  pendingWritesCount?: number;
};
