import type { Meta, StoryObj } from "@storybook/react";
import GButton from "./GButton";

const meta: Meta<typeof GButton> = {
  component: GButton,
  title: "Example/Button",
};

export default meta;

export const Primary: StoryObj<typeof GButton> = {
  args: {
    text: 'My Button'
  },
};
