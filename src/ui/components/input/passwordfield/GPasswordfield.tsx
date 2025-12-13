import React, { useState, type HTMLInputTypeAttribute } from 'react'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
import { cn } from '../../../../common/utils/cn'
import {
    passwordfieldWrapperVariants,
    passwordfieldInputVariants,
} from './passwordfield.variants'
import type { VariantProps } from 'class-variance-authority'
import { LuLock, LuEye, LuEyeOff } from 'react-icons/lu'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof passwordfieldWrapperVariants> {
    className?: string
    inputClassName?: string
    placeholder?: string
    disabled?: boolean
    isError?: boolean
}

const GPasswordfield = React.forwardRef<HTMLInputElement, IProps>(
    (
        {
            className = '',
            inputClassName = '',
            placeholder = '',
            isError = false,
            disabled = false,
            ...props
        },
        ref
    ) => {
        const [type, setType] = useState<HTMLInputTypeAttribute>('password')

        const handleChangeType = () => {
            if (!disabled) {
                setType(prev => prev === 'password' ? 'text' : 'password');
            }
        }
        return (
            <div
                className={cn(
                    passwordfieldWrapperVariants({
                        error: isError,
                        disabled
                    }),
                    className
                )}
            >
                <div className={twMerge(
                    'h-full w-8 flex items-center justify-center text-neutral-700',
                    isError && 'text-red-500'
                )}>
                    <LuLock size={14} />
                </div>
                <input
                    ref={ref}
                    type={type}
                    className={cn(
                        passwordfieldInputVariants({
                            disabled
                        }),
                        inputClassName
                    )}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...props}
                />
                <div className={twMerge(
                    'h-full w-8 flex items-center justify-center cursor-pointer text-neutral-700',
                    isError && 'text-red-500'
                )}
                    onClick={handleChangeType}
                >
                    {type === 'text' ? <LuEye size={14} /> : <LuEyeOff size={14} />}
                </div>
            </div>
        )
    })

export default GPasswordfield