import type { PlanningItem } from '../../types/planning';
import { Card } from '../ui/Card';

export const ChecklistItem = ({ item }: { item: PlanningItem }) => (
  <Card className="flex items-center justify-between rounded-2xl p-3">
    <p className="text-sm text-korea-ink">{item.title}</p>
    <input type="checkbox" checked={item.isDone} readOnly className="h-4 w-4 rounded border-korea-line" />
  </Card>
);
