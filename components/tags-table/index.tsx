'use client'

import { getAllTags } from '@/app/admin/tags/_actions'
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
import { Button } from '../ui/button'

export type Tag = Awaited<ReturnType<typeof getAllTags>>[number]
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
        <Button variant="outline" className="ml-5" size="icon">
          <Edit3Icon />
        </Button>
      </>
    ),
  },
]

export default function TagsTable({ data }: { data: Tag[] }) {
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
