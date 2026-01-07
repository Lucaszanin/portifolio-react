import styled from 'styled-components'

interface ButtonProps {
  backgroundColor?: string
}

export const Button = styled.button<ButtonProps>`
  border-radius: 6px;
  width: 100%;
  padding: 10px 18px;
  border: 1px solid ${(props) => props.theme['red-400']};
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  opacity: 0.8;
  transition: all 0.3s ease;
  color: ${(props) => props.theme['gray-300']};

  font-size: 1.25rem;

  line-height: normal;
  letter-spacing: 0.44px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(202, 62, 71, 0.7);
  }
`
