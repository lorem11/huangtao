'use client'

import { throttle } from '@/lib/utils'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

/**
 * @author huangtao
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = throttle(() => {
      setVisible(scrollY > 20)
    }, 50)
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])

  return (
    <>
      {visible && (
        <button
          className="fixed right-5 bottom-5 sm:right-20 sm:bottom-20 bg-accent rounded-[50%] p-1"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="w-8 h-8" />
        </button>
      )}
    </>
  )
}
