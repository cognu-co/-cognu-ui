import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$white",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray000",
  display: "flex",
  alignItems: "baseline",

  "&:has(input:focus)": {
    borderColor: "$blue600",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "sm",
  color: "$gray400",
  fontWeight: "$regular",
});

export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$md",
  color: "$gray900",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});
