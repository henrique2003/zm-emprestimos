import { useState } from 'react'
import { ConteudoContainer, DetalheLinha, FaleConoscoLink, InputText, NextButton, Title } from '@/components/core'

export const EditarEmail: React.FC = () => {
  const [valor, setValor] = useState('')

  return (
    <ConteudoContainer>
      <FaleConoscoLink />
      <Title text='Crie seu login e senha:' className='mt-10' />
      <p className='text-md text-gray-500 my-5'>Utilize um e-mail valido, que você tenha acesso, pois será solicitada uma confirmação através deste e-mail</p>
      <InputText
        placeholder='Valor desejado R$:'
        className='max-w-[250px]'
        value={valor}
        onChange={e => setValor(e.target.value)}
      />
      <NextButton className='mt-16 max-w-[100px]' text='Confirmar alteração' />
      <DetalheLinha />
    </ConteudoContainer>
  )
}
