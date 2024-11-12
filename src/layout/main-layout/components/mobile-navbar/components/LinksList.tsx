import { linkObject } from '../../desktop-navbar/types';
import ListItem from './ListItem';

type LinksListProps = { links: linkObject[] };
const LinksList = ({ links }: LinksListProps) => {
  return (
    <ul>
      {links.map((link) => (
        <ListItem
          key={link.path}
          link={link}
        />
      ))}
    </ul>
  );
};

export default LinksList;
