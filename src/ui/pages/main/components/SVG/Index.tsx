import { svgsMap } from './contants'
import type * as T from './types'

export const SVG = ({ name }: T.SVGProps) => svgsMap[name]
