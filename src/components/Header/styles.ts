import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 100%;
  background: ${(props) => props.theme["gray-800"]};
`;