'use client'

import { cn } from '@/lib/utils'
import {
  ChartAreaIcon,
  HammerIcon,
  NotebookPenIcon,
  TagIcon,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menu = [
  {
    label: '仪表盘',
    href: '/admin/dashboard',
    icon: <ChartAreaIcon />,
  },
  {
    label: '博客',
    href: '/admin/blogs',
    icon: <NotebookPenIcon />,
  },
  {
    label: '标签',
    href: '/admin/tags',
    icon: <TagIcon />,
  },
  {
    label: '项目',
    href: '/',
    icon: <HammerIcon />,
  },
]

export default function AdminMenu() {
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        {menu.map((m) => (
          <Link href={m.href} key={m.label}>
            <div
              className={cn(
                'flex items-center justify-between text-xl font-bold mt-4 hover:bg-accent py-2 px-8 cursor-pointer rounded-2xl',
                pathname === m.href && 'bg-accent'
              )}
            >
              <div className="bg-accent p-2 rounded-md">{m.icon}</div>
              <div className="w-[150px] text-center">
                <span className="ml-4">{m.label}</span>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
