import * as S from './styles'
import type * as T from './types'

export const CustomizeTitle = ({
  text,
  textcolor,
  align,
  weight,
  animation,
  margin,
}: T.CustomizeTitleProps) => {
  return (
    <S.TitleContainer align={align}>
      <S.Title
        animation={animation}
        textcolor={textcolor}
        weight={weight}
        style={{ marginBottom: margin || 'unset' }}
      >
        {text}
      </S.Title>
    </S.TitleContainer>
  )
}
