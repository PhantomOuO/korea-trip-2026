import type { ScheduleItem } from '../../types/schedule';
import { Card } from '../ui/Card';
import { ScheduleCategoryBadge } from './ScheduleCategoryBadge';

export const TimelineItem = ({ item, onClick }: { item: ScheduleItem; onClick: () => void }) => (
  <button className="w-full text-left" onClick={onClick} type="button">
    <Card className="mb-3 p-3" variant="sticker">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-korea-muted">{item.time}</p>
          <h3 className="mt-1 font-semibold text-korea-ink">{item.title}</h3>
          <p className="mt-1 text-sm text-korea-muted">{item.locationName}</p>
        </div>
        <ScheduleCategoryBadge category={item.category} />
      </div>
    </Card>
  </button>
);
