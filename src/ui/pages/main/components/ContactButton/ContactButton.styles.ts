import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 15px;
  width: 21.5rem;
  margin-top: 2rem;
  height: 4.313rem;
  border: 1px solid ${(props) => props.theme['red-400']};
  background: ${(props) => props.theme['gray-900']};
  opacity: 0.9;
  transition: all 0.3s ease;
  color: ${(props) => props.theme['gray-300']};

  font-size: 1.375rem;

  line-height: normal;
  letter-spacing: 0.44px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(202, 62, 71, 0.7);
  }
`
