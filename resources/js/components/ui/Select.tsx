import type { SelectHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export const Select = ({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select
    className={classNames(
      'h-11 w-full rounded-2xl border border-korea-line bg-white px-3 text-sm text-korea-ink',
      'focus:border-korea-kimchi focus:outline-none',
      className
    )}
    {...props}
  />
);
