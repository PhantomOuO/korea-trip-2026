import { FIXED_TRIP_ID } from '../constants/trip';
import type { Member } from '../types/member';

const now = new Date('2026-01-01T00:00:00+08:00');

export const memberSeed: Member[] = [
  {
    id: `${FIXED_TRIP_ID}-member-mom`,
    name: '媽媽',
    nickname: '媽咪',
    role: 'editor',
    color: 'rose',
    splitWeight: 1,
    isActive: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: `${FIXED_TRIP_ID}-member-daughter`,
    name: '女兒',
    nickname: '小旅伴',
    role: 'owner',
    color: 'peach',
    splitWeight: 1,
    isActive: true,
    createdAt: now,
    updatedAt: now
  }
];
