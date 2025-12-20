import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    children: string
    className?: string
}
const Paragraph: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <p className={twMerge(
            'text-neutral-700 text-sm',
            className
        )}>
            {children}
        </p>
    )
}

export default Paragraph