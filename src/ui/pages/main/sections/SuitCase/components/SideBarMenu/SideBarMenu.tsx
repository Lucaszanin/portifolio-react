import * as S from './SideBarMenu.styles'
import * as C from './SideBarMenu.constants'
import { CustomizeText } from '../../../../components/CustomizeText/CustomizeText'
import { useSidebarMenu } from '../../useSidebarMenu/useSidebarMenu'

export const SideBarMenu = () => {
  const { isActive, handleClickActive } = useSidebarMenu()

  return (
    <S.Container>
      <S.Navigation>
        <S.MenuItem isactive={isActive}>
          <S.ItemText onClick={handleClickActive}>Grupo Boticário</S.ItemText>
        </S.MenuItem>
        <S.MenuItem isactive={isActive}>
          <S.ItemText onClick={handleClickActive}>
            M3 Desenvolvimento
          </S.ItemText>
        </S.MenuItem>
      </S.Navigation>
      {isActive ? (
        <div>
          <div>
            <S.WorkTitle>
              Desenvolvedor Front End Pleno
              <div>
                <S.EvidenceText>Grupo Boticário</S.EvidenceText>
              </div>
            </S.WorkTitle>
            <S.WorkSubTitle>abril 2023 até agosto 2025</S.WorkSubTitle>
          </div>
          <S.SpaceText>
            <CustomizeText text={C.paragraph1} />
          </S.SpaceText>
          <S.SpaceText>
            <CustomizeText text={C.paragraph1} />
          </S.SpaceText>
          <S.SpaceText>
            <CustomizeText text={C.paragraph1} />
          </S.SpaceText>
        </div>
      ) : (
        <div>
          <div>
            <S.WorkTitle>
              Desenvolvedor Front End
              <div>
                <S.EvidenceText>M3 Desenvolvimento</S.EvidenceText>
              </div>
            </S.WorkTitle>
            <S.WorkSubTitle>setembro 2023 até abril 2023</S.WorkSubTitle>
          </div>
          <S.SpaceText>
            <CustomizeText text={C.paragraphOneM3} />
          </S.SpaceText>
          <S.SpaceText>
            <CustomizeText text={C.paragrapTwoM3} />
          </S.SpaceText>
          <S.SpaceText>
            <CustomizeText text={C.paragrapThreeM3} />
          </S.SpaceText>
        </div>
      )}
    </S.Container>
  )
}
