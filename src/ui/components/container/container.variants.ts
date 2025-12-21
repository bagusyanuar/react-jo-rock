import { cva } from 'class-variance-authority'

export const flexBoxVariants = cva(
    'flex',
    {
        variants: {
            direction: {
                row: 'flex-row',
                column: 'flex-col'
            },
            align: {
                'start-start': 'items-start justify-start',
                'start-center': 'items-start justify-center',
                'start-end': 'items-start justify-end',
                'start-between': 'items-start justify-between',
                'center-start': 'items-center justify-start',
                'center-center': 'items-center justify-center',
                'center-end': 'items-center justify-end',
                'center-between': 'items-center justify-between',
                'end-start': 'items-end justify-start',
                'end-center': 'items-end justify-center',
                'end-end': 'items-end justify-end',
                'end-between': 'items-end justify-between',
            },
        }
    }
)