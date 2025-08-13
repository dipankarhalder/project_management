export const getColorFromTheme = (colors, keyOrHex) => {
  return colors[keyOrHex] || keyOrHex;
};
