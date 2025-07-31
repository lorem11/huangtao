import { getBySlug } from '@/components/admin-tags-page/actions'
import CreateOrUpdateTagForm from '@/components/admin-tags-page/create-or-update-tag-form'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const tag = await getBySlug(slug)

  if (!tag) {
    throw new Error('数据不存在！')
  }

  return (
    <div className="grid gap-5">
      <h1>编辑标签</h1>
      <CreateOrUpdateTagForm
        initialValue={{
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
          icon: tag.icon ?? undefined,
          iconDark: tag.iconDark ?? undefined,
        }}
      />
    </div>
  )
}
