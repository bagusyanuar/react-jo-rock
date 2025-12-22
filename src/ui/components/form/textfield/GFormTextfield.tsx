import { GTextfield } from '../../input/textfield'
import { GLabel } from '../../label'
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form'
import type { IconType } from 'react-icons'

export interface IProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    className?: string
    isError?: boolean
    errorMessage?: string
    placeholder?: string
    disabled?: boolean
    label?: string
    required?: boolean
    prefixIcon?: IconType
    suffixIcon?: IconType
}

const GFormTextfield = <T extends FieldValues,>({
    control,
    name,
    label = '',
    className = '',
    isError = false,
    errorMessage = '',
    placeholder = '',
    disabled = false,
    required = false,
    prefixIcon,
    suffixIcon,
}: IProps<T>) => {
    return (
        <div className={className}>
            {label !== '' && <GLabel text={label} required={required} />}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <GTextfield
                        {...field}
                        placeholder={placeholder}
                        disabled={disabled}
                        isError={isError}
                        prefixIcon={prefixIcon}
                        suffixIcon={suffixIcon}
                    />
                )}
            />
            {isError && <div className='text-xs text-red-500 block'>{errorMessage}</div>}
        </div>
    )
}

export default GFormTextfield