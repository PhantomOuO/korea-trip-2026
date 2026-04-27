import type { PlanningItem, PlanningItemType } from '../../types/planning';
import { planningTypeLabels } from '../../constants/categories';
import { ChecklistItem } from './ChecklistItem';

export const ChecklistGroup = ({ type, items }: { type: PlanningItemType; items: PlanningItem[] }) => (
  <section>
    <h3 className="mb-2 text-sm font-semibold text-korea-ink">{planningTypeLabels[type]}</h3>
    <div className="space-y-2">
      {items.map((item) => <ChecklistItem key={item.id} item={item} />)}
    </div>
  </section>
);
