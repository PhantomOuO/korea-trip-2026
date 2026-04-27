import { bookingSeed } from '../data/bookingSeed';
import type { Booking } from '../types/booking';

export const bookingService = {
  async list(): Promise<Booking[]> {
    return Promise.resolve(bookingSeed);
  }
};
