import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Link from 'next/link'

export default function FriendLinkMarquee() {
  const links = data.map((item, index) => (
    <HoverLinkCard key={index} item={item} />
  ))

  return (
    <div className="group flex w-full sm:w-3/5 mx-auto overflow-hidden mask-linear-[90deg,#0000,#fff_10%,#fff_90%,#0000] py-4">
      <div className="flex animate-marquee-first  gap-4 group-hover:[animation-play-state:paused]">
        {links}
      </div>
      <div className="flex animate-marquee-second  gap-4 group-hover:[animation-play-state:paused]">
        {links}
      </div>
    </div>
  )
}

interface ItemType {
  href: string
  label: string
  avatar: string
  avatarFallback: string
  description: string
}

const data: ItemType[] = [
  {
    href: 'https://nextjs.org',
    label: '@nextjs',
    avatar: 'https://github.com/nextjs.png',
    avatarFallback: 'VC',
    description: 'The React Framework – created and maintained by @vercel.',
  },
  {
    href: 'https://tailwindcss.com',
    label: '@tailwindcss',
    avatar: 'https://github.com/tailwindcss.png',
    avatarFallback: 'TW',
    description:
      'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  },
  {
    href: 'https://react.dev',
    label: '@react',
    avatar: 'https://github.com/react.png',
    avatarFallback: 'RE',
    description: 'The library for web and native user interfaces.',
  },
  {
    href: 'https://ui.shadcn.com/',
    label: '@shadcn-ui',
    avatar: 'https://github.com/shadcn-ui.png',
    avatarFallback: 'SC',
    description:
      'A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.',
  },
  {
    href: 'https://www.cult-ui.com/',
    label: '@cult-ui',
    avatar: 'https://github.com/nolly-studio.png',
    avatarFallback: 'CT',
    description:
      'A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.',
  },
  {
    href: 'https://vuejs.org',
    label: '@vuejs',
    avatar: 'https://github.com/vuejs.png',
    avatarFallback: 'VU',
    description: 'The Progressive JavaScript FrameWork.',
  },
  {
    href: 'https://developer.mozilla.org/',
    label: '@mdn',
    avatar: 'https://github.com/mdn.png',
    avatarFallback: 'MD',
    description:
      'Resources for Developers, by Developers. United in love. Documenting CSS, HTML, and JavaScript, since 2005.',
  },
]

function HoverLinkCard({ item }: { item: ItemType }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <Link href={item.href} target="_blank" className="text-lg">
            {item.label}
          </Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src={item.avatar} />
            <AvatarFallback>{item.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{item.label}</h4>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
