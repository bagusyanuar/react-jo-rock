import type { Meta, StoryObj } from "@storybook/react";
import GPasswordfield from "./GPasswordfield";

const meta: Meta<typeof GPasswordfield> = {
    component: GPasswordfield,
    title: "Example/Input/Passwordfield",
};

export default meta;

export const Primary: StoryObj<typeof GPasswordfield> = {
    args: {},
};
