import styled from "styled-components";

export const WorkTitle = styled.span`
  color: ${(props) => props.theme["gray-100"]};
  font-family: 'Nunito',sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const EvidenceText = styled.span`
  color: ${(props) => props.theme["red-400"]};
  font-family: 'Nunito',sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const WorkSubTitle = styled.p`
  color: ${(props) => props.theme["gray-500"]};
  font-family: 'Nunito',sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
`;