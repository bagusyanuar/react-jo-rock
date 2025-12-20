import type { Meta, StoryObj } from "@storybook/react";
import GLabel from "./GLabel";

const meta: Meta<typeof GLabel> = {
    component: GLabel,
    title: "Components/GLabel",
};

export default meta;

/* ===============================
 * Default
 * =============================== */
export const Default: StoryObj<typeof GLabel> = {
    args: {},
};

/* ===============================
 * With Required
 * =============================== */
export const WithRequired: StoryObj<typeof GLabel> = {
    args: {
        required: true
    },
};
