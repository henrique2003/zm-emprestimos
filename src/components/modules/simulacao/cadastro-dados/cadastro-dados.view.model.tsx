import { ChangeEvent, FormEvent, useState } from 'react'
import { CadastroDadosForm, CadastroDadosViewModelReturn } from './cadastro-dados.types'
import { IFormError } from '@/utils/forms/types'
import { validateCadastrarDadosForm } from '@/utils/forms/validations/simulacao/validate-cadastrar-dados-form'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const useCadastroDadosViewModel = (): CadastroDadosViewModelReturn => {
  const [cadastrarDadosform, setCadastrarDadosform] = useState<CadastroDadosForm>({
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

  const [formErros, setFormErrors] = useState<IFormError<CadastroDadosForm>>({
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
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
    comprovanteResidencia: '',
    comprovanteRenda: '',
    documentos: ''
  })

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  function handleChangeCadastrarDadosForm(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files) {
      return setCadastrarDadosform(prevState => {
        return {
          ...prevState,
          [e.target.name]: e.target.files
        }
      })
    }

    setCadastrarDadosform(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  async function handleSubmitCadastroDadosForm(e: FormEvent): Promise<void> {
    e.preventDefault()

    const validate = validateCadastrarDadosForm(cadastrarDadosform)
    if (!validate.valid) {
      setFormErrors(validate.errors)
      return
    }

    const valorSolicitado = searchParams.get('valor')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = {
      valorSolicitado,
      ...validate.data
    }

    setFormErrors({
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
      numero: '',
      complemento: '',
      cidade: '',
      estado: '',
      comprovanteResidencia: '',
      comprovanteRenda: '',
      documentos: ''
    })

    navigate('/confirmacao-solicitacao')
  }

  return {
    cadastrarDadosform,
    handleChangeCadastrarDadosForm,
    handleSubmitCadastroDadosForm,
    formErros
  }
}
