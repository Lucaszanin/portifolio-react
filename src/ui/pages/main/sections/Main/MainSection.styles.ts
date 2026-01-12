import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6rem 12rem;
  @media (max-width: 1440px) {
    padding: 6rem;
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
`

export const ImagWrapper = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 3rem;
  z-index: -1;
`

export const TextWrapper = styled.div``

export const CableWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 17vh;
  flex-direction: column;
  height: 30vh;
  flex: 1;
  gap: 27px;
`
