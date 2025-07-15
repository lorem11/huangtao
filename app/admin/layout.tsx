import BreadCrumb from '@/components/breadcrumb'
import ModeToggle from '@/components/mode-toggle'
import SideBar from '@/components/admin-side-bar'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[100vh]">
      <div className="flex-none">
        <SideBar />
      </div>
      <div className="h-[100vh] flex flex-col p-8 pb-0">
        <div className="h-[60px] flex items-center border-b justify-between">
          <BreadCrumb />
          <ModeToggle />
        </div>
        <main className="overflow-scroll h-[calc(100vh-60px)] mt-4">
          {children}
        </main>
      </div>
    </div>
  )
}
