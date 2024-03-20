import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderComponent } from './HeaderComponent/HeaderComponent'

export const MainLayout = () => {
  return (
    <div>
        <HeaderComponent/>
        <Outlet/>
    </div>
  )
}
