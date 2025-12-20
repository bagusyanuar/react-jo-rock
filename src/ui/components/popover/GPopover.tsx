import React, { useRef, useState } from 'react'
import { PopoverContext } from './GPopoverContext'

interface GPopoverProps {
  children: React.ReactNode
}

const GPopover: React.FC<GPopoverProps> = ({ children }) => {
  const triggerRef = useRef<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <PopoverContext.Provider
      value={{ open, setOpen, triggerRef, contentRef }}
    >
      {children}
    </PopoverContext.Provider>
  )
}

export default GPopover