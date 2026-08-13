import React, { useEffect } from 'react';
import type { Preview, StoryFn, StoryContext } from '@storybook/react';
import { VektrProvider } from '../src/components/VektrProvider';
import '../dist/styles.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for Vektr components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'sun', title: 'Light Theme' },
        { value: 'dark', icon: 'moon', title: 'Dark Theme' },
      ],
      showName: true,
    },
  },
  brand: {
    name: 'Brand',
    description: 'Brand color palette for Vektr components',
    defaultValue: 'default',
    toolbar: {
      icon: 'palette',
      items: [
        { value: 'default', title: 'Default (Indigo)' },
        { value: 'fintech', title: 'Fintech (Blue)' },
        { value: 'health-tech', title: 'HealthTech (Teal)' },
        { value: 'hospitality', title: 'Hospitality (Rose)' },
        { value: 'edtech', title: 'EdTech (Amber)' },
      ],
      showName: true,
    },
  },
};

const withVektrProvider = (Story: StoryFn, context: StoryContext) => {
  const theme = context.globals.theme || 'light';
  const brand = context.globals.brand || 'default';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-brand', brand);
  }, [theme, brand]);

  return (
    <VektrProvider defaultTheme={theme} defaultBrand={brand}>
      <div style={{ padding: '24px', minHeight: '200px' }}>
        <Story />
      </div>
    </VektrProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      element: '#storybook-root',
      manual: false,
    },
  },
  decorators: [withVektrProvider],
};

export default preview;
