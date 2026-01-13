import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 6rem 12rem 0 12rem;
  @media (max-width: 1440px) {
    padding: 6rem;
  }
  @media (max-width: 768px) {
    padding: 3rem;
  }
  @media (max-width: 576px) {
    text-align: center;
    padding: 2rem;
  }
`
export const WrapperContent = styled.div`
  display: inline-block;
  position: relative;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
`
export const DescriptionText = styled.p`
  color: ${(props) => props.theme['gray-400']};
  width: 50vw;
  font-size: 1.35rem;
  text-align: center;
  font-weight: 'regular';
  margin-bottom: 12px;
  @media (max-width: 992px) {
    width: 60vw;
  }
`

export const ImagWrapper = styled.div`
  img {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    top: 200%;
    z-index: -1;

    transform: translate(-50%, -50%) rotate(90deg);

    @media (max-width: 992px) {
      opacity: 0.7;
      width: 40vw;
    }

    @media (max-width: 567px) {
      top: 140%;
    }
  }
`
