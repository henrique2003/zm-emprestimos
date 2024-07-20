import { ChangeEvent, useState } from 'react'
import { CadastroLoginForm, CadastroLoginViewModelReturn } from './cadastro-login.types'

export const useCadastroLoginViewModel = (): CadastroLoginViewModelReturn => {
  const [formData, setFormData] = useState<CadastroLoginForm>({
    email: '',
    senha: '',
    confirmarSenha: ''
  })

  function handleChangeFormData(e: ChangeEvent<HTMLInputElement>): void {
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  return {
    formData,
    handleChangeFormData
  }
}
