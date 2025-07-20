import { ThemeProvider } from '@/components/provider'
import ToasterWithTheme from '@/components/sonner-toaster-with-theme'
import '@/styles/global.css'
import '@/styles/animation.css'
import '@/styles/theme.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'huangtao',
  description: '黄涛(huangtao) 的个人博客',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ToasterWithTheme />
        </ThemeProvider>
      </body>
    </html>
  )
}
