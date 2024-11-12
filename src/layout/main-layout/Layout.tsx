import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import BannersSlider from './components/BannersSlider';
import CatrgoriesNav from './components/CatrgoriesNav';
import AuthModal from '@/features/auth/components/AuthModal';

const Layout = () => {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <CatrgoriesNav />
      <BannersSlider />
      <AuthModal />
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
