import { ComponentProps } from 'react';

export type InputFileProps = ComponentProps<'input'> & {
  text: string
  files: File[]
}
