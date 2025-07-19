'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren, useLayoutEffect, useState } from 'react'

export default function Logo({
  reverse,
}: PropsWithChildren<{ reverse?: boolean }>) {
  const { resolvedTheme } = useTheme()
  const [img, setImg] = useState(<></>)

  useLayoutEffect(() => {
    let img = null
    if (reverse) {
      img =
        resolvedTheme === 'light' ? (
          <Image src="/signature-dark.png" alt="logo" width={164} height={40} />
        ) : (
          <Image src="/signature.png" alt="logo" width={164} height={40} />
        )
    } else {
      img =
        resolvedTheme === 'light' ? (
          <Image src="/signature.png" alt="logo" width={164} height={40} />
        ) : (
          <Image src="/signature-dark.png" alt="logo" width={164} height={40} />
        )
    }
    setImg(img)
  }, [resolvedTheme])

  return <Link href="/">{img}</Link>
}
