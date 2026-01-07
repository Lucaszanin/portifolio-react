import { CustomizeText } from '../../components/CustomizeText/Index'
import { CustomizeTitle } from '../../components/CustomizeTitle'
import PhotoImage from '../../ui/pages/main/assets/perfil.jpeg'
import CableLed from '../../ui/pages/main/assets/cable-about.svg'
import * as C from './constants'
import * as S from './styles'

export const AboutSection = () => {
  return (
    <S.MainContainer id="about">
      <S.LeftContent>
        <S.TopWrapper>
          <CustomizeTitle
            text="Sobre mim"
            align="start"
            textcolor="red"
            weight="bold"
            margin="3rem"
          />
          <S.CableWrapper>
            <img src={CableLed} alt="" />
          </S.CableWrapper>
        </S.TopWrapper>

        <CustomizeText text={C.firstParagraph} />

        <CustomizeText text={C.secondParagraph} />

        <CustomizeText
          text={'Algumas tecnologias que tenho trabalhado recentemente:'}
        />
        <S.TecnologiesWrapper>
          <S.TecnologiesText>Javascript (ES6++)</S.TecnologiesText>
          <S.TecnologiesText>React</S.TecnologiesText>
          <S.TecnologiesText>Typescript</S.TecnologiesText>
          <S.TecnologiesText>Jest</S.TecnologiesText>
          <S.TecnologiesText>Styled Components</S.TecnologiesText>
          <S.TecnologiesText>Yup</S.TecnologiesText>
          <S.TecnologiesText>React Router Dom</S.TecnologiesText>
          <S.TecnologiesText>React Hook Form</S.TecnologiesText>
        </S.TecnologiesWrapper>
      </S.LeftContent>
      <S.RightContent>
        <S.ImagWrapper1>
          <S.ImagWrapper>
            <S.ImagWrapper2>
              <img
                src={PhotoImage}
                style={{ height: '300px', borderRadius: '50%' }}
                alt=""
              />
            </S.ImagWrapper2>
          </S.ImagWrapper>
        </S.ImagWrapper1>
      </S.RightContent>
    </S.MainContainer>
  )
}
