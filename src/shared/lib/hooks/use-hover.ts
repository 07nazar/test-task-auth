import { type RefObject, useEffect, useState } from 'react'

export function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>
): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = (): void => {
    setValue(true)
  }
  const handleMouseLeave = (): void => {
    setValue(false)
  }

  useEffect(() => {
    if (elementRef !== null) {
      elementRef.current?.addEventListener('mouseenter', handleMouseEnter)
      elementRef.current?.addEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementRef])

  return value
}
