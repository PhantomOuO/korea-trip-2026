import type { TextareaHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export const Textarea = ({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={classNames(
      'w-full rounded-2xl border border-korea-line bg-white p-3 text-sm text-korea-ink',
      'focus:border-korea-kimchi focus:outline-none',
      className
    )}
    {...props}
  />
);
