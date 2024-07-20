import { ChangeEvent, ComponentProps } from 'react';
import { InputTextProps } from '../input-text/input-text.types';

export type InputPriceProps = ComponentProps<'input'> & InputTextProps

export type InputPriceViewModelProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => ChangeEvent<HTMLInputElement> | void
  value: string | number | readonly string[]
}

export type InputPriceViewModelReturn = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  currentValue?: string
}