import type { SyncStatus } from '../../types/app';

const statusText: Record<Exclude<SyncStatus, 'online'>, string> = {
  syncing: '同步中...',
  offline: '目前離線，仍可查看已載入資料，變更將於恢復連線後同步',
  error: '同步失敗，請稍後再試'
};

export const OfflineBanner = ({ syncStatus }: { syncStatus: SyncStatus }) => {
  if (syncStatus === 'online') return null;

  return (
    <div className="border-b border-korea-line bg-korea-sandSoft px-4 py-2 text-xs text-korea-ink">
      <div className="mx-auto w-full max-w-md">{statusText[syncStatus]}</div>
    </div>
  );
};
