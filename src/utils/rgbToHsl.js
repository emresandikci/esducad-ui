import hexToRgba from './hexToRgba';

const rgbToHsl = (hex, lightness) => {
  const c255 = 255;
  let min,
    max,
    i,
    l,
    s,
    maxcolor,
    h,
    rgb = [];
  let color;
  let { r, g, b } = hexToRgba(hex);
  rgb[0] = r / c255;
  rgb[1] = g / c255;
  rgb[2] = b / c255;
  min = rgb[0];
  max = rgb[0];
  maxcolor = 0;

  for (i = 0; i < rgb.length - 1; i++) {
    if (rgb[i + 1] <= min) {
      min = rgb[i + 1];
    }
    if (rgb[i + 1] >= max) {
      max = rgb[i + 1];
      maxcolor = i + 1;
    }
  }

  if (maxcolor == 0) {
    h = (rgb[1] - rgb[2]) / (max - min);
  }

  if (maxcolor == 1) {
    h = 2 + (rgb[2] - rgb[0]) / (max - min);
  }

  if (maxcolor == 2) {
    h = 4 + (rgb[0] - rgb[1]) / (max - min);
  }

  if (isNaN(h)) {
    h = 0;
  }

  h = h * 60;

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (min == max) {
    s = 0;
  } else {
    if (l < 0.5) {
      s = (max - min) / (max + min);
    } else {
      s = (max - min) / (2 - max - min);
    }
  }

  h = Number(h.toFixed(0));
  s = Number(s.toFixed(2)) * 100;
  l = Number(l.toFixed(2)) * 100;
  if (lightness) l += lightness;
  color = { h, s, l, all: `hsl(${h}, ${s}%, ${l}%)` };
  return color;
};

export default rgbToHsl;
