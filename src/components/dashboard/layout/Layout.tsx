'use client'
import React from 'react'
import SidebarDashboard from './sidebar/SidebarDashboard';
import HeaderDashboard from './header/HeaderDashboard';

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    
    const [view, setView] = React.useState(1);


    return (
        <div className="bg-bgDash w-dvw h-dvh p-4 gap-5 flex rtl">
            <SidebarDashboard view={view} setView={setView} />

            <div className={`w-full max-xl:w-full flex flex-col gap-5`}>
                <HeaderDashboard />

                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
