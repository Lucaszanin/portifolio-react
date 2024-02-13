import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5.375rem;
  background: ${(props) => props.theme['gray-800']};
  position: fixed;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 0 4rem;
  }
  @media (max-width: 425px) {
    padding: 0 3rem;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`

export const ListItemMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0px 0px 15px #ca3e47);
    svg {
      path {
        fill: ${(props) => props.theme['red-400']};
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinkMenu = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`
