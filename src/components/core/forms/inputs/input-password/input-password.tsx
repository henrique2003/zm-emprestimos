import { InputText } from '../input-text/input-text';
import { InputPasswordProps } from './input-password.types';

export const InputPassword: React.FC<InputPasswordProps> = ({ ...res }) => {
  return (
    <InputText type='password' {...res} />
  )
}
