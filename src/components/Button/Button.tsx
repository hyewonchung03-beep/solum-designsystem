import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonStyle = 'solid' | 'outlined' | 'danger' | 'text' | 'link';
export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  styleVariant?: ButtonStyle;
  typeVariant?: ButtonType;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
}

export function Button({
  label = 'label',
  styleVariant = 'solid',
  typeVariant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  showLeftIcon = false,
  showRightIcon = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const content = children ?? label;

  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        styles.button,
        styles[`style-${styleVariant}`],
        styles[`type-${typeVariant}`],
        styles[`size-${size}`],
        disabled && styles.disabled,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-node-id="67:1268"
      {...props}
    >
      {showLeftIcon && (
        <span className={styles.icon} aria-hidden>
          {leftIcon ?? <span className={styles.iconPlaceholder} />}
        </span>
      )}
      <span className={styles.label}>{content}</span>
      {showRightIcon && (
        <span className={styles.icon} aria-hidden>
          {rightIcon ?? <span className={styles.iconPlaceholder} />}
        </span>
      )}
      <span className={styles.interaction} aria-hidden />
    </button>
  );
}
