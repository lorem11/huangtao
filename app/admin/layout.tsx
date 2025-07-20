import BreadCrumb from '@/components/breadcrumb'
import ModeToggle from '@/components/mode-toggle'
import AdminSideBar from '@/components/admin-side-bar'
import { PropsWithChildren } from 'react'
import ThemeSwitch from '@/components/liaght-dark-mode-switch'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[100vh]">
      <div>
        <AdminSideBar />
      </div>
      <div className="h-[100vh] flex flex-col p-8 pb-0 w-[100%]">
        <div className="h-[60px] flex items-center border-b justify-between">
          <BreadCrumb />
          <ThemeSwitch />
        </div>
        <main className="overflow-scroll h-[calc(100vh-60px)] mt-4 pr-2">
          {children}
        </main>
      </div>
    </div>
  )
}
