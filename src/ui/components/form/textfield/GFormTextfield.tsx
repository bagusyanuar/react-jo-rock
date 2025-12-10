import { GTextfield } from '../../input/textfield'
import { GLabel } from '../../label'
import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form'
import styled from 'styled-components'

export interface IProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    className?: string
    isError?: boolean
    errorMessage?: string
    placeholder?: string
    disabled?: boolean
    label?: string
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
}: IProps<T>) => {
    return (
        <div className={className}>
            {label !== '' && <GLabel text={label} />}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <GTextfield
                        {...field}
                        placeholder={placeholder}
                        disabled={disabled}
                        isError={isError}
                    />
                )}
            />
            {isError && <Message>{errorMessage}</Message>}
        </div>
    )
}

export default GFormTextfield

const Message = styled.span`
    font-size: 0.75rem;
    color: ${({theme}) => theme.colors.errorColor};
    display: block;
`