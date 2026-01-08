import prismaled from '../../assets/prisma-led.svg'
import * as S from './SuitCaseSection.styles'
import { SideBarMenu } from './components/SideBarMenu/SideBarMenu'
import { CustomizeTitle } from '../../components/CustomizeTitle/CustomizeTitle'

export const SuitCaseSection = () => {
  return (
    <S.Container id="suitcase">
      <S.TitleWrapper>
        <CustomizeTitle
          text="Experiências de trabalho"
          align="start"
          textcolor="red"
          weight="bold"
        />
      </S.TitleWrapper>
      <S.LeftContent>
        <SideBarMenu />
      </S.LeftContent>
      <S.RightContent>
        <img src={prismaled} alt="" />
      </S.RightContent>
    </S.Container>
  )
}
