import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Import komponen GTextfield Anda
import GTextfield from './GTextfield';
// Import contoh icon dari react-icons
import { FaUser, FaLock, FaExclamationCircle, FaCheck } from 'react-icons/fa';
import { LuMail, LuCalendar,LuCheck } from 'react-icons/lu'

// --- 1. METADATA STORYBOOK ---
const meta: Meta<typeof GTextfield> = {
    title: 'Components/GTextfield', // Judul di navigasi Storybook
    component: GTextfield,
    tags: ['autodocs'], // Menghasilkan halaman dokumentasi otomatis
    argTypes: {
        // Properti bawaan HTML Input
        placeholder: { control: 'text' },
        type: { control: 'select', options: ['text', 'number'] },
        disabled: { control: 'boolean' },
        isError: { control: 'boolean' },
        defaultValue: { control: 'text' },

        // Properti Icon (Diatur secara manual di Story)
        prefixIcon: { control: false },
        suffixIcon: { control: false },

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
        type: 'text',
    }
};

export default meta;
type Story = StoryObj<typeof GTextfield>;


// --- 2. STORIES UTAMA ---

/**
 * Story Standar: Teks input dasar tanpa ikon atau status khusus.
 */
export const Default: Story = {
    args: {
        placeholder: 'Teks Input Standar',
        inputSize: 'small',
        className: 'w-full'
    },
};

/**
 * Story dengan Icon di Awal (Prefix Icon), umum untuk input username/password.
 */
export const WithPrefixIcon: Story = {
    args: {
        placeholder: 'Username atau Email',
        prefixIcon: LuMail,
    },
};

/**
 * Story dengan Icon di Akhir (Suffix Icon), sering digunakan untuk tombol aksi kecil.
 */
export const WithSuffixIcon: Story = {
    args: {
        placeholder: 'Tanggal',
        suffixIcon: LuCalendar,
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
        suffixIcon: FaExclamationCircle, // Seringkali ikon error ditampilkan di akhir
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
        prefixIcon: FaUser,
        defaultValue: 'Read Only Value',
    },
};

/**
 * Story Gabungan: Menggunakan kedua ikon (Prefix dan Suffix) sekaligus.
 */
export const BothIcons: Story = {
    args: {
        placeholder: 'Masukkan Email',
        prefixIcon: LuMail,
        suffixIcon: LuCheck, // Ganti dengan ikon yang relevan jika ada
        defaultValue: '12345',
    },
};