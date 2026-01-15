import styled from 'styled-components'
import arrowLed from '../../../../assets/arrow-led.svg'

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  width: 70vw;
  max-width: 100%;
  justify-content: space-between;
  margin-top: 4.375rem;

  @media (max-width: 568px) {
    flex-direction: column;
    width: 90vw;
  }
`

export const Navigation = styled.nav`
  display: block;
  width: 50vw;

  @media (max-width: 568px) {
    display: flex;
    justify-content: space-around;
  }
`

type MenuItemProps = {
  $isactive: boolean | string
}

export const MenuItem = styled.ul<MenuItemProps>`
  display: block;
  width: 4px;
  cursor: pointer;
  height: 3.125rem;
  background-color: ${(props) =>
    props.$isactive ? props.theme['red-400'] : props.theme['gray-800']};
  color: ${(props) =>
    props.$isactive ? props.theme['gray-100'] : props.theme['gray-500']};
`

export const ItemText = styled.li`
  color: ${(props) => props.theme['gray-500']};
  font-size: 1.25rem;

  padding: 0.75rem 1.5rem;
  width: 20vw;

  @media (max-width: 568px) {
    font-size: 1rem;
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

export const SpaceText = styled.div`
  display: flex;
  margin: 0.625rem 0;
  &::before {
    content: '';
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.813rem;
    background: url(${arrowLed}) no-repeat;
  }
`

export const WrapperContent = styled.div`
  display: block;
`
