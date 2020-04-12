import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { GlobalStyle } from '../src/utils';
import { defaultTheme } from '../src/utils';
import { ThemeProvider } from 'styled-components';

const newTheme = {
  ...defaultTheme,
  ...{
    colors: {
      primary: defaultTheme.colors.warmPink,
      secondary: defaultTheme.colors.blue,
      ...defaultTheme.colors,
    },
  },
};

console.log('theme', newTheme);

addParameters({
  docs: {
    inlineStories: true,
  },
});

addDecorator(story => (
  <ThemeProvider theme={newTheme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));
