import React from 'react'
import styled from 'styled-components'
import type { IconType } from 'react-icons'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    inputClassName?: string
    placeholder?: string
    type?: Extract<React.HTMLInputTypeAttribute, "text" | "number">,
    prefixIcon?: IconType
    suffixIcon?: IconType
    disabled?: boolean
    isError?: boolean
}

const JRTextfield = React.forwardRef<HTMLInputElement, IProps>((
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
        <TextfieldWrapper
            className={className}
            $prefixIcon={!!PrefixIcon}
            $suffixIcon={!!SuffixIcon}
            $disabled={disabled}
            $isError={isError}
        >
            {PrefixIcon && <IconWrapper $isError={isError}>
                <PrefixIcon size={14} />
            </IconWrapper>}
            <Textfield
                ref={ref}
                type={type}
                className={inputClassName}
                placeholder={placeholder}
                disabled={disabled}
                {...props}
            />
            {SuffixIcon && <IconWrapper $isError={isError}>
                <SuffixIcon size={14} />
            </IconWrapper>}
        </TextfieldWrapper>
    )
})

export default JRTextfield

const TextfieldWrapper = styled.div<{
    $prefixIcon?: boolean,
    $suffixIcon?: boolean,
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
    padding-left: ${({ theme, $prefixIcon }) => $prefixIcon ? '0.125rem' : '0.5rem'};
    padding-right: ${({ theme, $suffixIcon }) => $suffixIcon ? '0.125rem' : '0.5rem'};
    

    &:focus-within {
        border-color: ${({ theme, $isError }) => $isError ? theme.colors.errorColor : 'color-mix(in srgb, black 30%, #9ca3af)'};
    }
`;

const Textfield = styled.input`
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

const IconWrapper = styled.div<{ $isError?: boolean }>`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    color: ${({ theme, $isError }) =>
        $isError ? theme.colors.errorColor : 'inherit'};
`;
