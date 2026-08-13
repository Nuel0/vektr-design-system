import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from './Drawer';
import { Button } from './Button';

const meta: Meta<typeof Drawer> = {
  title: 'Overlays/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'radio',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const SideDrawer: Story = {
  render: (args) => (
    <Drawer side="right" {...args}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Navigation Drawer</Button>
      </DrawerTrigger>
      <DrawerContent style={{ width: '320px', padding: '20px' }}>
        <DrawerHeader>
          <DrawerTitle>Navigation Menu</DrawerTitle>
          <DrawerDescription>Access system configuration & component docs.</DrawerDescription>
        </DrawerHeader>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Dashboard</Button>
          <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Design Tokens</Button>
          <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Component Registry</Button>
        </div>
        <div style={{ marginTop: '24px' }}>
          <DrawerClose asChild>
            <Button variant="outline" style={{ width: '100%' }}>Close Menu</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
