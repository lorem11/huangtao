import { SquareMenu } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer'
import Link from 'next/link'

export default function MenuButton() {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <SquareMenu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DrawerTrigger>
      <DrawerContent aria-describedby="导航菜单">
        <div className="p-4">
          <DrawerTitle className="mb-4">菜单</DrawerTitle>

          <ul>
            <li className="mb-4">
              <DrawerClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full">
                    首页
                  </Button>
                </Link>
              </DrawerClose>
            </li>
            <li className="mb-4">
              <DrawerClose asChild>
                <Link href="/blogs">
                  <Button variant="outline" className="w-full">
                    博客
                  </Button>
                </Link>
              </DrawerClose>
            </li>
            <li className="mb-4">
              <DrawerClose asChild>
                <Link href="/projects">
                  <Button variant="outline" className="w-full">
                    项目
                  </Button>
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link href="/about">
                  <Button variant="outline" className="w-full">
                    关于
                  </Button>
                </Link>
              </DrawerClose>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
