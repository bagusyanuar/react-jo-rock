import React, { createContext, useContext } from 'react'

export interface PopoverContextValue {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    triggerRef: React.RefObject<HTMLElement | null>
    contentRef: React.RefObject<HTMLDivElement | null>
}

export const PopoverContext = createContext<PopoverContextValue | null>(null)

export const usePopoverContext = () => {
    const ctx = useContext(PopoverContext)
    if (!ctx) {
        throw new Error(
            'GPopover components must be used inside <GPopover />'
        )
    }
    return ctx
}