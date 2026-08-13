import React, { useId } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, errorText, id: customId, className, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = customId || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const describedBy = [
      errorText ? errorId : null,
      helperText && !errorText ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className={clsx('vektr-input-wrapper', className)} data-disabled={disabled ? 'true' : undefined}>
        {label && (
          <label htmlFor={inputId} className="vektr-input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={Boolean(errorText)}
          aria-describedby={describedBy}
          data-invalid={Boolean(errorText) ? 'true' : undefined}
          data-disabled={disabled ? 'true' : undefined}
          className="vektr-input"
          {...props}
        />
        {errorText ? (
          <span id={errorId} role="alert" className="vektr-input-error-text">
            {errorText}
          </span>
        ) : helperText ? (
          <span id={helperId} className="vektr-input-helper-text">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
