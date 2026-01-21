import { useState } from 'react'
import type * as T from './useToggleMenu.types'

export const useToggleMenu = (): T.UseToggleMenuReturn => {
  const [isVisible, setIsVisible] = useState(false)

  const openMenu = () => setIsVisible(true)
  const closeMenu = () => setIsVisible(false)
  const toggleMenu = () => setIsVisible((prev) => !prev)

  return {
    isVisible,
    openMenu,
    closeMenu,
    toggleMenu,
  }
}
