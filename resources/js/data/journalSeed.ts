import { FIXED_TRIP_ID } from '../constants/trip';
import type { JournalEntry } from '../types/journal';

const now = new Date('2026-01-01T00:00:00+08:00');

export const journalSeed: JournalEntry[] = [
  {
    id: 'j-1',
    tripId: FIXED_TRIP_ID,
    date: '2026-06-05',
    title: '第一天抵達首爾',
    content: '今天順利抵達，晚上在明洞吃到很棒的烤肉，母女旅行正式開始。',
    imageUrls: [],
    authorMemberId: `${FIXED_TRIP_ID}-member-daughter`,
    createdBy: `${FIXED_TRIP_ID}-member-daughter`,
    createdAt: now,
    updatedAt: now
  }
];
