'use server'

import prisma from '@/lib/prisma'
import { CreateBlogForm } from './types'

export async function createBlog(params: CreateBlogForm) {
  const { tags, ...data } = params
  await prisma.post.create({
    data: {
      ...data,
      tags: { connect: tags!.map((id) => ({ id })) },
    },
  })
  console.log(params)
  return '提交成功'
}
