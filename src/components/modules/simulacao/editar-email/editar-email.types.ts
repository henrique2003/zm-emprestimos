import { ChangeEvent } from 'react'

export type EditarEmailForm = {
  cpf: string,
  email: string
  senha: string
  confirmarSenha: string
}

export type EditarEmailViewModelReturn = {
  handleChangeFormData: (e: ChangeEvent<HTMLInputElement>) => void
  formData: EditarEmailForm
}
