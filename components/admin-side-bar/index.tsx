'use client'

import {
  ChevronLeft,
  ChevronLeftIcon,
  ChevronRight,
  LogOutIcon,
} from 'lucide-react'
import { startTransition, useRef, useState } from 'react'
import AdminMenu from '../admin-menu'
import { useReversedTheme } from '../hooks/useReversedTheme'
import Logo from '../logo'
import { Button } from '../ui/button'

function SideBar() {
  const ref = useRef<HTMLElement>(null)
  useReversedTheme(ref)

  return (
    <aside
      ref={ref}
      className="h-[96vh] w-[400px] border rounded-r-[3rem] translate-y-[2vh] relative bg-background text-primary"
    >
      <div className="p-4 flex flex-col items-center gap-4 h-full justify-around">
        <div className="scale-125">
          <Logo reverse />
        </div>
        <AdminMenu />
        <Button variant="outline">
          <LogOutIcon /> 退出登录
        </Button>
      </div>
    </aside>
  )
}

export default function AdminSideBar() {
  const [expand, setExpand] = useState(false)
  const expandButtonRef = useRef<HTMLDivElement>(null)
  useReversedTheme(expandButtonRef)

  return (
    <div className="relative h-full">
      {expand && <SideBar />}
      <div
        ref={expandButtonRef}
        className="w-[24px] h-[100px] bg-background absolute right-0 top-[50%] -translate-y-[50%] translate-x-[calc(90%-1px)] rounded-r-lg"
      >
        <button
          className="text-primary h-full"
          onClick={() => setExpand(!expand)}
        >
          {expand ? <ChevronLeftIcon /> : <ChevronRight />}
        </button>
      </div>
    </div>
  )
}
