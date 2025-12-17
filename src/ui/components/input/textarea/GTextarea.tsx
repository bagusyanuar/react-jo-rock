import React from 'react'
import { twMerge } from 'tailwind-merge'
import {cn} from '../../../../common/utils/cn'
import {
  textareaWrapperVariants,
  textareaInputVariants,
} from './textarea.variants'
import type { VariantProps } from 'class-variance-authority'


interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaWrapperVariants> {
    className?: string
    inputClassName?: string
    placeholder?: string
    disabled?: boolean
    isError?: boolean
}

const GTextfield = React.forwardRef<HTMLTextAreaElement, IProps>((
    {
        className = '',
        inputClassName = '',
        placeholder = '',
        disabled = false,
        isError = false,
        ...props
    }, ref
) => {
    return (
        <div
            className={cn(
                textareaWrapperVariants({
                    error: isError,
                    disabled
                }),
                className
            )}
        >
            <textarea
                ref={ref}
                className={cn(
                    textareaInputVariants({
                        disabled
                    }),
                    inputClassName
                )}
                placeholder={placeholder}
                disabled={disabled}
                {...props}
            />
        </div>
    )
})

export default GTextfield