import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 6rem 12rem;
  @media (max-width: 1440px) {
    padding: 6rem;
  }
  @media (max-width: 768px) {
    padding: 6rem 3rem;
  }
  @media (max-width: 668px) {
    padding: 6rem 2rem;
    text-align: center;
  }
  @media (max-width: 576px) {
    padding: 6rem 1rem 0 1rem;
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
  img {
    @media (max-width: 1023px) {
      opacity: 0.4;
    }
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    text-align: center;
    align-items: center;
  }
`

export const CableWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 17vh;
  z-index: -1;
  flex-direction: column;
  height: 30vh;
  flex: 1;
  gap: 1.6rem;
`
