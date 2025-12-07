import React from 'react'
import { clsx } from 'clsx'
import styled from 'styled-components'
import { getVariantColor } from '../../../utils/helper'

interface IProps {
  className?: string
  text?: string
  variant?: 'primary' | 'accent'
}


const Button = styled.button<{ variant?: 'primary' | 'accent' }>`
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme, variant }) => getVariantColor(variant, theme, 'bg')};
  color: white;
  cursor: pointer;
  border: none;
  border: 1px solid ${({ theme, variant }) => getVariantColor(variant, theme, 'bg')};
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme, variant }) => getVariantColor(variant, theme, 'hover')};
    border-color: ${({ theme, variant }) => getVariantColor(variant, theme, 'hover')};
  }

  span {
    color: white;
  }
`;


const JRButton: React.FC<IProps> = ({
  className = '',
  text = 'Button',
  variant = 'primary'
}) => {
  return (
    <Button className={className} variant={variant}>
      <span className="">
        {text}
      </span>
    </Button>
  )
}

export default JRButton