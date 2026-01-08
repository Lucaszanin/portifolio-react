import { useState } from 'react'
import * as T from './useSidebarMenu.types'
import { experiences } from '../components/SideBarMenu/SideBarMenu.constants'

export const useSidebarMenu = (): T.useSidebarMenuReturn => {
  const [activeId, setActive] = useState(experiences[0].id)

  const activeExperience = experiences?.find((exp) => exp.id === activeId)

  return {
    activeExperience,
    setActive,
    activeId,
  }
}
