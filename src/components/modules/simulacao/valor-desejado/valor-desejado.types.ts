import { FormError } from '@/components/core'
import { ChangeEvent, FormEvent } from 'react'

export type ValorDesejadoForm = {
  valor: string
}

export type ValorDesejadoViewModelReturn = {
  valor: string
  handleChangeValorDesejadoForm(e: ChangeEvent<HTMLInputElement>): void
  handleSubmitValorDesejadoForm(e: FormEvent): void
  formErros: FormError<ValorDesejadoForm>
}
