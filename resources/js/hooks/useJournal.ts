import { useCallback } from 'react';
import { journalSeed } from '../data/journalSeed';
import { journalService } from '../services/journalService';
import type { JournalEntry } from '../types/journal';
import { useAsyncData } from './useAsyncData';

export const useJournal = () => {
  const loader = useCallback(() => journalService.list(), []);
  return useAsyncData<JournalEntry[]>(loader, journalSeed);
};
