import type { Meta, StoryObj } from "@storybook/react";
import GLabel from "./GLabel";

const meta: Meta<typeof GLabel> = {
    component: GLabel,
    title: "Example/Label",
};

export default meta;

export const Primary: StoryObj<typeof GLabel> = {
    args: {},
};
