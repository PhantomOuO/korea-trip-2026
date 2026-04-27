import { useMemo, useState } from 'react';
import { BoardingPassCard } from '../components/bookings/BoardingPassCard';
import { CarRentalCard } from '../components/bookings/CarRentalCard';
import { HotelCard } from '../components/bookings/HotelCard';
import { VoucherList } from '../components/bookings/VoucherList';
import { DateScroller } from '../components/schedule/DateScroller';
import { ScheduleDetailModal } from '../components/schedule/ScheduleDetailModal';
import { ScheduleForm } from '../components/schedule/ScheduleForm';
import { TimelineItem } from '../components/schedule/TimelineItem';
import { useBookings } from '../hooks/useBookings';
import { useSchedule } from '../hooks/useSchedule';
import type { ScheduleItem } from '../types/schedule';

export const ItineraryPage = () => {
  const { data: bookings } = useBookings();
  const { data: schedule } = useSchedule();
  const dates = useMemo(() => [...new Set(schedule.map((item) => item.date))], [schedule]);
  const [selectedDate, setSelectedDate] = useState(dates[0] ?? '');
  const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);

  const flight = useMemo(() => bookings.find((item) => item.type === 'flight'), [bookings]);
  const hotel = useMemo(() => bookings.find((item) => item.type === 'hotel'), [bookings]);
  const car = useMemo(() => bookings.find((item) => item.type === 'car'), [bookings]);
  const vouchers = useMemo(() => bookings.filter((item) => item.type === 'voucher'), [bookings]);
  const selectedSchedule = useMemo(
    () => schedule.filter((item) => item.date === selectedDate),
    [schedule, selectedDate]
  );

  return (
    <div className="space-y-4">
      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-korea-ink">核心預訂</h2>
        {flight ? <BoardingPassCard booking={flight} /> : null}
        {hotel ? <HotelCard booking={hotel} /> : null}
        {car ? <CarRentalCard booking={car} /> : null}
        <VoucherList vouchers={vouchers} />
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-korea-ink">每日行程</h2>
        <DateScroller dates={dates} activeDate={selectedDate} onSelect={setSelectedDate} />
        <div>
          {selectedSchedule.map((item) => (
            <TimelineItem key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </section>

      <ScheduleDetailModal item={selectedItem} open={Boolean(selectedItem)} onClose={() => setSelectedItem(null)} />
      <ScheduleForm />
    </div>
  );
};
