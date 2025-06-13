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
            你们好，我是 <span className="text-slate-400">huangtao</span>
          </h1>
          <h1 className="scroll-m-20 text-4xl text-center sm:text-start font-extrabold tracking-tight text-balance mt-5">
            <Typewriter
              texts={['一个前端开发工程师', 'A Web <Developer />']}
              delay={0}
            />
          </h1>
          <h4 className="scroll-m-20 text-xl text-center sm:text-start font-semibold tracking-tight mt-5">
            欢迎来到我的 Blog
          </h4>
        </div>

        <div className="flex-1/3">
          <h4 className="scroll-m-20 text-xl tracking-tight mb-4">
            我喜欢
            <Link href="https://react.dev">
              <span className="text-[#5CBBD3] ml-4 font-bold mr-2 hover:border-b border-primary hover:scale-125">
                React <MoveUpRight className="inline" />
              </span>
            </Link>
            和
            <span className="ml-4 font-bold hover:border-b border-primary hover:scale-125">
              Next.js <MoveUpRight className="inline" />
            </span>
            <div className="mt-4 flex justify-center">
              <LogoCarousel />
            </div>
          </h4>
        </div>
      </div>
    </>
  )
}
