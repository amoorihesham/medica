import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchBox = () => {
  return (
    <div className='flex items-center'>
      <input
        type='text'
        placeholder='Search'
        className='px-3 py-2 rounded-tl-full rounded-bl-full outline-none text-gray-500 bg-whiteRedShade w-64'
      />
      <Button
        size='icon'
        variant='ghost'
        className='bg-primaryLighter rounded-none rounded-tr-full rounded-br-full px-7 flex items-center justify-center hover:bg-primaryLighter/50 hover:text-white transition-colors duration-300'>
        <Search size={10} />
      </Button>
    </div>
  );
};

export default SearchBox;
