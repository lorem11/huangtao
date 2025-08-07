import z from 'zod'
import { getAllBlogItem, getAllBlogs4Table, getBlogBySlug } from './actions'

z.config(z.locales.zhCN())
export const createBlogSchema = z.object({
  title: z.string().min(1, { error: '标题最少输入一个字符' }),
  desc: z.string().min(1, { error: '描述最少输入一个字符' }),
  content: z.string().min(100, { error: '文章最少要 100 字' }),
  tags: z.string().array().min(1, { error: '至少要包含一个标签' }),
  slug: z
    .string()
    .max(30, { error: '最长不得超过15个字符' })
    .regex(/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/, {
      error: 'slug 只能为" kebab-case "模式！',
    }),
  cover: z.url({ protocol: /^https|http$/ }).optional(),
  published: z.boolean().optional(),
})
export const updateBlogFormSchema = createBlogSchema.extend({ id: z.string() })

export type CreateBlogForm = z.infer<typeof createBlogSchema>
export type UpdateBlogForm = z.infer<typeof updateBlogFormSchema>
export type BlogItemVO = Awaited<ReturnType<typeof getAllBlogItem>>[number]
export type BlogVO = Exclude<
  Awaited<ReturnType<typeof getBlogBySlug>>,
  {
    err: string
    blog?: undefined
  }
>['blog']
export type BlogTableVO = Awaited<ReturnType<typeof getAllBlogs4Table>>[number]
