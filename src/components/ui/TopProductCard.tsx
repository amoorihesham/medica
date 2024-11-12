import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRightFromLineIcon, Heart } from 'lucide-react';

const TopProductCard = () => {
  return (
    <div className='bg-white p-3 rounded-xl shadow-md min-w-[250px]'>
      <div className='flex justify-between items-center'>
        <Badge
          variant='default'
          className='text-md bg-greenShade rounded-md hover:bg-greenShade'>
          20% off
        </Badge>
        <Heart size={20} />
      </div>
      <img
        src='/drug.png'
        alt='products image'
        className='w-full mx-auto'
      />
      <Separator className='my-3' />
      <h6 className='text-[22px] font-bold text-mainPrimaryColor'>Gut & Immunity</h6>

      <div className='flex justify-between items-center'>
        <p>Start From: 55</p>
        <Button
          className='bg-greenLemonade text-black hover:bg-greenShade'
          size='icon'>
          <ArrowRightFromLineIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default TopProductCard;
