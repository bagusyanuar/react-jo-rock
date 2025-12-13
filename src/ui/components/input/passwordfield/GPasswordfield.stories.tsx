import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Import komponen GPasswordfield Anda
import GPasswordfield from './GPasswordfield'; 

// --- 1. METADATA STORYBOOK ---
const meta: Meta<typeof GPasswordfield> = {
  title: 'Components/GPasswordfield', // Judul di navigasi Storybook
  component: GPasswordfield,
  tags: ['autodocs'], // Menghasilkan halaman dokumentasi otomatis
  argTypes: {
    // Properti bawaan HTML Input
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    isError: { control: 'boolean' },
    defaultValue: { control: 'text' },

    // Properti Styling
    className: { control: 'text', description: 'Tambahan kelas untuk wrapper div.'},
    inputClassName: { control: 'text', description: 'Tambahan kelas untuk elemen input.'},
    
    // Properti yang tidak digunakan di GPasswordfield, disembunyikan
    type: { control: false }, 
  },
  // Default props untuk semua stories
  args: {
    placeholder: 'Masukkan Kata Sandi Anda',
    disabled: false,
    isError: false,
  }
};

export default meta;
type Story = StoryObj<typeof GPasswordfield>;


// --- 2. STORIES UTAMA ---

/**
 * Story Standar: Keadaan default (password tersembunyi), pengguna dapat mengklik ikon mata.
 */
export const Default: Story = {
  args: {
    placeholder: 'Password (Klik ikon mata di kanan)',
  },
};

/**
 * Story dengan data yang sudah terisi.
 */
export const WithContent: Story = {
    args: {
        placeholder: 'Password yang sudah terisi',
        defaultValue: 'IniAdalahPasswordYangPanjang123',
    },
};

/**
 * Story dalam keadaan Error: Border dan ikon harus menunjukkan warna error (merah).
 */
export const ErrorState: Story = {
  args: {
    placeholder: 'Password salah!',
    isError: true,
  },
};

/**
 * Story dalam keadaan Disabled (Dinonaktifkan): Pengguna tidak dapat mengubah input
 * maupun melakukan toggle show/hide (berkat logika `!disabled` di `handleChangeType`).
 */
export const DisabledState: Story = {
  args: {
    placeholder: 'Input dinonaktifkan',
    disabled: true,
    defaultValue: 'Password Anda',
  },
};

// --- 3. SKENARIO CUSTOM DENGAN KONTROL AWAL TERTENTU ---
// Catatan: Karena state type dikelola internal, kita harus menggunakan render function
// jika ingin menunjukkan keadaan 'terlihat' secara default, tetapi untuk kemudahan,
// kita akan mengandalkan user untuk mengklik di Storybook UI.

/**
 * Skenario di mana input memiliki kelas tambahan.
 */
export const CustomStyle: Story = {
    args: {
        placeholder: 'Input dengan border tebal',
        className: 'border-2 border-dashed border-sky-400',
    }
}