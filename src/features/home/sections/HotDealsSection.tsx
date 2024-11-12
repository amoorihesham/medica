import HotDealProductCard from '@/components/ui/HotDealProductCard';
import SectionTitle from '@/components/ui/SectionTitle';
import SeeMore from '@/components/ui/SeeMore';

const HotDealsSection = () => {
  return (
    <section className='mb-5'>
      <div className='container'>
        <div className='flex items-center justify-between mb-5'>
          <SectionTitle title='Hot Deals' />
          <SeeMore url='/hot-deals' />
        </div>
      </div>
      <div className='flex gap-5 flex-nowrap overflow-auto scrollbar-hide'>
        <HotDealProductCard />
        <HotDealProductCard />
        <HotDealProductCard />
        <HotDealProductCard />
        <HotDealProductCard />
        <HotDealProductCard />
      </div>
    </section>
  );
};

export default HotDealsSection;
