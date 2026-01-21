export type CustomizeTitleProps = {
  text: string
  margin?: string
  animation?: boolean | string
  textcolor: 'gray' | 'red'
  align: 'center' | 'start'
  weight: 'regular' | 'bold'
  fontSize?: string
}

export const TEXT_PROPS = {
  gray: 'gray-100',
  red: 'red-400',
  regular: '400',
  bold: '700',
}

export type TextColorProps = {
  $textcolor: keyof typeof TEXT_PROPS
  $weight: keyof typeof TEXT_PROPS
  $animation?: boolean | string
  $fontsize?: string
}
