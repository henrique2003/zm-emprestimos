import { twMerge } from 'tailwind-merge';
import { BsAsterisk } from 'react-icons/bs';
import { InputTextProps } from './input-text.types';
import { forwardRef } from 'react';

export const InputText: React.FC<InputTextProps> = forwardRef<HTMLInputElement, InputTextProps>(({ className, required, error, ...res }, ref) => {
  return (
    <div className={twMerge(
      'w-full h-full flex flex-col relative',
      className
    )}>
      <input
        type="text"
        className={twMerge(
          'w-full h-full text-md outline-none shadow-none bg-transparent py-2 text-gray-500 border-b border-black pr-5',
          error && 'border-b-red-600'
        )}
        ref={ref}
        {...res}
      />
      {error && error.length > 0 && <span className='text-xs mt-1 text-red-600'>{error}</span>}
      {required && <BsAsterisk size={7} color='red' className='absolute top-4 right-3' />}
    </div>
  )
})
