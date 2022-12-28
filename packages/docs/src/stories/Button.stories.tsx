import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@cognu-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,

  args: {
    children: "Enviar",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Próximo passo",
    variant: "secondary",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <span>Próximo passo</span>
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: "Cancel",
    variant: "tertiary",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    size: "sm",
  },
};
