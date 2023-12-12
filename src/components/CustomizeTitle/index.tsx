import * as S from './styles'
import type * as T from './types'

export const CustomizeTitle =({text}:T.CustomizeTitleProps)=> {
  return (
    <div><S.Title>{text}</S.Title></div>
  )
}

