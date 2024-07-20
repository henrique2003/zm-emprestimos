import { ComponentProps, ReactNode } from 'react'

export type ConteudoContainerProps = ComponentProps<'div'> & {
  children: ReactNode
}
