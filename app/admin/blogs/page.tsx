import CreateOrUpdateBlogForm from '@/components/admin-blogs-page/create-or-update-blog-form'
import { getAllTags } from '@/components/admin-tags-page/actions'

export default async function Page() {
  const tags = await getAllTags()

  return (
    <div className="grid gap-5">
      <h1>创建文章</h1>
      <CreateOrUpdateBlogForm tags={tags} />
    </div>
  )
}
