import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Footer from '../Shared/Footer/Footer';
import Cursor from '../Shared/Cursor/Cursor';

const Main = () => {
  return (
    <>
      <Navbar />
      <Cursor />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main;
