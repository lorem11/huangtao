import BackToTop from '@/components/back-to-top'
import Footer from '@/components/footer'
import NavigationBar from '@/components/navigation-bar'
import React from 'react'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <main className="w-full p-4 lg:w-5xl lg:mx-auto lg:px-0 min-h-[calc(100vh-70px)] relative">
        {children}
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}
