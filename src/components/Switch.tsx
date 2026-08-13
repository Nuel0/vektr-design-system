import React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { clsx } from 'clsx';

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={clsx('vektr-switch', className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className="vektr-switch-thumb" />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
