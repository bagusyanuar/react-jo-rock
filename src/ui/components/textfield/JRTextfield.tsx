import React from 'react'
import styled from 'styled-components'
import type { IconType } from 'react-icons'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    inputClassName?: string
    placeholder?: string
    type?: Extract<React.HTMLInputTypeAttribute, "text" | "number">,
    prefixIcon?: IconType
}

const JRTextfield = React.forwardRef<HTMLInputElement, IProps>((
    {
        className = '',
        inputClassName = '',
        placeholder = '',
        type = 'text',
        prefixIcon: PrefixIcon
    }, ref
) => {
    return (
        <TextfieldWrapper className={className} $prefixIcon={!!PrefixIcon}>
            {PrefixIcon && <PrefixIconWrapper>
                <PrefixIcon size={14} />
            </PrefixIconWrapper>}
            <Textfield
                ref={ref}
                type={type}
                className={inputClassName}
                placeholder={placeholder}
            />
        </TextfieldWrapper>
    )
})

export default JRTextfield

const TextfieldWrapper = styled.div<{ $prefixIcon?: boolean }>`
    display: flex;
    align-itmes: center;
    justify-content: center;
    width: 15rem;
    border: 1px solid #9ca3af;
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
    padding-left: ${({ theme, $prefixIcon }) => $prefixIcon ? '0' : '0.5rem'};
    

    &:focus-within {
        border-color: color-mix(in srgb, black 30%, #9ca3af);
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
    color: #404040;

    &:focus {
        outline: none;
        box-shadow: none;
    }
`

const PrefixIconWrapper = styled.div`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
`;