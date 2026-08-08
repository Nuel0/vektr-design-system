import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'base' | 'raised' | 'sunken' | 'inverse';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'base',
  style,
  className = '',
  ...props
}) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    base: {
      backgroundColor: 'var(--surface-base)',
      color: 'var(--text-primary)',
      border: 'var(--border-width-thin, 1px) solid var(--border-default)',
      boxShadow: '0 1px 3px var(--shadow-color-sm)',
    },
    raised: {
      backgroundColor: 'var(--surface-raised)',
      color: 'var(--text-primary)',
      border: 'var(--border-width-thin, 1px) solid var(--border-default)',
      boxShadow: '0 4px 6px var(--shadow-color-md)',
    },
    sunken: {
      backgroundColor: 'var(--surface-sunken)',
      color: 'var(--text-primary)',
      border: 'var(--border-width-thin, 1px) solid var(--border-default)',
    },
    inverse: {
      backgroundColor: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: '1px solid transparent',
    },
  };

  const cardStyle: React.CSSProperties = {
    borderRadius: 'var(--radius-brand, 8px)',
    padding: 'var(--space-6, 24px)',
    transition: 'all 0.2s ease-in-out',
    ...variantStyles[variant],
    ...style,
  };

  return (
    <div style={cardStyle} className={`vektr-card vektr-card-${variant} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, className = '', ...props }) => (
  <div style={{ marginBottom: 'var(--space-4, 16px)', ...style }} className={`vektr-card-header ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, className = '', ...props }) => (
  <div style={{ marginBottom: 'var(--space-4, 16px)', ...style }} className={`vektr-card-body ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, className = '', ...props }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 'var(--spacing-brand-gap, 8px)', ...style }} className={`vektr-card-footer ${className}`} {...props}>
    {children}
  </div>
);
