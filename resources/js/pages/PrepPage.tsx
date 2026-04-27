import { useMemo } from 'react';
import { MemberCard } from '../components/members/MemberCard';
import { ChecklistGroup } from '../components/planning/ChecklistGroup';
import { PlanningProgress } from '../components/planning/PlanningProgress';
import { useMembers } from '../hooks/useMembers';
import { usePlanning } from '../hooks/usePlanning';

export const PrepPage = () => {
  const { data: planning } = usePlanning();
  const { data: members } = useMembers();
  const todo = useMemo(() => planning.filter((item) => item.type === 'todo'), [planning]);
  const luggage = useMemo(() => planning.filter((item) => item.type === 'luggage'), [planning]);

  return (
    <div className="space-y-4">
      <PlanningProgress items={planning} />
      <ChecklistGroup type="todo" items={todo} />
      <ChecklistGroup type="luggage" items={luggage} />

      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-korea-ink">同行成員與分工</h2>
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </section>
    </div>
  );
};
