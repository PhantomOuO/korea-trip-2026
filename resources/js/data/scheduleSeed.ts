import { FIXED_TRIP_ID } from '../constants/trip';
import type { ScheduleItem } from '../types/schedule';

const by = `${FIXED_TRIP_ID}-member-daughter`;
const t = new Date('2026-01-01T00:00:00+08:00');

export const scheduleSeed: ScheduleItem[] = [
  { id: 's-0605-1', tripId: FIXED_TRIP_ID, date: '2026-06-05', time: '08:00', title: '抵達桃園機場', locationName: '桃園國際機場', category: 'transport', notes: '提早 2 小時報到', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0605-2', tripId: FIXED_TRIP_ID, date: '2026-06-05', time: '12:00', title: '抵達仁川機場', locationName: '仁川國際機場', category: 'transport', notes: '購買交通卡', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0605-3', tripId: FIXED_TRIP_ID, date: '2026-06-05', time: '15:00', title: '飯店 Check-in', locationName: '明洞飯店', category: 'hotel', notes: '先放行李休息', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0605-4', tripId: FIXED_TRIP_ID, date: '2026-06-05', time: '18:00', title: '明洞晚餐', locationName: '明洞商圈', category: 'food', notes: '吃烤肉與部隊鍋', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },

  { id: 's-0606-1', tripId: FIXED_TRIP_ID, date: '2026-06-06', time: '09:00', title: '景福宮', locationName: '景福宮', category: 'spot', notes: '可租韓服拍照', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0606-2', tripId: FIXED_TRIP_ID, date: '2026-06-06', time: '13:00', title: '北村韓屋村', locationName: '北村韓屋村', category: 'spot', notes: '慢慢散步拍照', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0606-3', tripId: FIXED_TRIP_ID, date: '2026-06-06', time: '18:30', title: '弘大逛街', locationName: '弘大商圈', category: 'shopping', notes: '買衣服與文創小物', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },

  { id: 's-0607-1', tripId: FIXED_TRIP_ID, date: '2026-06-07', time: '10:00', title: '聖水洞咖啡巡禮', locationName: '聖水洞', category: 'food', notes: '打卡人氣咖啡廳', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0607-2', tripId: FIXED_TRIP_ID, date: '2026-06-07', time: '14:00', title: '首爾林散步', locationName: '首爾林', category: 'spot', notes: '公園拍照', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0607-3', tripId: FIXED_TRIP_ID, date: '2026-06-07', time: '19:30', title: '漢江夜間散步', locationName: '漢江公園', category: 'spot', notes: '看夜景吹風', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },

  { id: 's-0608-1', tripId: FIXED_TRIP_ID, date: '2026-06-08', time: '10:00', title: '樂天世界塔', locationName: 'Lotte World Tower', category: 'spot', notes: '登 전망台', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0608-2', tripId: FIXED_TRIP_ID, date: '2026-06-08', time: '14:00', title: 'COEX 逛街', locationName: 'COEX Mall', category: 'shopping', notes: '星空圖書館拍照', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0608-3', tripId: FIXED_TRIP_ID, date: '2026-06-08', time: '19:00', title: '江南晚餐', locationName: '江南區', category: 'food', notes: '韓牛燒肉', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },

  { id: 's-0609-1', tripId: FIXED_TRIP_ID, date: '2026-06-09', time: '09:00', title: '飯店退房', locationName: '明洞飯店', category: 'hotel', notes: '確認護照與行李', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0609-2', tripId: FIXED_TRIP_ID, date: '2026-06-09', time: '11:00', title: '機場交通', locationName: 'AREX 直達車', category: 'transport', notes: '預留退稅時間', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t },
  { id: 's-0609-3', tripId: FIXED_TRIP_ID, date: '2026-06-09', time: '15:00', title: '返台', locationName: '仁川 -> 桃園', category: 'transport', notes: '旅程圓滿結束', imageUrls: [], createdBy: by, createdAt: t, updatedAt: t }
];
