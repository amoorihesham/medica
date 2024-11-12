import { Link } from 'react-router-dom';
import { Globe, Home, ListOrdered, MapPin, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LinkList from './components/LinkList';
import SearchBox from './components/SearchBox';
import { linkObject } from './types';

const links: linkObject[] = [
  {
    text: 'Home',
    path: '/',
    icon: <Home size={20} />,
  },
  {
    text: 'Cart',
    path: '/cart',
    icon: <ShoppingCart size={20} />,
  },
  {
    text: 'Orders',
    path: '/orders',
    icon: <ListOrdered size={20} />,
  },
];
const DesktopNavbar = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-0 lg:gap-5'>
          <Link
            to='/'
            className='flex items-end gap-2'>
            <img
              src='/logo.png'
              alt='medica plus logo'
            />
            <h6>MedicaPlus</h6>
          </Link>
          <Button
            variant='ghost'
            size='sm'
            className='rounded-full hover:bg-primaryLighter/30 hover:text-white'>
            <MapPin size={10} />
            Deliver to
          </Button>
        </div>
        <div className='hidden md:flex gap-5 items-center'>
          <Button
            variant='secondary'
            className='rounded-full'
            size='sm'>
            <Plus size={10} />
            Bulk Request
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='rounded-full hover:bg-primaryLighter/30 hover:text-white'>
            <Globe size={10} />
            English
          </Button>
        </div>
      </div>
      <div className='mt-10 hidden md:flex items-center justify-between'>
        <LinkList links={links} />
        <SearchBox />
      </div>
    </div>
  );
};

export default DesktopNavbar;
