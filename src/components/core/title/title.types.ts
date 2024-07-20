import { ComponentProps } from 'react'

export type TitleProps = ComponentProps<'h2'> & {
  text: string
}
