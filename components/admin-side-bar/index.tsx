'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'
import AdminMenu from '../admin-menu'
import Logo from '../logo'
import { Button } from '../ui/button'
import { LogOutIcon } from 'lucide-react'

export default function SideBar() {
  const { resolvedTheme } = useTheme()
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    console.log(resolvedTheme)
    if (ref.current) {
      const classList = ref.current.classList
      if (resolvedTheme === 'light') {
        classList.add('dark')
      }

      if (resolvedTheme === 'dark') {
        classList.add('light')
      }

      return () => {
        classList.remove('dark', 'light')
      }
    }
  }, [resolvedTheme])

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
