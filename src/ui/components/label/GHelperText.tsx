import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    text?: string
    isError?: boolean
    className?: string
}

const GHelperText: React.FC<IProps> = ({
    text,
    isError = false,
    className = ''
}) => {
    return (
        <div className={twMerge(
            'text-xs block text-neutral-500',
            isError && 'text-red-500',
            className
        )}>
            {text}
        </div>
    )
}

export default GHelperText