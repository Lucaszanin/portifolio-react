import styled from "styled-components";

const TEXT_PROPS = {
  true: {
    color: "red-400",
  },
} as const;

type TextColorProps = {
  highlightColor?: string;
};

export const CustomizeTextStyles = styled.p<TextColorProps>`
  font-family: "Nunito", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme["gray-300"]};
  max-width: 50vw;
  ${(props) =>
    props.highlightColor &&
    `
      color: ${
        props.theme[
          TEXT_PROPS[props.highlightColor as keyof typeof TEXT_PROPS]?.color
        ]
      };
    `};
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
