import { ConteudoContainer, DetalheLinha, FaleConoscoLink, InputCelular, InputCep, InputCpf, InputEmail, InputFile, InputOrgaoExpedidorRg, InputPrice, InputRg, InputTelefone, InputText, NextButton, Title } from '@/components/core'
import { useCadastroDadosViewModel } from './cadastro-dados.view.model'
import { BsAsterisk } from 'react-icons/bs'

export const CadastroDados: React.FC = () => {
  const { formData: {
    cidade,
    comprovanteRenda,
    comprovanteResidencia,
    cpf,
    documentos,
    email,
    estado,
    nomeCompleto,
    numero,
    rendaMensal,
    telefone,
    bairro,
    cep,
    complemento,
    empresa,
    logradouro,
    orgaoExpedidorRg,
    profissao,
    rg,
    whatsApp
  }, handleChangeFormData } = useCadastroDadosViewModel()

  return (
    <ConteudoContainer>
      <FaleConoscoLink />
      <Title text='Informe seus dados:' className='mt-10' />
      <form className='w-full h-full gap-6 mt-5 grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
        <InputText
          placeholder='Nome completo:'
          required
          value={nomeCompleto}
          name='nomeCompleto'
          onChange={handleChangeFormData}
        />
        <InputCpf
          placeholder='CPF:'
          value={cpf}
          name='cpf'
          required
          onChange={handleChangeFormData}
        />
        <InputRg
          placeholder='RG'
          value={rg}
          name='rg'
          onChange={handleChangeFormData}
        />
        <InputOrgaoExpedidorRg
          placeholder='Orgão expedidor do RG'
          value={orgaoExpedidorRg}
          name='orgaoExpedidorRg'
          onChange={handleChangeFormData}
        />
        <InputTelefone
          placeholder='Telefone'
          required
          value={telefone}
          name='telefone'
          onChange={handleChangeFormData}
        />
        <InputCelular
          placeholder='WhatsApp:'
          value={whatsApp}
          name='whatsApp'
          onChange={handleChangeFormData}
        />
        <InputEmail
          placeholder='E-mail:'
          required
          value={email}
          name='email'
          onChange={handleChangeFormData}
        />
        <InputText
          placeholder='Profissão:'
          value={profissao}
          name='profissao'
          onChange={handleChangeFormData}
        />
        <InputText
          placeholder='Empresa:'
          value={empresa}
          name='empresa'
          onChange={handleChangeFormData}
        />
        <InputPrice
          placeholder='Renda mensal R$:'
          required
          value={rendaMensal}
          name='rendaMensal'
          onChange={handleChangeFormData}
        />
        <InputCep
          placeholder='CEP:'
          value={cep}
          name='cep'
          onChange={handleChangeFormData}
        />
        <InputText
          placeholder='Logradouro'
          value={logradouro}
          name='logradouro'
          onChange={handleChangeFormData}
        />
        <InputText
          placeholder='Bairro:'
          value={bairro}
          name='bairro'
          onChange={handleChangeFormData}
        />
        <InputText
          type='number'
          placeholder='Número:'
          required
          value={numero ?? ''}
          name='numero'
          onChange={handleChangeFormData}
        />
        <InputText
          placeholder='Complemento:'
          value={complemento}
          name='complemento'
          onChange={handleChangeFormData}
        />
        <InputText
          placeholder='Cidade'
          required
          value={cidade}
          name='cidade'
          onChange={handleChangeFormData}
        />
        <InputText
          placeholder='Estado:'
          required
          value={estado}
          name='estado'
          onChange={handleChangeFormData}
        />
      </form>
      <div className='flex gap-1 mt-7'>
        <BsAsterisk size={7} className='text-red-500 mt-[4px]' />
        <span className='text-md font-medium text-red-500'>Campos de preenchimento obrigatório</span>
      </div>
      <div className='flex gap-8 max-sm:flex-col mt-5'>
        <InputFile
          text='Anexar Comprovante de residência'
          files={comprovanteResidencia}
          name='comprovanteResidencia'
          className='max-w-[320px]'
          onChange={handleChangeFormData}
        />
        <InputFile
          text='Anexar Comprovante de renda'
          files={comprovanteRenda}
          name='comprovanteRenda'
          className='max-w-[285px]'
          onChange={handleChangeFormData}
        />
        <InputFile
          text='Anexar documentos'
          files={documentos}
          name='documentos'
          className='max-w-[225px]'
          onChange={handleChangeFormData}
          multiple
        />
      </div>
      <NextButton className='mt-7 max-w-[107px]' text='Avançar' />
      <DetalheLinha />
    </ConteudoContainer>
  )
}
