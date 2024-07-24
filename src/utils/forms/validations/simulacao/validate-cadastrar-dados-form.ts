import { CadastroDadosForm } from '@/components/modules/simulacao/cadastro-dados/cadastro-dados.types';
import { IFormError } from '../../types';
import { IFormResult } from '../../types/form-result';
import { FormResult } from '../../core';
import { Celular, Cpf, Email, Rg, Telefone } from '@/utils/object-values';

export const validateCadastrarDadosForm = (data: CadastroDadosForm): IFormResult<CadastroDadosForm> => {
  const errors: IFormError<CadastroDadosForm> = {
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
  };

  if (!data.nomeCompleto.trim()) {
    errors.nomeCompleto = 'Nome completo é obrigatório';
  }

  data.cpf = Cpf.limpar(data.cpf)
  if (!Cpf.validar(data.cpf)) {
    errors.cpf = 'CPF é obrigatório';
  }

  if (data.rg && data.rg.length > 0) {
    data.rg = Rg.limpar(data.rg)

    if (!Rg.validar(data.rg)) {
      errors.rg = 'Rg inválido'
    }
  }

  data.telefone = Telefone.limpar(data.telefone)
  if (!Telefone.validar(data.telefone)) {
    errors.telefone = 'Telefone é obrigatório';
  }

  if (data.whatsApp && data.whatsApp.trim().length > 0) {
    data.whatsApp = Celular.limpar(data.whatsApp)

    if (!Celular.validar(data.whatsApp)) {
      errors.whatsApp = 'WhatsApp inválido'
    }
  }

  if (!Email.validar(data.email)) {
    errors.email = 'Email inválido';
  }

  if (!data.rendaMensal.trim()) {
    errors.rendaMensal = 'Renda mensal é obrigatória';
  }

  if (data.numero === null) {
    errors.numero = 'Número é obrigatório';
  }

  if (!data.cidade.trim()) {
    errors.cidade = 'Cidade é obrigatória';
  }

  if (!data.estado.trim()) {
    errors.estado = 'Estado é obrigatório';
  }

  if (!(Object.values(errors).every((error) => error === ''))) {
    return FormResult.failure(errors)
  }

  return FormResult.success(data)
};
