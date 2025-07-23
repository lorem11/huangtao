import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <DialogContent className="min-w-[1500px] [&>button]:hidden">
      <DialogHeader>
        <DialogTitle>编辑标签</DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <div className="grid gap-5">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-10" />
        </div>
        <div className="grid gap-5">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-10" />
        </div>
        <div className="grid gap-5">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-10" />
        </div>
        <div className="grid gap-5">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-10" />
        </div>
      </div>
    </DialogContent>
  )
}
