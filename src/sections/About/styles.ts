import styled from "styled-components";
import arrowLed from "../../assets/arrow-led.svg";

export const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 150px;
  position: relative;
  height:100vh;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const ImagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 400px;
  padding: 5px;
  background-color: ${(props) => props.theme["red-400"]};
`;

export const ImagWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 380px;
  
  padding: 5px;
  background-color: ${(props) => props.theme["gray-800"]};
`;

export const ImagWrapper1 = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 10vh;
  border-radius: 420px;
  padding: 5px;
  filter: drop-shadow(0px 0px 15px #ca3e47);
`;

export const CableWrapper = styled.div`
  position: absolute;
  top: 21vh;
  display: flex;
  right: 21vw;
  align-items: baseline;
  flex-direction: column;
  flex: 1;
`;

export const TecnologiesText = styled.span`
  color: ${(props) => props.theme["gray-500"]};
  display: flex;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background: url(${arrowLed}) no-repeat;
  }
`;

export const TecnologiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  padding: 30px 0;
`;
