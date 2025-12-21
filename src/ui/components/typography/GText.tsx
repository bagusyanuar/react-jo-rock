import React from 'react'
import { cn } from '../../../common/utils/cn'
import { textVariants } from './typography.variants'
import type { VariantProps } from 'class-variance-authority'

type TVariant = VariantProps<typeof textVariants>

interface IProps extends TVariant {
    children?: string
    className?: string
    size?: TVariant['size']
    weight?: TVariant['weight']
    tone?: TVariant['tone']
}

const GText: React.FC<IProps> = ({
    children,
    size,
    weight,
    tone,
    className = ''
}) => {
    return (
        <p className={cn(
            textVariants({
                size,
                weight,
                tone
            }),
            className
        )}>
            {children}
        </p>
    )
}

export default GText