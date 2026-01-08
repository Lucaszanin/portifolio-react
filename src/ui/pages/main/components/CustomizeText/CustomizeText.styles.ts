import styled from 'styled-components'

const TEXT_PROPS = {
  true: {
    color: 'red-400',
  },
} as const

type TextColorProps = {
  highlightColor?: string
}

export const CustomizeTextStyles = styled.p<TextColorProps>`
  color: ${(props) => props.theme['gray-300']};
  max-width: 50vw;
  white-space: pre-wrap;
  ${(props) =>
    props.highlightColor &&
    `
      color: ${
        props.theme[
          TEXT_PROPS[props.highlightColor as keyof typeof TEXT_PROPS]?.color
        ]
      };
    `};
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.75rem 0;
  width: 100%;
`
