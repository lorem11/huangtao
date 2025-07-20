import prisma from '@/lib/prisma'
import TagsTable from '@/components/tags-table'

export default async function page() {
  async function getAllTags() {
    return await prisma.tag.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  const tags = await getAllTags()
  return <TagsTable data={tags} />
}
