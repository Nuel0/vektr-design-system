import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './Dropdown';
import { Button } from './Button';
import { User, Gear, SignOut } from '@phosphor-icons/react';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Overlays/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">User Actions ▾</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ minWidth: '180px' }}>
        <DropdownMenuItem style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <User size={16} /> Profile Settings
        </DropdownMenuItem>
        <DropdownMenuItem style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Gear size={16} /> System Preferences
        </DropdownMenuItem>
        <DropdownMenuItem style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--status-danger)' }}>
          <SignOut size={16} /> Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
