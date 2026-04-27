import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { ImageGridUploader } from './ImageGridUploader';

export const JournalForm = () => {
  const [count, setCount] = useState(0);

  return (
    <form className="space-y-3 rounded-4xl border border-korea-line bg-white p-4">
      <h3 className="text-sm font-semibold">新增日誌（MVP 示意）</h3>
      <Input placeholder="標題" />
      <Textarea placeholder="內容" rows={4} />
      <ImageGridUploader onSelect={(files) => setCount(files.length)} />
      <p className="text-xs text-korea-muted">已選擇 {count} 張</p>
      <Button type="button" className="w-full">儲存（僅 UI）</Button>
    </form>
  );
};
