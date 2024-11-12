import DesktopNavbar from './desktop-navbar/DesktopNavbar';
import MobileNavbar from './mobile-navbar/MobileNavbar';

const Navbar = () => {
  return (
    <nav className='bg-mainPrimaryColor text-white py-7'>
      <div className='container'>
        <div className='top-holer flex items-center justify-between md:block'>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
