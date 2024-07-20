import { ConteudoContainer, DetalheLinha, FaleConoscoLink, InputCpf, InputEmail, InputPassword, NextButton, Title } from '@/components/core'
import { MdModeEditOutline } from 'react-icons/md';
import { useEditarEmailViewModel } from './editar-email.view.model';

export const EditarEmail: React.FC = () => {
  const { formData: { confirmarSenha, cpf, email, senha }, handleChangeFormData } = useEditarEmailViewModel()

  return (
    <ConteudoContainer>
      <FaleConoscoLink />
      <Title text='Crie seu login e senha:' className='mt-10' />
      <p className='text-md text-gray-500 my-5'>Utilize um e-mail valido, que você tenha acesso, pois será solicitada uma confirmação através deste e-mail</p>
      <form className='w-full h-full flex flex-col gap-5'>
        <InputCpf
          placeholder='Digite seu CPF:'
          className='max-w-[250px]'
          value={cpf}
          name='cpf'
          onChange={handleChangeFormData}
        />
        <div className='flex gap-2 items-center justify-start'>
          <InputEmail
            placeholder='Digite seu Email:'
            className='max-w-[250px]'
            value={email}
            name='email'
            onChange={handleChangeFormData}
          />
          <button type='button' className='flex gap-2 items-center justify-center outline-none'>
            <MdModeEditOutline size={25} />
            <span className='text-md text-gray-500 font-normal'>Editar</span>
          </button>
        </div>
        <div className='flex gap-4 items-center justify-start'>
          <InputPassword
            placeholder='Senha:'
            className='max-w-[250px]'
            value={senha}
            name='senha'
            onChange={handleChangeFormData}
          />
          <InputPassword
            placeholder='Cofirmar a Senha:'
            className='max-w-[250px]'
            value={confirmarSenha}
            name='confirmarSenha'
            onChange={handleChangeFormData}
          />
        </div>
      </form>
      <NextButton className='mt-16 max-w-[200px]' text='Confirmar alteração' />
      <DetalheLinha />
    </ConteudoContainer>
  )
}
