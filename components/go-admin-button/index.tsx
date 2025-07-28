import { UserLockIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function GoAdminButton() {
  return (
    <Link href="/admin" target="_blank">
      <Button variant="outline" size="icon">
        <UserLockIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  )
}
