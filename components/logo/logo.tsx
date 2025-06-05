'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Logo() {
  const { resolvedTheme } = useTheme()
  const [img, setImg] = useState(<></>)

  useEffect(() => {
    const _img =
      resolvedTheme === 'light' ? (
        <Image src="/signature.png" alt="logo" width={164} height={40} />
      ) : (
        <Image src="/signature-dark.png" alt="logo" width={164} height={40} />
      )

    setImg(_img)
  }, [resolvedTheme])

  return <Link href="/">{img}</Link>
}
