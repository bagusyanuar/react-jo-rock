import { cva } from 'class-variance-authority'

export const textVariants = cva(
    'text-neutral-700',
    {
        variants: {
            size: {
                'extra-large': 'text-xl',
                'large': 'text-lg',
                'medium': 'text-md',
                'small': 'text-sm',
                'extra-small': 'text-xs'
            },
            weight: {
                'extra-bold': 'font-extrabold',
                'bold': 'font-bold',
                'semi-bold': 'font-semibold',
                'normal': 'font-normal',
                'light': 'font-light'
            },
            tone: {
                'muted': 'text-neutral-500',
                'normal': 'text-neutral-700',
                'strong': 'text-neutral-900'
            }
        },
        defaultVariants: {
            size: 'medium',
            weight: 'normal',
            tone: 'normal'
        }
    }
)