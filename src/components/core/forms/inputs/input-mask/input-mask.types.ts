import { ComponentProps } from 'react'
import { InputTextProps } from '../input-text/input-text.types'

export type InputMaskProps = ComponentProps<'input'> & InputTextProps & {
  mask: string
}
