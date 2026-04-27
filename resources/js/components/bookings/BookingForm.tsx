import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

export const BookingForm = () => {
  const [type, setType] = useState('flight');

  return (
    <form className="space-y-3 rounded-4xl border border-korea-line bg-white p-4">
      <h3 className="text-sm font-semibold text-korea-ink">新增預訂（MVP 示意）</h3>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="flight">機票</option>
        <option value="hotel">住宿</option>
        <option value="car">租車</option>
        <option value="voucher">票券</option>
      </Select>
      <Input placeholder="標題" />
      <Input type="date" />
      <Textarea placeholder="備註" rows={3} />
      <Button type="button" variant="secondary" className="w-full">儲存（僅 UI）</Button>
    </form>
  );
};
