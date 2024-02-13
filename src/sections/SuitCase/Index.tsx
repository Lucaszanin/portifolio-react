import { CustomizeTitle } from '../../components/CustomizeTitle'
import prismaled from '../../assets/prisma-led.svg'
import cablework from '../../assets/cable-work-experience.svg'
import * as S from './styles'
import { WorkInformations } from './components/WorkInformations/Index'

export const SuitCaseSection = () => {
  return (
    <>
      <S.Container id="suitcase">
        <S.TitleWrapper>
          <CustomizeTitle
            text="Experiências de trabalho"
            align="start"
            textcolor="red"
            weight="bold"
          />
          <S.ImageWrapper>
            <img src={cablework} alt="" />
          </S.ImageWrapper>
        </S.TitleWrapper>
        <S.LeftContent>
          <WorkInformations />
        </S.LeftContent>
      </S.Container>
      <S.RightContent>
        <img src={prismaled} alt="" />
      </S.RightContent>
    </>
  )
}
