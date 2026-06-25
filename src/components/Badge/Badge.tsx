import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'outlined' | 'solid';
export type BadgeOption =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'lightBlue'
  | 'indigo'
  | 'pink'
  | 'purple'
  | 'neutral';
export type BadgeFontWeight = 400 | 600;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  option?: BadgeOption;
  fontWeight?: BadgeFontWeight;
  showIndicator?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Badge({
  children = 'Badge',
  size = 'md',
  variant = 'outlined',
  option = 'red',
  fontWeight = 400,
  showIndicator = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        styles.badge,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        styles[`option-${option}`],
        fontWeight === 600 && styles.fontSemibold,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-node-id="1050:283203"
      {...props}
    >
      {showIndicator && <span className={styles.indicator} aria-hidden />}
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.text}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </span>
  );
}
