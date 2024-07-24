import { ConteudoContainer, FaleConoscoLink, InputCelular, InputCep, InputCpf, InputEmail, InputFile, InputOrgaoExpedidorRg, InputPrice, InputRg, InputTelefone, InputText, NextButton, Title } from '@/components/core'
import { useCadastroDadosViewModel } from './cadastro-dados.view.model'
import { BsAsterisk } from 'react-icons/bs'

export const CadastroDados: React.FC = () => {
  const {
    formErros,
    cadastrarDadosform,
    handleChangeCadastrarDadosForm,
    handleSubmitCadastroDadosForm
  } = useCadastroDadosViewModel()

  return (
    <ConteudoContainer>
      <FaleConoscoLink />
      <Title text='Informe seus dados:' className='mt-10' />
      <form
        onSubmit={handleSubmitCadastroDadosForm}
      >
        <div
          className='w-full h-full gap-x-6 gap-y-2 mt-5 grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1'
        >
          <InputText
            placeholder='Nome completo:'
            required
            value={cadastrarDadosform.nomeCompleto}
            error={formErros.nomeCompleto}
            name='nomeCompleto'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputCpf
            placeholder='CPF:'
            value={cadastrarDadosform.cpf}
            error={formErros.cpf}
            name='cpf'
            required
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputRg
            placeholder='RG'
            value={cadastrarDadosform.rg}
            error={formErros.rg}
            name='rg'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputOrgaoExpedidorRg
            placeholder='Orgão expedidor do RG'
            value={cadastrarDadosform.orgaoExpedidorRg}
            error={formErros.orgaoExpedidorRg}
            name='orgaoExpedidorRg'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputTelefone
            placeholder='Telefone'
            required
            value={cadastrarDadosform.telefone}
            error={formErros.telefone}
            name='telefone'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputCelular
            placeholder='WhatsApp:'
            value={cadastrarDadosform.whatsApp}
            error={formErros.whatsApp}
            name='whatsApp'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputEmail
            placeholder='E-mail:'
            required
            value={cadastrarDadosform.email}
            error={formErros.email}
            name='email'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            placeholder='Profissão:'
            value={cadastrarDadosform.profissao}
            error={formErros.profissao}
            name='profissao'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            placeholder='Empresa:'
            value={cadastrarDadosform.empresa}
            error={formErros.empresa}
            name='empresa'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputPrice
            placeholder='Renda mensal R$:'
            required
            value={cadastrarDadosform.rendaMensal}
            error={formErros.rendaMensal}
            name='rendaMensal'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputCep
            placeholder='CEP:'
            value={cadastrarDadosform.cep}
            error={formErros.cep}
            name='cep'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            placeholder='Logradouro'
            value={cadastrarDadosform.logradouro}
            error={formErros.logradouro}
            name='logradouro'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            placeholder='Bairro:'
            value={cadastrarDadosform.bairro}
            error={formErros.bairro}
            name='bairro'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            type='number'
            placeholder='Número:'
            required
            value={cadastrarDadosform.numero as number}
            name='numero'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            placeholder='Complemento:'
            value={cadastrarDadosform.complemento}
            error={formErros.complemento}
            name='complemento'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            placeholder='Cidade'
            required
            value={cadastrarDadosform.cidade}
            error={formErros.cidade}
            name='cidade'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputText
            placeholder='Estado:'
            required
            value={cadastrarDadosform.estado}
            error={formErros.estado}
            name='estado'
            onChange={handleChangeCadastrarDadosForm}
          />
        </div>
        <div className='flex gap-1 mt-7'>
          <BsAsterisk size={7} className='text-red-500 mt-[4px]' />
          <span className='text-md font-medium text-red-500'>Campos de preenchimento obrigatório</span>
        </div>
        <div className='flex gap-8 max-sm:flex-col mt-5'>
          <InputFile
            text='Anexar Comprovante de residência'
            files={cadastrarDadosform.comprovanteResidencia}
            name='comprovanteResidencia'
            className='max-w-[320px]'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputFile
            text='Anexar Comprovante de renda'
            files={cadastrarDadosform.comprovanteRenda}
            name='comprovanteRenda'
            className='max-w-[285px]'
            onChange={handleChangeCadastrarDadosForm}
          />
          <InputFile
            text='Anexar documentos'
            files={cadastrarDadosform.documentos}
            name='documentos'
            className='max-w-[225px]'
            onChange={handleChangeCadastrarDadosForm}
            multiple
          />
        </div>
        <NextButton
          className='mt-7 max-w-[107px]'
          text='Avançar'
          type='submit'
        />
      </form>
    </ConteudoContainer>
  )
}
