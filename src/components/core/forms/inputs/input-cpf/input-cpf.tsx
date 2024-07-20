import { InputMask } from '../input-mask/input-mask'
import { InputCpfProps } from './input-cpf.types'

export const InputCpf: React.FC<InputCpfProps> = ({ ...res }) => {
  return <InputMask {...res} mask='999.999.999-99' />
}
