import type { Booking } from '../../types/booking';
import { Card } from '../ui/Card';

export const HotelCard = ({ booking }: { booking: Booking }) => (
  <Card>
    <h3 className="font-semibold">{booking.hotelName ?? booking.title}</h3>
    <p className="mt-1 text-sm text-korea-muted">{booking.address}</p>
    <p className="mt-2 text-xs text-korea-muted">{booking.checkIn} - {booking.checkOut}</p>
  </Card>
);
