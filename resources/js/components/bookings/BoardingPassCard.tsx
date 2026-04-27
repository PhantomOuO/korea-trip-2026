import type { Booking } from '../../types/booking';
import { Card } from '../ui/Card';

export const BoardingPassCard = ({ booking }: { booking: Booking }) => (
  <Card variant="ticket" className="overflow-hidden p-0">
    <div className="grid grid-cols-[1fr_auto] gap-3 p-4">
      <div>
        <p className="text-xs text-korea-muted">{booking.airline}</p>
        <h3 className="text-lg font-bold">{booking.flightNumber}</h3>
        <p className="text-sm text-korea-muted">{booking.departureAirport} → {booking.arrivalAirport}</p>
      </div>
      <div className="border-l border-dashed border-korea-line pl-3 text-xs text-korea-muted">
        <p>乘客</p>
        <p className="font-semibold text-korea-ink">{booking.passengerName}</p>
      </div>
    </div>
  </Card>
);
