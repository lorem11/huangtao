'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Switch } from '../ui/switch'
import { UploadButton } from '../uploadthing'
import MyEditor from './my-editor'
import { CreateBlogForm, createBlogSchema, UpdateBlogForm } from './types'
import LoadingButton from '../loading-button'

export default function CreateOrUpdateBlogForm({
  initialValue,
}: {
  initialValue?: UpdateBlogForm
}) {
  const isUpdate = !!initialValue
  const form = useForm<CreateBlogForm>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: initialValue ?? {
      title: '',
      slug: '',
      content: '',
      tags: [],
      published: false,
    },
  })

  function onSubmit(values: CreateBlogForm) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
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

          <LoadingButton
            className="mt-5 border w-fit"
            type="submit"
            pending={false}
          >
            {isUpdate ? '确认修改' : '创建'}
          </LoadingButton>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>文章内容</FormLabel>
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
