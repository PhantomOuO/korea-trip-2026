import type { PlanningItem } from '../../types/planning';
import { Card } from '../ui/Card';

export const PlanningProgressCard = ({ items }: { items: PlanningItem[] }) => {
  const done = items.filter((item) => item.isDone).length;
  const progress = items.length > 0 ? Math.round((done / items.length) * 100) : 0;

  return (
    <Card>
      <p className="text-sm font-semibold text-korea-ink">準備清單完成度</p>
      <p className="mt-2 text-sm text-korea-muted">{done}/{items.length}（{progress}%）</p>
      <div className="mt-3 h-2 rounded-full bg-korea-line">
        <div className="h-2 rounded-full bg-korea-sage" style={{ width: `${progress}%` }} />
      </div>
    </Card>
  );
};
