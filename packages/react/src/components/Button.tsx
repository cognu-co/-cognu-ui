import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$app",
  textAlign: "center",
  minWidth: 120,
  padding: "0 $4",
  boxSizing: "border-box",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  transition: "all 0.2s",
  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
  },

  svg: {
    width: "$4",
    height: "$4",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$blue700",

        "&:not(:disabled):hover": {
          filter: "brightness(0.9)",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
        },
      },

      secondary: {
        color: "$blue600",
        border: "2px solid $blue700",

        "&:not(:disabled):hover": {
          background: "$blue700",
          color: "$white",
        },

        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200",
        },
      },

      tertiary: {
        color: "$gray900",

        "&:not(:disabled):hover": {
          color: "$black",
        },

        "&:disabled": {
          color: "$gray600",
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";
