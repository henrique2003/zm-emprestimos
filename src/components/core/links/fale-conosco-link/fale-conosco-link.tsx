import { BsChatText } from 'react-icons/bs'

export const FaleConoscoLink: React.FC = () => {
  return (
    <div className="flex gap-2 justify-center items-center max-w-[155px]">
      <BsChatText size={30} color='black' />
      <p className='text-lg font-medium text-red-500'>Fale conosco</p>
    </div>
  )
}
