import * as S from './SideBarMenu.styles'
import * as C from './SideBarMenu.constants'
import { useSidebarMenu } from '../../useSidebarMenu/useSidebarMenu'
import { SideBarContent } from '../SideBarContent/SideBarContent'

export const SideBarMenu = () => {
  const { setActive, activeId, activeExperience } = useSidebarMenu()

  return (
    <S.Container>
      <S.Navigation>
        {C.experiences?.map((exp) => (
          <S.MenuItem key={exp.id} isactive={exp.id === activeId}>
            <S.ItemText onClick={() => setActive(exp.id)}>
              {exp.menuLabel}
            </S.ItemText>
          </S.MenuItem>
        ))}
      </S.Navigation>
      <SideBarContent content={activeExperience} />
    </S.Container>
  )
}
