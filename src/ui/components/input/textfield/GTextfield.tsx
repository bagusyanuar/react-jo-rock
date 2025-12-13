import React from 'react'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import {cn} from '../../../../common/utils/cn'
import {
  textfieldWrapperVariants,
  textfieldInputVariants,
} from './textfield.variants'
import type { VariantProps } from 'class-variance-authority'


interface IProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof textfieldWrapperVariants> {
    className?: string
    inputClassName?: string
    placeholder?: string
    type?: Extract<React.HTMLInputTypeAttribute, "text" | "number">,
    prefixIcon?: IconType
    suffixIcon?: IconType
    disabled?: boolean
    isError?: boolean
}

const GTextfield = React.forwardRef<HTMLInputElement, IProps>((
    {
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
                textfieldWrapperVariants({
                    error: isError,
                    disabled
                }),
                className
            )}
        >
            {PrefixIcon && <div className={twMerge(
                'h-full w-8 flex items-center justify-center',
                isError && 'text-red-500'
            )}>
                <PrefixIcon size={14}/>
            </div>}
            <input
                ref={ref}
                type={type}
                className={cn(
                    textfieldInputVariants({
                        hasPrefixIcon: !!PrefixIcon,
                        hasSuffixIcon: !!SuffixIcon,
                        disabled
                    }),
                    inputClassName
                )}
                placeholder={placeholder}
                disabled={disabled}
                {...props}
            />
            {SuffixIcon && <div className={twMerge(
                'h-full w-8 flex items-center justify-center',
                isError && 'text-red-500'
            )}>
                <SuffixIcon size={14} />
            </div>}
        </div>
    )
})

export default GTextfield