'use client'

import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { Editor } from '@bytemd/react'
import zh from 'bytemd/locales/zh_Hans.json'
import { ComponentProps } from 'react'

type PropsType = ComponentProps<typeof Editor>
const plugins = [gfm(), highlight()]

export default function MyEditor({ value, onChange }: PropsType) {
  return (
    <Editor value={value} locale={zh} plugins={plugins} onChange={onChange} />
  )
}
