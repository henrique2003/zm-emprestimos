import { ConteudoContainer, DetalheLinha, FaleConoscoLink, InputEmail, InputPassword, NextButton, Title } from '@/components/core'
import { useCadastroLoginViewModel } from './cadastro-login.view.model'
import { Link } from 'react-router-dom'

export const CadastroLogin: React.FC = () => {
  const { formData: { confirmarSenha, email, senha }, handleChangeFormData } = useCadastroLoginViewModel()

  return (
    <ConteudoContainer>
      <FaleConoscoLink />
      <Title text='Crie seu login e senha:' className='mt-10' />
      <p className='text-md text-gray-500 my-5'>Utilize um e-mail valido, que você tenha acesso, pois será solicitada uma confirmação através deste e-mail</p>
      <form className='w-full h-full flex flex-col gap-5'>
        <InputEmail
          placeholder='Digite seu Email:'
          className='max-w-[250px]'
          value={email}
          name='email'
          onChange={handleChangeFormData}
        />
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
      <Link to='/confirmacao-solicitacao'>
        <NextButton className='mt-16 max-w-[107px]' text='Cadastrar' />
      </Link>
      <DetalheLinha />
    </ConteudoContainer>
  )
}
