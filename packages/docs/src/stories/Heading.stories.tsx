import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@cognu-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,

  args: {
    children: "Custom Title",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Lorem ipsum is a placeholder text commonly...",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2`, mas podemos alter isso com a propriedade `as`",
      },
    },
  },
};
