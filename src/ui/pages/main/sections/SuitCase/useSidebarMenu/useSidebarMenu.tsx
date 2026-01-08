import { useState } from 'react'
import * as T from './useSidebarMenu.types'

export const useSidebarMenu = (): T.useSidebarMenuReturn => {
  const [isActive, setActive] = useState(true)

  const handleClickActive = () => {
    setActive((prev) => !prev)
  }

  return {
    handleClickActive,
    isActive,
  }
}
