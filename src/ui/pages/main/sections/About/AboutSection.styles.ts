import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 12rem;
  @media (max-width: 1440px) {
    padding: 6rem;
  }
  @media (max-width: 768px) {
    padding: 3rem;
  }
  @media (max-width: 568px) {
    text-align: center;
    flex-direction: column-reverse;
    padding: 2rem;
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const ImagWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 25rem;
  padding: 0.313rem;
  background-color: ${(props) => props.theme['red-400']};
`

export const ImagWrapper2 = styled.div`
  display: flex;
  align-items: center;
  width: 18vw;
  justify-content: center;
  border-radius: 23.75rem;

  padding: 0.313rem;
  background-color: ${(props) => props.theme['gray-800']};
`

export const ImagWrapper1 = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  justify-content: center;
  flex: 1;
  margin-top: 10vh;
  border-radius: 26.25rem;
  padding: 0.313rem;
  filter: drop-shadow(0px 0px 10.313rem #ca3e47);
`

export const CableWrapper = styled.div`
  position: absolute;
  right: 100%;
  top: 0;
  img {
    width: 40vw;
  }
`

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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
        width: 40px;
        height: 40px;
        margin-right: 0;
      }
    }
  }
`

export const RightContent = styled.div`
  display: flex;
`

export const TecnologiesText = styled.span`
  color: ${(props) => props.theme['gray-500']};
  display: flex;
  position: relative;
  font-weight: 700;

  &::before {
    content: ' ';
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background: url('/arrow-led.svg') no-repeat;
    background-size: cover;
  }
`

export const TecnologiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.313rem;
  padding: 1.875rem 0;
  white-space: nowrap;
  @media (max-width: 568px) {
    justify-content: space-between;
  }
`
