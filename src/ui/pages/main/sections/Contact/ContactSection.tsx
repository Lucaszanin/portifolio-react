import CircleBackground from '../../assets/circle-led.svg'
import { ContactButton } from '../../components/ContactButton/ContactButton'
import { CustomizeTitle } from '../../components/CustomizeTitle/CustomizeTitle'
import * as S from './ContactSection.styles'
import * as C from './ContactSection.constants'

export const ContactSection = () => (
  <S.MainContainer>
    <S.WrapperContent>
      <S.TextWrapper>
        <CustomizeTitle {...C.titleProps} />
        <CustomizeTitle {...C.subTitleProps} />
        <S.DescriptionText>{C.textDescription}</S.DescriptionText>
      </S.TextWrapper>
      <S.ImagWrapper>
        <img src={CircleBackground} alt={C.altImageText} />
      </S.ImagWrapper>
    </S.WrapperContent>
    <ContactButton />
  </S.MainContainer>
)
