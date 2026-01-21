import { useEffect } from 'react'
import type { UseOutsideClickProps } from './useOutsideClick.types'

export const useOutsideClick = ({
  ref,
  onOutsideClick,
}: UseOutsideClickProps) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      onOutsideClick()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, onOutsideClick])
}
