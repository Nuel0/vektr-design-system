import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'raised', 'sunken', 'inverse'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const ComposedCard: Story = {
  render: (args) => (
    <Card variant="raised" style={{ maxWidth: '360px' }} {...args}>
      <CardHeader style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <CardTitle>Pro Plan Subscription</CardTitle>
          <CardDescription>Billed annually</CardDescription>
        </div>
        <Badge variant="success">Active</Badge>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
          Access all 25 Vektr components, multi-brand themes, and priority REST API sync.
        </p>
      </CardBody>
      <CardFooter style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <Button variant="outline" size="sm">Manage</Button>
        <Button variant="primary" size="sm">Upgrade</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card variant="base" style={{ width: '220px', padding: '16px' }}>
        <CardTitle>Base Surface</CardTitle>
        <CardDescription>Flat subtle border</CardDescription>
      </Card>
      <Card variant="raised" style={{ width: '220px', padding: '16px' }}>
        <CardTitle>Raised Surface</CardTitle>
        <CardDescription>Elevated box shadow</CardDescription>
      </Card>
      <Card variant="sunken" style={{ width: '220px', padding: '16px' }}>
        <CardTitle>Sunken Surface</CardTitle>
        <CardDescription>Inset background well</CardDescription>
      </Card>
    </div>
  ),
};
