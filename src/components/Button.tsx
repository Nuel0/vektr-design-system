import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  style,
  className = '',
  ...props
}) => {
  // Base button inline styles using Vektr CSS variables
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-brand-gap, 8px)',
    borderRadius: 'var(--radius-brand, 8px)',
    fontWeight: 600,
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.6 : 1,
    transition: 'all 0.2s ease-in-out',
    border: 'var(--border-brand-width, 1px) solid transparent',
    outline: 'none',
    fontFamily: 'var(--font-body, inherit)',
  };

  // Variant specific styling
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--brand-primary)',
      color: 'var(--text-inverse)',
      borderColor: 'var(--brand-primary)',
    },
    secondary: {
      backgroundColor: 'var(--surface-raised)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-default)',
    },
    danger: {
      backgroundColor: 'var(--status-danger)',
      color: '#ffffff',
      borderColor: 'var(--status-danger)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--text-primary)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--brand-primary)',
      borderColor: 'var(--brand-primary)',
    },
  };

  // Size specific padding & font size
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: 'var(--space-1, 4px) var(--space-3, 12px)',
      fontSize: 'var(--body-sm, 12px)',
    },
    md: {
      padding: 'var(--spacing-brand-padding, 12px) var(--space-4, 16px)',
      fontSize: 'var(--body-base, 14px)',
    },
    lg: {
      padding: 'var(--space-4, 16px) var(--space-6, 24px)',
      fontSize: 'var(--body-lg, 16px)',
    },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <button
      style={combinedStyles}
      disabled={disabled || isLoading}
      className={`vektr-button vektr-button-${variant} vektr-button-${size} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>⏳</span>
      ) : (
        <>
          {leftIcon && <span style={{ display: 'inline-flex' }}>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span style={{ display: 'inline-flex' }}>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
