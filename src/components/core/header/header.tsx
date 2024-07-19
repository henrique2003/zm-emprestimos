import { logo } from '@/assets/images'
import { HeaderLink } from './components'

export const Header: React.FC = () => {
  return (
    <header className="h-30 flex justify-between bg-red-600 items-center px-20 py-5 w-full">
      <img src={logo} alt="Logo ZM emprestimos" title="Logo ZM emprestimos" className='max-w-[150px]' />
      <ul className='flex gap-10'>
        <HeaderLink
          text='A ZM'
        />
        <HeaderLink
          text='Como Contratar'
        />
        <HeaderLink
          text='Simule Seu Crédito'
        />
        <HeaderLink
          text='Ajuda'
        />
      </ul>
      <div></div>
    </header>
  )
}
