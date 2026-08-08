import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'success',
  style,
  className = '',
  ...props
}) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    success: {
      backgroundColor: 'var(--status-success-bg)',
      color: 'var(--status-success-text)',
      border: '1px solid var(--status-success)',
    },
    warning: {
      backgroundColor: 'var(--status-warning-bg)',
      color: 'var(--status-warning-text)',
      border: '1px solid var(--status-warning)',
    },
    danger: {
      backgroundColor: 'var(--status-danger-bg)',
      color: 'var(--status-danger-text)',
      border: '1px solid var(--status-danger)',
    },
    info: {
      backgroundColor: 'var(--status-info-bg)',
      color: 'var(--status-info-text)',
      border: '1px solid var(--status-info)',
    },
    neutral: {
      backgroundColor: 'var(--fill-gray-100)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)',
    },
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: 'var(--space-1, 4px) var(--space-3, 12px)',
    borderRadius: 'var(--radius-full, 9999px)',
    fontSize: 'var(--caption-base, 12px)',
    fontWeight: 600,
    lineHeight: 1,
    ...variantStyles[variant],
    ...style,
  };

  return (
    <span style={badgeStyle} className={`vektr-badge vektr-badge-${variant} ${className}`} {...props}>
      {children}
    </span>
  );
};
