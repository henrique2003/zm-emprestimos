import { ConteudoContainer, DetalheLinha, FaleConoscoLink, InputPrice, NextButton, Title } from '@/components/core'
import { useState } from 'react'

export const ValorDesejado: React.FC = () => {
  const [valor, setValor] = useState('')

  return (
    <ConteudoContainer>
      <FaleConoscoLink />
      <Title text='Simule seu empréstimo:' className='mt-10' />
      <InputPrice
        placeholder='Valor desejado R$:'
        className='max-w-[250px] mt-7'
        value={valor}
        onChange={e => setValor(e.target.value)}
      />
      <p className='text-md text-gray-500 mt-16 cursor-pointer hover:underline'>Caso já tenha feito uma solicitação e não tenha recebido um contato e queira validar o e-mail preenchido, clique aqui.</p>
      <NextButton className='mt-16 max-w-[100px]' text='Avançar' />
      <DetalheLinha />
    </ConteudoContainer>
  )
}
