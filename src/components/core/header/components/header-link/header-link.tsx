import { HeaderLinkProps } from './header-link-types'

export const HeaderLink: React.FC<HeaderLinkProps> = ({ text, ...res }) => {
  return (
    <li>
      <a {...res} className='text-md text-white text-center font-medium cursor-pointer'>{text}</a>
    </li>
  )
}
