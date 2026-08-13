import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';
import { Button } from './Button';

const meta: Meta = {
  title: 'Overlays/Tooltip',
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Hover For Info</Button>
        </TooltipTrigger>
        <TooltipContent>
          WCAG compliant tooltips powered by Radix UI.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
