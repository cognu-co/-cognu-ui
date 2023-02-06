import { ComponentProps } from "react";
import { styled } from "../styles";

export const Textarea = styled("textarea", {
  backgroundColor: "transparent",
  padding: "$2",
  borderRadius: "sm",
  boxSizing: "border-box",
  border: "2px solid $gray100",

  fontSize: "sm",
  fontFamily: "$app",
  color: "$black",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,

  "&:focus": {
    outline: "none",
    borderColor: "$blue600",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});

export interface TextareaProps extends ComponentProps<typeof Textarea> {}

Textarea.displayName = "Textarea";
