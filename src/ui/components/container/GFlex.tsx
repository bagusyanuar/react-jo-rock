import React from 'react'
import { cn } from '../../../common/utils/cn'
import { flexBoxVariants } from './container.variants'
import type { VariantProps } from 'class-variance-authority'
type TVariant = VariantProps<typeof flexBoxVariants>

interface IProps extends TVariant {
    children?: React.ReactNode
    className?: string
    direction?: TVariant['direction']
    align?: TVariant['align']
}

const GFlex: React.FC<IProps> = ({
    children,
    className = '',
    direction = 'row',
    align = 'start-start'
}) => {
    return (
        <div className={cn(
            flexBoxVariants({
                direction,
                align
            }),
            className
        )}>
            {children}
        </div>
    )
}

export default GFlex