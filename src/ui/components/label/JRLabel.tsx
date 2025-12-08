import React from 'react'
import styled from 'styled-components'

interface IProps {
    text?: string
    required?: boolean
    className?: string
}

const JRLabel: React.FC<IProps> = ({
    text = 'Label',
    className = '',
    required = false
}) => {
    return (
        <Label className={className}>
            {text}
            {required && <RequiredSymbol>*</RequiredSymbol>}
        </Label>
    )
}

export default JRLabel

const Label = styled.label`
    display: flex;
    gap: 0.25rem;
    color: #404040;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 0.125rem;
    line-height: 1.5;
`;

const RequiredSymbol = styled.span`
    color: ${({theme}) => theme.colors.errorColor};
`