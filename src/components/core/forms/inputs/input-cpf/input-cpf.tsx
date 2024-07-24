import { forwardRef } from 'react'
import { InputMask } from '../input-mask/input-mask'
import { InputCpfProps } from './input-cpf.types'

export const InputCpf: React.FC<InputCpfProps> = forwardRef<HTMLInputElement, InputCpfProps>(({ ...res }, ref) => {
  return <InputMask ref={ref} mask='999.999.999-99' {...res} />
})
