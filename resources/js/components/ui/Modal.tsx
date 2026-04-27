import type { PropsWithChildren } from 'react';
import { classNames } from '../../utils/classNames';

type Props = PropsWithChildren<{
  open: boolean;
  title?: string;
  onClose: () => void;
}>;

export const Modal = ({ open, title, onClose, children }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div
        className={classNames(
          'absolute bottom-0 left-0 right-0 rounded-t-5xl bg-korea-card p-5 shadow-floating',
          'max-h-[90dvh] overflow-y-auto safe-bottom'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-korea-line" />
        {title ? <h3 className="text-lg font-bold text-korea-ink">{title}</h3> : null}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
