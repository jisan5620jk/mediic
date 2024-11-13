import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Footer from '../Shared/Footer/Footer';
import Cursor from '../Shared/Cursor/Cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main = () => {
  window.onload = function () {
    AOS.init();
    AOS.refresh();
  };



  return (
    <>
      <HelmetChanger title={'Main Page'} />
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
