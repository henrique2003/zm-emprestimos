import { BsFillPlusSquareFill } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'
import { NextButtonProps } from './next-button.types'

export const NextButton: React.FC<NextButtonProps> = ({ text, className, ...res }) => {
  return (
    <button
      className={twMerge(
        'flex bg-transparent gap-2 justify-center items-center w-full h-full',
        className
      )}
      {...res}
    >
      <BsFillPlusSquareFill size={20} color='black' />
      <span className='text-md font-medium'>{text}</span>
    </button>
  )
}
