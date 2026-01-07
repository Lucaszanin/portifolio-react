import { Fragment } from 'react'
import * as S from './styles'
import type * as T from './types'

export const CustomizeText = ({
  text,
  highlightColor,
}: T.CustomizeTextProps) => {
  const words = text?.split(' ')

  return (
    <S.TextContainer>
      <S.CustomizeTextStyles highlightColor={highlightColor}>
        {words?.map((word, index) => <Fragment key={index}>{word} </Fragment>)}
      </S.CustomizeTextStyles>
    </S.TextContainer>
  )
}
