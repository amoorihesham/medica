import { NavLink } from 'react-router-dom';
import { linkObject } from '../types';

type LinkItemProps = {
  link: linkObject;
};
const LinkItem = ({ link }: LinkItemProps) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className='p-2 px-3  rounded-full flex items-center gap-2 text-md font-thin active:underline active:border-b border-primaryLighter hover:bg-primaryLighter/30 text-white transition-colors duration-300'>
        {link.icon}
        {link.text}
      </NavLink>
    </li>
  );
};

export default LinkItem;
