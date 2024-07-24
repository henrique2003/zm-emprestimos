import { IFormError } from '@/utils/forms/types'
import { ChangeEvent, FormEvent } from 'react'

export type CadastroDadosForm = {
  nomeCompleto: string
  cpf: string
  rg?: string
  orgaoExpedidorRg?: string
  telefone: string
  whatsApp?: string
  email: string
  profissao?: string
  empresa?: string
  rendaMensal: string
  cep?: string
  logradouro?: string
  bairro?: string
  numero: number | null
  complemento?: string
  cidade: string
  estado: string
  comprovanteResidencia: File[]
  comprovanteRenda: File[]
  documentos: File[]
}

export type CadastroDadosViewModelReturn = {
  handleChangeCadastrarDadosForm: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmitCadastroDadosForm(e: FormEvent): Promise<void>
  cadastrarDadosform: CadastroDadosForm
  formErros: IFormError<CadastroDadosForm>
}
