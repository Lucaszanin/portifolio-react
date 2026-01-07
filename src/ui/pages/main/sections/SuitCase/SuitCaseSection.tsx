import prismaled from '../../assets/prisma-led.svg'
import cablework from '../../assets/cable-work-experience.svg'
import * as S from './SuitCaseSection.styles'
import { WorkInformations } from './components/WorkInformations/WorkInformations'
import { CustomizeTitle } from '../../components/CustomizeTitle/CustomizeTitle'

export const SuitCaseSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
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
      </S.Container>{' '}
      <div>
        <img src={prismaled} alt="" />
      </div>
    </div>
  )
}
