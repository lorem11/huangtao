'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { UTApi } from 'uploadthing/server'
import { CreateBlogForm, UpdateBlogForm } from './types'

const utapi = new UTApi({ token: process.env.UPLOADTHING_TOKEN })

export async function uploadImage(formData: FormData) {
  const file = formData.get('file') as File
  const resp = await utapi.uploadFiles(file)

  if (!resp.data) {
    return { error: resp.error }
  }
  return { url: resp.data.ufsUrl }
}

export async function togglePublishedBySlug(slug: string, published: boolean) {
  await prisma.post.update({ data: { published }, where: { slug } })
  revalidatePath('/blogs')
  revalidatePath('/admin/blogs/all')
}

export async function deleteBySlug(slug: string) {
  await prisma.post.delete({
    where: {
      slug,
    },
  })
  revalidatePath('/blogs')
  revalidatePath('/admin/blogs/all')
}

export async function getBlog4Editing(slug: string) {
  const blog = await prisma.post.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      title: true,
      desc: true,
      slug: true,
      content: true,
      tags: {
        select: {
          id: true,
        },
      },
    },
  })

  if (!blog) {
    throw new Error('文章不存在')
  }

  const { tags, ...data } = blog
  const res: UpdateBlogForm = {
    ...data,
    tags: tags.map((x) => x.id),
  }

  return res
}

export async function getAllBlogs4Table() {
  return await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      tags: {
        select: {
          name: true,
          icon: true,
          iconDark: true,
        },
      },
      createdAt: true,
      updatedAt: true,
      published: true,
    },
  })
}

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

export async function getAllSlug() {
  const slugs = await prisma.post.findMany({
    select: {
      slug: true,
    },
  })

  return slugs
}

export async function getBlogBySlug(slug: string) {
  const blog = await prisma.post.findUnique({
    where: {
      slug,
    },
    select: {
      title: true,
      content: true,
      updatedAt: true,
    },
  })

  if (!blog) {
    return { err: 'NOT_FOUND' }
  }

  return { blog }
}

export async function createBlog(params: CreateBlogForm) {
  const { tags, ...data } = params
  await prisma.post.create({
    data: {
      ...data,
      tags: { connect: tags!.map((id) => ({ id })) },
    },
  })
  return '提交成功'
}

export async function updateBlog(params: UpdateBlogForm) {
  const { id, ...data } = params
  const { tags, ...other } = data
  await prisma.post.update({
    data: {
      ...other,
      tags: {
        connect: tags.map((x) => ({ id: x })),
      },
    },
    where: {
      id,
    },
  })
}
