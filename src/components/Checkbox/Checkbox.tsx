import { useEffect, useId, useRef, type InputHTMLAttributes, type ReactNode } from 'react';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'sm' | 'md';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: ReactNode;
  size?: CheckboxSize;
  indeterminate?: boolean;
}

export function Checkbox({
  label,
  size = 'md',
  indeterminate = false,
  checked,
  className,
  id,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={[styles.root, styles[`size-${size}`], className].filter(Boolean).join(' ')}
      data-node-id="13504:83367"
    >
      <span className={styles.control}>
        <input
          ref={inputRef}
          type="checkbox"
          id={inputId}
          className={styles.input}
          checked={checked}
          {...props}
        />
        <span className={styles.box} aria-hidden>
          {checked && !indeterminate && (
            <svg className={styles.check} viewBox="0 0 12 10" fill="none">
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && <span className={styles.indeterminate} />}
        </span>
        <span className={styles.interaction} aria-hidden />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
