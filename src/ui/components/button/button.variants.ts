import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
    'flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm rounded-md border leading-none transition-colors duration-300 ease-in-out focus:outline-none cursor-pointer',
    {
        variants: {
            variant: {
                primary:
                    'bg-(--g-brand-500) border-(--g-brand-500) text-white hover:bg-(--g-brand-600) hover:border-(--g-brand-600)',
                accent:
                    'bg-(--g-accent-500) border-(--g-accent-500) text-white hover:bg-(--g-accent-600) hover:border-(--g-accent-600)',
            },

            disabled: {
                true: 'cursor-not-allowed bg-gray-300 border-gray-300 text-gray-500',
            },

            loading: {
                true: 'cursor-not-allowed bg-(--g-brand-600) border-(--g-brand-600)',
            },
        },

        compoundVariants: [
            {
                loading: true,
                disabled: true,
                class: 'cursor-not-allowed bg-(--g-brand-600) border-(--g-brand-600) text-white'
            }
        ],

        defaultVariants: {
            variant: 'primary',
        },
    }
)
