import type { BookingType } from '../types/booking';
import type { ExpenseCategory } from '../types/expense';
import type { PlanningItemType } from '../types/planning';
import type { ScheduleCategory } from '../types/schedule';

export const scheduleCategoryLabels: Record<ScheduleCategory, string> = {
  spot: '景點',
  food: '美食',
  transport: '交通',
  hotel: '住宿',
  shopping: '購物',
  other: '其他'
};

export const bookingTypeLabels: Record<BookingType, string> = {
  flight: '機票',
  hotel: '住宿',
  car: '租車',
  voucher: '票券',
  other: '其他'
};

export const expenseCategoryLabels: Record<ExpenseCategory, string> = {
  food: '餐飲',
  transport: '交通',
  shopping: '購物',
  hotel: '住宿',
  ticket: '票券',
  car: '租車',
  other: '其他'
};

export const planningTypeLabels: Record<PlanningItemType, string> = {
  todo: '待辦',
  luggage: '行李',
  shopping: '購物'
};
