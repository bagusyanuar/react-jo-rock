import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/theme';

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
