import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { GlobalStyle } from '../src/utils';
import { defaultTheme } from '../src/utils';
import { ThemeProvider } from 'styled-components';

const newTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
  },
};

window.theme = newTheme;

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
