import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const byThemeObj = (obj, matchWith) => {
  return Object.keys(obj).map((x) => (x === matchWith ? x : null))[0];
};

export const color = (color) => {
  const { colors } = currentTheme();
  const themeColor = colors[`${color}`];
  if (themeColor !== undefined) {
    return themeColor;
  }
  return color;
};

export const currentTheme = () => {
  return useContext(ThemeContext);
};
