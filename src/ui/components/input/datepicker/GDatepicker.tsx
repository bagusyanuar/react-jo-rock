import React, { forwardRef } from 'react'
import ReactDatePicker, { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { twMerge } from 'tailwind-merge'
import { LuCalendar, LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export interface IProps {
    value?: Date | null
    onChange?: (date: Date | null) => void
    placeholder?: string
    disabled?: boolean
    isError?: boolean
    className?: string
}

interface IInputProps {
    value?: string
    placeholder?: string
    isError?: boolean
    disabled?: boolean
    onClick?: () => void
}

const Input = forwardRef<HTMLInputElement, IInputProps>(({
    onClick,
    value,
    placeholder,
    isError = false,
    disabled = false,
}, ref: any) => (
    <div className={
        twMerge(
            'w-full flex text-sm rounded-md border border-neutral-400 py-2.5 px-3',
            'bg-white placeholder-gray-400 focus:border-neutral-700 focus-visible:outline-none hover:cursor-pointer',
            isError && 'border-red-500',
            disabled && 'bg-neutral-200',
        )}
        onClick={onClick}
        ref={ref}>
        <span className={twMerge(
            'flex-1 text-neutral-700 leading-none',
            disabled && 'text-neutral-500'
        )}>
            {value === '' ? placeholder : value}
        </span>
        <LuCalendar
            className={twMerge(
                'text-neutral-700',
                isError && 'text-red-500'
            )} size={14} />
    </div>
));

const Header: React.FC<ReactDatePickerCustomHeaderProps> = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
}) => {
    return (
        <div className='flex items-center justify-between px-3 py-2.5 bg-white rounded-t-md!'>
            <button
                className='text-(--g-brand-500) hover:text-(--g-brand-700) disabled:opacity-40 cursor-pointer'
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
            >
                <LuChevronLeft size={16} className='' />
            </button>
            <span className='text-(--g-brand-500) font-semibold text-sm!'>
                {
                    date.toLocaleString('en-US', {
                        month: 'long',
                        year: 'numeric',
                    })
                }
            </span>
            <button
                className='text-(--g-brand-500) hover:text-(--g-brand-700) disabled:opacity-40 cursor-pointer'
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
            >
                <LuChevronRight size={16} className='text-(--g-brand-500)' />
            </button>
        </div>
    )
}


const GDatepicker: React.FC<IProps> = ({
    value,
    onChange,
    placeholder,
    disabled,
    isError,
    className
}) => {
    return (
        <div className={twMerge('w-full rounded-md p-0', className)}>
            <ReactDatePicker
                wrapperClassName='w-full'
                selected={value}
                onChange={onChange}
                renderCustomHeader={props => <Header {...props} />}
                customInput={
                    <Input
                        placeholder={placeholder}
                        isError={isError}
                    />
                }
                disabled={disabled}
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom-end"
            />
        </div>
    )
}

export default GDatepicker