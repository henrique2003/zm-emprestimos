import { ComponentProps } from 'react';

export type InputEmailProps = ComponentProps<'input'> & {
  required?: boolean
}
