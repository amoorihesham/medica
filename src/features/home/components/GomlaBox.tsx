import { Button } from '@/components/ui/button';

const GomlaBox = () => {
  return (
    <div className='bg-[#EAF2FF] rounded-xl p-5 relative w-full md:w-1/2'>
      <h4 className='text-[#1648CE] text-[26px] md:text-[36px] font-semibold'>Gomla</h4>
      <p className='text-[22px] md:text-[28px] text-[#00000099] max-w-[420px] font-light'>
        Now you can order from our store with good prices Now you can order from our store with good prices
      </p>
      <Button className='mt-5 rounded-full bg-[#1648CE] px-5 hover:bg-[#254085]'>Order Now</Button>
      <img
        src='/pill.png'
        alt='Gomla Icon'
        className='absolute bottom-5 md:bottom-2 right-4 md:right-10 w-14 md:w-32'
      />
    </div>
  );
};

export default GomlaBox;
