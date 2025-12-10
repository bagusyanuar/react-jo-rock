import type { Meta, StoryObj } from "@storybook/react";
import GTextfield from "./GTextfield";
import { LuMail } from 'react-icons/lu'

const meta: Meta<typeof GTextfield> = {
    component: GTextfield,
    title: "Example/Input/Texfield",
};

export default meta;

export const Primary: StoryObj<typeof GTextfield> = {
    args: {
        prefixIcon: LuMail
    },
};
