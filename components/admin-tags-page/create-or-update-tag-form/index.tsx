'use client'

import { UploadButton } from '@/components/uploadthing'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import LoadingButton from '@/components/loading-button'
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
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useTransition } from 'react'
import { createTag } from '../actions'

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

export type TagForm = z.infer<typeof formSchema>

export default function CreateOrUpdateTagForm({
  initialValue,
}: {
  initialValue?: TagForm
}) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const form = useForm<TagForm>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValue ?? {
      name: '',
      slug: '',
      icon: '',
      iconDark: '',
    },
  })

  const isUpdate = !!initialValue

  function onSubmit(data: TagForm) {
    startTransition(async () => {
      await createTag(data)
    })
  }

  return (
    <>
      {!isUpdate && <h1>添加标签</h1>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex w-full gap-5">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">
                      标签名称<span className="text-red-500 font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Next.js"
                        {...field}
                        {...form.register('name')}
                        required
                        aria-required
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
                    <FormLabel htmlFor="slug">
                      slug<span className="text-red-500 font-bold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="slug"
                        placeholder="next-js"
                        {...field}
                        {...form.register('slug')}
                        required
                        aria-required
                      />
                    </FormControl>
                    <FormDescription className="text-primary">
                      slug 应为 &ldquo;kebab-case&ldquo;
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
                          className="focus-visible:ring-0 cursor-not-allowed"
                          readOnly
                          aria-readonly
                          {...field}
                        />
                      </FormControl>
                      <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          form.setValue('icon', res[0].ufsUrl)
                          toast.success('上传成功')
                        }}
                        onUploadError={() => {
                          // Do something with the error.
                          toast.success('上传失败')
                        }}
                      />
                    </div>
                    <FormDescription className="text-primary">
                      点击右侧按钮上传，icon 建议使用 svg 格式
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
                          className="focus-visible:ring-0 cursor-not-allowed"
                          readOnly
                          aria-readonly
                          {...field}
                        />
                      </FormControl>
                      <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          // Do something with the response
                          form.setValue('iconDark', res[0].ufsUrl)
                          toast.success('上传成功')
                        }}
                        onUploadError={() => {
                          // Do something with the error.
                          toast.success('上传失败')
                        }}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            </div>
          </div>
          <LoadingButton
            className="mt-5 border"
            type="submit"
            pending={pending}
          >
            {isUpdate ? '确认修改' : '添加标签'}
          </LoadingButton>
          {isUpdate && (
            <Button
              className="mt-5 ml-5 border"
              type="button"
              onClick={() => router.back()}
            >
              取消
            </Button>
          )}
        </form>
      </Form>
    </>
  )
}
