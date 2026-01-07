import * as S from './CustomizeMiniButton.styles'
import * as T from './CustomizeMiniButton.types'

export const CustomizeMiniButton = ({ text }: T.CustomizeMiniButtonProps) => {
  return <S.CustomizeButton>{text}</S.CustomizeButton>
}
