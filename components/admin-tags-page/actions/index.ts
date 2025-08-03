'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { CreateTagForm, UpdateTagForm } from '../types'

export async function getAllTags() {
  return await prisma.tag.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export async function getBySlug(slug: string) {
  return await prisma.tag.findUnique({
    where: {
      slug,
    },
  })
}

export async function deleteBySlug(slug: string) {
  await prisma.tag.delete({
    where: {
      slug,
    },
  })
  revalidatePath('/admin/tags')
}

export async function createTag(data: CreateTagForm) {
  await prisma.tag.create({ data })

  revalidatePath('/admin/tags')
}

export async function updateTag(params: UpdateTagForm) {
  const { id, ...data } = params

  const tag = await prisma.tag.update({
    data,
    where: {
      id,
    },
  })

  if (!tag) {
    throw new Error('标签不存在')
  }

  revalidatePath('/admin/tags')
}
