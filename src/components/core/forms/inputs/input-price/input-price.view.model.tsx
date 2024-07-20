import { ChangeEvent } from 'react'
import { InputPriceViewModelReturn, InputPriceViewModelProps } from './input-price.types'

export const useInputPriceViewModel = ({ onChange, value }: InputPriceViewModelProps): InputPriceViewModelReturn => {
  const prefix = 'R$ '

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!onChange) {
      return
    }

    const targetValue = e.target.value
    const numericValue = targetValue.replace(/[^0-9]/g, '')

    const cents = numericValue.slice(-2)
    let mainValue = numericValue.slice(0, -2) || '0'

    mainValue = String(parseInt(mainValue, 10))
    mainValue = mainValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    const formatted = `${mainValue || '0'},${cents}`

    e.target.value = formatted

    onChange(e)
  }

  return {
    handleChange,
    currentValue: value ? `${prefix}${value}` : '',
  }
}
