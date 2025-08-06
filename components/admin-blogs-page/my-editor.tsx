'use client'

import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { Editor, EditorProps } from '@bytemd/react'
import zh from 'bytemd/locales/zh_Hans.json'
import { ComponentProps } from 'react'
import { uploadImage } from './actions'
import { toast } from 'sonner'

type PropsType = ComponentProps<typeof Editor>
const plugins = [gfm(), highlight()]

export default function MyEditor({ value, onChange }: PropsType) {
  const handleUploadImages: EditorProps['uploadImages'] = async (files) => {
    const file = files[0]
    const formData = new FormData()
    formData.set('file', file)
    toast.info('上传中', { duration: Infinity })
    const { url, error } = await uploadImage(formData)

    if (url) {
      toast.dismiss()
      return [{ url }]
    }

    return []
  }

  return (
    <Editor
      value={value}
      locale={zh}
      plugins={plugins}
      onChange={onChange}
      uploadImages={handleUploadImages}
    />
  )
}
