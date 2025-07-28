'use client'

import CreateOrUpdateBlogForm from '@/components/admin-blogs-page/create-or-update-blog-form'

export default function Page() {
  return (
    <div className="grid gap-5">
      <h1>创建文章</h1>
      <CreateOrUpdateBlogForm />
    </div>
  )
}
