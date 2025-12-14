import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    disabled?: boolean
    isError?: boolean
}

const GRadio = forwardRef<HTMLInputElement, IProps>(
    (
        {
            label,
            disabled = false,
            isError = false,
            ...props
        },
        ref
    ) => {
        return (
            <label className={twMerge(
                "inline-flex items-center gap-2 cursor-pointer relative",
                disabled && 'cursor-not-allowed'
            )}>
                <input
                    ref={ref}
                    type="radio"
                    className="peer absolute opacity-0 w-0 h-0"
                    disabled={disabled}
                    {...props}
                />
                <span
                    className={twMerge(
                        'w-5 h-5 border border-(--g-brand-500) flex items-center justify-center rounded-full transition',
                        'peer-checked:border-(--g-brand-500)',
                        'peer-checked:[&_span]:opacity-100 peer-checked:[&_span]:scale-100',
                        disabled && 'bg-neutral-200 border-neutral-400 peer-checked:border-neutral-400',
                        isError && 'border-red-500 peer-checked:border-red-500'
                    )}
                >
                    <span
                        className={twMerge(
                            'w-4 h-4 rounded-full bg-(--g-brand-500) opacity-0 scale-50 transition-all duration-150',
                            disabled && 'bg-neutral-400',
                            isError && 'bg-red-500'
                        )}
                    />
                </span>


                {label && (
                    <span className="text-sm text-neutral-700 select-none">
                        {label}
                    </span>
                )}
            </label>
        )
    }
)

export default GRadio
