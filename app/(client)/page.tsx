import ASCIIArt from '@/components/ascii-art/ascii-art'
import FriendLinkMarquee from '@/components/friend-link-marquee'
import Hero from '@/components/hero'

export default function Page() {
  return (
    <div className="absolute sm:w-full w-[90%] top-[50%] translate-y-[-50%] sm:scale-125">
      <Hero />
      <FriendLinkMarquee />
      <ASCIIArt />
    </div>
  )
}
