import TopProductCard from '@/components/ui/TopProductCard';

const ProductsList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
      <TopProductCard />
      <TopProductCard />
      <TopProductCard />
      <TopProductCard />
      <TopProductCard />
    </div>
  );
};

export default ProductsList;
