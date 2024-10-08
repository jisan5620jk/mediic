import { Outlet } from 'react-router-dom';
import Navbar3 from '../Shared/Navbar/Navbar3';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';
import Footer3 from '../Shared/Footer/Footer3';
import Cursor from '../Shared/Cursor/Cursor';

const Main3 = () => {
  return (
    <>
      <Navbar3 />
      <Cursor />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer3 />
    </>
  );
};
export default Main3;
