import { Link } from 'react-router-dom';
import { Button } from './button';

const SeeMore = ({ url }: { url: string }) => {
  return (
    <Button
      variant='link'
      className='underline text-mainPrimaryColor text-[18px] p-0'>
      <Link to={url}>See all</Link>
    </Button>
  );
};

export default SeeMore;
