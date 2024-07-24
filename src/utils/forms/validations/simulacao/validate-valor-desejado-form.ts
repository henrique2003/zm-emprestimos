import { ValorDesejadoForm } from '@/components/modules/simulacao/valor-desejado/valor-desejado.types';
import { IFormResult } from '../../types/form-result';
import { IFormError } from '../../types';
import { FormResult } from '../../core';

export function validateValorDesejadoForm(data: ValorDesejadoForm): IFormResult<ValorDesejadoForm> {
  const errors: IFormError<ValorDesejadoForm> = {
    valor: ''
  }

  if (!data.valor) {
    errors.valor = 'Valor solicitado inválido'

    return FormResult.failure(errors)
  }

  return FormResult.success(data)
}
