'use client'

import { cn } from '@/lib/utils'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      className={cn(
        'w-12 h-6 rounded-[12px] relative',
        resolvedTheme === 'light' ? 'bg-slate-700' : 'bg-slate-200'
      )}
    >
      <div
        className={cn(
          'w-5 h-5 rounded-[10px] absolute top-[50%] -translate-y-[50%] transition-transform',
          resolvedTheme === 'dark' ? 'translate-x-[24px]' : 'translate-x-[2px]',
          resolvedTheme === 'light' ? 'bg-slate-200' : 'bg-slate-700'
        )}
      >
        {resolvedTheme === 'light' ? (
          <SunIcon className="w-3 h-3 absolute top-[50%] left-[50%] -translate-[50%]" />
        ) : (
          <MoonIcon className="w-3 h-3 absolute top-[50%] left-[50%] -translate-[50%]" />
        )}
      </div>
    </div>
  )
}
