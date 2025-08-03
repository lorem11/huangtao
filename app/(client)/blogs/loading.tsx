import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <>
      <h1>所有文章</h1>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {Array.from({ length: 16 }).map((_, idx) => (
          <Skeleton key={idx} className="h-[100px]" />
        ))}
      </div>
    </>
  )
}
