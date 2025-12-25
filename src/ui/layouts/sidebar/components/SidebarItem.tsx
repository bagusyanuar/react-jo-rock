import React from 'react'
import { twMerge } from 'tailwind-merge'
import type { IconType } from 'react-icons'
import { LuCircle } from 'react-icons/lu'
import type { PolymorphicComponentProps } from '../util/polymorphic'

interface IProps {
    text?: string
    icon?: IconType
    className?: string
    isActive?: boolean
}

type SidebarItemComponent = <
    C extends React.ElementType = 'div'
>(
    props: PolymorphicComponentProps<C, IProps>
) => React.ReactElement | null

const SidebarItem: SidebarItemComponent = ({
    as,
    icon: Icon,
    text = 'menu',
    className = '',
    isActive = false,
    ...props
}) => {
    const Component = as || 'div';

    return (
        <Component
            {...props}
            className={twMerge(
                'flex items-center rounded-md gap-2 px-3 py-3 text-neutral-500 cursor-pointer hover:bg-(--g-brand-500) hover:shadow-md hover:text-white transition-colors duration-300 ease-in-out',
                isActive && 'text-white bg-(--g-brand-500) shadow-md',
                className
            )}
        >
            {
                Icon ?
                    <Icon size={16} />
                    : <LuCircle size={16} />
            }
            <span className='text-sm leading-none'>
                {text}
            </span>
        </Component>
    )
}

export default SidebarItem