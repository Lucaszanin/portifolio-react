import CircleBackground from '../../assets/circle-led.svg'
import { ContactButton } from '../../components/ContactButton/ContactButton'
import { CustomizeTitle } from '../../components/CustomizeTitle/CustomizeTitle'
import * as S from './ContactSection.styles'

export const ContactSection = () => (
  <S.MainContainer>
    <S.WrapperContent>
      <S.TextWrapper>
        <CustomizeTitle
          text={'O que fazer agora?'}
          textcolor="red"
          weight="regular"
          fontSize="2rem"
          align="center"
        />
        <CustomizeTitle
          text={'Faça contato comigo'}
          align="center"
          weight="bold"
          textcolor="gray"
        />
        <S.DescriptionText>
          Disponível para novos desafios Desenvolvedor front-end pleno com
          experiência em projetos reais e foco em boas práticas. Fale comigo
          diretamente pelo WhatsApp.
        </S.DescriptionText>
      </S.TextWrapper>
      <S.ImagWrapper>
        <img
          src={CircleBackground}
          alt="Imagem com dois circulos negros, com contorno vermelho"
        />
      </S.ImagWrapper>
    </S.WrapperContent>
    <ContactButton />
  </S.MainContainer>
)
