import type { Meta, StoryObj } from "@storybook/react";
import { SeeMoreButton } from "./SeeMoreButton";

const meta: Meta<typeof SeeMoreButton> = {
  title: "Components/SeeMoreButton",
  component: SeeMoreButton,
  tags: ["autodocs"],
  argTypes: {
    hyphenPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    disabled: { control: "boolean" },
    translateLinePx: { control: "number" },
    widthLinePx: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof SeeMoreButton>;

export const Default: Story = {
  args: {
    children: "See more",
    hyphenPosition: "right",
    translateLinePx: 50,
    widthLinePx: 60,
  },
};

export const LeftHyphen: Story = {
  args: {
    children: "See more",
    hyphenPosition: "left",
    translateLinePx: 40,
    widthLinePx: 50,
  },
};

export const Disabled: Story = {
  args: {
    children: "Unavailable",
    disabled: true,
    hyphenPosition: "right",
  },
};