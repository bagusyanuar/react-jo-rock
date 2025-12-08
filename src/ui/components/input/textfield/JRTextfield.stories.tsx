import type { Meta, StoryObj } from "@storybook/react";
import JRTextfield from "./JRTextfield";
import { LuMail } from 'react-icons/lu'

const meta: Meta<typeof JRTextfield> = {
    component: JRTextfield,
    title: "Example/Input/Texfield",
};

export default meta;

export const Primary: StoryObj<typeof JRTextfield> = {
    args: {
        prefixIcon: LuMail
    },
};
