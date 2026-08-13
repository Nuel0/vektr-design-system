import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { Button } from './Button';
import { Input } from './Input';

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Filter Settings</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: '280px', padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>Filter Projects</h4>
        <Input label="Search keyword" placeholder="e.g. Design Tokens" />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
          <Button variant="primary" size="sm">Apply Filter</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
