import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import { Button } from './Button';

const meta: Meta = {
  title: 'Status/Toast',
  tags: ['autodocs'],
};

export default meta;

const ToastDemo = () => {
  const { toast } = useToast();
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button
        variant="primary"
        onClick={() => toast({ title: 'Changes Saved', description: 'Your project settings were updated.' })}
      >
        Trigger Info Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() => toast({ title: 'Success', description: 'Tokens synced with Figma REST API.', variant: 'success' })}
      >
        Trigger Success Toast
      </Button>
      <Button
        variant="danger"
        onClick={() => toast({ title: 'Error', description: 'Failed to deploy showcase build.', variant: 'danger' })}
      >
        Trigger Danger Toast
      </Button>
    </div>
  );
};

export const InteractiveToast: StoryObj = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
