import React from 'react'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import { cn } from '../../../../common/utils/cn'
import {
    wrapperVariant,
    inputVariant,
    iconVariant
} from './textfield.variants'
import type { VariantProps } from 'class-variance-authority'

type TWrapperVariant = VariantProps<typeof wrapperVariant>
type TInputVariant = VariantProps<typeof inputVariant>
type TInputVariantSize = NonNullable<VariantProps<typeof inputVariant>['inputSize']>

const ICON_SIZE_MAP: Record<TInputVariantSize, number> = {
    medium: 14,
    small: 12
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>, TWrapperVariant, TInputVariant {
    className?: string
    inputClassName?: string
    placeholder?: string
    type?: Extract<React.HTMLInputTypeAttribute, "text" | "number">,
    prefixIcon?: IconType
    suffixIcon?: IconType
    disabled?: boolean
    isError?: boolean
    inputSize?: TInputVariant['inputSize']
}

const GTextfield = React.forwardRef<HTMLInputElement, IProps>((
    {
        inputSize,
        className = '',
        inputClassName = '',
        placeholder = '',
        type = 'text',
        prefixIcon: PrefixIcon,
        suffixIcon: SuffixIcon,
        disabled = false,
        isError = false,
        ...props
    }, ref
) => {
    return (
        <div
            className={cn(
                wrapperVariant({
                    inputSize,
                    error: isError,
                    disabled
                }),
                className
            )}
        >
            {PrefixIcon && <div className={cn(
                iconVariant({
                    inputSize,
                    error: isError
                })
            )}>
                <PrefixIcon size={ICON_SIZE_MAP[inputSize || 'medium']} />
            </div>}
            <input
                ref={ref}
                type={type}
                className={cn(
                    inputVariant({
                        hasPrefixIcon: !!PrefixIcon,
                        hasSuffixIcon: !!SuffixIcon,
                        inputSize,
                        disabled
                    }),
                    inputClassName
                )}
                placeholder={placeholder}
                disabled={disabled}
                {...props}
            />
            {SuffixIcon && <div className={cn(
                iconVariant({
                    inputSize,
                    error: isError
                })
            )}>
                <SuffixIcon size={ICON_SIZE_MAP[inputSize || 'medium']} />
            </div>}
        </div>
    )
})

export default GTextfield