import type { Meta, StoryObj } from "@storybook/react";
import JRTextfield from "./JRTextfield";

const meta: Meta<typeof JRTextfield> = {
    component: JRTextfield,
    title: "Example/Texfield",
};

export default meta;

export const Primary: StoryObj<typeof JRTextfield> = {
    args: {
    },
};
