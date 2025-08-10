import Image from 'next/image'
import Link from 'next/link'
import Logo from '../logo'

export default function Footer() {
  return (
    <div className="w-full p-5 bg-accent rounded-t-xl">
      <div className="sm:w-1/2 w-full flex mx-auto justify-evenly">
        <ul className="[&>li]:flex [&>li]:justify-start [&>li]:gap-3 [&>li]:mt-2">
          <li className="font-bold">
            &copy;&nbsp;huangtao&nbsp;2025&nbsp;All rights reserved
          </li>
          <li>
            项目部署并托管在{' '}
            <Image src="/vercel.svg" width={20} height={20} alt="" />{' '}
            <Link href="https://vercel.com" className="underline">
              @vercel
            </Link>
          </li>
          <li>
            数据库使用 BaaS 服务
            <Image src="/prisma.svg" width={60} height={20} alt="" />{' '}
            <Link href="https://prisma.io" className="underline">
              @prisma
            </Link>
          </li>
        </ul>
        <div className="w-[1px] border-l hidden sm:block"></div>
        <div className="-ml-[100px] hidden sm:block">
          <Logo width={1024 / 3} height={250 / 3} />
        </div>
      </div>
    </div>
  )
}
