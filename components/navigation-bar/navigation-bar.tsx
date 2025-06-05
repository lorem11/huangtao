'use client'

import Link from 'next/link'
import GitHubButton from '../github-button/github-button'
import Logo from '../logo/logo'
import { ModeToggle } from '../mode-toggle/mode-toggle'
import MenuButton from '../menu-button/menu-button'

export default function NavigationBar() {
  return (
    <header className="w-full sticky top-0 backdrop-blur transition-all border-x-0  flex flex-row-reverse sm:flex-row justify-between sm:justify-center z-10 items-center border-b py-2">
      <div className="sm:mr-[auto] sm:ml-16">
        <Logo />
      </div>

      <ul className="hidden gap-x-8 text-sm sm:flex">
        <li>
          <Link
            className="hover:underline hover:underline-offset-4 hover:text-slate-500"
            href="/"
          >
            首页
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline hover:underline-offset-4 hover:text-slate-500"
            href="/blogs"
          >
            博客
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline hover:underline-offset-4 hover:text-slate-500"
            href="/projects"
          >
            项目
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline hover:underline-offset-4 hover:text-slate-500"
            href="/about"
          >
            关于
          </Link>
        </li>
      </ul>

      <div className="sm:ml-[auto] sm:mr-16 ml-4 gap-2 flex">
        <div className="sm:hidden">
          <MenuButton />
        </div>
        <ModeToggle />
        <GitHubButton />
      </div>
    </header>
  )
}
