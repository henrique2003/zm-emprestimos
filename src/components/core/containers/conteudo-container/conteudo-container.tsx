import { twMerge } from 'tailwind-merge'
import { ConteudoContainerProps } from './conteudo-container.types'

export const ConteudoContainer: React.FC<ConteudoContainerProps> = ({ children, className, ...res }) => {
  return (
    <div {...res} className={twMerge(
      'w-full h-full px-7 py-6',
      className
    )}>
      {children}
    </div>
  )
}
