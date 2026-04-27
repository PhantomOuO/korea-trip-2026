import type { ReactNode } from 'react';
import type { AppTab } from '../../constants/navigation';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { BottomNav } from './BottomNav';
import { OfflineBanner } from './OfflineBanner';
import { TopBar } from './TopBar';

type Props = {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  children: ReactNode;
};

export const AppShell = ({ currentTab, onTabChange, children }: Props) => {
  const { syncStatus } = useOnlineStatus();

  return (
    <div className="min-h-dvh bg-korea-bg">
      <TopBar />
      <OfflineBanner syncStatus={syncStatus} />
      <main className="mobile-page">{children}</main>
      <BottomNav currentTab={currentTab} onChange={onTabChange} />
    </div>
  );
};
