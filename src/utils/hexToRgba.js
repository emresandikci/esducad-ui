const hexToRgba = (hex, opacity) => {
  const rgb = hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));

  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]},${opacity})`;
};

export default hexToRgba;
