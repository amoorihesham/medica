import SectionTitle from '@/components/ui/SectionTitle';
import SeeMore from '@/components/ui/SeeMore';
import TopProductCard from '../../../components/ui/TopProductCard';

const TopProductsSection = () => {
  return (
    <section className='mb-5 container'>
      <div className='flex items-center justify-between'>
        <SectionTitle title='Top Products' />
        <SeeMore url='/products' />
      </div>
      <div className='flex gap-5 flex-nowrap overflow-auto scrollbar-hide py-5'>
        <TopProductCard />
        <TopProductCard />
      </div>
    </section>
  );
};

export default TopProductsSection;
