'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Tag({
  name,
  icon,
}: {
  name: string
  icon?: string
  iconDark?: string
}) {
  const { resolvedTheme } = useTheme()

  return (
    <div className="flex gap-2 items-center w-fit border">
      # {name} {icon && <Image src={icon} width={15} height={15} alt="" />}
    </div>
  )
}
