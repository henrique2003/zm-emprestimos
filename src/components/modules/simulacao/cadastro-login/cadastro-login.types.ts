import { ChangeEvent } from 'react'

export type CadastroLoginForm = {
  email: string
  senha: string
  confirmarSenha: string
}

export type CadastroLoginViewModelReturn = {
  handleChangeFormData: (e: ChangeEvent<HTMLInputElement>) => void
  formData: CadastroLoginForm
}
