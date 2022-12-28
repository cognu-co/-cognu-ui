import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@cognu-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/eliasallex.png",
    alt: "Elias Alexandre",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
