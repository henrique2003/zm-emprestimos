import { forwardRef } from 'react';
import { InputText } from '../input-text/input-text';
import { InputEmailProps } from './input-email.types';

export const InputEmail: React.FC<InputEmailProps> = forwardRef<HTMLInputElement, InputEmailProps>(({ ...res }, ref) => {
  return (
    <InputText type='email' ref={ref} {...res} />
  )
})
