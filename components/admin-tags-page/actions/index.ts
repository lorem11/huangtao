'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { TagForm } from '../create-or-update-tag-form'

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

export async function deleteById(id: string) {
  await prisma.tag.delete({
    where: {
      id,
    },
  })
  revalidatePath('/admin/tags')
}

export async function createTag(data: TagForm) {
  await prisma.tag.create({ data })

  revalidatePath('/admin/tags')
}
