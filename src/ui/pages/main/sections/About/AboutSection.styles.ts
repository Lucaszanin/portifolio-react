import styled from 'styled-components'
import arrowLed from '../../../assets/arrow-led.svg'

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12rem;
`

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const ImagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 25rem;
  padding: 0.313rem;
  background-color: ${(props) => props.theme['red-400']};
`

export const ImagWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 23.75rem;

  padding: 0.313rem;
  background-color: ${(props) => props.theme['gray-800']};
`

export const ImagWrapper1 = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 10vh;
  border-radius: 26.25rem;
  padding: 0.313rem;
  filter: drop-shadow(0px 0px 10.313rem #ca3e47);
`

export const CableWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-top: 0.5rem;
`

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TecnologiesText = styled.span`
  color: ${(props) => props.theme['gray-500']};
  display: flex;

  font-weight: 700;

  &::before {
    content: '';
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background: url(${arrowLed}) no-repeat;
  }
`

export const TecnologiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.313rem;
  padding: 1.875rem 0;
`
