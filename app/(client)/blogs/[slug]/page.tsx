import {
  getAllSlug,
  getBlogBySlug,
  getTitleAndDescBySlug,
} from '@/components/admin-blogs-page/actions'
import Post from '@/components/post'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return await getAllSlug()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const res = await getTitleAndDescBySlug(slug)
  return {
    title: res.title,
    description: res.desc,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { blog, err } = await getBlogBySlug(slug)

  if (err) {
    return notFound()
  }

  return <Post {...blog!} />
}
