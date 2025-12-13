import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// Import komponen GSelect Anda
import GSelect from './GSelect'; 
// Import jenis (tipe) yang digunakan dalam react-select untuk mempermudah pengetikan
import type { GroupBase } from 'react-select';

// --- DEFINISI TIPE OPSI UNTUK STORYBOOK ---
type OptionType = {
    value: string;
    label: string;
};

// Data Opsi untuk digunakan di semua stories
const options: OptionType[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
];


// --- 1. METADATA STORYBOOK ---
const meta: Meta<typeof GSelect> = {
  title: 'Components/GSelect', // Judul di navigasi Storybook
  component: GSelect,
  tags: ['autodocs'], // Menghasilkan halaman dokumentasi otomatis
  argTypes: {
    // Properti khusus komponen GSelect
    isError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    isClearable: { control: 'boolean' },
    className: { control: 'text', description: 'Tambahan kelas untuk wrapper div.'},
    
    // Properti react-select yang sering digunakan
    options: { control: 'object', description: 'Array opsi yang tersedia.' },
    placeholder: { control: 'text' },
    defaultValue: { control: 'object' },
    onChange: { action: 'optionSelected' }, // Menampilkan aksi di panel Actions
  },
  // Default props untuk semua stories
  args: {
    options: options,
    isError: false,
    disabled: false,
    isClearable: true, // Defaultkan true agar ikon Clear terlihat di beberapa story
    placeholder: 'Pilih Buah Favorit Anda',
  }
};

export default meta;

// Mendefinisikan tipe Story secara spesifik
type Story = StoryObj<typeof GSelect<OptionType>>;


// --- 2. STORIES UTAMA ---

/**
 * Story Standar: Select dalam keadaan kosong dan bisa dihapus (clearable).
 */
export const DefaultSelect: Story = {
  args: {
    // Semua default args sudah diterapkan
  },
};

/**
 * Story dengan Opsi Terpilih: Menunjukkan bagaimana select terlihat setelah opsi dipilih.
 */
export const SelectedOption: Story = {
  args: {
    ...DefaultSelect.args,
    defaultValue: options[1], // Banana terpilih secara default
  },
};

/**
 * Story dalam Keadaan Error: Border harus menunjukkan warna error (merah).
 */
export const ErrorState: Story = {
  args: {
    ...DefaultSelect.args,
    isError: true,
  },
};

/**
 * Story dalam Keadaan Disabled (Dinonaktifkan): Select tidak dapat dibuka atau diubah.
 */
export const DisabledState: Story = {
  args: {
    ...SelectedOption.args,
    disabled: true,
    placeholder: 'Input tidak aktif',
  },
};

/**
 * Story tanpa Clearable: Ikon "X" untuk menghapus opsi tidak muncul.
 */
export const NonClearable: Story = {
    args: {
        ...SelectedOption.args,
        isClearable: false,
    },
};

/**
 * Skenario Kustom: Menunjukkan penggunaan `className` untuk menyesuaikan lebar atau styling wrapper.
 */
export const CustomWidth: Story = {
    args: {
        ...DefaultSelect.args,
        placeholder: 'Hanya setengah lebar',
        className: 'w-1/2',
    }
}