import { forwardRef } from 'react'
import { InputText } from '../input-text/input-text'
import { InputPriceProps } from './input-price.types'
import { useInputPriceViewModel } from './input-price.view.model'

export const InputPrice: React.FC<InputPriceProps> = forwardRef<HTMLInputElement, InputPriceProps>(({ className, onChange, value = '', error, ...res }, ref) => {
  const { handleChange, currentValue } = useInputPriceViewModel({ onChange, value })

  return (
    <InputText
      className={className}
      value={currentValue}
      onChange={handleChange}
      error={error}
      ref={ref}
      {...res}
    />
  )
})
