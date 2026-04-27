import type { Member } from '../../types/member';
import { Card } from '../ui/Card';

export const MemberCard = ({ member }: { member: Member }) => (
  <Card className="flex items-center justify-between rounded-3xl p-3">
    <div>
      <p className="font-semibold">{member.name}</p>
      <p className="text-xs text-korea-muted">{member.role} · split {member.splitWeight}</p>
    </div>
    <span className="inline-block h-8 w-8 rounded-full bg-korea-peachSoft" />
  </Card>
);
