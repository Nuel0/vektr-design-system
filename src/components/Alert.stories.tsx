import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Status/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
  },
  args: {
    variant: 'info',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '480px' }}>
      <Alert {...args}>
        <AlertTitle>System Notice</AlertTitle>
        <AlertDescription>Your account sync completed successfully.</AlertDescription>
      </Alert>
    </div>
  ),
};

export const WarningAlert: Story = {
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <Alert variant="warning">
        <AlertTitle>Figma REST API Credentials Missing</AlertTitle>
        <AlertDescription>
          Daily sync workflow is running in DORMANT mode using cached tokens.json.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
