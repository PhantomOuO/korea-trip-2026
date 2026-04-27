import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { AppShell } from './components/layout/AppShell';
import { FloatingActionButton } from './components/ui/FloatingActionButton';
import type { AppTab } from './constants/navigation';
import { BookingsPage } from './pages/BookingsPage';
import { DashboardPage } from './pages/DashboardPage';
import { ExpensePage } from './pages/ExpensePage';
import { JournalPage } from './pages/JournalPage';
import { MembersPage } from './pages/MembersPage';
import { PlanningPage } from './pages/PlanningPage';

const App = () => {
  const [tab, setTab] = useState<AppTab>('dashboard');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      void navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  const content = useMemo(() => {
    switch (tab) {
      case 'bookings':
        return <BookingsPage />;
      case 'expense':
        return <ExpensePage />;
      case 'journal':
        return <JournalPage />;
      case 'planning':
        return <PlanningPage />;
      case 'members':
        return <MembersPage />;
      case 'dashboard':
      default:
        return <DashboardPage />;
    }
  }, [tab]);

  return (
    <AppShell currentTab={tab} onTabChange={setTab}>
      {content}
      <FloatingActionButton />
    </AppShell>
  );
};

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
