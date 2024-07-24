import { forwardRef } from 'react'
import { InputMask } from '../input-mask/input-mask'
import { InputCepProps } from './input-cep.types'

export const InputCep: React.FC<InputCepProps> = forwardRef<HTMLInputElement, InputCepProps>(({ ...res }, ref) => {
  return <InputMask {...res} ref={ref} mask='99999-999' />
})
