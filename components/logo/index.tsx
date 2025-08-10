'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'

export default function Logo({
  reverse,
  width,
  height,
}: {
  reverse?: boolean
  width: number
  height: number
}) {
  const { resolvedTheme } = useTheme()
  const [img, setImg] = useState(<></>)

  useLayoutEffect(() => {
    let img = null
    if (reverse) {
      img =
        resolvedTheme === 'light' ? (
          <Image
            src="/signature-en-dark.gif"
            alt="logo"
            width={width}
            height={height}
          />
        ) : (
          <Image
            src="/signature-en-light.gif"
            alt="logo"
            width={width}
            height={height}
          />
        )
    } else {
      img =
        resolvedTheme === 'light' ? (
          <Image
            src="/signature-en-light.gif"
            alt="logo"
            width={width}
            height={height}
          />
        ) : (
          <Image
            src="/signature-en-dark.gif"
            alt="logo"
            width={width}
            height={height}
          />
        )
    }
    setImg(img)
  }, [resolvedTheme, reverse, width, height])

  return <Link href="/">{img}</Link>
}
