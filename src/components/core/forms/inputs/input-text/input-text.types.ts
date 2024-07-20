import { ComponentProps } from 'react';

export type InputTextProps = ComponentProps<'input'> & {
  required?: boolean
}
