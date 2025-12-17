import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Import komponen GTextarea Anda
import GTextarea from './GTextarea';

// --- 1. METADATA STORYBOOK ---
const meta: Meta<typeof GTextarea> = {
    title: 'Components/GTextarea', // Judul di navigasi Storybook
    component: GTextarea,
    tags: ['autodocs'], // Menghasilkan halaman dokumentasi otomatis
    argTypes: {
        // Properti bawaan HTML Input
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        isError: { control: 'boolean' },
        defaultValue: { control: 'text' },

                // Properti Styling
        className: { control: 'text', description: 'Tambahan kelas untuk wrapper div.' },
        inputClassName: { control: 'text', description: 'Tambahan kelas untuk elemen input.' },
        // Varian CVA akan diturunkan dari props
        // ... (Jika Anda ingin mengekspos varian CVA di sini, Anda harus import dan ekstrak)
    },
    // Default props untuk semua stories
    args: {
        placeholder: 'Masukkan Teks Di Sini',
        disabled: false,
        isError: false,
    }
};

export default meta;
type Story = StoryObj<typeof GTextarea>;


// --- 2. STORIES UTAMA ---

/**
 * Story Standar: Teks input dasar tanpa ikon atau status khusus.
 */
export const Default: Story = {
    args: {
        placeholder: 'Teks Input Standar',
        rows: 3
    },
};

/**
 * Story dalam keadaan Error, biasanya disertai dengan pesan feedback (meskipun feedback
 * teks tidak termasuk dalam komponen ini, status visualnya sudah terlihat).
 */
export const ErrorState: Story = {
    args: {
        placeholder: 'Input tidak valid',
        isError: true,
        defaultValue: 'Data yang salah',
    },
};

/**
 * Story dalam keadaan Disabled (Dinonaktifkan). Input tidak dapat diubah atau diklik.
 */
export const DisabledState: Story = {
    args: {
        placeholder: 'Input dinonaktifkan',
        disabled: true,
        defaultValue: 'Read Only Value',
    },
};