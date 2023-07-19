import { fontWeights, lineHeights, radii } from "@cognu-ui/tokens";
import { fontSizes } from "./font-sizes";

export const theme = {
  colors: {
    // Gradient
    p_gradient: "#4c669f",
    s_gradient: "#3b5998",
    t_gradient: "#192f6a",

    cognu: "#61DAFD",
    cognu_app_background: "#0B111D",

    // - - - - - - - - Only used colors - - - - - - - - - -

    COGNU_WHITE_800: "#f8f8f8",
    COGNU_WHITE_700: "#f0f2f5",

    COGNU_GRAY_200: "#dfdfdf",
    COGNU_GRAY_400: "#515151",
    COGNU_GRAY_800: "#191919",
    COGNU_GRAY_900: "#121215",

    COGNU_BLUE_100: "#969cb2",
    COGNU_BLUE_200: "#364670",
    COGNU_BLUE_400: "#4059CE",
    COGNU_BLUE_900: "#0B111D",
  },
  fonts: {
    default: "Segoe-ui_Regular",
    bold: "Segoe-ui_Bold",
    code: "monospace",
  },
  radii,
  fontSizes,
  fontWeights,
  lineHeights,
  typo: {
    coverage_space: 18,
  },
};
