import { getAllBlogs4Table } from '@/components/admin-blogs-page/actions'
import BlogsTable from '@/components/admin-blogs-page/blogs-table'

export default async function Page() {
  const blogs = await getAllBlogs4Table()
  console.log(blogs)

  return (
    <div className="grid gap-5">
      <h1>所有文章</h1>
      <BlogsTable data={blogs} />
    </div>
  )
}
