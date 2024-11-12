import { Check, HeartPulse, LucideMove, RadioTower } from 'lucide-react';
import CategoryItem from './category-item/CategoryItem';

const CatrgoriesNav = () => {
  return (
    <div className=' shadow-md w-full py-2 mb-10'>
      <div className='container'>
        <div className='flex gap-2 items-center'>
          <CategoryItem
            category={{
              name: 'Health',
              id: 1,
              icon: <HeartPulse size={10} />,
              subCategories: [
                {
                  name: 'Heart',
                  id: 1,
                  icon: <RadioTower size={10} />,
                  category: 'health',
                },
              ],
            }}
          />
          <CategoryItem
            category={{
              name: 'Care',
              id: 2,
              icon: <Check size={10} />,
              subCategories: [
                {
                  name: 'Hair',
                  id: 1,
                  icon: <LucideMove size={10} />,
                  category: 'care',
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CatrgoriesNav;
