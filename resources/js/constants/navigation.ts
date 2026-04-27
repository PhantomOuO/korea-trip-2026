import { faCalendarDays, faHouse, faListCheck, faWallet } from '@fortawesome/free-solid-svg-icons';

export type AppTab = 'dashboard' | 'itinerary' | 'budget' | 'prep';

export const navigationItems = [
  { key: 'dashboard', label: '總覽', icon: faHouse },
  { key: 'itinerary', label: '行程', icon: faCalendarDays },
  { key: 'budget', label: '預算', icon: faWallet },
  { key: 'prep', label: '準備', icon: faListCheck }
] as const;
