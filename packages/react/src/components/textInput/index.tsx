import { ComponentProps, CSSProperties, forwardRef } from "react";

import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string;
  containerStyle?: CSSProperties | undefined;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, containerStyle, ...rest }, ref) => {
    return (
      <TextInputContainer style={containerStyle}>
        {!!prefix && <Prefix>{prefix}</Prefix>}

        <Input {...rest} ref={ref} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput";
