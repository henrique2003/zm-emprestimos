import { forwardRef } from 'react'
import { InputMask } from '../input-mask/input-mask'
import { InputTelefoneProps } from './input-telefone.types'

export const InputTelefone: React.FC<InputTelefoneProps> = forwardRef<HTMLInputElement, InputTelefoneProps>(({ ...res }, ref) => {
  return <InputMask {...res} ref={ref} mask='(99)9999-9999' />
})
