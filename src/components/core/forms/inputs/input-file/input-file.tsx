import { CgSoftwareUpload } from 'react-icons/cg';
import { twMerge } from 'tailwind-merge';
import { InputFileProps } from './input-file.types';

export const InputFile: React.FC<InputFileProps> = ({ className, files, value, id, text, ...res }) => {
  return (
    <label htmlFor={id} className={twMerge(
      'w-full h-full flex items-center justify-center cursor-pointer gap-3 relative',
      className
    )}>
      <input
        type="file"
        id={id}
        className={'hidden'}
        value={value}
        {...res}
      />
      <CgSoftwareUpload size={27} className='text-black' />
      <p className='text-black text-md font-medium'>{text}</p>
      {files.length > 0 && <div className='absolute bg-black text-center text-[8px] font-semibold text-white w-[12px] h-[12px] rounded-[50%] right-[-5px] top-[-5px] leading-3'>{files.length}</div>}
    </label>
  )
}
