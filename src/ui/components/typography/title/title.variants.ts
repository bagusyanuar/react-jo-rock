import { cva } from 'class-variance-authority'

export const titleVariants = cva(
    'text-neutral-700',
    {
        variants: {
            size: {
                'large': 'text-lg',
                'medium': 'text-md',
                'small': 'text-sm',
                'extra-small': 'text-xs'
            },
            weight: {
                'bold': 'font-bold',
                'semi-bold': 'font-semibold',
                'normal': 'font-normal',
                'light': 'font-light'
            }
        },

        defaultVariants: {
            size: 'medium',
            weight: 'normal'
        },
    }
)