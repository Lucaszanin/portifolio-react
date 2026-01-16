import { BooksIcon } from '../../assets/Books'
import { HomeIcon } from '../../assets/HomeIcon'
import { SkillsIcon } from '../../assets/SkiilsIcon'
import { SuitCaseIcon } from '../../assets/SuitCaseIcon'
import { CustomizeMiniButton } from '../CustomizeMiniButton/CustomizeMiniButton'
import { SVG } from '../SVG/Index'
import * as S from './Header.styles'

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoWrapper>
        <SVG name="logo" />
      </S.LogoWrapper>
      <S.NavigationWrapper>
        <S.MenuList>
          <S.LinkMenu href="#home">
            <S.ListItemMenu>
              <HomeIcon />
            </S.ListItemMenu>
          </S.LinkMenu>
          <S.LinkMenu href="#about">
            <S.ListItemMenu>
              <BooksIcon />
            </S.ListItemMenu>
          </S.LinkMenu>
          <S.LinkMenu href="#suitcase">
            <S.ListItemMenu>
              <SuitCaseIcon />
            </S.ListItemMenu>
          </S.LinkMenu>
          <S.LinkMenu href="#projects">
            <S.ListItemMenu>
              <SkillsIcon />
            </S.ListItemMenu>
          </S.LinkMenu>
        </S.MenuList>
      </S.NavigationWrapper>
      <S.ButtonWrapper>
        <CustomizeMiniButton text="Resumo" />
      </S.ButtonWrapper>
    </S.HeaderContainer>
  )
}
