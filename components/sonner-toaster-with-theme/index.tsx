'use client'

import { Toaster as SonnerToaster, type ToasterProps } from 'sonner'
import { useTheme } from 'next-themes'

export default function ToasterWithTheme() {
  const { resolvedTheme } = useTheme()

  return (
    <SonnerToaster
      position="top-center"
      richColors
      theme={resolvedTheme as ToasterProps['theme']}
    />
  )
}
