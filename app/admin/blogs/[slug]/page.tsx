import { getBlog4Editing } from '@/components/admin-blogs-page/actions'
import CreateOrUpdateBlogForm from '@/components/admin-blogs-page/create-or-update-blog-form'
import { getAllTags } from '@/components/admin-tags-page/actions'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tags = await getAllTags()
  const blog = await getBlog4Editing(slug)

  return (
    <>
      <h1 className="mb-5">编辑文章</h1>
      <CreateOrUpdateBlogForm
        tags={tags}
        initialValue={{
          ...blog,
        }}
      />
    </>
  )
}
