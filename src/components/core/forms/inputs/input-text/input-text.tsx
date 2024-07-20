import { twMerge } from 'tailwind-merge';
import { BsAsterisk } from 'react-icons/bs';
import { InputTextProps } from './input-text.types';

export const InputText: React.FC<InputTextProps> = ({ className, required, ...res }) => {
  return (
    <div className={twMerge(
      'w-full h-full flex relative',
      className
    )}>
      <input type="text" className={'w-full h-full text-md outline-none shadow-none bg-transparent py-2 text-gray-500 border-b border-black pr-5'}
        {...res}
      />
      {required && <BsAsterisk size={7} color='red' className='absolute top-4 right-3' />}
    </div>
  )
}
