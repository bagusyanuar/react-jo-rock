import React, {
    useCallback,
    useEffect,
    useState,
    useLayoutEffect
} from 'react'
import { createPortal } from 'react-dom'
import { usePopoverContext } from './GPopoverContext'
import { motion, AnimatePresence } from 'motion/react'

type PopoverAnchor = 'bottom-left' | 'bottom-right' | 'bottom-center'

interface IProps {
    children: React.ReactNode
    className?: string
    offset?: number
    anchor?: PopoverAnchor
    asChild?: boolean
}

const GPopoverContent: React.FC<IProps> = ({
    children,
    className = '',
    offset = 8,
    anchor = 'bottom-left',
    asChild = false
}) => {
    const { open, setOpen, triggerRef, contentRef } =
        usePopoverContext()

    const [style, setStyle] = useState<React.CSSProperties>({})

    const updatePosition = useCallback(() => {
        if (!triggerRef.current || !contentRef.current) return

        const triggerRect = triggerRef.current.getBoundingClientRect()
        const contentRect = contentRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        // ===== vertical (auto flip) =====
        const spaceBelow =
            viewportHeight - triggerRect.bottom - offset
        const spaceAbove = triggerRect.top - offset

        const shouldFlip =
            spaceBelow < contentRect.height &&
            spaceAbove > contentRect.height

        const top = shouldFlip
            ? triggerRect.top - contentRect.height - offset
            : triggerRect.bottom + offset

        // ===== horizontal (anchor) =====
        let left = triggerRect.left

        if (anchor === 'bottom-center') {
            left =
                triggerRect.left +
                triggerRect.width / 2 -
                contentRect.width / 2
        }

        if (anchor === 'bottom-right') {
            left =
                triggerRect.right - contentRect.width
        }

        setStyle({
            position: 'fixed',
            top,
            left,
            zIndex: 50,
        })
    }, [offset, triggerRef, contentRef])

    useLayoutEffect(() => {
        if (open) {
            requestAnimationFrame(updatePosition)
        }
    }, [open])

    useEffect(() => {
        if (!open) return

        window.addEventListener('resize', updatePosition)
        window.addEventListener('scroll', updatePosition, true)

        return () => {
            window.removeEventListener('resize', updatePosition)
            window.removeEventListener('scroll', updatePosition, true)
        }
    }, [open, updatePosition])

    // === handle click outside === //
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

    const MotionWrapper = asChild ? motion.div : motion.div

    return createPortal(
        <AnimatePresence>
            {open && (
                <MotionWrapper
                    ref={contentRef}
                    style={style}
                    className={className}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                        closed: { opacity: 0, scale: 0.96 },
                        open: { opacity: 1, scale: 1 }
                    }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                    {children}
                </MotionWrapper>
            )}
        </AnimatePresence>,
        document.body
    )
}

export default GPopoverContent