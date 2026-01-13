import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  padding: 6rem 12rem;
  position: relative;
  @media (max-width: 1440px) {
    padding: 6rem;
  }
  @media (max-width: 768px) {
    padding: 3rem;
  }
  @media (max-width: 568px) {
    padding: 2rem;
    align-items: center;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  width: fit-content;
  h2 {
    width: fit-content;
    display: flex;
    align-items: center;
    &::before {
      content: ' ';
      display: block;
      margin-right: 10px;
      width: 50px;
      height: 50px;
      background: url('/arrow-heading-led.svg') no-repeat;
      background-size: cover;
      @media (max-width: 568px) {
        text-align: center;
        margin-right: 0;
        width: 40px;
        height: 40px;
      }
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  & img {
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const RightContent = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  z-index: -1;
  top: 100px;
  img {
    @media (max-width: 1023px) {
      opacity: 0.4;
    }
  }
`

export const WorkTitle = styled.span`
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.625rem;

  font-weight: 700;
`

export const EvidenceText = styled.span`
  color: ${(props) => props.theme['red-400']};
  font-size: 1.625rem;

  font-weight: 700;
`

export const WorkSubTitle = styled.p`
  color: ${(props) => props.theme['gray-500']};
  font-size: 1rem;
  font-weight: 300;
`
