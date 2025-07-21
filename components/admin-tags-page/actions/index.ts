'use server'

import prisma from '@/lib/prisma'

export async function getAllTags() {
  return await prisma.tag.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}
