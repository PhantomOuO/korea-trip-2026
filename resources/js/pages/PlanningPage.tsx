import { useMemo } from 'react';
import { ChecklistForm } from '../components/planning/ChecklistForm';
import { ChecklistGroup } from '../components/planning/ChecklistGroup';
import { PlanningProgress } from '../components/planning/PlanningProgress';
import { usePlanning } from '../hooks/usePlanning';

export const PlanningPage = () => {
  const { data } = usePlanning();
  const todo = useMemo(() => data.filter((item) => item.type === 'todo'), [data]);
  const luggage = useMemo(() => data.filter((item) => item.type === 'luggage'), [data]);
  const shopping = useMemo(() => data.filter((item) => item.type === 'shopping'), [data]);

  return (
    <div className="space-y-4">
      <PlanningProgress items={data} />
      <ChecklistGroup type="todo" items={todo} />
      <ChecklistGroup type="luggage" items={luggage} />
      <ChecklistGroup type="shopping" items={shopping} />
      <ChecklistForm />
    </div>
  );
};
