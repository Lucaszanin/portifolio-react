import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 120px 0 0 160px;
  position: relative;
  height: 90vh;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;

export const ImagWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CableWrapper = styled.div`
  position: absolute;
  top: 85px;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  height: 30vh;
  flex: 1;
  gap:27px;
  left: -120px;
`;
