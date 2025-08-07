'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, Fragment } from 'react'

const segmap: { [x: string]: { label: string; path: string } } = {
  admin: {
    label: '管理后台',
    path: '/admin',
  },
  dashboard: {
    label: '仪表盘',
    path: '/admin/dashboard',
  },
  blogs: {
    label: '博客管理',
    path: '/admin/blogs',
  },
  all: {
    label: '所有文章',
    path: '/admin/blogs/all',
  },
  tags: {
    label: '标签管理',
    path: '/admin/tags',
  },
}

export default function BreadCrumb() {
  const [segs, setSegs] = useState<string[]>([])
  const pathname = usePathname()
  useEffect(() => {
    const segs = pathname.slice(1).split('/')
    setSegs(segs)
  }, [pathname])

  const breadcrumbs = segs.slice(0, segs.length - 1)
  const current = segs[segs.length - 1]

  return (
    <div className="py-4">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((seg) => (
            <Fragment key={seg}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={segmap[seg].path}>{segmap[seg].label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{segmap[current]?.label}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
