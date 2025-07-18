import { PrismaClient, Prisma } from "@/app/generated/prisma";

const prisma = new PrismaClient()
const postData: Prisma.PostCreateInput[] = [{
  title: 'Next.js攻略流程解说',
  content: 'lorem ipsum',
  slug: 'next-js-tutorial'
}]

const tagData: Prisma.TagCreateInput[] = [{
  name: 'Next.js',
  slug: 'next-js',
  Post: {
    create: {
      title: 'Next.js攻略流程解说',
      content: 'lorem ipsum',
      slug: 'next-js-tutorial'
    }
  }
}];

(async () => {
  for (const t of tagData) {
    await prisma.tag.create({ data: t })
  }
})()


