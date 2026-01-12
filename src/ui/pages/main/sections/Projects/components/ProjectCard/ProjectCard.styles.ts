import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  width: 320px;
  height: 391px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['gray-800']};
  background: ${(props) => props.theme['gray-900']};
  opacity: 0.9;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(202, 62, 71, 0.7);
  }
`

export const CardLink = styled.a``

export const Divider = styled.div`
  width: 60px;
  height: 2px;
  margin-top: 5px;
  background: ${(props) => props.theme['gray-800']};
`

export const ImageWrapper = styled.div`
  padding-bottom: 1rem;
  width: 292px;
  img {
    border-radius: 10px;
    opacity: 0.9;
    transition: all 0.3s ease;
    &:hover {
      opacity: 110%;
    }
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme['gray-100']};
  stroke: ${(props) => props.theme['gray-800']};
  line-height: 110%;
  font-weight: bold;
  font-size: 1.25rem;
`

export const DescriptionText = styled.p`
  color: ${(props) => props.theme['gray-500']};
  line-height: 1.5;
  font-size: 1rem;
  padding: 0.938rem 0 0.563rem 0;
`

export const TecnologiesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const TecnologiesText = styled.span`
  color: ${(props) => props.theme['red-200']};
  stroke: ${(props) => props.theme['gray-800']};
  font-weight: lighter;
  font-size: 0.875rem;
  padding: 0.938rem 0 0.563rem 0;
`
