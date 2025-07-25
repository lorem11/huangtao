import AdminSideBar from '@/components/admin-side-bar'
import BreadCrumb from '@/components/breadcrumb'
import ThemeSwitch from '@/components/liaght-dark-mode-switch'
import SessionProvider from '@/components/provider/session-provider'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }
  return (
    <SessionProvider session={session}>
      <div className="flex h-screen">
        <div>
          <AdminSideBar />
        </div>
        <div className="h-screen flex flex-col p-8 pb-0 w-[100%]">
          <div className="h-[60px] flex items-center border-b justify-between">
            <BreadCrumb />
            <ThemeSwitch />
          </div>
          <main className="overflow-scroll h-[calc(100vh-60px)] mt-4 pr-2">
            {children}
          </main>
        </div>
      </div>
    </SessionProvider>
  )
}
