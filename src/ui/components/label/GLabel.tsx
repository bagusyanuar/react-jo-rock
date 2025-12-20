import React from 'react'
import {twMerge} from 'tailwind-merge'

interface IProps {
    text?: string
    required?: boolean
    className?: string
}

const GLabel: React.FC<IProps> = ({
    text = 'Label',
    className = '',
    required = false
}) => {
    return (
        <label className={twMerge(
            'flex gap-1 text-xs text-neutral-700 font-semibold leading-none',
            className
        )}>
            {text}
            {required && <div className='text-red-500'>*</div>}
        </label>
    )
}

export default GLabel