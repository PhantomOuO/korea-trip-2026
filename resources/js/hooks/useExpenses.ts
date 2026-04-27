import { useCallback } from 'react';
import { expenseSeed } from '../data/expenseSeed';
import { expenseService } from '../services/expenseService';
import type { ExpenseItem } from '../types/expense';
import { useAsyncData } from './useAsyncData';

export const useExpenses = () => {
  const loader = useCallback(() => expenseService.list(), []);
  return useAsyncData<ExpenseItem[]>(loader, expenseSeed);
};
