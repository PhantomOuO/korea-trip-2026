import { useCallback } from 'react';
import { bookingSeed } from '../data/bookingSeed';
import { bookingService } from '../services/bookingService';
import type { Booking } from '../types/booking';
import { useAsyncData } from './useAsyncData';

export const useBookings = () => {
  const loader = useCallback(() => bookingService.list(), []);
  return useAsyncData<Booking[]>(loader, bookingSeed);
};
