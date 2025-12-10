import type { Meta, StoryObj } from "@storybook/react";
import GAutocomplete, { type GAutocompleteOption } from "./GAutocomplete";
import { LuMail } from 'react-icons/lu'

const meta: Meta<typeof GAutocomplete> = {
    component: GAutocomplete,
    title: "Example/Input/Autocomplete",
};

export default meta;

const options: GAutocompleteOption[] = [
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '3',
        label: '3'
    },
];

export const Primary: StoryObj<typeof GAutocomplete> = {
    args: {
        options: options
    },
};
