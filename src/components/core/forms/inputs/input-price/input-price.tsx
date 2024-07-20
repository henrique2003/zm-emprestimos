import { InputText } from '../input-text/input-text'
import { InputPriceProps } from './input-price.types'
import { useInputPriceViewModel } from './input-price.view.model'

export const InputPrice: React.FC<InputPriceProps> = ({ className, onChange, value = '', ...res }) => {
  const { handleChange, currentValue } = useInputPriceViewModel({ onChange, value })

  return (
    <InputText
      className={className}
      {...res}
      value={currentValue}
      onChange={handleChange}
    />
  )
}
