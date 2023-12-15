import styled from "styled-components";

const TEXT_PROPS = {
  gray: "gray-100",
  red: "red-400",
  regular: "400",
  bold: "700",
} as const;

type TextColorProps = {
  textcolor: keyof typeof TEXT_PROPS;
  weight: keyof typeof TEXT_PROPS;
  animation?: boolean | string;
};

export const Title = styled.h1<TextColorProps>`
  text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);
  font-family: "Nunito", sans-serif;
  font-size: 48px;
  font-style: normal;
  padding-right: 5px;
  font-weight: ${(props) => props.weight};
  line-height: 130%;
  @keyframes write {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink {
    0%,
    50% {
      border-color: transparent;
    }
    51%,
    100% {
      border-color: ${(props) => props.theme["gray-300"]};
    }
  }
  overflow: hidden;
  white-space: nowrap;
  ${(props) =>
    props.animation &&
    `
    animation: write 4s steps(40) forwards, blink 1s infinite;
    padding-right:5px;
    border-right: 2px solid ${props.theme["gray-700"]};
    `};

  color: ${(props) => props.theme[TEXT_PROPS[props.textcolor]]};
`;

const ALIGN_CONTAINER = {
  center: "center",
  start: "flex-start",
} as const;

type TextContainerProps = {
  align: keyof typeof ALIGN_CONTAINER;
};

export const TitleContainer = styled.div<TextContainerProps>`
  display: flex;
  justify-content: ${(props) => props.align};
  align-items: center;

`;
