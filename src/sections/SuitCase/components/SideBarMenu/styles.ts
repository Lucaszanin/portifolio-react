import styled from "styled-components";

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
  color:${(props) =>
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
