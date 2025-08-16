import { BLOGSPAGE } from '@/lib/constants'
import prisma from '@/lib/prisma'
import { type ISitemapField, getServerSideSitemap } from 'next-sitemap'

export async function GET() {
  const blogs = await prisma.post.findMany({
    select: {
      slug: true,
      createdAt: true,
      updatedAt: true,
    },
    where: {
      published: true,
    },
  })

  const blogsSitemaps = blogs.map((item): ISitemapField => {
    return {
      loc: `${BLOGSPAGE}/${item.slug}`,
      lastmod: new Date(item.updatedAt).toISOString(),
      changefreq: 'weekly',
    }
  })

  return getServerSideSitemap([...blogsSitemaps])
}
