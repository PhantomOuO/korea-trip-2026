export type Trip = {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  coverImageUrl?: string;
  ownerUid?: string;
  defaultCurrency: 'TWD' | 'KRW' | 'USD' | 'JPY';
  targetCurrency: 'TWD' | 'KRW' | 'USD' | 'JPY';
  createdAt: Date;
  updatedAt: Date;
};
