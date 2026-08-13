import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Card } from './Card';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <Tabs defaultValue="account">
        <TabsList aria-label="Settings Tabs">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account" style={{ marginTop: '16px' }}>
          <Card variant="base" style={{ padding: '16px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Account Settings</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Manage your profile name and email address preferences.</p>
          </Card>
        </TabsContent>
        <TabsContent value="password" style={{ marginTop: '16px' }}>
          <Card variant="base" style={{ padding: '16px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Password & Security</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>Change your password and enable multi-factor authentication.</p>
          </Card>
        </TabsContent>
        <TabsContent value="billing" style={{ marginTop: '16px' }}>
          <Card variant="base" style={{ padding: '16px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>Billing Information</h4>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>View past invoices and payment method details.</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
