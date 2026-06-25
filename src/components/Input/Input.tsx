import { useId, type InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md';
export type InputState = 'placeholder' | 'done' | 'focused' | 'disabled' | 'readonly' | 'error';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  size?: InputSize;
  state?: InputState;
  showLabel?: boolean;
  showHelperText?: boolean;
  required?: boolean;
  optional?: boolean;
  rightText?: string;
  showRightText?: boolean;
}

export function Input({
  label = 'Label',
  helperText = 'Helper text',
  size = 'md',
  state = 'placeholder',
  showLabel = true,
  showHelperText = true,
  required = false,
  optional = false,
  placeholder = 'placeholder',
  rightText = 'text',
  showRightText = false,
  className,
  disabled,
  readOnly,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isDisabled = disabled || state === 'disabled';
  const isReadOnly = readOnly || state === 'readonly';
  const isError = state === 'error';

  return (
    <div className={[styles.wrapper, styles[`size-${size}`], className].filter(Boolean).join(' ')} data-node-id="336:4290">
      {showLabel && (
        <label htmlFor={inputId} className={styles.labelRow}>
          <span className={styles.label}>{label}</span>
          {required && <span className={styles.required}>*</span>}
          {optional && <span className={styles.optional}>(optional)</span>}
        </label>
      )}
      <div
        className={[
          styles.field,
          isError && styles.fieldError,
          isDisabled && styles.fieldDisabled,
          isReadOnly && styles.fieldReadonly,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <input
          id={inputId}
          className={styles.input}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={isReadOnly}
          aria-invalid={isError}
          {...props}
        />
        {showRightText && <span className={styles.rightText}>{rightText}</span>}
        <span className={styles.interaction} aria-hidden />
      </div>
      {showHelperText && (
        <p className={[styles.helper, isError && styles.helperError].filter(Boolean).join(' ')}>
          {helperText}
        </p>
      )}
    </div>
  );
}
