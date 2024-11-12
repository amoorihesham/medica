import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuGroup, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Category, subCategory } from '@/utils/types';

type CategoryItemProps = {
  category: Category;
};
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='outline-none ring-0 text-primaryLighter'>
          {category.icon}
          {category.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup className='flex items-center gap-2 flex-wrap'>
          {category.subCategories.map((subCategory: subCategory) => (
            <DropdownMenuItem key={subCategory.id}>
              {subCategory.icon}
              {subCategory.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryItem;
