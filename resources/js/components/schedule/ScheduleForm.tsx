import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

export const ScheduleForm = () => (
  <form className="space-y-3 rounded-4xl border border-korea-line bg-white p-4">
    <h3 className="text-sm font-semibold">新增行程（MVP 示意）</h3>
    <Input type="date" />
    <Input type="time" />
    <Input placeholder="標題" />
    <Input placeholder="地點" />
    <Select defaultValue="spot">
      <option value="spot">景點</option>
      <option value="food">美食</option>
      <option value="transport">交通</option>
      <option value="hotel">住宿</option>
      <option value="shopping">購物</option>
      <option value="other">其他</option>
    </Select>
    <Textarea rows={3} placeholder="備註" />
    <Button type="button" variant="secondary" className="w-full">儲存（僅 UI）</Button>
  </form>
);
