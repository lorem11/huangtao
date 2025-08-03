'use server'

import prisma from '@/lib/prisma'
import { CreateBlogForm } from './types'

export async function getAllBlogItem() {
  return await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      title: true,
      slug: true,
      cover: true,
      desc: true,
      tags: {
        select: {
          name: true,
          icon: true,
          iconDark: true,
        },
      },
      createdAt: true,
    },
  })
}

export async function createBlog(params: CreateBlogForm) {
  const { tags, ...data } = params
  console.log(tags)
  await prisma.post.create({
    data: {
      ...data,
      tags: { connect: tags!.map((id) => ({ id })) },
    },
  })
  return '提交成功'
}
