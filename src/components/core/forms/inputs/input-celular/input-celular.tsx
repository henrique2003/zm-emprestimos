import { InputMask } from '../input-mask/input-mask'
import { InputCelularProps } from './input-celular.types'

export const InputCelular: React.FC<InputCelularProps> = ({ ...res }) => {
  return <InputMask {...res} mask='(99)9 9999-9999' />
}
