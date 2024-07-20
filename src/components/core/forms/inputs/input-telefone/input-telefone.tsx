import { InputMask } from '../input-mask/input-mask'
import { InputTelefoneProps } from './input-telefone.types'

export const InputTelefone: React.FC<InputTelefoneProps> = ({ ...res }) => {
  return <InputMask {...res} mask='(99)9999-9999' />
}
