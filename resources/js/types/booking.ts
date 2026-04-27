export type BookingType = 'flight' | 'hotel' | 'car' | 'voucher' | 'other';

export type Booking = {
  id: string;
  tripId: string;
  type: BookingType;
  title: string;
  date?: string;
  startDateTime?: string;
  endDateTime?: string;

  airline?: string;
  flightNumber?: string;
  departureAirport?: string;
  arrivalAirport?: string;
  passengerName?: string;
  bookingCode?: string;

  hotelName?: string;
  address?: string;
  checkIn?: string;
  checkOut?: string;

  carCompany?: string;
  carModel?: string;
  pickupLocation?: string;
  returnLocation?: string;

  googleMapUrl?: string;
  naverMapUrl?: string;

  amountTwd?: number;
  splitAmountTwd?: number;

  coverImageUrl?: string;
  fileUrls?: string[];

  notes?: string;

  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};
