export type CurrencyCode = 'TWD' | 'KRW' | 'USD' | 'JPY';

export type RateMode = 'auto' | 'manual' | 'cached';

export type ExpenseCategory =
  | 'food'
  | 'transport'
  | 'shopping'
  | 'hotel'
  | 'ticket'
  | 'car'
  | 'other';

export type ExpenseItem = {
  id: string;
  tripId: string;

  date: string;
  title: string;
  category: ExpenseCategory;

  amountOriginal: number;
  currency: CurrencyCode;

  exchangeRateToTwd: number;
  rateMode: RateMode;
  rateFetchedAt?: Date;

  amountTwd: number;

  paidByMemberId: string;
  splitMemberIds: string[];

  note?: string;

  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ExchangeRate = {
  id: string;
  base: CurrencyCode;
  target: CurrencyCode;
  rate: number;
  source: string;
  fetchedAt: Date;
  expiresAt?: Date;
};
