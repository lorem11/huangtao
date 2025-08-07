'use client'

import LoadingButton from '@/components/loading-button'
import { formatDate } from '@/lib/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Edit3Icon, Trash2Icon } from 'lucide-react'
import Tag from '../tag'
import { BlogTableVO } from './types'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { Switch } from '../ui/switch'
import { deleteBySlug, togglePublishedBySlug } from './actions'

export default function BlogsTable({ data }: { data: BlogTableVO[] }) {
  const [pending, startTransition] = useTransition()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const columns: ColumnDef<BlogTableVO>[] = [
    {
      accessorKey: 'title',
      header: '标题',
      cell: ({ row }) => row.getValue('title'),
    },
    {
      accessorKey: 'slug',
      header: 'slug',
      cell: ({ row }) => row.getValue('slug'),
    },
    {
      accessorKey: 'tags',
      header: '标签',
      cell: ({ row }) => {
        const tags = row.getValue('tags') as BlogTableVO['tags']
        return (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Tag key={tag.name} {...tag} />
            ))}
          </div>
        )
      },
    },
    {
      accessorKey: 'published',
      header: '是否发布',
      cell: ({ row }) => (
        <Switch
          checked={row.getValue('published')}
          onCheckedChange={(checked) =>
            togglePublishedBySlug(row.getValue('slug'), checked).then(() =>
              toast.success(checked ? '发布成功' : '取消发布成功')
            )
          }
        />
      ),
    },
    {
      accessorKey: 'createdAt',
      header: '创建时间',
      cell: ({ row }) => formatDate(row.getValue('createdAt')),
    },
    {
      accessorKey: 'updatedAt',
      header: '最后更新时间',
      cell: ({ row }) => formatDate(row.getValue('updatedAt')),
    },
    {
      header: '操作',
      cell: ({ row }) => (
        <>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="icon">
                <Trash2Icon />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确定要删除这篇文章？</AlertDialogTitle>
                <AlertDialogDescription>点击确认删除</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>取消</AlertDialogCancel>

                <LoadingButton
                  pending={pending}
                  onClick={() => {
                    startTransition(async () => {
                      const slug = row.getValue('slug') as string
                      await deleteBySlug(slug)
                      startTransition(() => {
                        toast.success('删除成功')
                        setOpen(false)
                      })
                    })
                  }}
                >
                  确认
                </LoadingButton>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            variant="outline"
            className="ml-5"
            size="icon"
            onClick={() => {
              const slug = row.getValue('slug')
              router.push(`/admin/blogs/${slug}`)
            }}
          >
            <Edit3Icon />
          </Button>
        </>
      ),
    },
  ]

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
