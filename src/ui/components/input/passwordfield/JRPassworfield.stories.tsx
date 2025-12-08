import type { Meta, StoryObj } from "@storybook/react";
import JRPasswordfield from "./JRPasswordfield";

const meta: Meta<typeof JRPasswordfield> = {
    component: JRPasswordfield,
    title: "Example/Input/Passwordfield",
};

export default meta;

export const Primary: StoryObj<typeof JRPasswordfield> = {
    args: {},
};
