import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled("div", {
  padding: "$2",
  borderRadius: "$md",
  backgroundColor: "$gray000",
  border: "1px solid $gray200",
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = "Box";
