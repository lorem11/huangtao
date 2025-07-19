import { useTheme } from "next-themes";
import { RefObject, useLayoutEffect } from "react";

export function useReversedTheme(ref: RefObject<HTMLElement | HTMLDivElement | null>) {
  const { resolvedTheme } = useTheme()
  useLayoutEffect(() => {
    if (ref.current) {
      const classList = ref.current.classList
      if (resolvedTheme === 'light') {
        classList.add('dark')
      }

      if (resolvedTheme === 'dark') {
        classList.add('light')
      }

      return () => {
        classList.remove('dark', 'light')
      }
    }
  }, [resolvedTheme])
}