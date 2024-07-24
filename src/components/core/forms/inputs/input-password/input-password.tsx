import { forwardRef } from 'react';
import { InputText } from '../input-text/input-text';
import { InputPasswordProps } from './input-password.types';

export const InputPassword: React.FC<InputPasswordProps> = forwardRef<HTMLInputElement, InputPasswordProps>(({ ...res }, ref) => {
  return (
    <InputText type='password' ref={ref} {...res} />
  )
})
