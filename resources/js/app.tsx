import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import { AppShell } from './components/layout/AppShell';
import { FloatingActionButton } from './components/ui/FloatingActionButton';
import type { AppTab } from './constants/navigation';
import { DashboardPage } from './pages/DashboardPage';
import { ExpensePage } from './pages/ExpensePage';
import { ItineraryPage } from './pages/ItineraryPage';
import { PrepPage } from './pages/PrepPage';

const App = () => {
  const [tab, setTab] = useState<AppTab>('dashboard');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      void navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  const content = useMemo(() => {
    switch (tab) {
      case 'itinerary':
        return <ItineraryPage />;
      case 'budget':
        return <ExpensePage />;
      case 'prep':
        return <PrepPage />;
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
