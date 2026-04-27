import { FIXED_TRIP_ID } from '../constants/trip';
import type { Trip } from '../types/trip';

export const seedTrip: Trip = {
  id: FIXED_TRIP_ID,
  title: '韓國母女旅行',
  destination: 'Seoul, Korea',
  startDate: '2026-06-05',
  endDate: '2026-06-09',
  defaultCurrency: 'TWD',
  targetCurrency: 'KRW',
  ownerUid: 'owner-seed-uid',
  createdAt: new Date('2026-01-01T00:00:00+08:00'),
  updatedAt: new Date('2026-01-01T00:00:00+08:00')
};
