import { FIXED_TRIP_ID } from '../constants/trip';
import type { ExpenseItem } from '../types/expense';

const now = new Date('2026-01-01T00:00:00+08:00');

export const expenseSeed: ExpenseItem[] = [
  {
    id: 'e-1',
    tripId: FIXED_TRIP_ID,
    date: '2026-06-05',
    title: '明洞烤肉晚餐',
    category: 'food',
    amountOriginal: 85000,
    currency: 'KRW',
    exchangeRateToTwd: 0.0235,
    rateMode: 'auto',
    rateFetchedAt: now,
    amountTwd: 1997.5,
    paidByMemberId: `${FIXED_TRIP_ID}-member-daughter`,
    splitMemberIds: [`${FIXED_TRIP_ID}-member-daughter`, `${FIXED_TRIP_ID}-member-mom`],
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  },
  {
    id: 'e-2',
    tripId: FIXED_TRIP_ID,
    date: '2026-05-01',
    title: '來回機票',
    category: 'ticket',
    amountOriginal: 26500,
    currency: 'TWD',
    exchangeRateToTwd: 1,
    rateMode: 'manual',
    amountTwd: 26500,
    paidByMemberId: `${FIXED_TRIP_ID}-member-mom`,
    splitMemberIds: [`${FIXED_TRIP_ID}-member-daughter`, `${FIXED_TRIP_ID}-member-mom`],
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  },
  {
    id: 'e-3',
    tripId: FIXED_TRIP_ID,
    date: '2026-06-06',
    title: 'T-money 交通儲值',
    category: 'transport',
    amountOriginal: 50000,
    currency: 'KRW',
    exchangeRateToTwd: 0.0235,
    rateMode: 'cached',
    rateFetchedAt: now,
    amountTwd: 1175,
    paidByMemberId: `${FIXED_TRIP_ID}-member-daughter`,
    splitMemberIds: [`${FIXED_TRIP_ID}-member-daughter`, `${FIXED_TRIP_ID}-member-mom`],
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  },
  {
    id: 'e-4',
    tripId: FIXED_TRIP_ID,
    date: '2026-06-08',
    title: '弘大服飾購物',
    category: 'shopping',
    amountOriginal: 140000,
    currency: 'KRW',
    exchangeRateToTwd: 0.0235,
    rateMode: 'auto',
    rateFetchedAt: now,
    amountTwd: 3290,
    paidByMemberId: `${FIXED_TRIP_ID}-member-mom`,
    splitMemberIds: [`${FIXED_TRIP_ID}-member-daughter`, `${FIXED_TRIP_ID}-member-mom`],
    createdBy: 'system',
    createdAt: now,
    updatedAt: now
  }
];
