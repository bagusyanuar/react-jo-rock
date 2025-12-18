import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
} from 'react'
import { createPortal } from 'react-dom'
import { usePopoverContext } from './GPopoverContext'

interface IProps {
    children: React.ReactNode
    className?: string
    offset?: number
}

const GPopoverContent: React.FC<IProps> = ({
    children,
    className = '',
    offset = 8,
}) => {
    const { open, setOpen, triggerRef, contentRef } =
        usePopoverContext()

    const [style, setStyle] = useState<React.CSSProperties>({})

    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return

        const rect = triggerRef.current.getBoundingClientRect()

        setStyle({
            position: 'fixed',
            top: rect.bottom + offset,
            left: rect.left,
            zIndex: 50,
        })
    }, [offset, triggerRef])

    useLayoutEffect(() => {
        if (open) updatePosition()
    }, [open, updatePosition])

    useEffect(() => {
        if (!open) return

        window.addEventListener('resize', updatePosition)
        window.addEventListener('scroll', updatePosition, true)

        return () => {
            window.removeEventListener('resize', updatePosition)
            window.removeEventListener('scroll', updatePosition, true)
        }
    }, [open, updatePosition])

    useEffect(() => {
        if (!open) return

        const handler = (e: MouseEvent) => {
            if (
                triggerRef.current?.contains(e.target as Node) ||
                contentRef.current?.contains(e.target as Node)
            ) {
                return
            }
            setOpen(false)
        }

        document.addEventListener('mousedown', handler)
        return () =>
            document.removeEventListener('mousedown', handler)
    }, [open, setOpen, triggerRef, contentRef])

    if (!open) return null

    return createPortal(
        <div ref={contentRef} style={style} className={className}>
            {children}
        </div>,
        document.body
    )
}

export default GPopoverContent