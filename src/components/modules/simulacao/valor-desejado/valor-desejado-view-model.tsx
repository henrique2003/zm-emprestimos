import { ChangeEvent, FormEvent, useState } from 'react'
import { ValorDesejadoForm, ValorDesejadoViewModelReturn } from './valor-desejado.types'
import { useNavigate } from 'react-router-dom'
import { FormError } from '@/components/core'

export const useValorDesejadoViewModel = (): ValorDesejadoViewModelReturn => {
  const [valorDesejadoForm, setValorDesejadoForm] = useState<ValorDesejadoForm>({
    valor: ''
  })
  const { valor } = valorDesejadoForm

  const [formErros, setFormErrors] = useState<FormError<ValorDesejadoForm>>({
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

    if (!valor) {
      setFormErrors({
        valor: 'Valor solicitado inválido'
      })

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
