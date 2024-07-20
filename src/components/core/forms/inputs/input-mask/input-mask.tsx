import ReactInputMask from 'react-input-mask'
import { twMerge } from 'tailwind-merge'
import { InputMaskProps } from './input-mask.types'
import { BsAsterisk } from 'react-icons/bs'

export const InputMask: React.FC<InputMaskProps> = ({ mask, required, name, value, className, placeholder, onChange }) => {
  return (
    <div className={twMerge(
      'w-full h-full flex relative',
      className
    )}>
      <ReactInputMask
        type='text'
        placeholder={placeholder}
        maskChar=""
        name={name}
        value={value}
        onChange={onChange}
        mask={mask}
        className={'w-full h-full text-md outline-none shadow-none bg-transparent py-2 text-gray-500 border-b border-black pr-5'}
      />
      {required && <BsAsterisk size={7} color='red' className='absolute top-4 right-3' />}
    </div>
  )
}
