import styled from "styled-components";
import arrowLed from "../../../../assets/arrow-led.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 70px;
`;

export const Navigation = styled.nav`
  display: block;
  width: 100%;
`;

type MenuItemProps = {
  isactive: boolean | string;
};

export const MenuItem = styled.ul<MenuItemProps>`
  display: block;
  width: 4px;
  cursor: pointer;
  height: 50px;
  background-color: ${(props) =>
    props.isactive ? props.theme["red-400"] : props.theme["gray-800"]};
  color: ${(props) =>
    props.isactive ? props.theme["gray-100"] : props.theme["gray-500"]};
`;

export const ItemText = styled.li`
  color: ${(props) => props.theme["gray-500"]};
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  padding: 12px 24px;
  width: 20vw;
  line-height: 130%; /* 26px */
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

export const SpaceText = styled.div`
  display: flex;
  margin: 10px 0;
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 13px;
    background: url(${arrowLed}) no-repeat;
  }
`;
