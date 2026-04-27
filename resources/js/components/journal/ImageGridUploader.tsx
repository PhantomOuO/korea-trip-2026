import { useRef } from 'react';
import { Button } from '../ui/Button';

export const ImageGridUploader = ({ onSelect }: { onSelect: (files: File[]) => void }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => onSelect(Array.from(e.target.files ?? []).slice(0, 9))}
      />
      <Button type="button" variant="secondary" onClick={() => ref.current?.click()}>
        上傳圖片（最多 9 張）
      </Button>
    </div>
  );
};
