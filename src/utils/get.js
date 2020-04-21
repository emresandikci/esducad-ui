import { default as theme } from './theme';

export const byThemeObj = (obj, matchWith) => {
  return Object.keys(obj).map(x => (x === matchWith ? x : null))[0];
};

export const color = (color, customTheme) => {
  const { colors } = customTheme ? customTheme : theme;
  const themeColor = colors[`${color}`];
  if (themeColor !== undefined) {
    return themeColor;
  }
  return color;
};
