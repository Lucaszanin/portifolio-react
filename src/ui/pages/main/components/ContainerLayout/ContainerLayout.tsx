import { ReactNode } from 'react'
import * as S from './ContainerLayout.styles'

type ContainerLayoutProps = {
  children: ReactNode
}

export const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return <S.Container>{children}</S.Container>
}
