import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    useCallback,
} from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'

interface IProps {
    trigger: React.ReactNode
    children?: React.ReactNode
    className?: string
    offset?: number
}

const GPopover: React.FC<IProps> = ({
    trigger,
    children,
    className = '',
    offset = 8,
}) => {
    const triggerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const [open, setOpen] = useState(false)
    const [style, setStyle] = useState<React.CSSProperties>({})

    /* ===============================
     * update position
     * =============================== */
    const updatePosition = useCallback(() => {
        if (!triggerRef.current) return

        const rect = triggerRef.current.getBoundingClientRect()

        setStyle({
            position: 'fixed',
            top: rect.bottom + offset,
            left: rect.left,
            zIndex: 50,
        })
    }, [offset])

    /* ===============================
     * open -> calculate position
     * =============================== */
    useLayoutEffect(() => {
        if (!open) return
        updatePosition()
    }, [open, updatePosition])

    /* ===============================
     * resize & scroll handler
     * =============================== */
    useEffect(() => {
        if (!open) return

        window.addEventListener('resize', updatePosition)
        window.addEventListener('scroll', updatePosition, true)

        return () => {
            window.removeEventListener('resize', updatePosition)
            window.removeEventListener('scroll', updatePosition, true)
        }
    }, [open, updatePosition])

    /* ===============================
     * click outside
     * =============================== */
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
        return () => document.removeEventListener('mousedown', handler)
    }, [open])

    return (
        <>
            {/* Trigger */}
            <div
                ref={triggerRef}
                onClick={() => setOpen(v => !v)}
                className="inline-block"
            >
                {trigger}
            </div>

            {/* Content */}
            {open &&
                createPortal(
                    <div
                        ref={contentRef}
                        style={style}
                        className={twMerge(
                            'origin-top-left transition-all duration-150 ease-out',
                            open
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-95 pointer-events-none',
                            'rounded-md border bg-white shadow-md p-2',
                            className
                        )}
                    >
                        {children}
                    </div>,
                    document.body
                )}
        </>
    )
}

export default GPopover
