import { journalSeed } from '../data/journalSeed';
import type { JournalEntry } from '../types/journal';

export const journalService = {
  async list(): Promise<JournalEntry[]> {
    return Promise.resolve(journalSeed);
  }
};
