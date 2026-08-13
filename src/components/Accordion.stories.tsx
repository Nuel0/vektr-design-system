import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '480px' }}>
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Vektr Design System?</AccordionTrigger>
          <AccordionContent>
            Vektr is a 3-tier design token architecture & React component library built with WCAG accessibility, zero inline styles, and multi-theme brand presets.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I switch theme and brand?</AccordionTrigger>
          <AccordionContent>
            Wrap your app in VektrProvider and set data-theme="dark" and data-brand="fintech" on document.documentElement.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are Radix UI primitives supported?</AccordionTrigger>
          <AccordionContent>
            Yes! All overlay, layout, and form controls leverage Radix UI primitives for full keyboard navigation and ARIA attributes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
