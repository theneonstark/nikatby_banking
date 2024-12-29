import React from 'react'
import { SidebarInset, SidebarProvider } from './ui/sidebar'
import { AppSidebar } from './app-sidebar'
import Navbar from './navbar'

function Layout({children}) {
  return (
    <SidebarProvider>
        <AppSidebar/>
        <SidebarInset>
        <Navbar/>
            <main>{children}</main>
        </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
