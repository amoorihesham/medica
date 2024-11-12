import { ArrowRightFromLineIcon } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';
import { useAuthStatus } from '@/context/AuthContext';

const HotDealProductCard = () => {
  const { setModalOpen } = useAuthStatus();
  return (
    <div className='bg-white p-3 rounded-xl shadow-sm min-w-[250px]'>
      <Badge
        variant='text'
        className='text-md'>
        20% off
      </Badge>
      <img
        src='/drug.png'
        alt='products image'
      />
      <h6 className='text-[22px] font-bold text-mainPrimaryColor'>Gut & Immunity</h6>
      <p className='text-[18px] font-thin text-mainPrimaryColor'>Details about the product </p>
      <Badge
        variant='outline'
        className='mt-3 font-bold border-none text-xl p-0'>
        500 EGP
      </Badge>
      <Button
        className='bg-greenShade rounded-full w-full mt-3 hover:bg-[#3ddb9c]'
        onClick={() => setModalOpen(true)}>
        Order Now <ArrowRightFromLineIcon size={20} />
      </Button>
    </div>
  );
};

export default HotDealProductCard;
