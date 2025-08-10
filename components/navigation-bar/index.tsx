'use client'

import Link from 'next/link'
import GitHubButton from '../github-button/github-button'
import Logo from '../logo'
import ModeToggle from '../mode-toggle'
import MenuButton from '../menu-button'
import GoAdminButton from '../go-admin-button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const navs = [
  {
    href: '/',
    label: '首页',
  },
  {
    href: '/blogs',
    label: '博客',
  },
  {
    href: '/projects',
    label: '项目',
  },
  {
    href: '/about',
    label: '关于',
  },
]

export default function NavigationBar() {
  const path = usePathname()

  return (
    <header className="w-full sticky top-0 backdrop-blur transition-all border-x-0  flex flex-row-reverse sm:flex-row justify-between sm:justify-center z-10 items-center border-b py-4">
      <div className="sm:mr-[auto]">
        <Logo width={1024 / 6} height={250 / 6} />
      </div>

      <ul className="hidden gap-x-8 text-lg sm:flex">
        {navs.map((nav) => (
          <li key={nav.href}>
            <Link
              className={cn(
                path === nav.href && 'text-slate-500 font-semibold',
                'hover:text-slate-500 hover:font-semibold'
              )}
              href={nav.href}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:ml-[auto] sm:mr-16 ml-4 gap-2 flex">
        <div className="sm:hidden">
          <MenuButton />
        </div>
        <ModeToggle />
        <GitHubButton />
        <GoAdminButton />
      </div>
    </header>
  )
}
