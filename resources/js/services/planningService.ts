import { planningSeed } from '../data/planningSeed';
import type { PlanningItem } from '../types/planning';

export const planningService = {
  async list(): Promise<PlanningItem[]> {
    return Promise.resolve(planningSeed);
  }
};
