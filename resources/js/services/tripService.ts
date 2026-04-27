import { seedTrip } from '../data/seedTrip';
import type { Trip } from '../types/trip';

export const tripService = {
  async getTrip(): Promise<Trip> {
    return Promise.resolve(seedTrip);
  }
};
