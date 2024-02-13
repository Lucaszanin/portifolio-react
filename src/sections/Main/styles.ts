import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 7.5rem 0 0 10rem;
  height: 90vh;
  @media (max-width: 768px) {
    height: unset;
  }
`

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
`

export const ImageWrapper = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const TextWrapper = styled.div``

export const CableWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 17vh;
  width: 10vw;
  flex-direction: column;
  height: 30vh;
  flex: 1;
  gap: 27px;
`
