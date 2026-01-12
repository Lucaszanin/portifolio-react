import { useState } from 'react'
import * as T from './useNavBarActive.types'

export const useNavBarActive = ({ content }: T.ActiveExperienceProps) => {
  const [activeId, setActive] = useState(content[0].id)

  const activeExperience = content?.find((exp) => exp.id === activeId)

  return {
    activeExperience,
    setActive,
    activeId,
  }
}
