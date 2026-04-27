export const formatCurrency = (value: number, currency: 'TWD' | 'KRW' | 'USD' | 'JPY'): string =>
  new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'KRW' ? 0 : 2
  }).format(value);
