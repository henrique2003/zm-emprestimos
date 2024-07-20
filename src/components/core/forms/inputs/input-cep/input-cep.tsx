import { InputMask } from '../input-mask/input-mask'
import { InputCepProps } from './input-cep.types'

export const InputCep: React.FC<InputCepProps> = ({ ...res }) => {
  return <InputMask {...res} mask='99999-999' />
}
