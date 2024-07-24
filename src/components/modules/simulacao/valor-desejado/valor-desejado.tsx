import { ConteudoContainer, FaleConoscoLink, InputPrice, NextButton, Title } from '@/components/core'
import { useValorDesejadoViewModel } from './valor-desejado-view-model'

export const ValorDesejado: React.FC = () => {
  const {
    handleChangeValorDesejadoForm,
    handleSubmitValorDesejadoForm,
    valor,
    formErros
  } = useValorDesejadoViewModel()

  return (
    <ConteudoContainer>
      <FaleConoscoLink />
      <Title text='Simule seu empréstimo:' className='mt-10' />
      <form onSubmit={handleSubmitValorDesejadoForm}>
        <InputPrice
          placeholder='Valor desejado R$:'
          className='max-w-[250px] mt-7'
          value={valor}
          onChange={handleChangeValorDesejadoForm}
          error={formErros.valor}
        />
        <NextButton
          className='mt-16 max-w-[100px]'
          text='Avançar'
          type='submit'
        />
      </form>
    </ConteudoContainer>
  )
}
