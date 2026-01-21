import CircleBackground from '../../assets/circle-led.svg'
import CableLed from '../../assets/cable-led.svg'
import CableLed2 from '../../assets/cable-led-2.svg'
import Socials from '../../assets/socials.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'
import GithubIcon from '../../assets/GitHub.svg'
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
          <S.StyledImage src={CableLed} alt="" />
          <S.StyledImage src={Socials} alt="" />
          <S.StyledImage src={CableLed2} alt="" />
        </S.CableWrapper>

        <S.TextWrapper>
          <CustomizeTitle {...C.firstTitleProps} />
          <CustomizeTitle {...C.secondTitleprops} />
          <CustomizeTitle {...C.principalTitleProps} />

          <CustomizeText text={C.firstParagraph} />
          <CustomizeText text={C.secondParagraph} />
          <CustomizeText text={C.thirtParagraph} />
          <S.SocialIconsContainer>
            <S.SocialIconWrapper>
              <S.SocialLink
                href="https://www.linkedin.com/in/lucas-zanin-083167106/"
                target="_blank"
              >
                <img src={LinkedinIcon} alt="" />
              </S.SocialLink>
            </S.SocialIconWrapper>
            <S.SocialIconWrapper>
              <S.SocialLink
                href="https://github.com/Lucaszanin"
                target="_blank"
              >
                <img src={GithubIcon} alt="" />
              </S.SocialLink>
            </S.SocialIconWrapper>
          </S.SocialIconsContainer>
          <ContactButton />
        </S.TextWrapper>
      </S.LeftContent>
      <S.ImagWrapper>
        <S.BackgroundImage
          src={CircleBackground}
          alt="Imagem com dois circulos negros, com contorno vermelho"
        />
      </S.ImagWrapper>
    </S.MainContainer>
  )
}
