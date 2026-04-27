import { scheduleSeed } from '../data/scheduleSeed';
import type { ScheduleItem } from '../types/schedule';

export const scheduleService = {
  async list(): Promise<ScheduleItem[]> {
    return Promise.resolve(scheduleSeed);
  }
};
