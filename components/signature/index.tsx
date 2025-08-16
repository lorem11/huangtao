'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Signature() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const img =
    resolvedTheme === 'light' ? (
      <>
        <Image
          src="/signature-zh-light.gif"
          width={1024 / 3}
          height={250 / 3}
          alt="#"
          unoptimized
        />
        <Image
          src="/signature-en-light.gif"
          width={1024 / 3}
          height={250 / 3}
          alt="#"
          unoptimized
        />
      </>
    ) : (
      <>
        <Image
          src="/signature-zh-dark.gif"
          width={1024 / 3}
          height={1024 / 3}
          alt="#"
          unoptimized
        />
        <Image
          src="/signature-en-dark.gif"
          width={1024 / 3}
          height={1024 / 3}
          alt="#"
          unoptimized
        />
      </>
    )

  return (
    <div className="flex justify-between mt-5 items-center flex-col sm:flex-row">
      {img}
    </div>
  )
}
