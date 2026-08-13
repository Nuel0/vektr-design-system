import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table';
import { Badge } from './Badge';

const meta: Meta<typeof Table> = {
  title: 'Navigation/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Component</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Button</TableCell>
            <TableCell>Actions</TableCell>
            <TableCell><Badge variant="success">Tested</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dialog</TableCell>
            <TableCell>Overlays</TableCell>
            <TableCell><Badge variant="success">Tested</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tabs</TableCell>
            <TableCell>Navigation</TableCell>
            <TableCell><Badge variant="info">Documented</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
};
