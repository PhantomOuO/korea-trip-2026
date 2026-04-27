import { useCallback } from 'react';
import { scheduleSeed } from '../data/scheduleSeed';
import { scheduleService } from '../services/scheduleService';
import type { ScheduleItem } from '../types/schedule';
import { useAsyncData } from './useAsyncData';

export const useSchedule = () => {
  const loader = useCallback(() => scheduleService.list(), []);
  return useAsyncData<ScheduleItem[]>(loader, scheduleSeed);
};
