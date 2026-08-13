import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, CheckCircle, Trash } from '@phosphor-icons/react';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'outline'],
      description: 'Visual variant of the button',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interactions',
    },
  },
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'md',
    isLoading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete Resource',
    leftIcon: <Trash size={16} />,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Action',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Action',
  },
};

export const WithIcons: Story = {
  args: {
    variant: 'primary',
    children: 'Continue',
    leftIcon: <CheckCircle size={18} />,
    rightIcon: <ArrowRight size={18} />,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Submitting',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};
