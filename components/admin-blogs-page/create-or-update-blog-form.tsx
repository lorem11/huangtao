'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { TagVO } from '../admin-tags-page/types'
import LoadingButton from '../loading-button'
import Tag from '../tag'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { MutipleSelector } from '../ui/multiple-selector'
import { Switch } from '../ui/switch'
import { UploadButton } from '../uploadthing'
import { createBlog, updateBlog } from './actions'
import MyEditor from './my-editor'
import { CreateBlogForm, createBlogSchema, UpdateBlogForm } from './types'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function CreateOrUpdateBlogForm({
  initialValue,
  tags,
}: {
  initialValue?: UpdateBlogForm
  tags: TagVO[]
}) {
  const router = useRouter()
  const isUpdate = !!initialValue
  const ref = useRef<HTMLFormElement>(null)
  const [isPending, startTransition] = useTransition()
  const form = useForm<CreateBlogForm>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: initialValue ?? {
      title: '',
      desc: '',
      slug: '',
      content: '',
      tags: [],
      published: false,
    },
  })

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit((data) =>
          startTransition(async () => {
            const p = isUpdate
              ? updateBlog({ id: initialValue.id, ...data })
              : createBlog(data)
            await p
            toast.success(isUpdate ? '更新成功' : '创建成功')

            // eslint-disable-next-line
            isUpdate ? router.back() : form.reset()
          })
        )}
        ref={ref}
      >
        <div className="grid gap-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="title">
                  文章标题<span className="text-red-500 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    id="title"
                    placeholder="例如：Next.js 快速入门"
                    {...field}
                    {...form.register('title')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="title">
                  描述<span className="text-red-500 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    id="title"
                    placeholder="本文主要说明了..."
                    {...field}
                    {...form.register('desc')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

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
                    placeholder="例如：nextjs-tutorial"
                    {...field}
                    {...form.register('slug')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>
                    标签<span className="text-red-500 font-bold">*</span>
                  </FormLabel>
                  <FormControl>
                    <MutipleSelector
                      options={tags}
                      optionRenderer={(option, key) => {
                        return (
                          <Tag
                            key={key}
                            name={option.name}
                            icon={option.icon}
                            iconDark={option.iconDark}
                          />
                        )
                      }}
                      values={field.value!}
                      onChange={field.onChange}
                      valueGetter={(x) => x.id}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          ></FormField>

          <div className="flex w-full gap-10">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="cover"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="cover">文章封面</FormLabel>
                    <div className="flex gap-5">
                      <FormControl>
                        <Input
                          id="cover"
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
                          form.setValue('cover', res[0].ufsUrl)
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

            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>是否发布</FormLabel>
                  <div className="flex gap-5">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>

          <div className="flex items-center">
            <LoadingButton
              className="mt-5 border w-fit"
              type="submit"
              pending={isPending}
              {...(isUpdate && { disabled: form.formState.isDirty })}
            >
              {isUpdate ? '确认修改' : '创建文章'}
            </LoadingButton>

            <Button className="ml-5 mt-5" variant="link" asChild>
              <Link href="/admin/blogs/all">所有文章</Link>
            </Button>
          </div>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  文章内容<span className="text-red-500 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <MyEditor value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
      </form>
    </Form>
  )
}
