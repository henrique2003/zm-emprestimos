import { Header } from '@/components/core'
import { CadastroDados, ConfirmacaoSolicitacao, ValorDesejado } from '@/components/modules/simulacao'
import { BrowserRouter, Route, Routes as RoutesDom } from 'react-router-dom'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesDom>
        <Route path="/" element={<ValorDesejado />} />
        <Route path="/cadastrar-dados" element={<CadastroDados />} />
        <Route path="/confirmacao-solicitacao" element={<ConfirmacaoSolicitacao />} />
      </RoutesDom>
    </BrowserRouter>
  )
}
