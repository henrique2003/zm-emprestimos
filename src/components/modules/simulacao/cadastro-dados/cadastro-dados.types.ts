import { ChangeEvent } from 'react'

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
  handleChangeFormData: (e: ChangeEvent<HTMLInputElement>) => void
  formData: CadastroDadosForm
}
