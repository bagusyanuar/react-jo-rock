import React from 'react'
import type { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface IProps {
  className?: string
  text?: string
  variant?: 'primary' | 'accent'
  icon?: IconType
  loading?: boolean
  onClick?: () => void
}

const GButton: React.FC<IProps> = ({
  variant = 'primary',
  text = 'Button',
  className = '',
  icon: Icon,
  loading = false,
  onClick
}) => {
  return (
    <button className={twMerge(
      'bg-(--g-brand-500) text-white'
    )}>
      {text}
    </button>
  )
}

export default GButton

// const spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;


// const Button = styled.button<{ $variant?: 'primary' | 'accent' }>`
//   padding: 0.5rem 1.25rem;
//   background-color: ${({ theme, $variant }) => getVariantColor($variant, theme, 'bg')};
//   color: white;
//   cursor: pointer;
//   border: none;
//   border: 1px solid ${({ theme, $variant }) => getVariantColor($variant, theme, 'bg')};
//   border-radius: 0.25rem;
//   transition: all 0.3s ease-in-out;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.25rem;
//   font-size: 0.875rem;

//   &:hover {
//     background-color: ${({ theme, $variant }) => getVariantColor($variant, theme, 'hover')};
//     border-color: ${({ theme, $variant }) => getVariantColor($variant, theme, 'hover')};
//   }

//   span {
//     color: white;
//   }

//   .loading-icon {
//     animation: ${spin} 1s linear infinite;
//     height: 0.75rem;
//     width: 0.75rem;
//     color: white;
//     fill: #9ca3af;
//   }
// `;