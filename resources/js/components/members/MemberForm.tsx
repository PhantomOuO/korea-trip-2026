import { useState } from 'react';
import type { MemberRole } from '../../types/member';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

export const MemberForm = () => {
  const [role, setRole] = useState<MemberRole>('editor');

  return (
    <form className="space-y-3 rounded-4xl border border-korea-line bg-white p-4">
      <h3 className="text-sm font-semibold">新增成員（MVP 示意）</h3>
      <Input placeholder="姓名" />
      <Input placeholder="暱稱" />
      <Select value={role} onChange={(e) => setRole(e.target.value as MemberRole)}>
        <option value="owner">owner</option>
        <option value="editor">editor</option>
        <option value="viewer">viewer</option>
      </Select>
      <Input type="number" defaultValue={1} min={0} step={0.1} />
      <Button type="button" variant="secondary" className="w-full">儲存（僅 UI）</Button>
    </form>
  );
};
