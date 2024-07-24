import ReactInputMask from 'react-input-mask'
import { twMerge } from 'tailwind-merge'
import { InputMaskProps } from './input-mask.types'
import { BsAsterisk } from 'react-icons/bs'
import { forwardRef, LegacyRef } from 'react'

export const InputMask: React.FC<InputMaskProps> = forwardRef<HTMLInputElement, InputMaskProps>(({ mask, required, name, value, className, placeholder, error, onChange }, ref) => {
  return (
    <div className={twMerge(
      'w-full h-full flex flex-col relative',
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
        className={twMerge(
          'w-full h-full text-md outline-none shadow-none bg-transparent py-2 text-gray-500 border-b border-black pr-5',
          error && 'border-b-red-600'
        )}
        ref={ref as LegacyRef<ReactInputMask> | undefined}
      />
      {error && error.length > 0 ? (
        <span className='text-xs mt-1 text-red-600'>{error}</span>
      ) : (
        <div className='h-8'></div>
      )}
      {required && <BsAsterisk size={7} color='red' className='absolute top-4 right-3' />}
    </div>
  )
})
