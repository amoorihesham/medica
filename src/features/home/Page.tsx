import TopProductsSection from './sections/TopProductsSection';
import PartnersSection from './sections/PartnersSection';
import HotDealsSection from './sections/HotDealsSection';
import ShopCategoriesSection from './sections/ShopCategoriesSection';
import AuthModal from '../auth/components/AuthModal';

const Page = () => {
  const user = 'sd';
  return (
    <div className='py-pageYPadding'>
      {user && (
        <>
          <ShopCategoriesSection />
          <HotDealsSection />
          <PartnersSection />
        </>
      )}
      <TopProductsSection />
    </div>
  );
};

export default Page;
