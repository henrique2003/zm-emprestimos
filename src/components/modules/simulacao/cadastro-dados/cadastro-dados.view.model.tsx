import { ChangeEvent, useState } from 'react'
import { CadastroDadosForm, CadastroDadosViewModelReturn } from './cadastro-dados.types'

export const useCadastroDadosViewModel = (): CadastroDadosViewModelReturn => {
  const [formData, setFormData] = useState<CadastroDadosForm>({
    nomeCompleto: '',
    cpf: '',
    rg: '',
    orgaoExpedidorRg: '',
    telefone: '',
    whatsApp: '',
    email: '',
    profissao: '',
    empresa: '',
    rendaMensal: '',
    cep: '',
    logradouro: '',
    bairro: '',
    numero: null,
    complemento: '',
    cidade: '',
    estado: '',
    comprovanteResidencia: [],
    comprovanteRenda: [],
    documentos: []
  })

  function handleChangeFormData(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files) {
      return setFormData(prevState => {
        return {
          ...prevState,
          [e.target.name]: e.target.files
        }
      })
    }

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
