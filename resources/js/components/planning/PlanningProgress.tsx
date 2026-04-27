import type { PlanningItem } from '../../types/planning';

export const PlanningProgress = ({ items }: { items: PlanningItem[] }) => {
  const done = items.filter((item) => item.isDone).length;
  const total = items.length;
  return <p className="text-sm text-korea-muted">完成度：{done}/{total}</p>;
};
