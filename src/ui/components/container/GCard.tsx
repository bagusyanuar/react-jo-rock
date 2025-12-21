import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    children?: React.ReactNode
    className?: string
}

const GCard: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={twMerge(
            'p-4 bg-white shadow-xl rounded-md',
            className
        )}>
            {children}
        </div>
    )
}

export default GCard