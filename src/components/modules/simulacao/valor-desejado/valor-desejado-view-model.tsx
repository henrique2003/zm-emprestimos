import { ChangeEvent, FormEvent, useState } from 'react'
import { ValorDesejadoForm, ValorDesejadoViewModelReturn } from './valor-desejado.types'
import { useNavigate } from 'react-router-dom'
import { IFormError } from '@/utils/forms/types'
import { validateValorDesejadoForm } from '@/utils/forms/validations/simulacao'

export const useValorDesejadoViewModel = (): ValorDesejadoViewModelReturn => {
  const [valorDesejadoForm, setValorDesejadoForm] = useState<ValorDesejadoForm>({
    valor: ''
  })
  const { valor } = valorDesejadoForm

  const [formErros, setFormErrors] = useState<IFormError<ValorDesejadoForm>>({
    valor: ''
  })

  const navigate = useNavigate()

  function handleChangeValorDesejadoForm(e: ChangeEvent<HTMLInputElement>): void {
    setValorDesejadoForm(() => {
      return {
        valor: e.target.value
      }
    })
  }

  function handleSubmitValorDesejadoForm(e: FormEvent): void {
    e.preventDefault()

    const validate = validateValorDesejadoForm(valorDesejadoForm)
    if (!validate.valid) {
      setFormErrors(validate.errors)
      return
    }

    navigate('/cadastrar-dados')
  }

  return {
    valor,
    handleChangeValorDesejadoForm,
    handleSubmitValorDesejadoForm,
    formErros
  }
}
