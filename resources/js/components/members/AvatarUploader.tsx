import { useRef } from 'react';
import { Button } from '../ui/Button';

export const AvatarUploader = ({ onSelect }: { onSelect: (file: File | null) => void }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => onSelect(e.target.files?.[0] ?? null)}
      />
      <Button type="button" variant="secondary" onClick={() => ref.current?.click()}>
        上傳頭像
      </Button>
    </div>
  );
};
