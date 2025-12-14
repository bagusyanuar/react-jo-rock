import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import GRadio from './GRadio'

// --- 1. METADATA STORYBOOK ---
const meta: Meta<typeof GRadio> = {
    title: 'Components/GRadio',
    component: GRadio,
    tags: ['autodocs'],
    argTypes: {
        // Properti khusus GRadio
        label: {
            control: 'text',
            description: 'Teks label yang menyertai radio button.',
        },

        // Properti bawaan HTML Input
        checked: { control: 'boolean' },
        defaultChecked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        name: {
            control: 'text',
            description: 'Nama group radio (harus sama agar saling eksklusif).',
        },
        value: {
            control: 'text',
            description: 'Nilai radio button.',
        },
        onChange: { action: 'radioChanged' },
    },
    args: {
        label: 'Pilihan Radio',
        name: 'radio-group',
        disabled: false,
    },
}

export default meta
type Story = StoryObj<typeof GRadio>


// --- 2. STORIES UTAMA ---

/**
 * Story Default: Radio tidak dicentang
 */
export const Unchecked: Story = {
    args: {
        label: 'Belum Dipilih',
        checked: true,
    },
}

/**
 * Story Checked: Radio sudah dipilih
 */
export const Checked: Story = {
    args: {
        label: 'Sudah Dipilih',
        checked: true,
    },
}

/**
 * Story Disabled: Radio tidak bisa dipilih
 */
export const Disabled: Story = {
    args: {
        label: 'Radio Dinonaktifkan',
        disabled: true,
        checked: false,
    },
}

/**
 * Story Error: Menampilkan state error
 */
export const Error: Story = {
    args: {
        label: 'Radio Error',
        isError: true,
    },
}

/**
 * Story Disabled & Checked
 */
export const DisabledAndChecked: Story = {
    args: {
        label: 'Dipilih (Tidak Bisa Diubah)',
        disabled: true,
        checked: true,
    },
}

/**
 * Story Tanpa Label
 */
export const NoLabel: Story = {
    args: {
        label: '',
        checked: true,
    },
}
