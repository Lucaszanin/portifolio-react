import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 6rem 12rem;
  @media (max-width: 1440px) {
    padding: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 3rem;
  }
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
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`

export const NavBarWrapper = styled.div`
  padding: 44px 0;
`
export const HeaderContainer = styled.header``

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`
