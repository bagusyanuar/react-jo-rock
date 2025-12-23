import React from 'react'

interface IProps {
    children?: React.ReactNode
}

const Sidebar: React.FC<IProps> = ({
    children
}) => {
    return (
        <aside className='w-64 h-dvh bg-(--g-brand-500)'>
            { children }
        </aside>
    )
}

export default Sidebar