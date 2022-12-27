import { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps } from "@cognu-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
