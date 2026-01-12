import type { Dispatch, SetStateAction } from 'react'

import { NavbarProps } from '../components/Navbar/Navbar.types'

export type ActiveExperienceProps = {
  content: NavbarProps['items']
}

export type UseSidebarMenuReturn = {
  activeId: string
  activeExperience?: NavbarProps['items']
  setActive: Dispatch<SetStateAction<string | string[]>>
}
