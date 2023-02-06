import { styled } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled("div", {});

export const Label = styled(Text, {
  color: "$gray800",

  defaultVariants: {
    size: "xs",
  },
});

export const Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1",
});

export const Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray100",

  variants: {
    active: {
      true: {
        backgroundColor: "$blue500",
      },
    },
  },
});
