import * as S from './styles'
import type * as T from './types'

export const CustomizeTitle =({text, textcolor, align,weight}:T.CustomizeTitleProps)=> {
  return (
    <S.TitleContainer align={align}><S.Title textcolor={textcolor} weight={weight}>{text}</S.Title></S.TitleContainer>
  )
}

