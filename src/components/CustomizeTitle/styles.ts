import styled from "styled-components";

export const Title = styled.h1`
  text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);
  font-family: "Nunito", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme["red-400"]};
`;
