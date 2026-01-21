import styled from 'styled-components'
import { ContentMenuProps } from './MobileMenu.types'

export const WrapperMenu = styled.div`
  display: none;

  @media (max-width: 475px) {
    display: flex;
    justify-content: flex-end;
  }
`
export const MenuButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

export const ContainerMenu = styled.div<ContentMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${(props) => props.theme['gray-900']};
  height: 350px;
  width: 250px;
  border-radius: 10px;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 999;

  overflow: hidden;

  max-height: ${(props) => (props.$isVisible ? '350px' : '0')};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};

  transition:
    max-height 3s ease,
    opacity 3s ease;

  pointer-events: ${(props) => (props.$isVisible ? 'auto' : 'none')};
`
export const HeaderMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
`
export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`
export const NavigationMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 1rem;
`

export const MenuList = styled.ul``

export const RedirectLinkItem = styled.a``

export const ItemMenu = styled.li`
  color: ${(props) => props.theme['gray-500']};
  font-size: 1.25rem;

  padding: 0.75rem;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme['red-400']};
  }
`
export const IconImage = styled.img``
