import React from 'react'

interface IProps {
    children?: React.ReactNode
}

const Sidebar: React.FC<IProps> = ({
    children
}) => {
    return (
        <aside className='w-64 h-dvh bg-white shadow-md border-r border-gray-300 flex flex-col'>
            { children }
        </aside>
    )
}

export default Sidebar