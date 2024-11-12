import ProductsList from './components/ProductsList';
import SearchBox from './components/SearchBox';

const Page = () => {
  return (
    <div className='container py-pageYPadding'>
      <SearchBox />
      <ProductsList />
    </div>
  );
};

export default Page;
