export type ScheduleCategory =
  | 'spot'
  | 'food'
  | 'transport'
  | 'hotel'
  | 'shopping'
  | 'other';

export type ScheduleItem = {
  id: string;
  tripId: string;
  date: string;
  time: string;
  title: string;
  locationName: string;
  category: ScheduleCategory;
  description?: string;
  naverMapUrl?: string;
  googleMapUrl?: string;
  notes?: string;
  imageUrls: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};
