import { FIXED_TRIP_ID } from '../constants/trip';
import type { PlanningItem } from '../types/planning';

const now = new Date('2026-01-01T00:00:00+08:00');
const creator = `${FIXED_TRIP_ID}-member-daughter`;

export const planningSeed: PlanningItem[] = [
  { id: 'p-todo-1', tripId: FIXED_TRIP_ID, type: 'todo', title: '確認護照效期', assignedToMemberIds: [creator], isDone: true, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-todo-2', tripId: FIXED_TRIP_ID, type: 'todo', title: '購買 eSIM', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-todo-3', tripId: FIXED_TRIP_ID, type: 'todo', title: '換韓幣', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-todo-4', tripId: FIXED_TRIP_ID, type: 'todo', title: '確認住宿', assignedToMemberIds: [creator], isDone: true, createdBy: creator, createdAt: now, updatedAt: now },

  { id: 'p-luggage-1', tripId: FIXED_TRIP_ID, type: 'luggage', title: '護照', assignedToMemberIds: [creator], isDone: true, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-luggage-2', tripId: FIXED_TRIP_ID, type: 'luggage', title: '充電器', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-luggage-3', tripId: FIXED_TRIP_ID, type: 'luggage', title: '行動電源', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-luggage-4', tripId: FIXED_TRIP_ID, type: 'luggage', title: '保暖外套', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-luggage-5', tripId: FIXED_TRIP_ID, type: 'luggage', title: '轉接頭', assignedToMemberIds: [creator], isDone: true, createdBy: creator, createdAt: now, updatedAt: now },

  { id: 'p-shopping-1', tripId: FIXED_TRIP_ID, type: 'shopping', title: '保養品', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-shopping-2', tripId: FIXED_TRIP_ID, type: 'shopping', title: '零食', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now },
  { id: 'p-shopping-3', tripId: FIXED_TRIP_ID, type: 'shopping', title: '伴手禮', assignedToMemberIds: [creator], isDone: false, createdBy: creator, createdAt: now, updatedAt: now }
];
