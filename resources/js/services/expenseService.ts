import { expenseSeed } from '../data/expenseSeed';
import type { ExpenseItem } from '../types/expense';

export const expenseService = {
  async list(): Promise<ExpenseItem[]> {
    return Promise.resolve(expenseSeed);
  }
};
