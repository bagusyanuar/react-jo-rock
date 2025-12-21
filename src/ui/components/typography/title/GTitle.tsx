import React from 'react'
import { titleVariants } from './title.variants'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '../../../../common/utils/cn'

type TVariant = VariantProps<typeof titleVariants>
interface IProps extends TVariant {
    children?: string
    className?: string
    size?: TVariant['size']
    weight?: TVariant['weight']
}

const GTitle: React.FC<IProps> = ({
    children,
    size = 'medium',
    weight = 'normal',
    className = ''
}) => {
    return (
        <h1
            className={cn(
                titleVariants({
                    size,
                    weight
                }),
                className
            )}
        >
            {children}
        </h1>
    )
}

export default GTitle