import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 6rem 12rem;
`

export const SubtitleText = styled.h3`
  color: ${(props) => props.theme['gray-300']};
  font-size: 1.25rem;
  font-weight: 'regular';
  margin-bottom: 12px;
`

export const HeaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  img {
    position: absolute;
    bottom: 20px;
    right: 35px;
  }
`

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const NavBarWrapper = styled.div`
  padding: 44px 0;
`
export const HeaderContainer = styled.header``

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`
