import type { Dispatch, SetStateAction } from 'react'

export type activeExperienceProps = {
  id: string
  menuLabel: string
  title: string
  company: string
  period: string
  paragraphs: { id: string; text: string }[]
}

export type useSidebarMenuReturn = {
  activeId: string
  activeExperience?: activeExperienceProps
  setActive: Dispatch<SetStateAction<string>>
}
