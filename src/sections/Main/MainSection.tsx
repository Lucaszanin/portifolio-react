import { CustomizeText } from '../../components/CustomizeText/Index'
import { CustomizeTitle } from '../../components/CustomizeTitle'
import CircleBackground from '../../assets/circle-led.svg'
import CableLed from '../../assets/cable-led.svg'
import CableLed2 from '../../assets/cable-led-2.svg'
import Socials from '../../assets/socials.svg'
import * as C from './constants'
import * as S from './styles'
import { ContactButton } from '../../components/ContactButton/Index'

export const MainSection = () => {
  return (
    <S.MainContainer id="home">
      <S.LeftContent>
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
        />
        <div style={{ margin: '30px 0' }}></div>
        <S.CableWrapper>
          <img src={CableLed} alt="" style={{ height: '274px' }} />
          <img src={Socials} alt="" style={{ height: '11.5rem' }} />
          <img src={CableLed2} alt="" style={{ height: '11.5rem' }} />
        </S.CableWrapper>
        <CustomizeText text={C.firstParagraph} />
        <div style={{ margin: '0.625rem 0' }}></div>
        <CustomizeText text={C.secondParagraph} />
        <ContactButton />
      </S.LeftContent>
      <S.ImagWrapper>
        <img src={CircleBackground} alt="" />
      </S.ImagWrapper>
    </S.MainContainer>
  )
}
