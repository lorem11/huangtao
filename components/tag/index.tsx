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
  icon: string | null
  iconDark: string | null
}) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [url, setURL] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    if (resolvedTheme === 'light') {
      setURL(icon ?? iconDark)
    }

    if (resolvedTheme === 'dark') {
      setURL(icon ?? iconDark)
    }
  }, [resolvedTheme, icon, iconDark])

  if (!mounted) return null

  return (
    <div className="flex items-center w-fit border px-1 rounded-md bg-accent">
      <span className="leading-tight"># {name}</span>
      {url && (
        <Image
          className="ml-2"
          src={url}
          width={20}
          height={20}
          alt=""
          unoptimized
        />
      )}
    </div>
  )
}
