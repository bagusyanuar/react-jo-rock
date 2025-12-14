import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Import komponen GCheckbox Anda
import GCheckbox from './GCheckbox'; 

// --- 1. METADATA STORYBOOK ---
const meta: Meta<typeof GCheckbox> = {
  title: 'Components/GCheckbox', // Judul di navigasi Storybook
  component: GCheckbox,
  tags: ['autodocs'], // Menghasilkan halaman dokumentasi otomatis
  argTypes: {
    // Properti khusus komponen GCheckbox
    label: { control: 'text', description: 'Teks label yang menyertai checkbox.' },
    
    // Properti bawaan HTML Input
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'checkedStatusChanged' }, // Menampilkan aksi di panel Actions
    className: { control: 'text', description: 'Tambahan kelas untuk wrapper label.'},
  },
  // Default props untuk semua stories
  args: {
    label: 'Setuju dengan Syarat dan Ketentuan',
    disabled: false,
  }
};

export default meta;
type Story = StoryObj<typeof GCheckbox>;


// --- 2. STORIES UTAMA ---

/**
 * Story Standar: Keadaan default (tidak dicentang) dengan label.
 */
export const Unchecked: Story = {
  args: {
    // checked: false,
    label: 'Saya Belum Centang',
  },
};

/**
 * Story Dicenrang: Keadaan di mana checkbox sudah dicentang.
 */
export const Checked: Story = {
  args: {
    checked: true,
    label: 'Saya Sudah Centang',
  },
};

/**
 * Story Disabled (Tidak Aktif): Checkbox tidak dapat diubah keadaannya, dan harus
 * terlihat redup/tidak aktif.
 */
export const Disabled: Story = {
  args: {
    label: 'Input Dinonaktifkan',
    disabled: true,
    checked: false, // Tidak dicentang saat disabled
  },
};

/**
 * Story Error .
 */
export const Error: Story = {
  args: {
    label: 'Input Error',
    isError: true,
  },
};

/**
 * Story Disabled dan Checked: Menunjukkan tampilan checkbox yang sudah dicentang tetapi dinonaktifkan.
 */
export const DisabledAndChecked: Story = {
    args: {
        label: 'Telah Dicentang (Tidak Bisa Diubah)',
        disabled: true,
        checked: true,
    },
};

/**
 * Story Tanpa Label: Hanya menampilkan kotak checkbox itu sendiri.
 */
export const NoLabel: Story = {
    args: {
        label: '',
        checked: true,
    },
};