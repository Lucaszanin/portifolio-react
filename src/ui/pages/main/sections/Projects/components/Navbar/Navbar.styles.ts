import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 100%;
`
export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 568px) {
    justify-content: center;
  }
`

export const ListItem = styled.li`
  width: fit-content;
`
