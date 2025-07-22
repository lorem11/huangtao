import { Loader2Icon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Button } from '../ui/button'

type PropsType = ComponentProps<typeof Button> & {
  pending: boolean
}

export default function LoadingButton({
  pending,
  children,
  ...props
}: PropsType) {
  return (
    <Button disabled={pending} {...props}>
      {pending && <Loader2Icon className="animate-spin" />}
      {children}
    </Button>
  )
}
