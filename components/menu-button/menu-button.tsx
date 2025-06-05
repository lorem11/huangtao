import { SquareMenu } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'

export default function MenuButton() {
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
                <Button variant="outline" className="w-full">
                  <Link href="/">首页</Link>
                </Button>
              </DrawerClose>
            </li>
            <li className="mb-4">
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  <Link href="/blogs">博客</Link>
                </Button>
              </DrawerClose>
            </li>
            <li className="mb-4">
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  <Link href="/projects">项目</Link>
                </Button>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  <Link href="/about">关于</Link>
                </Button>
              </DrawerClose>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
