import type { Booking } from '../../types/booking';
import { Card } from '../ui/Card';

export const VoucherList = ({ vouchers }: { vouchers: Booking[] }) => (
  <div className="space-y-3">
    {vouchers.map((voucher) => (
      <Card key={voucher.id}>
        <h3 className="font-semibold">{voucher.title}</h3>
        <p className="text-sm text-korea-muted">{voucher.date}</p>
      </Card>
    ))}
  </div>
);
