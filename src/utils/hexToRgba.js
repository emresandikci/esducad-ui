const hexToRgba = (hex, opacity) => {
  let r, g, b, color, rgb;
  hex = hex.toLowerCase();
  if (/^#([a-f0-9]{3}){1,2}$/.test(hex)) {
    if (hex.length == 4) {
      hex = '#' + [hex[1], hex[1], hex[2], hex[2], hex[3], hex[3]].join('');
    }
    hex = '0x' + hex.substring(1);
    r = (hex >> 16) & 255;
    g = (hex >> 8) & 255;
    b = hex & 255;

    if (opacity) {
      rgb = `rgba(${r},${g},${b},${opacity})`;
    } else {
      rgb = `rgb(${r},${g},${b})`;
    }
    color = {
      r,
      g,
      b,
      alpha: opacity || 1,
      all: rgb,
    };
    return color;
  }
  return console.error('wrong hex format', 'should be like #000 #000000');
};

export default hexToRgba;
