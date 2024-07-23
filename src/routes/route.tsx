import { Header } from '@/components/core'
import { CadastroDados, CadastroLogin, ConfirmacaoSolicitacao, EditarEmail, ValorDesejado } from '@/components/modules/simulacao'
import { BrowserRouter, Route, Routes as RoutesDom } from 'react-router-dom'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesDom>
        <Route path="/" element={<ValorDesejado />} />
        <Route path="/editar-email" element={<EditarEmail />} />
        <Route path="/cadastrar-dados" element={<CadastroDados />} />
        <Route path="/cadastrar-login" element={<CadastroLogin />} />
        <Route path="/confirmacao-solicitacao" element={<ConfirmacaoSolicitacao />} />
      </RoutesDom>
    </BrowserRouter>
  )
}
