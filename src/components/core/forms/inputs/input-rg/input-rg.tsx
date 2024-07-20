import { InputMask } from '../input-mask/input-mask'
import { InputRgProps } from './input-rg.types'

export const InputRg: React.FC<InputRgProps> = ({ ...res }) => {
  return <InputMask {...res} mask='99.999.999-*' />
}
