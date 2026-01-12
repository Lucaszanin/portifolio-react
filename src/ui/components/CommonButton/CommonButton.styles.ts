import styled from 'styled-components'

interface ButtonProps {
  isActive: boolean | string
}

export const Button = styled.button<ButtonProps>`
  border-radius: 6px;
  width: 100%;
  white-space: nowrap;
  padding: 10px 18px;
  border: 1px solid
    ${(props) =>
      props.isActive ? props.theme['red-400'] : props.theme['gray-600']};
  background-color: ${(props) => props.theme['gray-900']};
  color: ${(props) =>
    props.isActive ? props.theme['red-400'] : props.theme['gray-600']};
  opacity: 0.8;
  transition: all 0.3s ease;

  font-size: 1.25rem;

  line-height: normal;
  letter-spacing: 0.44px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(202, 62, 71, 0.7);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
