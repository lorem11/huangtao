import LogoCarousel from '@/components/ui/logo-carousel'
import { Typewriter } from '@/components/ui/typewriter'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start border-b pb-4">
        <div className="flex-2/3">
          <h1 className="scroll-m-20 text-4xl text-center sm:text-start font-extrabold tracking-tight text-balance">
            你们好，我是 <span className="text-sky-400">huangtao</span>
          </h1>
          <h1 className="scroll-m-20 text-4xl text-center sm:text-start font-extrabold tracking-tight text-balance mt-5">
            <Typewriter
              texts={['一个前端开发工程师', 'A Web <Developer />']}
              delay={0}
            />
          </h1>
          <h4 className="scroll-m-20 text-xl text-center sm:text-start font-semibold tracking-tight mt-5">
            欢迎来到我的 blog
          </h4>
        </div>

        <div className="flex-1/3">
          <h4 className="scroll-m-20 text-xl tracking-tight mb-4">
            <div className="flex">
              我喜欢
              <Link href="https://react.dev">
                <div className="flex text-[#5CBBD3] ml-4 font-bold mr-2 border-primary">
                  React <MoveUpRight className="inline" />
                </div>
              </Link>
              和
              <Link href="https://nextjs.org/">
                <div className="flex ml-4 font-bold border-primary">
                  Next.js <MoveUpRight className="inline" />
                </div>
              </Link>
            </div>
            <div className="mt-4 flex justify-center">
              <LogoCarousel />
            </div>
          </h4>
        </div>
      </div>
    </>
  )
}
