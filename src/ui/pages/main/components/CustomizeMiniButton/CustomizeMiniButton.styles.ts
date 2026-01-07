import styled from 'styled-components'

export const CustomizeButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  background: ${(props) => props.theme['gray-900']};
  opacity: 0.8;
  border: 2px solid ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['red-400']};

  font-weight: 600;

  padding: 0.75rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 2px solid ${(props) => props.theme['red-400']};
    text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);
  }
`
