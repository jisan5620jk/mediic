import { Outlet } from 'react-router-dom';
import Navbar2 from '../Shared/Navbar/Navbar2';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Footer from '../Shared/Footer/Footer';
import Cursor from '../Shared/Cursor/Cursor';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main2 = () => {
  return (
    <>
      <HelmetChanger title={'Home Two'} />
      <Navbar2 />
      <Cursor />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main2;
