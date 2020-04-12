import themeVariants from './themeVariants';

const breakpoints = ['40em', '52em', '64em', '80em'];
const fontSizes = [13, 14, 16, 18, 22, 30];
const fontWeights = [300, 600, 800];
const space = [0, 4, 8, 12, 16, 18, 24, 32, 64, 128, 256];
const sizes = [0, 4, 8, 12, 16, 18, 24, 32, 64, 128, 256];

const radii = [0, 2, 4, 5, 8, 9999, '100%'];
const shadows = [
  ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  '0 2px 5px 0 rgba(0, 0, 0, 0.15)',
];
const zIndices = ['auto', 998, 999, 1000];

const fonts = {
  default: 'Muli',
};

const lineHeights = {
  title: 1.25,
  text: 1.44,
  button: 1,
};

const letterSpacings = {
  normal: 'normal',
  tracked: '0.1em',
  tight: '-0.05em',
  mega: '0.25em',
};

//default colors
const colors = {
  gray: '#bdbdbd',
  lightPink: '#fadbe0',
  turquoise: '#32adc8',
  darkGray: '#828282',
  black: '#333333',
  white: '#ffffff',
  redPink: '#e73956',
  darkPink: '#D82A47',
  blue: '#0086bc',
  rosyPink: '#ed6f84',
  warmPink: '#f45270',
  lightGray: '#e0e0e0',
  darkBlue: '#006e9a',
  lightBlue: '#2e9cc8',
  skyBlue: '#d0e9f2',
  darkerGray: '#4f4f4f',
  darkWhite: '#f2f2f2',
  darkYellow: '#d3b03d',
  info: '#03a699',
  infoDark: '#068279',
  success: '#008000',
  successDark: '#006500',
  danger: '#e02020',
  dangerDark: '#C01A1A',
};

//button's variant settings
const { buttonTypes, buttonSizeTypes } = themeVariants;

const buttons = { ...buttonTypes };

const buttonSizes = { ...buttonSizeTypes };

//aliases

//radii
radii.none = radii[0];
radii.default = radii[2];
radii.full = radii[5];

//font size aliases
fontSizes.small = fontSizes[0];
fontSizes.normal = fontSizes[1];
fontSizes.medium = fontSizes[2];
fontSizes.h3 = fontSizes[3];
fontSizes.h2 = fontSizes[4];
fontSizes.h1 = fontSizes[5];

//font weight aliases
fontWeights.normal = fontWeights[0];
fontWeights.bold = fontWeights[1];
fontWeights.bolder = fontWeights[2];

//z-index
zIndices.default = zIndices[0];
zIndices.menu = zIndices[1];
zIndices.modal = zIndices[2];
zIndices.loading = zIndices[3];

//shadow (text,box)

shadows.card = shadows[0];
shadows.nav = shadows[1];

//spaces

export default {
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  space,
  colors,
  radii,
  lineHeights,
  letterSpacings,
  buttons,
  buttonSizes,
  zIndices,
  shadows,
  // sizes,
};
