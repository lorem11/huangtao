'use client'

import { SquareMenu } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import { useRouter } from 'next/navigation'

export default function MenuButton() {
  const router = useRouter()

  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <SquareMenu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <DrawerTitle className="mb-4">菜单</DrawerTitle>

          <ul>
            <li className="mb-4">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    router.replace('/')
                  }}
                >
                  首页
                </Button>
              </DrawerClose>
            </li>
            <li className="mb-4">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    router.replace('/blogs')
                  }}
                >
                  博客
                </Button>
              </DrawerClose>
            </li>
            <li className="mb-4">
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    router.replace('/projects')
                  }}
                >
                  项目
                </Button>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    router.replace('/about')
                  }}
                >
                  关于
                </Button>
              </DrawerClose>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
