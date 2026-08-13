import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Feedback',
    placeholder: 'Tell us how we can improve...',
    helperText: 'Max 500 characters',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    label: 'Project Description',
    errorText: 'Description must be at least 20 characters',
  },
};
