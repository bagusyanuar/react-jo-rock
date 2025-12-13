import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Import komponen GButton Anda. Sesuaikan path jika perlu.
import GButton from './GButton'; 
// Import contoh icon dari react-icons
import { FaPlus, FaCheck } from 'react-icons/fa'; 

// --- 1. METADATA STORYBOOK ---
// Definisi metadata utama untuk Storybook
const meta: Meta<typeof GButton> = {
  title: 'Components/GButton', // Judul di navigasi Storybook
  component: GButton,
  tags: ['autodocs'], // Menghasilkan halaman dokumentasi otomatis
  argTypes: {
    // Definisi kontrol untuk mengubah props di Storybook UI
    text: { control: 'text' },
    variant: { 
        control: 'select', 
        options: ['primary', 'accent'],
        description: 'Varian tombol. Catatan: Saat ini, hanya `primary` yang memiliki gaya CSS internal.'
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }, // Menampilkan aksi klik di panel Actions
    icon: { 
        control: false, // Sembunyikan kontrol UI untuk icon
        description: 'Komponen IconType dari react-icons.'
    },
    className: { control: 'text', description: 'Tambahan kelas Tailwind untuk kustomisasi.'}
  },
};

export default meta;
type Story = StoryObj<typeof GButton>;


// --- 2. STORIES UTAMA ---

// Story Default (Primary)
export const Primary: Story = {
  args: {
    text: 'Tombol Utama',
    variant: 'primary',
    loading: false,
    disabled: false,
  },
};

// Story untuk Varian Accent (Menggunakan className untuk mensimulasikan gaya accent)
// Catatan: Karena komponen GButton tidak memiliki logika untuk `variant='accent'`,
// kita menggunakan `className` untuk menimpa gaya Oklch (--g-brand-xxx) default.
export const Accent: Story = {
  args: {
    ...Primary.args,
    variant: 'accent',
    text: 'Tombol Accent',
  },
};

// Story dengan Icon
export const WithIcon: Story = {
  args: {
    ...Primary.args,
    text: 'Simpan Data',
    icon: FaCheck, 
  },
};

// Story dalam keadaan Loading
export const LoadingState: Story = {
  args: {
    ...Primary.args,
    loading: true,
    text: 'Mengirim...', // Teks ini akan diganti "Loading..." di komponen
  },
};

// Story dalam keadaan Disabled
export const DisabledState: Story = {
  args: {
    ...Primary.args,
    text: 'Tidak Aktif',
    disabled: true,
  },
};

