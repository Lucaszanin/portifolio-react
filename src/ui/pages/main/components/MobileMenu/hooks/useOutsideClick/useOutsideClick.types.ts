import type { RefObject } from 'react'

export type UseOutsideClickProps = {
  ref: RefObject<HTMLElement>
  onOutsideClick: () => void
}
