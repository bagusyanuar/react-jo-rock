import React from 'react'
import { usePopoverContext } from './GPopoverContext'
import { composeRefs } from './composeRefs'

interface IProps {
  children: React.ReactElement
  asChild?: boolean
}

export const GPopoverTrigger = React.forwardRef<
  HTMLElement,
  IProps
>(({ children, asChild = false }, forwardedRef) => {
  const { setOpen, triggerRef } = usePopoverContext()

  const handleClick: React.MouseEventHandler = (e) => {
    ;(children.props as any)?.onClick?.(e)
    setOpen(v => !v)
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      {
        onClick: handleClick,
        ref: composeRefs(
          forwardedRef,
          triggerRef,
          (children as any).ref
        ),
      } as any // 🔴 escape hatch WAJIB
    )
  }

  return (
    <button
      ref={composeRefs(forwardedRef, triggerRef)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
})

export default GPopoverTrigger