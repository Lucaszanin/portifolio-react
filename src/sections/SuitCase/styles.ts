import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 150px;
  position: relative;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  & img {
    margin-bottom: -3vh;
    margin-left:100%;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;

export const WorkTitle = styled.span`
  color: ${(props) => props.theme["gray-100"]};
  font-family: "Nunito", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const EvidenceText = styled.span`
  color: ${(props) => props.theme["red-400"]};
  font-family: "Nunito", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const WorkSubTitle = styled.p`
  color: ${(props) => props.theme["gray-500"]};
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
`;
