import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorText,
  style,
  className = '',
  disabled,
  ...props
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-1, 4px)',
    width: '100%',
    fontFamily: 'var(--font-body, inherit)',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 'var(--label-base, 12px)',
    fontWeight: 600,
    color: 'var(--text-primary)',
  };

  const inputStyle: React.CSSProperties = {
    padding: 'var(--spacing-brand-padding, 12px)',
    borderRadius: 'var(--radius-brand, 8px)',
    border: `var(--border-width-default, 1.5px) solid ${errorText ? 'var(--status-danger)' : 'var(--border-default)'}`,
    backgroundColor: disabled ? 'var(--surface-disabled)' : 'var(--surface-base)',
    color: 'var(--text-primary)',
    fontSize: 'var(--body-base, 14px)',
    outline: 'none',
    transition: 'border-color 0.2s ease-in-out',
    ...style,
  };

  return (
    <div style={containerStyle} className={`vektr-input-wrapper ${className}`}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        style={inputStyle}
        disabled={disabled}
        className={`vektr-input ${errorText ? 'vektr-input-error' : ''}`}
        {...props}
      />
      {errorText ? (
        <span style={{ fontSize: 'var(--caption-sm, 11px)', color: 'var(--status-danger-text)' }}>{errorText}</span>
      ) : helperText ? (
        <span style={{ fontSize: 'var(--caption-sm, 11px)', color: 'var(--text-muted)' }}>{helperText}</span>
      ) : null}
    </div>
  );
};
