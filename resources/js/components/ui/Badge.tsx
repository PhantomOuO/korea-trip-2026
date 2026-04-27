import type { PropsWithChildren } from 'react';
import { classNames } from '../../utils/classNames';

export const Badge = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <span className={classNames('inline-flex rounded-full px-2.5 py-1 text-xs font-semibold', className)}>
    {children}
  </span>
);
