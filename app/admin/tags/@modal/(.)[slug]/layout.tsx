import { Dialog } from '@/components/ui/dialog'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Dialog defaultOpen open>
      {children}
    </Dialog>
  )
}
