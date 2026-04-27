import { useCallback } from 'react';
import { planningSeed } from '../data/planningSeed';
import { planningService } from '../services/planningService';
import type { PlanningItem } from '../types/planning';
import { useAsyncData } from './useAsyncData';

export const usePlanning = () => {
  const loader = useCallback(() => planningService.list(), []);
  return useAsyncData<PlanningItem[]>(loader, planningSeed);
};
