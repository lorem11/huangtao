import AdminLayout from '@/components/admin/layout'
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
      <AdminLayout>{children}</AdminLayout>
    </SessionProvider>
  )
}
