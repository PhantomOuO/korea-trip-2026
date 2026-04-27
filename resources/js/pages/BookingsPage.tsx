import { useMemo } from 'react';
import { BoardingPassCard } from '../components/bookings/BoardingPassCard';
import { BookingForm } from '../components/bookings/BookingForm';
import { CarRentalCard } from '../components/bookings/CarRentalCard';
import { HotelCard } from '../components/bookings/HotelCard';
import { VoucherList } from '../components/bookings/VoucherList';
import { useBookings } from '../hooks/useBookings';

export const BookingsPage = () => {
  const { data } = useBookings();
  const flight = useMemo(() => data.find((item) => item.type === 'flight'), [data]);
  const hotel = useMemo(() => data.find((item) => item.type === 'hotel'), [data]);
  const car = useMemo(() => data.find((item) => item.type === 'car'), [data]);
  const vouchers = useMemo(() => data.filter((item) => item.type === 'voucher'), [data]);

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold text-korea-ink">預訂資料</h2>
      {flight ? <BoardingPassCard booking={flight} /> : null}
      {hotel ? <HotelCard booking={hotel} /> : null}
      {car ? <CarRentalCard booking={car} /> : null}
      <VoucherList vouchers={vouchers} />
      <BookingForm />
    </div>
  );
};
