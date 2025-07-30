'use client'

import { cn } from '@/lib/utils'
import { CommandInput } from 'cmdk'
import { XIcon } from 'lucide-react'
import { KeyboardEvent, ReactNode, useRef, useState } from 'react'
import { Command, CommandItem, CommandList } from '../ui/command'

/**
 * @author huangtao
 */
export function MutipleSelector<T, U>({
  options,
  optionRenderer,
  valueGetter,
  values,
  onChange,
}: {
  options: T[]
  optionRenderer: (x: T) => ReactNode
  values: U[]
  valueGetter: (x: T) => U
  onChange: (values: U[]) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [open, setOpen] = useState(false)
  const map = options.reduce((p, c) => p.set(valueGetter(c), c), new Map())
  const renderedValues = values.map((value) => optionRenderer(map.get(value)))

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const input = inputRef.current
    if (input) {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        if (input.value === '') {
          onChange(values.slice(0, -1))
        }
      }

      if (event.key === 'Escape') {
        input.blur()
      }
    }
  }

  return (
    <Command onKeyDown={(e) => handleKeyDown(e)} className="overflow-visible">
      <div className="relative flex bg-background items-center justify-between rounded-md border border-input px-3 py-2 text-base ring-offset-background focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] md:text-sm">
        <div className="flex flex-wrap gap-2">{renderedValues}</div>
        <CommandInput
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          placeholder="键入搜索"
          ref={inputRef}
          className={cn(
            'flex-1 self-baseline bg-transparent outline-none placeholder:text-muted-foreground',
            values.length && 'ml-2'
          )}
        />
        <div className="absolute w-full bottom-0 translate-y-[calc(100%+10px)] bg-popover z-10 -translate-x-3 rounded-lg">
          {open && (
            <CommandList>
              {options.map((option, idx) => (
                <CommandItem
                  key={idx}
                  onSelect={() => onChange([...values, valueGetter(option)])}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                >
                  {optionRenderer(option)}
                </CommandItem>
              ))}
            </CommandList>
          )}
        </div>
        <div
          className="absolute right-1 cursor-pointer"
          onClick={() => onChange([])}
        >
          {values.length > 0 && <XIcon />}
        </div>
      </div>
    </Command>
  )
}
