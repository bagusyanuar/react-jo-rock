import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
    cloneElement,
    isValidElement
} from 'react'
import { createPortal } from 'react-dom'
import { usePopoverContext } from './GPopoverContext'
import { composeRefs } from './composeRefs'

type PopoverAnchor = 'bottom-left' | 'bottom-right' | 'bottom-center'

interface IProps {
    children: React.ReactNode
    className?: string
    offset?: number
    anchor?: PopoverAnchor
    forceMount?: boolean
    asChild?: boolean
}

const GPopoverContent: React.FC<IProps> = ({
    children,
    className = '',
    offset = 8,
    anchor = 'bottom-left',
    forceMount = false,
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


    // === Default: unmount total (tanpa animasi) === //
    if (!open && !forceMount) return null

    const stateProps = {
        ref: contentRef,
        style,
        'data-state': open ? 'open' : 'closed',
        hidden: !open && forceMount && !asChild,
    }

    const element =
        asChild && isValidElement(children)
            ? cloneElement(
                children as React.ReactElement<any>,
                {
                    ...stateProps,
                    ref: composeRefs(
                        (children as any).ref,
                        contentRef
                    ),
                    className: [
                        (children as any).props?.className,
                        className,
                    ]
                        .filter(Boolean)
                        .join(' '),
                }
            )
            : (
                <div
                    {...stateProps}
                    className={className}
                >
                    {children}
                </div>
            )
    return createPortal(element, document.body)
}

export default GPopoverContent