import * as S from './MobileMenu.styles'
import MenuIcon from '../../assets/barra-de-menu.png'
import CloseIcon from '../../assets/close-icon.png'
import { useState } from 'react'

export const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <S.WrapperMenu>
        <S.MenuButton onClick={() => setIsVisible((prev) => !prev)}>
          <img src={MenuIcon} alt="" />
        </S.MenuButton>
      </S.WrapperMenu>

      {isVisible && (
        <S.ContainerMenu $isVisible={isVisible}>
          <S.HeaderMenu>
            <S.CloseButton onClick={() => setIsVisible(false)}>
              <img src={CloseIcon} alt="" />
            </S.CloseButton>
          </S.HeaderMenu>
          <S.NavigationMenu>
            <ul onClick={() => setIsVisible(false)}>
              <S.RedirectLinkItem href="#home">
                <S.ItemMenu>Home</S.ItemMenu>
              </S.RedirectLinkItem>
              <S.RedirectLinkItem href="#about">
                <S.ItemMenu>About Me</S.ItemMenu>
              </S.RedirectLinkItem>
              <S.RedirectLinkItem href="#suitcase">
                <S.ItemMenu>Work Experience</S.ItemMenu>
              </S.RedirectLinkItem>
              <S.RedirectLinkItem href="#projects">
                <S.ItemMenu>Projects</S.ItemMenu>
              </S.RedirectLinkItem>
              <S.RedirectLinkItem href="#contact">
                <S.ItemMenu>Contact Me</S.ItemMenu>
              </S.RedirectLinkItem>
            </ul>
          </S.NavigationMenu>
        </S.ContainerMenu>
      )}
    </>
  )
}
