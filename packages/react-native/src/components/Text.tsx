import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { fontSizes } from "../styles/font-sizes";

// TODO: Remove this when we have a better solution
const sizeOptions = {
  xxs: { fontSize: `${RFValue(fontSizes["xxs"])}px` },
  xs: { fontSize: `${RFValue(fontSizes["xs"])}px` },
  sm: { fontSize: `${RFValue(fontSizes["sm"])}px` },
  md: { fontSize: `${RFValue(fontSizes["md"])}px` },
  lg: { fontSize: `${RFValue(fontSizes["lg"])}px` },
  xl: { fontSize: `${RFValue(fontSizes["xl"])}px` },
  "2xl": { fontSize: `${RFValue(fontSizes["2xl"])}px` },
  "4xl": { fontSize: `${RFValue(fontSizes["4xl"])}px` },
  "5xl": { fontSize: `${RFValue(fontSizes["5xl"])}px` },
  "6xl": { fontSize: `${RFValue(fontSizes["6xl"])}px` },
  "7xl": { fontSize: `${RFValue(fontSizes["7xl"])}px` },
  "8xl": { fontSize: `${RFValue(fontSizes["8xl"])}px` },
  "9xl": { fontSize: `${RFValue(fontSizes["9xl"])}px` },
};

interface RNTextProps {
  size?: keyof typeof sizeOptions;
}

export const Text = styled.Text<RNTextProps>`
  font-family: ${({ theme }) => theme.fonts.default};
  color: ${({ theme }) => theme.colors.COGNU_GRAY_900};

  ${({ size = "md" }) =>
    size &&
    sizeOptions[size] &&
    css`
      font-size: ${sizeOptions[size].fontSize};
    `}
`;

Text.displayName = "Text";
