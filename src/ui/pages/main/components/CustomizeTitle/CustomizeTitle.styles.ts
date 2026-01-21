import styled from 'styled-components'
import { TEXT_PROPS, type TextColorProps } from './CustomizeTitle.types'

export const Title = styled.h2<TextColorProps>`
  text-shadow: 0px 4px 40px rgba(202, 62, 71, 0.5);
  font-size: ${(props) => (props.$fontsize ? props.$fontsize : '3rem')};

  font-weight: ${(props) => props.$weight};

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
      border-color: ${(props) => props.theme['gray-300']};
    }
  }
  overflow: hidden;
  white-space: nowrap;
  ${(props) =>
    props.$animation &&
    `
    animation: write 4s steps(40) forwards infinite, blink 1s infinite;
    padding-right:0.313rem;
    border-right: 2px solid ${props.theme['gray-700']};
    `};

  color: ${(props) => props.theme[TEXT_PROPS[props.$textcolor]]};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 568px) {
    font-size: 2rem;
  }

  @media (max-width: 475px) {
    font-size: 1.8rem;
  }
`

const ALIGN_CONTAINER = {
  center: 'center',
  start: 'flex-start',
} as const

type TextContainerProps = {
  $align: keyof typeof ALIGN_CONTAINER
}

export const TitleContainer = styled.div<TextContainerProps>`
  display: flex;
  justify-content: ${(props) => (props.$align ? props.$align : 'center')};
  align-items: center;
`
