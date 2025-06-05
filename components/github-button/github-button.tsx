import Link from 'next/link'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

export default function GitHubButton() {
  return (
    <Button variant="outline" size="icon">
      <Link href="https://github.com" target="_blank">
        <Github className="h-[1.2rem] w-[1.2rem]" />
      </Link>
    </Button>
  )
}
