import React, { useId } from 'react';
import { clsx } from 'clsx';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, errorText, id: customId, className, disabled, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = customId || generatedId;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;

    const describedBy = [
      errorText ? errorId : null,
      helperText && !errorText ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className={clsx('vektr-textarea-wrapper', className)} data-disabled={disabled ? 'true' : undefined}>
        {label && (
          <label htmlFor={textareaId} className="vektr-textarea-label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          aria-invalid={Boolean(errorText)}
          aria-describedby={describedBy}
          data-invalid={Boolean(errorText) ? 'true' : undefined}
          data-disabled={disabled ? 'true' : undefined}
          className="vektr-textarea"
          {...props}
        />
        {errorText ? (
          <span id={errorId} role="alert" className="vektr-textarea-error-text">
            {errorText}
          </span>
        ) : helperText ? (
          <span id={helperId} className="vektr-textarea-helper-text">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
