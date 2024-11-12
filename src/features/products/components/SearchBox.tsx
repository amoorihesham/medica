import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchBox = () => {
  return (
    <div className='w-1/2 mx-auto mt-5 flex items-center '>
      <input
        type='text'
        className='w-full rounded-none rounded-tl-xl rounded-bl-xl px-4 py-3 bg-slate-100 outline-none'
        placeholder='Search Products'
      />
      <Button
        size='icon'
        variant='default'
        className='w-16 h-12 rounded-none rounded-tr-xl rounded-br-xl '>
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchBox;
