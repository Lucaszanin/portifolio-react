import { Navbar } from './components/Navbar/Navbar'
import { RenderContent } from './components/RenderContent/RenderContent'
import * as S from './ProjectsSection.styles'
import * as C from './ProjectsSection.constants'
import { useState } from 'react'
import divider from '../../assets/divider.png'
import { CustomizeTitle } from '../../components/CustomizeTitle/CustomizeTitle'

export const ProjectsSection = () => {
  const [activeId, setActive] = useState('Internet')

  return (
    <S.MainContainer>
      <S.HeaderContainer>
        <S.TitleWrapper>
          <S.HeaderWrapper>
            <CustomizeTitle
              text="O que eu já desenvolvi"
              align="center"
              textcolor="red"
              weight="bold"
            />
            <img src={divider} alt="" />
          </S.HeaderWrapper>
        </S.TitleWrapper>
        <S.NavBarWrapper>
          <S.SubtitleText>Pesquise por categorias:</S.SubtitleText>
          <Navbar
            items={C.NavItems}
            activeCategory={activeId}
            onChangeCategoria={setActive}
          />
        </S.NavBarWrapper>
      </S.HeaderContainer>
      <S.ContentContainer>
        <RenderContent
          content={C.RenderItems.filter(({ categories }) =>
            categories.includes(activeId),
          )}
        />
      </S.ContentContainer>
    </S.MainContainer>
  )
}
