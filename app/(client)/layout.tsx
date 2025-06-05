import NavigationBar from '@/components/navigation-bar/navigation-bar'
import React from 'react'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <main>{children}</main>
    </div>
  )
}
