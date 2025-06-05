import NavigationBar from '@/components/navigation-bar/navigation-bar'
import React from 'react'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <main className="w-full p-6 lg:w-5xl lg:mx-auto lg:p-0 lg:pt-4 min-h-lvh">
        {children}
      </main>
    </div>
  )
}
