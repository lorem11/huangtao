import ASCIIArt from '@/components/ascii-art/ascii-art'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-col gap-4 items-center">
        <Image
          src="/404-illustration.svg"
          width={2000 / 4}
          height={1333 / 4}
          alt="404 NOT FOUND"
        />

        <ASCIIArt />

        <div className="text-center">您访问的资源不存在~</div>
        <div className="text-center">
          <Link href="/">
            <Button>回到首页</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
