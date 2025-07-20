'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'

z.config(z.locales.zhCN())
const formSchema = z.object({
  name: z.string().min(1, { error: 'name 不能为空' }),
  slug: z
    .string()
    .max(15, { error: '最长不得超过15个字符' })
    .regex(/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/, {
      error: 'slug 只能为" kebab-case "模式！',
    }),
  icon: z.url({ protocol: /^https|http$/ }).optional(),
  iconDark: z.url({ protocol: /^https|http$/ }).optional(),
})

type tagType = z.infer<typeof formSchema>

export default function CreateTagForm() {
  const form = useForm<tagType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
    },
  })

  function onSubmit(values: tagType) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full gap-5">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>标签名称</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Next.js"
                      {...field}
                      {...form.register('name')}
                    />
                  </FormControl>
                  <FormDescription className="text-primary">
                    填写标签名称如 Next.js, 标签将展示为 #Next.js
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>slug</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="next-js"
                      {...field}
                      {...form.register('slug')}
                    />
                  </FormControl>
                  <FormDescription className="text-primary">
                    slug 应为 "kebab-case"
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
        </div>
        <div className="flex w-full gap-5 mt-5">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>亮色主题图标</FormLabel>
                  <div className="flex gap-5">
                    <FormControl>
                      <Input
                        placeholder="eg. https://oss.aliyun.com/dasfasdfas"
                        {...field}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="icon"
                      className="bg-slate-400 text-primary-foreground justify-center w-9 rounded-sm"
                    >
                      <PlusIcon />
                    </FormLabel>
                    <Input
                      id="icon"
                      type="file"
                      accept=".svg"
                      className="hidden"
                    />
                  </div>
                  <FormDescription className="text-primary">
                    你可以手动填写 url 链接，或者点击右侧按钮上传，icon 只支持
                    svg 格式
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="flex-1">
            <FormField
              control={form.control}
              name="iconDark"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>暗色主题图标</FormLabel>
                  <div className="flex gap-5">
                    <FormControl>
                      <Input
                        placeholder="eg. https://oss.aliyun.com/dasfasdfas"
                        {...field}
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor="icon-dark"
                      className="bg-slate-400 text-primary-foreground justify-center w-9 rounded-sm"
                    >
                      <PlusIcon />
                    </FormLabel>
                    <Input
                      id="icon-dark"
                      type="file"
                      accept=".svg"
                      className="hidden"
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
        </div>
        <Button className="mt-5 bg-slate-400" type="submit">
          添加标签
        </Button>
      </form>
    </Form>
  )
}
