import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return <div className="w-[100vw] h-screen relative">{children}</div>
}
