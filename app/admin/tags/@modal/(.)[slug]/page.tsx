import { getBySlug } from '@/components/admin-tags-page/actions'
import CreateOrUpdateTagForm from '@/components/admin-tags-page/create-or-update-tag-form'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

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
    <form>
      <DialogContent className="min-w-[1500px] [&>button]:hidden">
        <DialogHeader>
          <DialogTitle>编辑标签</DialogTitle>
        </DialogHeader>
        <CreateOrUpdateTagForm
          initialValue={{
            name: tag.name,
            slug: tag.slug,
            icon: tag.icon ?? undefined,
            iconDark: tag.iconDark ?? undefined,
          }}
        />
      </DialogContent>
    </form>
  )
}
