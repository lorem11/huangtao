import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyToClipBoard(text: string) {
  if (typeof navigator.clipboard !== 'undefined') {
    return navigator.clipboard.writeText(text)
  } else {
    const textArea = document.createElement('textArea') as HTMLTextAreaElement
    textArea.value = text
    document.body.appendChild(textArea)

    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)

    return Promise.resolve()
  }
}

export function formatDate(date: Date | number) {
  return dayjs(date).locale("zh-cn").format("YYYY年M月D日 HH:mm:ss");
}