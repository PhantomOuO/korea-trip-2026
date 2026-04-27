import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

export const ChecklistForm = () => (
  <form className="space-y-3 rounded-4xl border border-korea-line bg-white p-4">
    <h3 className="text-sm font-semibold">新增準備項目（MVP 示意）</h3>
    <Input placeholder="項目名稱" />
    <Select defaultValue="todo">
      <option value="todo">待辦</option>
      <option value="luggage">行李</option>
      <option value="shopping">購物</option>
    </Select>
    <Button type="button" variant="secondary" className="w-full">新增（僅 UI）</Button>
  </form>
);
