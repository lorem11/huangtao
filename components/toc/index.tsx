import { TableOfContentsIcon } from 'lucide-react'
import Link from 'next/link'

export interface Heading {
  anchor: string
  text: string
  level: number
}

export default function TOC({
  headings,
  className,
}: {
  headings: Heading[]
  className?: string
}) {
  return (
    <aside className={className}>
      <ul>
        <h4 className="flex gap-2 font-bold justify-center mb-4 text-pink-500">
          <TableOfContentsIcon />
          大纲
        </h4>
        {headings.map((heading) => (
          <li key={heading.anchor} className="mb-1">
            <code className="text-pink-500">{'</>'}</code>
            <Link
              style={{
                paddingLeft: (heading.level - 1) * 20,
                marginLeft: 10,
              }}
              className="hover:underline underline-offset-8"
              href={heading.anchor}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
