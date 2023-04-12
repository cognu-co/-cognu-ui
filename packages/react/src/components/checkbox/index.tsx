import { ComponentProps, forwardRef } from "react";
import { Check } from "phosphor-react";
import { CheckboxContainer, CheckboxIndicator } from "./styles";

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ ...rest }, ref) => {
    return (
      <CheckboxContainer {...rest} ref={ref}>
        <CheckboxIndicator asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";
