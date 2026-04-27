import { scheduleCategoryLabels } from '../../constants/categories';
import type { ScheduleCategory } from '../../types/schedule';
import { Badge } from '../ui/Badge';

const styles: Record<ScheduleCategory, string> = {
  spot: 'bg-korea-skySoft text-sky-700',
  food: 'bg-korea-peachSoft text-orange-700',
  transport: 'bg-korea-sandSoft text-amber-700',
  hotel: 'bg-korea-roseSoft text-pink-700',
  shopping: 'bg-korea-sageSoft text-emerald-700',
  other: 'bg-gray-100 text-gray-700'
};

export const ScheduleCategoryBadge = ({ category }: { category: ScheduleCategory }) => (
  <Badge className={styles[category]}>{scheduleCategoryLabels[category]}</Badge>
);
