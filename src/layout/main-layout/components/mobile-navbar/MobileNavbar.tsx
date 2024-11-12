import { Globe, Home, ListOrdered, Menu, Plus, ShoppingCart, User } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { linkObject } from '../desktop-navbar/types';
import LinksList from './components/LinksList';
import { Button } from '@/components/ui/button';
import { useAuthStatus } from '@/context/AuthContext';
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
const MobileNavbar = () => {
  const { authStatus, setModalOpen } = useAuthStatus();
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <Menu size={25} />
        </SheetTrigger>
        <SheetContent className='w-[250px]'>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Medica+ navigation links</SheetDescription>
            <LinksList links={links} />
            <Button variant='ghost'>
              <Globe size={15} />
              Language
            </Button>
            <Button
              variant='default'
              className='bg-greenLemonade text-black hover:bg-green-500 hover:text-white transition-colors duration-300'>
              <Plus size={15} />
              Bulk Request
            </Button>
            <Button
              variant='secondary'
              onClick={() => setModalOpen(true)}>
              <User size={15} />
              {authStatus === 'register' ? 'Register' : 'Login'}
            </Button>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
