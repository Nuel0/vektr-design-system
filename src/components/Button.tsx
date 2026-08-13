import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isButtonDisabled = disabled || isLoading;

    return (
      <Comp
        ref={ref}
        disabled={asChild ? undefined : isButtonDisabled}
        data-variant={variant}
        data-size={size}
        data-loading={isLoading ? 'true' : undefined}
        data-disabled={isButtonDisabled ? 'true' : undefined}
        aria-busy={isLoading ? true : undefined}
        aria-disabled={isButtonDisabled ? true : undefined}
        className={clsx('vektr-button', className)}
        {...props}
      >
        {isLoading ? (
          <span className="vektr-button-spinner" aria-live="polite">
            ⏳
          </span>
        ) : (
          <>
            {leftIcon && <span className="vektr-button-icon">{leftIcon}</span>}
            {asChild ? children : <span>{children}</span>}
            {rightIcon && <span className="vektr-button-icon">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
