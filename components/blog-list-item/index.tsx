import { formatDate } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import Link from 'next/link'
import { BlogItemVO } from '../admin-blogs-page/types'
import Tag from '../tag'

export default function BlogListItem({
  title,
  slug,
  tags,
  desc,
  createdAt,
}: BlogItemVO) {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="flex flex-col justify-between gap-2 border rounded-md p-4 h-full">
        {!!tags.length && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Tag key={tag.name} {...tag} />
            ))}
          </div>
        )}
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="!text-sm text-gray-400 dark:text-gray-200">{desc}</p>
        <div className="flex justify-end items-center">
          <CalendarIcon className="mr-2 w-4 h-4" /> {formatDate(createdAt)}
        </div>
      </div>
    </Link>
  )
}
