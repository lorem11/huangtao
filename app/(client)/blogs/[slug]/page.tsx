import {
  getAllSlug,
  getBlogBySlug,
} from '@/components/admin-blogs-page/actions'
import Post from '@/components/post'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return await getAllSlug()
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
