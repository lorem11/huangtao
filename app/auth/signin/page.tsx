'use client'

import ThemeSwitch from '@/components/liaght-dark-mode-switch'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="w-[400px] h-[300px] absolute top-1/2 left-1/2 -translate-1/2 rounded-lg p-4 grid gap-5 border">
      <div className="flex items-center justify-between">
        <h1>登录</h1>
        <ThemeSwitch />
      </div>
      <Button
        variant="outline"
        onClick={() => signIn('github', { callbackUrl: '/admin' })}
      >
        <Image src="/github.svg" width={20} height={20} alt="github" /> 通过
        Github 登录
      </Button>
      <Button
        variant="outline"
        onClick={() => signIn('google', { callbackUrl: '/admin' })}
      >
        <Image src="/google.svg" width={20} height={20} alt="google" /> 通过
        Google 登录
      </Button>
    </div>
  )
}
