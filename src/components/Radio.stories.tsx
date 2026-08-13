import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './Radio';
import { Label } from './Label';

const meta: Meta<typeof RadioGroup> = {
  title: 'Actions/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="monthly" aria-label="Billing Frequency" {...args}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="monthly" id="r-monthly" />
        <Label htmlFor="r-monthly">Monthly Billing</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <RadioGroupItem value="annual" id="r-annual" />
        <Label htmlFor="r-annual">Annual Billing (Save 20%)</Label>
      </div>
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [val, setVal] = useState('email');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <RadioGroup value={val} onValueChange={setVal} aria-label="Notification Preference">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RadioGroupItem value="email" id="r-email" />
            <Label htmlFor="r-email">Email Notifications</Label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RadioGroupItem value="sms" id="r-sms" />
            <Label htmlFor="r-sms">SMS Notifications</Label>
          </div>
        </RadioGroup>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Selected: {val}</span>
      </div>
    );
  },
};
