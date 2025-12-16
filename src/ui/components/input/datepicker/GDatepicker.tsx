import React, { forwardRef, useState, useEffect, use } from 'react'
import ReactDatePicker, { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { twMerge } from 'tailwind-merge'
import { LuCalendar, LuChevronLeft, LuChevronRight } from 'react-icons/lu'

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

interface IHeaderProps extends ReactDatePickerCustomHeaderProps {
    viewMode: ViewMode
    onClick?: () => void
}

const Header: React.FC<IHeaderProps> = ({
    viewMode,
    onClick,
    date,
    decreaseMonth,
    increaseMonth,
    increaseYear,
    decreaseYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
}) => {
    return (
        <div className='flex items-center justify-between px-3 py-2.5 bg-white rounded-t-md!'>
            <button
                className='text-(--g-brand-500) hover:text-(--g-brand-700) disabled:opacity-40 cursor-pointer focus:outline-none'
                onClick={viewMode === 'day' ? decreaseMonth : decreaseYear}
                disabled={prevMonthButtonDisabled}
            >
                <LuChevronLeft size={16} className='' />
            </button>
            <span
                className={twMerge(
                    'text-(--g-brand-500) font-semibold text-sm!',
                    viewMode !== 'year' && 'hover:underline cursor-pointer'
                )}
                onClick={() => {
                    if (viewMode === 'year') return
                    onClick?.()
                }}
            >
                {viewMode === 'day' &&
                    `${date.toLocaleString('id-ID', { month: 'long' })} ${date.getFullYear()}`}
                {viewMode === 'month' && date.getFullYear()}
                {viewMode === 'year' && 'Pilih Tahun'}
            </span>
            <button
                className='text-(--g-brand-500) hover:text-(--g-brand-700) disabled:opacity-40 cursor-pointer focus:outline-none'
                onClick={viewMode === 'day' ? increaseMonth : increaseYear}
                disabled={nextMonthButtonDisabled}
            >
                <LuChevronRight size={16} className='text-(--g-brand-500)' />
            </button>
        </div>
    )
}

type ViewMode = 'day' | 'month' | 'year'

const VIEW_FLOW: Record<ViewMode, ViewMode> = {
    day: 'month',
    month: 'year',
    year: 'year'
}

const VIEW_FLOW_ON_SELECT: Record<ViewMode, ViewMode> = {
    year: 'month',
    month: 'day',
    day: 'day',
}

type PickerMode = ViewMode

export interface IProps {
    value: Date | null
    onChange?: (date: Date | null) => void
    mode?: PickerMode
    placeholder?: string
    disabled?: boolean
    isError?: boolean
    className?: string
    dateFormat?: string
}

const getDateFormat = (mode: PickerMode, dateFormat?: string) => {
    switch (mode) {
        case 'year':
            return 'yyyy'
        case 'month':
            if (dateFormat) {
                return dateFormat
            }
            return 'MM/yyyy'
        default:
            if (dateFormat) {
                return dateFormat
            }
            return 'dd/MM/yyyy'
    }
}


const GDatepicker: React.FC<IProps> = ({
    value,
    onChange,
    dateFormat,
    placeholder,
    disabled,
    isError,
    className,
    mode = 'day',
}) => {
    const isStrict = mode !== 'day'
    const [viewMode, setViewMode] = useState<ViewMode>(mode)
    const [tempDate, setTempDate] = useState<Date | null>(value)

    /* sync controlled value */
    useEffect(() => {
        setTempDate(value)
    }, [value])

    /* sync mode from parent */
    useEffect(() => {
        setViewMode(mode)
    }, [mode])

    const onHeaderClick = () => {
        if (isStrict) return
        setViewMode(prev => VIEW_FLOW[prev])
    }

    return (
        <div className={twMerge('w-full rounded-md p-0', className)}>
            <ReactDatePicker
                wrapperClassName='w-full'
                showPopperArrow={false}
                popperClassName='-mt-1!'
                shouldCloseOnSelect={isStrict || viewMode === 'day'}
                showYearPicker={viewMode === 'year'}
                showMonthYearPicker={viewMode === 'month'}
                selected={value}
                onChange={(val) => {
                    // navigasi saja
                    setTempDate(val)
                }}

                onSelect={(val) => {
                    if (!val) return

                    // STRICT MODE → langsung commit
                    if (isStrict) {
                        onChange?.(val)
                        return
                    }

                    // FLOW MODE
                    if (viewMode === 'day') {
                        onChange?.(val)
                    }

                    setViewMode(prev => VIEW_FLOW_ON_SELECT[prev])
                }}
                renderCustomHeader={
                    props => <Header
                        viewMode={viewMode}
                        onClick={onHeaderClick}
                        {...props}
                    />
                }
                customInput={
                    <Input
                        placeholder={placeholder}
                        isError={isError}
                    />
                }
                disabled={disabled}
                dateFormat={getDateFormat(mode, dateFormat)}
                popperPlacement="bottom-end"
            />
        </div>
    )
}

export default GDatepicker