import { forwardRef } from 'react'
import { InputMask } from '../input-mask/input-mask'
import { InputRgProps } from './input-rg.types'

export const InputRg: React.FC<InputRgProps> = forwardRef<HTMLInputElement, InputRgProps>(({ ...res }, ref) => {
  return <InputMask mask='99.999.999-*' ref={ref} {...res} />
})
