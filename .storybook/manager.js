import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from './images/logo.svg';
const theme = create({
  base: 'light',
  brandTitle: 'esducad-ui',
  brandUrl: 'https://esducad-ui.com',
  brandImage: logo,
  fontBase: "'Muli', sans-serif",
});
addons.setConfig({
  theme: { ...theme },
});
