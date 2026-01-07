import * as S from './CommonButton.styles'
import * as T from './CommonButton.types'

export const CommonButton = ({ labelText }: T.CommonButtonProps) => (
  <a href="https://wa.me/5519998343873" target="_blank" rel="noreferrer ">
    <S.Button>{labelText}</S.Button>
  </a>
)
