import GitHubButton from '@/components/github-button/github-button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import WXButton from '@/components/wx-button/wx-button'
import { MailIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '关于 huangtao',
  description: '这是 huangtao 的博客，关于我的个人信息和这个站点',
}

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-2">关于 huangtao</h1>
      <div className="h-[calc(80vh-60px)] flex">
        <section className="my-auto w-full border p-4 rounded-xl text-lg">
          <Accordion type="single" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h3>关于我？</h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p>
                  我是<strong>黄涛</strong>，2024 年本科毕业 ，目前
                  <strong>前端在职</strong>，现在正在寻找新的
                  <strong>React 或者 Next.js</strong>
                  相关的工作。这里是我的
                  <strong>
                    <Link href="#">在线简历。</Link>
                  </strong>
                </p>
                <p>
                  说说我的经历，在学校的时候，我想做后台开发，所以一开始我学习的是
                  Java
                  那一套技术栈。毕业后对前端产生了浓厚的兴趣，最后从事了前端开发的工作。
                  到目前为止有一年左右的工作经验了。公司用的技术栈是
                  <strong>Vue3</strong>，但是我更加喜欢 React， JSX就是原生的
                  JavaScript，我觉得JSX写起来更灵活。一开始接触React是想透过React来熟悉Vue3的组合式函数写法，但是我发现我自己比较偏爱React。
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h3>为什么喜欢前端？</h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p>
                  我一直对于交互，UI，颜色这些东西比较敏感，同时我也喜欢写代码，因此做前端是最适合我的。
                  前端技术本身也是非常有趣的，前端社区的开发者们是程序员群体中最具活力的一批人，他们造就了如今前端生态圈的大繁荣。前端的开发体验很不错，基本上能做到所见即所得，
                  脑袋中的想法只需几行代码就能得到想要的效果。
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h3>关于这个站点？</h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p>
                  此项目是基于 <strong>Next.js</strong> 构建的全栈{' '}
                  <strong>Web App</strong>
                  。这是一个<strong>个人博客网站</strong>
                  ，我将在此发布文章，主要内容为前端技术。
                </p>
                <p>
                  界面设计参考了{' '}
                  <strong>
                    <Link href="https://fuxiaochen.com" target="_blank">
                      fuxiaochen.com
                    </Link>{' '}
                  </strong>
                  如有侵权，请联系我
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h3>如何联系我？</h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p>你可以通过以下任意一种方式联系我</p>
                <div className="flex gap-4 p-1">
                  <Link href="mailto:1758042125@qq.com">
                    <Button variant="outline" size="icon">
                      <MailIcon />
                    </Button>
                  </Link>
                  <WXButton />
                  <GitHubButton />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </>
  )
}
