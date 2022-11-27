import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@cognu-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  css,
  styled,
  globalCss,
  keyframes,
  config,
  theme,
  createTheme,
  getCssText,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },

  theme: {
    colors,
    fonts,
    radii,
    fontSizes,
    fontWeights,
    space,
    lineHeights,
  },
});
