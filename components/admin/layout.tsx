'use client'

import { PropsWithChildren, useState } from 'react'
import AdminSideBar from '../admin-side-bar'
import BreadCrumb from '../breadcrumb'
import ThemeSwitch from '../liaght-dark-mode-switch'
import { cn } from '@/lib/utils'

export default function AdminLayout({ children }: PropsWithChildren) {
  const [expand, setExpand] = useState(false)

  return (
    <div className="flex relative">
      <div className="fixed z-10">
        <AdminSideBar setExpand={setExpand} expand={expand} />
      </div>
      <div
        className={cn(
          'flex-1 px-5 transition-all duration-[250ms] ease-in-out',
          expand ? 'ml-[420px]' : 'ml-[20px]'
        )}
      >
        <div className="h-[60px] flex items-center border-b justify-between sticky top-0 backdrop-blur z-10">
          <BreadCrumb />
          <ThemeSwitch />
        </div>
        <main className="py-5">{children}</main>
      </div>
    </div>
  )
}
