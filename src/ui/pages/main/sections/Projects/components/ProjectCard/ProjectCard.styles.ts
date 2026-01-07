import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['gray-800']};
  background: ${(props) => props.theme['gray-900']};
  opacity: 0.8;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.25);
`
