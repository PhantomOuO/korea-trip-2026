import { AvatarUploader } from '../components/members/AvatarUploader';
import { MemberCard } from '../components/members/MemberCard';
import { MemberForm } from '../components/members/MemberForm';
import { useMembers } from '../hooks/useMembers';

export const MembersPage = () => {
  const { data } = useMembers();

  return (
    <div className="space-y-3">
      {data.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
      <AvatarUploader onSelect={() => undefined} />
      <MemberForm />
    </div>
  );
};
