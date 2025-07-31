import {
  generateUploadButton,
  generateUploadDropzone,
} from '@uploadthing/react'
import type { OurFileRouter } from '@/app/api/uploadthing/core'
import { ComponentProps } from 'react'
const Button = generateUploadButton<OurFileRouter>()
export const UploadButton = ({
  ...props
}: Omit<ComponentProps<typeof Button>, 'className'>) => (
  <Button
    className="ut-button:h-9 ut-button:bg-primary ut-button:text-primary-foreground"
    {...props}
  />
)
export const UploadDropzone = generateUploadDropzone<OurFileRouter>()
