import * as S from './CommonButton.styles'
import * as T from './CommonButton.types'

export const CommonButton = ({
  labelText,
  isActive,
  handleClick,
}: T.CommonButtonProps) => (
  <S.Button onClick={handleClick} $isactive={isActive}>
    {labelText}
  </S.Button>
)
