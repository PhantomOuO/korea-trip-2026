import { useMemo, useState } from 'react';
import { bookingSeed } from '../data/bookingSeed';
import { expenseSeed } from '../data/expenseSeed';
import { planningSeed } from '../data/planningSeed';
import { scheduleSeed } from '../data/scheduleSeed';
import { seedTrip } from '../data/seedTrip';
import { CountdownCard } from '../components/dashboard/CountdownCard';
import { ExpenseSummaryCard } from '../components/dashboard/ExpenseSummaryCard';
import { NextBookingCard } from '../components/dashboard/NextBookingCard';
import { NextScheduleCard } from '../components/dashboard/NextScheduleCard';
import { PlanningProgressCard } from '../components/dashboard/PlanningProgressCard';
import { TripHeroCard } from '../components/dashboard/TripHeroCard';
import { DateScroller } from '../components/schedule/DateScroller';
import { ScheduleDetailModal } from '../components/schedule/ScheduleDetailModal';
import { TimelineItem } from '../components/schedule/TimelineItem';
import { ScheduleForm } from '../components/schedule/ScheduleForm';
import type { ScheduleItem } from '../types/schedule';

const TRIP_DATES = ['2026-06-05', '2026-06-06', '2026-06-07', '2026-06-08', '2026-06-09'];

export const DashboardPage = () => {
  const [selectedDate, setSelectedDate] = useState(TRIP_DATES[0]);
  const [selectedItem, setSelectedItem] = useState<ScheduleItem | null>(null);

  const selectedSchedule = useMemo(
    () => scheduleSeed.filter((item) => item.date === selectedDate),
    [selectedDate]
  );

  const nextSchedule = scheduleSeed[0];
  const nextBooking = bookingSeed[0];

  return (
    <div className="space-y-4">
      <TripHeroCard trip={seedTrip} />
      <CountdownCard trip={seedTrip} />
      <NextScheduleCard item={nextSchedule} />
      <NextBookingCard booking={nextBooking} />
      <ExpenseSummaryCard expenses={expenseSeed} />
      <PlanningProgressCard items={planningSeed} />

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-korea-ink">行程時間軸</h2>
        <DateScroller dates={TRIP_DATES} activeDate={selectedDate} onSelect={setSelectedDate} />
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
