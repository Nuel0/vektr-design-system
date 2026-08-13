import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '280px' }}>
      <Select defaultValue="light">
        <SelectTrigger aria-label="Select Theme">
          <SelectValue placeholder="Choose theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light Mode</SelectItem>
          <SelectItem value="dark">Dark Mode</SelectItem>
          <SelectItem value="system">System Default</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [val, setVal] = useState('fintech');
    return (
      <div style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Select value={val} onValueChange={setVal}>
          <SelectTrigger aria-label="Select Brand">
            <SelectValue placeholder="Choose brand palette" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default Palette</SelectItem>
            <SelectItem value="fintech">Fintech Palette</SelectItem>
            <SelectItem value="health-tech">HealthTech Palette</SelectItem>
            <SelectItem value="hospitality">Hospitality Palette</SelectItem>
            <SelectItem value="edtech">EdTech Palette</SelectItem>
          </SelectContent>
        </Select>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Selected Brand: {val}</span>
      </div>
    );
  },
};
