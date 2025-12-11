import type { Meta, StoryObj } from "@storybook/react";
import GAutocomplete, { type GAutocompleteOption } from "./GAutocomplete";
import React from 'react'

const meta: Meta<typeof GAutocomplete> = {
    title: "Example/Input/Autocomplete",
    component: GAutocomplete,
    tags: ["autodocs"],
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
    render: (args) => {
        const [value, setValue] = React.useState<GAutocompleteOption | null>(null);

        return (
            <GAutocomplete
                {...args}
                value={value}
                onChange={(v) => setValue(v)}
            />
        );
    },
    args: {
        options: [
            { value: "1", label: "Satu" },
            { value: "2", label: "Dua" },
            { value: "3", label: "Tiga" },
        ],
    },
};
