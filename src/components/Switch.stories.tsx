import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { Label } from './Label';

const meta: Meta<typeof Switch> = {
  title: 'Actions/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Switch id="sw1" {...args} />
      <Label htmlFor="sw1">Enable Dark Mode</Label>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch id="sw2" checked={enabled} onCheckedChange={setEnabled} />
        <Label htmlFor="sw2">Feature Switch: {enabled ? 'ON' : 'OFF'}</Label>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch id="sw3" disabled defaultChecked />
        <Label htmlFor="sw3">Disabled Active Switch</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Switch id="sw4" disabled />
        <Label htmlFor="sw4">Disabled Inactive Switch</Label>
      </div>
    </div>
  ),
};
