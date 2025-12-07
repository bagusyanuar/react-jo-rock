import React from 'react'
import styled from 'styled-components'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    inputClassName?: string
    placeholder?: string
    type?: Extract<React.HTMLInputTypeAttribute, "text" | "number">,
}

const JRTextfield = React.forwardRef<HTMLInputElement, IProps>((
    {
        className = '',
        inputClassName = '',
        placeholder = '',
        type = 'text'
    }, ref
) => {
    return (
        <TextfieldWrapper className={className}>
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

const TextfieldWrapper = styled.div`
    position: relative;
    width: 100%;
    border: 1px solid #9ca3af;
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
    

    &:focus-within {
        border-color: color-mix(in srgb, black 30%, #9ca3af);
    }
`;

const Textfield = styled.input`
    width: 100%;
    padding: 0.5rem 0.5rem;
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