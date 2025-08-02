'use client'

import { cn } from '@/lib/utils'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

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
          'w-5 h-5 rounded-[10px] absolute top-1/2 -translate-y-1/2 transition-transform',
          resolvedTheme === 'light'
            ? 'translate-x-[2px]'
            : 'translate-x-[27px]',
          resolvedTheme === 'light' ? 'bg-slate-200' : 'bg-slate-700'
        )}
      >
        {resolvedTheme === 'light' ? (
          <SunIcon className="w-3 h-3 absolute top-1/2 left-1/2 -translate-1/2" />
        ) : (
          <MoonIcon className="w-3 h-3 absolute top-1/2 left-1/2 -translate-1/2" />
        )}
      </div>
    </div>
  )
}
