import Link from 'next/link'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

export default function GitHubButton() {
  return (
    <Link href="https://github.com/lorem11" target="_blank">
      <Button variant="outline" size="icon">
        <Github className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  )
}
