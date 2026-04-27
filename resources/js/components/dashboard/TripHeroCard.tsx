import type { Trip } from '../../types/trip';
import { Card } from '../ui/Card';

export const TripHeroCard = ({ trip }: { trip: Trip }) => (
  <Card className="bg-gradient-to-br from-korea-peachSoft to-korea-sandSoft" variant="ticket">
    <p className="text-xs text-korea-hanok">{trip.destination}</p>
    <h2 className="mt-1 text-xl font-bold text-korea-ink">{trip.title}</h2>
    <p className="mt-2 text-sm text-korea-muted">{trip.startDate} ～ {trip.endDate}</p>
  </Card>
);
