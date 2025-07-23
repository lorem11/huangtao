import { PrismaClient, Prisma } from '@/app/generated/prisma'

const prisma = new PrismaClient()

const tagData: Prisma.TagCreateInput[] = [
  {
    name: 'Next.js',
    slug: 'next-js',
    icon: 'http://localhost:3000/nextjs.svg',
    iconDark: 'http://localhost:3000/nextjs.svg',
  },
  {
    name: 'react',
    slug: 'react',
    icon: 'http://localhost:3000/nextjs.svg',
    iconDark: 'http://localhost:3000/nextjs.svg',
  },
  {
    name: 'TailwindCSS',
    slug: 'tailwind-css',
    icon: 'http://localhost:3000/nextjs.svg',
    iconDark: 'http://localhost:3000/nextjs.svg',
  },
]

;(async () => {
  for (const t of tagData) {
    await prisma.tag.create({ data: t })
  }
})()
