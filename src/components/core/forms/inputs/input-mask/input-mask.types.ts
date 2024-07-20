import { ComponentProps } from 'react'

export type InputMaskProps = ComponentProps<'input'> & {
  mask: string
  required?: boolean
}
