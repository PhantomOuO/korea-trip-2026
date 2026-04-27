import type { PropsWithChildren } from 'react';
import { classNames } from '../../utils/classNames';

type CardVariant = 'default' | 'sticker' | 'soft' | 'ticket';

type Props = PropsWithChildren<{ className?: string; variant?: CardVariant }>;

const variantClass: Record<CardVariant, string> = {
  default: 'shadow-soft',
  soft: 'shadow-soft',
  sticker: 'shadow-sticker',
  ticket: 'shadow-ticket'
};

export const Card = ({ children, className, variant = 'default' }: Props) => (
  <section
    className={classNames(
      'rounded-4xl border border-korea-line bg-korea-card p-4',
      variantClass[variant],
      className
    )}
  >
    {children}
  </section>
);
