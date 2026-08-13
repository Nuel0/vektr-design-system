import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Form Field Label',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
