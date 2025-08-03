import { getAllBlogItem } from '@/components/admin-blogs-page/actions'
import BlogListItem from '@/components/blog-list-item'

export default async function Page() {
  const items = await getAllBlogItem()

  return (
    <>
      <h1>所有文章</h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </>
  )
}
