import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Email Address',
    placeholder: 'name@company.com',
    helperText: "We'll send your invoices here.",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    label: 'Work Email',
    placeholder: 'user@company.com',
    errorText: 'Invalid email address format',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account Identifier',
    value: 'ACC-883921',
    disabled: true,
    helperText: 'Account ID cannot be edited.',
  },
};
