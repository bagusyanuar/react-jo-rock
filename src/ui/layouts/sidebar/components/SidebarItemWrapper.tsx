import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps {
    children?: React.ReactNode
    className?: string
}

const SidebarItemWrapper: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={twMerge(
            'flex-1 flex flex-col gap-1 px-3',
            className
        )}>
            {children}
        </div>
    )
}

export default SidebarItemWrapper