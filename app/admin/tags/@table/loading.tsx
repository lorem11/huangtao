import { RotateCw } from 'lucide-react'

export default function Loading() {
  return (
    <div className="flex justify-center gap-5">
      <RotateCw className="animate-spin" /> 表格数据加载中...
    </div>
  )
}
