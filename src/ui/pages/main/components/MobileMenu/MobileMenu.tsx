import * as S from './MobileMenu.styles'
import MenuIcon from '../../assets/barra-de-menu.png'
import CloseIcon from '../../assets/close-icon.png'
import { useToggleMenu } from './hooks/useToggleMenu/useToggleMenu'
import { useOutsideClick } from './hooks/useOutsideClick/useOutsideClick'
import { useRef } from 'react'
import * as C from './MobileMenu.constants'

export const MobileMenu = () => {
  const { isVisible, closeMenu, toggleMenu } = useToggleMenu()

  const menuRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: menuRef,
    onOutsideClick: closeMenu,
  })

  return (
    <>
      <S.WrapperMenu>
        <S.MenuButton onClick={() => toggleMenu()}>
          <S.IconImage
            src={MenuIcon}
            alt="Icone em formato de hamburguer utilizado para abrir o menu"
          />
        </S.MenuButton>
      </S.WrapperMenu>

      {isVisible && (
        <S.ContainerMenu $isVisible={isVisible} ref={menuRef}>
          <S.HeaderMenu>
            <S.CloseButton onClick={() => closeMenu()}>
              <S.IconImage
                src={CloseIcon}
                alt="Icone com um X para fechar o menu"
              />
            </S.CloseButton>
          </S.HeaderMenu>
          <S.NavigationMenu>
            <S.MenuList onClick={() => closeMenu()}>
              {C.menuItems?.map((item) => (
                <S.RedirectLinkItem key={item.href} href={item.href}>
                  <S.ItemMenu>{item.label}</S.ItemMenu>
                </S.RedirectLinkItem>
              ))}
            </S.MenuList>
          </S.NavigationMenu>
        </S.ContainerMenu>
      )}
    </>
  )
}
