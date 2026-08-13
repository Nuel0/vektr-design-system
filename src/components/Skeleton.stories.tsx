import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Status/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Skeleton style={{ height: '40px', width: '100%', borderRadius: '8px' }} />
      <Skeleton style={{ height: '20px', width: '80%', borderRadius: '4px' }} />
      <Skeleton style={{ height: '20px', width: '60%', borderRadius: '4px' }} />
    </div>
  ),
};
