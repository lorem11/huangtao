import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于黄涛',
  description: '关于黄涛',
}

export default function Page() {
  return (
    <>
      <h1 className="border-b pb-2 text-2xl font-bold">关于</h1>
    </>
  )
}
