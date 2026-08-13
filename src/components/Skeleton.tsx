import React from 'react';
import { clsx } from 'clsx';

export const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={clsx('vektr-skeleton', className)} {...props} />
  )
);
Skeleton.displayName = 'Skeleton';
