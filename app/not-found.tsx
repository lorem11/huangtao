import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <div className="flex flex-col gap-4">
        <Image
          src="/404-illustration.svg"
          width={2000 / 4}
          height={1333 / 4}
          alt="404 NOT FOUND"
        />
        <div className="text-center">
          <strong>您访问的资源不存在~</strong>
        </div>
        <div className="text-center">
          <Button>
            <Link href="/">回到首页</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
