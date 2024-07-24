import { forwardRef } from 'react'
import { InputMask } from '../input-mask/input-mask'
import { InputCelularProps } from './input-celular.types'

export const InputCelular: React.FC<InputCelularProps> = forwardRef<HTMLInputElement, InputCelularProps>(({ ...res }, ref) => {
  return <InputMask {...res} ref={ref} mask='(99)9 9999-9999' />
})
