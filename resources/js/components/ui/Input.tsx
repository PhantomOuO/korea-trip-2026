import type { InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={classNames(
      'h-11 w-full rounded-2xl border border-korea-line bg-white px-3 text-sm text-korea-ink',
      'focus:border-korea-kimchi focus:outline-none',
      className
    )}
    {...props}
  />
);
