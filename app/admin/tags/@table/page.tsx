import { getAllTags } from '@/components/admin-tags-page/actions'
import TagsTable from '@/components/admin-tags-page/tags-table'

export default async function page() {
  const tags = await getAllTags()

  return <TagsTable data={tags} />
}
