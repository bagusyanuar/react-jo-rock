import type { Meta, StoryObj } from "@storybook/react";
import JRLabel from "./JRLabel";

const meta: Meta<typeof JRLabel> = {
    component: JRLabel,
    title: "Example/Label",
};

export default meta;

export const Primary: StoryObj<typeof JRLabel> = {
    args: {},
};
