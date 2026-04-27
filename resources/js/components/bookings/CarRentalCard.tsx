import type { Booking } from '../../types/booking';
import { Card } from '../ui/Card';

export const CarRentalCard = ({ booking }: { booking: Booking }) => (
  <Card>
    <h3 className="font-semibold">{booking.carCompany}</h3>
    <p className="text-sm text-korea-muted">{booking.carModel}</p>
    <p className="mt-1 text-xs text-korea-muted">{booking.pickupLocation} → {booking.returnLocation}</p>
  </Card>
);
