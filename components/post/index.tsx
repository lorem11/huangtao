'use client'
import { Viewer } from '@bytemd/react'
import { BlogVO } from '../admin-blogs-page/types'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { Calendar1Icon } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import type { BytemdPlugin } from 'bytemd'
import TOC, { Heading } from '../toc'

const pluginToc = (): BytemdPlugin => {
  return {
    viewerEffect({ markdownBody }) {
      const headings = markdownBody.querySelectorAll('h1, h2, h3, h4, h5, h6')
      headings.forEach((heading) => {
        heading.id = heading.textContent!
      })
    },
  }
}
const plugins = [gfm(), highlight(), pluginToc()]

function extractMarkdownToc(markdown: string): Heading[] {
  const lines = markdown.split('\n')
  return lines
    .filter((line) => /^#{1,6}\s/.test(line))
    .map((line) => {
      const level = line.match(/^#+/)![0].length
      const text = line.replace(/^#+\s*/, '')

      return {
        anchor: `#${text}`,
        level,
        text,
      }
    })
}

export default function Post({ title, content, updatedAt }: BlogVO) {
  const headings = extractMarkdownToc(content)

  return (
    <>
      <h1 className="mb-10 !text-4xl">{title}</h1>
      <p className="mb-5 flex items-center">
        最后更新： <Calendar1Icon className="mr-2 w-4 h-4" />{' '}
        {formatDate(updatedAt)}
      </p>
      <TOC headings={headings} className="fixed top-[100px] right-1/6" />
      <article>
        <Viewer value={content} plugins={plugins} />
      </article>
    </>
  )
}
