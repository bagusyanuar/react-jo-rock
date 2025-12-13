import { cva } from 'class-variance-authority'

/* =====================
   Wrapper
===================== */
export const textfieldWrapperVariants = cva(
    'group w-auto flex items-center justify-center rounded-md border transition-[border] duration-300 ease-in-out focus-within:border-neutral-700',
    {
        variants: {
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
        },
    }
)

/* =====================
   Input
===================== */
export const textfieldInputVariants = cva(
    'w-full py-2.5 ps-3 pe-3 text-sm leading-none rounded-md text-neutral-700 placeholder:text-neutral-400 placeholder:font-light focus:outline-none focus:ring-0 transition-colors duration-300 ease-in-out',
    {
        variants: {
            hasPrefixIcon: {
                true: 'ps-0',
                false: 'ps-3'
            },

            hasSuffixIcon: {
                true: 'pe-0',
                false: 'pe-3'
            },

            disabled: {
                true: 'bg-neutral-200 text-neutral-500 cursor-not-allowed',
            },
        },

        defaultVariants: {
            disabled: false,
        },
    }
)
