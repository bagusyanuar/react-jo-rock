import { cva } from 'class-variance-authority'

export const wrapperVariant = cva(
    'group flex items-center justify-center rounded-md border transition-[border] duration-300 ease-in-out focus-within:border-neutral-700',
    {
        variants: {
            inputSize: {
                medium: 'rounded-md',
                small: 'rounded-sm'
            },
            error: {
                true: 'border-red-500 focus-within:border-red-500',
                false: 'border-neutral-400',
            },

            disabled: {
                true: 'bg-neutral-200 cursor-not-allowed',
            },
        },

        defaultVariants: {
            error: false,
            disabled: false,
            inputSize: 'medium'
        },
    }
)

export const inputVariant = cva(
    'w-full leading-none text-neutral-700 placeholder:text-neutral-400 placeholder:font-light focus:outline-none focus:ring-0 transition-colors duration-300 ease-in-out',
    {
        variants: {
            inputSize: {
                medium: 'text-sm rounded-md py-2.5 ps-3 pe-3',
                small: 'text-xs rounded-sm py-1.5 ps-2 pe-2'
            },
            hasPrefixIcon: {
                true: 'ps-0',
                false: ''
            },

            hasSuffixIcon: {
                true: 'pe-0',
                false: ''
            },

            disabled: {
                true: 'bg-neutral-200 text-neutral-500 cursor-not-allowed',
            },
        },

        defaultVariants: {
            inputSize: 'medium',
            disabled: false,
        },
    }
)

export const iconVariant = cva(
    'h-full flex items-center justify-center',
    {
        variants: {
            inputSize: {
                medium: 'w-8',
                small: 'w-6'
            },
            error: {
                true: 'text-red-500',
                false: 'text-neutral-700',
            },
        },
        defaultVariants: {
            inputSize: 'medium',
            error: false
        }
    }
)
