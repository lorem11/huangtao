'use client'

import { formatDate } from '@/lib/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { BanIcon, Edit3Icon, Trash2Icon } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../../ui/button'
import { getAllTags } from '../actions'
import Tag from '@/components/tag'
import { useRouter } from 'next/navigation'

export type Tag = Awaited<ReturnType<typeof getAllTags>>[number]

export default function TagsTable({ data }: { data: Tag[] }) {
  const router = useRouter()

  const columns: ColumnDef<Tag>[] = [
    {
      accessorKey: 'id',
      header: 'id',
      cell: ({ row }) => row.getValue('id'),
    },
    {
      accessorKey: 'name',
      header: '标签名称',
      cell: ({ row }) => row.getValue('name'),
    },
    {
      accessorKey: 'slug',
      header: 'slug',
      cell: ({ row }) => row.getValue('slug'),
    },
    {
      accessorKey: 'icon',
      header: '亮色背景图标',
      cell: ({ row }) =>
        row.getValue('icon') ? (
          <Image
            src={row.getValue('icon')}
            width={24}
            height={24}
            alt="图标获取失败"
          />
        ) : (
          <BanIcon />
        ),
    },
    {
      accessorKey: 'iconDark',
      header: '暗色背景图标',
      cell: ({ row }) =>
        row.getValue('iconDark') ? (
          <Image
            src={row.getValue('iconDark')}
            width={24}
            height={24}
            alt="图标获取失败"
          />
        ) : (
          <BanIcon />
        ),
    },
    {
      header: '预览',
      cell: ({ row }) => {
        const name = row.getValue('name') as string
        const icon = row.getValue('icon') as string
        const iconDark = row.getValue('iconDark') as string

        return <Tag name={name} icon={icon} iconDark={iconDark} />
      },
    },
    {
      accessorKey: 'createdAt',
      header: '创建时间',
      cell: ({ row }) => formatDate(row.getValue('createdAt')),
    },
    {
      header: '操作',
      cell: ({ row }) => (
        <>
          <Button variant="destructive" size="icon">
            <Trash2Icon />
          </Button>
          <Button
            variant="outline"
            className="ml-5"
            size="icon"
            onClick={() => {
              const slug = row.getValue('slug')
              router.push(`/admin/tags/${slug}`)
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
    <>
      <h1>所有标签</h1>
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
