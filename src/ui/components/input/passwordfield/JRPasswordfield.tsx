import React, { useState, type HTMLInputTypeAttribute } from 'react'
import styled from 'styled-components'
import { LuLock, LuEye, LuEyeOff } from 'react-icons/lu'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    inputClassName?: string
    placeholder?: string
    disabled?: boolean
    isError?: boolean
}

const JRPasswordfield = React.forwardRef<HTMLInputElement, IProps>(
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
            <PasswordfieldWrapper
                className={className}
                $disabled={disabled}
                $isError={isError}
            >
                <IconWrapper $isError={isError}>
                    <LuLock size={14} />
                </IconWrapper>
                <Passwordfield
                    ref={ref}
                    type={type}
                    className={inputClassName}
                    placeholder={placeholder}
                    disabled={disabled}
                    {...props}
                />
                <IconWrapper
                    $isError={isError}
                    onClick={handleChangeType}
                    $isClickable={true}
                >
                    {type === 'text' ? <LuEye size={14} /> : <LuEyeOff size={14} />}
                </IconWrapper>
            </PasswordfieldWrapper>
        )
    })

export default JRPasswordfield

const PasswordfieldWrapper = styled.div<{
    $disabled?: boolean,
    $isError?: boolean
}>`
    display: flex;
    align-itmes: center;
    justify-content: center;
    width: 12.5rem;
    background-color: ${({ theme, $disabled }) => $disabled ? theme.colors.disabledColor : 'white'};
    border: 1px solid ${({ theme, $isError }) => $isError ? theme.colors.errorColor : '#9ca3af'};
    color: #404040;
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    

    &:focus-within {
        border-color: ${({ theme, $isError }) => $isError ? theme.colors.errorColor : 'color-mix(in srgb, black 30%, #9ca3af)'};
    }
`;

const Passwordfield = styled.input`
    width: 100%;
    padding: 0.5rem 0;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    line-height: 1;
    border: none;
    background: transparent;
    box-sizing: border-box;
    color: inherit;

    &:focus {
        outline: none;
        box-shadow: none;
    }
`

const IconWrapper = styled.div<{ $isError?: boolean, $isClickable?: boolean }>`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    color: ${({ theme, $isError }) =>
        $isError ? theme.colors.errorColor : 'inherit'};
    cursor: ${({theme, $isClickable}) => $isClickable ? 'pointer' : 'default'};
`;