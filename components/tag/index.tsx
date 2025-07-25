'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Tag({
  name,
  icon,
  iconDark,
}: {
  name: string
  icon?: string
  iconDark?: string
}) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex gap-2 items-center w-fit border p-1 rounded-[20px] bg-accent">
      # {name}{' '}
      {icon && resolvedTheme === 'light' && (
        <Image src={icon} width={24} height={24} alt="" unoptimized />
      )}{' '}
      {iconDark && resolvedTheme === 'dark' && (
        <Image src={iconDark} width={24} height={24} alt="" unoptimized />
      )}
    </div>
  )
}
