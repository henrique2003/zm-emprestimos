import { ConteudoContainer, DetalheLinha } from '@/components/core'
import { BsChatText } from 'react-icons/bs'

export const ConfirmacaoSolicitacao: React.FC = () => {
  return (
    <ConteudoContainer className='py-10'>
      <h3 className='text-xl text-dark font-semibold'>E-mail confirmado! Sua solicitação foi enviada com sucesso!</h3>
      <p className='text-xl text-gray-500 font-medium mt-5'>Estamos analisando sua solicitação em breve entraremos em contato.</p>
      <p className='text-xl text-gray-500 font-medium mt-7'>Caso, não entremos em contato com você nos próximos minutos, ligue no número: (00) 0000-0000, ou entre em contato pelo nosso CHAT.</p>
      <a href='/' className="flex gap-2 justify-center items-center max-w-[230px] ml-32 my-10">
        <BsChatText size={80} color='black' />
        <p className='text-xl font-semibold text-black'>Fale conosco!</p>
      </a>
      <p className='text-xl text-gray-500 font-medium'>Nosso horário de atendimento:</p>
      <p className='text-xl text-gray-500 font-medium ml-16'>SEG à SEX, das 08hs as 18:30hs.</p>
      <p className='text-xl text-gray-500 font-medium ml-16'>SAB, das  08hs as 14hs.</p>
      <p className='text-lg text-gray-500 font-medium mt-5'>Se sua simulação, foi feita fora do nosso horário de expediente, entraremos em contato no próximo dia útil.</p>
      <DetalheLinha />
    </ConteudoContainer >
  )
}
