import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-korea-kimchi text-white shadow-soft',
  secondary: 'bg-korea-sageSoft text-korea-ink border border-korea-sage',
  ghost: 'bg-transparent text-korea-ink',
  danger: 'bg-rose-500 text-white shadow-soft'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base'
};

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  ...props
}: Props) => (
  <button
    className={classNames(
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold',
      'transition duration-150 active:scale-95 disabled:opacity-50',
      variantClasses[variant],
      sizeClasses[size],
      className
    )}
    {...props}
  >
    {icon}
    <span>{children}</span>
  </button>
);
