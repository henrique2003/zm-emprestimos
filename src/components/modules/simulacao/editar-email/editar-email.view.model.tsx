import { ChangeEvent, useState } from 'react'
import { EditarEmailForm, EditarEmailViewModelReturn } from './editar-email.types'

export const useEditarEmailViewModel = (): EditarEmailViewModelReturn => {
  const [formData, setFormData] = useState<EditarEmailForm>({
    cpf: '',
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
