import DrugBox from '../components/DrugBox';
import GomlaBox from '../components/GomlaBox';

const ShopCategoriesSection = () => {
  return (
    <div className='container'>
      <div className='flex flex-col md:flex-row gap-5 mb-5'>
        <DrugBox />
        <GomlaBox />
      </div>
    </div>
  );
};

export default ShopCategoriesSection;
