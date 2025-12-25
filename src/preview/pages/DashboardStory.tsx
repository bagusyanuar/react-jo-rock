import React from 'react'
import {
    Sidebar,
    SidebarBrand,
    SidebarItemWrapper,
    SidebarItem
} from '../../ui/layouts/sidebar'
import { LuLayoutDashboard, LuBox } from 'react-icons/lu'

const DashboardStory = () => {
    return (
        <div className='w-full h-dvh bg-gray-100'>
            <Sidebar>
                <SidebarBrand className='gap-1.5'>
                    <div className='w-10 h-10 rounded-md bg-(--g-brand-500) flex items-center justify-center'>
                        <span className='text-white text-lg font-bold'>JR</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-neutral-700 font-semibold'>
                            My Application
                        </span>
                        <span className='text-xs text-neutral-500'>
                            Custom Application System
                        </span>
                    </div>
                </SidebarBrand>
                <div className='p-3'>
                    <div className='w-full border-b border-gray-300'></div>
                </div>
                <SidebarItemWrapper>
                    <SidebarItem
                        icon={LuLayoutDashboard}
                        text='Dashboard'
                        isActive
                    />
                    <SidebarItem
                        icon={LuBox}
                        text='Product'
                    />
                </SidebarItemWrapper>
            </Sidebar>
        </div>
    )
}

export default DashboardStory