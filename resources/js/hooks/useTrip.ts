import { useCallback } from 'react';
import { tripService } from '../services/tripService';
import type { Trip } from '../types/trip';
import { seedTrip } from '../data/seedTrip';
import { useAsyncData } from './useAsyncData';

export const useTrip = () => {
  const loader = useCallback(() => tripService.getTrip(), []);
  return useAsyncData<Trip>(loader, seedTrip);
};
