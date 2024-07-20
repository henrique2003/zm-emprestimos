import { InputText } from '../input-text/input-text';
import { InputEmailProps } from './input-email.types';

export const InputEmail: React.FC<InputEmailProps> = ({ ...res }) => {
  return (
    <InputText type='email' {...res} />
  )
}
