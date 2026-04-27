import {
  faBookOpen,
  faHouse,
  faListCheck,
  faTicket,
  faUsers,
  faWallet
} from '@fortawesome/free-solid-svg-icons';

export type AppTab = 'dashboard' | 'bookings' | 'expense' | 'journal' | 'planning' | 'members';

export const navigationItems = [
  { key: 'dashboard', label: '首頁', icon: faHouse },
  { key: 'bookings', label: '預訂', icon: faTicket },
  { key: 'expense', label: '記帳', icon: faWallet },
  { key: 'journal', label: '日誌', icon: faBookOpen },
  { key: 'planning', label: '準備', icon: faListCheck },
  { key: 'members', label: '成員', icon: faUsers }
] as const;
