import type { CurrencyCode, ExchangeRate, RateMode } from '../types/expense';

const MOCK_RATES: Record<CurrencyCode, number> = {
  TWD: 1,
  KRW: 0.0235,
  USD: 32,
  JPY: 0.22
};

export const exchangeRateService = {
  async getRateToTwd(currency: CurrencyCode, mode: RateMode = 'auto'): Promise<ExchangeRate> {
    return Promise.resolve({
      id: `${currency}-TWD-${Date.now()}`,
      base: currency,
      target: 'TWD',
      rate: MOCK_RATES[currency],
      source: mode === 'auto' ? 'mock-api' : 'manual-or-cache',
      fetchedAt: new Date()
    });
  }
};
