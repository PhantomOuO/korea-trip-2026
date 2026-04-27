import type { CurrencyCode } from '../types/expense';

export const toTwd = (amount: number, rate: number): number => Number((amount * rate).toFixed(2));

export const currencyList: CurrencyCode[] = ['TWD', 'KRW', 'USD', 'JPY'];
