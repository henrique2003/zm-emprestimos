import { twMerge } from 'tailwind-merge';
import { TitleProps } from './title.types';

export const Title: React.FC<TitleProps> = ({ text, className, ...res }) => {
  return <h2 className={twMerge(
    'text-xl text-gray-600 font-medium',
    className
  )} {...res}>{text}</h2>
}
