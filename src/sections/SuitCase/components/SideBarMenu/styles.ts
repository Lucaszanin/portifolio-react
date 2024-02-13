import styled from 'styled-components'
import arrowLed from '../../../../assets/arrow-led.svg'

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4.375rem;
`

export const Navigation = styled.nav`
  display: block;
  width: 100%;
`

type MenuItemProps = {
  isactive: boolean | string
}

export const MenuItem = styled.ul<MenuItemProps>`
  display: block;
  width: 4px;
  cursor: pointer;
  height: 3.125rem;
  background-color: ${(props) =>
    props.isactive ? props.theme['red-400'] : props.theme['gray-800']};
  color: ${(props) =>
    props.isactive ? props.theme['gray-100'] : props.theme['gray-500']};
`

export const ItemText = styled.li`
  color: ${(props) => props.theme['gray-500']};
  font-size: 1.25rem;

  padding: 0.75rem 1.5rem;
  width: 20vw;
  /* 1.625rem */
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

export const WrapperInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const HeaderInformations = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
