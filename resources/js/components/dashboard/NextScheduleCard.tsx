import type { ScheduleItem } from '../../types/schedule';
import { Card } from '../ui/Card';
import { ScheduleCategoryBadge } from '../schedule/ScheduleCategoryBadge';

export const NextScheduleCard = ({ item }: { item?: ScheduleItem }) => (
  <Card>
    <p className="text-sm font-semibold text-korea-ink">下一個行程</p>
    {item ? (
      <div className="mt-2">
        <p className="text-xs text-korea-muted">{item.date} {item.time}</p>
        <p className="font-semibold">{item.title}</p>
        <div className="mt-2"><ScheduleCategoryBadge category={item.category} /></div>
      </div>
    ) : (
      <p className="mt-2 text-sm text-korea-muted">目前沒有下一個行程</p>
    )}
  </Card>
);
