import { linkObject } from '../types';
import LinkItem from './LinkItem';

type LinkListProps = {
  links: linkObject[];
};
const LinkList = ({ links }: LinkListProps) => {
  return (
    <ul className='flex items-center gap-5'>
      {links?.map((link: linkObject) => (
        <LinkItem
          link={link}
          key={link.path}
        />
      ))}
    </ul>
  );
};

export default LinkList;
