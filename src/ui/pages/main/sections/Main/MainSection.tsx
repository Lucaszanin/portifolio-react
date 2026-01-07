import CircleBackground from '../../assets/circle-led.svg'
import CableLed from '../../assets/cable-led.svg'
import CableLed2 from '../../assets/cable-led-2.svg'
import Socials from '../../assets/socials.svg'
import * as C from './MainSection.constants'
import * as S from './MainSection.styles'
import { CustomizeTitle } from '../../components/CustomizeTitle/CustomizeTitle'
import { CustomizeText } from '../../components/CustomizeText/CustomizeText'
import { ContactButton } from '../../components/ContactButton/ContactButton'

export const MainSection = () => {
  return (
    <S.MainContainer id="home">
      <S.LeftContent>
        <S.CableWrapper>
          <img src={CableLed} alt="" style={{ height: '274px' }} />
          <img src={Socials} alt="" style={{ height: '11.5rem' }} />
          <img src={CableLed2} alt="" style={{ height: '11.5rem' }} />
        </S.CableWrapper>
        <S.TextWrapper>
          <CustomizeTitle
            text="Olá"
            align="start"
            textcolor="gray"
            weight="regular"
          />
          <CustomizeTitle
            text="Eu Sou"
            align="start"
            textcolor="gray"
            weight="regular"
          />
          <CustomizeTitle
            text="Lucas Zanin"
            align="start"
            textcolor="red"
            weight="bold"
            animation={true.toString()}
            margin="12px"
          />

          <CustomizeText text={C.firstParagraph} />
          <CustomizeText text={C.secondParagraph} />
          <ContactButton />
        </S.TextWrapper>
      </S.LeftContent>
      <S.ImagWrapper>
        <img src={CircleBackground} alt="" />
      </S.ImagWrapper>
    </S.MainContainer>
  )
}
