import { InputMask } from '../input-mask/input-mask'
import { InputOrgaoExpedidorRgProps } from './input-orgao-expedidor-rg.types'

export const InputOrgaoExpedidorRg: React.FC<InputOrgaoExpedidorRgProps> = ({ ...res }) => {
  return <InputMask {...res} mask='aaa' />
}
