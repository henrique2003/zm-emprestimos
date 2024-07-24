import { forwardRef } from 'react'
import { InputMask } from '../input-mask/input-mask'
import { InputOrgaoExpedidorRgProps } from './input-orgao-expedidor-rg.types'

export const InputOrgaoExpedidorRg: React.FC<InputOrgaoExpedidorRgProps> = forwardRef<HTMLInputElement, InputOrgaoExpedidorRgProps>(({ ...res }, ref) => {
  return <InputMask {...res} ref={ref} mask='aaa' />
})
