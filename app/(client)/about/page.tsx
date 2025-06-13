import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于 huangtao',
  description: '这是 huangtao 的博客，关于我的个人信息和这个站点',
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <section>
          <h1 className="pb-2 text-2xl font-bold">关于 huangtao</h1>
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={['item-1']}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>关于我？</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p>
                  我是<strong>黄涛</strong>，2024 年本科毕业于
                  <strong>大连海事大学</strong>
                  ，目前前端在职，想从事<strong>React，Next.js</strong>
                  相关的工作。
                </p>
                <p>
                  说说我的经历，在学校的时候，我想做后台开发，所以一开始我学习的是
                  Java
                  那一套技术栈。但是毕业后对前端产生了浓厚的兴趣，最后也从事了前端的工作。
                  到目前为止应该有一年左右的工作经验了。公司用的技术栈是
                  Vue3，但是我更加喜欢 React， JSX 就是原生的 JavaScript，我觉得
                  JSX 写起来更灵活。一开始接触 React 是想透过 React 来熟悉 Vue3
                  的组合式函数写法，从此就喜欢上了 React。
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>为什么对前端这么感兴趣？</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p>
                  我感觉我天生就是做前端的，一直对于交互，UI，颜色这些东西比较敏感，同时我也喜欢写代码，因此做前端应该是最适合我的。
                  前端技术本身也是非常有趣的，前端社区是程序员中最具活力的社区。前端的开发体验很不错，基本上能做到所见即所得，
                  脑袋中的想法只需几行代码就能得到想要的效果。
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>如何联系我？</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </>
  )
}
