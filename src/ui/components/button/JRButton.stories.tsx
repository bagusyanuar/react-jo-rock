import type { Meta, StoryObj } from "@storybook/react";
import JRButton from "./JRButton";
import { LuArrowRight } from 'react-icons/lu'

const meta: Meta<typeof JRButton> = {
  component: JRButton,
  title: "Example/Button",
};

export default meta;

export const Primary: StoryObj<typeof JRButton> = {
  args: {
    text: 'My Button'
  },
};
