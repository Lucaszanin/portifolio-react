import * as S from './CustomizeTitle.styles'
import type * as T from './CustomizeTitle.types'

export const CustomizeTitle = ({
  text,
  textcolor,
  align,
  weight,
  animation,
  margin,
  fontSize,
}: T.CustomizeTitleProps) => {
  return (
    <S.TitleContainer $align={align}>
      <S.Title
        $animation={animation}
        $textcolor={textcolor}
        $weight={weight}
        $fontsize={fontSize}
        style={{ marginBottom: margin || 'unset' }}
      >
        {text}
      </S.Title>
    </S.TitleContainer>
  )
}
