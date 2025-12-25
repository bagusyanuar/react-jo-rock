import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    children?: React.ReactNode
    className?: string
}

const SidebarBrand: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={twMerge(
            'w-full flex items-center px-3 py-3',
            className
        )}>
            {children}
        </div>
    )
}

export default SidebarBrand