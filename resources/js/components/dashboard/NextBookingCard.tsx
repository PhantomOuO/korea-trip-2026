import type { Booking } from '../../types/booking';
import { Card } from '../ui/Card';

export const NextBookingCard = ({ booking }: { booking?: Booking }) => (
  <Card>
    <p className="text-sm font-semibold text-korea-ink">下一個預訂</p>
    {booking ? (
      <>
        <p className="mt-2 font-semibold text-korea-ink">{booking.title}</p>
        <p className="text-sm text-korea-muted">{booking.startDateTime ?? booking.date ?? '待確認'}</p>
      </>
    ) : (
      <p className="mt-2 text-sm text-korea-muted">目前沒有即將到來的預訂</p>
    )}
  </Card>
);
