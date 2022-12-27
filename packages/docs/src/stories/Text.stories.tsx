import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@cognu-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Lorem ipsum is a placeholder text commonly...",
    as: "strong",
  },
};
