'use client'

import { ChevronLeftIcon, ChevronRightIcon, LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'
import {
  startTransition,
  useLayoutEffect,
  useRef,
  unstable_ViewTransition as ViewTransition,
} from 'react'
import AdminMenu from '../admin-menu'
import { useReversedTheme } from '../hooks/useReversedTheme'
import Logo from '../logo'
import { Button } from '../ui/button'

function SideBar() {
  const ref = useRef<HTMLElement>(null)
  useReversedTheme(ref)

  return (
    <ViewTransition enter="slide-in" exit="slide-out">
      <aside
        ref={ref}
        className="h-[calc(100vh-40px)] w-[400px] border rounded-r-[3rem] translate-y-[20px] relative bg-background text-primary"
      >
        <div className="p-4 flex flex-col items-center gap-4 h-full justify-around">
          <div className="scale-125">
            <Logo reverse />
          </div>
          <AdminMenu />
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: '/auth/signin' })}
          >
            <LogOutIcon /> 退出登录
          </Button>
        </div>
      </aside>
    </ViewTransition>
  )
}

export default function AdminSideBar({
  expand,
  setExpand,
}: {
  expand: boolean
  setExpand: (x: boolean) => void
}) {
  const expandButtonRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setExpand(expand)
  }, [expand, setExpand])
  useReversedTheme(expandButtonRef)

  return (
    <div className="relative h-screen">
      {expand ? <SideBar /> : null}
      <ViewTransition enter="expand-toggle" exit="expand-toggle">
        <div
          ref={expandButtonRef}
          className="w-[24px] h-[100px] bg-background absolute right-0 top-1/2 -translate-1/2 translate-x-[calc(90%-1px)] rounded-r-lg"
        >
          <button
            className="text-primary h-full transition-transform"
            onClick={() => startTransition(() => setExpand(!expand))}
          >
            {expand ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
      </ViewTransition>
    </div>
  )
}
